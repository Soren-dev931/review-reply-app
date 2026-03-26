import { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/seo/ReviewCard'

export function generateMetadata(): Metadata {
  return {
    title: 'AI Review Responses for Every Business Type | Reviewly',
    description:
      'Review response examples and AI-generated replies for hotels, restaurants, dentists, apartments, Airbnbs, and more. Find templates for your industry.',
  }
}

const categories = [
  {
    name: 'Hospitality',
    businesses: [
      {
        title: 'Hotels',
        href: '/for/hotels',
        desc: 'Respond to guest reviews about rooms, amenities, staff, and cleanliness.',
      },
      {
        title: 'Airbnb',
        href: '/for/airbnb',
        desc: 'Host responses for check-in, communication, location accuracy, and cleanliness reviews.',
      },
      {
        title: 'Restaurants',
        href: '/for/restaurants',
        desc: 'Templates for food quality, service, wait times, and ambiance feedback.',
      },
    ],
  },
  {
    name: 'Healthcare',
    businesses: [
      {
        title: 'Dentists',
        href: '/for/dentists',
        desc: 'HIPAA-conscious responses for patient care, procedures, and wait time reviews.',
      },
    ],
  },
  {
    name: 'Property',
    businesses: [
      {
        title: 'Apartments',
        href: '/for/apartments',
        desc: 'Property manager responses for maintenance, noise, amenities, and management reviews.',
      },
    ],
  },
]

export default function ForPage() {
  return (
    <div>
      <PageHeader
        title="AI Review Responses for Every Business Type"
        subtitle="Find review response examples and AI-powered templates tailored to your industry."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-navy-900 mb-6 pb-2 border-b border-navy-100">
                {cat.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.businesses.map((biz) => (
                  <Link
                    key={biz.href}
                    href={biz.href}
                    className="card p-6 hover:border-emerald-300 transition-colors group"
                  >
                    <h3 className="font-semibold text-lg text-navy-900 group-hover:text-emerald-600 transition-colors">
                      {biz.title}
                    </h3>
                    <p className="text-navy-500 text-sm mt-2">{biz.desc}</p>
                    <span className="text-emerald-600 text-sm font-medium mt-3 inline-block">
                      View examples →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-navy-600 text-sm mb-6">
            Reviewly works for any business that receives reviews. Paste any review and the AI adapts to your industry automatically.
          </p>
          <a href="/#demo" className="btn-primary inline-block">
            Try It Free — Any Business Type
          </a>
        </div>
      </section>
    </div>
  )
}
