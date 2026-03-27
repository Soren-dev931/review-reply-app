import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Automation — Automate Monitoring & Replies | Reviewly",
    description: "Google review automation that monitors your Business Profile and generates AI replies automatically. Detect new reviews, draft responses, post with one click.",
  };
}

export default function GoogleReviewAutomation() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Automation
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Google review automation takes the repetitive work out of managing your online reputation. Reviewly connects to your Google Business Profile, watches for new reviews, drafts a personalized AI response for each one, and posts the reply after you approve it.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        The entire workflow — detection, response generation, and posting — runs on autopilot. You check in when you want to, not because you have to.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Google Reviews
      </a>

      {/* IMAGE: Google review automation pipeline — detect → generate → approve → post */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Google review automation pipeline diagram]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Reviewly Automates
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Monitoring:</strong> Checks for new reviews every few hours</li>
        <li><strong>AI Response:</strong> Writes a unique reply based on the review content</li>
        <li><strong>Alerts:</strong> Sends you an email when a new review needs attention</li>
        <li><strong>Posting:</strong> Puts the approved response directly on Google</li>
        <li><strong>Analytics:</strong> Tracks response rate, speed, and rating trends</li>
      </ul>

      {/* IMAGE: Dashboard showing automated reviews with status badges */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Automated review management dashboard]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        SEO Benefits of Automation
      </h2>
      <p className="text-navy-700 mb-4">
        Google uses review engagement as a local ranking signal. Businesses that respond to reviews consistently rank higher in Maps and local search. But consistency is the hard part — most businesses start strong and then fall off.
      </p>
      <p className="text-navy-700 mb-8">
        Automation solves the consistency problem. Every review gets a response. Your response rate stays at 100%. Your average reply time drops from days to hours. Google notices.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Plans for Every Size
      </h2>
      <p className="text-navy-700 mb-8">
        Starter at $29/mo automates 1 location with 50 responses per month. Pro at $79/mo handles unlimited locations with unlimited responses, auto-post, and full analytics. Both plans support annual billing at 20% off.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Google Reviews
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/review-response-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Automation →
          </Link>
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
          <Link href="/uses/google-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Management Software →
          </Link>
        </div>
      </div>
    </div>
  );
}
