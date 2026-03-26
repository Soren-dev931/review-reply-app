import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Spa Review Response Examples — Replies for Spas and Wellness | Reviewly",
    description: "Spa review response examples covering treatments, therapists, and ambiance. Generate spa and wellness review replies in 10 seconds with Reviewly.",
  };
}

export default function SpaReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Spa Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Spa review responses set the tone before a client even walks through the door. When someone reads a warm, personal reply to a review, they already feel the experience starting.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for spa reviews that mention the treatment, the therapist, the ambiance — whatever made the visit memorable. Paste the review, get a reply in seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a spa review response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a spa review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Clients Mention in Spa Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Treatment quality — massage, facial, body work</li>
        <li>Therapist skill and attentiveness</li>
        <li>Ambiance — lighting, music, scent</li>
        <li>Relaxation level and overall vibe</li>
        <li>Booking ease and availability</li>
        <li>Value for the price</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Disappointed Client
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Booked a deep tissue massage. It was way too light — told the therapist twice and nothing changed. For $150 I expected more."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"When you ask for more pressure, you should get it. I'm sorry that didn't happen. We'll address this with the therapist directly. If you're open to it, we'd like to offer a complimentary session with a different therapist who specializes in deep tissue."</p>
      </div>

      {/* IMAGE: Glowing spa review with response mentioning the therapist by name */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive spa review with personalized therapist response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Repeat Client
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Third time here and Kira is always incredible. The hot stone massage was exactly what I needed. The room smelled amazing. This is my happy place."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Kira will be thrilled to hear she's part of your happy place. She puts a lot of care into every session. We'll make sure the hot stones are ready for visit number four."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Spas Sell an Experience — Your Replies Are Part of It
      </h2>
      <p className="text-navy-700 mb-4">
        People choosing a spa want to feel taken care of before they even book. A thoughtful review response does that. A missing response doesn't.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps spa owners and managers reply to every review with the same warmth clients expect from the spa itself. No templates. No generic copy.
      </p>

      {/* IMAGE: Spa front desk using Reviewly to manage online reviews */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Spa staff managing reviews with Reviewly]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/salon-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Salon Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
