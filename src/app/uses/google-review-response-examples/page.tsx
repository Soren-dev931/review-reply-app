import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Examples — Replies That Help Local SEO | Reviewly",
    description: "Google review response examples for businesses on Google Maps and Google Business Profile. See how responding affects local pack ranking. Generate replies in 10 seconds.",
  };
}

export default function GoogleReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Google review response examples matter more than responses on other platforms. Google uses review activity — including owner responses — as a signal for local search ranking. Responding to Google reviews isn't just customer service. It's SEO.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates Google review responses in 10 seconds. Paste the review from your Google Business Profile, get a reply, post it back. Here are examples of what those responses look like.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Google Business Profile review section with owner responses]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: Positive Google Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Google Review:</p>
        <p className="text-navy-700 italic">"Found this place on Google Maps and so glad I did. Quick service, fair prices, and they explained everything they were doing to my car. Will definitely be back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Glad you found us! Transparency is important to us — we always want you to know what's being done and why. Thanks for the kind words and we'll see you next time you need service."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: Negative Google Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Google Review:</p>
        <p className="text-navy-700 italic">"Made a reservation through Google and when I showed up they had no record of it. Waited 40 minutes for a table on a Friday night. Not worth the hassle."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"A lost reservation and a 40-minute wait is a rough start to a Friday night. I've looked into the booking issue with our host team and we've updated our reservation system to prevent this. If you'd like to try again, contact me directly and I'll hold a table for you personally."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 3: Mixed Google Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Google Review:</p>
        <p className="text-navy-700 italic">"Food was good but the place was freezing. Asked them to turn down the AC and nothing changed. Would come back if they fix the temperature."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Glad the food hit the mark. You're not the first to mention the AC — we've adjusted the thermostat settings and added a check to our opening routine. Appreciate the feedback and hope you'll give us another visit."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Google Maps local pack showing businesses with review responses]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Google Reviews Specifically Matter
      </h2>
      <p className="text-navy-700 mb-4">
        Google's local pack — the map results at the top of search — factors in review signals. That includes:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-4">
        <li>Total number of reviews</li>
        <li>Average star rating</li>
        <li>Review recency</li>
        <li>Owner response rate</li>
        <li>Keywords in reviews and responses</li>
      </ul>
      <p className="text-navy-700 mb-8">
        Responding to every Google review signals to Google that your business is active and engaged. It won't skyrocket your ranking overnight, but it's one of many signals that compound over time.
      </p>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a Google review response with SEO context]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Respond to Every Google Review
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Generator →
          </Link>
          <Link href="/uses/review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Examples →
          </Link>
          <Link href="/uses/google-review-responder" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Responder →
          </Link>
        </div>
      </div>
    </div>
  );
}
