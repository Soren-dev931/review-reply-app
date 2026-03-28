import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Automation | Typani",
    description: "Automate your Google review workflow with AI. Get instant alerts, draft responses, and review tracking — all without manual monitoring.",
  };
}

export default function GoogleReviewAutomation() {
  return (
    <UsesPageLayout
      badge="Automation"
      h1="Google Review Automation for Local Businesses"
      tagline="Automate the most time-consuming parts of Google review management — alerts, response drafts, and tracking — so you can focus on running your business."
      featureHeading="What Google Review Automation Includes"
      featureBody="Typani automates the full review response workflow: from knowing a review was posted to having a draft response ready, all without you having to check manually."
      featurePoints={[
        "Automated alerts the moment new reviews are posted",
        "AI drafts a response immediately for your review",
        "Handles any star rating — 1 through 5",
        "Multi-location support in one dashboard",
        "Review tracking and response history",
        "Free to start — no complex integration required",
      ]}
      examples={[
        {
          stars: 2,
          review: "Good food but every time I order delivery through Google, the order is always missing something. It's happened three times now. The in-person experience is great but delivery needs serious work.",
          response: "Three times is absolutely too many — we're sorry about the repeated delivery issues. This is something we need to fix at the process level, not just case by case. Please reach out to us at delivery@restaurant.com with your recent order details and we'll make it right. Thank you for sticking with us and giving us the feedback.",
        },
        {
          stars: 5,
          review: "I like that this business actually responds to reviews — you can tell they're using some kind of tool because responses come fast, but they're personalized enough that it doesn't feel automated.",
          response: "That's the exact balance we aim for — responsive and genuinely human. We do use tools to help us stay on top of reviews, but every response is reviewed and tailored before it goes out. Thank you for noticing, and for taking the time to leave such a thoughtful review!",
        },
      ]}
      whyHeading="Why Google Review Automation Is Worth It"
      whyBody={[
        "Manual Google review management doesn't scale. When you're busy, reviews pile up unanswered. When you finally check, you're responding to week-old complaints in a way that looks neglectful. Automation ensures you're always on top of your reputation — regardless of how busy your business gets.",
        "The goal of review automation isn't to remove the human element — it's to reduce the friction that stops businesses from engaging at all. Typani gives you a draft to work from so you're never staring at a blank box, and ensures nothing slips through the cracks.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review automation dashboard"
      featureImageAlt="Automated review management analytics"
      mobileImageAlt="Google review automation on mobile"
      related={[
        { href: "/uses/automated-review-management", label: "Automated Review Management" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/uses/google-review-alerts", label: "Google Review Alerts" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
      ]}
    />
  );
}
