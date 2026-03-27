import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "1-Star Review Response Examples — Professional Replies to the Worst Reviews | Reviewly",
    description: "1-star review response examples that stay professional and avoid getting defensive. Generate calm, empathetic replies in 10 seconds with Reviewly.",
  };
}

export default function OneStarReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        1-Star Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        1-star review responses are the hardest to write. The customer is furious, the review feels unfair, and your first instinct is to defend yourself. Don't. The response isn't for the reviewer — it's for everyone who reads it after.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates calm, professional responses to 1-star reviews. No defensiveness. No corporate speak. Just acknowledgment, empathy, and an invitation to make it right.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a response to a 1-star review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing 1-star review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Rules for Responding to 1-Star Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Don't argue.</strong> You won't win in public. Take the conversation offline.</li>
        <li><strong>Don't be sarcastic.</strong> Future customers don't know the context. Sarcasm reads as petty.</li>
        <li><strong>Acknowledge the pain.</strong> Something went wrong. Say so.</li>
        <li><strong>Offer a path forward.</strong> Contact info, a callback, a redo. Give them somewhere to go.</li>
      </ul>

      {/* IMAGE: Side-by-side of a defensive response vs Reviewly's empathetic response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for 1-star review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Angry Customer, Professional Reply
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Absolute worst experience. Staff was rude, waited forever, and the end result was terrible. I want my money back. DO NOT GO HERE."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"I'm sorry you had this experience. That's not the standard we hold ourselves to. I'd like to understand what happened and make it right — please reach out to us at [phone/email] so we can discuss this directly."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Vague 1-Star Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Terrible. Just terrible."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"We're sorry to hear that. We'd like to know more about what went wrong so we can address it. Please contact us directly — we want to make this right."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Detailed Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Made an appointment for 10am. Wasn't seen until 11:30. When I finally got in, the person was rushed and made mistakes. Then they tried to charge me for extra services I didn't ask for. Never again."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"A 90-minute wait, a rushed service, and surprise charges — that's a bad visit from start to finish, and I take full responsibility. I've reviewed what happened and am addressing each issue with the team. I'd like to discuss the charges and offer to make this right. Please contact me directly."</p>
      </div>

      {/* IMAGE: Business owner staying calm while responding to harsh reviews */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile dashboard showing 1-star review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The Response Matters More Than the Review
      </h2>
      <p className="text-navy-700 mb-4">
        Future customers expect to see some bad reviews. What they're actually judging is how you handled them. A professional, empathetic response to a 1-star review can actually increase trust.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly removes the emotional reaction from the equation. You paste the worst review you've ever gotten, and it generates something you'd be proud to have public.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/3-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            3-Star Review Response Examples →
          </Link>
          <Link href="/blog/how-to-respond-to-bad-reviews-on-google" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            How to Respond to Bad Reviews on Google →
          </Link>
        </div>
      </div>
    </div>
  );
}
