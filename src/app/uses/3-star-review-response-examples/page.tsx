import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "3-Star Review Response Examples — Handle Mixed Reviews Well | Reviewly",
    description: "3-star review response examples that acknowledge the good and address the bad. Generate balanced review replies in 10 seconds with Reviewly.",
  };
}

export default function ThreeStarReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        3-Star Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        3-star review responses require balance. The customer isn't angry — they're lukewarm. Something was good, something wasn't. Your response needs to acknowledge both without being dismissive about either.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for 3-star reviews that thank the customer for what worked and address what didn't. No generic "thanks for your feedback" replies.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a balanced response to a 3-star review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Reviewly generating a 3-star review response - 3 star review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why 3-Star Reviews Are Tricky
      </h2>
      <p className="text-navy-700 mb-4">
        A 3-star review is "it was fine." The person isn't mad, but they're not coming back unless something changes. These reviews are actually opportunities — the customer is telling you exactly what to fix.
      </p>
      <p className="text-navy-700 mb-8">
        A good response thanks them for the positive, addresses the gap, and shows you're working on it.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Good Product, Bad Service
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Food was great, ambiance was nice, but our server was distracted the whole time. Had to flag someone down for the check. Would've been 5 stars otherwise."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Glad the food and atmosphere hit the mark. The service should've matched, and I'm sorry it didn't. We've addressed this with the team. Next time you're in, the experience will be complete — I'll make sure of it."</p>
      </div>

      {/* IMAGE: 3-star review showing mixed feelings with professional response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Mixed review with balanced response - 3 star review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Some Things Worked, Some Didn't
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The staff was friendly and the location is convenient. But the wait was long and the pricing felt high for what we got."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Thanks for the kind words about our staff and location. We hear you on the wait time and pricing — both things we're actively working on. Appreciate the honest feedback."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Turn 3 Stars Into 5
      </h2>
      <p className="text-navy-700 mb-4">
        3-star reviewers are the most likely to come back and update their review. They liked enough to not write you off. A response that shows you listened and improved can turn a lukewarm review into a loyal customer.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly crafts responses that hit both sides — appreciation and accountability. Paste the review, get a balanced reply.
      </p>

      {/* IMAGE: 3-star review being converted to a return customer through a good response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Turning mixed reviews into return customers - 3 star review response examples"
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
          <Link href="/uses/4-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            4-Star Review Response Examples →
          </Link>
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
