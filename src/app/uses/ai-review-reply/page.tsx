import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Reply — Smart Replies to Customer Reviews | Reviewly",
    description: "AI review reply tool that writes personalized responses to customer reviews. Adapts tone for positive, negative, and mixed reviews automatically.",
  };
}

export default function AIReviewReply() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Review Reply
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        An AI review reply is a response to a customer review written by artificial intelligence. Reviewly generates replies that read like a business owner wrote them — specific to what the customer said, matched to your brand tone, and free of generic AI filler phrases.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Paste a review and get a reply in 10 seconds. Or connect your Google Business Profile and Reviewly drafts replies automatically when new reviews come in.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate an AI Reply Free
      </a>

      {/* IMAGE: AI review reply showing a 5-star review with warm, personalized response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="AI-generated reply to a 5-star review - ai review reply"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How the AI Adapts
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>5-star reviews:</strong> Warm, specific thanks that make the customer feel valued</li>
        <li><strong>3-star reviews:</strong> Acknowledges the good and the bad honestly</li>
        <li><strong>1-star reviews:</strong> Leads with empathy, addresses the issue, offers to make it right</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: AI Reply to a Mixed Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">&ldquo;Food was great but the wait was ridiculous. 45 minutes for a table on a Tuesday night. Server was friendly though.&rdquo;</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ AI Reply:</p>
        <p className="text-navy-700">&ldquo;Glad the food hit the mark and that your server took good care of you. A 45-minute wait on a Tuesday is not acceptable though — we hear you. We&apos;re adjusting how we manage reservations on weeknights. Hope you&apos;ll give us another shot.&rdquo;</p>
      </div>

      {/* IMAGE: Side-by-side comparison of template reply vs AI personalized reply */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Template response vs AI personalized response comparison - ai review reply"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Free and Paid Options
      </h2>
      <p className="text-navy-700 mb-4">
        The free plan gives you 5 AI replies per month using the paste-and-generate tool. No signup needed to try the demo on the homepage.
      </p>
      <p className="text-navy-700 mb-8">
        Starter at $29/mo adds automatic monitoring and AI replies for 1 location. Pro at $79/mo unlocks unlimited locations and responses with auto-post. Save 20% annually.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate an AI Reply Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-google-review-reply" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Google Review Reply →
          </Link>
          <Link href="/uses/ai-review-response" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response →
          </Link>
          <Link href="/uses/review-reply-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Reply Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}
