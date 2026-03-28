import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "How to Respond to Positive Reviews — Examples That Build Loyalty | Typani",
    description: "How to respond to positive reviews with examples. Learn to write warm, specific replies that turn happy customers into loyal ones. Generate responses with Typani.",
  };
}

export default function HowToRespondToPositiveReviews() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        How to Respond to Positive Reviews
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Knowing how to respond to positive reviews is just as important as handling complaints. Most businesses skip the good reviews or drop a quick "Thanks!" That's a missed opportunity.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        A specific, personal reply to a positive review makes the customer feel valued. It also shows potential customers that you're engaged and appreciative. Here's how to do it well.
      </p>

      {/* IMAGE: Positive Google review with a warm, specific business response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Positive review with a thoughtful business response - how to respond to positive reviews"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Rule 1: Be Specific
      </h2>
      <p className="text-navy-700 mb-4">
        If the customer mentioned a person, reference that person. If they mentioned a service, reference that service. Generic gratitude doesn't build relationships. Specific gratitude does.
      </p>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">❌ Generic:</p>
        <p className="text-navy-700">"Thank you for your kind words! We appreciate your business."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Specific:</p>
        <p className="text-navy-700">"Jake will be happy to hear about the wine pairing — he spent a lot of time building that menu. Glad the lamb shank was a hit. See you next date night."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Rule 2: Keep It Short
      </h2>
      <p className="text-navy-700 mb-8">
        Positive review responses don't need to be long. Two to three sentences is enough. Thank them, reference the details, invite them back. Done.
      </p>

      {/* IMAGE: Short, warm review response examples for different businesses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Short positive review response examples - how to respond to positive reviews"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Rule 3: Invite Them Back
      </h2>
      <p className="text-navy-700 mb-8">
        End with something forward-looking. "See you next time," "We'll have your favorite ready," "Looking forward to round two." This turns a one-time visit into a relationship.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Examples Across Industries
      </h2>

      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">Salon — ⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic mb-3">"Maria did an incredible job on my balayage. Exactly what I showed her."</p>
        <p className="text-sm font-semibold text-emerald-600 mb-1">Response:</p>
        <p className="text-navy-700">"Maria has a real eye for balayage — glad she nailed it. We'll keep your formula on file for next time."</p>
      </div>

      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">Auto Repair — ⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic mb-3">"Fixed the issue other shops couldn't figure out. Fair price too."</p>
        <p className="text-sm font-semibold text-emerald-600 mb-1">Response:</p>
        <p className="text-navy-700">"Glad we could track it down. Some issues just take a fresh pair of eyes. We'll be here when you need us."</p>
      </div>

      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-navy-500 mb-2">Hotel — ⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic mb-3">"Cleanest hotel room I've ever stayed in. The breakfast spread was amazing."</p>
        <p className="text-sm font-semibold text-emerald-600 mb-1">Response:</p>
        <p className="text-navy-700">"Our housekeeping team takes cleanliness seriously — they'll love hearing this. And the breakfast team puts in work every morning. Thanks for noticing."</p>
      </div>

      {/* IMAGE: Typani generating positive review responses for multiple industries */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-5star-response.webp"
                  alt="Typani generating positive review responses - how to respond to positive reviews"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Let Typani Handle It
      </h2>
      <p className="text-navy-700 mb-4">
        Writing positive review responses gets repetitive. You want each one to feel personal but you've got 15 reviews to get through. Typani reads each review and generates a unique, specific response.
      </p>
      <p className="text-navy-700 mb-8">
        Paste the review, get a reply, post it. Every happy customer gets a response that feels written just for them.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
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
          <Link href="/blog/does-responding-to-google-reviews-help-seo" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Does Responding to Google Reviews Help SEO? →
          </Link>
        </div>
      </div>
    </div>
  );
}
