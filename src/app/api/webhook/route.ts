import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { createServerClient } from '@supabase/ssr'

// Need raw body for webhook verification
export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  // If no webhook secret configured, still process (for dev)
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event: Stripe.Event

  try {
    if (webhookSecret && sig) {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } else {
      event = JSON.parse(body) as Stripe.Event
    }
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Create admin supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vtuddaatwfmzifkpbigs.supabase.co'
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  const supabase = createServerClient(supabaseUrl, supabaseServiceKey, {
    cookies: {
      getAll() { return [] },
      setAll() {},
    },
  })

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.supabase_user_id

      if (userId && session.subscription) {
        await supabase
          .from('profiles')
          .update({
            plan: 'pro',
            polar_customer_id: session.customer as string,
            polar_subscription_id: session.subscription as string,
          })
          .eq('id', userId)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const subId = subscription.id

      // Find profile by subscription ID and downgrade
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id')
        .eq('polar_subscription_id', subId)

      if (profiles && profiles.length > 0) {
        await supabase
          .from('profiles')
          .update({ plan: 'free', polar_subscription_id: null })
          .eq('id', profiles[0].id)
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      const subId = invoice.subscription as string

      if (subId) {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id')
          .eq('polar_subscription_id', subId)

        if (profiles && profiles.length > 0) {
          await supabase
            .from('profiles')
            .update({ plan: 'free' })
            .eq('id', profiles[0].id)
        }
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
