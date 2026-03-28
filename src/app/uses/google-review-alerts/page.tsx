import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Alerts | Typani",
    description: "Get instant alerts when a new Google review comes in. Never miss a review — and respond faster with AI-generated draft responses ready when you are.",
  };
}

export default function GoogleReviewAlerts() {
  return (
    <UsesPageLayout
      badge="Automation"
      h1="Google Review Alerts — Get Notified Instantly"
      tagline="Know the moment a new Google review is posted. Typani sends instant alerts so you can respond before the day is over — not days later."
      featureHeading="What Google Review Alerts Give You"
      featureBody="Speed matters in review response. Businesses that respond within hours get better outcomes than those that respond weeks later — or not at all. Typani keeps you informed in real time."
      featurePoints={[
        "Instant notifications when a new Google review is posted",
        "Alerts for all your locations in one feed",
        "AI-generated response draft ready with each alert",
        "Never lose track of an unanswered review",
        "Review history and response tracking in one place",
        "Free to start — no setup complexity",
      ]}
      examples={[
        {
          stars: 1,
          review: "Left a 1-star review and the business responded the same day with an apology and offered to fix it. I'm honestly changing this to 4 stars — that kind of response is impressive.",
          response: "Thank you so much for giving us the chance to make it right — and for updating your review. Hearing back from you means a lot. We're glad we could turn this around and we look forward to showing you what we're really about on your next visit.",
        },
        {
          stars: 5,
          review: "I love that every time I leave a review here, they actually respond. Shows they're paying attention and care about their customers. It's a small thing but it makes me trust them more.",
          response: "Noticing and responding to every review is something we genuinely prioritize — so hearing that it registers with you is really encouraging. Thank you for being the kind of customer who leaves thoughtful feedback. It helps us more than you know!",
        },
      ]}
      whyHeading="Why Fast Review Alerts Change Your Response Rate"
      whyBody={[
        "Most businesses that check their Google reviews manually do it sporadically — maybe once a week, maybe less. That means a damaging 1-star review can sit unanswered for days or weeks, visible to every potential customer who searches for you. Real-time alerts fix that. The moment a review comes in, you know about it.",
        "Response speed also affects the outcome of negative reviews. When you respond within a few hours, there's a much better chance the customer is still in the mindset of your interaction — and a thoughtful response can change how they feel before they've completely moved on. Typani makes that speed possible without requiring you to constantly refresh your Google listing.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review alerts dashboard"
      featureImageAlt="Review alert and response tracking analytics"
      mobileImageAlt="Google review alerts on mobile"
      related={[
        { href: "/uses/google-review-automation", label: "Google Review Automation" },
        { href: "/uses/google-review-dashboard", label: "Google Review Dashboard" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
      ]}
    />
  );
}
