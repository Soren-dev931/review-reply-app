'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'login' | 'forgot'>('login')
  const [resetSent, setResetSent] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/app')
    router.refresh()
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setResetSent(true)
    setLoading(false)
  }

  if (mode === 'forgot') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-navy-900">Reset password</h1>
            <p className="text-navy-500 mt-2">We&apos;ll send you a link to reset your password</p>
          </div>
          {resetSent ? (
            <div className="card p-6 sm:p-8 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-navy-900 mb-2">Check your email</h3>
              <p className="text-navy-500 text-sm mb-6">
                We sent a password reset link to <strong>{email}</strong>. Click the link in the email to set a new password.
              </p>
              <button
                onClick={() => { setMode('login'); setResetSent(false) }}
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Back to login
              </button>
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="card p-6 sm:p-8 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="you@business.com"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
              <p className="text-center text-sm text-navy-500">
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError('') }}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Back to login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Welcome back</h1>
          <p className="text-navy-500 mt-2">Log in to your Typani account</p>
        </div>
        <form onSubmit={handleLogin} className="card p-6 sm:p-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="you@business.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-navy-700 mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={() => { setMode('forgot'); setError('') }}
              className="text-navy-500 hover:text-navy-700"
            >
              Forgot password?
            </button>
            <a href="/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Sign up free
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
