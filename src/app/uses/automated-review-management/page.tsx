import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Automated Review Management — Monitor & Respond on Autopilot | Reviewly",
    description: "Automated review management that monitors Google reviews and generates personalized AI responses. Approve or auto-post replies without lifting a finger.",
  };
}

export default function AutomatedReviewManagement() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Automated Review Management
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Automated review management takes the daily chore of checking and responding to reviews off your plate. Reviewly connects to your Google Business Profile, detects new reviews the moment they appear, and drafts a response using AI.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        You review and approve the draft, or let it post automatically. Either way, every customer gets a reply — and your local SEO ranking benefits from the consistency.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Your Reviews
      </a>

      {/* IMAGE: Dashboard showing multiple reviews being managed automatically with status badges */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly automated review management dashboard"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Gets Automated
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Monitoring:</strong> New reviews detected automatically every few hours</li>
        <li><strong>Response drafting:</strong> AI writes a personalized reply referencing what the customer said</li>
        <li><strong>Notifications:</strong> Email alert when a new review needs your attention</li>
        <li><strong>Posting:</strong> Approved responses go directly to Google</li>
        <li><strong>Tracking:</strong> See response rates, average reply time, and rating trends</li>
      </ul>

      {/* IMAGE: Flow diagram: New Review → AI Draft → Approve → Posted to Google */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Automated review management workflow"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Manual vs Automated
      </h2>
      <p className="text-navy-700 mb-4">
        Manual review management means logging into Google, reading each review, writing a reply, and posting it. For a business with 10-20 reviews per month, that is 2-3 hours of work.
      </p>
      <p className="text-navy-700 mb-8">
        Automated review management brings that down to a few minutes. The AI handles the writing. You handle the final approval. Or skip even that with auto-post on the Pro plan.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Built for Small Businesses
      </h2>
      <p className="text-navy-700 mb-8">
        Enterprise reputation platforms charge $300-500 per month. Reviewly starts at $29/mo for a single location with 50 AI responses. Pro at $79/mo covers unlimited locations and unlimited responses. Save 20% on annual billing.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Your Reviews
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/review-automation-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Automation Software →
          </Link>
          <Link href="/uses/ai-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Management →
          </Link>
          <Link href="/uses/google-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Management Software →
          </Link>
        </div>
      </div>
    </div>
  );
}
