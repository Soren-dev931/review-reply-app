import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Reply Generator | Reviewly",
    description: "Generate AI replies to Google reviews instantly. Paste a review and get a professional, personalized response ready to post — free to start.",
  };
}

export default function AiReviewReply() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Review Reply Generator"
      tagline="Paste any Google review and get an AI-generated reply in seconds. Professional, specific, and nothing like a template."
      featureHeading="How AI Review Reply Works"
      featureBody="Reviewly reads the full text of each review and generates a reply that addresses the specific feedback — not a generic response that customers can tell was auto-generated."
      featurePoints={[
        "Paste any review — positive, negative, or mixed",
        "AI crafts a reply tailored to the review content",
        "Adjusts tone automatically based on star rating",
        "Edit before you post — you're always in control",
        "Works for restaurants, retail, services, and more",
        "Generate a response in seconds — free to start",
      ]}
      examples={[
        {
          stars: 3,
          review: "The food was pretty good but the portion sizes were smaller than expected for the price. Service was quick and friendly though. Might try again.",
          response: "Thanks for the honest feedback — we're glad the food and service landed well! Portion value is something we take seriously and we appreciate you mentioning it. We hope you do give us another try, and if portions are a concern, ask your server about our shareable options. Would love to win you over completely!",
        },
        {
          stars: 5,
          review: "My go-to for any legal question. The team is thorough, explains everything in plain English, and actually returns calls. That last part alone sets them apart.",
          response: "Thank you so much — returning calls and communicating clearly is something we genuinely care about, so hearing that it stands out makes us proud. We're grateful for your trust and look forward to being a resource for you whenever you need us.",
        },
      ]}
      whyHeading="Why AI Reply Tools Save More Than Time"
      whyBody={[
        "The biggest barrier to responding to reviews isn't motivation — it's friction. Sitting down to write a genuine, non-repetitive reply to every review is hard. AI review reply tools remove that friction so the barrier to responding drops to almost zero.",
        "And when you respond consistently, it compounds. Your overall rating can improve as more reviewers feel acknowledged. Your local search presence benefits from the engagement signals. And customers who see your responses trust you more before they even walk through the door.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI review reply generator interface"
      featureImageAlt="Reviewly dashboard showing AI reply generation"
      mobileImageAlt="Generate AI review replies on your phone"
      related={[
        { href: "/uses/ai-google-review-reply", label: "AI Google Review Reply" },
        { href: "/uses/review-reply-generator", label: "Review Reply Generator" },
        { href: "/uses/ai-review-response", label: "AI Review Response" },
        { href: "/uses/free-review-response-generator", label: "Free Review Response Generator" },
      ]}
    />
  );
}
