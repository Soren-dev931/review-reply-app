import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Salon Review Response Examples — Replies for Hair Salons | Reviewly",
    description: "Salon review response examples for stylists, color, cuts, and booking. Generate personalized hair salon review replies in 10 seconds with Reviewly.",
  };
}

export default function SalonReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Salon Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Salon review responses build loyalty and attract new clients. When someone raves about their stylist, a personal reply turns them into a repeat customer. When someone's unhappy with a cut, a professional response can save the relationship.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for salon reviews in seconds. It picks up on the stylist's name, the service, the vibe — whatever the client talked about.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a response to a hair salon review */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a salon review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Salon Clients Mention in Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Stylist skill and personality</li>
        <li>Hair color accuracy</li>
        <li>Cut quality and style</li>
        <li>Wait times and booking ease</li>
        <li>Salon atmosphere and cleanliness</li>
        <li>Pricing and value</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Color Gone Wrong
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Asked for ash blonde and left with orange. Had to go somewhere else to fix it. Spent double what I planned."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"I'm sorry the color didn't come out as expected. Ash blonde can be tricky depending on the starting shade, but the result should still match what you asked for. I'd like to make this right — please reach out so we can discuss a correction at no additional cost."</p>
      </div>

      {/* IMAGE: Glowing salon review with personalized response mentioning the stylist */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive salon review with personalized response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Stylist Shoutout
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Maria is amazing. She listened to what I wanted and nailed it. The salon is cute and everyone is so friendly. Already booked my next appointment."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Maria is going to love hearing this. She really does listen — it's her thing. Glad you're already booked for next time. See you then!"</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Salons Run on Referrals and Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        New clients Google "hair salon near me" and pick based on reviews. Responding to those reviews makes your salon look active and personal. Ignoring them makes it look like you don't care.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps salon owners and front desk staff respond to every review without slowing down the day. Paste, generate, post.
      </p>

      {/* IMAGE: Salon front desk using Reviewly to manage Google reviews */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Salon staff managing reviews with Reviewly]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/spa-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Spa Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
