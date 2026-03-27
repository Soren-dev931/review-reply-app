import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Management Software — Monitor & Respond with AI | Reviewly",
    description: "Google review management software with AI-powered responses, automatic monitoring, and analytics. Built for small businesses at $29-79/mo, not $300+.",
  };
}

export default function GoogleReviewManagementSoftware() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Management Software
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Google review management software gives businesses a single tool to monitor, respond to, and analyze their Google reviews. Reviewly is Google review management software built around AI — it detects new reviews, writes personalized responses, and posts replies to your Business Profile automatically.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Most review management platforms charge $200-500 per month and bury the features you actually need under enterprise tooling. Reviewly starts at $29/mo and focuses on what matters: monitoring, responding, and tracking.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Google Review Management
      </a>

      {/* IMAGE: Reviewly as Google review management software — dashboard overview */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Google review management software dashboard]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Core Features
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Review monitoring:</strong> New reviews detected every few hours from your Google Business Profile</li>
        <li><strong>AI responses:</strong> Personalized replies written by AI, not templates</li>
        <li><strong>Approval workflow:</strong> Review the AI draft, edit if needed, approve with one click</li>
        <li><strong>Direct posting:</strong> Approved replies go straight to Google</li>
        <li><strong>Multi-location:</strong> Manage reviews across all locations from one dashboard</li>
        <li><strong>Analytics:</strong> Response rate, average reply time, review volume, rating trends</li>
      </ul>

      {/* IMAGE: Multi-location view showing reviews from different business locations */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Multi-location Google review management]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Google Reviews Need Dedicated Software
      </h2>
      <p className="text-navy-700 mb-4">
        Google is the most important review platform for local businesses. Reviews show up in search results and Maps. Responding to reviews is a local SEO ranking factor. And 77% of consumers read Google reviews before visiting a business.
      </p>
      <p className="text-navy-700 mb-8">
        Managing Google reviews through the Business Profile interface is slow and manual. Software automates the workflow so no review goes unanswered.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Pricing Built for Small Businesses
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Free:</strong> 5 manual responses per month using paste-and-generate</li>
        <li><strong>Starter ($29/mo):</strong> 1 location, 50 AI responses, monitoring, email alerts</li>
        <li><strong>Pro ($79/mo):</strong> Unlimited locations and responses, auto-post, analytics, custom brand voice</li>
        <li>Annual billing saves 20% — Starter at $23/mo, Pro at $63/mo</li>
      </ul>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Google Review Management
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/best-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Best Review Management Software →
          </Link>
          <Link href="/uses/google-review-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Automation →
          </Link>
          <Link href="/uses/google-review-dashboard" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}
