import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { exchangeCodeForTokens, createOAuth2Client } from '@/lib/google'
import { createClient as createServiceClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const error = searchParams.get('error')

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://typani.com'

    if (error) {
      console.error('Google OAuth error:', error)
      return NextResponse.redirect(`${appUrl}/app/settings?google=error&reason=${error}`)
    }

    if (!code) {
      return NextResponse.redirect(`${appUrl}/app/settings?google=error&reason=no_code`)
    }

    // Get current user
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.redirect(`${appUrl}/login?redirect=/app/settings`)
    }

    // Exchange code for tokens
    const tokens = await exchangeCodeForTokens(code)

    if (!tokens.access_token || !tokens.refresh_token) {
      console.error('Missing tokens from Google:', { hasAccess: !!tokens.access_token, hasRefresh: !!tokens.refresh_token })
      return NextResponse.redirect(`${appUrl}/app/settings?google=error&reason=missing_tokens`)
    }

    // Get Google user email
    const oauth2Client = createOAuth2Client()
    oauth2Client.setCredentials(tokens)

    const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    })
    const userInfo = userInfoRes.ok ? await userInfoRes.json() : { email: null, id: null }

    const expiresAt = tokens.expiry_date
      ? new Date(tokens.expiry_date).toISOString()
      : new Date(Date.now() + 3600 * 1000).toISOString()

    // Use admin client to bypass RLS for upsert
    const admin = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Upsert google connection
    const { error: upsertError } = await admin
      .from('google_connections')
      .upsert(
        {
          user_id: user.id,
          google_account_id: userInfo.id || null,
          google_email: userInfo.email || null,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          token_expires_at: expiresAt,
          scopes: tokens.scope || 'https://www.googleapis.com/auth/business.manage',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      )

    if (upsertError) {
      console.error('Failed to save Google connection:', upsertError)
      return NextResponse.redirect(`${appUrl}/app/settings?google=error&reason=save_failed`)
    }

    return NextResponse.redirect(`${appUrl}/app/settings?google=connected`)
  } catch (err) {
    console.error('Google OAuth callback error:', err)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://typani.com'
    return NextResponse.redirect(`${appUrl}/app/settings?google=error&reason=unknown`)
  }
}
