import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: '4 Star Review Response Examples | Free AI Tool | Reviewly',
    description:
      '4 star review response examples for almost-perfect feedback. Templates that celebrate the praise, address the missing star, and turn great into perfect.',
  }
}

const examples = [
  {
    stars: 4,
    review:
      'Excellent dinner overall. The steak was cooked perfectly and the wine list is impressive. Our server was attentive and knowledgeable. Only reason for 4 stars is the dessert menu felt limited compared to the rest of the experience.',
    response:
      'Thank you for the wonderful feedback on the steak and wine selection. We are glad the server matched the quality of the food. You make a great point about the dessert menu — we are actually expanding it next month with several new options from our pastry chef. We hope you will come back to see if we earn that fifth star.',
  },
  {
    stars: 4,
    review:
      'Love this dental office. Dr. Park is gentle and thorough, the hygienists are friendly, and the office is modern and clean. Docking one star because the appointment reminders come as phone calls instead of texts, which is inconvenient.',
    response:
      'Thank you for the kind words about Dr. Park and our team. You will be happy to know we are transitioning to a text-based reminder system this quarter — you are not the first to request this and we agree it is more convenient. We look forward to earning that fifth star with better communication tools.',
  },
  {
    stars: 4,
    review:
      'The Airbnb was beautiful, exactly as pictured. Great location, walking distance to everything. Host was responsive. The only issue was the check-in instructions were a bit confusing and we circled the block twice looking for the entrance.',
    response:
      'Thank you for the lovely review. We are thrilled the space and location worked perfectly for your trip. The check-in confusion is great feedback — we have updated the instructions with photos and a map pin showing the exact entrance. No more circling. We hope to host you again.',
  },
  {
    stars: 4,
    review:
      'Great vet clinic. Dr. Santos was patient with our nervous cat and explained every part of the exam. The clinic is clean and welcoming. Took off a star because the follow-up call about lab results took three days.',
    response:
      'Thank you for trusting Dr. Santos with your cat. She understands that nervous pets need extra patience and care. Three days for lab results is longer than we aim for — we have adjusted our follow-up process to ensure callbacks happen within 24 to 48 hours. We appreciate the honest feedback and will do better.',
  },
  {
    stars: 4,
    review:
      'Solid salon experience. My balayage turned out great and the stylist was friendly and talented. The salon is trendy and well-maintained. Only negative was the music was too loud — hard to relax during my appointment.',
    response:
      'Thank you for the praise on the balayage — we will pass that along to your stylist. Music volume is something that should enhance the experience, not detract from it. We have adjusted the volume levels and will check in with clients about preferences going forward. Glad the overall experience was great and hope to see you again.',
  },
  {
    stars: 4,
    review:
      'Good apartment complex with responsive maintenance and a nice pool area. Management is friendly and approachable. Only complaint is the thin walls — can hear the neighbors TV clearly at night. Otherwise would be 5 stars.',
    response:
      'Thank you for highlighting what works well. We are glad maintenance and management meet your expectations. Noise transfer between units is a common concern in multi-family housing and we are looking into soundproofing options for future renovations. In the meantime, please let us know if the noise becomes disruptive and we will address it with the neighboring unit.',
  },
]

export default function FourStarReviewsPage() {
  return (
    <div>
      <PageHeader
        title="4 Star Review Response Examples"
        subtitle="4 star review response examples that celebrate the praise, address the missing star, and show you are always improving."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why 4 Star Reviews Are a Gift</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            4 star reviews tell you exactly what separates good from great. The customer already loves what you do — they are showing you the last mile to perfection.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            A smart response acknowledges the praise, addresses the specific concern, and shows you are taking action. That combination turns a 4-star reviewer into a 5-star advocate.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples show how to handle almost-perfect reviews across different industries.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">4 Star Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Tips for Responding to 4 Star Reviews</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Lead with appreciation — they gave you a strong review, acknowledge that.</li>
            <li>• Address the missing star directly — show you read and understood the concern.</li>
            <li>• Share what you are doing to fix it — specifics beat vague promises.</li>
            <li>• Keep the tone positive and forward-looking.</li>
            <li>• Playfully invite them to come back and see if you earn the fifth star.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Perfect Responses to 4 Star Reviews
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any almost-perfect review into Reviewly and get a response that turns 4 stars into 5-star loyalty.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
