import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Powered Review Response — Intelligent Replies to Customer Reviews | Reviewly",
    description: "AI powered review response tool that reads customer reviews, understands context, and writes personalized replies. Not templates — real AI intelligence.",
  };
}

export default function AIPoweredReviewResponse() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Powered Review Response
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        An AI powered review response uses artificial intelligence to read a customer review, understand the context, and write a reply that addresses what the customer actually said. Reviewly does this in 10 seconds — no prompting, no templates, no manual editing.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        The AI adjusts for star rating, business type, and your preferred tone. A 1-star review about cold food gets an empathetic response about the food. A 5-star review praising a specific employee gets a warm thank-you mentioning that employee by name.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        See AI Powered Responses — Free Demo
      </a>

      {/* IMAGE: AI analyzing a review — highlighting key phrases and generating a targeted response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing AI-powered review review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What the AI Understands
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Customer names and employee names mentioned in the review</li>
        <li>Specific products, services, or experiences referenced</li>
        <li>Whether the review is positive, negative, or mixed</li>
        <li>The severity of complaints and what resolution to offer</li>
        <li>Your business type and how that affects response style</li>
      </ul>

      {/* IMAGE: Two different reviews with two completely different AI responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for AI-powered review review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Powered by Claude AI
      </h2>
      <p className="text-navy-700 mb-4">
        Reviewly runs on Anthropic&apos;s Claude, one of the most capable language models available. The prompts are specifically engineered for review responses — they avoid generic phrases and produce replies that read naturally.
      </p>
      <p className="text-navy-700 mb-8">
        The AI is also trained to follow your custom instructions. Want every negative review response to include your phone number? Want to always mention your new location? Add it once in settings and the AI includes it every time.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Try It or Automate It
      </h2>
      <p className="text-navy-700 mb-8">
        The free demo on the homepage works without signup — paste a review and see the AI response. For automatic monitoring and responses, Starter starts at $29/mo for 1 location. Pro at $79/mo covers unlimited locations with auto-post and analytics. Annual billing saves 20%.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        See AI Powered Responses — Free Demo
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response →
          </Link>
          <Link href="/uses/ai-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Responder →
          </Link>
          <Link href="/uses/ai-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
