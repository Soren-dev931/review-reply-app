import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Reviewly',
  description: 'Contact Reviewly for questions, support, or feedback about our AI review response generator. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-navy-600 mb-8">
        Have a question, need help, or want to share feedback? Reach out and
        we&apos;ll get back to you within 24 hours.
      </p>

      <div className="bg-white border border-navy-100 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-navy-900 mb-2">Email Us</h2>
        <a
          href="mailto:support@thereviewly.io"
          className="text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          support@thereviewly.io
        </a>
      </div>

      <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 mb-12">
        <h2 className="text-lg font-semibold text-navy-900 mb-2">
          Need help with your account?
        </h2>
        <p className="text-navy-600 mb-3">
          If you&apos;re already a Reviewly user, visit our in-app support page for
          FAQs and account help.
        </p>
        <a
          href="/app/support"
          className="inline-block text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          Go to Support →
        </a>
      </div>

      <div className="border-t border-navy-100 pt-8">
        <h2 className="text-lg font-semibold text-navy-900 mb-4">
          Explore Reviewly
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/uses"
            className="text-navy-600 hover:text-navy-900 font-medium transition-colors"
          >
            See Use Cases →
          </a>
          <a
            href="/#demo"
            className="text-navy-600 hover:text-navy-900 font-medium transition-colors"
          >
            Try the Live Demo →
          </a>
        </div>
      </div>
    </div>
  )
}
