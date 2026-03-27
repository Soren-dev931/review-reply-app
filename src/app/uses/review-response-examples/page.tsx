import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Examples — Templates & Replies for Every Business Type | Reviewly",
    description: "Review response examples for restaurants, dental offices, hotels, and auto shops. See real responses across star ratings and generate your own in 10 seconds.",
  };
}

export default function ReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Review response examples across different business types and star ratings. This page collects the responses people actually need — from thanking a happy customer to handling an angry one. Each example is different because each business type has its own concerns.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Want responses for your own reviews? Reviewly generates them in 10 seconds. Paste a review, get a reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Multiple review responses across different business types]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Restaurant: Handling a Food Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The pasta was overcooked and the sauce tasted like it came from a jar. Disappointing for the price."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Overcooked pasta isn't what we're about — thanks for the honest feedback. I've passed this along to our kitchen team. If you come back, let the host know and your meal is on us."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Dental Office: Thanking a Patient
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Dr. Kim was patient and explained everything before the procedure. No pain at all. The office is clean and the staff is welcoming."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Dr. Kim always takes the time to explain what's happening — glad that made the difference for you. We work hard to keep the office comfortable and welcoming. See you at your next appointment!"</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Hotel: Responding to a Mixed Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Location was perfect and the bed was comfortable. But the AC didn't work and nobody fixed it during our 3-night stay."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"A broken AC for three nights isn't acceptable — that should have been escalated and resolved the first day. I've addressed this with our maintenance and front desk teams. Glad the location and room otherwise worked for you. We owe you a better stay."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating responses for different business types]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Auto Repair: Addressing a Billing Concern
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Went in for an oil change and left with a $600 bill. They found 'additional issues' that I'm not convinced were real."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"I understand the frustration with unexpected costs. We should have walked you through the findings before any additional work. Please call and ask for Dave — he can review the invoice with you and make sure everything was warranted."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Find Examples for Your Industry
      </h2>
      <div className="space-y-2 mb-8">
        <Link href="/uses/google-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Google Review Response Examples →</Link>
        <Link href="/uses/hotel-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Hotel Review Response Examples →</Link>
        <Link href="/uses/dental-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Dental Review Response Examples →</Link>
        <Link href="/uses/restaurant-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Restaurant Review Response Examples →</Link>
        <Link href="/uses/negative-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Negative Review Response Examples →</Link>
        <Link href="/uses/positive-review-response-examples" className="block text-emerald-600 hover:text-emerald-700 font-medium">Positive Review Response Examples →</Link>
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Generate Responses in 10 Seconds
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
