import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

const PLANS = {
  starter: {
    name: 'Reviewly Starter',
    description: '1 location, 50 AI responses/mo, auto-monitor, email alerts',
    monthly: 2900, // $29
    annual: 27800, // $278/yr (20% off)
  },
  pro: {
    name: 'Reviewly Pro',
    description: 'Unlimited locations & responses, auto-post, analytics, custom brand voice',
    monthly: 7900, // $79
    annual: 75800, // $758/yr (20% off)
  },
} as const

type PlanKey = keyof typeof PLANS

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const body = await request.json()
    const plan = (body.plan || 'starter') as PlanKey
    const period = body.period || 'monthly'

    if (!PLANS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }
    if (period !== 'monthly' && period !== 'annual') {
      return NextResponse.json({ error: 'Invalid billing period' }, { status: 400 })
    }

    const planConfig = PLANS[plan]

    // Get or create Stripe customer
    const { data: profile } = await supabase
      .from('profiles')
      .select('polar_customer_id')
      .eq('id', user.id)
      .single()

    let customerId = profile?.polar_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      })
      customerId = customer.id

      await supabase
        .from('profiles')
        .update({ polar_customer_id: customerId })
        .eq('id', user.id)
    }

    const isAnnual = period === 'annual'

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: planConfig.name,
              description: planConfig.description,
            },
            unit_amount: isAnnual ? planConfig.annual : planConfig.monthly,
            recurring: {
              interval: isAnnual ? 'year' : 'month',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://thereviewly.io'}/app?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://thereviewly.io'}/app/settings`,
      metadata: {
        supabase_user_id: user.id,
        plan,
        billing_period: period,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
