import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Automated Review Management | Typani",
    description: "Automate your Google review management workflow. Get instant alerts, AI-generated responses, and a centralized dashboard — all without the manual effort.",
  };
}

export default function AutomatedReviewManagement() {
  return (
    <UsesPageLayout
      badge="Automation"
      h1="Automated Review Management for Google Reviews"
      tagline="Stop manually checking for new reviews. Typani automates the alerts, the responses, and the tracking — so your reputation runs on autopilot."
      featureHeading="What Automated Review Management Covers"
      featureBody="Typani automates the most time-consuming parts of review management: knowing when a review comes in, figuring out what to say, and keeping track of what's been handled."
      featurePoints={[
        "Instant alerts the moment a new Google review is posted",
        "AI-generated draft responses ready for review",
        "Centralized dashboard across all your locations",
        "Review trend tracking to catch recurring issues",
        "Customizable tone settings for consistent brand voice",
        "Free to start — no complex setup required",
      ]}
      examples={[
        {
          stars: 2,
          review: "I've left three reviews across different locations of this chain and never gotten a response. If you don't care enough to reply, why should I keep coming back?",
          response: "You're completely right — no response is a bad response. We appreciate you letting us know, and we're working to ensure every review gets the attention it deserves. Thank you for your patience, and please know your feedback genuinely helps us improve.",
        },
        {
          stars: 5,
          review: "I manage a chain of five coffee shops and Typani has been a game-changer. New review comes in, I get a ping, and there's already a draft response waiting. Takes me 30 seconds now.",
          response: "That's exactly what we built this for! Five locations is a lot to stay on top of, and we're so glad Typani is making the review workflow actually manageable. If you ever want to share feedback on how we can make it even better for multi-location operators, we're all ears.",
        },
      ]}
      whyHeading="Why Automation Is the Key to Consistent Review Management"
      whyBody={[
        "The biggest enemy of review management isn't effort — it's inconsistency. Businesses that respond to reviews some of the time, but miss weeks or months during busy periods, send a mixed signal to both customers and Google. Automation makes consistency possible without burning out your team.",
        "Automated review management also catches problems faster. When a negative review comes in and you respond within hours instead of days, you have a much better chance of resolving the situation before it escalates — and other readers can see that you acted quickly.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Automated review management dashboard"
      featureImageAlt="Review management automation analytics"
      mobileImageAlt="Manage automated review responses on mobile"
      related={[
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
        { href: "/uses/google-review-automation", label: "Google Review Automation" },
        { href: "/uses/ai-review-management", label: "AI Review Management" },
      ]}
    />
  );
}
