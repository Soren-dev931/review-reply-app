import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI-Powered Review Response | Typani",
    description: "Use AI to generate professional review responses for any Google review. Save time while maintaining a genuine, on-brand voice across all your replies.",
  };
}

export default function AiPoweredReviewResponse() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI-Powered Review Response for Google Reviews"
      tagline="Stop spending hours crafting individual replies. AI-powered review responses let you engage with every customer in seconds — without sounding robotic."
      featureHeading="What AI-Powered Review Response Does"
      featureBody="Typani uses AI to analyze the tone, content, and star rating of each review, then generates a tailored response that fits your business — not a one-size-fits-all template."
      featurePoints={[
        "Reads each review individually for context-aware responses",
        "Handles negative reviews with empathy and professionalism",
        "Celebrates positive reviews without over-the-top language",
        "Customizable tone to match your brand voice",
        "Works across all industries and business types",
        "Generate a response in seconds — free to start",
      ]}
      examples={[
        {
          stars: 1,
          review: "Rude staff, long wait, and my order was wrong. I've given this place three chances and they keep letting me down. Won't be coming back.",
          response: "We're really sorry to hear this, especially knowing you've given us multiple chances. That makes your frustration completely understandable and your feedback important. We'd like to hear more about what happened — please reach out to us at feedback@place.com so we can address this directly. We're sorry we let you down.",
        },
        {
          stars: 5,
          review: "Everything was perfect from start to finish. The booking was easy, the staff was warm and professional, and the results exceeded my expectations. I'll be a regular.",
          response: "Thank you so much — this genuinely made our week! We put a lot of care into every step of the experience, so knowing it came through means everything. We're so excited to have you as a regular. See you soon!",
        },
      ]}
      whyHeading="Why AI Review Response Is Worth It"
      whyBody={[
        "Responding to reviews consistently is one of the highest-leverage things a local business can do — but it's time-consuming if done manually. AI-powered response tools like Typani give you the speed of automation with the quality of a handwritten reply.",
        "Every review response is also public marketing. When a potential customer reads your reviews, they're also reading your replies. A professional, empathetic response — even to a harsh review — tells them everything they need to know about how you treat people.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI-powered review response generator"
      featureImageAlt="Typani AI review response dashboard"
      mobileImageAlt="AI review response on mobile"
      related={[
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/uses/ai-review-reply", label: "AI Review Reply" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/uses/google-review-response-tool", label: "Google Review Response Tool" },
      ]}
    />
  );
}
