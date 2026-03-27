import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Apartment Review Response Examples — Replies for Property Managers | Reviewly",
    description: "Apartment review response examples for maintenance, management, and amenities. Generate professional property management review replies in seconds.",
  };
}

export default function ApartmentReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Apartment Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Apartment review responses are the first thing prospective tenants read after checking the listing. A property manager who responds to complaints looks responsible. One who doesn't looks like the problem.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for apartment reviews that address maintenance, noise, parking — whatever the resident brought up. Paste the review, get a reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly interface with an apartment review about maintenance delays */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing apartment review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Tenants Mention in Apartment Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Maintenance response times</li>
        <li>Management responsiveness</li>
        <li>Amenities — laundry, gym, pool</li>
        <li>Noise from neighbors or traffic</li>
        <li>Parking availability</li>
        <li>Move-in / move-out experience</li>
      </ul>

      {/* IMAGE: Side-by-side tenant complaint about parking and Reviewly's generated response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for apartment review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Maintenance Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Put in a maintenance request for a leaking faucet three weeks ago. Still not fixed. Management doesn't return calls."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Three weeks for a faucet repair is too long, and we take responsibility for the communication gap. I'm escalating your request today and will follow up personally. Please reach out to the front office directly so we can get this resolved this week."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Happy Resident
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Love living here. The pool is always clean, maintenance is quick, and the front office staff are friendly. Best apartment I've had."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Really glad you're enjoying the community. Our maintenance team and front office take a lot of pride in keeping things running smoothly. Thanks for being a great resident."</p>
      </div>

      {/* IMAGE: Property manager reviewing multiple apartment reviews on laptop */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile dashboard showing apartment review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Property Managers Manage Dozens of Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        One property can have hundreds of reviews across Google, Yelp, and Apartments.com. Responding to each one takes serious time — time most property managers don't have.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly cuts response time to under a minute per review. Specific, professional, and it doesn't sound like it came from a template.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/airbnb-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Airbnb Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
