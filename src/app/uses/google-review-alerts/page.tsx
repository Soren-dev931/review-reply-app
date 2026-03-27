import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Alerts — Get Notified When New Reviews Come In | Reviewly",
    description: "Google review alerts notify you the moment a new review is posted. AI drafts a response automatically so you can approve and reply in seconds.",
  };
}

export default function GoogleReviewAlerts() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Alerts
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Google review alerts tell you the moment a customer leaves a review on your Business Profile. Reviewly monitors your listing, detects new reviews, and sends you a notification with the review text, star rating, and an AI-drafted response ready to approve.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        No need to check Google every day. The alert comes to you. Open it, read the review, approve the AI response or make an edit, and the reply posts to Google.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Turn On Review Alerts
      </a>

      {/* IMAGE: Email/push notification showing a new 4-star review with AI response ready */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Google review alert notification with AI response - google review alerts"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Speed Matters
      </h2>
      <p className="text-navy-700 mb-4">
        Customers notice how fast you respond. A reply within a few hours shows you are paying attention. A reply after two weeks — or no reply at all — sends the opposite message.
      </p>
      <p className="text-navy-700 mb-8">
        Google review alerts cut your response time from days to hours. The AI drafts the response before you even open the notification. You just approve it.
      </p>

      {/* IMAGE: Timeline showing review posted → alert sent → response approved in under 2 hours */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Review response timeline showing fast turnaround - google review alerts"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Each Alert Includes
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Reviewer name and star rating</li>
        <li>Full review text</li>
        <li>Which location the review is for</li>
        <li>AI-drafted response personalized to the review</li>
        <li>One-click approve, edit, or skip</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Catch Negative Reviews Early
      </h2>
      <p className="text-navy-700 mb-8">
        A 1-star review sitting unanswered for a week does real damage. Google review alerts let you catch it within hours and respond before other customers see it without a reply. The AI adjusts its tone for negative reviews — empathetic, specific, and professional.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Turn On Review Alerts
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
          <Link href="/uses/google-review-dashboard" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Dashboard →
          </Link>
          <Link href="/uses/review-monitoring-service" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Monitoring Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
