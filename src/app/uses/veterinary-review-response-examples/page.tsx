import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Veterinary Review Response Examples — Replies for Vet Clinics | Reviewly",
    description: "Veterinary review response examples covering pet care, compassion, and emergency visits. Generate vet clinic review replies in 10 seconds with Reviewly.",
  };
}

export default function VeterinaryReviewResponseExamples() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Veterinary Review Response Examples
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        Veterinary review responses are emotional. Pet owners write reviews at their happiest and their most heartbroken. How your clinic responds says everything about the kind of care you provide.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Reviewly generates compassionate, specific responses for vet clinic reviews. It picks up on the pet's name, the visit type, and the tone of the review. Paste it in, get a response.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      {/* IMAGE: Reviewly generating a compassionate response to a vet clinic review */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/demo-response-generated.webp"
                  alt="Reviewly generating a vet clinic review response - veterinary review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What Pet Owners Mention in Vet Reviews
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-1 mb-8">
        <li>Quality of pet care and treatment</li>
        <li>Compassion from vets and staff</li>
        <li>Emergency visit experience</li>
        <li>Costs and billing transparency</li>
        <li>Communication about diagnosis and treatment options</li>
        <li>Wait times</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Emergency Visit Gone Well
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐⭐⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"Brought our dog Max in at 10pm with a bloated stomach. Dr. Rivera acted fast and saved his life. The whole team stayed late. We can't thank them enough."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"We're so glad Max is doing well. Dr. Rivera and the team take emergency cases seriously — that's what we're here for. Give Max a belly rub from us."</p>
      </div>

      {/* IMAGE: Vet clinic review about costs with professional response */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/dashboard-response-generated.webp"
                  alt="Vet review about costs with thoughtful response - veterinary review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Example: Cost Concern
      </h2>
      <div className="card p-6 mb-4">
        <p className="text-sm font-semibold text-navy-500 mb-2">⭐⭐ Review:</p>
        <p className="text-navy-700 italic">"$800 for bloodwork and an exam. No real answers. Just told us to 'monitor' our cat. Felt like we paid a lot for nothing."</p>
      </div>
      <div className="card p-6 mb-8">
        <p className="text-sm font-semibold text-emerald-600 mb-2">✅ Generated Response:</p>
        <p className="text-navy-700">"I understand the frustration when costs feel high and answers feel unclear. Diagnostic bloodwork sometimes rules things out rather than pinpointing one cause, which can feel unsatisfying. We'd like to discuss your cat's results in more detail — please call us to schedule a follow-up conversation at no charge."</p>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Vet Reviews Are Personal
      </h2>
      <p className="text-navy-700 mb-4">
        People choose their vet the way they choose a pediatrician. Reviews about compassionate care carry serious weight. Responding with warmth and specificity shows prospective pet owners they'll be treated well.
      </p>
      <p className="text-navy-700 mb-8">
        Reviewly helps vet clinics respond to every review without pulling staff away from patients. Compassionate, specific, and fast.
      </p>

      {/* IMAGE: Vet clinic front desk staff using Reviewly between appointments */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Vet clinic staff managing reviews with Reviewly - veterinary review response examples"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/medical-practice-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Medical Practice Review Response Examples →
          </Link>
          <Link href="/uses/5-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            5-Star Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
        </div>
      </div>
    </div>
  );
}
