import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Tool — Generate & Post Replies to Google | Reviewly",
    description: "Google review response tool that generates personalized AI replies and posts them directly to your Business Profile. Monitor, respond, and track reviews.",
  };
}

export default function GoogleReviewResponseTool() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Response Tool
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A Google review response tool helps business owners reply to Google reviews faster without sacrificing quality. Reviewly generates personalized AI responses based on what each customer wrote, then posts the reply directly to your Google Business Profile.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        No more logging into Google, reading the review, drafting a reply, and posting it manually. Reviewly handles the workflow. You approve with one click.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try the Response Tool
      </a>

      {/* IMAGE: Reviewly as a Google review response tool — full workflow view */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Google review response tool workflow"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What the Tool Does
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Monitors your Google Business Profile for new reviews</li>
        <li>Generates a personalized AI response for each review</li>
        <li>Lets you approve, edit, or skip each response</li>
        <li>Posts approved responses directly to Google</li>
        <li>Tracks response rate and average reply time</li>
      </ul>

      {/* IMAGE: Review card with AI response and one-click approve */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Review card with approve button and AI response - google review response tool"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Built for Google Specifically
      </h2>
      <p className="text-navy-700 mb-4">
        Google is where most customers leave reviews and where local search rankings are determined. Responding to Google reviews is a confirmed local SEO factor. This tool is built around the Google Business Profile workflow.
      </p>
      <p className="text-navy-700 mb-8">
        The AI also works for reviews you paste manually from Yelp, TripAdvisor, or any other platform. But the automatic monitoring and posting is built for Google.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Free to Try
      </h2>
      <p className="text-navy-700 mb-8">
        The manual paste-and-generate tool works for free — 5 responses per month, no signup required for the demo. Starter at $29/mo adds Google monitoring for 1 location. Pro at $79/mo covers unlimited locations with auto-post and analytics.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try the Response Tool Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Generator →
          </Link>
          <Link href="/uses/google-review-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Automation →
          </Link>
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
        </div>
      </div>
    </div>
  );
}
