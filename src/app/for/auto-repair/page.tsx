import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Auto Repair Shop Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Auto repair shop review response examples for mechanics and service centers. Templates for pricing transparency, repair quality, wait times, and communication.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Brought my truck in for a brake job. They showed me the worn pads, explained exactly what needed replacing, and the final bill matched the estimate. No upselling, no surprises. Found my new shop.',
    response:
      'Thank you for the trust. Showing customers the actual issue before starting work is how we operate — you should always know what you are paying for. We are glad the estimate held and the brake job met your expectations. Welcome to the shop and we will be here whenever you need us.',
  },
  {
    stars: 2,
    review:
      'Dropped off my car at 8 AM for an oil change and tire rotation. Was told it would be ready by noon. Did not get a call until 4 PM. The work seems fine but the communication was terrible.',
    response:
      'You are right — that communication gap is not acceptable. An oil change and rotation should not take all day, and at minimum you deserved a status update when we fell behind. We have implemented a text notification system to keep customers informed on delays. We appreciate your patience and hope to earn back your time.',
  },
  {
    stars: 1,
    review:
      'Charged me $400 for a diagnostic and then quoted $1,800 for a repair. Took it to another shop and they fixed it for $600. Felt completely ripped off.',
    response:
      'We are sorry you feel the pricing was not fair. We take these concerns seriously and would like to review your invoice in detail. Diagnostic fees cover specialized equipment and technician time, but the repair quote should always be competitive. Please contact our service manager directly — we want to understand what happened and make it right.',
  },
  {
    stars: 4,
    review:
      'Great work on my transmission flush. The mechanic explained everything in plain English, not mechanic jargon. Only reason for 4 stars is the waiting area could use some updating — uncomfortable chairs and no WiFi.',
    response:
      'Thank you for the feedback. We are glad the transmission flush went well and that the explanation was clear — no one should feel confused about their own vehicle. You make a fair point about the waiting area. We are actually planning updates including new seating and WiFi in the coming months. Appreciate the honest input.',
  },
]

export default function AutoRepairReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Auto Repair Shop Review Response Examples"
        subtitle="Auto repair shop review response examples for pricing, repair quality, wait times, and communication — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Auto Repair Shops Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Auto repair shop review responses are critical because trust is the number one factor in choosing a mechanic. Customers fear being overcharged or misled — your responses prove you are transparent.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to complaints about pricing shows you stand behind your work. Responding to praise reinforces the honest reputation you have built.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover the most common auto repair review scenarios — from pricing disputes to communication failures.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Auto Repair Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Auto Repair Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Address pricing concerns head-on — transparency builds trust in this industry.</li>
            <li>• Explain what was done in plain language, not technical jargon.</li>
            <li>• Acknowledge communication failures and describe what you changed.</li>
            <li>• Keep it professional — never get defensive about complaints.</li>
            <li>• Invite the customer back or offer to review their invoice.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Auto Repair Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any auto repair review into Reviewly and get a professional, personalized response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
