import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { sanitizeReviewText } from '@/lib/sanitize'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const reviewText = sanitizeReviewText(body.reviewText)
    const rating = typeof body.rating === 'number' ? Math.floor(body.rating) : 0

    if (!reviewText || reviewText.length === 0) {
      return NextResponse.json({ error: 'Review text is required' }, { status: 400 })
    }
    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
    }

    // Auth
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {
              // ignore
            }
          },
        },
      }
    )

    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    // Check usage reset
    const now = new Date()
    const resetAt = profile.usage_reset_at ? new Date(profile.usage_reset_at) : null
    if (resetAt && now >= resetAt) {
      const nextReset = new Date(now.getFullYear(), now.getMonth() + 1, 1)
      await supabase
        .from('profiles')
        .update({ monthly_usage: 0, usage_reset_at: nextReset.toISOString() })
        .eq('id', user.id)
      profile.monthly_usage = 0
    }

    // Check usage limits
    if (profile.plan === 'free' && profile.monthly_usage >= 5) {
      return NextResponse.json(
        { error: 'Monthly limit reached. Upgrade to Pro for unlimited responses.' },
        { status: 429 }
      )
    }

    // Determine sentiment
    let sentiment: string
    if (rating <= 2) sentiment = 'negative'
    else if (rating >= 4) sentiment = 'positive'
    else sentiment = 'mixed'

    const businessName = profile.business_name || 'our business'
    const businessType = profile.business_type || 'business'
    const tone = profile.tone || 'professional'
    const customInstructions = profile.custom_instructions || ''

    // Build prompt
    const systemPrompt = `You are a ${tone} business owner who personally responds to online reviews. You run a ${businessType} called "${businessName}".

Your job: write a reply to a customer review. Follow these rules strictly:

1. Reference SPECIFIC details from the review — names, dishes, services, experiences they mentioned.
2. Keep it 2-4 sentences. No essays.
3. Sound like a real human, not a corporate bot.
4. NEVER use these phrases: "We appreciate your valuable feedback", "Thank you for taking the time", "We strive to provide", "Your satisfaction is our priority", "We value your patronage".
5. Match the ${tone} tone — ${tone === 'professional' ? 'polished but warm' : tone === 'friendly' ? 'conversational and warm, like talking to a neighbor' : 'relaxed and natural, like texting a regular'}.
6. For negative reviews (1-2 stars): Lead with genuine empathy about their specific bad experience. Acknowledge what went wrong. Briefly offer to make it right. Invite them back.
7. For positive reviews (4-5 stars): Warm, specific thanks. Mention what they enjoyed. Make them feel like a regular, not just another customer.
8. For mixed reviews (3 stars): Acknowledge both the good and the bad. Be honest about the shortcomings. Highlight what you'll improve.
${customInstructions ? `9. Additional context from the owner: ${customInstructions}` : ''}

Write ONLY the response text. No quotes, no labels, no "Response:" prefix.`

    const userPrompt = `Review (${rating} star${rating !== 1 ? 's' : ''}):
"${reviewText.trim()}"`

    // Call Claude
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userPrompt },
      ],
    })

    const generatedResponse = message.content[0].type === 'text'
      ? message.content[0].text
      : ''

    if (!generatedResponse) {
      return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
    }

    // Save response
    await supabase.from('responses').insert({
      user_id: user.id,
      review_text: reviewText.trim(),
      review_rating: rating,
      review_sentiment: sentiment,
      generated_response: generatedResponse,
    })

    // Increment usage
    await supabase
      .from('profiles')
      .update({ monthly_usage: profile.monthly_usage + 1 })
      .eq('id', user.id)

    return NextResponse.json({ response: generatedResponse })
  } catch (err) {
    // Log full error server-side only — never expose to client
    console.error('Generate error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
