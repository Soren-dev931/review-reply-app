'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

const BUSINESS_TYPES = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'dental', label: 'Dental Office' },
  { value: 'salon', label: 'Salon / Barbershop' },
  { value: 'auto_repair', label: 'Auto Repair' },
  { value: 'hotel', label: 'Hotel / Airbnb' },
  { value: 'other', label: 'Other' },
]

const TONES = [
  { value: 'professional', label: 'Professional', desc: 'Polished and business-appropriate' },
  { value: 'friendly', label: 'Friendly', desc: 'Warm and conversational' },
  { value: 'casual', label: 'Casual', desc: 'Relaxed and personable' },
]

interface ProfileData {
  business_name: string | null
  business_type: string
  tone: string
  custom_instructions: string | null
  plan: string
  monthly_usage: number
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('restaurant')
  const [tone, setTone] = useState('professional')
  const [customInstructions, setCustomInstructions] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      if (data) {
        setProfile(data)
        setBusinessName(data.business_name || '')
        setBusinessType(data.business_type || 'restaurant')
        setTone(data.tone || 'professional')
        setCustomInstructions(data.custom_instructions || '')
      }
    }
    load()
  }, [supabase])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setSaving(false)
      return
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        business_name: businessName || null,
        business_type: businessType,
        tone: tone,
        custom_instructions: customInstructions || null,
      })
      .eq('id', user.id)

    if (updateError) {
      setError(updateError.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setSaving(false)
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-navy-400">Loading...</div>
      </div>
    )
  }

  const isPro = profile.plan === 'pro'

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-navy-900 mb-2">Settings</h1>
      <p className="text-navy-500 text-sm mb-8">
        Configure your business profile to get better responses.
      </p>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-4">Business Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-navy-700 mb-1.5">
                Business name
              </label>
              <input
                id="businessName"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="input-field"
                placeholder="e.g. Mario&#39;s Italian Kitchen"
              />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-navy-700 mb-1.5">
                Business type
              </label>
              <select
                id="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="input-field"
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-4">Response Tone</h2>
          <div className="space-y-3">
            {TONES.map((t) => (
              <label
                key={t.value}
                className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  tone === t.value
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-navy-100 hover:border-navy-200'
                }`}
              >
                <input
                  type="radio"
                  name="tone"
                  value={t.value}
                  checked={tone === t.value}
                  onChange={(e) => setTone(e.target.value)}
                  className="mt-0.5 accent-emerald-500"
                />
                <div>
                  <div className="font-medium text-navy-900 text-sm">{t.label}</div>
                  <div className="text-navy-500 text-xs">{t.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-1">Custom Instructions</h2>
          <p className="text-navy-500 text-xs mb-4">
            Add things you always want mentioned in responses. These will be included in every generated response.
          </p>
          <textarea
            value={customInstructions}
            onChange={(e) => setCustomInstructions(e.target.value)}
            className="input-field resize-none"
            rows={4}
            placeholder={"Examples:\n• For negative reviews, offer a free item on their next visit\n• Always mention we're under new management\n• Include our phone number: (555) 123-4567\n• Mention our new outdoor patio"}
          />
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-4">Current Plan</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-navy-900 capitalize">{profile.plan} Plan</div>
              <div className="text-sm text-navy-500">
                {isPro
                  ? 'Unlimited responses'
                  : `${profile.monthly_usage} of 5 responses used this month`}
              </div>
            </div>
            {!isPro && (
              <button
                type="button"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                Upgrade to Pro
              </button>
            )}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
          {saved && (
            <span className="text-emerald-600 text-sm font-medium">Settings saved</span>
          )}
        </div>
      </form>
    </div>
  )
}
