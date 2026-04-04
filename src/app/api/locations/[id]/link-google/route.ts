import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// POST: Link a Typani location to a Google Business location
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { google_account_name, google_place_id } = body

    if (!google_account_name) {
      return NextResponse.json({ error: 'google_account_name is required' }, { status: 400 })
    }

    // Verify location belongs to user
    const { data: location } = await supabase
      .from('locations')
      .select('id')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .single()

    if (!location) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 })
    }

    // Update with Google info
    const { data: updated, error } = await supabase
      .from('locations')
      .update({
        google_account_name: google_account_name,
        google_place_id: google_place_id || null,
      })
      .eq('id', params.id)
      .eq('user_id', user.id)
      .select()
      .single()

    if (error) {
      console.error('Link Google error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ location: updated })
  } catch (err) {
    console.error('Link Google error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE: Unlink Google from a location
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { error } = await supabase
      .from('locations')
      .update({ google_account_name: null, google_place_id: null })
      .eq('id', params.id)
      .eq('user_id', user.id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Unlink Google error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
