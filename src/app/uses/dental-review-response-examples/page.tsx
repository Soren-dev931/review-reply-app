import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Dental Review Response Examples — Replies for Dental Offices | Reviewly",
    description: "Dental review response examples for patient care, anxiety, and wait times. Generate professional dental office review replies in 10 seconds.",
  };
}

export default function DentalReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Dental Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Dental review responses matter more than most offices realize. Patients choosing a new dentist read reviews first — especially the ones about pain, anxiety, and how the staff treated them.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates responses for dental reviews that reference the specific procedure, the hygienist, or whatever the patient mentioned. Paste the review, get a reply in 10 seconds.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Dental office review response being generated in Reviewly */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Reviewly generating a dental office review response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Dental Patients Mention in Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Patient care and bedside manner</li>
        <li>Dental anxiety and how staff handled it</li>
        <li>Wait times in the lobby</li>
        <li>Specific procedures — cleanings, fillings, crowns</li>
        <li>Staff friendliness at the front desk</li>
        <li>Billing and insurance confusion</li>
      </ul>

      {/* IMAGE: Example dental review about anxiety with generated empathetic response */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Dental review and empathetic AI response]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Patient With Dental Anxiety
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"I have terrible dental anxiety and haven't been in 3 years. Dr. Patel and Lisa made me feel so comfortable. They explained every step. No judgment at all."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Coming back after 3 years takes courage, and we're glad you trusted us with that step. Dr. Patel and Lisa always make a point to explain everything along the way. We'll see you at your next visit — no judgment, ever."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Wait Time Complaint
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Waited over 40 minutes past my appointment time. No explanation. The cleaning itself was fine but I had to get back to work."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"A 40-minute wait with no heads-up is frustrating, especially when you're on a work schedule. That's on us. We're working on better communication when we're running behind. Glad the cleaning went well — we'll do better on the timing next visit."</p>
      </div>

      {/* IMAGE: Dental office manager using Reviewly on a tablet between patients */}
      <div className="bg-navy-100 rounded-lg h-48 flex items-center justify-center text-navy-400 text-sm mb-12">
        [Image: Dental office manager replying to reviews on tablet]
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Build Trust With Every Reply
      </h2>
      <p className="text-navy-700 mb-4">
        People pick their dentist based on trust. Responding to reviews — especially the nervous patients — shows potential patients they'll be treated well too.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps dental offices reply to every review without taking time away from patients. Quick, specific, professional.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/medical-practice-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Medical Practice Review Response Examples →
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
