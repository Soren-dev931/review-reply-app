import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Monitoring Service — Track New Reviews Automatically | Reviewly",
    description: "Review monitoring service that tracks Google reviews across all your locations. Get alerted to new reviews and respond with AI-generated replies.",
  };
}

export default function ReviewMonitoringService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Monitoring Service
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A review monitoring service watches your online profiles and tells you the moment someone leaves a review. Reviewly monitors your Google Business Profile around the clock, flags new reviews, and drafts AI responses before you even see the notification.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Businesses that monitor and respond to reviews consistently see higher local search rankings and more customer trust. Reviewly keeps your response rate high without adding hours to your week.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Start Monitoring Reviews
      </a>

      {/* IMAGE: Reviewly monitoring dashboard showing new reviews detected across locations */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Review monitoring dashboard with new review alerts]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Gets Monitored
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>New reviews on Google Business Profile</li>
        <li>Star rating changes and trends</li>
        <li>Reviews across all connected locations</li>
        <li>Response status for each review (pending, approved, posted)</li>
      </ul>

      {/* IMAGE: Analytics showing review volume trends and response rate over time */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Review monitoring analytics — volume and response rate]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        More Than Just Alerts
      </h2>
      <p className="text-navy-700 mb-4">
        Most review monitoring services stop at notifications. Reviewly goes further. When a new review is detected, the AI immediately drafts a personalized response. By the time you open the alert, the reply is already written.
      </p>
      <p className="text-navy-700 mb-8">
        Approve with one click. Edit if you want to add something personal. Or enable auto-post on the Pro plan and let the AI handle it end to end.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Pricing
      </h2>
      <p className="text-navy-700 mb-8">
        Starter at $29/mo covers 1 location with 50 AI responses. Pro at $79/mo covers unlimited locations and unlimited responses with full analytics. Both include monitoring and email alerts. Annual billing saves 20%.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Start Monitoring Reviews
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-alerts" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Alerts →
          </Link>
          <Link href="/uses/google-review-dashboard" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Dashboard →
          </Link>
          <Link href="/uses/automated-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Automated Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
