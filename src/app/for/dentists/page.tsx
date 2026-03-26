import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Dental Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Dental review response examples for patient feedback on care, procedures, wait times, and staff. Professional templates for dentists and dental offices.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Dr. Patel and her team made my root canal painless. I have severe dental anxiety and they walked me through every step. The office is clean and modern. Highly recommend.',
    response:
      'Thank you for your kind words about Dr. Patel and the team. We understand dental anxiety is real, and we take extra care to explain each step so patients feel in control. We are glad the root canal went smoothly for you. Your recommendation means a lot to our practice.',
  },
  {
    stars: 4,
    review:
      'Good cleaning and checkup. The hygienist was gentle and thorough. Only downside was a 20-minute wait past my appointment time. Otherwise a solid experience.',
    response:
      'Thank you for sharing your experience. We are glad the cleaning went well and that our hygienist took good care of you. The wait time is a fair concern — we are adjusting our scheduling to reduce delays. We appreciate your patience and look forward to your next visit.',
  },
  {
    stars: 2,
    review:
      'Went in for a filling and felt rushed the entire time. The dentist barely explained what was happening. Front desk was friendly but the clinical experience was lacking.',
    response:
      'We appreciate your honest feedback. Feeling rushed during a procedure is not the experience we aim for. We have spoken with our clinical team about taking more time to communicate with patients during treatments. We are glad the front desk provided a positive interaction and want to ensure the clinical side matches. Please reach out if you would like to discuss further.',
  },
  {
    stars: 1,
    review:
      'Waited 45 minutes, then was told my insurance was not accepted after confirming on the phone. Wasted my entire lunch break. Very frustrating.',
    response:
      'We sincerely apologize for the insurance miscommunication and the long wait. That should not have happened. We are reviewing our verification process to ensure insurance coverage is confirmed accurately before appointments. We understand your time is valuable and we failed to respect that. Our office manager would like to reach out to make this right.',
  },
]

export default function DentistReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Dental Review Response Examples"
        subtitle="Dental review response examples for patient care, procedures, wait times, and staff friendliness — ready to use or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Dental Offices Need Review Responses</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Patients choose dentists based on reviews. A response shows you care about the experience, not just the procedure.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Many patients have dental anxiety. Seeing a compassionate response to a negative review can be the deciding factor.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common dental review scenarios — from anxiety management to scheduling issues.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Dental Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Tips for Dental Review Responses</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Acknowledge patient anxiety — it is common and validating it builds trust.</li>
            <li>• Reference the specific procedure or staff member mentioned.</li>
            <li>• Be HIPAA-conscious — never reference specific diagnoses or treatments not mentioned by the patient.</li>
            <li>• Address wait time complaints with concrete scheduling improvements.</li>
            <li>• Keep responses professional but warm.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Dental Review Responses Instantly
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any patient review and get a professional, HIPAA-conscious response in seconds.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
