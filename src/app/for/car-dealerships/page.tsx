import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Car Dealership Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Car dealership review response examples for sales, service departments, and finance teams. Templates for pricing, follow-up, sales experience, and service quality.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Mike in sales was no-pressure from start to finish. He showed me three options in my budget, explained the differences honestly, and never pushed add-ons. Finance was quick and transparent. Best car buying experience I have ever had.',
    response:
      'Thank you for the kind words about Mike. His approach is exactly what we believe in — presenting options honestly and letting you decide without pressure. We are glad the finance process was smooth too. Enjoy the new ride and do not hesitate to reach out if you need anything down the road.',
  },
  {
    stars: 2,
    review:
      'Brought my car in for a recall repair and was told it would take two hours. Five hours later I was still waiting. No loaner car offered. The service advisor barely communicated updates. Sales team was friendly when I bought the car but service is a different story.',
    response:
      'We apologize for the extended wait and poor communication during your recall service. Five hours without updates is unacceptable. We are implementing a text-based status system so service customers receive real-time updates. We are also expanding our loaner vehicle fleet for longer repairs. We appreciate your loyalty and want to ensure your service experience matches the sales experience.',
  },
  {
    stars: 1,
    review:
      'The online price was $5,000 less than what they quoted me in person. When I pointed it out, the salesperson said there were mandatory dealer fees not shown online. Classic bait and switch. Walked out.',
    response:
      'We understand your frustration and apologize for the pricing discrepancy. Transparency is a core value and we are reviewing our online listing practices to ensure the price you see is the price you pay. Mandatory fees should be disclosed upfront, not at the negotiation table. We take this seriously and would welcome the chance to rebuild your trust.',
  },
  {
    stars: 4,
    review:
      'Great selection of certified pre-owned vehicles. Our salesperson Lisa was knowledgeable and patient as we test drove four cars. The only issue was the paperwork took almost two hours in the finance office. Otherwise a solid experience.',
    response:
      'Thank you for recognizing Lisa and our CPO selection. She enjoys helping customers find the right fit, even if it takes four test drives. We hear you on the finance wait — we are streamlining our paperwork process and adding digital options to reduce that time significantly. Enjoy the new car and welcome to the family.',
  },
]

export default function CarDealershipReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Car Dealership Review Response Examples"
        subtitle="Car dealership review response examples for sales, service, pricing, and follow-up — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Car Dealerships Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Car dealership review responses are essential because buying a car is one of the largest purchases people make. Reviews directly influence where customers shop — and pricing transparency concerns can make or break trust.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to sales praise reinforces your reputation. Addressing service complaints shows that after-sale care matters just as much as closing the deal.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common dealership scenarios — from sales praise to service failures to pricing disputes.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Car Dealership Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Car Dealership Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Address pricing concerns head-on — hidden fees destroy trust in this industry.</li>
            <li>• Name the salesperson to personalize praise and build team morale.</li>
            <li>• Differentiate between sales and service feedback — address each specifically.</li>
            <li>• Keep it honest — do not make promises you cannot keep.</li>
            <li>• Invite the customer back for service to maintain the long-term relationship.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Car Dealership Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any dealership review into Reviewly and get a professional, personalized response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
