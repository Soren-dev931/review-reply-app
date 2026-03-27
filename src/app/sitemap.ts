import { MetadataRoute } from 'next'

const BASE_URL = 'https://thereviewly.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/login', changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: '/signup', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: '/terms', changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: '/cookies', changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  const usesPages = [
    '/uses',
    // Hospitality
    '/uses/hotel-review-response-examples',
    '/uses/restaurant-review-response-examples',
    '/uses/airbnb-review-response-examples',
    '/uses/spa-review-response-examples',
    '/uses/positive-hotel-review-response-examples',
    '/uses/negative-hotel-review-response-template',
    // Healthcare
    '/uses/dental-review-response-examples',
    '/uses/medical-practice-review-response-examples',
    '/uses/veterinary-review-response-examples',
    '/uses/positive-dental-review-response-examples',
    // Services
    '/uses/salon-review-response-examples',
    '/uses/auto-repair-review-response-examples',
    '/uses/gym-review-response-examples',
    '/uses/law-firm-review-response-examples',
    // Property & Auto Sales
    '/uses/apartment-review-response-examples',
    '/uses/car-dealership-review-response-examples',
    // E-Commerce
    '/uses/etsy-review-response-examples',
    // By Star Rating
    '/uses/1-star-review-response-examples',
    '/uses/3-star-review-response-examples',
    '/uses/4-star-review-response-examples',
    '/uses/5-star-review-response-examples',
    // By Review Type
    '/uses/negative-review-response-examples',
    '/uses/positive-review-response-examples',
    '/uses/bad-review-response-examples',
    '/uses/funny-responses-to-negative-reviews',
    '/uses/customer-service-negative-review-response-examples',
    '/uses/sample-responses-to-negative-reviews',
    // Tools
    '/uses/ai-review-response-generator',
    '/uses/google-review-response-generator',
    '/uses/free-review-response-generator',
    '/uses/review-reply-generator',
    '/uses/google-review-response-tool',
    // Automation
    '/uses/google-review-automation',
    '/uses/review-response-automation',
    '/uses/automated-review-management',
    '/uses/review-automation-software',
    '/uses/google-review-responder',
    '/uses/google-review-alerts',
    '/uses/google-review-dashboard',
    '/uses/review-monitoring-service',
    // AI Review Tools
    '/uses/ai-review-response',
    '/uses/ai-review-responder',
    '/uses/ai-review-reply',
    '/uses/ai-google-review-reply',
    '/uses/ai-powered-review-response',
    '/uses/ai-review-management',
    '/uses/review-response-service',
    // Software
    '/uses/google-review-management-software',
    '/uses/best-review-management-software',
    // Templates
    '/uses/negative-review-response-template',
    '/uses/positive-review-response-template',
    // Examples
    '/uses/review-response-examples',
    '/uses/google-review-response-examples',
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
