import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Free Review Response Generator — 5 Free Replies Per Month | Reviewly",
    description: "Free review response generator with 5 free replies per month. No signup required for the demo. Generate professional review responses instantly.",
  };
}

export default function FreeReviewResponseGenerator() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Free Review Response Generator
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Reviewly is a free review response generator for businesses that want to try it before paying. You get 5 free responses per month on the free plan. No credit card. No commitment.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Want to test it right now? The demo below works without any signup. Paste a review, pick a star rating, see what you get.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly free demo showing no-signup-required interface */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly free demo interface — no signup needed - free review response generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What You Get for Free
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>5 responses per month</strong> — enough to test the quality</li>
        <li><strong>No signup for the demo</strong> — try it right now on the homepage</li>
        <li><strong>Same AI quality</strong> — free responses use the same engine as paid ones</li>
        <li><strong>All industries</strong> — works for restaurants, hotels, salons, clinics, auto shops, anything</li>
      </ul>

      {/* IMAGE: Pricing comparison showing free vs paid plans */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/landing-pricing.webp"
                  alt="Reviewly free vs paid plan comparison - free review response generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Who the Free Plan Is For
      </h2>
      <p className="text-navy-700 mb-4">
        The free plan works for businesses that get a handful of reviews per month. If you're a small shop with 3-5 new reviews monthly, the free tier might be all you need.
      </p>
      <p className="text-navy-700 mb-8">
        For busier businesses — restaurants, hotels, multi-location brands — the Starter plan ($29/mo) adds auto-monitoring for 1 location, and Pro ($79/mo) gives you unlimited locations and responses.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        No Signup Required to Try
      </h2>
      <p className="text-navy-700 mb-4">
        The demo on the homepage works immediately. No email. No account creation. Just paste a review and see the response. If you like it, sign up for the free plan. If you don't, no harm done.
      </p>
      <p className="text-navy-700 mb-8">
        We built it this way because the output speaks for itself. Try it with your worst 1-star review and see what happens.
      </p>

      {/* IMAGE: User trying the demo with a real review, no signup form visible */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Trying Reviewly demo with no signup required - free review response generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Upgrade When You're Ready
      </h2>
      <p className="text-navy-700 mb-8">
        When 5 responses per month isn't enough, the Starter plan at $29/mo gives you 50 AI responses and automatic review monitoring. Pro at $79/mo unlocks unlimited responses, unlimited locations, and auto-posting directly to Google. Save 20% with annual billing on either plan.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response Generator →
          </Link>
          <Link href="/uses/google-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Generator →
          </Link>
          <Link href="/uses/review-reply-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Reply Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}
