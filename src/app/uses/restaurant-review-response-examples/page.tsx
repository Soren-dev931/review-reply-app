import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Restaurant Review Response Examples — Reply to Every Guest | Reviewly",
    description: "Restaurant review response examples covering food, service, and ambiance. Generate personalized restaurant review replies in 10 seconds with Reviewly.",
  };
}

export default function RestaurantReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Restaurant Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Restaurant review responses tell future diners what kind of place you run. Reply to complaints and people see you care. Ignore them and they eat somewhere else.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly writes responses for restaurant reviews in seconds. It picks up on the food, the service, the wait — whatever the customer mentioned.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly interface showing a restaurant review being pasted with generated response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a restaurant review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Diners Talk About in Reviews
      </h2>
      <p className="text-navy-700 mb-4">
        Restaurant reviews hit the same topics every time:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Food quality and taste</li>
        <li>Service speed and attentiveness</li>
        <li>Wait staff attitude</li>
        <li>Ambiance and noise level</li>
        <li>The chef or specific dishes</li>
        <li>Value for money</li>
      </ul>
      <p className="text-navy-700 mb-8">
        Reviewly reads the review and references the specific details. If someone praised your risotto, the response mentions the risotto.
      </p>

      {/* IMAGE: Example restaurant review about slow service with AI-generated response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Restaurant review and response side by side]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Responding to a Service Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Food was decent but we waited 45 minutes for entrees. Our server disappeared. Not worth the price."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"A 45-minute wait for entrees isn't the experience we want anyone to have. I've addressed this with our kitchen and floor team. Glad the food itself was decent — we'd like the chance to show you the full experience. Ask for me next time and I'll make sure you're taken care of."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Thanking a Happy Customer
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"The lamb shank was incredible. Our server Jake made great wine recommendations. Will definitely be back for date night."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Jake will be thrilled to hear this — he takes his wine pairings seriously. The lamb shank is our chef's favorite too. See you on date night."</p>
      </div>

      {/* IMAGE: Restaurant owner on phone replying to reviews quickly using Reviewly */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Restaurant owner quickly replying to reviews]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Restaurants Get More Reviews Than Most Businesses
      </h2>
      <p className="text-navy-700 mb-4">
        A busy restaurant might get 10-20 new reviews a week. Replying to each one by hand takes hours. Most owners give up after a while.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly keeps you responding consistently. Paste, generate, post. The whole thing takes under a minute per review.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/hotel-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Hotel Review Response Examples →
          </Link>
          <Link href="/uses/positive-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Positive Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
