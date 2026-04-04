-- Google Business Profile Integration Migration
-- Run this in Supabase SQL Editor

-- 1. Create google_connections table for storing OAuth tokens
CREATE TABLE IF NOT EXISTS public.google_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  google_account_id text,
  google_email text,
  access_token text NOT NULL,
  refresh_token text NOT NULL,
  token_expires_at timestamptz NOT NULL,
  scopes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. Enable RLS
ALTER TABLE public.google_connections ENABLE ROW LEVEL SECURITY;

-- 3. RLS policies: users can only access their own connections
CREATE POLICY "Users can view own google connections"
  ON public.google_connections FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own google connections"
  ON public.google_connections FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own google connections"
  ON public.google_connections FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own google connections"
  ON public.google_connections FOR DELETE
  USING (auth.uid() = user_id);

-- 4. Add google_account_name to locations (stores 'accounts/123/locations/456' resource name)
ALTER TABLE public.locations
  ADD COLUMN IF NOT EXISTS google_account_name text;

-- 5. Add google_review_id to monitored_reviews (for dedup + reply posting)
ALTER TABLE public.monitored_reviews
  ADD COLUMN IF NOT EXISTS google_review_id text UNIQUE;

-- 6. Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_google_connections_user_id ON public.google_connections(user_id);
CREATE INDEX IF NOT EXISTS idx_monitored_reviews_google_review_id ON public.monitored_reviews(google_review_id);
CREATE INDEX IF NOT EXISTS idx_locations_google_place_id ON public.locations(google_place_id);
