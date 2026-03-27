import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Tool | Reviewly",
    description: "The simplest Google review response tool for local businesses. Generate, edit, and post professional replies to any Google review — in seconds.",
  };
}

export default function GoogleReviewResponseTool() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="Google Review Response Tool for Local Businesses"
      tagline="Reviewly is the simplest tool for responding to Google reviews. Paste a review, get a professional response in seconds — no complex setup, no learning curve."
      featureHeading="What Makes a Great Google Review Response Tool"
      featureBody="The best review response tools get out of your way. They should be fast, produce quality output, and make it easy to edit before posting. Here's how Reviewly delivers on all three."
      featurePoints={[
        "Paste-and-generate interface — no complex setup",
        "AI-generated responses specific to each review",
        "Edit before posting — you control the final output",
        "Works for every industry and business type",
        "Free to start — upgrade when you're ready",
        "Responses in seconds, not minutes",
      ]}
      examples={[
        {
          stars: 3,
          review: "The food is consistently good but the online ordering experience is frustrating. The app crashes frequently and I've lost my cart twice now.",
          response: "You're right and we hear you — losing your cart twice is genuinely frustrating and it's something we're actively working to fix. The online experience should be as good as the food itself. Thank you for sticking with us despite the tech issues. Please keep flagging these when they happen so we know what to prioritize.",
        },
        {
          stars: 5,
          review: "Fast, efficient, and the quality is consistently excellent. I've tried other tools and always come back to this one. Worth it.",
          response: "Thank you — 'come back to this one' is exactly what we aim to be. Consistency is hard to maintain and we're glad it shows in your experience. We appreciate your loyalty and we'll keep working to deserve it!",
        },
      ]}
      whyHeading="Why the Right Tool Makes You a Better Reviewer"
      whyBody={[
        "The difference between a business that responds to all its Google reviews and one that responds to some of them usually isn't effort — it's tooling. With the right tool in place, responding to a review takes less time than not responding, because everything is already staged and ready for you.",
        "A good Google review response tool also improves the quality of your responses over time. Instead of writing from scratch and defaulting to the same phrases, you're working from AI drafts that are already tuned to the review content — and your edits make them even better.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review response tool interface"
      featureImageAlt="Reviewly response tool dashboard"
      mobileImageAlt="Use the Google review response tool on mobile"
      related={[
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
        { href: "/uses/google-review-responder", label: "Google Review Responder" },
        { href: "/uses/ai-review-response", label: "AI Review Response" },
        { href: "/uses/review-reply-generator", label: "Review Reply Generator" },
      ]}
    />
  );
}
