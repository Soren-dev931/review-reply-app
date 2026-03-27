import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Management — Let AI Handle Your Review Responses | Reviewly",
    description: "AI review management that monitors, responds to, and tracks Google reviews automatically. Personalized replies, analytics, and multi-location support.",
  };
}

export default function AIReviewManagement() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Review Management
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        AI review management means the entire review workflow — monitoring, responding, and tracking — is handled by artificial intelligence. Reviewly connects to your Google Business Profile, watches for new reviews, and writes replies that reference the specific details each customer mentioned.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        You stay in control. Every AI-drafted response goes through your approval before posting. Or turn on auto-post if you want it fully hands-off.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Let AI Manage Your Reviews
      </a>

      {/* IMAGE: AI review management workflow — monitor, draft, approve, post */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="AI review management workflow diagram"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What AI Handles
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Detection:</strong> Checks your Google profile for new reviews every few hours</li>
        <li><strong>Analysis:</strong> Reads the review text and star rating, determines sentiment</li>
        <li><strong>Response:</strong> Writes a personalized reply using your tone preferences</li>
        <li><strong>Posting:</strong> Sends the approved response directly to Google</li>
        <li><strong>Tracking:</strong> Logs response times, rates, and rating trends</li>
      </ul>

      {/* IMAGE: Dashboard showing AI-managed reviews with sentiment indicators */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Dashboard with AI-managed reviews and sentiment tags - ai review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why AI Instead of Templates
      </h2>
      <p className="text-navy-700 mb-4">
        Templates send the same response to every customer. Customers notice. &ldquo;Thank you for your feedback&rdquo; on every reply looks lazy.
      </p>
      <p className="text-navy-700 mb-8">
        AI reads each review individually. If someone compliments your barista by name, the reply mentions the barista. If someone complains about parking, the reply addresses parking. Every response is different because every review is different.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Plans
      </h2>
      <p className="text-navy-700 mb-8">
        Starter plan at $29/mo includes 1 location and 50 AI responses per month. Pro at $79/mo adds unlimited locations, unlimited responses, auto-post, analytics, and custom brand voice. Save 20% with annual billing.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Let AI Manage Your Reviews
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response →
          </Link>
          <Link href="/uses/automated-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Automated Review Management →
          </Link>
          <Link href="/uses/ai-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Responder →
          </Link>
        </div>
      </div>
    </div>
  );
}
