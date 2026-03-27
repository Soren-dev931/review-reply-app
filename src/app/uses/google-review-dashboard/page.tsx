import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Dashboard — All Your Reviews in One Place | Reviewly",
    description: "Google review dashboard that shows all reviews across locations in one view. Filter by rating, status, and location. Respond with AI in one click.",
  };
}

export default function GoogleReviewDashboard() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-6">
        Google Review Dashboard
      </h1>

      <p className="text-lg text-navy-700 mb-2">
        A Google review dashboard puts every review from every location into a single view. No switching between tabs. No logging into Google Business Profile for each location. Reviewly pulls your reviews in and lets you respond from one screen.
      </p>
      <p className="text-lg text-navy-700 mb-8">
        Filter by star rating, response status, location, or date. See which reviews need attention and which ones already have a reply. AI drafts the response — you approve or edit before it posts.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        See Your Reviews in One Place
      </a>

      {/* IMAGE: Reviewly dashboard showing reviews filtered by rating with status badges */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Reviewly Google review dashboard with filters"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        What You See in the Dashboard
      </h2>
      <ul className="list-disc pl-6 text-navy-700 space-y-2 mb-8">
        <li>Reviewer name, star rating, and full review text</li>
        <li>AI-drafted response ready for approval</li>
        <li>Status badge: pending, approved, posted, or skipped</li>
        <li>Location name for multi-location businesses</li>
        <li>Date and time the review was posted</li>
      </ul>

      {/* IMAGE: Close-up of a single review card with approve/edit/skip buttons */}
      <div className="rounded-lg overflow-hidden mb-12">
                <img
                  src="/images/screenshots/reviews-dashboard.webp"
                  alt="Review card with approve, edit, and skip actions - google review dashboard"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Multi-Location Support
      </h2>
      <p className="text-navy-700 mb-4">
        Businesses with multiple locations spend the most time managing reviews. A dashboard eliminates the need to check each location separately.
      </p>
      <p className="text-navy-700 mb-8">
        The Pro plan supports unlimited locations. Filter by a single location or view everything at once. Analytics show trends across all locations or broken down by each one.
      </p>

      <h2 className="text-2xl font-bold text-navy-900 mb-4">
        Analytics Built In
      </h2>
      <p className="text-navy-700 mb-8">
        The Pro plan includes response rate tracking, average response time, review volume trends, and rating distribution. See whether your review scores are going up or down and how quickly your team is responding.
      </p>

      <a href="/signup" className="btn-primary inline-block mb-12">
        See Your Reviews in One Place
      </a>

      <div className="border-t border-navy-100 pt-8 mt-8">
        <p className="text-sm text-navy-500 mb-2">Related:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/google-review-alerts" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Alerts →
          </Link>
          <Link href="/uses/google-review-management-software" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Management Software →
          </Link>
          <Link href="/uses/review-monitoring-service" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Review Monitoring Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
