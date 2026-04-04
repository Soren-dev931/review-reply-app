import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getGoogleClient, getBusinessAccountId } from '@/lib/google'

// GET: Fetch user's Google Business Profile locations
export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const oauth2Client = await getGoogleClient(user.id)
    if (!oauth2Client) {
      return NextResponse.json(
        { error: 'Google not connected. Please connect your Google Business Profile first.' },
        { status: 400 }
      )
    }

    // Step 1: List accounts
    let accounts
    try {
      accounts = await getBusinessAccountId(oauth2Client)
    } catch (err) {
      console.error('Google accounts API error:', err)
      const errMsg = err instanceof Error ? err.message : String(err)
      return NextResponse.json(
        { error: `Google API error: ${errMsg}. Make sure "My Business Account Management API" is enabled in Google Cloud Console.`, locations: [] },
        { status: 500 }
      )
    }

    if (!accounts || accounts.length === 0) {
      return NextResponse.json({
        locations: [],
        message: 'No Google Business accounts found. Make sure you have a Google Business Profile.',
      })
    }

    // Step 2: List locations for each account
    const allLocations: Array<{
      accountName: string
      name: string
      title: string
      address: string
      placeId: string | null
    }> = []

    for (const account of accounts) {
      const accountName = account.name // e.g., "accounts/123456"

      const locRes = await fetch(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storefrontAddress,metadata`,
        {
          headers: {
            Authorization: `Bearer ${oauth2Client.credentials.access_token}`,
          },
        }
      )

      if (!locRes.ok) {
        const errText = await locRes.text()
        console.error(`Failed to fetch locations for ${accountName}: ${locRes.status}`, errText)
        // If it's a 403, the API isn't enabled
        if (locRes.status === 403) {
          return NextResponse.json(
            { error: 'Google Business Information API not enabled. Enable "My Business Business Information API" in Google Cloud Console.', locations: [] },
            { status: 500 }
          )
        }
        continue
      }

      const locData = await locRes.json()

      if (locData.locations) {
        for (const loc of locData.locations) {
          const addr = loc.storefrontAddress
          const addressStr = addr
            ? [addr.addressLines?.join(', '), addr.locality, addr.administrativeArea, addr.postalCode]
                .filter(Boolean)
                .join(', ')
            : 'No address'

          allLocations.push({
            accountName: accountName,
            name: loc.name, // e.g., "locations/789012"
            title: loc.title || 'Unnamed Location',
            address: addressStr,
            placeId: loc.metadata?.placeId || null,
          })
        }
      }
    }

    return NextResponse.json({ locations: allLocations })
  } catch (err) {
    console.error('Google locations fetch error:', err)
    return NextResponse.json({ error: 'Failed to fetch Google Business locations' }, { status: 500 })
  }
}
