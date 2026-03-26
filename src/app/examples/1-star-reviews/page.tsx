import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: '1 Star Review Response Examples | Free AI Tool | Reviewly',
    description:
      '1 star review response examples with professional, empathetic replies. Templates for handling the worst reviews across restaurants, hotels, clinics, and more.',
  }
}

const examples = [
  {
    stars: 1,
    review:
      'Absolutely terrible. Food was cold, server disappeared for 20 minutes, and they got our order wrong twice. We left hungry. Total waste of money.',
    response:
      'We are sorry for the experience you described. Cold food, missing service, and incorrect orders are three failures in one visit and that is unacceptable. We have reviewed the evening with the team involved and are making staffing changes to prevent this. We would like to invite you back on us — please contact the manager directly so we can arrange that.',
  },
  {
    stars: 1,
    review:
      'Hotel room had bed bugs. Showed the front desk and they said they would "look into it." No room change, no refund, nothing. Disgusting.',
    response:
      'We take this allegation seriously. Bed bugs are a health and safety issue and require immediate action. We apologize that the front desk did not escalate this properly — that was a failure. We have engaged our pest control service to inspect the room and adjacent units. A full refund has been initiated. Our general manager will reach out directly.',
  },
  {
    stars: 1,
    review:
      'Mechanic told me my transmission was failing and quoted $3,200. Took it to the dealer — transmission is fine. This place is a scam.',
    response:
      'We understand why you are upset and we take this seriously. If a misdiagnosis occurred, that is a significant problem. Our service manager is reviewing the inspection notes and the technician\'s findings. We would like to compare notes with the dealer diagnosis. Please reach out so we can investigate and determine what happened.',
  },
  {
    stars: 1,
    review:
      'Waited 2 hours for an appointment I scheduled a month ago. When I finally saw the doctor, the visit lasted 5 minutes. Felt like a number, not a patient.',
    response:
      'We apologize for the extended wait and the rushed appointment. Two hours is far beyond acceptable and a 5-minute visit after that wait makes it worse. We are reviewing our scheduling to reduce overbooking and ensure adequate appointment time. Your experience matters and we want to do better. Please reach out to our patient coordinator to reschedule at your convenience.',
  },
  {
    stars: 1,
    review:
      'Hired them to clean our house. They broke a vase, left streaks on every window, and the bathroom was dirtier than before. Asked for a refund and was ghosted.',
    response:
      'We apologize for the damage to your vase and the poor cleaning quality. Breaking an item and not reporting or addressing it is unacceptable. We will replace the vase and issue a full refund. The communication failure after your refund request is being addressed internally. This does not represent the service we aim to provide.',
  },
  {
    stars: 1,
    review:
      'Airbnb listing showed a modern apartment. Reality was a rundown studio with stained carpet and a broken AC in July. Host stopped responding after check-in.',
    response:
      'We sincerely apologize for the discrepancy between the listing and the actual space. Misleading photos are a violation of guest trust. The broken AC in summer made it worse. We have updated the listing photos to accurately represent the current condition and scheduled repairs for the AC and carpet. We understand why you lost confidence in communication — we are restructuring our guest support process.',
  },
]

export default function OneStarReviewsPage() {
  return (
    <div>
      <PageHeader
        title="1 Star Review Response Examples"
        subtitle="1 star review response examples that are professional and empathetic. Templates for the toughest reviews your business will face."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">How to Handle 1 Star Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            A 1 star review is someone at their most frustrated. They feel unheard.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Your response is not really for the reviewer — it is for every future customer who reads it. Show them you take accountability.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            Never argue. Never deflect. Acknowledge, act, and invite them back.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">1 Star Review Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">The 1 Star Response Framework</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Lead with a genuine apology — not "sorry you feel that way."</li>
            <li>• Name the specific failure. Shows you actually read the review.</li>
            <li>• State what action you are taking. Be concrete.</li>
            <li>• Offer to make it right — refund, redo, direct contact.</li>
            <li>• Keep it under 100 words. Do not over-explain or make excuses.</li>
            <li>• Respond within 24 hours. Speed matters for damage control.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Respond to 1 Star Reviews Professionally
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste your worst review and get an empathetic, professional response in seconds.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
