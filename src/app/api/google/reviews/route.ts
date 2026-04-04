import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getGoogleClient } from '@/lib/google'
import { createClient as createServiceClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

// POST: Fetch reviews from Google for a linked location
export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { location_id } = body

    if (!location_id) {
      return NextResponse.json({ error: 'location_id is required' }, { status: 400 })
    }

    // Get location with Google link
    const { data: location } = await supabase
      .from('locations')
      .select('*')
      .eq('id', location_id)
      .eq('user_id', user.id)
      .single()

    if (!location) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 })
    }

    if (!location.google_account_name) {
      return NextResponse.json(
        { error: 'This location is not linked to Google. Link it first.' },
        { status: 400 }
      )
    }

    // Get Google OAuth client
    const oauth2Client = await getGoogleClient(user.id)
    if (!oauth2Client) {
      return NextResponse.json(
        { error: 'Google connection expired. Please reconnect.' },
        { status: 400 }
      )
    }

    // Parse account name — google_account_name stores "accounts/123/locations/456"
    // We need the full path for the reviews endpoint
    const accountName = location.google_account_name

    // Fetch reviews from Google My Business API
    const reviewsRes = await fetch(
      `https://mybusiness.googleapis.com/v4/${accountName}/reviews?pageSize=50`,
      {
        headers: {
          Authorization: `Bearer ${oauth2Client.credentials.access_token}`,
        },
      }
    )

    if (!reviewsRes.ok) {
      const errText = await reviewsRes.text()
      console.error('Google reviews fetch error:', reviewsRes.status, errText)
      return NextResponse.json(
        { error: `Failed to fetch reviews from Google (${reviewsRes.status})` },
        { status: 500 }
      )
    }

    const reviewsData = await reviewsRes.json()
    const googleReviews = reviewsData.reviews || []

    if (googleReviews.length === 0) {
      return NextResponse.json({ fetched: 0, new: 0, message: 'No reviews found on Google.' })
    }

    // Admin client for inserting (bypasses RLS)
    const admin = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Check which reviews we already have
    const googleReviewIds = googleReviews.map((r: { reviewId: string }) => r.reviewId)
    const { data: existingReviews } = await admin
      .from('monitored_reviews')
      .select('google_review_id')
      .in('google_review_id', googleReviewIds)

    const existingIds = new Set((existingReviews || []).map(r => r.google_review_id))

    // Filter to only new reviews
    const newReviews = googleReviews.filter(
      (r: { reviewId: string }) => !existingIds.has(r.reviewId)
    )

    if (newReviews.length === 0) {
      return NextResponse.json({ fetched: googleReviews.length, new: 0, message: 'All reviews already synced.' })
    }

    // Get user profile for AI response generation
    const { data: profile } = await admin
      .from('profiles')
      .select('tone, custom_instructions')
      .eq('id', user.id)
      .single()

    const tone = profile?.tone || 'professional'
    const customInstructions = profile?.custom_instructions || ''

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    // Process each new review
    let insertedCount = 0

    for (const review of newReviews) {
      try {
        // Map Google star rating
        const ratingMap: Record<string, number> = {
          ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
        }
        const rating = ratingMap[review.starRating] || 3
        const reviewText = review.comment || '(No comment)'
        const reviewerName = review.reviewer?.displayName || 'Anonymous'
        const reviewDate = review.createTime || new Date().toISOString()

        // Generate AI response
        const systemPrompt = `You are a ${tone} business owner who personally responds to online reviews. You run a ${location.business_type} called "${location.business_name}".

Your job: write a reply to a customer review. Follow these rules strictly:

1. Reference SPECIFIC details from the review — names, dishes, services, experiences they mentioned.
2. Keep it 2-4 sentences. No essays.
3. Sound like a real human, not a corporate bot.
4. NEVER use these phrases: "We appreciate your valuable feedback", "Thank you for taking the time", "We strive to provide", "Your satisfaction is our priority", "We value your patronage".
5. Match the ${tone} tone.
6. For negative reviews (1-2 stars): Lead with genuine empathy. Acknowledge what went wrong. Offer to make it right.
7. For positive reviews (4-5 stars): Warm, specific thanks. Mention what they enjoyed.
8. For mixed reviews (3 stars): Acknowledge both good and bad. Be honest.
${customInstructions ? `9. Additional context: ${customInstructions}` : ''}

Write ONLY the response text. No quotes, no labels.`

        const message = await anthropic.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: systemPrompt,
          messages: [
            { role: 'user', content: `Review (${rating} star${rating !== 1 ? 's' : ''}):\n"${reviewText}"` },
          ],
        })

        const aiResponse = message.content[0].type === 'text' ? message.content[0].text : ''

        // Check if review already has a reply from the business
        const hasExistingReply = !!review.reviewReply?.comment
        const status = hasExistingReply ? 'posted' : 'pending'

        // Insert into monitored_reviews
        const { error: insertError } = await admin
          .from('monitored_reviews')
          .insert({
            location_id: location_id,
            user_id: user.id,
            reviewer_name: reviewerName,
            review_text: reviewText,
            review_rating: rating,
            review_date: reviewDate,
            ai_response: aiResponse,
            response_status: status,
            google_review_id: review.reviewId,
            posted_at: hasExistingReply ? new Date().toISOString() : null,
          })

        if (insertError) {
          console.error('Insert review error:', insertError)
          continue
        }

        insertedCount++
      } catch (reviewErr) {
        console.error('Error processing review:', review.reviewId, reviewErr)
        continue
      }
    }

    return NextResponse.json({
      fetched: googleReviews.length,
      new: insertedCount,
      message: `Synced ${insertedCount} new review${insertedCount !== 1 ? 's' : ''} from Google.`,
    })
  } catch (err) {
    console.error('Google reviews fetch error:', err)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}
