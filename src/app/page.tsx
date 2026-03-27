'use client'

import { useState } from 'react'

function StarRating({ rating, onRate }: { rating: number; onRate: (r: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRate(star)}
          className={`text-2xl transition-colors ${
            star <= rating ? 'text-yellow-400' : 'text-navy-200'
          } hover:text-yellow-400`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function LiveDemo() {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleGenerate() {
    if (!reviewText.trim() || rating === 0) {
      setError('Paste a review and select a star rating.')
      return
    }
    setError('')
    setLoading(true)
    setResponse('')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewText, rating }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setResponse(data.response)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to generate response'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Paste a Google review
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="e.g. &quot;The pasta was incredible but we waited 45 minutes for a table. Our server Mike was great though...&quot;"
            rows={4}
            className="input-field resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Star rating
          </label>
          <StarRating rating={rating} onRate={setRating} />
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generating...
            </span>
          ) : (
            'Generate Response — Free'
          )}
        </button>
        {response && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-navy-800 text-sm leading-relaxed">{response}</p>
              <button
                onClick={handleCopy}
                className="shrink-0 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PricingSection() {
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly')
  const isAnnual = period === 'annual'

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Simple pricing</h2>
        <p className="text-navy-500 text-center mb-6">Start free. Upgrade when you need more.</p>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm border border-navy-100">
            <button
              onClick={() => setPeriod('monthly')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                !isAnnual ? 'bg-navy-900 text-white' : 'text-navy-500 hover:text-navy-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('annual')}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                isAnnual ? 'bg-navy-900 text-white' : 'text-navy-500 hover:text-navy-700'
              }`}
            >
              Annual
              <span className="ml-1.5 text-emerald-500 font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <div className="card p-7">
            <h3 className="text-lg font-semibold text-navy-600">Free</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-navy-400">/month</span>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                '5 manual responses/mo',
                'All business types',
                'Copy with one click',
                'Professional tone',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/signup" className="btn-outline w-full text-center mt-8 block">
              Get Started
            </a>
          </div>

          {/* Starter */}
          <div className="card p-7">
            <h3 className="text-lg font-semibold text-navy-600">Starter</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold">${isAnnual ? '23' : '29'}</span>
              <span className="text-navy-400">/month</span>
              {isAnnual && <div className="text-sm text-emerald-600 font-medium mt-1">$278 billed annually</div>}
            </div>
            <ul className="space-y-3 text-sm">
              {[
                '1 business location',
                '50 AI responses/mo',
                'Auto-monitor reviews',
                'AI draft + approve flow',
                'Email alerts',
                'Tone customization',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/signup" className="btn-primary w-full text-center mt-8 block">
              Start Free Trial
            </a>
          </div>

          {/* Pro */}
          <div className="card p-7 border-2 border-emerald-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            <h3 className="text-lg font-semibold text-navy-600">Pro</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-extrabold">${isAnnual ? '63' : '79'}</span>
              <span className="text-navy-400">/month</span>
              {isAnnual && <div className="text-sm text-emerald-600 font-medium mt-1">$758 billed annually</div>}
            </div>
            <ul className="space-y-3 text-sm">
              {[
                'Unlimited locations',
                'Unlimited AI responses',
                'Auto-post to Google',
                'Full analytics dashboard',
                'Custom brand voice',
                'Priority support',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/signup" className="btn-primary w-full text-center mt-8 block">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: 'How is this different from ChatGPT?',
    a: 'We built prompts specifically for review responses. The output references details from the actual review, matches your business tone, and avoids generic AI phrases. You paste, click, copy — done in 10 seconds.',
  },
  {
    q: 'Will responses sound like AI wrote them?',
    a: 'No. We specifically trained the output to avoid "We appreciate your valuable feedback" style clichés. Responses reference specific things the reviewer mentioned and match your chosen tone.',
  },
  {
    q: 'How does auto-monitoring work?',
    a: 'Connect your Google Business Profile and we check for new reviews every few hours. When one comes in, AI drafts a personalized response and you approve it with one click. On the Pro plan, you can enable auto-post to skip the approval step entirely.',
  },
  {
    q: 'Can I customize the tone?',
    a: 'Yes. Choose from professional, friendly, or casual. On the Pro plan, you can set a custom brand voice with specific instructions for how responses should sound.',
  },
  {
    q: 'What types of businesses does this work for?',
    a: 'Restaurants, dental offices, salons, auto repair shops, hotels, Airbnbs, medical practices, law firms — any local business that gets Google reviews.',
  },
  {
    q: 'What\'s the difference between Starter and Pro?',
    a: 'Starter gives you 1 location and 50 AI responses per month with manual approval. Pro gives you unlimited locations and responses, auto-post to Google, full analytics, and custom brand voice. Both include auto-monitoring and email alerts.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes! Save 20% with annual billing — Starter is $23/mo ($278/year) and Pro is $63/mo ($758/year).',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-6">
            AI-powered review responses in 10 seconds
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Stop ignoring
            <br />
            <span className="text-emerald-400">your reviews.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Every unanswered Google review is a missed customer. Generate thoughtful, personalized responses in 10 seconds — not 15 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/signup" className="btn-primary text-lg !px-8 !py-4">
              Start Free — 5 Responses/Month
            </a>
            <a href="#demo" className="btn-outline !border-navy-600 !text-navy-300 hover:!text-white hover:!border-emerald-500 text-lg !px-8 !py-4">
              Try the Demo ↓
            </a>
          </div>
          <p className="mt-4 text-navy-500 text-sm">No credit card required</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Three steps. Ten seconds.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Paste the review', desc: 'Copy any Google review and paste it in.' },
              { step: '2', title: 'Click generate', desc: 'AI writes a response that references specific details from the review.' },
              { step: '3', title: 'Copy & reply', desc: 'Paste the response into Google. Done.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Try it right now</h2>
          <p className="text-navy-500 text-center mb-8 max-w-lg mx-auto">
            Paste a real review below and see the quality for yourself. No signup needed.
          </p>
          <LiveDemo />
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-navy-100 pb-6">
                <h3 className="font-semibold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your next review is waiting.
          </h2>
          <p className="text-navy-300 mb-8 max-w-lg mx-auto">
            Join hundreds of business owners who respond to every review — without spending hours writing them.
          </p>
          <a href="/signup" className="btn-primary text-lg !px-8 !py-4">
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  )
}
