import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Spa Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Spa review response examples for day spas, wellness centers, and resort spas. Templates for treatments, therapists, ambiance, booking, and relaxation feedback.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'The hot stone massage was heavenly. My therapist Maria asked about pressure preferences and adjusted throughout the session. The relaxation room with tea afterwards was a lovely touch. Most relaxing two hours of my year.',
    response:
      'Thank you for the beautiful feedback. Maria is exceptional at reading what each client needs and adjusting in real time. The relaxation room and tea service are designed to extend the experience beyond just the treatment itself. We are glad it added to your visit. We hope to welcome you back for another restorative session.',
  },
  {
    stars: 3,
    review:
      'The facial itself was good and my skin felt great afterwards. However, the spa was noisy — could hear people talking loudly in the hallway during my treatment. Also, the online booking system double-booked me and I had to wait 20 minutes.',
    response:
      'Thank you for the honest feedback. We are glad the facial results met your expectations. The noise issue is something we take seriously — a spa should be a sanctuary. We are adding sound insulation and reinforcing quiet zones with our team. The booking glitch has been reported to our software provider and we are sorry for the wait. You deserved better.',
  },
  {
    stars: 1,
    review:
      'Booked a couples massage for our anniversary. One therapist was great but the other was rough and ignored requests to use lighter pressure. The room was cold. Very disappointing for a special occasion.',
    response:
      'We are truly sorry your anniversary experience fell short. A couples massage should be relaxing for both guests, and ignoring pressure requests is not acceptable. We have addressed this with the therapist directly. Room temperature should always be comfortable and we apologize for that oversight. We would like to offer a complimentary session to make this right — please reach out to us.',
  },
  {
    stars: 4,
    review:
      'Beautiful facility with excellent treatments. The aromatherapy massage was deeply relaxing. Only reason for 4 stars is the parking situation and the products they sell in the lobby are quite expensive. Would definitely return for the treatments though.',
    response:
      'Thank you for the kind words about our treatments and facility. We are glad the aromatherapy massage delivered deep relaxation — that is exactly the goal. We hear you on parking and are working on improving access. Our retail products are premium quality but we understand the pricing concern. We look forward to your next visit.',
  },
]

export default function SpaReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Spa Review Response Examples"
        subtitle="Spa review response examples for treatments, therapists, ambiance, booking, and relaxation — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Spas Need to Respond to Every Review</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Spa review responses set the tone for potential clients seeking relaxation. A thoughtful reply signals that your spa cares about every detail of the experience — from booking to checkout.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Addressing complaints about noise, therapist quality, or ambiance shows accountability. Responding to praise reinforces the luxury experience you aim to deliver.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common spa review scenarios — from treatment praise to booking mishaps to ambiance concerns.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Spa Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Spa Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Name the therapist and specific treatment to personalize the response.</li>
            <li>• Acknowledge ambiance issues immediately — silence and comfort are core to the experience.</li>
            <li>• Offer recovery gestures for negative experiences — a complimentary session shows commitment.</li>
            <li>• Keep the tone calm and professional, matching the spa atmosphere.</li>
            <li>• Reference specific details from the review to show you genuinely read it.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Spa Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any spa review into Reviewly and get a professional, calming response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
