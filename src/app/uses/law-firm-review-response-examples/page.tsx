import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Law Firm Review Response Examples — Replies for Attorneys | Reviewly",
    description: "Law firm review response examples covering communication, billing, and professionalism. Generate attorney review replies in 10 seconds with Reviewly.",
  };
}

export default function LawFirmReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Law Firm Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Law firm review responses need to be professional without being cold. Clients hire attorneys during stressful times — a divorce, an accident, a business dispute. How you respond to reviews signals how you treat clients.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for law firm reviews that acknowledge the feedback without compromising confidentiality. Paste the review, get a professional reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a law firm review response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a law firm review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Clients Mention in Law Firm Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Communication frequency and responsiveness</li>
        <li>Billing transparency and hourly rates</li>
        <li>Professionalism and demeanor</li>
        <li>Case outcomes and expectations</li>
        <li>Staff and paralegal helpfulness</li>
        <li>Availability and accessibility</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Communication Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Hired them for a contract dispute. Took days to return calls. Got billed for emails I never received. Felt like just another number."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Timely communication is something every client deserves, and I'm sorry we fell short. We've implemented a 24-hour response policy to prevent this going forward. If you'd like to discuss the billing concerns, please contact our office — we're happy to review the account."</p>
      </div>

      {/* IMAGE: Positive law firm review with warm attorney response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive law firm review with professional response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Grateful Client
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Attorney Garcia handled my custody case with care. Always available, explained everything clearly, and fought hard. I have my kids. That says it all."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Thank you for trusting us with something so important. Attorney Garcia is dedicated to every family she works with. We're glad things worked out and wish you and your family the very best."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Attorneys Compete on Reputation
      </h2>
      <p className="text-navy-700 mb-4">
        People choosing a lawyer read reviews carefully. A firm that responds professionally — even to tough feedback — looks accountable. One that ignores reviews or gets defensive looks like a liability.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps law firms maintain a consistent, professional review presence without eating into billable hours. Paste, generate, done.
      </p>

      {/* IMAGE: Attorney reviewing and responding to client feedback */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Attorney responding to reviews with Reviewly]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/medical-practice-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Medical Practice Review Response Examples →
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
