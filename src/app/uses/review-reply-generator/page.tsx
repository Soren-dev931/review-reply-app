import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Review Reply Generator — Fast, Personalized Review Replies | Reviewly",
    description: "Review reply generator that creates personalized responses to customer reviews in 10 seconds. Paste a review, get a reply. Works for any business.",
  };
}

export default function ReviewReplyGenerator() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Review Reply Generator
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A review reply generator takes the work out of responding to customer reviews. Instead of staring at a review for 10 minutes trying to figure out what to say, you paste it in and get a reply back in seconds.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly is a review reply generator that writes responses sounding like they came from you — not from a robot. It reads the review, picks up on the details, and generates a reply that's specific and professional.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly review reply generator in action */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly review reply generator interface"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Speed Matters
      </h2>
      <p className="text-navy-700 mb-4">
        The faster you reply to a review, the more it matters. A response within 24 hours shows the customer you're paying attention. A response a month later looks like damage control.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly generates replies in 10 seconds. You can respond to every review the day it comes in without carving out a big chunk of time.
      </p>

      {/* IMAGE: Timeline showing response time impact on customer perception */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Response time impact on customer perception - review reply generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Paste, Generate, Post
      </h2>
      <p className="text-navy-700 mb-4">
        Three steps. That's it.
      </p>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Paste</strong> the review into Reviewly</li>
        <li><strong>Generate</strong> a personalized reply in 10 seconds</li>
        <li><strong>Post</strong> it back to Google (or wherever the review lives)</li>
      </ul>
      <p className="text-navy-700 mb-8">
        No prompting. No editing. No template libraries to scroll through. The reply is ready to go as-is.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Works for Every Type of Review
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>1-star angry rants — calm, empathetic replies</li>
        <li>3-star mixed feedback — balanced acknowledgment</li>
        <li>5-star praise — warm, specific thanks</li>
        <li>Vague reviews — professional responses that still sound personal</li>
      </ul>

      {/* IMAGE: Different star ratings being handled by Reviewly's reply generator */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-recent-responses.webp"
                  alt="Reviewly handling reviews of different star ratings - review reply generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Stop Putting Off Review Replies
      </h2>
      <p className="text-navy-700 mb-8">
        Every business owner knows they should respond to reviews. Most don't because it takes too long. Reviewly makes it fast enough to actually do it. Every review. Every time.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/ai-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response Generator →
          </Link>
          <Link href="/uses/free-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Free Review Response Generator →
          </Link>
          <Link href="/uses/google-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}
