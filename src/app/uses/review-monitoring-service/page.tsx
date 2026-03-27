import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Monitoring Service | Reviewly",
    description: "Never miss a Google review with Reviewly's review monitoring service. Get instant alerts, track your rating trends, and respond faster with AI-generated drafts.",
  };
}

export default function ReviewMonitoringService() {
  return (
    <UsesPageLayout
      badge="Review Management"
      h1="Google Review Monitoring Service"
      tagline="Know the moment a new review comes in — positive or negative. Reviewly monitors your Google reviews around the clock and alerts you instantly so nothing gets missed."
      featureHeading="What Review Monitoring Gives You"
      featureBody="Review monitoring is the foundation of reputation management. Without it, you're flying blind — responding to reviews you happen to notice, and missing the ones that needed your attention most."
      featurePoints={[
        "Real-time alerts for every new Google review",
        "Rating trend tracking to spot sudden changes",
        "Multi-location monitoring in one dashboard",
        "AI-generated response drafts with each alert",
        "Response history so nothing falls through",
        "Free to start — monitor your reviews today",
      ]}
      examples={[
        {
          stars: 1,
          review: "Posted a negative review and nobody responded for three weeks. That tells me everything about how this business treats its customers.",
          response: "You're absolutely right — three weeks without a response is unacceptable, and we're sorry. We're actively improving our review monitoring so that no feedback goes unanswered. Thank you for holding us accountable. If your original issue is still unresolved, please reach out to us at support@business.com and we'll prioritize it.",
        },
        {
          stars: 5,
          review: "I appreciate that this business responds to every review within a day or two. You can tell they're paying attention. It's a big part of why I keep choosing them.",
          response: "Staying on top of every review is something we invest real effort in — hearing that it influences your choice to come back makes it completely worth it. Thank you for noticing and for saying so. We'll keep the standard high!",
        },
      ]}
      whyHeading="Why Review Monitoring Is the Foundation of Reputation Management"
      whyBody={[
        "You can't respond to reviews you don't know exist. For businesses with busy operations, manually checking Google every day is rarely realistic — which means reviews pile up unread and unanswered. A dedicated monitoring service ensures you're always informed, regardless of how hectic your schedule gets.",
        "Monitoring also gives you visibility you wouldn't otherwise have. Rating trend data reveals patterns in customer feedback over time — a dip after a staffing change, improvement after a menu update, consistent complaints about parking. That information is actionable in ways a single review never is.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review monitoring service dashboard"
      featureImageAlt="Review monitoring analytics and trend tracking"
      mobileImageAlt="Monitor reviews from your phone"
      related={[
        { href: "/uses/google-review-alerts", label: "Google Review Alerts" },
        { href: "/uses/google-review-dashboard", label: "Google Review Dashboard" },
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
      ]}
    />
  );
}
