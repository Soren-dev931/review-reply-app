import { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'Review Response Examples | Free AI Tool | Reviewly',
    description:
      'Review response examples by star rating and sentiment. Templates for 1-star, 5-star, negative, and positive reviews across all industries.',
  }
}

const byRating = [
  {
    title: '1 Star Review Responses',
    href: '/examples/1-star-reviews',
    desc: 'Professional, empathetic responses to the worst-case reviews. Show accountability and recover trust.',
    stars: 1,
  },
  {
    title: '5 Star Review Responses',
    href: '/examples/5-star-reviews',
    desc: 'Warm, specific responses that go beyond generic thank-yous. Reinforce loyalty.',
    stars: 5,
  },
]

const bySentiment = [
  {
    title: 'Negative Review Responses',
    href: '/examples/negative-reviews',
    desc: 'Cross-industry examples for handling complaints, bad experiences, and angry customers with professionalism.',
  },
]

export default function ExamplesPage() {
  return (
    <div>
      <PageHeader
        title="Review Response Examples"
        subtitle="Browse review response examples by star rating and sentiment. Find the right template for any review."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-navy-900 mb-6 pb-2 border-b border-navy-100">
            By Star Rating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {byRating.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-6 hover:border-emerald-300 transition-colors group"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < item.stars ? 'text-yellow-400' : 'text-navy-200'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg text-navy-900 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-navy-500 text-sm mt-2">{item.desc}</p>
                <span className="text-emerald-600 text-sm font-medium mt-3 inline-block">
                  View examples →
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-navy-900 mb-6 pb-2 border-b border-navy-100">
            By Sentiment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bySentiment.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-6 hover:border-emerald-300 transition-colors group"
              >
                <h3 className="font-semibold text-lg text-navy-900 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-navy-500 text-sm mt-2">{item.desc}</p>
                <span className="text-emerald-600 text-sm font-medium mt-3 inline-block">
                  View examples →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Browse by Business Type</h2>
          <p className="text-navy-600 text-sm mb-6 text-center">
            Looking for industry-specific examples? Check our business type pages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Hotels', href: '/for/hotels' },
              { label: 'Restaurants', href: '/for/restaurants' },
              { label: 'Dentists', href: '/for/dentists' },
              { label: 'Apartments', href: '/for/apartments' },
              { label: 'Airbnb', href: '/for/airbnb' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-outline !px-4 !py-2 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Generate Custom Responses Instantly
          </h2>
          <p className="text-navy-300 mb-6 text-sm">
            Skip the templates. Paste any review and get a personalized response in seconds.
          </p>
          <a href="/#demo" className="btn-primary inline-block">
            Try Free — Generate a Response
          </a>
        </div>
      </section>
    </div>
  )
}
