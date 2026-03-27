import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Generator — Reply to Google Reviews Fast | Reviewly",
    description: "Google review response generator that creates personalized replies for your Google Business Profile. Generate professional responses in 10 seconds.",
  };
}

export default function GoogleReviewResponseGenerator() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Response Generator
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A Google review response generator saves you hours every week. Google is where most customers leave reviews, and responding to them affects your local search ranking, your reputation, and whether someone picks you over the competition.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses specifically for Google reviews. Paste the review from your Google Business Profile, select the rating, and get a reply that's ready to post back.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Google Business Profile review with Reviewly generating a response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing Google review review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Why Google Reviews Specifically
      </h2>
      <p className="text-navy-700 mb-4">
        Google is the platform that matters most for local businesses:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Google reviews show up in search results and Maps</li>
        <li>Responding to reviews is a confirmed local SEO ranking factor</li>
        <li>Most customers check Google before Yelp, Facebook, or anywhere else</li>
        <li>Your Google Business Profile is often the first impression</li>
      </ul>

      {/* IMAGE: Google Maps search results showing businesses with review responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/landing-hero.webp"
                  alt="Google Maps results showing review response activity - google review response generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How to Use Reviewly for Google Reviews
      </h2>
      <ul className="list-decimal pl-6 text-navy-700 space-y-2 mb-8">
        <li>Open your Google Business Profile</li>
        <li>Find a review you want to respond to</li>
        <li>Copy the review text</li>
        <li>Paste it into Reviewly and select the star rating</li>
        <li>Get a response in 10 seconds</li>
        <li>Copy the response and paste it into Google's reply box</li>
      </ul>
      <p className="text-navy-700 mb-8">
        The response is tailored to what the customer wrote. It's not a template — it references the specific things they mentioned.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Google Rewards Businesses That Respond
      </h2>
      <p className="text-navy-700 mb-4">
        Google has confirmed that responding to reviews helps your local ranking. Active engagement signals to Google that your business is attentive and legitimate. More responses = more visibility in search and Maps.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps you respond to every Google review — not just the bad ones. Consistency is what Google (and customers) notice.
      </p>

      {/* IMAGE: Google local SEO ranking factors highlighting review responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/analytics-page.webp"
                  alt="Google local SEO factors including review responses - google review response generator"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Stop Ignoring Your Google Reviews
      </h2>
      <p className="text-navy-700 mb-8">
        Every unanswered review is a missed opportunity. Reviewly makes responding to Google reviews as easy as copy-paste. Under a minute per review. No prompt writing. No templates.
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
          <Link href="/blog/does-responding-to-google-reviews-help-seo" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Does Responding to Google Reviews Help SEO? →
          </Link>
        </div>
      </div>
    </div>
  );
}
