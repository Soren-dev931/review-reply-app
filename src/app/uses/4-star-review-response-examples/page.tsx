import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "4-Star Review Response Examples — Almost Perfect Reviews | Reviewly",
    description: "4-star review response examples that thank customers and address the missing star. Generate personalized replies in 10 seconds with Reviewly.",
  };
}

export default function FourStarReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        4-Star Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        4-star review responses are about the missing star. The customer had a good experience — just not a perfect one. Your response should thank them and show you noticed the gap.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for 4-star reviews that feel personal. It picks up on what the customer praised and what they held back on.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a response to a 4-star review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Reviewly generating a 4-star review response - 4 star review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The Missing Star Matters
      </h2>
      <p className="text-navy-700 mb-4">
        4-star reviews often contain a small critique buried in the praise. "Everything was great except..." That "except" is valuable feedback. Acknowledging it shows you're paying attention.
      </p>
      <p className="text-navy-700 mb-8">
        Don't just thank them and move on. Address the small thing. That's how you earn the fifth star next time.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Great But Not Quite
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Really enjoyed the experience. Staff was friendly and the work was solid. Only reason it's not 5 stars is the parking situation — took 15 minutes to find a spot."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Glad the experience was solid. Parking is a real pain point and something we hear about — we're looking into options to make it easier. Thanks for the honest feedback. Hoping to earn that fifth star next visit."</p>
      </div>

      {/* IMAGE: 4-star review with a small critique and targeted response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="4-star review with response addressing the missing star - 4 star review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Almost Perfect
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Great service, fair price, done on time. Communication could've been a little better — had to call for updates instead of getting them. But overall very happy."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Glad the service, price, and timing all worked out. You're right about the communication — proactive updates are something we're adding to our process. Appreciate you pointing that out."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        4-Star Reviewers Are Your Future 5-Star Reviewers
      </h2>
      <p className="text-navy-700 mb-4">
        These customers liked you. They just need one thing fixed. Respond well, fix the thing, and they come back with a 5-star review next time. That's how you build a review profile.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps you respond to 4-star reviews without overthinking. Paste, generate, post. The response will feel personal because it references their specific feedback.
      </p>

      {/* IMAGE: Customer journey from 4-star to 5-star through good response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Turning 4-star reviewers into 5-star repeat customers - 4 star review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
          <Link href="/uses/3-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            3-Star Review Response Examples →
          </Link>
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
