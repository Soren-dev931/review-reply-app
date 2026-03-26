import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Gym Review Response Examples — Replies for Fitness Centers | Reviewly",
    description: "Gym review response examples for equipment, classes, trainers, and billing. Generate fitness center review replies in 10 seconds with Reviewly.",
  };
}

export default function GymReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Gym Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Gym review responses help you stand out in a competitive market. People comparing gyms check reviews to see which one is clean, well-equipped, and actually cares about its members.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for gym and fitness center reviews in seconds. It picks up on equipment, classes, trainers, billing — whatever the member mentioned.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a response to a gym review */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a gym review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Members Mention in Gym Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Equipment quality and availability</li>
        <li>Cleanliness of floors, showers, and machines</li>
        <li>Group class quality and variety</li>
        <li>Personal trainers</li>
        <li>Membership billing and cancellation</li>
        <li>Crowding during peak hours</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Billing Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Tried to cancel for two months. They kept charging me. Had to dispute with my bank. Avoid."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Cancellation should never be that difficult, and I'm sorry for the experience. We've updated our cancellation process to be more straightforward. Please reach out to our membership team directly and we'll make sure everything is resolved on our end."</p>
      </div>

      {/* IMAGE: Positive gym review praising trainers with personalized response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Positive gym review with trainer shoutout]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Trainer Shoutout
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Coach Dave's HIIT class is the reason I keep coming back. Great energy, pushes you without being annoying. Gym is always clean too."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Dave brings it every class — glad you're feeling the energy. And thanks for noticing the cleanliness. Our maintenance crew works hard on that. See you at the next HIIT session."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Members Talk Before They Join
      </h2>
      <p className="text-navy-700 mb-4">
        Gyms compete on proximity, price, and reputation. Reviews are the reputation part. Responding to feedback — especially billing complaints — shows you run a transparent operation.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps gym managers stay on top of reviews without it becoming another task on the pile. Paste, generate, done.
      </p>

      {/* IMAGE: Gym manager responding to reviews from front desk */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Gym manager responding to reviews at front desk]
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
