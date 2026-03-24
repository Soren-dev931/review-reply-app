'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="border-b border-navy-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <span className="text-xl font-bold text-navy-900">Reviewly</span>
        </a>
        <div className="flex items-center gap-3">
          {loading ? (
            <div className="w-20 h-8" />
          ) : user ? (
            <>
              <a
                href="/app"
                className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors"
              >
                Dashboard
              </a>
              <button
                onClick={handleLogout}
                className="text-navy-500 hover:text-navy-700 font-medium text-sm transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="btn-primary text-sm !px-4 !py-2"
              >
                Get Started Free
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
