import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getGoogleClient } from '@/lib/google'

// GET: Debug endpoint — shows raw Google API responses
export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
    }

    const oauth2Client = await getGoogleClient(user.id)
    if (!oauth2Client) {
      return NextResponse.json({ error: 'Google not connected' })
    }

    const token = oauth2Client.credentials.access_token

    // 1. List accounts
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const accountsData = await accountsRes.json()

    // 2. Try listing locations for each account
    const locationResults: Record<string, unknown> = {}
    const accounts = accountsData.accounts || []

    for (const account of accounts) {
      const name = account.name
      const locRes = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${name}/locations?readMask=name,title,storefrontAddress,metadata`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      locationResults[name] = await locRes.json()
    }

    return NextResponse.json({
      user_email: user.email,
      token_preview: token ? `${token.substring(0, 20)}...` : null,
      accounts_api: { status: accountsRes.status, data: accountsData },
      locations_api: locationResults,
      account_count: accounts.length,
    })
  } catch (err) {
    console.error('Debug error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
