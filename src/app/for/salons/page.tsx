import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Salon Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Salon review response examples for hair stylists, colorists, and beauty professionals. Templates for cut quality, wait times, atmosphere, and service feedback.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Sarah did an incredible job on my balayage. The color transition is seamless and exactly what I showed her on my phone. The salon atmosphere is so relaxing — love the music and complimentary coffee. Already booked my next appointment.',
    response:
      'Thank you for the kind words about Sarah — she will be thrilled to hear the balayage turned out exactly as you envisioned. Color work like that takes real skill and she puts a lot of care into every client. We are glad the atmosphere added to the experience. See you at your next appointment and enjoy the new color.',
  },
  {
    stars: 3,
    review:
      'The haircut itself was fine, but I waited 25 minutes past my appointment time with no explanation. The stylist rushed through my cut once she started. Salon is clean and modern though.',
    response:
      'Thank you for your honest feedback. You are right — a 25-minute wait without communication is not acceptable, and we apologize for that. We are adjusting our booking schedule to allow better buffer time between appointments so no one feels rushed. We appreciate you noting the salon environment and hope you will give us another chance to deliver the full experience you deserve.',
  },
  {
    stars: 1,
    review:
      'Asked for a trim and lost two inches. Showed a photo and the stylist ignored it completely. When I pointed it out she said it would grow back. Never returning.',
    response:
      'We are truly sorry about your experience. A stylist should follow the client direction, and "it will grow back" is not an acceptable response. We have addressed this directly with our team. We would like to offer a complimentary correction service — please reach out to us directly so we can make this right. Your trust matters to us.',
  },
  {
    stars: 4,
    review:
      'Great blowout for my wedding trial. Lisa was attentive and patient with my changes. Only reason for 4 stars is the parking situation — had to walk two blocks. Product selection in the salon is excellent.',
    response:
      'Thank you for choosing us for your wedding trial — that is a big deal and we are glad Lisa delivered. She loves working on bridal styles and your patience with the process shows. We hear you on the parking and are exploring options with nearby lots for event clients. Congratulations on the upcoming wedding.',
  },
]

export default function SalonReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Salon Review Response Examples"
        subtitle="Salon review response examples that address cut quality, color work, wait times, and atmosphere — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Salons Need to Respond to Every Review</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Salon review responses build trust with potential clients browsing Google before booking. A thoughtful reply shows you care about the experience, not just the transaction.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to negative reviews demonstrates accountability. Responding to positive reviews builds loyalty and encourages rebooking.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The examples below cover common salon scenarios — from color praise to cut complaints.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Salon Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Salon Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Mention the stylist by name — it personalizes the response and rewards great work.</li>
            <li>• Reference the specific service (balayage, trim, blowout) to show you read the review.</li>
            <li>• Acknowledge wait time or scheduling issues directly without excuses.</li>
            <li>• Keep responses under 100 words — concise and genuine wins.</li>
            <li>• Invite them back with something specific, like a follow-up appointment or new service.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Salon Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any salon review into Reviewly and get a professional, personalized response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
