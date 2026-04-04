import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getGoogleClient } from '@/lib/google'

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

    const body = await request.json().catch(() => ({}))
    const editedResponse = body.edited_response
    const postToGoogle = body.post_to_google !== false // default true

    const updateData: Record<string, unknown> = {
      response_status: 'approved',
      approved_at: new Date().toISOString(),
    }

    if (editedResponse && typeof editedResponse === 'string' && editedResponse.trim()) {
      updateData.ai_response = editedResponse.trim()
    }

    const { data: review, error } = await supabase
      .from('monitored_reviews')
      .update(updateData)
      .eq('id', params.id)
      .eq('user_id', user.id)
      .select('*, locations(google_account_name)')
      .single()

    if (error) {
      console.error('Approve error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 })
    }

    // If review has a google_review_id and location is linked, try posting to Google
    let postedToGoogle = false
    let googleError: string | null = null

    if (
      postToGoogle &&
      review.google_review_id &&
      review.locations?.google_account_name
    ) {
      try {
        const oauth2Client = await getGoogleClient(user.id)
        if (oauth2Client) {
          const accountName = review.locations.google_account_name
          const responseText = editedResponse?.trim() || review.ai_response

          const replyRes = await fetch(
            `https://mybusiness.googleapis.com/v4/${accountName}/reviews/${review.google_review_id}/reply`,
            {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${oauth2Client.credentials.access_token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ comment: responseText }),
            }
          )

          if (replyRes.ok) {
            // Update to posted
            await supabase
              .from('monitored_reviews')
              .update({
                response_status: 'posted',
                posted_at: new Date().toISOString(),
              })
              .eq('id', params.id)
              .eq('user_id', user.id)

            postedToGoogle = true
          } else {
            const errText = await replyRes.text()
            console.error('Google reply post failed:', replyRes.status, errText)
            googleError = `Google reply failed (${replyRes.status}). Response saved as approved.`
          }
        }
      } catch (googleErr) {
        console.error('Google reply error:', googleErr)
        googleError = 'Failed to post reply to Google. Response saved as approved.'
      }
    }

    // Refetch the review after potential status update
    const { data: finalReview } = await supabase
      .from('monitored_reviews')
      .select('*')
      .eq('id', params.id)
      .single()

    return NextResponse.json({
      review: finalReview || review,
      postedToGoogle,
      googleError,
    })
  } catch (err) {
    console.error('Approve error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
