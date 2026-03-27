import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/app', label: 'Dashboard' },
  { href: '/app/reviews', label: 'Reviews' },
  { href: '/app/locations', label: 'Locations' },
  { href: '/app/analytics', label: 'Analytics' },
  { href: '/app/settings', label: 'Settings' },
  { href: '/app/support', label: 'Support' },
]

const PLAN_BADGES: Record<string, { label: string; className: string }> = {
  free: { label: 'Free', className: 'bg-navy-100 text-navy-600' },
  starter: { label: 'Starter', className: 'bg-emerald-100 text-emerald-700' },
  pro: { label: 'Pro', className: 'bg-emerald-500 text-white' },
}

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .single()

  const plan = profile?.plan || 'free'
  const badge = PLAN_BADGES[plan] || PLAN_BADGES.free

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 sm:gap-4 h-12 text-sm overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-navy-600 hover:text-navy-900 font-medium transition-colors whitespace-nowrap px-2 py-1"
              >
                {item.label}
              </a>
            ))}
            <span className="ml-auto flex items-center gap-2 whitespace-nowrap">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>
                {badge.label}
              </span>
              <span className="text-navy-400 text-xs hidden sm:inline">
                {user.email}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </div>
    </div>
  )
}
