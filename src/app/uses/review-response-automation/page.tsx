import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Automation — Respond to Reviews Without Lifting a Finger | Reviewly",
    description: "Review response automation that detects new Google reviews and generates personalized AI replies. Approve or auto-post without manual effort.",
  };
}

export default function ReviewResponseAutomation() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Response Automation
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Review response automation removes the manual work from responding to customer reviews. Reviewly connects to your Google Business Profile, detects new reviews as they come in, and generates a personalized AI response for each one. You approve the draft and it posts automatically.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        On the Pro plan, enable auto-post and the AI handles the entire loop — detection, writing, and posting — without any action from you.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Your Responses
      </a>

      {/* IMAGE: Automation flow — review detected → AI drafts → auto-posted to Google */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Review response automation workflow]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Gets Automated
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Detection:</strong> New reviews found every few hours</li>
        <li><strong>Drafting:</strong> AI writes a reply referencing the specific review content</li>
        <li><strong>Notification:</strong> You get an email with the review and draft response</li>
        <li><strong>Posting:</strong> Approved replies go directly to Google</li>
      </ul>

      {/* IMAGE: Email notification with review and one-click approve button */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Automated review response email with approve button]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Automate Review Responses
      </h2>
      <p className="text-navy-700 mb-4">
        Responding to every review manually takes 10-15 minutes per review. A business with 20 reviews per month spends 3-5 hours on responses alone. Most owners skip it because they run out of time.
      </p>
      <p className="text-navy-700 mb-8">
        Review response automation brings that time down to minutes. The AI handles the writing. You handle a quick approval. Your response rate stays at 100% and your local SEO ranking benefits.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Two Levels of Automation
      </h2>
      <p className="text-navy-700 mb-4">
        <strong>Starter ($29/mo):</strong> AI drafts responses, you approve before posting. Good for owners who want to review each reply.
      </p>
      <p className="text-navy-700 mb-8">
        <strong>Pro ($79/mo):</strong> Enable auto-post for a fully automated loop. AI detects, writes, and posts. You check the dashboard when you want to. Save 20% with annual billing.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Automate Your Responses
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Automation →
          </Link>
          <Link href="/uses/review-automation-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Automation Software →
          </Link>
          <Link href="/uses/automated-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Automated Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
