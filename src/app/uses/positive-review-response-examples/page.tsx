import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Review Response Examples — Reply to Good Reviews | Reviewly",
    description: "Positive review response examples across industries. Learn how to thank customers warmly and specifically. Generate replies in 10 seconds with Reviewly.",
  };
}

export default function PositiveReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Positive Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Positive review responses are the easiest to skip and the most valuable to write. When someone takes time to leave a good review, replying well turns a happy customer into a loyal one.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates warm, specific responses to positive reviews. It reads what the customer praised and writes a reply that references those details. No copy-paste templates.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a warm response to a positive review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Reviewly generating a positive review response - positive review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Not to Do
      </h2>
      <p className="text-navy-700 mb-4">
        Most businesses respond to positive reviews with one of these:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>"Thank you for your kind words!" — generic</li>
        <li>"We appreciate your business!" — robotic</li>
        <li>"Thanks! Hope to see you again!" — lazy</li>
      </ul>
      <p className="text-navy-700 mb-8">
        These are fine. But they don't build relationships. A response that mentions what the customer said is ten times more effective.
      </p>

      {/* IMAGE: Generic vs specific positive review response comparison */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Generic vs specific positive review response - positive review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Hotel
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The ocean view room was stunning. Breakfast buffet was excellent and the concierge helped us book a sunset cruise. Perfect trip."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"The sunset cruise is one of our favorite recommendations — glad you loved it. And that ocean view room is hard to beat. Thanks for choosing us for the trip. We'll keep the room ready for your next visit."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Auto Repair
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Honest shop. They told me I didn't need new brakes yet when another place said I did. Saved me $400. Found my new mechanic."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"We'd rather tell you the truth and earn your trust than sell you parts you don't need. Glad we could save you that money. We'll be here when those brakes actually do need replacing."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Dental Office
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"First time not dreading the dentist. Dr. Kim was patient and the hygienist was gentle. Actually looking forward to my next cleaning."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"'Looking forward to my next cleaning' might be the highest compliment a dental office can get. Dr. Kim and the team will be happy to hear it. See you next time — we promise to keep it painless."</p>
      </div>

      {/* IMAGE: Multiple positive reviews with unique, personalized responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-recent-responses.webp"
                  alt="Multiple positive reviews with unique responses - positive review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Make Every Happy Customer Feel It
      </h2>
      <p className="text-navy-700 mb-8">
        Reviewly reads the review, finds the details worth highlighting, and generates a response that feels written just for that person. Paste, generate, post. Works for every industry.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
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
