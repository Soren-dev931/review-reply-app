import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Hotel Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Hotel review response examples for positive and negative guest feedback. Copy-ready templates for room quality, amenities, staff, and cleanliness reviews.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Beautiful room with an amazing view. The front desk staff were incredibly helpful when we needed late checkout. Pool area was spotless. Will definitely return.',
    response:
      'Thank you for sharing your experience. We are glad the room and view met your expectations. Our front desk team takes pride in accommodating guests whenever possible, so we will pass along your kind words. The pool crew works hard to keep things pristine — they will appreciate the recognition. We look forward to welcoming you back.',
  },
  {
    stars: 3,
    review:
      'Location was great, walking distance to downtown. Room was clean but dated. The AC struggled on the hot day we checked in. Breakfast buffet was decent.',
    response:
      'Thank you for your honest feedback. We are happy the location worked well for your visit. You raise a fair point about the room updates — we have renovations scheduled for later this year that will address the furnishings and HVAC system. We hope you will give us another chance to exceed your expectations once those improvements are complete.',
  },
  {
    stars: 2,
    review:
      'Found hair in the bathtub on arrival. Asked for a room change and had to wait 40 minutes. Night staff were friendly at least. Disappointed overall.',
    response:
      'We sincerely apologize for the cleanliness issue you encountered. That is not our standard, and we have addressed this directly with our housekeeping team. The wait for a room change was too long, and we are reviewing our process to speed up resolutions. We are glad the night staff provided a better experience. Please reach out to our manager directly — we would like to make this right.',
  },
  {
    stars: 1,
    review:
      'Noisy neighbors all night, called the front desk twice and nothing was done. Checkout line took 20 minutes. Not worth the price.',
    response:
      'We are sorry your stay was disrupted by noise. Front desk should have resolved this on your first call, and we take full responsibility for that failure. We have updated our noise complaint protocol to ensure faster action. The checkout delay is also being addressed with additional staffing during peak hours. We understand your frustration and would welcome the opportunity to provide a different experience.',
  },
]

export default function HotelReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Hotel Review Response Examples"
        subtitle="Hotel review response examples that address room quality, amenities, staff, location, and cleanliness — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Hotels Need to Respond to Every Review</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Guests check reviews before booking. A thoughtful response signals that management pays attention.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to negative reviews recovers trust. Responding to positive reviews encourages repeat stays.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The examples below cover common hotel review scenarios — from five-star praise to one-star complaints.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Hotel Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Hotel Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Reference specific details the guest mentioned — room, staff name, amenity.</li>
            <li>• Acknowledge problems directly without making excuses.</li>
            <li>• Mention concrete steps being taken to fix issues.</li>
            <li>• Keep it under 100 words. Guests scan, they do not read essays.</li>
            <li>• Invite the guest back without being pushy.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Hotel Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any hotel review into Reviewly and get a professional, personalized response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
