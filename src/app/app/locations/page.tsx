'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

interface LocationData {
  id: string
  business_name: string
  business_type: string
  is_active: boolean
  google_place_id: string | null
  google_account_name: string | null
  review_count: number
  created_at: string
}

interface GoogleLocation {
  accountName: string
  name: string
  title: string
  address: string
  placeId: string | null
}

const BUSINESS_TYPES = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'dental', label: 'Dental Office' },
  { value: 'salon', label: 'Salon / Barbershop' },
  { value: 'auto_repair', label: 'Auto Repair' },
  { value: 'hotel', label: 'Hotel / Airbnb' },
  { value: 'medical', label: 'Medical Practice' },
  { value: 'law_firm', label: 'Law Firm' },
  { value: 'gym', label: 'Gym / Fitness' },
  { value: 'spa', label: 'Spa / Wellness' },
  { value: 'veterinary', label: 'Veterinary' },
  { value: 'other', label: 'Other' },
]

export default function LocationsPage() {
  const [locations, setLocations] = useState<LocationData[]>([])
  const [loading, setLoading] = useState(true)
  const [plan, setPlan] = useState('free')
  const [showForm, setShowForm] = useState(false)
  const [formName, setFormName] = useState('')
  const [formType, setFormType] = useState('restaurant')
  const [formError, setFormError] = useState('')
  const [formLoading, setFormLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editType, setEditType] = useState('')
  const [simulateLoading, setSimulateLoading] = useState<string | null>(null)
  const [simulateResult, setSimulateResult] = useState('')

  // Google integration state
  const [googleConnected, setGoogleConnected] = useState(false)
  const [linkingId, setLinkingId] = useState<string | null>(null)
  const [googleLocations, setGoogleLocations] = useState<GoogleLocation[]>([])
  const [googleLocsLoading, setGoogleLocsLoading] = useState(false)
  const [googleLocsError, setGoogleLocsError] = useState('')
  const [syncingId, setSyncingId] = useState<string | null>(null)
  const [syncResult, setSyncResult] = useState('')

  const supabase = createClient()

  useEffect(() => {
    fetchLocations()
    fetchPlan()
    checkGoogleConnection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function checkGoogleConnection() {
    try {
      const res = await fetch('/api/auth/google')
      const data = await res.json()
      setGoogleConnected(data.connected || false)
    } catch {
      // ignore
    }
  }

  async function fetchPlan() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase.from('profiles').select('plan').eq('id', user.id).single()
    if (data) setPlan(data.plan || 'free')
  }

  async function fetchLocations() {
    const res = await fetch('/api/locations')
    const data = await res.json()
    if (data.locations) setLocations(data.locations)
    setLoading(false)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!formName.trim()) { setFormError('Business name is required'); return }

    setFormLoading(true)
    setFormError('')

    const res = await fetch('/api/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ business_name: formName, business_type: formType }),
    })
    const data = await res.json()

    if (!res.ok) {
      setFormError(data.error || 'Failed to add location')
      setFormLoading(false)
      return
    }

    setFormName('')
    setFormType('restaurant')
    setShowForm(false)
    setFormLoading(false)
    await fetchLocations()
  }

  async function handleUpdate(id: string) {
    await fetch(`/api/locations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ business_name: editName, business_type: editType }),
    })
    setEditingId(null)
    await fetchLocations()
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this location and all its reviews?')) return
    await fetch(`/api/locations/${id}`, { method: 'DELETE' })
    await fetchLocations()
  }

  async function handleSimulate(locationId: string) {
    setSimulateLoading(locationId)
    setSimulateResult('')

    const res = await fetch('/api/reviews/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location_id: locationId }),
    })
    const data = await res.json()

    if (res.ok && data.review) {
      setSimulateResult(`Simulated a ${data.review.review_rating}-star review from "${data.review.reviewer_name}". Check the Reviews page!`)
      await fetchLocations()
    } else {
      setSimulateResult(data.error || 'Failed to simulate review')
    }
    setSimulateLoading(null)
  }

  // Google linking functions
  async function openLinkPicker(locationId: string) {
    setLinkingId(locationId)
    setGoogleLocsError('')

    if (googleLocations.length === 0) {
      setGoogleLocsLoading(true)
      try {
        const res = await fetch('/api/google/locations')
        const data = await res.json()
        if (data.locations) {
          setGoogleLocations(data.locations)
        } else {
          setGoogleLocsError(data.error || data.message || 'No Google locations found')
        }
      } catch {
        setGoogleLocsError('Failed to fetch Google locations')
      }
      setGoogleLocsLoading(false)
    }
  }

  async function handleLinkGoogle(locationId: string, googleLoc: GoogleLocation) {
    try {
      const fullName = `${googleLoc.accountName}/${googleLoc.name}`
      const res = await fetch(`/api/locations/${locationId}/link-google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          google_account_name: fullName,
          google_place_id: googleLoc.placeId,
        }),
      })

      if (res.ok) {
        setLinkingId(null)
        await fetchLocations()
      } else {
        const data = await res.json()
        setGoogleLocsError(data.error || 'Failed to link')
      }
    } catch {
      setGoogleLocsError('Failed to link Google location')
    }
  }

  async function handleUnlinkGoogle(locationId: string) {
    if (!confirm('Unlink this Google Business location?')) return
    await fetch(`/api/locations/${locationId}/link-google`, { method: 'DELETE' })
    await fetchLocations()
  }

  async function handleSyncReviews(locationId: string) {
    setSyncingId(locationId)
    setSyncResult('')

    try {
      const res = await fetch('/api/google/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location_id: locationId }),
      })
      const data = await res.json()

      if (res.ok) {
        setSyncResult(data.message || `Synced ${data.new} new reviews`)
        await fetchLocations()
      } else {
        setSyncResult(data.error || 'Failed to sync reviews')
      }
    } catch {
      setSyncResult('Failed to sync reviews')
    }
    setSyncingId(null)
  }

  const maxLocations = plan === 'pro' ? 999 : plan === 'starter' ? 1 : 0
  const canAdd = locations.length < maxLocations

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-navy-400">Loading locations...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Locations</h1>
          <p className="text-navy-500 text-sm mt-1">Manage your monitored business locations.</p>
        </div>
        {plan !== 'free' && canAdd && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary text-sm"
          >
            + Add Location
          </button>
        )}
      </div>

      {/* Upgrade prompt for free users */}
      {plan === 'free' && (
        <div className="card p-8 text-center mb-8">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Upgrade to monitor locations</h3>
          <p className="text-navy-500 text-sm mb-6">
            Connect your business locations to automatically monitor and respond to Google reviews.
          </p>
          <a href="/app/settings" className="btn-primary inline-block">
            View Plans
          </a>
        </div>
      )}

      {/* Add form */}
      {showForm && (
        <form onSubmit={handleAdd} className="card p-6 mb-6">
          <h3 className="font-semibold text-navy-900 mb-4">Add Location</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5">Business name</label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="input-field"
                placeholder="e.g. Mario's Italian Kitchen"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5">Business type</label>
              <select value={formType} onChange={(e) => setFormType(e.target.value)} className="input-field">
                {BUSINESS_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>

          {!googleConnected && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <p className="text-blue-800 text-xs">
                💡 <strong>Tip:</strong> <a href="/app/settings" className="underline font-medium">Connect your Google Business Profile</a> to automatically sync reviews after adding a location.
              </p>
            </div>
          )}

          {formError && <p className="text-red-500 text-sm mb-3">{formError}</p>}

          <div className="flex gap-2">
            <button type="submit" disabled={formLoading} className="btn-primary text-sm disabled:opacity-50">
              {formLoading ? 'Adding...' : 'Add Location'}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="btn-outline text-sm">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Simulate/sync result */}
      {(simulateResult || syncResult) && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-emerald-800 text-sm">{simulateResult || syncResult}</p>
            <button onClick={() => { setSimulateResult(''); setSyncResult('') }} className="text-emerald-600 text-sm">✕</button>
          </div>
        </div>
      )}

      {/* Google link picker modal */}
      {linkingId && (
        <div className="card p-6 mb-6 border-2 border-emerald-200">
          <h3 className="font-semibold text-navy-900 mb-2">Link Google Business Location</h3>
          <p className="text-navy-500 text-xs mb-4">Select which Google Business location to connect.</p>

          {googleLocsLoading ? (
            <div className="text-navy-400 text-sm py-4">Loading your Google Business locations...</div>
          ) : googleLocsError ? (
            <div className="text-red-500 text-sm py-2">{googleLocsError}</div>
          ) : googleLocations.length === 0 ? (
            <div className="text-navy-500 text-sm py-2">No Google Business locations found. Make sure your Google account has a Business Profile.</div>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {googleLocations.map((gl) => (
                <button
                  key={`${gl.accountName}/${gl.name}`}
                  onClick={() => handleLinkGoogle(linkingId, gl)}
                  className="w-full text-left p-3 rounded-lg border border-navy-100 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <p className="font-medium text-navy-900 text-sm">{gl.title}</p>
                  <p className="text-navy-500 text-xs">{gl.address}</p>
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => setLinkingId(null)}
            className="btn-outline text-sm mt-4"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Locations list */}
      {plan !== 'free' && locations.length === 0 && !showForm && (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-4">🏪</div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">No locations yet</h3>
          <p className="text-navy-500 text-sm mb-6">Add your first business location to start monitoring reviews.</p>
          <button onClick={() => setShowForm(true)} className="btn-primary inline-block">
            + Add Your First Location
          </button>
        </div>
      )}

      <div className="space-y-4">
        {locations.map((loc) => (
          <div key={loc.id} className="card p-5">
            {editingId === loc.id ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="input-field text-sm"
                />
                <select value={editType} onChange={(e) => setEditType(e.target.value)} className="input-field text-sm">
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <div className="flex gap-2 sm:col-span-2">
                  <button onClick={() => handleUpdate(loc.id)} className="btn-primary text-sm">Save</button>
                  <button onClick={() => setEditingId(null)} className="btn-outline text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-navy-900">{loc.business_name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${loc.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-navy-100 text-navy-500'}`}>
                        {loc.is_active ? 'Active' : 'Inactive'}
                      </span>
                      {loc.google_account_name ? (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                          ✓ Google connected
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                          Google not connected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-navy-500 mt-1">
                      {BUSINESS_TYPES.find(t => t.value === loc.business_type)?.label || loc.business_type}
                      {' · '}{loc.review_count} review{loc.review_count !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {/* Google actions */}
                    {loc.google_account_name ? (
                      <>
                        <button
                          onClick={() => handleSyncReviews(loc.id)}
                          disabled={syncingId === loc.id}
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
                        >
                          {syncingId === loc.id ? 'Syncing...' : '🔄 Sync Reviews'}
                        </button>
                        <button
                          onClick={() => handleUnlinkGoogle(loc.id)}
                          className="text-navy-400 hover:text-red-500 text-xs transition-colors"
                          title="Unlink Google"
                        >
                          Unlink
                        </button>
                      </>
                    ) : googleConnected ? (
                      <button
                        onClick={() => openLinkPicker(loc.id)}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
                      >
                        🔗 Link Google
                      </button>
                    ) : null}

                    <button
                      onClick={() => handleSimulate(loc.id)}
                      disabled={simulateLoading === loc.id}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
                      title="Create a test review with AI response"
                    >
                      {simulateLoading === loc.id ? '...' : '🧪 Simulate'}
                    </button>
                    <button
                      onClick={() => { setEditingId(loc.id); setEditName(loc.business_name); setEditType(loc.business_type) }}
                      className="text-navy-400 hover:text-navy-600 text-sm transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(loc.id)}
                      className="text-red-400 hover:text-red-600 text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
