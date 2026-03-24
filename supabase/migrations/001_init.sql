-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  business_name TEXT,
  business_type TEXT DEFAULT 'restaurant',
  tone TEXT DEFAULT 'professional',
  custom_instructions TEXT,
  plan TEXT DEFAULT 'free',
  polar_customer_id TEXT,
  polar_subscription_id TEXT,
  monthly_usage INT DEFAULT 0,
  usage_reset_at TIMESTAMPTZ DEFAULT (date_trunc('month', NOW()) + INTERVAL '1 month'),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated responses
CREATE TABLE responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  review_text TEXT NOT NULL,
  review_rating INT CHECK (review_rating BETWEEN 1 AND 5),
  review_sentiment TEXT CHECK (review_sentiment IN ('positive', 'negative', 'mixed')),
  generated_response TEXT NOT NULL,
  was_copied BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Responses: users can only access their own responses
CREATE POLICY "Users can view own responses"
  ON responses FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own responses"
  ON responses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Index for faster response lookups
CREATE INDEX idx_responses_user_id ON responses(user_id);
CREATE INDEX idx_responses_created_at ON responses(created_at DESC);
