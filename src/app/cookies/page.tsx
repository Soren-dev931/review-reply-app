import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Cookie Policy | Typani',
    description:
      'Typani Cookie Policy. Learn about the cookies we use, why we use them, and how to manage your cookie preferences.',
  }
}

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Cookie Policy</h1>
          <p className="mt-4 text-navy-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-navy prose-sm max-w-none">
          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. What Are Cookies</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and give website operators useful information. Cookies can be &ldquo;persistent&rdquo; (remaining on your device until deleted) or &ldquo;session&rdquo; (deleted when you close your browser).
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Cookies We Use</h2>

          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Essential Cookies</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            These cookies are necessary for the Service to function and cannot be disabled. They include:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• <strong>Authentication cookies</strong> — Maintain your login session so you do not need to sign in on every page. Set by Supabase Auth.</li>
            <li>• <strong>Security cookies</strong> — Help protect against cross-site request forgery (CSRF) and other security threats.</li>
            <li>• <strong>Preference cookies</strong> — Remember your settings and preferences within the application.</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Analytics Cookies</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            These cookies help us understand how visitors interact with the Service by collecting and reporting information anonymously. They include:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• <strong>Usage analytics</strong> — Track page views, session duration, and feature usage to help us improve the Service.</li>
            <li>• <strong>Performance cookies</strong> — Monitor load times and error rates to ensure the Service runs smoothly.</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Analytics data is aggregated and does not personally identify individual users.
          </p>

          <h3 className="text-lg font-semibold text-navy-800 mt-6 mb-3">Third-Party Cookies</h3>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Some cookies are set by third-party services we use:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• <strong>Stripe</strong> — May set cookies for payment processing and fraud prevention.</li>
            <li>• <strong>Supabase</strong> — Sets cookies for authentication and session management.</li>
            <li>• <strong>Vercel</strong> — May set cookies for performance monitoring and analytics.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. How to Manage Cookies</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Most web browsers allow you to control cookies through their settings. You can typically:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• View what cookies are stored on your device</li>
            <li>• Delete individual or all cookies</li>
            <li>• Block cookies from specific or all websites</li>
            <li>• Set preferences for first-party versus third-party cookies</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Please note that disabling essential cookies may prevent certain features of the Service from functioning properly. You will still be able to browse the public pages, but features requiring authentication (such as generating responses and managing your account) may not work correctly.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            For instructions on managing cookies in specific browsers:
          </p>
          <ul className="text-navy-600 text-sm leading-relaxed mb-4 space-y-2">
            <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li>• <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies</li>
            <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions → Cookies</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. Changes to This Policy</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the Service after changes are posted constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-8 mb-4">5. Contact Us</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            If you have questions about our use of cookies, please contact us at:
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            Rize Market LLC, doing business as Typani<br />
            support@typani.com
          </p>
        </div>
      </section>
    </div>
  )
}
