import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Review Response Template — Fill-in-the-Blank Structure That Works | Reviewly",
    description: "Negative review response template with a proven 5-step structure: acknowledge, empathize, address specifics, resolve, and move offline. Copy it or generate unique responses with Reviewly.",
  };
}

export default function NegativeReviewResponseTemplate() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Negative Review Response Template
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Negative review response templates give you a structure when you're staring at a harsh review and don't know what to say. Here's a fill-in-the-blank framework that works for any industry.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Copy it. Use it. And when you get tired of filling in blanks manually, let Reviewly do it for you in 10 seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: The 5-step negative review response structure]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The 5-Step Template
      </h2>

      <div className="card p-6 mb-8">
        <p className="text-navy-700 mb-4"><strong>Step 1 — Acknowledge:</strong></p>
        <p className="text-navy-700 italic mb-4">"Thank you for your feedback about [specific issue]."</p>

        <p className="text-navy-700 mb-4"><strong>Step 2 — Empathize:</strong></p>
        <p className="text-navy-700 italic mb-4">"I understand how [frustrating/disappointing] it is when [restate the problem in their words]."</p>

        <p className="text-navy-700 mb-4"><strong>Step 3 — Address specifics:</strong></p>
        <p className="text-navy-700 italic mb-4">"We've [action taken — spoken with team/reviewed process/identified the issue]."</p>

        <p className="text-navy-700 mb-4"><strong>Step 4 — Resolve:</strong></p>
        <p className="text-navy-700 italic mb-4">"We'd like to [offer — redo the service/refund/discount/complimentary visit]."</p>

        <p className="text-navy-700 mb-4"><strong>Step 5 — Move offline:</strong></p>
        <p className="text-navy-700 italic">"Please contact [name] at [email/phone] so we can take care of this."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template in Action
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Waited 30 minutes past my appointment time. When I finally got seen, the service was rushed. Felt like they didn't care."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Using the template:</p>
        <p className="text-navy-700">"Thank you for your feedback about the wait time. I understand how frustrating it is to be kept waiting past your scheduled appointment — your time matters. We've reviewed our scheduling process and made adjustments to prevent overbooking. We'd like to offer you a complimentary visit. Please contact Sarah at front@example.com so we can set that up."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Template filled in for a real negative review]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The Problem With Templates
      </h2>
      <p className="text-navy-700 mb-4">
        Templates work for the first few reviews. Then a pattern appears. Your responses start looking identical to anyone reading through them. Reviewers notice. Future customers notice.
      </p>
      <p className="text-navy-700 mb-4">
        The structure is sound — acknowledge, empathize, resolve, move offline. But the words need to change every time. Each review mentions different problems. The response should reflect that.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly uses this same structure under the hood but fills it with unique language every time. It reads the specific complaint and writes a response that addresses it directly. No brackets. No blanks. Just a reply you can post.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Beyond Templates
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/negative-hotel-review-response-template" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Hotel Review Response Template →
          </Link>
          <Link href="/uses/sample-responses-to-negative-reviews" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Sample Responses to Negative Reviews →
          </Link>
        </div>
      </div>
    </div>
  );
}
