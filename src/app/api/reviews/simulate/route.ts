import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import Anthropic from '@anthropic-ai/sdk'

const SAMPLE_REVIEWS = [
  { name: 'Sarah M.', rating: 5, text: 'Absolutely incredible experience! The staff was so welcoming and professional. Will definitely be coming back.' },
  { name: 'Mike T.', rating: 4, text: 'Great service overall. Food was delicious but we had to wait about 30 minutes for a table even with a reservation. Staff was apologetic though.' },
  { name: 'Jessica R.', rating: 3, text: 'It was okay. Nothing special. The prices are a bit high for what you get. Service was average.' },
  { name: 'David K.', rating: 2, text: 'Disappointed with my visit. Ordered the special and it was cold when it arrived. Server seemed overwhelmed and forgot our drinks twice.' },
  { name: 'Amanda L.', rating: 1, text: 'Terrible experience. Waited 45 minutes, food was wrong, and when we complained the manager was rude. Never coming back.' },
  { name: 'Chris B.', rating: 5, text: 'Best in town, hands down. Been coming here for years and the quality never drops. The new menu items are fantastic!' },
  { name: 'Rachel W.', rating: 4, text: 'Really enjoyed our visit. Clean, well-organized, and the team was knowledgeable. Only minor issue was parking.' },
  { name: 'Tom H.', rating: 2, text: 'Used to be great but quality has gone downhill. Last two visits have been mediocre at best. Sad to see.' },
  { name: 'Linda P.', rating: 5, text: 'Cannot recommend enough! From the moment we walked in, everything was perfect. Special shoutout to Jamie who went above and beyond.' },
  { name: 'Kevin D.', rating: 3, text: 'Decent spot. Good location and reasonable prices. Food is hit or miss though - some items are great, others are meh.' },
]

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const locationId = body.location_id

    if (!locationId) {
      return NextResponse.json({ error: 'location_id is required' }, { status: 400 })
    }

    // Verify location belongs to user
    const { data: location } = await supabase
      .from('locations')
      .select('*')
      .eq('id', locationId)
      .eq('user_id', user.id)
      .single()

    if (!location) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 })
    }

    // Pick a random review
    const sample = SAMPLE_REVIEWS[Math.floor(Math.random() * SAMPLE_REVIEWS.length)]

    // Get user profile for tone settings
    const { data: profile } = await supabase
      .from('profiles')
      .select('tone, custom_instructions')
      .eq('id', user.id)
      .single()

    const tone = profile?.tone || 'professional'
    const customInstructions = profile?.custom_instructions || ''

    let sentiment: string
    if (sample.rating <= 2) sentiment = 'negative'
    else if (sample.rating >= 4) sentiment = 'positive'
    else sentiment = 'mixed'

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

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: systemPrompt,
      messages: [
        { role: 'user', content: `Review (${sample.rating} star${sample.rating !== 1 ? 's' : ''}):\n"${sample.text}"` },
      ],
    })

    const aiResponse = message.content[0].type === 'text' ? message.content[0].text : ''

    // Save to monitored_reviews
    const { data: review, error } = await supabase
      .from('monitored_reviews')
      .insert({
        location_id: locationId,
        user_id: user.id,
        reviewer_name: sample.name,
        review_text: sample.text,
        review_rating: sample.rating,
        review_date: new Date().toISOString(),
        ai_response: aiResponse,
        response_status: 'pending',
      })
      .select()
      .single()

    if (error) {
      console.error('Insert review error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ review, sentiment })
  } catch (err) {
    console.error('Simulate error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
