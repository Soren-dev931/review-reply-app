import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Reviewly',
  description: 'Get help with your Reviewly account, settings, and common questions.',
}

const FAQ_ITEMS = [
  {
    question: 'How do I connect Google Business Profile?',
    answer:
      "Go to Settings and click Connect Google. You'll need a Google account with access to your Business Profile. We'll guide you through the OAuth flow.",
  },
  {
    question: 'How do I change my response tone?',
    answer:
      'Go to Settings and select Professional, Friendly, or Casual under the Tone section.',
  },
  {
    question: 'What counts toward my monthly response limit?',
    answer:
      "Each AI-generated response counts as one use. Editing an existing response doesn't count again.",
  },
  {
    question: 'How do I upgrade or cancel my plan?',
    answer:
      'Go to Settings to upgrade. To cancel, email support@thereviewly.io and we\'ll handle it within 24 hours.',
  },
  {
    question: 'Can I export my response history?',
    answer:
      'Not yet — this feature is coming soon. For now, you can copy responses individually from the Dashboard.',
  },
]

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-6">Support</h1>

      <div className="bg-white border border-navy-100 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-navy-900 mb-2">
          Contact Support
        </h2>
        <p className="text-navy-600 mb-3">
          Need help? Send us an email and we&apos;ll get back to you within 24
          hours.
        </p>
        <a
          href="mailto:support@thereviewly.io"
          className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          support@thereviewly.io
        </a>
      </div>

      <div className="bg-white border border-navy-100 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-navy-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={i < FAQ_ITEMS.length - 1 ? 'pb-6 border-b border-navy-100' : ''}
            >
              <h3 className="font-medium text-navy-900 mb-2">
                {item.question}
              </h3>
              <p className="text-navy-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
