import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Law Firm Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Law firm review response examples for attorneys and legal practices. Templates for communication, responsiveness, outcomes, billing, and professionalism.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Attorney Davis handled our real estate closing with incredible attention to detail. She explained every document, caught an issue with the title that could have cost us thousands, and was available by phone whenever we had questions. Highly recommend.',
    response:
      'Thank you for sharing your experience with Attorney Davis. She takes pride in thorough document review because catching issues early is far better than dealing with them after closing. We are glad the communication throughout the process met your expectations. Wishing you the best in your new home.',
  },
  {
    stars: 2,
    review:
      'Hired this firm for a contract dispute. Initial consultation was promising but after that, getting updates was like pulling teeth. Emails took days to get a response. The outcome was okay but the experience was frustrating.',
    response:
      'We appreciate your candid feedback. Communication delays during active cases are not acceptable and we apologize for that experience. We have implemented a case update system with regular check-ins so clients are never left wondering. We are glad the outcome was satisfactory and take your feedback on responsiveness to heart.',
  },
  {
    stars: 1,
    review:
      'Was billed for a 30-minute consultation that lasted 10 minutes. When I questioned the bill, the paralegal was dismissive. Expected more professionalism from a law firm at these rates.',
    response:
      'We sincerely apologize for this experience. Billing accuracy and transparency are fundamental to our practice. A dismissive response to a billing question is not reflective of our values. We would like to review your invoice directly — please contact our managing partner. We will make this right.',
  },
  {
    stars: 4,
    review:
      'Great experience with the family law team. Attorney Chen was compassionate and strategic during a very difficult time. The only downside was parking at the office and the slightly dated waiting area. The legal work itself was excellent.',
    response:
      'Thank you for trusting Attorney Chen and our family law team during a difficult time. Compassion and strategy should go hand in hand, especially in family law. We appreciate the feedback about the office space — we have improvements planned. What matters most is that you received excellent legal representation, and we are glad that was your experience.',
  },
]

export default function LawFirmReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Law Firm Review Response Examples"
        subtitle="Law firm review response examples for communication, responsiveness, billing, and professionalism — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Law Firms Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Law firm review responses build credibility in an industry where trust and professionalism are everything. Potential clients search reviews before choosing an attorney — your responses shape their first impression.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Important: never discuss case details, outcomes, or confidential information in public responses. Keep replies professional while addressing the client experience.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common law firm scenarios — from billing disputes to communication concerns to positive referrals.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Law Firm Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Law Firm Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Never disclose case details or confidential client information.</li>
            <li>• Address billing concerns directly and offer to review invoices privately.</li>
            <li>• Maintain a professional, measured tone — your response reflects the firm.</li>
            <li>• Acknowledge communication failures with specific improvements.</li>
            <li>• Thank clients for their trust — choosing a lawyer is a significant decision.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Law Firm Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any law firm review into Reviewly and get a professional, appropriate response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
