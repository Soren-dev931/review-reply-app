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

  const forPages = [
    '/for',
    '/for/hotels',
    '/for/restaurants',
    '/for/dentists',
    '/for/apartments',
    '/for/airbnb',
    '/for/salons',
    '/for/auto-repair',
    '/for/medical',
    '/for/veterinary',
    '/for/gyms',
    '/for/spas',
    '/for/car-dealerships',
    '/for/law-firms',
  ].map((url) => ({
    url,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const examplePages = [
    '/examples',
    '/examples/1-star-reviews',
    '/examples/3-star-reviews',
    '/examples/4-star-reviews',
    '/examples/5-star-reviews',
    '/examples/negative-reviews',
    '/examples/positive-reviews',
  ].map((url) => ({
    url,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...forPages, ...examplePages].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
