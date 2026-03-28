import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Does Responding to Google Reviews Help SEO? Yes — Here's How | Typani",
    description: "Does responding to Google reviews help SEO? Google confirms it does. Learn how review responses boost local search rankings and how Typani makes it easy.",
  };
}

export default function DoesRespondingToGoogleReviewsHelpSEO() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Does Responding to Google Reviews Help SEO?
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Yes. Responding to Google reviews helps SEO. Google has said so directly. In their own support documentation, Google states: "Respond to reviews to show that you value your customers and their feedback. High-quality, positive reviews from your customers can improve your business visibility."
      </p>
      <p className="text-lg text-navy-700 mb-8">
        That's not a rumor or an SEO theory. It's from Google.
      </p>

      {/* IMAGE: Google's own documentation stating that review responses improve visibility */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Google documentation about review responses and visibility - does responding to google reviews help seo"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        How Review Responses Affect Local Rankings
      </h2>
      <p className="text-navy-700 mb-4">
        Google's local search algorithm considers three main factors: relevance, distance, and prominence. Review responses affect prominence.
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Activity signals.</strong> Responding to reviews shows Google your business is active and engaged. Inactive profiles get deprioritized.</li>
        <li><strong>Keyword content.</strong> Your responses add content to your Google Business Profile. When you naturally mention your services, location, or specialties, it gives Google more context to rank you for relevant searches.</li>
        <li><strong>Review velocity.</strong> Businesses that respond to reviews tend to get more reviews. Customers see the engagement and feel their review will be read. More reviews = stronger ranking signal.</li>
      </ul>

      {/* IMAGE: Local search ranking factors showing review responses as a factor */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/analytics-page.webp"
                  alt="Local SEO ranking factors including review activity - does responding to google reviews help seo"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        It's Not Just About Rankings
      </h2>
      <p className="text-navy-700 mb-4">
        Even if SEO wasn't a factor, responding to reviews improves click-through rates. When someone sees a business that responds to every review — good and bad — they're more likely to click, call, or visit.
      </p>
      <p className="text-navy-700 mb-8">
        A business with 200 reviews and zero responses looks different from one with 200 reviews and 200 responses. The second one looks like it cares.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What a Good Response Looks Like for SEO
      </h2>
      <p className="text-navy-700 mb-4">
        You don't need to keyword-stuff your responses. Natural language works. But mentioning your business type, services, or location in your replies gives Google useful context.
      </p>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">Example Response (Restaurant):</p>
        <p className="text-navy-700">"Thanks for the kind words about our brunch menu. The avocado toast is one of our most popular dishes here in downtown Austin. Hope to see you back this weekend."</p>
      </div>
      <p className="text-navy-700 mb-8">
        That response naturally mentions "brunch menu," "avocado toast," and "downtown Austin." Google reads all of it.
      </p>

      {/* IMAGE: Google search results showing a local business with active review responses */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/landing-hero.webp"
                  alt="Google search results featuring engaged business - does responding to google reviews help seo"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Typani Makes Consistent Responding Easy
      </h2>
      <p className="text-navy-700 mb-4">
        The SEO benefit comes from consistency. Responding to one review doesn't move the needle. Responding to every review, every month, does.
      </p>
      <p className="text-navy-700 mb-8">
        Typani generates review responses in 10 seconds. Paste the review, get a reply, post it. The consistency becomes automatic.
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
          <Link href="/blog/how-to-respond-to-bad-reviews-on-google" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            How to Respond to Bad Reviews on Google →
          </Link>
          <Link href="/uses/ai-review-response-generator" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            AI Review Response Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}
