import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Medical Practice Review Response Examples — HIPAA-Aware Replies | Reviewly",
    description: "Medical practice review response examples that stay HIPAA-compliant. Generate professional healthcare review replies in 10 seconds with Reviewly.",
  };
}

export default function MedicalPracticeReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Medical Practice Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Medical practice review responses require a careful balance. You want to be empathetic and professional, but you can't confirm or deny that someone is a patient. HIPAA makes responding to healthcare reviews tricky.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates HIPAA-aware responses for medical practice reviews. It acknowledges the feedback without disclosing protected information. Paste the review, get a reply that's professional and compliant.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a HIPAA-compliant medical review response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-main.webp"
                  alt="Reviewly dashboard for managing medical practice review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Patients Mention in Medical Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Doctor bedside manner and attentiveness</li>
        <li>Wait times in the lobby and exam room</li>
        <li>Staff friendliness and helpfulness</li>
        <li>Billing confusion and insurance issues</li>
        <li>Appointment availability</li>
        <li>Follow-up care and communication</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-amber-800 text-sm font-medium">⚠️ HIPAA Note: Never confirm or deny someone is a patient. Don't reference diagnoses, treatments, or visit details in public responses — even if the reviewer mentioned them first.</p>
      </div>

      {/* IMAGE: Example medical practice review with HIPAA-safe response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly reviews dashboard for medical practice review management"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Billing Frustration
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐ Review:</p>
        <p className="text-navy-700 italic">"Got a surprise $400 bill two months after my visit. No one explained the costs upfront. Called the billing department three times and got nowhere."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"We understand how frustrating unexpected billing can be. We take feedback about cost transparency seriously and are reviewing our communication process. Please contact our office manager directly at [phone] so we can work through the specifics of your account privately."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Positive Experience
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Dr. Chen took the time to explain everything. Didn't rush me. The nurses were kind and the office was clean. Hard to find a doctor like this."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"Thank you for the kind words. Our team is committed to making every visit thorough and unhurried. We appreciate you taking the time to share your experience."</p>
      </div>

      {/* IMAGE: Medical office administrator using Reviewly on desktop */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/mobile-dashboard.webp"
                  alt="Reviewly mobile dashboard showing medical practice review responses"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Healthcare Reviews Require Extra Care
      </h2>
      <p className="text-navy-700 mb-4">
        Medical practices can't respond to reviews the way a restaurant can. You can't say "sorry about your knee surgery." Reviewly generates responses that are empathetic and professional without crossing HIPAA lines.
      </p>
      <p className="text-navy-700 mb-8">
        Every response invites the reviewer to continue the conversation privately — which is exactly what compliance requires.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/dental-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Dental Review Response Examples →
          </Link>
          <Link href="/uses/veterinary-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Veterinary Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
