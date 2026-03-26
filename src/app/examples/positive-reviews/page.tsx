import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Positive Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Positive review response examples that are warm, specific, and memorable. Templates for responding to happy customers across restaurants, hotels, clinics, salons, and more.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'This restaurant never disappoints. The seafood risotto was incredible and our waiter remembered our anniversary from last year. That kind of personal touch is rare. Ten out of ten.',
    response:
      'Thank you for making us part of your anniversary tradition again. The risotto is one of Chef Marco favorites and he will be thrilled you loved it. Our team genuinely enjoys building relationships with regulars — remembering the details is what makes this more than just a restaurant. Happy anniversary and see you next year.',
  },
  {
    stars: 5,
    review:
      'Checked in late and the front desk still greeted us warmly. Room was spotless, bed was cloud-like, and the breakfast buffet had something for everyone including my picky toddler. Family-friendly and high quality.',
    response:
      'We love hearing that the late check-in was still welcoming — our front desk team works hard to make every arrival feel easy regardless of the hour. We are especially glad the breakfast buffet passed the toddler test — that is the toughest critic of all. We hope your whole family enjoyed the stay.',
  },
  {
    stars: 5,
    review:
      'Dr. Kim and her team are the only dentist office where I do not dread going. They explain everything before they do it, the office plays great music, and my cleanings are always painless. Referred three friends already.',
    response:
      'Making a dental visit something you do not dread is exactly our goal, so this means a lot. Dr. Kim believes informed patients are comfortable patients, which is why the team explains every step. Three referrals is the highest compliment — thank you for trusting us with your friends.',
  },
  {
    stars: 5,
    review:
      'Our attorney handled a complicated estate case with professionalism and genuine care. She kept us informed every step of the way and the outcome exceeded our expectations. Could not have asked for better representation.',
    response:
      'Thank you for trusting our team with such an important matter. Estate cases require both legal expertise and personal sensitivity, and we are glad both came through in your experience. Keeping clients informed is a cornerstone of how we practice. We are here if you ever need anything in the future.',
  },
  {
    stars: 5,
    review:
      'Best mechanic shop I have ever used. They found the issue, explained it in plain English, fixed it same-day, and charged less than the estimate. Honest, fast, and affordable. I am a customer for life.',
    response:
      'Customer for life — that is the best thing a shop can hear. We believe every repair should be explained clearly, done right the first time, and priced fairly. Coming in under estimate is just how we operate when the job allows it. Thank you for the trust and we will be here whenever you need us.',
  },
  {
    stars: 5,
    review:
      'The hot stone massage at this spa was transformative. My therapist checked in throughout without being intrusive. The relaxation room, the tea, the ambient lighting — every detail was perfect. Already booked my next visit.',
    response:
      'Transformative is exactly the word we aim for. Your therapist is skilled at finding that balance between attentive and unobtrusive, and we are glad it showed. The relaxation room details — tea, lighting, atmosphere — are designed to extend the calm beyond the treatment room. We look forward to your next visit.',
  },
]

export default function PositiveReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Positive Review Response Examples"
        subtitle="Positive review response examples that are warm, specific, and memorable — show your happiest customers they are truly valued."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Responding to Positive Reviews Matters</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Positive review responses are often overlooked, but they are one of the most effective loyalty tools available. A customer who takes the time to leave a glowing review deserves more than a generic thank you.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Specific, personal responses encourage repeat visits, strengthen word-of-mouth referrals, and show future customers that you appreciate every piece of feedback — not just complaints.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            The examples below show how to respond to positive reviews across multiple industries with warmth and authenticity.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Positive Review Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Tips for Responding to Positive Reviews</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Reference something specific from their review — names, dishes, services, details.</li>
            <li>• Avoid generic phrases like &ldquo;Thank you for your kind words&rdquo; — be genuine.</li>
            <li>• Add value — mention an upcoming event, a new menu item, or a tip for next time.</li>
            <li>• Match the reviewer energy and enthusiasm.</li>
            <li>• Keep it concise — 2-4 sentences is perfect.</li>
            <li>• Thank them for referrals if mentioned — it is the highest form of praise.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Warm, Specific Positive Responses
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any positive review and get a personalized response that goes far beyond a generic thank you.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
