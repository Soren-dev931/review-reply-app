import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Responses for Every Business | Reviewly",
    description: "Browse review response examples by business type, star rating, or use case. Generate personalized review replies in 10 seconds with Reviewly.",
  };
}

const categories = [
  {
    title: "Hospitality",
    pages: [
      { href: "/uses/hotel-review-response-examples", label: "Hotel Review Responses" },
      { href: "/uses/restaurant-review-response-examples", label: "Restaurant Review Responses" },
      { href: "/uses/airbnb-review-response-examples", label: "Airbnb Review Responses" },
      { href: "/uses/spa-review-response-examples", label: "Spa Review Responses" },
    ],
  },
  {
    title: "Healthcare",
    pages: [
      { href: "/uses/dental-review-response-examples", label: "Dental Review Responses" },
      { href: "/uses/medical-practice-review-response-examples", label: "Medical Practice Review Responses" },
      { href: "/uses/veterinary-review-response-examples", label: "Veterinary Review Responses" },
    ],
  },
  {
    title: "Services",
    pages: [
      { href: "/uses/salon-review-response-examples", label: "Salon Review Responses" },
      { href: "/uses/auto-repair-review-response-examples", label: "Auto Repair Review Responses" },
      { href: "/uses/gym-review-response-examples", label: "Gym Review Responses" },
      { href: "/uses/law-firm-review-response-examples", label: "Law Firm Review Responses" },
    ],
  },
  {
    title: "Property & Auto Sales",
    pages: [
      { href: "/uses/apartment-review-response-examples", label: "Apartment Review Responses" },
      { href: "/uses/car-dealership-review-response-examples", label: "Car Dealership Review Responses" },
    ],
  },
  {
    title: "By Star Rating",
    pages: [
      { href: "/uses/1-star-review-response-examples", label: "1-Star Review Responses" },
      { href: "/uses/3-star-review-response-examples", label: "3-Star Review Responses" },
      { href: "/uses/4-star-review-response-examples", label: "4-Star Review Responses" },
      { href: "/uses/5-star-review-response-examples", label: "5-Star Review Responses" },
    ],
  },
  {
    title: "By Review Type",
    pages: [
      { href: "/uses/negative-review-response-examples", label: "Negative Review Responses" },
      { href: "/uses/positive-review-response-examples", label: "Positive Review Responses" },
    ],
  },
  {
    title: "Tools",
    pages: [
      { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
      { href: "/uses/free-review-response-generator", label: "Free Review Response Generator" },
      { href: "/uses/review-reply-generator", label: "Review Reply Generator" },
    ],
  },
];

export default function UsesHub() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-4">
        AI Review Responses for Every Business
      </h1>
      <p className="text-lg text-navy-700 mb-4">
        Reviewly generates personalized review responses for any business type and any star rating. Browse examples by category or try the tool yourself.
      </p>

      <a href="/#demo" className="btn-primary inline-block mb-12">
        Generate a Response Free
      </a>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="card p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-4">{cat.title}</h2>
            <div className="space-y-2">
              {cat.pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="block text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {page.label} →
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6">
        <h2 className="text-xl font-bold text-navy-900 mb-4">Learn More</h2>
        <div className="space-y-2">
          <Link href="/blog/how-to-respond-to-bad-reviews-on-google" className="block text-emerald-600 hover:text-emerald-700 font-medium">
            How to Respond to Bad Reviews on Google →
          </Link>
          <Link href="/blog/does-responding-to-google-reviews-help-seo" className="block text-emerald-600 hover:text-emerald-700 font-medium">
            Does Responding to Google Reviews Help SEO? →
          </Link>
          <Link href="/blog/how-to-respond-to-positive-reviews" className="block text-emerald-600 hover:text-emerald-700 font-medium">
            How to Respond to Positive Reviews →
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/#demo" className="btn-primary inline-block">
          Generate a Response Free
        </a>
      </div>
    </div>
  );
}
