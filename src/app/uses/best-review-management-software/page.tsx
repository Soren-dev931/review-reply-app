import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Best Review Management Software — AI-Powered Review Responses | Reviewly",
    description: "Best review management software for small businesses. AI-generated responses, Google monitoring, and analytics starting at $29/mo. No enterprise pricing.",
  };
}

export default function BestReviewManagementSoftware() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Best Review Management Software
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        The best review management software does three things: monitors for new reviews, helps you respond quickly, and shows you trends over time. Most platforms charge $200-500 per month and include features small businesses never use. Reviewly focuses on the core workflow — AI-powered monitoring and response — at a price that makes sense.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Connect your Google Business Profile. New reviews get detected automatically. AI writes a personalized response. You approve with one click. That is the entire workflow.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Reviewly Free
      </a>

      {/* IMAGE: Reviewly dashboard as a review management platform */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly review management dashboard]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What to Look for in Review Management Software
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Automatic monitoring:</strong> Detects new reviews without manual checking</li>
        <li><strong>AI responses:</strong> Generates replies that reference specific review details, not templates</li>
        <li><strong>Direct posting:</strong> Publishes replies to Google from the tool</li>
        <li><strong>Analytics:</strong> Shows response rate, average reply time, and rating trends</li>
        <li><strong>Reasonable pricing:</strong> Scales with your business without enterprise minimums</li>
      </ul>

      {/* IMAGE: Checklist comparing review management software features */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Review management software feature checklist]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How Reviewly Compares
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Birdeye ($299+/mo):</strong> Full suite with review generation, surveys, messaging. More than most small businesses need.</li>
        <li><strong>Podium ($399+/mo):</strong> Reviews plus payments and messaging. Built for larger operations.</li>
        <li><strong>GatherUp ($99+/mo):</strong> Review monitoring and responses. Closer competitor but more expensive.</li>
        <li><strong>Reviewly ($29-79/mo):</strong> AI monitoring and responses with analytics. Built specifically for small businesses who want the core features without the enterprise pricing.</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Pricing
      </h2>
      <p className="text-navy-700 mb-4">
        Free plan: 5 manual responses per month, no monitoring.
      </p>
      <p className="text-navy-700 mb-4">
        Starter ($29/mo): 1 location, 50 AI responses, monitoring, email alerts.
      </p>
      <p className="text-navy-700 mb-8">
        Pro ($79/mo): Unlimited locations and responses, auto-post, analytics, custom brand voice. Save 20% with annual billing.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Reviewly Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Management Software →
          </Link>
          <Link href="/uses/review-automation-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Automation Software →
          </Link>
          <Link href="/uses/automated-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Automated Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
