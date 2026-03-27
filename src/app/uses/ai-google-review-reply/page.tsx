import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Google Review Reply — Personalized Replies Written by AI | Reviewly",
    description: "AI Google review reply tool that reads each review and writes a personalized response. References specific details, matches your tone, posts to Google.",
  };
}

export default function AIGoogleReviewReply() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Google Review Reply
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        An AI Google review reply reads what the customer wrote and writes a response that sounds like you wrote it. Not a template. Not a generic &ldquo;thanks for your feedback.&rdquo; Reviewly picks up on the specific details — the server&apos;s name, the dish they ordered, the issue they had — and works them into the reply.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Connect your Google Business Profile and Reviewly handles the rest. New reviews get AI replies drafted automatically. You approve or edit before they go live.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try AI Review Replies
      </a>

      {/* IMAGE: Side-by-side of a Google review and Reviewly's AI-generated reply */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing Google review review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Makes These Replies Different
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Specific:</strong> References actual details from the review, not filler</li>
        <li><strong>Tone-matched:</strong> Professional, friendly, or casual — your choice</li>
        <li><strong>Rating-aware:</strong> Empathetic for 1-star reviews, warm for 5-star reviews</li>
        <li><strong>No AI slop:</strong> Trained to avoid &ldquo;We appreciate your valuable feedback&rdquo; and similar clich&eacute;s</li>
      </ul>

      {/* IMAGE: Example showing a negative review with empathetic AI response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for Google review review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Two Ways to Use It
      </h2>
      <p className="text-navy-700 mb-4">
        <strong>Manual:</strong> Paste any review into Reviewly and get a reply in 10 seconds. Copy and post it yourself. Free for 5 responses per month.
      </p>
      <p className="text-navy-700 mb-8">
        <strong>Automatic:</strong> Connect your Google Business Profile on the Starter ($29/mo) or Pro ($79/mo) plan. Reviewly monitors for new reviews and drafts replies automatically. You approve with one click.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Custom Brand Voice
      </h2>
      <p className="text-navy-700 mb-8">
        On the Pro plan, set a custom brand voice with specific instructions. &ldquo;Always mention our new patio.&rdquo; &ldquo;For negative reviews, offer 10% off next visit.&rdquo; The AI follows your guidelines every time.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try AI Review Replies
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response →
          </Link>
          <Link href="/uses/ai-review-reply" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Reply →
          </Link>
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
        </div>
      </div>
    </div>
  );
}
