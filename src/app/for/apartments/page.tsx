import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Apartment Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Apartment review response examples for property managers and landlords. Templates for maintenance, amenities, noise, and management responsiveness reviews.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Lived here two years and maintenance always responds within 24 hours. The gym was recently updated and the new package lockers are convenient. Management is responsive and professional.',
    response:
      'Thank you for being a valued resident for two years. We are glad the maintenance team has been responsive — they take the 24-hour commitment seriously. The gym update and package lockers were direct results of resident feedback, so it is good to hear they are making a difference. We appreciate you taking the time to share this.',
  },
  {
    stars: 3,
    review:
      'Apartment itself is nice. Good layout, updated kitchen. But parking is a nightmare and the dog park is always a mess. Management is hit or miss on communication.',
    response:
      'Thank you for the balanced feedback. We are glad you enjoy the apartment layout and kitchen. Parking is a known challenge and we are exploring additional solutions. We have increased the dog park cleaning schedule to daily and are adding more waste stations. On communication — we are implementing a new resident portal to improve response consistency.',
  },
  {
    stars: 2,
    review:
      'Submitted a maintenance request for a leaking faucet three weeks ago. Still waiting. The online portal shows it as "in progress." Rent is not cheap here and I expect better.',
    response:
      'We apologize for the delay on your faucet repair. Three weeks is unacceptable and does not reflect our maintenance standards. We are escalating your request immediately. Our maintenance director will reach out within 24 hours to schedule the repair. We understand that the rent level comes with service expectations, and we need to meet them.',
  },
  {
    stars: 1,
    review:
      'Neighbors above me stomp around until 2 AM every night. Complained to management four times. Nothing changed. Counting down the days until my lease ends.',
    response:
      'We are sorry the noise issue has persisted despite your complaints. Four unanswered requests is a failure on our part. We are taking this seriously — our community manager will contact both you and the upstairs unit this week. We have also updated our noise policy enforcement procedures. We would like the chance to resolve this before your lease ends.',
  },
]

export default function ApartmentReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Apartment Review Response Examples"
        subtitle="Apartment review response examples for property managers handling maintenance, amenities, noise complaints, and resident concerns."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Property Managers Should Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Prospective tenants read apartment reviews before signing a lease. Your responses shape their first impression of management.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to maintenance complaints publicly shows accountability. It also signals to current residents that feedback is heard.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover the most common apartment review topics — from positive living experiences to unresolved maintenance requests.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Apartment Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Apartment Review Response Best Practices</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Reference specific issues — parking, maintenance timelines, amenity updates.</li>
            <li>• Include concrete action steps, not vague promises.</li>
            <li>• Never disclose resident personal information in public responses.</li>
            <li>• Acknowledge long-term residents by name or tenure when they leave positive reviews.</li>
            <li>• Offer a direct contact for unresolved issues.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Apartment Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any resident review and get a professional, management-ready response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
