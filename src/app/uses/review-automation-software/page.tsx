import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Automation Software | Typani",
    description: "Automate your Google review management with smart software. Get notified, generate AI responses, and track your reputation — without manual monitoring.",
  };
}

export default function ReviewAutomationSoftware() {
  return (
    <UsesPageLayout
      badge="Automation"
      h1="Review Automation Software for Google Reviews"
      tagline="Typani automates the most time-consuming parts of review management — alerts, response drafts, and tracking — so your reputation stays protected without constant attention."
      featureHeading="What Review Automation Software Does"
      featureBody="Review automation software isn't about removing your judgment — it's about removing the friction. Typani handles the monitoring and draft generation so you can spend your limited time on the decision, not the process."
      featurePoints={[
        "Automatic review monitoring — no manual checking required",
        "Instant alerts when a new review is posted",
        "AI-generated response drafts ready for your approval",
        "Multi-location management from one dashboard",
        "Response history and review tracking",
        "Free to start — upgrade as your review volume grows",
      ]}
      examples={[
        {
          stars: 2,
          review: "A business that actually uses review automation should be embarrassed when their automated response doesn't even match the content of my review. Mine was clearly not read.",
          response: "That's a fair and important critique — an automated-sounding response that ignores the actual review content is worse than no response. Typani is built specifically to address this: every response is generated from the actual review text, so it reflects what was said. We're committed to automation that still feels human.",
        },
        {
          stars: 5,
          review: "Using review automation has saved my team hours every week. The quality of the responses is good enough that I rarely edit before posting. It's become part of our weekly routine.",
          response: "That's exactly the integration we aim for — part of the routine, not another thing on the to-do list. We're glad the quality is meeting the bar. If you ever have feedback on how we can raise it further, we genuinely want to hear it. Thanks for trusting us with your reputation!",
        },
      ]}
      whyHeading="Why Review Automation Software Beats Manual Management"
      whyBody={[
        "Manual review management fails silently. Businesses miss reviews during busy periods, respond to them days or weeks late, and never realize how much reputation ground they're losing. Review automation software creates a system that works even when you're too busy to think about it.",
        "The best review automation tools don't sacrifice quality for speed. Typani's AI generates responses that are specific to each review — not templated — so you never have to apologize for a response that didn't address the actual complaint. The automation is invisible to the customer.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review automation software dashboard"
      featureImageAlt="Review automation analytics and reporting"
      mobileImageAlt="Manage automated review responses on mobile"
      related={[
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/uses/google-review-automation", label: "Google Review Automation" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
      ]}
    />
  );
}
