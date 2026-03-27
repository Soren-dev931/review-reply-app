import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Free Review Response Generator | Reviewly",
    description: "Generate professional Google review responses for free. Paste any review and get a ready-to-post reply in seconds — no account required to start.",
  };
}

export default function FreeReviewResponseGenerator() {
  return (
    <UsesPageLayout
      badge="Free Tools"
      h1="Free Review Response Generator for Google Reviews"
      tagline="Generate a professional response to any Google review — free, fast, and no credit card required. Try it in seconds."
      featureHeading="What You Get with the Free Generator"
      featureBody="Reviewly's free review response generator gives you everything you need to respond to any Google review — for any industry, any star rating — without paying a cent to get started."
      featurePoints={[
        "Paste any review — positive, negative, or mixed",
        "Get a tailored response in seconds",
        "Works for any industry or business type",
        "No account required to try it",
        "Edit the response before you copy and post",
        "Free to start — upgrade only when you're ready",
      ]}
      examples={[
        {
          stars: 1,
          review: "I placed an order a month ago and still haven't received it or heard anything back from support despite emailing twice.",
          response: "We're really sorry — a month without your order or a response is far too long, and you absolutely deserve answers. Please email us at urgent@orders.com with your order number and we'll prioritize this immediately. We sincerely apologize for the delay and the lack of communication.",
        },
        {
          stars: 5,
          review: "Found this gem randomly on Google Maps. Cozy atmosphere, amazing food, and the staff remembered my name by my second visit. This is my new regular spot.",
          response: "That's the best kind of review to wake up to — thank you! We love when regulars find us and we genuinely look forward to seeing you again. We'll make sure to keep earning that spot. See you soon!",
        },
      ]}
      whyHeading="Why Free Review Response Tools Are Worth Using"
      whyBody={[
        "Responding to every Google review is one of the most impactful things a small business can do — but it only works if you actually do it. A free tool removes every excuse: you don't need a subscription, you don't need to budget for it, and you don't need to be a copywriter. You just paste the review and get a response.",
        "The free generator is how most Reviewly users start. Once you see how much time it saves and how good the responses are, upgrading to manage all your reviews in one place becomes an easy decision. But there's no pressure — start free, stay free, upgrade when it makes sense for you.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Free review response generator tool"
      featureImageAlt="Reviewly free response generator dashboard"
      mobileImageAlt="Generate free review responses on your phone"
      related={[
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
        { href: "/uses/review-reply-generator", label: "Review Reply Generator" },
        { href: "/uses/ai-review-reply", label: "AI Review Reply" },
      ]}
    />
  );
}
