import { MetadataRoute } from 'next'

const BASE_URL = 'https://review-reply-app-nu.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/login', changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: '/signup', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: '/app', changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: '/app/settings', changeFrequency: 'monthly' as const, priority: 0.2 },
    { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: '/cookies', changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  const usesPages = [
    '/uses',
    '/uses/hotel-review-response-examples',
    '/uses/restaurant-review-response-examples',
    '/uses/dental-review-response-examples',
    '/uses/apartment-review-response-examples',
    '/uses/airbnb-review-response-examples',
    '/uses/salon-review-response-examples',
    '/uses/auto-repair-review-response-examples',
    '/uses/medical-practice-review-response-examples',
    '/uses/veterinary-review-response-examples',
    '/uses/gym-review-response-examples',
    '/uses/spa-review-response-examples',
    '/uses/car-dealership-review-response-examples',
    '/uses/law-firm-review-response-examples',
    '/uses/negative-review-response-examples',
    '/uses/1-star-review-response-examples',
    '/uses/3-star-review-response-examples',
    '/uses/4-star-review-response-examples',
    '/uses/5-star-review-response-examples',
    '/uses/positive-review-response-examples',
    '/uses/ai-review-response-generator',
    '/uses/google-review-response-generator',
    '/uses/free-review-response-generator',
    '/uses/review-reply-generator',
  ].map((url) => ({
    url,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPages = [
    '/blog',
    '/blog/how-to-respond-to-bad-reviews-on-google',
    '/blog/does-responding-to-google-reviews-help-seo',
    '/blog/how-to-respond-to-positive-reviews',
  ].map((url) => ({
    url,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...usesPages, ...blogPages].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
