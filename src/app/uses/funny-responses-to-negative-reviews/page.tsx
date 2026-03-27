import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Funny Responses to Negative Reviews — When Humor Works (and When It Doesn't) | Reviewly",
    description: "Funny responses to negative reviews that actually work. See examples of witty review replies, learn when humor helps, and when it backfires badly.",
  };
}

export default function FunnyResponsesToNegativeReviews() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Funny Responses to Negative Reviews
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Funny responses to negative reviews go viral for a reason. A witty reply can make your business look confident and human. But get the tone wrong and you look like you're mocking a customer.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Here's when humor works, when it doesn't, and a couple of examples worth studying. Reviewly can match a casual or witty tone if that's your brand — just set it up.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: A funny but professional review response example]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 1: The Light Touch
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The pizza was cold and the delivery guy looked like he just woke up."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Funny Response:</p>
        <p className="text-navy-700">"Cold pizza is only acceptable at 7am the morning after. Sorry about that — and we'll talk to Dave about the bedhead. Your next order is on us if you give us another shot."</p>
      </div>
      <p className="text-navy-700 mb-8">
        This works because it's self-aware, doesn't dismiss the complaint, and still offers a fix. The humor softens the interaction without dodging accountability.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example 2: The Confident Comeback
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Worst tacos I've ever had. My dog wouldn't eat these."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Funny Response:</p>
        <p className="text-navy-700">"We'd argue with the dog but he's probably right — that batch was off. We've fixed the recipe issue and would love for you (and the dog) to try again. First round on us."</p>
      </div>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Examples of funny vs inappropriate review responses side by side]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        When Humor Backfires
      </h2>
      <p className="text-navy-700 mb-4">
        Don't use humor when the complaint involves safety, health, discrimination, or anything genuinely serious. A joke about food poisoning or a rude employee being "quirky" will make things worse.
      </p>
      <p className="text-navy-700 mb-4">
        Also avoid sarcasm. It reads differently in text than it sounds in your head. What feels clever to write often reads as dismissive to the person who posted the review — and to everyone else reading it.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Rules for Funny Review Responses
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Still acknowledge the problem — humor isn't a dodge</li>
        <li>Keep it short. One joke max. Don't try to do a tight five.</li>
        <li>Make fun of yourself, not the customer</li>
        <li>Always include a resolution or offer to fix it</li>
        <li>Skip the humor entirely for serious complaints</li>
      </ul>

      <p className="text-navy-700 mb-8">
        Reviewly can match your brand voice — including casual and witty tones. Set your preferred style and it'll generate responses that sound like you, not a corporate template.
      </p>

      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly tone settings showing casual and witty options]
      </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Try Reviewly — Match Your Brand Voice
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/bad-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Bad Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
