import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Google Review Reply Generator | Typani",
    description: "Generate AI-powered replies to Google reviews in seconds. Paste any review and get a professional, on-brand response ready to post.",
  };
}

export default function AiGoogleReviewReply() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Google Review Reply Generator"
      tagline="Paste any Google review and get a ready-to-post reply in seconds — professional, personalized, and nothing like a template."
      featureHeading="How AI Google Review Reply Works"
      featureBody="Typani reads the full content of each review — the stars, the specific complaints or praise — and generates a reply that sounds like a real business owner, not a chatbot."
      featurePoints={[
        "Handles any star rating: 1-star complaints to 5-star praise",
        "Picks up on specific details in the review for a personalized response",
        "Adjusts tone based on the sentiment of the review",
        "Works for any business type or industry",
        "Free to start — no credit card required",
        "Responses ready in seconds, not minutes",
      ]}
      examples={[
        {
          stars: 2,
          review: "Ordered online and my item arrived damaged. Filed a claim a week ago and still no response from the team. Very disappointing for a company that advertises fast service.",
          response: "We're so sorry about this — receiving a damaged item is frustrating enough, but not hearing back makes it so much worse. We want to fix this immediately. Please email us at support@shop.com with your order number and we'll prioritize your case today. Thank you for your patience.",
        },
        {
          stars: 5,
          review: "Hands down the best experience I've had at any auto shop. They explained everything clearly, didn't upsell me on stuff I didn't need, and finished early. Rare to find a shop you can actually trust.",
          response: "That's exactly the kind of shop we strive to be — thank you for saying so! We believe in being straight with every customer about what's actually needed. We're really glad the experience earned your trust, and we look forward to taking care of your car for years to come.",
        },
      ]}
      whyHeading="Why AI-Generated Google Review Replies Work"
      whyBody={[
        "Most businesses know they should respond to Google reviews — but writing a genuine, thoughtful reply for every review takes real time. AI changes that. With Typani, you get responses that are specific to each review, not recycled templates that customers can spot from a mile away.",
        "Google rewards businesses that actively engage with reviewers. Regular responses signal to the algorithm that you're an active, credible business — which can improve your local search visibility over time.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI Google review reply generator interface"
      featureImageAlt="Typani dashboard for managing Google replies"
      mobileImageAlt="Generate Google review replies on mobile"
      related={[
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
        { href: "/uses/ai-review-response", label: "AI Review Response" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/google-review-responder", label: "Google Review Responder" },
      ]}
    />
  );
}
