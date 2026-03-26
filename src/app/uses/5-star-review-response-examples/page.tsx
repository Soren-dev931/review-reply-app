import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "5-Star Review Response Examples — Thank Happy Customers Right | Reviewly",
    description: "5-star review response examples with warm, specific thanks. Generate personalized replies to positive reviews in 10 seconds with Reviewly.",
  };
}

export default function FiveStarReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        5-Star Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        5-star review responses seem easy, but most businesses get them wrong. A quick "Thanks!" feels lazy. A wall of text feels automated. The goal is warm, specific, and short.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for 5-star reviews that reference what the customer actually said. The stylist they loved, the dish they raved about, the room they enjoyed. Paste the review, get a personal reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a warm response to a 5-star review */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a 5-star review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Responding to 5-Star Reviews Matters
      </h2>
      <p className="text-navy-700 mb-4">
        Responding to positive reviews does three things:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Builds loyalty.</strong> The customer feels seen. They come back.</li>
        <li><strong>Shows others you care.</strong> Potential customers see a business that engages with everyone, not just the complaints.</li>
        <li><strong>Helps SEO.</strong> Google factors in review responses when ranking local businesses. More responses = more activity = higher visibility.</li>
      </ul>

      {/* IMAGE: 5-star review from a restaurant with a warm, specific response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: 5-star restaurant review with warm response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Specific Praise
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The team went above and beyond. Sarah at the front desk was incredible — she remembered my name from last time. The whole experience was seamless."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Sarah will love hearing this — she makes it a point to remember every client. Thanks for coming back, and we look forward to making the next visit just as smooth."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Short and Sweet
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Amazing. Will be back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Glad you enjoyed it. See you next time!"</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Don't Ignore Your Happy Customers
      </h2>
      <p className="text-navy-700 mb-4">
        Most businesses only respond when something goes wrong. That sends a message: we only pay attention when you're upset. Responding to 5-star reviews flips that.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly makes it easy to respond to every review — not just the fires. Paste, generate, post. Under a minute per review.
      </p>

      {/* IMAGE: Business owner quickly responding to positive reviews */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Business owner responding to positive reviews quickly]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
          <Link href="/uses/4-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            4-Star Review Response Examples →
          </Link>
          <Link href="/blog/how-to-respond-to-positive-reviews" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            How to Respond to Positive Reviews →
          </Link>
        </div>
      </div>
    </div>
  );
}
