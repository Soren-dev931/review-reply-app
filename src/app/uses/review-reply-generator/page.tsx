import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Reply Generator | Reviewly",
    description: "Generate professional replies to Google reviews in seconds. Paste any review and get a personalized, ready-to-post response — free to start.",
  };
}

export default function ReviewReplyGenerator() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="Review Reply Generator — Respond to Any Review in Seconds"
      tagline="Paste any Google review and get a professional, personalized reply in seconds. No templates, no copy-paste — just a response that sounds like you."
      featureHeading="How the Review Reply Generator Works"
      featureBody="Reviewly reads the content of each review — the rating, the specific feedback, the tone — and generates a reply that's tailored to what was actually said. Not a fill-in-the-blank template."
      featurePoints={[
        "Paste any review and generate a response instantly",
        "Context-aware: reads the full review before generating",
        "Handles every star rating from 1 to 5",
        "Edit before posting — you control the final output",
        "Works for any business type or industry",
        "Free to start — no account required",
      ]}
      examples={[
        {
          stars: 3,
          review: "The service was good and staff was helpful. My only issue is the parking situation — it's really hard to find a spot nearby and it deters me from visiting more often.",
          response: "Thanks for the kind words about our team! You're right about parking — it's been one of the most consistent pieces of feedback we receive. We've partnered with the garage on Oak Street for validated parking and would be happy to share the details next time you visit. We'd love to make it easier for you to come back more often.",
        },
        {
          stars: 5,
          review: "Every single time I've ordered from this bakery, the product has been exactly right. The attention to detail on custom orders is impressive and the taste is even better.",
          response: "Consistency on custom orders is something we really care about — it's hard to get right every time and we're genuinely proud of our team for maintaining it. Thank you for trusting us with your custom orders and for taking the time to say so. We'd love to make your next one even better!",
        },
      ]}
      whyHeading="Why a Review Reply Generator Saves More Than Time"
      whyBody={[
        "Consistency is the hardest part of review management. Writing unique, thoughtful responses to every review — especially when you're getting multiple per week — is genuinely hard to sustain. A reply generator doesn't just save time; it saves the consistency you'd otherwise lose when you're tired, busy, or out of ideas.",
        "The best generators also improve your average response quality. Instead of defaulting to the same phrases when you're in a hurry, you're working from AI drafts that are already personalized to each review. Your edits make them better — and over time, your entire review response history looks more thoughtful and engaged.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review reply generator interface"
      featureImageAlt="Reviewly reply generator dashboard"
      mobileImageAlt="Generate review replies on mobile"
      related={[
        { href: "/uses/ai-review-reply", label: "AI Review Reply" },
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
        { href: "/uses/free-review-response-generator", label: "Free Review Response Generator" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      ]}
    />
  );
}
