import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Management Software | Typani",
    description: "Manage all your Google reviews with AI. Get alerts, generate responses, and track your reputation — all from one simple dashboard.",
  };
}

export default function AiReviewManagement() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Review Management Software"
      tagline="Typani brings all your Google reviews into one place — with AI that helps you respond faster, spot trends, and protect your reputation."
      featureHeading="What AI Review Management Includes"
      featureBody="From getting notified the moment a new review comes in to generating a polished response in seconds, Typani handles the full review management workflow so you can focus on running your business."
      featurePoints={[
        "Real-time alerts when new Google reviews come in",
        "AI-generated responses for any review, any rating",
        "Centralized dashboard to view and manage all reviews",
        "Tone customization to match your brand voice",
        "Review trend visibility to spot recurring issues",
        "Free to start — no setup fees or contracts",
      ]}
      examples={[
        {
          stars: 2,
          review: "Came in for a routine oil change and it took over 2 hours. No one updated me during the wait and I was late for work. Communication needs a lot of improvement.",
          response: "You're absolutely right — a 2-hour wait for an oil change is too long, and leaving you without any updates is unacceptable. We're sorry this affected your day. We've been reviewing our service bay scheduling and we're committed to doing better. Please reach out if there's anything we can do to make this right.",
        },
        {
          stars: 5,
          review: "I manage three locations and Typani has completely changed how I handle reviews. I used to dread opening the app. Now I actually stay on top of everything.",
          response: "That's exactly what we built this for — thank you! Managing multiple locations is a lot, and we're glad Typani is making a real difference. If there's anything we can do to make the platform work even better for your team, we'd love to hear it.",
        },
      ]}
      whyHeading="Why AI Makes Review Management Smarter"
      whyBody={[
        "Traditional review management means logging into Google, reading each review, and typing a custom response — multiplied by every location, every day. AI review management compresses that workflow dramatically. You still control the voice and quality, but the heavy lifting is done for you.",
        "For multi-location operators, the advantage is even bigger. Typani lets you manage all your locations from a single dashboard, so nothing slips through the cracks — even during your busiest seasons.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI review management dashboard"
      featureImageAlt="Review management analytics and insights"
      mobileImageAlt="Manage reviews on mobile with AI"
      related={[
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
      ]}
    />
  );
}
