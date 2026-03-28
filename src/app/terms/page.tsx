import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Terms of Service | Typani',
    description:
      'Typani Terms of Service. Read our terms covering account registration, subscriptions, acceptable use, AI-generated content, and more.',
  }
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-navy-300">Last updated: March 2025</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-navy prose-sm max-w-none">
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            By accessing or using Typani (&ldquo;the Service&rdquo;), operated by [COMPANY_NAME], you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. We reserve the right to update these terms at any time, and your continued use constitutes acceptance of any changes.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Account Registration</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at [SUPPORT_EMAIL] if you suspect unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Subscription and Billing</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Typani offers both free and paid subscription plans. Paid plans are billed on a recurring basis (monthly or annually) as selected at the time of purchase. Payments are processed through Stripe. By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis until you cancel. You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. Refunds are provided at our discretion and in accordance with applicable law.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not: (a) use the Service to generate content that is defamatory, fraudulent, misleading, or violates any law; (b) impersonate another person or entity in your responses; (c) attempt to reverse-engineer, decompile, or disassemble any part of the Service; (d) use automated means to access the Service beyond what is provided through our official interface; (e) share your account credentials with third parties; or (f) use the Service in any manner that could damage, disable, or impair its functionality.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">5. AI-Generated Content Disclaimer</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Typani uses artificial intelligence to generate review response suggestions. All AI-generated content is provided as a starting point and should be reviewed by you before publication. [COMPANY_NAME] does not guarantee the accuracy, completeness, or appropriateness of any AI-generated content. You are solely responsible for reviewing, editing, and approving all content before posting it publicly. AI-generated responses may not comply with industry-specific regulations (such as HIPAA for healthcare) without proper review and modification by qualified personnel.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            The Service, including its design, features, and content (excluding user-submitted content), is the property of [COMPANY_NAME] and is protected by copyright, trademark, and other intellectual property laws. You retain ownership of any review text you submit to the Service. By using the Service, you grant [COMPANY_NAME] a limited, non-exclusive license to process your submitted content solely for the purpose of generating responses.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            To the maximum extent permitted by law, [COMPANY_NAME] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising from your use of or inability to use the Service. Our total liability for any claim arising from these Terms or your use of the Service shall not exceed the amount you paid to us in the twelve (12) months preceding the claim. The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">8. Termination</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. You may terminate your account at any time by contacting us at [SUPPORT_EMAIL] or through your account settings. Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination shall survive, including but not limited to intellectual property, limitation of liability, and governing law.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">9. Governing Law</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved in the state or federal courts located in Ohio.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">10. Contact Information</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            [COMPANY_NAME]<br />
            [ADDRESS]<br />
            [SUPPORT_EMAIL]
          </p>
        </div>
      </section>
    </div>
  )
}
