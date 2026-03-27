import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Management Software | Reviewly",
    description: "The best Google review management software for local businesses. Monitor, respond, and analyze all your Google reviews from one simple dashboard.",
  };
}

export default function GoogleReviewManagementSoftware() {
  return (
    <UsesPageLayout
      badge="Review Management"
      h1="Google Review Management Software"
      tagline="Reviewly is the simplest way to manage all your Google reviews — monitor new reviews, generate AI responses, and track your reputation over time."
      featureHeading="Everything in One Google Review Management Tool"
      featureBody="From the moment a review is posted to the second you hit publish on a response, Reviewly handles the entire Google review management workflow — without the complexity of enterprise software."
      featurePoints={[
        "Real-time monitoring across all your Google Business locations",
        "AI-generated responses for every review, any star rating",
        "Response tracking so nothing gets missed",
        "Rating and trend analytics over time",
        "Multi-location support for franchises and chains",
        "Free to start — no commitment required",
      ]}
      examples={[
        {
          stars: 2,
          review: "Used a competitor's tool for two years. It was expensive and the responses it generated were obviously templated. Switched to Reviewly and the difference in response quality is immediately obvious.",
          response: "We're really glad you made the switch and that the quality difference is coming through. We obsess over making responses feel specific and human — not like they came from a template. If there's ever anything we can improve, we want to hear it directly.",
        },
        {
          stars: 5,
          review: "Managing 8 locations used to mean 8 logins and an hour of my morning. Now it's one screen and 10 minutes. Reviewly is genuinely one of the best tools in our stack.",
          response: "Eight locations and one screen — that's exactly the efficiency we aim for. Thank you for trusting Reviewly with such an important part of your reputation. We'll keep building to make those 10 minutes even more productive.",
        },
      ]}
      whyHeading="Why Google Review Management Software Pays for Itself"
      whyBody={[
        "Your Google reviews directly affect whether new customers choose you or a competitor. Businesses with more reviews, higher ratings, and active response histories consistently outperform those that neglect their profiles. Google review management software makes the consistent work of building that profile possible without hours of manual effort each week.",
        "For multi-location businesses, the ROI is even clearer. Without a centralized tool, managing reviews across locations means inconsistent coverage — some locations get responses, others don't. Reviewly standardizes the experience across your entire portfolio.",
      ]}
      heroImage="/images/screenshots/dashboard-recent-responses.webp"
      featureImage="/images/screenshots/analytics-page.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review management software dashboard"
      featureImageAlt="Review management analytics and multi-location tracking"
      mobileImageAlt="Google review management on mobile"
      related={[
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
        { href: "/uses/google-review-dashboard", label: "Google Review Dashboard" },
        { href: "/uses/ai-review-management", label: "AI Review Management" },
        { href: "/uses/review-automation-software", label: "Review Automation Software" },
      ]}
    />
  );
}
