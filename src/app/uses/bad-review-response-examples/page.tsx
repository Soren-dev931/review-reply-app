import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Bad Review Response Examples — What to Say When a Customer Goes Off | Reviewly",
    description: "Bad review response examples for restaurants, hotels, and service businesses. Copy these responses or generate your own in 10 seconds with Reviewly.",
  };
}

export default function BadReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Bad Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Bad review response examples help you figure out what to say when someone leaves a harsh review. Nobody searches for "negative review response" — they search for "bad review." Because that's what it is.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Here are real-style bad reviews with responses you can adapt. Or skip the adapting and let Reviewly generate one for you in 10 seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a response to a bad review]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: Bad Restaurant Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Ordered the steak medium rare. Got it well done. Asked the waiter to fix it and he rolled his eyes. Won't be back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Getting your steak wrong and then not handling it well is a double miss on our part. I've talked to the kitchen and the front-of-house team about this. If you're willing to give us another shot, reach out to me directly — I'll make sure it's right."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: Bad Auto Shop Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Charged me $400 for brake pads and the squeaking came back a week later. Called and they said I'd have to pay for another diagnostic. Total rip off."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"Brake work should last longer than a week, full stop. That's not the experience we want for anyone. Please call and ask for Mike — we'll take another look at no charge and get this sorted."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Side-by-side comparison of a bad review and a professional response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 3: Bad Salon Review
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Asked for a trim. Got 3 inches chopped off. I showed her a picture and she completely ignored it."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Response:</p>
        <p className="text-navy-700">"That's frustrating, and I understand — a haircut that doesn't match what you asked for is a real letdown. I'd like to talk about how we can make it right. Please call us and we'll set up a complimentary correction appointment."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Every Bad Review Response Needs
      </h2>
      <p className="text-navy-700 mb-4">
        The formula is simple. Acknowledge the problem. Don't get defensive. Offer to fix it. Move the conversation offline.
      </p>
      <p className="text-navy-700 mb-8">
        The hard part is doing this consistently for every review without sounding robotic. That's where Reviewly comes in — it reads each review and writes a response that references the actual complaint.
      </p>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly dashboard showing multiple bad reviews with generated responses]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
          <Link href="/uses/funny-responses-to-negative-reviews" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Funny Responses to Negative Reviews →
          </Link>
        </div>
      </div>
    </div>
  );
}
