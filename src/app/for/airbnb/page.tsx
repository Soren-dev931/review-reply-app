import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Airbnb Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Airbnb review response examples for hosts. Templates covering cleanliness, check-in, communication, amenities, and location accuracy reviews.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Spotless apartment, exactly as pictured. Self check-in was seamless with the lockbox. Host responded to every message within minutes. Walking distance to the beach. Perfect stay.',
    response:
      'Thank you for the thoughtful review. We work hard to keep the space exactly as shown in the photos — what you see should be what you get. Glad the self check-in worked smoothly and that the beach proximity was a bonus. You were a great guest and you are welcome back anytime.',
  },
  {
    stars: 4,
    review:
      'Nice place in a quiet neighborhood. Well-stocked kitchen which was a plus. The WiFi was slow for video calls which was a problem since I was working remotely. Host was helpful otherwise.',
    response:
      'Thank you for your stay and for the WiFi feedback. We have since upgraded to a faster plan specifically to support remote workers. The kitchen is something we take pride in stocking well, so glad that was useful. Hope to host you again with a better connection next time.',
  },
  {
    stars: 2,
    review:
      'The listing said "quiet neighborhood" but there was construction next door starting at 7 AM. Host knew about it but did not mention it. Bed was comfortable at least.',
    response:
      'We apologize for not disclosing the construction. You are right — we should have mentioned it upfront so you could make an informed decision. We have updated the listing to note the construction timeline and adjusted pricing during that period. We are glad the bed was comfortable and understand this did not make up for the noise.',
  },
  {
    stars: 1,
    review:
      'Arrived to find the place had not been cleaned. Dishes in the sink, sheets not changed. Contacted host and waited 3 hours for a response. Asked for a refund and was ignored.',
    response:
      'We sincerely apologize for the condition of the space on your arrival. There was a turnover miscommunication with our cleaning team that day, and it is no excuse for what you experienced. The delayed response and lack of refund communication compounded the problem. We have issued a full refund and restructured our cleaning coordination to prevent this. We take full responsibility.',
  },
]

export default function AirbnbReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Airbnb Review Response Examples"
        subtitle="Airbnb review response examples for hosts covering cleanliness, check-in, communication, amenities, and location accuracy."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Airbnb Hosts Should Respond to Every Review</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Guests read host responses before booking. A thoughtful reply signals reliability and accountability.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to negative reviews transparently can actually increase bookings. Future guests see that you fix problems.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common Airbnb host scenarios — from five-star stays to cleaning failures.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Airbnb Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Airbnb Response Best Practices</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Be honest about known issues — construction, road noise, shared spaces.</li>
            <li>• Reference specific amenities the guest mentioned.</li>
            <li>• If you fixed something after a complaint, say so clearly.</li>
            <li>• Keep responses conversational — Airbnb is more personal than hotels.</li>
            <li>• Never argue publicly. Take disputes to Airbnb resolution.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Airbnb Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any guest review and get a host-ready response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
