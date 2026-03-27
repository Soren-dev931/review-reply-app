import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Hotel Review Response Examples — Thank Guests Without Sounding Corporate | Reviewly",
    description: "Positive hotel review response examples that mention rooms, staff, and amenities by name. Generate personalized hotel thank-you replies in 10 seconds.",
  };
}

export default function PositiveHotelReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Positive Hotel Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Positive hotel review response examples that don't sound like they came from a PR department. Guests notice when you actually read their review versus when you paste "Thank you for your kind words, we look forward to welcoming you back" for the hundredth time.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates hotel responses that reference the specific room, staff member, or amenity the guest mentioned. Paste the review, get a personal reply in 10 seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Hotel manager crafting a personalized response to a guest review]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: Guest Praising Staff
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Marco at the front desk upgraded us to a suite when he found out it was our honeymoon. The rooftop bar was perfect for sunset drinks. We'll be back for our anniversary."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Congratulations again! Marco has a knack for making special occasions even better — he'll be thrilled to hear this. The rooftop at sunset is hard to beat. We'll have your suite ready for that anniversary trip."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: Guest Praising Location and Amenities
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Walking distance to everything downtown. The pool was clean and never crowded. Breakfast buffet had good variety. Room 412 had a great view of the harbor."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Room 412 is one of our favorites for that harbor view. Glad you took advantage of the pool and breakfast — the location really does make it easy to explore. Hope to see you back next time you're in town."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Side-by-side of a generic hotel response vs a personalized one]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Makes a Positive Hotel Response Feel Real
      </h2>
      <p className="text-navy-700 mb-4">
        Three things separate a real reply from a template:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Use the guest's details.</strong> If they mention Room 412 or the rooftop bar, reference it back. It proves you read the review.</li>
        <li><strong>Name staff when mentioned.</strong> "Marco will be thrilled" means more than "Our team appreciates your feedback."</li>
        <li><strong>Skip the corporate filler.</strong> "We look forward to welcoming you back to our establishment" sounds like a robot. "Hope to see you next time" sounds like a person.</li>
      </ul>

      <p className="text-navy-700 mb-8">
        Reviewly pulls names, room numbers, amenities, and specific compliments from each review and works them into the response naturally. No more staring at a blank reply box trying to say something different from yesterday.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly for Your Hotel
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/hotel-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Hotel Review Response Examples →
          </Link>
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
