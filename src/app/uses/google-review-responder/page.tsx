import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Responder — Auto-Reply to Every Google Review | Reviewly",
    description: "Google review responder that monitors your Business Profile and drafts personalized replies automatically. Approve with one click and post to Google.",
  };
}

export default function GoogleReviewResponder() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Responder
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A Google review responder watches your Business Profile and handles replies so you don&apos;t have to check manually. When a new review comes in, Reviewly reads it, drafts a personalized response, and sends you a notification.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        You approve with one click or edit it first. The reply goes straight to Google. No copy-pasting. No logging into your Business Profile every day.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Start Responding Automatically
      </a>

      {/* IMAGE: Reviewly dashboard showing a pending Google review with AI-drafted response and approve button */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly auto-response dashboard with approve button]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How the Google Review Responder Works
      </h2>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li>Connect your Google Business Profile to Reviewly</li>
        <li>Reviewly checks for new reviews every few hours</li>
        <li>AI reads the review and drafts a reply that references specific details</li>
        <li>You get a notification with the draft</li>
        <li>Approve, edit, or skip — one click</li>
      </ul>
      <p className="text-navy-700 mb-8">
        On the Pro plan, you can turn on auto-post. Responses go live without waiting for your approval. Useful when you trust the AI and want zero friction.
      </p>

      {/* IMAGE: Email notification showing new review alert with AI response preview */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Email notification with new review and AI response preview]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Automatic Responses Matter
      </h2>
      <p className="text-navy-700 mb-4">
        Google has confirmed that responding to reviews helps your local search ranking. Businesses that reply to every review show up higher in Maps and local search results.
      </p>
      <p className="text-navy-700 mb-8">
        Most businesses reply to a few reviews and then stop. A Google review responder keeps your response rate at 100% without any effort.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Starter vs Pro
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Starter ($29/mo):</strong> 1 location, 50 responses/month, review with approval</li>
        <li><strong>Pro ($79/mo):</strong> Unlimited locations and responses, auto-post, analytics, custom brand voice</li>
        <li>Save 20% with annual billing on either plan</li>
      </ul>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Start Responding Automatically
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Automation →
          </Link>
          <Link href="/uses/review-response-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Automation →
          </Link>
          <Link href="/uses/google-review-alerts" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Alerts →
          </Link>
        </div>
      </div>
    </div>
  );
}
