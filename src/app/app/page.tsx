'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Response {
  id: string
  review_text: string
  review_rating: number
  generated_response: string
  created_at: string
}

interface Profile {
  plan: string
  monthly_usage: number
}

function StarRating({ rating, onRate }: { rating: number; onRate: (r: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          className={`text-3xl transition-colors ${
            star <= rating ? 'text-yellow-400' : 'text-navy-200 hover:text-yellow-300'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function AppDashboard() {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [responses, setResponses] = useState<Response[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    loadProfile()
    loadResponses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function loadProfile() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('profiles')
      .select('plan, monthly_usage')
      .eq('id', user.id)
      .single()
    if (data) setProfile(data)
  }

  async function loadResponses() {
    const { data } = await supabase
      .from('responses')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)
    if (data) setResponses(data)
  }

  async function handleGenerate() {
    if (!reviewText.trim()) {
      setError('Paste a review first.')
      return
    }
    if (rating === 0) {
      setError('Select a star rating.')
      return
    }
    setError('')
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewText, rating }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to generate')
      setResponse(data.response)
      loadProfile()
      loadResponses()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  function handleCopy(text: string, id?: string) {
    navigator.clipboard.writeText(text)
    if (id) {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } else {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const usageText = profile
    ? profile.plan === 'pro'
      ? 'Unlimited'
      : `${profile.monthly_usage} of 5 used`
    : '...'

  const atLimit = profile
    ? profile.plan === 'free' && profile.monthly_usage >= 5
    : false

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Generate Response</h1>
          <p className="text-navy-500 text-sm mt-1">Paste a review, get a response.</p>
        </div>
        <div className="text-right">
          <div className={`text-sm font-medium ${atLimit ? 'text-red-500' : 'text-navy-600'}`}>
            {usageText}
          </div>
          <div className="text-xs text-navy-400">
            {profile?.plan === 'pro' ? 'Pro plan' : 'Free plan'}
          </div>
        </div>
      </div>

      <div className="card p-6 sm:p-8 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Review text
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Paste the Google review here..."
              rows={5}
              className="input-field resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Star rating
            </label>
            <StarRating rating={rating} onRate={setRating} />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {atLimit && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              You&apos;ve used all 5 free responses this month.{' '}
              <a href="/app/settings" className="text-emerald-600 font-medium hover:underline">
                Upgrade to Pro
              </a>{' '}
              for unlimited responses.
            </div>
          )}
          <button
            onClick={handleGenerate}
            disabled={loading || atLimit}
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
              'Generate Response'
            )}
          </button>
          {response && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mt-4">
              <div className="flex items-start justify-between gap-4">
                <p className="text-navy-800 leading-relaxed">{response}</p>
                <button
                  onClick={() => handleCopy(response)}
                  className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent responses */}
      {responses.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Recent responses</h2>
          <div className="space-y-4">
            {responses.map((r) => (
              <div key={r.id} className="card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-yellow-400">
                        {'★'.repeat(r.review_rating)}{'☆'.repeat(5 - r.review_rating)}
                      </span>
                      <span className="text-xs text-navy-400">
                        {new Date(r.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-navy-500 mb-2 line-clamp-2">{r.review_text}</p>
                    <p className="text-sm text-navy-800">{r.generated_response}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(r.generated_response, r.id)}
                    className="shrink-0 text-navy-400 hover:text-emerald-600 text-sm font-medium transition-colors"
                  >
                    {copiedId === r.id ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
