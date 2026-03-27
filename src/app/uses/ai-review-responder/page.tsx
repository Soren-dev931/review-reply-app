import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Responder | Reviewly",
    description: "Let AI handle your Google review responses. Reviewly generates professional, personalized replies to every review — so you never have to stare at a blank reply box again.",
  };
}

export default function AiReviewResponder() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Review Responder for Google Reviews"
      tagline="Never stare at a blank reply box again. Reviewly's AI review responder generates professional, on-brand responses to every Google review in seconds."
      featureHeading="What the AI Review Responder Does"
      featureBody="Reviewly's AI doesn't just fill in templates — it reads each review and crafts a response that matches the sentiment, addresses the specific feedback, and sounds like a real person wrote it."
      featurePoints={[
        "Handles all star ratings: 1-star to 5-star",
        "Addresses specific complaints or praise from the review",
        "Generates responses in your brand's tone",
        "Review before posting — always one click away from done",
        "Works for any industry or business type",
        "Free to start with no credit card required",
      ]}
      examples={[
        {
          stars: 1,
          review: "The apartment I was shown was not the one I rented. Completely different layout, smaller, and on a lower floor. Management shrugged it off and said 'that's just how it is.'",
          response: "We are truly sorry to hear this happened — what you're describing is not acceptable and not how we operate. We want to look into this immediately. Please contact our resident services team at residents@apartments.com and ask for the property manager. We take this seriously and want to make it right.",
        },
        {
          stars: 5,
          review: "The leasing team made the whole move-in process so smooth. They answered every question, had everything ready on move-in day, and followed up a week later to make sure we were settled. Rare level of service.",
          response: "This is exactly the experience we aim for with every new resident — thank you for sharing it! Moving can be stressful and we want that process to be the easiest part. We're so glad you're settling in well, and we're here any time you need us. Welcome home!",
        },
      ]}
      whyHeading="Why an AI Review Responder Is a Business Asset"
      whyBody={[
        "Review response rates matter — both to Google's algorithm and to potential customers. Businesses that respond to reviews are seen as more trustworthy and engaged. But doing it manually at scale is unsustainable. An AI review responder solves that without sacrificing quality.",
        "The best AI responders don't just automate replies — they improve them. Instead of firing off generic 'Thank you for your feedback!' messages, Reviewly generates responses that actually acknowledge what the reviewer said, which feels more human and builds more trust.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI review responder generating a reply"
      featureImageAlt="Reviewly AI responder dashboard overview"
      mobileImageAlt="AI review responder on mobile"
      related={[
        { href: "/uses/ai-review-reply", label: "AI Review Reply" },
        { href: "/uses/google-review-responder", label: "Google Review Responder" },
        { href: "/uses/ai-powered-review-response", label: "AI-Powered Review Response" },
        { href: "/uses/review-response-service", label: "Review Response Service" },
      ]}
    />
  );
}
