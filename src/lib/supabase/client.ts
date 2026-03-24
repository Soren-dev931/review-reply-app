import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vtuddaatwfmzifkpbigs.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dWRkYWF0d2Ztemlma3BiaWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTc5MzEsImV4cCI6MjA4OTkzMzkzMX0.TWEHFdc__dqQ-TPBWaMhgT7vj5_PTbcwFovhh-qh-dM'

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
