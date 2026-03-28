'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const NAV_LINKS = [
  { href: '/uses', label: 'Use Cases' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#demo', label: 'Demo' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
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
    setMenuOpen(false)
    router.push('/')
    router.refresh()
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="border-b border-navy-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center" onClick={closeMenu}>
          <img src="/brand/reviewly-logo.svg" alt="Reviewly" width={140} height={38} className="h-9 w-auto" />
        </a>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy-700 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-700 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-700 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 border-t border-navy-100 bg-white">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="border-t border-navy-100 mt-2 pt-2">
            {loading ? null : user ? (
              <>
                <a
                  href="/app"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg font-medium text-sm transition-colors"
                >
                  Dashboard
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-navy-500 hover:text-navy-700 hover:bg-navy-50 rounded-lg font-medium text-sm transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg font-medium text-sm transition-colors"
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg font-semibold text-sm transition-colors"
                >
                  Get Started Free
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
