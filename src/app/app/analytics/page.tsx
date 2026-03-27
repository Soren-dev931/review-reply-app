'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Stats {
  totalReviews: number
  responded: number
  avgResponseTime: string
  responseRate: string
  ratingDistribution: number[]
  weeklyVolume: { label: string; count: number }[]
}

function BarChart({ data, maxHeight = 120 }: { data: { label: string; count: number }[]; maxHeight?: number }) {
  const max = Math.max(...data.map(d => d.count), 1)
  return (
    <div className="flex items-end gap-2 justify-between">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center flex-1">
          <span className="text-xs text-navy-500 mb-1">{d.count}</span>
          <div
            className="w-full bg-emerald-400 rounded-t-sm min-h-[4px] transition-all"
            style={{ height: `${Math.max((d.count / max) * maxHeight, 4)}px` }}
          />
          <span className="text-xs text-navy-400 mt-1">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-navy-600 w-12">{stars} star</span>
      <div className="flex-1 bg-navy-100 rounded-full h-2.5">
        <div className="bg-yellow-400 rounded-full h-2.5 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm text-navy-500 w-8 text-right">{count}</span>
    </div>
  )
}

export default function AnalyticsPage() {
  const [plan, setPlan] = useState('free')
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: profile } = await supabase.from('profiles').select('plan').eq('id', user.id).single()
      const currentPlan = profile?.plan || 'free'
      setPlan(currentPlan)

      // Fetch real stats from monitored_reviews
      const { data: reviews } = await supabase
        .from('monitored_reviews')
        .select('review_rating, response_status, review_date, approved_at, created_at')
        .eq('user_id', user.id)

      if (reviews && reviews.length > 0) {
        const totalReviews = reviews.length
        const responded = reviews.filter(r => r.response_status === 'approved' || r.response_status === 'posted').length

        // Avg response time (review_date to approved_at)
        const responseTimes = reviews
          .filter(r => r.approved_at && r.review_date)
          .map(r => new Date(r.approved_at!).getTime() - new Date(r.review_date).getTime())

        let avgResponseTime = 'N/A'
        if (responseTimes.length > 0) {
          const avgMs = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
          const avgHours = Math.round(avgMs / (1000 * 60 * 60))
          avgResponseTime = avgHours < 1 ? '< 1 hour' : `${avgHours} hours`
        }

        // Rating distribution
        const ratingDistribution = [0, 0, 0, 0, 0]
        reviews.forEach(r => { ratingDistribution[r.review_rating - 1]++ })

        // Weekly volume (last 4 weeks)
        const now = new Date()
        const weeklyVolume = []
        for (let i = 3; i >= 0; i--) {
          const weekStart = new Date(now.getTime() - (i + 1) * 7 * 24 * 60 * 60 * 1000)
          const weekEnd = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000)
          const count = reviews.filter(r => {
            const d = new Date(r.review_date)
            return d >= weekStart && d < weekEnd
          }).length
          weeklyVolume.push({
            label: `W${4 - i}`,
            count,
          })
        }

        setStats({
          totalReviews,
          responded,
          avgResponseTime,
          responseRate: totalReviews > 0 ? `${Math.round((responded / totalReviews) * 100)}%` : '0%',
          ratingDistribution,
          weeklyVolume,
        })
      } else {
        // Sample data for demo
        setStats({
          totalReviews: 0,
          responded: 0,
          avgResponseTime: 'N/A',
          responseRate: '0%',
          ratingDistribution: [0, 0, 0, 0, 0],
          weeklyVolume: [
            { label: 'W1', count: 0 },
            { label: 'W2', count: 0 },
            { label: 'W3', count: 0 },
            { label: 'W4', count: 0 },
          ],
        })
      }

      setLoading(false)
    }
    load()
  }, [supabase])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-navy-400">Loading analytics...</div>
      </div>
    )
  }

  // Lock analytics for free/starter
  if (plan !== 'pro') {
    return (
      <div>
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Analytics</h1>
        <p className="text-navy-500 text-sm mb-8">Track review trends and response performance.</p>

        <div className="relative">
          {/* Blurred preview */}
          <div className="filter blur-sm pointer-events-none opacity-60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['Total Reviews', 'Response Rate', 'Avg Response Time', 'Responded'].map((label) => (
                <div key={label} className="card p-5">
                  <p className="text-xs text-navy-500 mb-1">{label}</p>
                  <p className="text-2xl font-bold text-navy-900">--</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 h-48" />
              <div className="card p-6 h-48" />
            </div>
          </div>

          {/* Upgrade overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Pro Feature</h3>
              <p className="text-navy-500 text-sm mb-6">
                Analytics dashboard is available on the Pro plan. Track response times, review trends, and more.
              </p>
              <a href="/app/settings" className="btn-primary inline-block">
                Upgrade to Pro — $79/mo
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-2">Analytics</h1>
      <p className="text-navy-500 text-sm mb-8">Track review trends and response performance.</p>

      {stats && stats.totalReviews === 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            📊 Live data will appear once you have reviews. Simulate some from the{' '}
            <a href="/app/locations" className="underline font-medium">Locations page</a> to see analytics in action.
          </p>
        </div>
      )}

      {stats && (
        <>
          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-5">
              <p className="text-xs text-navy-500 mb-1">Total Reviews</p>
              <p className="text-2xl font-bold text-navy-900">{stats.totalReviews}</p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-navy-500 mb-1">Response Rate</p>
              <p className="text-2xl font-bold text-emerald-600">{stats.responseRate}</p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-navy-500 mb-1">Avg Response Time</p>
              <p className="text-2xl font-bold text-navy-900">{stats.avgResponseTime}</p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-navy-500 mb-1">Responded</p>
              <p className="text-2xl font-bold text-navy-900">{stats.responded}</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold text-navy-900 mb-4">Review Volume (Last 4 Weeks)</h3>
              <BarChart data={stats.weeklyVolume} />
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-navy-900 mb-4">Rating Distribution</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <RatingBar
                    key={stars}
                    stars={stars}
                    count={stats.ratingDistribution[stars - 1]}
                    total={stats.totalReviews}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
