import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const locationId = searchParams.get('location_id')
    const rating = searchParams.get('rating')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = (page - 1) * limit

    let query = supabase
      .from('monitored_reviews')
      .select('*, locations(business_name, business_type)', { count: 'exact' })
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status && status !== 'all') {
      query = query.eq('response_status', status)
    }
    if (locationId) {
      query = query.eq('location_id', locationId)
    }
    if (rating) {
      query = query.eq('review_rating', parseInt(rating))
    }

    const { data: reviews, count, error } = await query

    if (error) {
      console.error('Fetch reviews error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      reviews: reviews || [],
      total: count || 0,
      page,
      limit,
    })
  } catch (err) {
    console.error('Reviews GET error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
