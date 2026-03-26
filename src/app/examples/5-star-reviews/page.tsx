import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: '5 Star Review Response Examples | Free AI Tool | Reviewly',
    description:
      '5 star review response examples that are warm, specific, and not generic. Templates for restaurants, hotels, clinics, salons, and more.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'The chicken parmesan was the best I have had outside of Italy. Our waiter Jake made the evening even better with his wine pairing suggestions. We will be regulars.',
    response:
      'That is high praise on the chicken parm — Chef Rosa will be thrilled to hear it. Jake has a talent for wine pairings and we are glad he helped make the evening memorable. We look forward to seeing you as regulars. Ask Jake about the new dessert menu next time.',
  },
  {
    stars: 5,
    review:
      'Dr. Kim and her team made my Invisalign journey smooth from start to finish. Every appointment was on time and the results exceeded my expectations. Thank you.',
    response:
      'Thank you for trusting Dr. Kim and the team with your Invisalign treatment. Consistent, on-time appointments are something we work hard to maintain, so we appreciate you noticing. Your results look great and we are glad the process was smooth from start to finish.',
  },
  {
    stars: 5,
    review:
      'Stayed for a week and it felt like home. The host left a welcome basket with local snacks and a handwritten note. Location was perfect for exploring the city. Already recommended to friends.',
    response:
      'Thank you for spending a whole week with us. The welcome basket is a small touch but we are glad it set the right tone. Location-wise, you clearly made the most of it — we hope the local recommendations on the guidebook were useful too. Thank you for referring friends.',
  },
  {
    stars: 5,
    review:
      'Best haircut I have gotten in years. Sarah listened to what I wanted, gave honest advice, and the result was exactly right. The salon is clean, modern, and relaxed.',
    response:
      'Thank you for the kind words about Sarah. She is great at listening first and cutting second, which is exactly the approach we believe in. We are glad the salon atmosphere matched the service quality. See you at your next appointment.',
  },
  {
    stars: 5,
    review:
      'Brought my car in for a check engine light. They diagnosed the issue, explained it clearly, and the repair cost less than I expected. Honest shop, will come back.',
    response:
      'Thank you for the trust. Explaining the diagnosis clearly is something we prioritize — no one should pay for a repair they do not understand. We are glad the cost came in under your expectations. Honest pricing and transparent service is the baseline, not the exception. See you next time.',
  },
  {
    stars: 5,
    review:
      'The apartment exceeded our expectations. Maintenance fixed a minor issue within two hours of reporting it. Pool area is well-maintained and the management team is friendly and responsive.',
    response:
      'Thank you for taking the time to share this. Our maintenance team aims for same-day response so we are glad the two-hour turnaround met your needs. The pool area is cleaned and inspected daily. We will pass along your compliments to the management team. Enjoy your home.',
  },
]

export default function FiveStarReviewsPage() {
  return (
    <div>
      <PageHeader
        title="5 Star Review Response Examples"
        subtitle="5 star review response examples that are warm, specific, and not generic. Show your best customers they are valued."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why You Should Respond to 5 Star Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Most businesses only respond to complaints. That is a missed opportunity.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            A response to a 5 star review reinforces the positive experience and encourages the reviewer to come back. It also shows future customers that you appreciate good feedback, not just damage control.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The key: be specific, not generic. "Thank you for your kind words" is forgettable. Referencing the actual review is memorable.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">5 Star Review Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Tips for 5 Star Responses</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Reference the specific person, dish, service, or detail they mentioned.</li>
            <li>• Skip the template language — "We appreciate your valuable feedback" is a dead giveaway.</li>
            <li>• Add something new — mention an upcoming feature, a staff member, or a tip for next time.</li>
            <li>• Keep it short. 2-4 sentences is enough.</li>
            <li>• Match the reviewer's energy. Enthusiastic review gets a warm response.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Warm, Specific 5 Star Responses
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any positive review and get a personalized response that goes beyond "thank you."
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
