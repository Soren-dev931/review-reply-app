# ReviewReply (working name) — AI Review Response Tool

## The Problem
Small business owners (restaurants, dentists, salons, etc.) get Google reviews weekly but:
- Don't respond at all (hurts Google ranking)
- Use canned copy-paste responses (customers notice, looks bad)
- Spend 15-30 min per review writing thoughtful responses

## The Solution
Paste a review → get a personalized, professional response in 10 seconds.
Not generic. Not AI slop. Responses that reference specific details from the review.

## Target Users
- Restaurant owners (highest review volume)
- Dentists/dental offices
- Salons/barbershops
- Auto repair shops
- Hotels/Airbnb hosts
- Any local service business with Google reviews

## Pricing
- **Free tier:** 5 responses/month (lead gen for SEO traffic)
- **Pro tier:** $49/month — unlimited responses, tone customization, response history, multi-location
- **Future:** $99/mo — Google Business Profile API integration, auto-detect new reviews, auto-respond with approval

## Core Features (MVP)
1. **Paste review → Get response** (the core loop)
   - Detects sentiment (positive/negative/mixed)
   - References specific details from the review
   - Matches business tone (professional, friendly, casual)
   - Handles negative reviews gracefully (empathetic, solution-oriented)
2. **Business profile setup**
   - Business name, type, key info
   - Response tone preference
   - Things to always mention (e.g., "we recently renovated", "new management")
3. **Response history**
   - Save all generated responses
   - Copy with one click
4. **Auth + billing**
   - Supabase auth (email/password + Google)
   - Stripe subscription ($49/mo Pro plan)

## Tech Stack
- **Frontend:** Next.js 14+, Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** Supabase (PostgreSQL + Auth)
- **AI:** Claude API (Sonnet for speed, cheap per response)
- **Billing:** Stripe
- **Hosting:** Vercel
- **Domain:** TBD

## Design Principles (from Sunny's video references)
- NOT generic AI slop — intentional, polished design
- Simple and focused — one screen does the core job
- Clean typography, good spacing, professional feel
- Mobile-friendly (business owners check reviews on phone)
- Fast — response should appear in < 3 seconds
- Show the value instantly — no long onboarding, paste and go

## SEO Strategy (the growth engine)
Target pages to build:
- "how to respond to negative Google review"
- "Google review response examples"
- "how to respond to 1 star review"
- "review response template [restaurant/dentist/salon/hotel]"
- "respond to positive Google review"
- "Google review response generator"
- "how to respond to fake Google review"
- "[business type] review response examples"
- 20+ long-tail pages targeting specific industries

## Pages/Routes
- `/` — Landing page (hero, demo, pricing, FAQ)
- `/app` — Main tool (paste review → get response)
- `/app/history` — Response history
- `/app/settings` — Business profile, tone, billing
- `/pricing` — Pricing page
- `/blog/[slug]` — SEO content pages
- `/login` — Auth
- `/signup` — Auth

## Database Schema (Supabase)
```sql
-- Users (extends Supabase auth)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  business_name TEXT,
  business_type TEXT,
  tone TEXT DEFAULT 'professional', -- professional, friendly, casual
  custom_instructions TEXT,
  plan TEXT DEFAULT 'free', -- free, pro
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  monthly_usage INT DEFAULT 0,
  usage_reset_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated responses
CREATE TABLE responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  review_text TEXT NOT NULL,
  review_rating INT, -- 1-5
  review_sentiment TEXT, -- positive, negative, mixed
  generated_response TEXT NOT NULL,
  was_copied BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;
```

## AI Prompt Strategy
The response quality IS the product. The prompt needs to:
1. Reference specific details from the review (names, dishes, experiences)
2. NOT use AI clichés ("We appreciate your valuable feedback")
3. Sound like a real business owner wrote it
4. For negative reviews: empathize first, explain if appropriate, invite back
5. For positive reviews: be warm, specific, not generic "thanks!"
6. Match the tone the business selected
7. Keep responses 2-4 sentences (not essays)

## What I Need From Sunny
1. GitHub repo (empty, I'll push code)
2. GitHub personal access token
3. Supabase project URL + anon key + service role key
4. Stripe API keys (publishable + secret)
5. Domain name (something like reviewreply.ai, replyai.co, etc.)

## Build Timeline
- **Night 1:** Core app — paste review, get response, auth, landing page
- **Night 2:** Billing (Stripe), usage limits, settings page, response history
- **Night 3:** Polish design, mobile responsive, SEO pages (first 5)
- **Night 4:** More SEO pages (10+), testing, deploy
- **Week 2+:** Write 20+ SEO blog pages, monitor traffic, iterate

## Revenue Target
- 400 users at $49/mo = $19,600/mo ≈ $20K
- At 3% conversion from free to paid: need ~13,300 free users
- At 1,000 organic visitors/day (realistic with 20+ SEO pages): ~30,000/mo
- Conversion math: 30,000 visitors → 1,500 signups (5%) → 45 paid (3%) → $2,205/mo
- Need to improve conversion OR increase traffic to hit $20K
- More realistic 90-day target: $2K-5K/mo MRR
