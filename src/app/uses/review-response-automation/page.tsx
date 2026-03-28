import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Automation | Typani",
    description: "Automate your Google review responses with AI. Get draft responses generated instantly for every new review — approve and post in seconds.",
  };
}

export default function ReviewResponseAutomation() {
  return (
    <UsesPageLayout
      badge="Automation"
      h1="Review Response Automation for Google Reviews"
      tagline="Typani automates the response workflow — the moment a review comes in, a draft is waiting for you. All you need to do is approve and post."
      featureHeading="How Review Response Automation Works"
      featureBody="Review response automation removes the blank page problem entirely. Typani monitors your Google reviews, and when a new one comes in, instantly generates a draft response based on the review content — ready for your review."
      featurePoints={[
        "New review comes in → instant notification",
        "AI draft generated immediately from the review content",
        "Review and edit the draft in one click",
        "Post directly or copy to Google",
        "Tracks which reviews have been responded to",
        "Free to start — no complex setup",
      ]}
      examples={[
        {
          stars: 2,
          review: "The automated response I got to my last review was clearly a copy-paste job that had nothing to do with what I actually said. Made me feel like my feedback didn't matter.",
          response: "That's a completely fair criticism and exactly the kind of automation we built Typani to replace. Every response Typani generates is built from the content of the actual review — so it addresses what was said, not just what a template expects. We're sorry your last experience with review automation fell short of that standard.",
        },
        {
          stars: 5,
          review: "Signed up three weeks ago and I've responded to more reviews in that time than in the previous six months. The automation just makes it happen without thinking.",
          response: "That's exactly the behavior change we're trying to enable — thank you! When responding becomes frictionless, it actually happens. We're really glad Typani is working that way for you. Let us know if there's anything we can add to make it even more seamless.",
        },
      ]}
      whyHeading="Why Review Response Automation Changes Your Reputation"
      whyBody={[
        "The biggest driver of a poor review response rate isn't motivation — it's friction. When responding to a review requires logging in, finding it, writing something thoughtful, and remembering to come back to it, it often just doesn't happen. Automation eliminates that friction and makes consistency the default.",
        "Consistent review response is one of the strongest signals to both Google and potential customers that your business is active, engaged, and trustworthy. Businesses that respond to every review — not just the dramatic ones — build a review history that's a genuine competitive asset over time.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review response automation dashboard"
      featureImageAlt="Automated review response analytics"
      mobileImageAlt="Automate review responses from your phone"
      related={[
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
        { href: "/uses/google-review-automation", label: "Google Review Automation" },
        { href: "/uses/ai-review-management", label: "AI Review Management" },
      ]}
    />
  );
}
