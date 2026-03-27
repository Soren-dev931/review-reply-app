import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Automation Software — Automate Review Monitoring & Responses | Reviewly",
    description: "Review automation software that monitors Google reviews and generates personalized AI responses. Built for small businesses, not enterprise budgets.",
  };
}

export default function ReviewAutomationSoftware() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Automation Software
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Review automation software handles the repetitive parts of managing your online reviews — monitoring for new ones, writing responses, and posting them. Reviewly is review automation software built for small businesses. It connects to Google Business Profile, generates personalized AI responses, and posts replies with your approval.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Enterprise tools like Birdeye and Podium charge $300-500 per month. Reviewly starts at $29/mo and does the core job — monitoring and responding — without the bloat.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Review Automation
      </a>

      {/* IMAGE: Reviewly software interface showing review automation in action */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly review automation software interface]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What the Software Does
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Connects to Google Business Profile via API</li>
        <li>Checks for new reviews every few hours</li>
        <li>AI reads each review and writes a personalized response</li>
        <li>Email notifications when new reviews need attention</li>
        <li>One-click approve or edit before posting</li>
        <li>Analytics dashboard with response rate and rating trends</li>
      </ul>

      {/* IMAGE: Feature comparison — Reviewly vs enterprise review platforms */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Feature and price comparison vs enterprise tools]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Reviewly vs Enterprise Platforms
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Birdeye ($299+/mo):</strong> Full reputation suite, review generation, surveys — most features unused by small businesses</li>
        <li><strong>Podium ($399+/mo):</strong> Reviews + messaging + payments — overkill for review management</li>
        <li><strong>Reviewly ($29-79/mo):</strong> Review monitoring + AI responses + analytics. The core features at a fraction of the price.</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Two Plans
      </h2>
      <p className="text-navy-700 mb-4">
        <strong>Starter ($29/mo):</strong> 1 location, 50 AI responses per month, monitoring, email alerts, approval workflow.
      </p>
      <p className="text-navy-700 mb-8">
        <strong>Pro ($79/mo):</strong> Unlimited locations and responses, auto-post, full analytics, custom brand voice, priority support. Save 20% with annual billing on either plan.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        Try Review Automation
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Automation →
          </Link>
          <Link href="/uses/google-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Management Software →
          </Link>
          <Link href="/uses/review-response-automation" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Automation →
          </Link>
        </div>
      </div>
    </div>
  );
}
