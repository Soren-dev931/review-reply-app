import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Gym & Fitness Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Gym and fitness center review response examples. Templates for equipment, cleanliness, staff, classes, membership, and facility feedback.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Best gym in the area. Equipment is always maintained, the free weight section is well-stocked, and the staff actually wipe down machines. Group fitness classes with Coach Jess are the highlight of my week.',
    response:
      'Thank you for the great feedback. Equipment maintenance is a daily priority and we are glad it shows. Coach Jess puts incredible energy into every class and she will love hearing this. We work hard to keep the facility clean and well-stocked — it is the baseline, not a bonus. See you at the next class.',
  },
  {
    stars: 2,
    review:
      'Signed up for a year membership and immediately regretted it. The gym is overcrowded during peak hours, machines break down and take weeks to fix, and the locker rooms smell. Cancellation policy is also ridiculous.',
    response:
      'We take this feedback seriously. Overcrowding during peak hours is something we are addressing by extending staffed hours and adding equipment to reduce wait times. We have also brought in a new maintenance vendor to speed up repairs. The locker rooms are now on a twice-daily deep clean schedule. Regarding cancellation, please contact our front desk — we want to find a fair solution.',
  },
  {
    stars: 4,
    review:
      'Love the variety of classes and the trainers are knowledgeable. Facility is clean and modern. Docking one star because the parking lot is way too small and the smoothie bar is overpriced.',
    response:
      'Thank you for the positive words about our classes and trainers. We invest in hiring people who know their stuff and genuinely care about member results. The parking situation is a known challenge and we are looking into a shared lot arrangement. We will also review the smoothie bar pricing to ensure it stays reasonable. Appreciate the honest feedback.',
  },
  {
    stars: 1,
    review:
      'Personal trainer signed me up for sessions I did not agree to and my card was charged $300. Front desk was unhelpful and told me to call corporate. Still waiting for a refund two weeks later.',
    response:
      'We sincerely apologize for this experience. Unauthorized charges are unacceptable and this is not how we operate. We have escalated your case for an immediate refund and are investigating what happened with the trainer in question. Please contact our general manager directly — your refund should not take two weeks and we will resolve this promptly.',
  },
]

export default function GymReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Gym & Fitness Review Response Examples"
        subtitle="Gym and fitness review response examples for equipment, cleanliness, classes, membership, and staff — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Gyms Need to Respond to Every Review</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Gym and fitness review responses directly impact membership decisions. Prospective members read reviews to judge cleanliness, equipment quality, and staff culture before committing.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Addressing complaints about billing or overcrowding shows you listen. Responding to class praise helps retain members who feel seen and valued.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover the most common gym review scenarios — from equipment complaints to membership billing issues.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Gym Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Gym Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Address billing and membership concerns immediately — these are trust-breakers.</li>
            <li>• Name specific trainers or staff members when responding to praise.</li>
            <li>• Describe concrete steps being taken to fix equipment or cleanliness issues.</li>
            <li>• Keep a professional tone even with aggressive complaints.</li>
            <li>• Acknowledge the member investment — they chose your gym and that matters.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Gym Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any gym or fitness review into Reviewly and get a professional, personalized response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
