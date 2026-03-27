import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Airbnb Review Response Examples — Replies for Hosts | Reviewly",
    description: "Airbnb review response examples covering cleanliness, check-in, and communication. Generate host review replies in 10 seconds with Reviewly.",
  };
}

export default function AirbnbReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Airbnb Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Airbnb review responses affect your listing's visibility and future bookings. Guests scroll through your replies to see how you handle complaints. Thoughtful responses signal a reliable host.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for Airbnb reviews that reference cleanliness, check-in, location — whatever the guest mentioned. Paste it in, get a response, move on.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly showing an Airbnb guest review with generated host response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing Airbnb review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Airbnb Guests Review
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Cleanliness of the space</li>
        <li>Check-in process and key handoff</li>
        <li>Host communication and response time</li>
        <li>Listing accuracy — does it match the photos?</li>
        <li>Location and neighborhood</li>
        <li>Amenities — kitchen, wifi, towels</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Guest Upset About Listing Accuracy
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The photos made the place look way bigger than it is. Kitchen was tiny and the 'workspace' was a folding table. Communication was fine but felt misled."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"I appreciate the honest feedback. You're right that the photos could be more representative of the space. I'm updating the listing with new photos and clearer descriptions of the kitchen and workspace. Glad the communication worked well — I'll make sure the listing itself is just as transparent."</p>
      </div>

      {/* IMAGE: Happy Airbnb guest review with warm host response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Positive Airbnb review with host reply - airbnb review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Great Stay
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Spotless apartment. Self check-in was smooth. Great location, walking distance to everything. Would stay again."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"So glad you enjoyed the location and the self check-in. We try to make arrival as hassle-free as possible. You're welcome back anytime."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Airbnb Hosts Should Respond to Every Review
      </h2>
      <p className="text-navy-700 mb-4">
        Responding to reviews shows potential guests you're an active, attentive host. It also gives you a chance to address concerns publicly — before the next guest has the same question.
      </p>
      <p className="text-navy-700 mb-8">
        Multi-property hosts don't have time to craft individual responses for every listing. Reviewly handles it — just paste and go.
      </p>

      {/* IMAGE: Airbnb host managing reviews for multiple properties */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-recent-responses.webp"
                  alt="Host managing multiple Airbnb listing reviews - airbnb review response examples"
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
          <Link href="/uses/hotel-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Hotel Review Response Examples →
          </Link>
          <Link href="/uses/apartment-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Apartment Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
