import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Customer Service Negative Review Response Examples — Consistent, Professional Replies | Reviewly",
    description: "Customer service negative review response examples for teams handling reviews at scale. Keep brand voice consistent across multiple staff members with Reviewly.",
  };
}

export default function CustomerServiceNegativeReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Customer Service Negative Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Customer service negative review response examples show what happens when a trained team handles reviews instead of an overwhelmed owner typing on their phone. The tone is different. Empathetic, solution-oriented, and never personal.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly helps customer service teams respond consistently — same brand voice, same professionalism, every time. No matter who on the team is posting the reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Customer service team member responding to reviews on a dashboard - customer service negative review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: The Empathetic Acknowledgment
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Been a customer for 3 years and the service has gone downhill. Last visit was the final straw — 45 minute wait for a scheduled appointment."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Customer Service Response:</p>
        <p className="text-navy-700">"Thank you for being a loyal customer for three years — that makes this feedback even more important to us. A 45-minute wait for a scheduled appointment isn't acceptable. We've adjusted our booking system to prevent overbooking. We'd love the chance to earn back your trust — please contact our team at [email] for priority scheduling."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: The Solution-First Reply
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Ordered online and received the wrong item. Called customer service and was put on hold for 20 minutes before giving up."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Customer Service Response:</p>
        <p className="text-navy-700">"Wrong item and a long hold time — that's two problems that shouldn't have happened. We're sending the correct item today with expedited shipping at no cost. We've also added staff to our phone lines. Please check your email for a confirmation and a direct contact number for future orders."</p>
      </div>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-recent-responses.webp"
                  alt="Consistent brand voice across multiple review responses - customer service negative review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        The Customer Service Difference
      </h2>
      <p className="text-navy-700 mb-4">
        Customer service responses differ from owner responses. They don't take things personally. They focus on the process failure, not the emotional sting. They offer concrete next steps.
      </p>
      <p className="text-navy-700 mb-4">
        The challenge is consistency. When three different team members respond to reviews, you get three different tones. One is too casual, one is too stiff, one accidentally gets defensive.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly solves this by generating responses in your brand voice every time. Set the tone once. Every response matches it — whether it's Sarah on Monday or James on Friday.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Consistent Responses for Your Team
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/review-response-service" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Service →
          </Link>
          <Link href="/uses/automated-review-management" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Automated Review Management →
          </Link>
        </div>
      </div>
    </div>
  );
}
