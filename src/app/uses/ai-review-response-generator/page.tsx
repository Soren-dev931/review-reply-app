import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Response Generator — Personalized Replies in Seconds | Reviewly",
    description: "AI review response generator that creates personalized, professional replies to Google reviews in 10 seconds. Not ChatGPT — built for business owners.",
  };
}

export default function AIReviewResponseGenerator() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        AI Review Response Generator
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        An AI review response generator should do one thing well: read a customer review and write a reply that sounds like you wrote it. Not a generic template. Not ChatGPT output with "I appreciate your feedback" on repeat.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly is an AI review response generator built for business owners. Paste a review, select the star rating, and get a personalized response in 10 seconds. It references the specific details the customer mentioned — the room, the stylist, the wait time, the dish.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly interface showing the paste-review-and-generate flow */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly AI review response generator interface]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How Reviewly Works
      </h2>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li>Copy a review from Google (or any platform)</li>
        <li>Paste it into Reviewly</li>
        <li>Select the star rating</li>
        <li>Get a personalized response in ~10 seconds</li>
        <li>Copy and post it back</li>
      </ul>
      <p className="text-navy-700 mb-8">
        The whole process takes under a minute. Most business owners spend 10-15 minutes per review when writing by hand.
      </p>

      {/* IMAGE: Before/after showing time spent: 15 min manual vs 1 min with Reviewly */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Time comparison — manual review response vs Reviewly]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Not Just Use ChatGPT?
      </h2>
      <p className="text-navy-700 mb-4">
        You can. But here's what happens:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>You write a long prompt explaining the context</li>
        <li>ChatGPT gives you something that starts with "Thank you for taking the time to share your experience"</li>
        <li>You edit it to sound less robotic</li>
        <li>Total time: 5-8 minutes per review</li>
      </ul>
      <p className="text-navy-700 mb-8">
        Reviewly is purpose-built. No prompting needed. It already knows how to write review responses that sound human. Paste and go.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Makes Reviewly Different
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Specific, not generic.</strong> References the actual details in the review.</li>
        <li><strong>Tone-aware.</strong> Empathetic for complaints, warm for praise, balanced for mixed reviews.</li>
        <li><strong>No AI slop.</strong> No "In today's competitive landscape" or "We value your patronage." Real language.</li>
        <li><strong>Fast.</strong> 10 seconds. No prompt engineering. No back-and-forth.</li>
      </ul>

      {/* IMAGE: Example showing a real review and Reviewly's response side by side */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Real review with Reviewly's personalized AI response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Works for Every Business Type
      </h2>
      <p className="text-navy-700 mb-4">
        Restaurants, hotels, dental offices, salons, auto shops, law firms — Reviewly handles them all. The AI adapts to the industry context based on what's in the review.
      </p>
      <p className="text-navy-700 mb-8">
        No setup. No industry selection. Just paste the review and it figures it out.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Generator →
          </Link>
          <Link href="/uses/free-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Free Review Response Generator →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
