import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Examples | Reviewly",
    description: "See real examples of professional Google review responses for any star rating or industry. Copy, adapt, or generate your own with AI.",
  };
}

export default function GoogleReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Examples & Templates"
      h1="Google Review Response Examples for Any Business"
      tagline="See what a great Google review response actually looks like — for any star rating, any industry. Real examples you can learn from or generate instantly with AI."
      featureHeading="What Makes a Google Review Response Work"
      featureBody="The best Google review responses share a few qualities regardless of industry or star rating: they're specific, genuine, and move the conversation forward — not just acknowledge it."
      featurePoints={[
        "Reference something specific from the review — it shows you read it",
        "For negative reviews: acknowledge, apologize, and offer a path forward",
        "For positive reviews: match their energy with warmth and specificity",
        "Keep responses under 100 words when possible",
        "Never copy-paste the same response to multiple reviews",
        "Include your business name naturally for local SEO value",
      ]}
      examples={[
        {
          stars: 1,
          review: "Booked a table for a special anniversary dinner. They gave our table away and couldn't seat us for 45 minutes. Ruined the whole evening.",
          response: "We are devastated to hear this — losing a reservation on your anniversary is unforgivable and we are so sorry. This is not something that should ever happen, and we want to understand exactly what went wrong. Please reach out to us at reservations@restaurant.com and we'll make this right. We'd love the chance to give you the evening you deserved.",
        },
        {
          stars: 5,
          review: "Came in not knowing what I wanted and left with exactly the right product for my needs. The salesperson was knowledgeable but not pushy at all. Highly recommend.",
          response: "That's the kind of experience we aim for with every customer — helpful, not pushy. We're glad the right solution came together for you. Thank you for the recommendation and please come back any time you need advice or have questions. We're always happy to help!",
        },
      ]}
      whyHeading="Why Google Review Responses Are Part of Your Marketing"
      whyBody={[
        "Every response you write to a Google review is public content. It shows up in search results, in your Google Business Profile, and in the review history that potential customers scroll through before deciding whether to visit you. In that sense, your responses are marketing — and they're reaching an audience that's already close to a purchase decision.",
        "The businesses that understand this treat review responses as a content investment, not a customer service afterthought. Consistent, genuine responses across all your reviews build a profile that signals trustworthiness, attentiveness, and quality — three things every customer is looking for.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/dashboard-5star-response.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review response examples dashboard"
      featureImageAlt="Example Google review responses in Reviewly"
      mobileImageAlt="View Google review response examples on mobile"
      related={[
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
      ]}
    />
  );
}
