import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Review Response Examples — Handle Bad Reviews Professionally | Reviewly",
    description: "Negative review response examples across industries. Learn how to respond with empathy and professionalism. Generate responses in 10 seconds with Reviewly.",
  };
}

export default function NegativeReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Negative Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Negative review responses are the ones that matter most. A bad review sitting there with no reply tells every future customer you don't care. A thoughtful response tells them you do.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates professional responses to negative reviews across every industry. It reads the complaint, acknowledges the issue, and drafts a reply that's empathetic without being defensive. Ten seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly turning a negative review into a professional response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing negative review review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Makes a Good Negative Review Response
      </h2>
      <p className="text-navy-700 mb-4">
        Three things separate a good response from a bad one:
      </p>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li><strong>Empathy first.</strong> Acknowledge the frustration before explaining anything. "I understand" goes further than "Actually, what happened was..."</li>
        <li><strong>Be specific.</strong> Reference what they actually complained about. Generic "sorry for the inconvenience" responses feel automated — because they usually are.</li>
        <li><strong>Invite them back.</strong> Give them a reason to return. A direct contact, a makeup offer, a promise to fix the issue. Turn the critic into a second-chance customer.</li>
      </ul>

      {/* IMAGE: Before/after showing a defensive response vs an empathetic one */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for negative review review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Restaurant Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Cold food, rude server, and we waited an hour. Never coming back."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Cold food and an hour wait is not what we want for any guest. I've spoken with our kitchen and floor team about the issues you described. I'd like the chance to make it up to you — please reach out to me directly and your next meal is on us."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Hotel Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Room smelled like smoke. Complained at the desk and they shrugged. Won't stay here again."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"A smoke-smelling room should have been resolved immediately, and I'm sorry the front desk didn't handle it. We've addressed this with the team. If you give us another chance, please contact me directly and I'll personally ensure you get a fresh, clean room."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Service Provider Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Scheduled an appointment for 2pm. Didn't get seen until 3:15. No apology. The actual service was fine but the disrespect of my time was not."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Your time matters and a 75-minute delay without communication is not acceptable. We're implementing better scheduling and notification practices so this doesn't happen again. Glad the service itself met expectations — we want the whole experience to match."</p>
      </div>

      {/* IMAGE: Business owner feeling confident responding to negative reviews */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile dashboard showing negative review review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Don't Let Negative Reviews Sit Unanswered
      </h2>
      <p className="text-navy-700 mb-4">
        An unanswered negative review looks like agreement. Responding professionally shows potential customers that you take feedback seriously and fix problems.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly takes the emotion out of responding. You paste the review, it generates something professional, you post it. No stewing, no drafting, no deleted angry replies.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
          <Link href="/uses/hotel-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Hotel Review Response Examples →
          </Link>
          <Link href="/uses/restaurant-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Restaurant Review Response Examples →
          </Link>
          <Link href="/blog/how-to-respond-to-bad-reviews-on-google" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            How to Respond to Bad Reviews on Google →
          </Link>
        </div>
      </div>
    </div>
  );
}
