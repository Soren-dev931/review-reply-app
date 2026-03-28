import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Privacy Policy | Typani',
    description:
      'Typani Privacy Policy. Learn how we collect, use, store, and protect your data including account information, usage data, and review text.',
  }
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-navy-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-navy prose-sm max-w-none">
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Rize Market LLC D/B/A Typani (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates Typani. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. Please read this policy carefully. By using the Service, you consent to the practices described herein.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Account Information</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            When you create an account, we collect your email address, name, and authentication credentials. If you sign up through a third-party provider (such as Google), we receive basic profile information as authorized by that provider.
          </p>
          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Review Text</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            When you use the Service, you submit review text for processing. This text is sent to our AI processing service to generate response suggestions. We may retain submitted review text to improve the Service, but we do not publicly share or sell this data.
          </p>
          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Usage Data</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We automatically collect information about how you interact with the Service, including pages visited, features used, response generation frequency, browser type, device information, and IP address.
          </p>
          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Payment Information</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Payment processing is handled by Stripe. We do not store your full credit card number, CVV, or bank account details on our servers. Stripe may collect and store payment information in accordance with their own privacy policy.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We use the information we collect to: (a) provide, maintain, and improve the Service; (b) process transactions and manage subscriptions; (c) generate AI-powered review responses based on submitted text; (d) communicate with you about your account, updates, and support; (e) analyze usage patterns to improve user experience; and (f) comply with legal obligations.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. AI Processing</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Review text you submit is processed by Anthropic&apos;s Claude API to generate response suggestions. This means your submitted review text is transmitted to Anthropic for processing. Anthropic processes this data in accordance with their own privacy and data handling policies. We recommend reviewing Anthropic&apos;s privacy policy for details on how they handle data. We do not send your personal account information (name, email) to AI processing services — only the review text itself.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">5. Data Storage</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Your account data and application data are stored using Supabase, a cloud database platform. Supabase employs industry-standard security measures including encryption at rest and in transit. Our infrastructure is hosted in the United States.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">6. Third-Party Services</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We use the following third-party services that may have access to your data:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• <strong>Supabase</strong> — Database hosting and authentication</li>
            <li>• <strong>Stripe</strong> — Payment processing and subscription management</li>
            <li>• <strong>Anthropic</strong> — AI processing for generating review responses</li>
            <li>• <strong>Vercel</strong> — Application hosting and deployment</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Each of these services has their own privacy policies governing how they handle data. We encourage you to review their respective policies.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">7. Cookies</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage. For detailed information about our cookie practices, please see our <a href="/cookies" className="text-emerald-600 hover:text-emerald-700 underline">Cookie Policy</a>.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">8. Data Retention</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We retain your account information for as long as your account is active or as needed to provide the Service. Generated responses and submitted review text may be retained for up to 12 months to improve the Service. If you delete your account, we will remove your personal data within 30 days, except where retention is required by law or for legitimate business purposes (such as fraud prevention).
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">9. Your Rights</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Depending on your jurisdiction, you may have the following rights regarding your personal data: (a) the right to access the personal data we hold about you; (b) the right to request correction of inaccurate data; (c) the right to request deletion of your data; (d) the right to data portability; (e) the right to opt out of certain data processing activities; and (f) the right to withdraw consent at any time. To exercise any of these rights, please contact us at support@typani.com.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">10. Children&apos;s Privacy</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            The Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16, we will take steps to delete that information promptly.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">11. Contact Information</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            Rize Market LLC D/B/A Typani<br />
            support@typani.com
          </p>
        </div>
      </section>
    </div>
  )
}
