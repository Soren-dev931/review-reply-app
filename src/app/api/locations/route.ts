import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const PLAN_LIMITS: Record<string, number> = {
  free: 0,
  starter: 1,
  pro: 999,
}

export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: locations, error } = await supabase
      .from('locations')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Get review counts per location
    const locationIds = (locations || []).map(l => l.id)
    let reviewCounts: Record<string, number> = {}

    if (locationIds.length > 0) {
      const { data: counts } = await supabase
        .from('monitored_reviews')
        .select('location_id')
        .in('location_id', locationIds)

      if (counts) {
        reviewCounts = counts.reduce((acc: Record<string, number>, r) => {
          acc[r.location_id] = (acc[r.location_id] || 0) + 1
          return acc
        }, {})
      }
    }

    const locationsWithCounts = (locations || []).map(l => ({
      ...l,
      review_count: reviewCounts[l.id] || 0,
    }))

    return NextResponse.json({ locations: locationsWithCounts })
  } catch (err) {
    console.error('Locations GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check plan limits
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()

    const plan = profile?.plan || 'free'
    const maxLocations = PLAN_LIMITS[plan] ?? 0

    if (plan === 'free') {
      return NextResponse.json(
        { error: 'Upgrade to Starter or Pro to add locations.' },
        { status: 403 }
      )
    }

    const { count } = await supabase
      .from('locations')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)

    if ((count || 0) >= maxLocations) {
      return NextResponse.json(
        { error: `Your ${plan} plan allows up to ${maxLocations} location${maxLocations === 1 ? '' : 's'}. Upgrade to add more.` },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { business_name, business_type } = body

    if (!business_name || typeof business_name !== 'string' || !business_name.trim()) {
      return NextResponse.json({ error: 'Business name is required' }, { status: 400 })
    }

    const { data: location, error } = await supabase
      .from('locations')
      .insert({
        user_id: user.id,
        business_name: business_name.trim(),
        business_type: business_type || 'other',
      })
      .select()
      .single()

    if (error) {
      console.error('Create location error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ location })
  } catch (err) {
    console.error('Locations POST error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
