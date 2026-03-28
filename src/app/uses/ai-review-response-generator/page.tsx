import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Response Generator | Typani",
    description: "The best AI review response generator for Google reviews. Generate unique, professional responses to any review — free to start, no card required.",
  };
}

export default function AiReviewResponseGenerator() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Review Response Generator"
      tagline="The fastest way to respond to every Google review. Paste the review, get a tailored response in seconds, and post it — done."
      featureHeading="Why Typani's AI Generator Is Different"
      featureBody="Most AI generators produce the same template with a few words swapped. Typani actually reads the review and writes a response that addresses what the customer said — so it doesn't read like a bot."
      featurePoints={[
        "Reads the full review for context before generating",
        "Unique responses — not recycled templates",
        "Handles 1-star to 5-star reviews equally well",
        "Adjusts formality and tone based on your business type",
        "Instant results — try it free without an account",
        "Edit and customize before you post",
      ]}
      examples={[
        {
          stars: 2,
          review: "The spa looked beautiful online but the actual experience was rushed. My massage was cut 15 minutes short because they 'had another client.' No apology, nothing.",
          response: "We're so sorry — cutting a service short without explanation or apology is not something we ever want a guest to experience. You came here to relax, and we let you down. Please reach out to our spa manager directly at manager@spa.com and we'll make this right with a complimentary rebook. Thank you for telling us.",
        },
        {
          stars: 5,
          review: "I've been coming here every month for two years and the quality has never dropped. That consistency is rare and it's why I keep coming back. Highly recommend.",
          response: "Two years of monthly visits — that means everything to us. Thank you for your loyalty and for this kind review. Consistency is something our whole team works hard at, and it's incredibly motivating to hear that it shows. We'll see you next month!",
        },
      ]}
      whyHeading="Why You Need an AI Review Response Generator"
      whyBody={[
        "Even businesses with great customer service struggle to keep up with reviews. Writing a thoughtful, individual response to every review — especially when you're getting dozens a month — isn't realistic without help. An AI generator closes that gap and makes it possible to respond to every single review, every time.",
        "But the generator is only as good as the responses it produces. Typani generates replies that are specific, human-sounding, and reflect your brand voice — so you can post them with confidence, not embarrassment.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI review response generator tool"
      featureImageAlt="Typani AI generator dashboard"
      mobileImageAlt="AI review response generator on mobile"
      related={[
        { href: "/uses/free-review-response-generator", label: "Free Review Response Generator" },
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
        { href: "/uses/ai-review-response", label: "AI Review Response" },
        { href: "/uses/review-reply-generator", label: "Review Reply Generator" },
      ]}
    />
  );
}
