import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Etsy Review Response Examples — Replies for Handmade & Custom Sellers | Reviewly",
    description: "Etsy review response examples for sellers handling product reviews, shipping complaints, and customization issues. Generate Etsy review replies in 10 seconds.",
  };
}

export default function EtsyReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Etsy Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Etsy review response examples are different from local business responses. You're not a restaurant or hotel. You're a maker, a seller, a one-person shop. The reviews are about products — sizing, materials, shipping speed, and whether the item matched the listing photo.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Here are examples of how to respond to common Etsy reviews. Reviewly can generate these for you in seconds — just paste the review.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Etsy seller reviewing product feedback on their shop dashboard - etsy review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: Shipping Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Ordered this 3 weeks ago and it just arrived. The item is fine but the shipping took way too long for what I paid."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"I'm sorry about the shipping time. This order got held up at the carrier — once it leaves my studio, the delivery timeline is out of my hands, but I understand that's still frustrating. I'm glad the item itself met your expectations. If you order again, message me and I'll look into faster shipping options for your area."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: Customization Issue
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The engraving was slightly off-center. It's not terrible but for a personalized gift I expected it to be perfect."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"You're right — personalized items should look exactly right. I do each engraving by hand so small variations can happen, but off-center isn't acceptable to me either. I'd like to redo this one at no charge. Please send me a message and I'll get a replacement started."</p>
      </div>

      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Example Etsy review with a personalized seller response - etsy review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Makes Etsy Responses Different
      </h2>
      <p className="text-navy-700 mb-4">
        Etsy buyers know they're buying from a person, not a corporation. They expect a human response. First-person language works. "I made this" beats "Our team produced this."
      </p>
      <p className="text-navy-700 mb-4">
        Common Etsy review topics that need specific responses:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Shipping delays (often carrier issues, not seller)</li>
        <li>Item doesn't match listing photo (lighting, screen differences)</li>
        <li>Sizing or fit issues</li>
        <li>Customization errors</li>
        <li>Packaging and presentation</li>
      </ul>
      <p className="text-navy-700 mb-8">
        Reviewly picks up on these details from the review text and generates a response that sounds like you — a real person who made the thing and cares about it.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly for Your Etsy Shop
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
