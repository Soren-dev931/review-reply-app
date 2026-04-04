'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Location {
  business_name: string
  business_type: string
}

interface Review {
  id: string
  location_id: string
  reviewer_name: string
  review_text: string
  review_rating: number
  review_date: string
  ai_response: string
  response_status: string
  approved_at: string | null
  posted_at: string | null
  created_at: string
  locations: Location
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800',
  approved: 'bg-emerald-100 text-emerald-800',
  posted: 'bg-blue-100 text-blue-800',
  skipped: 'bg-navy-100 text-navy-500',
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [locations, setLocations] = useState<{ id: string; business_name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const fetchReviews = useCallback(async () => {
    const params = new URLSearchParams()
    if (statusFilter !== 'all') params.set('status', statusFilter)
    if (locationFilter) params.set('location_id', locationFilter)
    if (ratingFilter) params.set('rating', ratingFilter)

    const res = await fetch(`/api/reviews?${params}`)
    const data = await res.json()
    if (data.reviews) setReviews(data.reviews)
    setLoading(false)
  }, [statusFilter, locationFilter, ratingFilter])

  useEffect(() => {
    fetchReviews()
    fetchLocations()
  }, [fetchReviews])

  async function fetchLocations() {
    const res = await fetch('/api/locations')
    const data = await res.json()
    if (data.locations) setLocations(data.locations)
  }

  async function handleApprove(id: string, editedResponse?: string) {
    setActionLoading(id)
    const body: Record<string, string> = {}
    if (editedResponse) body.edited_response = editedResponse

    await fetch(`/api/reviews/${id}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    setEditingId(null)
    setEditText('')
    await fetchReviews()
    setActionLoading(null)
  }

  async function handleSkip(id: string) {
    setActionLoading(id)
    await fetch(`/api/reviews/${id}/skip`, { method: 'POST' })
    await fetchReviews()
    setActionLoading(null)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-navy-400">Loading reviews...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Reviews</h1>
          <p className="text-navy-500 text-sm mt-1">Monitor and respond to reviews across all locations.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="input-field !w-auto text-sm"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="posted">Posted</option>
          <option value="skipped">Skipped</option>
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="input-field !w-auto text-sm"
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>{l.business_name}</option>
          ))}
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="input-field !w-auto text-sm"
        >
          <option value="">All Ratings</option>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{'★'.repeat(r)} ({r} star{r !== 1 ? 's' : ''})</option>
          ))}
        </select>
      </div>

      {/* Reviews List */}
      {reviews.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">No reviews yet</h3>
          <p className="text-navy-500 text-sm mb-6">
            Reviews will appear here once your Google Business Profile is connected.
            <br />In the meantime, you can simulate test reviews from the Locations page.
          </p>
          <a href="/app/locations" className="btn-primary inline-block">
            Manage Locations
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-medium text-navy-900 text-sm">{review.reviewer_name}</span>
                    <span className="text-sm text-yellow-400">
                      {'★'.repeat(review.review_rating)}{'☆'.repeat(5 - review.review_rating)}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[review.response_status]}`}>
                      {review.response_status}
                    </span>
                    {review.locations && (
                      <span className="text-xs text-navy-400">• {review.locations.business_name}</span>
                    )}
                    <span className="text-xs text-navy-400">
                      • {new Date(review.review_date).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-navy-600 mb-3">&ldquo;{review.review_text}&rdquo;</p>

                  {/* AI Response */}
                  {review.ai_response && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-3">
                      <p className="text-xs font-medium text-emerald-700 mb-1">AI Response:</p>

                      {editingId === review.id ? (
                        <div className="space-y-2">
                          <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="input-field text-sm resize-none"
                            rows={3}
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleApprove(review.id, editText)}
                              disabled={actionLoading === review.id}
                              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
                            >
                              {actionLoading === review.id ? 'Saving...' : 'Save & Approve'}
                            </button>
                            <button
                              onClick={() => { setEditingId(null); setEditText('') }}
                              className="text-navy-500 hover:text-navy-700 text-xs font-medium px-3 py-1.5"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-navy-800">{review.ai_response}</p>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  {review.response_status === 'pending' && editingId !== review.id && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(review.id)}
                        disabled={actionLoading === review.id}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
                      >
                        {actionLoading === review.id ? '...' : '✓ Approve & Post'}
                      </button>
                      <button
                        onClick={() => { setEditingId(review.id); setEditText(review.ai_response || '') }}
                        className="bg-navy-100 hover:bg-navy-200 text-navy-700 text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
                      >
                        ✏️ Edit & Approve
                      </button>
                      <button
                        onClick={() => handleSkip(review.id)}
                        disabled={actionLoading === review.id}
                        className="text-navy-400 hover:text-navy-600 text-xs font-medium px-3 py-1.5 transition-colors"
                      >
                        Skip
                      </button>
                    </div>
                  )}
                  {review.response_status === 'posted' && review.posted_at && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-emerald-600 font-medium">✓ Posted to Google</span>
                      <span className="text-xs text-navy-400">
                        {new Date(review.posted_at).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
