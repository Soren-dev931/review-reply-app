import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

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

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 h-12 text-sm">
            <a
              href="/app"
              className="text-navy-600 hover:text-navy-900 font-medium transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/app/settings"
              className="text-navy-600 hover:text-navy-900 font-medium transition-colors"
            >
              Settings
            </a>
            <span className="ml-auto text-navy-400 text-xs">
              {user.email}
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
