import { Metadata } from 'next'
import { ReviewCard, PageHeader, CTAButton } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Veterinary Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Veterinary review response examples for vet clinics and animal hospitals. Templates for pet care, compassion, emergency visits, costs, and communication.',
  }
}

const examples = [
  {
    stars: 5,
    review:
      'Dr. Martinez was amazing with our anxious golden retriever. She took her time, let him sniff around the exam room, and explained every step of the checkup. The whole team clearly loves animals. Fair pricing too.',
    response:
      'Thank you for sharing this. Dr. Martinez knows that anxious pets need extra patience, and she always prioritizes making them comfortable before starting any exam. We are glad your golden retriever felt safe here. Fair pricing is something we work hard to maintain. See you both at the next visit.',
  },
  {
    stars: 2,
    review:
      'Brought my cat in for a routine vaccination and left with a $350 bill after they recommended additional tests. Felt pressured into services I did not ask for. The vet was nice but the billing was frustrating.',
    response:
      'We understand your frustration. Additional tests are recommended based on clinical judgment, but you should never feel pressured — it is always your choice. We are improving how we communicate optional versus required services so there is no ambiguity. Please contact our office to review the charges and we will ensure you only pay for what you agreed to.',
  },
  {
    stars: 5,
    review:
      'Our dog needed emergency surgery on a Sunday night. The team at this clinic responded immediately, kept us updated throughout the procedure, and the follow-up care was exceptional. They saved our dog life.',
    response:
      'We are so glad your dog pulled through. Emergency cases are always stressful for families and our team takes that responsibility seriously. Keeping you updated during the procedure is the least we can do during such a difficult time. We are happy with the recovery and will continue to support your dog health going forward.',
  },
  {
    stars: 3,
    review:
      'The vet was knowledgeable and caring. However, the wait was almost 45 minutes and the receptionist seemed overwhelmed. The facility is dated but clean. Would come back if the scheduling improves.',
    response:
      'Thank you for recognizing the care quality while being honest about the wait. Forty-five minutes is too long and we are adjusting our appointment slots to reduce that. We have also added front desk support to help our reception team during peak hours. We appreciate your patience and hope the scheduling improvements make a difference for your next visit.',
  },
]

export default function VeterinaryReviewsPage() {
  return (
    <div>
      <PageHeader
        title="Veterinary Review Response Examples"
        subtitle="Veterinary review response examples for pet care, emergency visits, costs, and compassion — ready to copy or customize."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Why Veterinary Clinics Need to Respond to Reviews</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Veterinary review responses matter because pet owners are emotionally invested. They are trusting you with a family member — your response shows you understand that.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">
            Responding to cost concerns with transparency builds trust. Responding to emergency praise shows compassion runs through your entire team.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            These examples cover common veterinary scenarios — from routine visits to emergency surgery to billing concerns.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Veterinary Review and Response Examples</h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <ReviewCard key={i} {...ex} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">What Makes a Good Veterinary Review Response</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            <li>• Show compassion — pet owners want to know you care about their animal.</li>
            <li>• Address cost concerns with transparency about what was recommended and why.</li>
            <li>• Reference the pet by name or breed when possible — it personalizes the response.</li>
            <li>• Acknowledge emergency situations with empathy for the stress involved.</li>
            <li>• Keep the tone warm and caring — this industry is deeply personal.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Veterinary Review Responses in Seconds
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Paste any veterinary review into Reviewly and get a professional, compassionate response instantly.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}
