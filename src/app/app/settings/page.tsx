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
  billing_period: string
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
  const [upgrading, setUpgrading] = useState(false)
  const [billingToggle, setBillingToggle] = useState<'monthly' | 'annual'>('monthly')

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
    if (!user) { setSaving(false); return }

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

  async function handleUpgrade(plan: 'starter' | 'pro') {
    setUpgrading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, period: billingToggle }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Failed to start checkout')
      }
    } catch {
      setError('Failed to start checkout')
    }
    setUpgrading(false)
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-navy-400">Loading...</div>
      </div>
    )
  }

  const isPaid = profile.plan === 'starter' || profile.plan === 'pro'

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-navy-900 mb-2">Settings</h1>
      <p className="text-navy-500 text-sm mb-8">
        Configure your business profile and manage your plan.
      </p>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Business Info */}
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

        {/* Response Tone */}
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

        {/* Custom Instructions */}
        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-1">Custom Instructions</h2>
          <p className="text-navy-500 text-xs mb-4">
            Add things you always want mentioned in responses.
          </p>
          <textarea
            value={customInstructions}
            onChange={(e) => setCustomInstructions(e.target.value)}
            className="input-field resize-none"
            rows={4}
            placeholder={"Examples:\n• For negative reviews, offer a free item on their next visit\n• Always mention we're under new management\n• Include our phone number: (555) 123-4567"}
          />
        </div>

        {/* Google Business Profile */}
        <div className="card p-6">
          <h2 className="font-semibold text-navy-900 mb-1">Google Business Profile</h2>
          <p className="text-navy-500 text-xs mb-4">
            Connect your Google profile to auto-monitor reviews and post responses directly.
          </p>
          <div className="flex items-center justify-between bg-navy-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy-200 rounded-lg flex items-center justify-center">
                <span className="text-lg">🔗</span>
              </div>
              <div>
                <p className="font-medium text-navy-900 text-sm">Not Connected</p>
                <p className="text-navy-500 text-xs">Auto-monitoring will be available once connected</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Coming Soon</span>
              <button
                type="button"
                disabled
                className="btn-outline text-sm opacity-50 cursor-not-allowed"
              >
                Connect Google
              </button>
            </div>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-navy-900">Your Plan</h2>
            {/* Billing toggle */}
            <div className="flex items-center gap-2 bg-navy-50 rounded-full p-1">
              <button
                type="button"
                onClick={() => setBillingToggle('monthly')}
                className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                  billingToggle === 'monthly' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-500'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingToggle('annual')}
                className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
                  billingToggle === 'annual' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-500'
                }`}
              >
                Annual
                <span className="ml-1 text-emerald-600">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Free */}
            <div className={`rounded-xl border-2 p-5 ${profile.plan === 'free' ? 'border-navy-300 bg-navy-50' : 'border-navy-100'}`}>
              <h3 className="font-semibold text-navy-900">Free</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-extrabold">$0</span>
              </div>
              <ul className="space-y-2 text-xs text-navy-600">
                <li>✓ 5 manual responses/mo</li>
                <li>✓ All business types</li>
                <li>✓ Copy with one click</li>
              </ul>
              {profile.plan === 'free' && (
                <div className="mt-4 text-xs font-medium text-navy-500 text-center">Current plan</div>
              )}
            </div>

            {/* Starter */}
            <div className={`rounded-xl border-2 p-5 ${profile.plan === 'starter' ? 'border-emerald-500 bg-emerald-50' : 'border-navy-100'}`}>
              <h3 className="font-semibold text-navy-900">Starter</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-extrabold">
                  ${billingToggle === 'annual' ? '23' : '29'}
                </span>
                <span className="text-navy-400 text-sm">/mo</span>
                {billingToggle === 'annual' && (
                  <div className="text-xs text-emerald-600 font-medium">$278/year</div>
                )}
              </div>
              <ul className="space-y-2 text-xs text-navy-600">
                <li>✓ 1 location</li>
                <li>✓ 50 AI responses/mo</li>
                <li>✓ Auto-monitor reviews</li>
                <li>✓ AI draft + approve</li>
                <li>✓ Email alerts</li>
              </ul>
              {profile.plan === 'starter' ? (
                <div className="mt-4 text-xs font-medium text-emerald-600 text-center">Current plan</div>
              ) : profile.plan === 'free' ? (
                <button
                  type="button"
                  onClick={() => handleUpgrade('starter')}
                  disabled={upgrading}
                  className="btn-primary w-full mt-4 text-xs disabled:opacity-50"
                >
                  {upgrading ? 'Loading...' : 'Upgrade'}
                </button>
              ) : null}
            </div>

            {/* Pro */}
            <div className={`rounded-xl border-2 p-5 relative ${profile.plan === 'pro' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-300'}`}>
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                BEST VALUE
              </div>
              <h3 className="font-semibold text-navy-900">Pro</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-extrabold">
                  ${billingToggle === 'annual' ? '63' : '79'}
                </span>
                <span className="text-navy-400 text-sm">/mo</span>
                {billingToggle === 'annual' && (
                  <div className="text-xs text-emerald-600 font-medium">$758/year</div>
                )}
              </div>
              <ul className="space-y-2 text-xs text-navy-600">
                <li>✓ Unlimited locations</li>
                <li>✓ Unlimited responses</li>
                <li>✓ Auto-post to Google</li>
                <li>✓ Full analytics</li>
                <li>✓ Custom brand voice</li>
                <li>✓ Priority support</li>
              </ul>
              {profile.plan === 'pro' ? (
                <div className="mt-4 text-xs font-medium text-emerald-600 text-center">Current plan</div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleUpgrade('pro')}
                  disabled={upgrading}
                  className="btn-primary w-full mt-4 text-xs disabled:opacity-50"
                >
                  {upgrading ? 'Loading...' : 'Upgrade'}
                </button>
              )}
            </div>
          </div>

          {isPaid && (
            <p className="text-xs text-navy-400 mt-4 text-center">
              {profile.billing_period === 'annual' ? 'Billed annually' : 'Billed monthly'}
              {' · '}Usage: {profile.plan === 'pro' ? 'Unlimited' : `${profile.monthly_usage} of 50 responses`}
            </p>
          )}
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
