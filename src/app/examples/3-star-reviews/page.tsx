import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: '3 Star Review Response Examples | Free AI Tool | Reviewly',
    description:
      '3 star review response examples for mixed feedback across all industries. Templates that acknowledge the good, address the bad, and win back uncertain customers.',
  }
}

const examples = [
  {
    stars: 3,
    review:
      'Food was good but not great. The pasta was slightly overcooked and the bread was cold. Service was friendly though and the ambiance was nice. Might come back to try other dishes.',
    response:
      'Thank you for the balanced feedback. You are right — pasta should be perfectly cooked every time and cold bread is a miss. We have addressed both with our kitchen team. We are glad the service and ambiance delivered. If you do come back, ask your server about our seasonal specials — they tend to be our best work.',
  },
  {
    stars: 3,
    review:
      'The hotel room was clean and the bed was comfortable. However, the WiFi was painfully slow and the gym equipment was outdated. Decent stay but would not go out of my way to return.',
    response:
      'Thank you for noting what worked and what did not. Comfort and cleanliness are our foundation, so we are glad those met expectations. We hear you on the WiFi — a network upgrade is in progress that should resolve the speed issues. The gym equipment is scheduled for replacement in the coming quarter. We hope these improvements earn a return visit.',
  },
  {
    stars: 3,
    review:
      'Dr. Lee is knowledgeable but the office runs behind schedule consistently. Every visit I wait at least 20 minutes. The front desk staff are nice but seem overwhelmed. The medical care itself is solid.',
    response:
      'We appreciate you recognizing Dr. Lee expertise while being honest about the wait times. Twenty-minute delays are not acceptable and we are restructuring our scheduling to build in better buffers. We are also adding support staff at the front desk to reduce the burden on the team. Your patience means a lot and we are committed to improving the experience.',
  },
  {
    stars: 3,
    review:
      'Decent gym with a good variety of machines. The morning crowd is manageable but evening sessions are way too packed. The locker room could use a deep clean. Staff is helpful when you can find them.',
    response:
      'Thank you for the honest take. We are glad the equipment variety works for you. Evening overcrowding is something we are tackling by extending peak-hour staffing and adding more equipment to popular areas. The locker rooms are now on a more frequent cleaning rotation. We want the evening experience to match what you get in the morning.',
  },
  {
    stars: 3,
    review:
      'The apartment location is great and the unit itself is spacious. Maintenance is hit or miss though — some requests get handled fast, others take a week. Noise from upstairs neighbors is also an issue.',
    response:
      'Thank you for the feedback. We are glad the location and unit size work well for you. Inconsistent maintenance response times are a valid concern and we are implementing a tracking system to ensure every request gets timely follow-up. Noise issues between units are something we take seriously — please report specific instances so we can address them with the residents involved.',
  },
  {
    stars: 3,
    review:
      'The spa treatment was relaxing but nothing special for the price. The therapist was competent but did not ask about preferences. The facility is beautiful. Expected more personalization at this price point.',
    response:
      'We appreciate the candid feedback. At our price point, personalization should be a given, not an extra. We are reinforcing with our therapists that every session should start with a thorough preference discussion. We are glad the facility impressed and the treatment was relaxing. We want the entire experience to match the environment — thank you for helping us get there.',
  },
]

export default function ThreeStarReviewsPage() {
  return (
    <div>
      <PageHeader
        title="3 Star Review Response Examples"
        subtitle="3 star review response examples that acknowledge the good, address the bad, and win back undecided customers."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why 3 Star Reviews Deserve Your Best Response</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            3 star reviews are your biggest opportunity. These customers are on the fence — a thoughtful response can turn them into loyal repeat visitors.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Mixed reviews carry more credibility with readers than pure 5-star praise. How you respond to balanced feedback says more about your business than any marketing campaign.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The key: validate what they liked, own what fell short, and show you are fixing it. No excuses, no deflection.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">3 Star Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Tips for Responding to 3 Star Reviews</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Start by thanking them for what they appreciated — validate the positive.</li>
            <li>• Address each criticism specifically, not with generic apologies.</li>
            <li>• Describe what you are changing — vague promises do not build trust.</li>
            <li>• Keep the tone balanced — match the reviewer measured approach.</li>
            <li>• Invite them back to see the improvements firsthand.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Balanced Responses to 3 Star Reviews
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any mixed review into Reviewly and get a thoughtful response that addresses every point.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
