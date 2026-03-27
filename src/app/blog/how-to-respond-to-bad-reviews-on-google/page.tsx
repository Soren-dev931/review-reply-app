import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "How to Respond to Bad Reviews on Google — A Practical Guide | Reviewly",
    description: "How to respond to bad reviews on Google without getting defensive. Step-by-step approach with examples. Plus, generate responses in 10 seconds with Reviewly.",
  };
}

export default function HowToRespondToBadReviewsOnGoogle() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        How to Respond to Bad Reviews on Google
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Knowing how to respond to bad reviews on Google is a skill every business owner needs. A bad review feels personal. Your instinct is to fight back or ignore it. Both are wrong.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        The review is already public. Your response is your chance to control the narrative. Here's how to do it right.
      </p>

      {/* IMAGE: Google Business Profile showing a negative review with no response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-review-input.webp"
                  alt="Unanswered bad review on Google Business Profile - how to respond to bad reviews on google"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Step 1: Don't Respond Angry
      </h2>
      <p className="text-navy-700 mb-4">
        Read the review. Close the tab. Come back in an hour. Responding while upset leads to defensive, sarcastic, or dismissive replies that make you look worse than the review itself.
      </p>
      <p className="text-navy-700 mb-8">
        The response isn't for the reviewer — it's for everyone who reads it after. Future customers are watching how you handle criticism.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Step 2: Acknowledge the Problem
      </h2>
      <p className="text-navy-700 mb-4">
        Start by acknowledging what went wrong. Don't explain, don't justify, don't say "but." Just acknowledge.
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>"A 45-minute wait is too long." ✅</li>
        <li>"We were busy that night." ❌</li>
        <li>"The room should have been clean." ✅</li>
        <li>"Our housekeeping team was short-staffed." ❌</li>
      </ul>

      {/* IMAGE: Good vs bad response examples side by side */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Defensive vs empathetic response comparison - how to respond to bad reviews on google"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Step 3: Be Specific
      </h2>
      <p className="text-navy-700 mb-8">
        Reference what the customer actually complained about. "Sorry for the inconvenience" is worthless. "Sorry about the cold food and the wait for your check" shows you read the review.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Step 4: Take It Offline
      </h2>
      <p className="text-navy-700 mb-8">
        End with an invitation to continue the conversation privately. Give a name, phone number, or email. This shows you're serious about fixing things — and it moves the messy details out of public view.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Putting It All Together
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Bad Review:</p>
        <p className="text-navy-700 italic">"Charged me for work I didn't approve. When I called to complain, they were rude. Never going back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Good Response:</p>
        <p className="text-navy-700">"Being charged for unapproved work is not acceptable, and I'm sorry for the experience on the phone as well. I'd like to review the invoice and make this right. Please call me directly at [number] — ask for [name]."</p>
      </div>

      {/* IMAGE: Reviewly generating a response to a bad Google review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Reviewly generating a response to a bad Google review - how to respond to bad reviews on google"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Or Let Reviewly Write It for You
      </h2>
      <p className="text-navy-700 mb-4">
        If writing responses to bad reviews feels stressful, Reviewly does it for you. Paste the review, select the star rating, and get a professional response in 10 seconds. It follows all the rules above automatically — empathy, specifics, offline invitation.
      </p>
      <p className="text-navy-700 mb-8">
        Try it with your worst Google review and see what it generates.
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
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
          <Link href="/blog/does-responding-to-google-reviews-help-seo" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Does Responding to Google Reviews Help SEO? →
          </Link>
        </div>
      </div>
    </div>
  );
}
