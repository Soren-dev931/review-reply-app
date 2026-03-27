import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Hotel Review Response Template — Copy-Paste Structures for Common Complaints | Reviewly",
    description: "Negative hotel review response templates for room complaints, noise, staff issues, and billing disputes. Copy these templates or generate personalized responses with Reviewly.",
  };
}

export default function NegativeHotelReviewResponseTemplate() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Negative Hotel Review Response Template
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Negative hotel review response templates give your front desk team a starting point for the most common complaints. Room issues, noise, staff problems, billing — they all follow patterns.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Here are templates you can copy and customize. Or skip the manual work and let Reviewly personalize each response automatically.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing hotel review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template 1: Room Complaints
      </h2>
      <div className="card p-6 mb-8">
        <p className="text-navy-700">"Thank you for your feedback about your room. [Specific issue — cleanliness/temperature/maintenance] is something we take seriously and I've shared your comments with our housekeeping/maintenance team. We'd like to make this right — please contact [name] at [email/phone] so we can discuss a resolution."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template 2: Noise Issues
      </h2>
      <div className="card p-6 mb-8">
        <p className="text-navy-700">"We're sorry the noise affected your stay. [Construction/event/other guests] can be disruptive and we should have [warned you at check-in/offered a room change]. For your next visit, please request a room on [quieter floor/wing] and we'll make sure you're comfortable."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template 3: Staff Rudeness
      </h2>
      <div className="card p-6 mb-8">
        <p className="text-navy-700">"This is not the service standard we hold ourselves to. I've spoken with the team member involved. Every guest deserves to be treated with courtesy, and I'm sorry that wasn't your experience. Please reach out to me directly at [contact] — I'd like to make this up to you."</p>
      </div>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for hotel review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template 4: Billing Disputes
      </h2>
      <div className="card p-6 mb-8">
        <p className="text-navy-700">"I understand billing surprises are frustrating. I've looked into your charges and [explanation]. If anything still seems off, please contact our billing department at [email/phone] and we'll review your folio together. We want this resolved for you."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Templates Get Old Fast
      </h2>
      <p className="text-navy-700 mb-4">
        Templates work for the first few reviews. Then guests start seeing the same structure repeated across all your responses. It looks automated — because it is.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly reads each review individually and generates a unique response that references the guest's specific complaint. No brackets to fill in. No copy-paste fatigue. Just paste the review and get a response that sounds like a real person wrote it.
      </p>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile dashboard showing hotel review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — No More Templates
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/hotel-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Hotel Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-template" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Template →
          </Link>
        </div>
      </div>
    </div>
  );
}
