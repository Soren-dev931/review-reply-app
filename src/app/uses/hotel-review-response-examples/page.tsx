import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Hotel Review Response Examples — Write Replies That Book Rooms | Reviewly",
    description: "Hotel review response examples that mention rooms, staff, and amenities. Generate personalized hotel review replies in 10 seconds with Reviewly.",
  };
}

export default function HotelReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Hotel Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Hotel review responses shape how future guests see your property. A short, thoughtful reply to a complaint can save a booking. Ignoring it costs you one.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for hotel reviews in 10 seconds. Paste the review, pick a star rating, and get a reply that mentions the room, the staff, or whatever the guest brought up.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Screenshot of Reviewly generating a hotel review response, showing a pasted guest complaint about room cleanliness and the AI-generated reply */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a hotel review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Hotel Guests Actually Mention in Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        Hotel reviews follow patterns. Guests talk about the same things over and over:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Room quality and cleanliness</li>
        <li>Check-in and check-out speed</li>
        <li>Staff friendliness</li>
        <li>Amenities — pool, gym, breakfast</li>
        <li>Location and noise levels</li>
      </ul>
      <p className="text-navy-700 mb-8">
        A good response references the specific thing the guest mentioned. Reviewly picks up on those details automatically.
      </p>

      {/* IMAGE: Example of a 2-star hotel review about slow check-in with Reviewly's generated response beside it */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Side-by-side hotel review and generated response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Responding to a Complaint About Cleanliness
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Guest Review:</p>
        <p className="text-navy-700 italic">"Room wasn't clean when we arrived. Found hair in the bathroom and the sheets looked used. Front desk didn't seem to care."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Thank you for letting us know. A dirty room at check-in is unacceptable, and I'm sorry that was your experience. I've spoken with our housekeeping team directly. We'd like the chance to make this right — please reach out to our front desk manager at your convenience."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Thanking a Guest for a Positive Stay
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Guest Review:</p>
        <p className="text-navy-700 italic">"Amazing stay. The staff remembered our anniversary and left a bottle of champagne. Room was spotless. Will be back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Happy anniversary! Our team loves going the extra mile for special occasions — glad the champagne was a nice surprise. We'll save your favorite room for next time."</p>
      </div>

      {/* IMAGE: Dashboard showing multiple hotel reviews with generated responses queued up */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Multiple hotel reviews with responses in Reviewly dashboard]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Hotels Need Fast Review Responses
      </h2>
      <p className="text-navy-700 mb-4">
        Travelers read reviews before booking. They also read how the hotel responds. A property that replies to every review — positive and negative — looks attentive. One that ignores complaints looks careless.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps hotel managers respond to every review without spending 20 minutes per reply. Paste it in, get a response, post it. Done.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How It Works
      </h2>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li>Copy a guest review from Google</li>
        <li>Paste it into Reviewly</li>
        <li>Select the star rating</li>
        <li>Get a personalized response in 10 seconds</li>
        <li>Copy and paste it back into Google</li>
      </ul>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
          <Link href="/uses/airbnb-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Airbnb Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
