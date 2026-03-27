import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Dental Review Response Examples — Thank Patients the Right Way | Reviewly",
    description: "Positive dental review response examples that thank patients for kind words about cleanings, crowns, and staff. Generate dental review replies in 10 seconds.",
  };
}

export default function PositiveDentalReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Positive Dental Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Positive dental review response examples help your practice thank patients in a way that feels personal — not like a form letter from the front desk. Patients who leave positive reviews just did you a favor. A good reply keeps them coming back and encourages others to book.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates warm, specific responses to dental reviews in 10 seconds. Paste the review, get a reply that mentions the procedure, the hygienist, or whatever the patient brought up.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Dental office responding to a positive patient review - positive dental review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: Cleaning and Hygienist Praise
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Lisa was so gentle with my cleaning. I usually hate going to the dentist but she made me feel comfortable the entire time. Front desk was friendly too."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Lisa will love hearing this — she really does go out of her way to make cleanings comfortable, especially for patients who are nervous. We're glad the whole experience felt welcoming. See you at your next visit!"</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: Crown Procedure
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Got a crown done today and it was completely painless. Dr. Patel explained every step and the whole thing took less than an hour. Great experience."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Dr. Patel appreciates the kind words. He's a firm believer in explaining what's happening during the procedure — it helps patients relax. Glad the crown went smoothly and we had you in and out quickly. Take care of that new crown!"</p>
      </div>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Multiple positive dental reviews with personalized responses - positive dental review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Dental Offices Should Respond to Positive Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        Dental anxiety is real. When a nervous patient reads your responses and sees you mention staff by name and reference specific procedures warmly, it lowers the barrier to booking.
      </p>
      <p className="text-navy-700 mb-4">
        It also makes your existing patients feel seen. They took time to write something nice. A "thanks for the review" reply is fine. A reply that mentions Lisa or Dr. Patel by name is better.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly picks up on names, procedures, and sentiments from the review and uses them in the response. No copy-paste templates. Each reply is different because each review is different.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly for Your Dental Practice
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/dental-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Dental Review Response Examples →
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
