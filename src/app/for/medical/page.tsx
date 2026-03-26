import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Medical Practice Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Medical practice review response examples for doctors, clinics, and healthcare providers. HIPAA-conscious templates for patient care, wait times, billing, and staff feedback.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Dr. Patel took the time to explain my diagnosis in detail and answered all my questions without rushing. The nurses were kind and the office was clean. Best medical experience I have had in years.',
    response:
      'Thank you for sharing your experience. Dr. Patel believes every patient deserves a thorough explanation and the time to ask questions. We are glad the nursing staff and office environment contributed to a positive visit. We look forward to continuing to support your health.',
  },
  {
    stars: 2,
    review:
      'Waited over an hour past my appointment time. When I finally saw the doctor it felt rushed — maybe five minutes total. The front desk staff were apologetic but it is still frustrating. Billing was also confusing.',
    response:
      'We apologize for the extended wait and the rushed visit — that is not the experience we aim to provide. We are reviewing our scheduling process to reduce wait times and ensure each patient receives adequate time with their provider. Regarding billing, please contact our office directly and we will walk through every charge with you.',
  },
  {
    stars: 1,
    review:
      'Called three times to get test results and was told someone would call me back. Nobody did. Had to physically go to the office to get my results. Terrible communication.',
    response:
      'We sincerely apologize for the communication breakdown. Waiting for test results is stressful and you should not have to visit the office to get them. We have implemented a new follow-up protocol to ensure callbacks happen within 24 hours. We take this feedback seriously and appreciate you bringing it to our attention.',
  },
  {
    stars: 4,
    review:
      'Great practice overall. Dr. Chen is thorough and the staff is friendly. The online portal for appointments and records is convenient. Only issue is the parking lot is always full during peak hours.',
    response:
      'Thank you for the positive feedback about Dr. Chen and our team. We are glad the patient portal is working well for you — we invested in it to make healthcare more accessible. We are aware of the parking challenge during peak hours and are exploring overflow options with a nearby lot. Thank you for your patience on that front.',
  },
]

export default function MedicalReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Medical Practice Review Response Examples"
        subtitle="Medical practice review response examples for patient care, wait times, staff, and billing — HIPAA-conscious and ready to customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Medical Practices Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Medical practice review responses show patients you value their feedback while maintaining professionalism. Patients choose providers based on reviews — your responses shape that decision.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Important: never reference specific diagnoses, treatments, or protected health information in public responses. Keep responses general while still being helpful and empathetic.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common medical practice scenarios — from wait times to billing concerns to communication failures.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Medical Practice Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Medical Practice Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Never disclose patient health information — keep responses HIPAA-compliant.</li>
            <li>• Acknowledge wait times and scheduling issues with specific improvement steps.</li>
            <li>• Direct billing concerns to the office for private discussion.</li>
            <li>• Thank patients for trusting your practice with their health.</li>
            <li>• Keep the tone warm but professional — healthcare is personal.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Medical Practice Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any medical practice review into Reviewly and get a professional, HIPAA-conscious response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
