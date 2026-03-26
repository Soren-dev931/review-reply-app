import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Car Dealership Review Response Examples — Replies for Dealers | Reviewly",
    description: "Car dealership review response examples for sales, pricing, and service. Generate professional dealership review replies in 10 seconds with Reviewly.",
  };
}

export default function CarDealershipReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Car Dealership Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Car dealership review responses carry serious weight. Buying a car is one of the biggest purchases people make, and they research heavily before walking onto a lot. Your review replies are part of that research.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for dealership reviews that address the sales experience, pricing, service department — whatever the customer talked about. Paste the review, get a reply.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a response to a car dealership review */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a car dealership review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Car Buyers Mention in Dealership Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Sales experience — pressure level, honesty</li>
        <li>Pricing and negotiation transparency</li>
        <li>Service department quality</li>
        <li>Follow-up after the sale</li>
        <li>Finance process and paperwork</li>
        <li>Specific salesperson interactions</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Pushy Sales Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Walked in to test drive a Civic. Got bombarded with add-ons and extended warranties. Felt like they cared more about the deal than me. Bought somewhere else."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"A test drive should be pressure-free, and I'm sorry yours wasn't. We've been working with our sales team on letting customers lead the conversation. If you're ever in the market again, ask for me directly — I'll make sure the experience is different."</p>
      </div>

      {/* IMAGE: Happy car buyer review with personalized dealer response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive dealership review with personal response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Great Sales Experience
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Tony made buying my first truck easy. No games, no hidden fees. He even helped me set up the Bluetooth. Drove off happy."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Tony loves the Bluetooth setup moment — says that's when it finally feels real. Congrats on the new truck. We're here if you need anything down the road."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Dealerships Get Scrutinized More Than Most
      </h2>
      <p className="text-navy-700 mb-4">
        Car buyers expect to get pressured. When they don't, they leave glowing reviews. When they do, the reviews are brutal. Either way, responding shows you're paying attention.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps dealership GMs and sales managers respond to reviews without pulling them off the floor. Fast, specific, professional.
      </p>

      {/* IMAGE: Dealership manager using Reviewly on tablet in showroom */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Dealership manager responding to reviews on tablet]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/auto-repair-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Auto Repair Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
