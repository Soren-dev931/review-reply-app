import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getGoogleAuthUrl } from '@/lib/google'
import { createClient as createServiceClient } from '@supabase/supabase-js'

// GET: Check Google connection status
export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const admin = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: connection } = await admin
      .from('google_connections')
      .select('google_email, created_at')
      .eq('user_id', user.id)
      .single()

    if (connection) {
      return NextResponse.json({
        connected: true,
        email: connection.google_email,
        connectedAt: connection.created_at,
      })
    }

    return NextResponse.json({ connected: false, email: null })
  } catch (err) {
    console.error('Google status check error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST: Get OAuth URL (redirect user to Google)
export async function POST() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = getGoogleAuthUrl(user.id)
    return NextResponse.json({ url })
  } catch (err) {
    console.error('Google auth URL error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE: Disconnect Google
export async function DELETE() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const admin = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Remove Google connection
    await admin
      .from('google_connections')
      .delete()
      .eq('user_id', user.id)

    // Clear google_account_name and google_place_id from all user's locations
    await admin
      .from('locations')
      .update({ google_account_name: null, google_place_id: null })
      .eq('user_id', user.id)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Google disconnect error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
