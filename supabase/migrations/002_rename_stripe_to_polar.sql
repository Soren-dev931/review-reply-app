-- Rename Stripe columns to Polar
ALTER TABLE profiles RENAME COLUMN stripe_customer_id TO polar_customer_id;
ALTER TABLE profiles RENAME COLUMN stripe_subscription_id TO polar_subscription_id;
