import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, number>()

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const real = request.headers.get('x-real-ip')
  if (real) return real
  return 'unknown'
}

export async function POST(request: Request) {
  try {
    const { reviewText, rating } = await request.json()

    if (!reviewText || typeof reviewText !== 'string' || reviewText.trim().length === 0) {
      return NextResponse.json({ error: 'Review text is required' }, { status: 400 })
    }
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
    }

    // Rate limit: 3 per IP per hour
    const ip = getClientIP(request)
    const now = Date.now()
    const windowMs = 60 * 60 * 1000 // 1 hour
    const key = `${ip}`

    // Clean up old entries periodically
    if (rateLimitMap.size > 10000) {
      rateLimitMap.clear()
    }

    const lastUse = rateLimitMap.get(key)
    if (lastUse && now - lastUse < windowMs / 3) {
      return NextResponse.json(
        { error: 'Demo is limited to a few tries per hour. Sign up free for 5 responses/month!' },
        { status: 429 }
      )
    }
    rateLimitMap.set(key, now)

    // Determine sentiment
    let sentiment: string
    if (rating <= 2) sentiment = 'negative'
    else if (rating >= 4) sentiment = 'positive'
    else sentiment = 'mixed'

    const systemPrompt = `You are a friendly restaurant owner named "The Owner" who personally responds to online reviews for your restaurant.

Write a reply to this customer review. Follow these rules strictly:

1. Reference SPECIFIC details from the review — names, dishes, services, experiences they mentioned.
2. Keep it 2-4 sentences. No essays.
3. Sound like a real human, not a corporate bot.
4. NEVER use these phrases: "We appreciate your valuable feedback", "Thank you for taking the time", "We strive to provide", "Your satisfaction is our priority", "We value your patronage".
5. Be warm and conversational — like a real restaurant owner who cares.
6. For negative reviews (1-2 stars): Lead with genuine empathy. Acknowledge what went wrong. Offer to make it right. Invite them back.
7. For positive reviews (4-5 stars): Warm, specific thanks. Mention what they enjoyed.
8. For mixed reviews (3 stars): Acknowledge both the good and the bad honestly.

Write ONLY the response text. No quotes, no labels, no prefix.`

    const userPrompt = `Review (${rating} star${rating !== 1 ? 's' : ''}):
"${reviewText.trim()}"`

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

    return NextResponse.json({ response: generatedResponse })
  } catch (err) {
    console.error('Demo error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
