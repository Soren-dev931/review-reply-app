import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Dashboard | Typani",
    description: "Manage all your Google reviews from one clean dashboard. View, respond, track, and analyze reviews across all your locations — in one place.",
  };
}

export default function GoogleReviewDashboard() {
  return (
    <UsesPageLayout
      badge="Review Management"
      h1="Google Review Dashboard for Local Businesses"
      tagline="See all your Google reviews in one place — and respond to each one with AI-generated drafts that are ready in seconds."
      featureHeading="What the Google Review Dashboard Shows You"
      featureBody="Typani's dashboard gives you a complete view of your review activity: new reviews, response status, rating trends, and AI-generated drafts — all in one simple interface."
      featurePoints={[
        "All reviews visible at a glance — sorted by date and star rating",
        "Response status tracking — see what's been answered and what hasn't",
        "AI-generated response drafts for every review",
        "Rating trend charts to spot changes over time",
        "Multi-location view for businesses with more than one address",
        "Simple interface — no learning curve required",
      ]}
      examples={[
        {
          stars: 3,
          review: "The dashboard view is helpful but I wish I could filter by star rating more easily. Otherwise great tool for managing reviews across my two locations.",
          response: "Thank you for the feedback — filtering by star rating is actually on our roadmap! We're building it out based on exactly this kind of input. We're really glad the multi-location view is working well for you. Stay tuned for that update!",
        },
        {
          stars: 5,
          review: "Finally I can see all my reviews in one place without logging into Google separately. The AI response drafts alone save me 30 minutes a day.",
          response: "That's exactly the kind of efficiency win we built this for — thank you! Thirty minutes a day adds up to real time you get back in your week. We're really glad the dashboard is working for you. Let us know if there's anything else we can add to make it even better.",
        },
      ]}
      whyHeading="Why a Centralized Dashboard Changes Everything"
      whyBody={[
        "Without a dedicated dashboard, review management means logging into your Google Business Profile, finding the review section, writing a response, and repeating that for every location. For businesses with one location, it's annoying. For businesses with multiple locations, it's a full-time job. A centralized review dashboard compresses all of that into a single screen.",
        "Beyond convenience, a dashboard gives you visibility that manual checking doesn't. You can see your rating trend over the last 90 days, spot a sudden drop before it becomes a crisis, and track whether your response rate is improving. That kind of data turns review management from reactive to proactive.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review dashboard overview"
      featureImageAlt="Review analytics and tracking dashboard"
      mobileImageAlt="Google review dashboard on mobile"
      related={[
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
        { href: "/uses/google-review-alerts", label: "Google Review Alerts" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
      ]}
    />
  );
}
