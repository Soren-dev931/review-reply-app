import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Service — AI-Powered Replies to Every Review | Reviewly",
    description: "Review response service that writes personalized replies to Google reviews using AI. Faster and more affordable than hiring a virtual assistant.",
  };
}

export default function ReviewResponseService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Response Service
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A review response service writes replies to your customer reviews so you do not have to. Some businesses hire virtual assistants or agencies for this. Reviewly does it with AI — faster, cheaper, and available around the clock.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Connect your Google Business Profile. When a review comes in, Reviewly drafts a personalized response that references what the customer actually said. You approve it and the reply posts to Google.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Get AI-Powered Review Responses
      </a>

      {/* IMAGE: Comparison table — VA vs Agency vs Reviewly for review responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/landing-pricing.webp"
                  alt="Cost comparison — virtual assistant vs agency vs Reviewly - review response service"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Reviewly vs Hiring Someone
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Virtual assistant:</strong> $500-1,500/mo, variable quality, timezone delays</li>
        <li><strong>Agency:</strong> $300-500/mo, uses templates, slow turnaround</li>
        <li><strong>Reviewly:</strong> $29-79/mo, personalized AI responses, replies within hours</li>
      </ul>

      {/* IMAGE: Reviewly responding to a review with AI — showing the personalized output */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="AI-generated review response showing personalization - review response service"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How the Service Works
      </h2>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li>Connect your Google Business Profile</li>
        <li>Set your preferred tone (professional, friendly, or casual)</li>
        <li>Add custom instructions if needed (mention the new menu, offer a discount)</li>
        <li>Reviewly monitors for new reviews and drafts replies</li>
        <li>You approve with one click or let auto-post handle it</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Quality That Scales
      </h2>
      <p className="text-navy-700 mb-8">
        A human writer gets tired. Templates get repetitive. AI reads every review fresh and writes a unique response each time. Whether you get 5 reviews a month or 500, the quality stays consistent and each reply stays personalized.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Get AI-Powered Review Responses
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Responder →
          </Link>
          <Link href="/uses/review-response-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Automation →
          </Link>
          <Link href="/uses/ai-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
