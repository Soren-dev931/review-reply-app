import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Sample Responses to Negative Reviews — Ready-to-Use Replies by Complaint Type | Reviewly",
    description: "Sample responses to negative reviews for bad service, long waits, billing issues, and rude staff. Copy these samples or generate custom responses in 10 seconds with Reviewly.",
  };
}

export default function SampleResponsesToNegativeReviews() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Sample Responses to Negative Reviews
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Sample responses to negative reviews organized by complaint type. Each one is ready to copy and adapt. Bad service, long waits, billing disputes, rude staff — the four complaints that cover about 80% of negative reviews.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Use these as starting points or skip the editing and let Reviewly write a unique response for each review automatically.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Four common negative review types with sample responses]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Sample 1: Bad Service Quality
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"The work was sloppy. Had to bring my car back twice to get the alignment right. Should have been done correctly the first time."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Sample Response:</p>
        <p className="text-navy-700">"You shouldn't have had to come back twice — that's on us. I've reviewed the work order with the technician to make sure this doesn't repeat. If anything still feels off, call me directly and we'll handle it immediately."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Sample 2: Long Wait Times
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Arrived at 11am for a scheduled appointment. Didn't get seen until almost noon. No explanation, no apology."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Sample Response:</p>
        <p className="text-navy-700">"An hour wait with no communication is unacceptable. We've changed our scheduling to build in buffer time between appointments, and our front desk team now provides updates if there's any delay. I'm sorry we wasted your time."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Sample 3: Billing Dispute
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Was quoted $150 on the phone. Bill came out to $280. When I asked about it they said 'the phone quote was an estimate.' Feels like bait and switch."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Sample Response:</p>
        <p className="text-navy-700">"I understand the frustration with a bill that's nearly double the quote. We should have contacted you before proceeding with any work beyond the original estimate. Please reach out to our office and ask for the manager — we'll review the charges and make this right."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Business owner using sample responses as a starting point]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Sample 4: Rude Staff
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"The receptionist was dismissive and barely looked up when I walked in. Asked a question and got a one-word answer. Not a welcoming place."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Sample Response:</p>
        <p className="text-navy-700">"That's not the first impression we want anyone to have. I've spoken with our front desk team about this directly. Every person who walks in should feel welcomed. I'd like the chance to show you what our service is really like — please contact me and I'll take care of your next visit personally."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Samples Aren't Enough
      </h2>
      <p className="text-navy-700 mb-4">
        Samples get you started. But every review is slightly different. A response about "long wait" doesn't work the same for a 15-minute delay as it does for a 2-hour one. The specifics matter.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly reads each review individually and generates a response that addresses the exact complaint. Same professional tone, different words every time.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Unique Responses, Not Samples
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-template" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Template →
          </Link>
          <Link href="/uses/bad-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Bad Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
