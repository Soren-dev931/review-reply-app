import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Auto Repair Review Response Examples — Replies for Shops | Reviewly",
    description: "Auto repair review response examples for pricing, repair quality, and turnaround time. Generate mechanic shop review replies in 10 seconds.",
  };
}

export default function AutoRepairReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Auto Repair Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Auto repair review responses build trust in an industry where trust is everything. People don't know if they're getting ripped off. Your responses prove they won't be.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for auto repair reviews that address pricing, repair quality, turnaround time — whatever the customer mentioned. Paste the review, get a response.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly dashboard showing review responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing auto repair review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Customers Mention in Auto Repair Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Pricing transparency — were they upfront about costs?</li>
        <li>Repair quality — did the fix hold?</li>
        <li>Turnaround time</li>
        <li>Communication during the repair</li>
        <li>Honesty — did they upsell unnecessary work?</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Pricing Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Came in for brakes and left with a $900 bill. They added stuff I didn't ask for. Felt like I got taken advantage of."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"I understand the frustration — a higher-than-expected bill doesn't feel good. Our technician found additional issues during the brake job and should have called you before proceeding. That's our policy, and I'm sorry it wasn't followed. Please reach out so we can review the invoice together."</p>
      </div>

      {/* IMAGE: Reviews list in Reviewly app */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard - manage and respond to auto shop reviews"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Loyal Customer
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Been bringing my truck here for 5 years. Mike always explains what's wrong and gives me options. Fair prices, honest work."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Five years — that means a lot. Mike prides himself on being straight with customers. We'll keep taking care of your truck."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Auto Shops Live and Die by Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        Nobody wants to pick the wrong mechanic. Reviews are how people decide. Responding to every one — especially the complaints — shows you stand behind your work.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps shop owners respond quickly between jobs. No drafting, no wordsmithing. Just paste, generate, and post.
      </p>

      {/* IMAGE: Mobile view of Reviewly */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile app - respond to auto shop reviews from your phone"
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
          <Link href="/uses/car-dealership-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Car Dealership Review Response Examples →
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
