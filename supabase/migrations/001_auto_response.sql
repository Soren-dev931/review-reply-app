-- Reviewly Auto-Response Feature: Database Schema
-- Run this in Supabase SQL Editor

-- Locations table
CREATE TABLE IF NOT EXISTS locations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  google_place_id TEXT,
  business_name TEXT NOT NULL,
  business_type TEXT NOT NULL DEFAULT 'other',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_locations_user_id ON locations(user_id);

-- Monitored reviews table
CREATE TABLE IF NOT EXISTS monitored_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  google_review_id TEXT,
  reviewer_name TEXT NOT NULL,
  review_text TEXT NOT NULL,
  review_rating INTEGER NOT NULL CHECK (review_rating >= 1 AND review_rating <= 5),
  review_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  ai_response TEXT,
  response_status TEXT NOT NULL DEFAULT 'pending' CHECK (response_status IN ('pending', 'approved', 'posted', 'skipped')),
  approved_at TIMESTAMPTZ,
  posted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_monitored_reviews_user_id ON monitored_reviews(user_id);
CREATE INDEX idx_monitored_reviews_location_id ON monitored_reviews(location_id);
CREATE INDEX idx_monitored_reviews_status ON monitored_reviews(response_status);

-- RLS Policies
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE monitored_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own locations" ON locations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own locations" ON locations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own locations" ON locations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own locations" ON locations
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view own reviews" ON monitored_reviews
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own reviews" ON monitored_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews" ON monitored_reviews
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews" ON monitored_reviews
  FOR DELETE USING (auth.uid() = user_id);

-- Add plan column to profiles if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'billing_period') THEN
    ALTER TABLE profiles ADD COLUMN billing_period TEXT DEFAULT 'monthly';
  END IF;
END $$;
