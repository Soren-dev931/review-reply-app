import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Review Response Template — Thank Reviewers Without Sounding Generic | Reviewly",
    description: "Positive review response template with a 4-step structure: thank, reference specifics, personal touch, invite back. Copy this template or generate unique responses with Reviewly.",
  };
}

export default function PositiveReviewResponseTemplate() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Positive Review Response Template
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Positive review response templates help you thank reviewers quickly without writing the same "Thanks for the kind words!" every time. A good response to a positive review does more than say thanks — it reinforces why the customer had a good experience and gives future readers a reason to visit.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Here's a template structure you can copy. Or let Reviewly generate personalized thank-you responses automatically.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: The 4-step positive review response structure]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The 4-Step Template
      </h2>

      <div className="card p-6 mb-8">
        <p className="text-navy-700 mb-4"><strong>Step 1 — Thank:</strong></p>
        <p className="text-navy-700 italic mb-4">"Thank you for taking the time to share your experience."</p>

        <p className="text-navy-700 mb-4"><strong>Step 2 — Reference specifics:</strong></p>
        <p className="text-navy-700 italic mb-4">"We're glad [specific thing they mentioned — the staff/the food/the service] stood out to you."</p>

        <p className="text-navy-700 mb-4"><strong>Step 3 — Personal touch:</strong></p>
        <p className="text-navy-700 italic mb-4">"[Staff name] will be happy to hear this / We put a lot of care into [specific aspect]."</p>

        <p className="text-navy-700 mb-4"><strong>Step 4 — Invite back:</strong></p>
        <p className="text-navy-700 italic">"We look forward to seeing you again / Next time you're in, try [recommendation]."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Template in Action
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"First time here and the burgers were outstanding. Our server Jake was attentive without being pushy. Great patio seating too."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Using the template:</p>
        <p className="text-navy-700">"Thanks for coming in! Glad the burgers lived up to expectations — the kitchen takes pride in those. Jake's great at reading the table, so he'll appreciate the feedback. Next time, try the patio on a Thursday — we do live music. Hope to see you back."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive review response template filled in for a real review]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Respond to Positive Reviews at All?
      </h2>
      <p className="text-navy-700 mb-4">
        Most businesses focus on negative reviews and ignore the positive ones. That's a missed opportunity. Here's why:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Future customers read responses.</strong> Your reply to a positive review is marketing. It shows personality and reinforces the good experience.</li>
        <li><strong>It encourages more reviews.</strong> When people see that the business actually reads and replies, they're more likely to leave their own review.</li>
        <li><strong>Google factors it in.</strong> Response rate is a signal for local search ranking. Responding to all reviews — not just negative ones — helps.</li>
      </ul>

      <p className="text-navy-700 mb-8">
        Reviewly generates unique positive responses that reference the specific things each reviewer mentioned. No more "Thanks for the 5 stars!" on repeat.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Personalized Thank-You Responses
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
          <Link href="/uses/positive-dental-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Dental Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
