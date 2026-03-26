import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Negative Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Negative review response examples across restaurants, hotels, dental offices, salons, and auto repair. Professional templates that empathize and recover trust.',
  }
}

const examples = [
  {
    stars: 1,
    review:
      'Worst dining experience ever. Cold food, rude waiter, and they charged us for a dish we sent back. Never again.',
    response:
      'We apologize for the poor experience. Cold food and discourteous service are not our standard. We have reviewed the charge for the returned dish and issued a refund. Our manager is addressing the service issue with the staff involved. We understand your frustration and would welcome the chance to provide a different experience if you are willing to give us another try.',
  },
  {
    stars: 2,
    review:
      'Booked a suite for our anniversary and the room was not ready at check-in time. Waited an hour in the lobby. When we finally got in, the jacuzzi was out of order. Ruined our celebration.',
    response:
      'We are deeply sorry for the disappointment on your anniversary. The room delay and the non-functioning jacuzzi turned what should have been a special evening into a frustrating one. We have repaired the jacuzzi and reviewed our check-in preparation process. Our general manager would like to reach out personally to discuss making this right.',
  },
  {
    stars: 1,
    review:
      'Had a tooth pulled and the pain was unbearable. Told the dentist during the procedure and was told to "just breathe through it." No follow-up call either.',
    response:
      'We are sorry you experienced pain during the extraction and that your concerns were not adequately addressed in the moment. Patient comfort is a priority and we fell short. We have discussed this with the clinical team to reinforce our pain management protocols. A follow-up call should have been made within 24 hours. Please contact our office directly so we can ensure your recovery is on track.',
  },
  {
    stars: 2,
    review:
      'Asked for a trim, got a completely different haircut. When I said something, the stylist got defensive. Will not be returning.',
    response:
      'We apologize for the miscommunication on your haircut. The result should match what you asked for, and the defensive response made it worse. We have spoken with the stylist about consultation and communication before starting any cut. We would like to offer a complimentary correction if you are open to it.',
  },
  {
    stars: 1,
    review:
      'Brought my car in for an oil change and was told I needed $800 in brake work. Got a second opinion — brakes were fine. Lost all trust.',
    response:
      'We take this feedback seriously. Recommending unnecessary work is not something we condone. We are reviewing the inspection process and the technician involved. We understand that trust is earned and we failed to earn yours. If you are willing to share details with our service manager, we want to investigate this fully.',
  },
  {
    stars: 2,
    review:
      'The massage therapist was 15 minutes late, then rushed through a 60-minute session in 45 minutes. No apology. Spa atmosphere was nice but the service was not.',
    response:
      'We apologize for the shortened session and the lack of acknowledgment from your therapist. You paid for 60 minutes and should have received 60 minutes. We are issuing a partial refund and have addressed the punctuality and communication expectations with our team. The spa atmosphere should be matched by the service quality.',
  },
]

export default function NegativeReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Negative Review Response Examples"
        subtitle="Negative review response examples across industries. Professional templates that empathize, address specifics, and invite customers back."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">How to Respond to Negative Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Negative reviews feel personal. The instinct is to defend. Resist it.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            A professional response to a negative review can convert an angry customer into a returning one. It also shows future customers that you handle problems.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The formula: Acknowledge the issue. State what you are doing about it. Invite them back.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Negative Review Response Examples by Industry</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Not to Do</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Do not argue or contradict the reviewer publicly.</li>
            <li>• Do not use generic copy-paste responses.</li>
            <li>• Do not ignore the review. Silence reads as indifference.</li>
            <li>• Do not make promises you cannot keep.</li>
            <li>• Do not blame the customer, even if you think they are wrong.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Turn Negative Reviews Into Recovery Opportunities
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any negative review and get a professional, empathetic response in seconds.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
