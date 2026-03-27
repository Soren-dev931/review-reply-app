import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Responder — Automatic Personalized Review Replies | Reviewly",
    description: "AI review responder that generates personalized replies to Google reviews automatically. References specific details, matches your brand voice.",
  };
}

export default function AIReviewResponder() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Review Responder
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        An AI review responder reads each customer review and writes a reply that sounds human. Reviewly is built specifically for review responses — not a general AI tool with review templates bolted on. It picks up on what the customer mentioned and works those details into the reply.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Connect your Google Business Profile and Reviewly responds to reviews automatically. Or paste reviews manually and get replies in 10 seconds. Either way, every response is unique.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try the AI Responder
      </a>

      {/* IMAGE: Reviewly generating a unique response to a customer review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="AI review responder generating a personalized reply"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How It Reads Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        The AI analyzes three things in every review:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Sentiment:</strong> Positive, negative, or mixed based on rating and language</li>
        <li><strong>Specifics:</strong> Names, services, products, or experiences mentioned</li>
        <li><strong>Tone:</strong> Matches your preference — professional, friendly, or casual</li>
      </ul>

      {/* IMAGE: Breakdown of AI analysis — sentiment, specifics, tone mapping */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="How the AI responder analyzes a review - ai review responder"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Templates vs AI
      </h2>
      <p className="text-navy-700 mb-4">
        Template-based responders use the same handful of replies for every review. Customers see through it immediately. &ldquo;Thank you for your feedback&rdquo; on 50 reviews in a row looks automated because it is.
      </p>
      <p className="text-navy-700 mb-8">
        An AI review responder writes a new reply for every review. Two 5-star reviews about the same restaurant get two different responses because the customers said different things.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Pricing
      </h2>
      <p className="text-navy-700 mb-8">
        Free plan includes 5 manual responses per month. Starter at $29/mo adds auto-monitoring for 1 location with 50 AI responses. Pro at $79/mo gives unlimited locations, unlimited responses, auto-post, and analytics. Annual billing saves 20%.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try the AI Responder
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response →
          </Link>
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
          <Link href="/uses/review-response-service" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
