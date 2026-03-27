import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Best Review Management Software | Reviewly",
    description: "Looking for the best review management software? Reviewly helps you monitor, respond to, and analyze Google reviews — all from one simple dashboard.",
  };
}

export default function BestReviewManagementSoftware() {
  return (
    <UsesPageLayout
      badge="Review Management"
      h1="Best Review Management Software for Local Businesses"
      tagline="Reviewly gives local businesses everything they need to manage Google reviews — alerts, AI responses, analytics, and multi-location support — in one clean dashboard."
      featureHeading="What to Look for in Review Management Software"
      featureBody="The best review management tools don't just collect reviews — they help you respond consistently, spot trends, and protect your reputation across every location."
      featurePoints={[
        "Real-time alerts so you never miss a new review",
        "AI-generated responses that sound human, not robotic",
        "Multi-location support for franchises and chains",
        "Analytics to track rating trends over time",
        "Simple interface that doesn't require training",
        "Free to start — no enterprise pricing required",
      ]}
      examples={[
        {
          stars: 2,
          review: "We tried three different review management platforms before Reviewly. The others were either too expensive, too complicated, or generated responses that sounded like they were written by a robot.",
          response: "Thank you for giving us a shot after a frustrating search — we built Reviewly specifically because the existing tools felt like they were designed for enterprise teams, not small business owners. We're glad the responses feel more human. If you ever have suggestions for improvement, we genuinely want to hear them.",
        },
        {
          stars: 5,
          review: "Finally a tool that does exactly what it says. I get a notification when a review comes in, there's a draft response ready, I edit and post it. Five minutes tops. Worth every penny.",
          response: "That workflow is exactly what we designed for — thank you for describing it so perfectly! Simple, fast, and out of your way. We're really glad it's working well for you and we'd love to keep making it even better.",
        },
      ]}
      whyHeading="Why the Right Review Management Software Matters"
      whyBody={[
        "Most local businesses know they should be managing their reviews — but without the right tool, it quickly becomes overwhelming. The best review management software removes friction at every step: you get notified, you get a response draft, you approve and post. That's the whole workflow.",
        "The alternative — manually checking Google every day, writing every response from scratch, trying to remember which reviews you've addressed — isn't sustainable. A good review management platform turns an irregular chore into a consistent system.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Best review management software dashboard"
      featureImageAlt="Review management analytics and reporting"
      mobileImageAlt="Review management on mobile"
      related={[
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
        { href: "/uses/ai-review-management", label: "AI Review Management" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
      ]}
    />
  );
}
