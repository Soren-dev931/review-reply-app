import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Restaurant Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Restaurant review response examples for food quality, service, wait times, and ambiance. Professional templates for restaurant owners and managers.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'The lobster risotto was outstanding. Our server Emma recommended it and she was right. Great ambiance with the patio seating. We will be back for date night.',
    response:
      'Thank you for the kind words. The lobster risotto is one of Chef Marco\'s favorites, and we are glad Emma pointed you in the right direction — she has a knack for reading the table. The patio is even better during sunset, so keep that in mind for your next date night. We look forward to seeing you again.',
  },
  {
    stars: 4,
    review:
      'Food was delicious, especially the wood-fired pizza. Waited about 30 minutes for a table on a Saturday which was expected. Only complaint is the music was a bit loud.',
    response:
      'Thank you for your feedback. We are glad the wood-fired pizza delivered. Saturday evenings are our busiest and we appreciate your patience with the wait. The music volume is something we have been fine-tuning — we will take your note into account as we adjust levels for the dining area.',
  },
  {
    stars: 2,
    review:
      'Ordered the steak medium-rare and it came out well done. Sent it back and the replacement took 25 minutes. The appetizers were good but the main course ruined the experience.',
    response:
      'We apologize for the steak preparation and the wait for the replacement. A 25-minute delay after an incorrect order is not acceptable. We have reviewed this with our kitchen team to prevent repeat mistakes on temperature accuracy. We are glad the appetizers were enjoyable and hope you will give us another chance to get the main course right.',
  },
  {
    stars: 1,
    review:
      'Reservation for 7 PM, seated at 7:40. Server forgot our drink order. When the food finally came, my partner found a hair in her salad. Manager did not offer to comp anything.',
    response:
      'We sincerely apologize for this experience. A 40-minute wait past your reservation, a missed drink order, and a food quality issue is a string of failures that should not happen. We have addressed each issue with the team involved. Our manager should have offered to comp the meal — that was a judgment error. Please contact us directly so we can make this right.',
  },
]

export default function RestaurantReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Restaurant Review Response Examples"
        subtitle="Restaurant review response examples covering food quality, service, wait times, and ambiance — written for owners and managers."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Restaurants Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Diners check Google reviews before choosing a restaurant. Your responses influence their decision as much as the reviews themselves.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            A response to a food complaint shows accountability. A response to praise shows gratitude and personality.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common restaurant scenarios — from chef compliments to kitchen errors.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Restaurant Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Restaurant Review Response Tips</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Name the dish and the server when the reviewer does — it feels personal.</li>
            <li>• For food complaints, state what you changed in the kitchen.</li>
            <li>• Avoid being defensive about wait times — acknowledge and explain.</li>
            <li>• When a manager failed to act, own it publicly.</li>
            <li>• Keep the tone warm but not overly casual.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Restaurant Review Responses Instantly
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any restaurant review and get a tailored, professional response in seconds.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
