import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Service | Reviewly",
    description: "Let Reviewly handle your Google review responses. Our AI-powered review response service generates professional replies for every review — fast, consistent, and always on-brand.",
  };
}

export default function ReviewResponseService() {
  return (
    <UsesPageLayout
      badge="Review Management"
      h1="Review Response Service for Google Reviews"
      tagline="Reviewly acts as your review response service — generating professional, on-brand replies for every Google review so your reputation stays protected without the manual effort."
      featureHeading="What a Review Response Service Does for You"
      featureBody="A good review response service removes the work from your plate while keeping the quality high. Reviewly combines AI-powered response generation with full editorial control, so you can respond faster without sacrificing authenticity."
      featurePoints={[
        "AI generates a draft response for every new review",
        "Responses are specific to the content of each review",
        "You review and approve before anything is posted",
        "Consistent tone and brand voice across all responses",
        "Multi-location support for businesses with multiple addresses",
        "Free to start — try it on your next review",
      ]}
      examples={[
        {
          stars: 2,
          review: "Hired an agency to manage my reviews and got $500/month for clearly templated responses that didn't address what people actually wrote. Switched to Reviewly and the difference is night and day.",
          response: "We hear this a lot and it's why we built Reviewly the way we did — AI that reads each review before generating a response, so it actually addresses what was said. We're glad you made the switch and we'll keep raising the bar on response quality. Thank you for trusting us.",
        },
        {
          stars: 5,
          review: "Having Reviewly as my review service means I spend about 5 minutes a week on review management instead of an hour. And the responses are better than what I was writing myself.",
          response: "Five minutes versus an hour — that's the kind of efficiency we work toward! And hearing that the quality holds up or improves on what you were writing yourself is the highest compliment we can receive. Thank you for trusting Reviewly with such an important part of your business.",
        },
      ]}
      whyHeading="Why Businesses Use a Review Response Service"
      whyBody={[
        "Responding to Google reviews is high-value work — but it's also time-consuming, easy to deprioritize, and hard to do well consistently. A review response service solves all three problems at once. With Reviewly, every review gets a thoughtful response, nothing gets missed during busy weeks, and the quality doesn't depend on how much time you have that day.",
        "The important difference between Reviewly and traditional managed services is control. You see every response before it's posted and can edit or override anything. You get the efficiency of a service without giving up the voice of your business.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review response service dashboard"
      featureImageAlt="Review response service analytics and tracking"
      mobileImageAlt="Manage your review response service on mobile"
      related={[
        { href: "/uses/ai-review-responder", label: "AI Review Responder" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
      ]}
    />
  );
}
