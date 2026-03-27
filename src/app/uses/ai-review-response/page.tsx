import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "AI Review Response Generator | Reviewly",
    description: "Generate professional AI review responses for Google reviews. Reviewly creates personalized, brand-appropriate replies for any review in seconds.",
  };
}

export default function AiReviewResponse() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="AI Review Response Generator"
      tagline="Generate a professional, personalized response to any Google review in seconds. Reviewly's AI reads the review and writes a reply that sounds like you — not a bot."
      featureHeading="What AI Review Response Gets Right"
      featureBody="The problem with most review response tools is they produce obvious templates. Reviewly generates responses that actually reflect what the reviewer said — specific, genuine, and ready to post."
      featurePoints={[
        "Context-aware: reads the full review before generating a response",
        "Tone-matched: empathetic for negatives, warm for positives",
        "Editable: tweak any response before you post",
        "Instant: responses generated in seconds, not minutes",
        "Versatile: works for any industry, any star rating",
        "Free to start — no commitment required",
      ]}
      examples={[
        {
          stars: 2,
          review: "The gym equipment is outdated and half of it is broken. I've been a member for two years and it's only gotten worse. Asked the front desk about it and got a shrug.",
          response: "We hear you and we appreciate you being with us for two years — your patience deserves better than a shrug. Equipment maintenance has been a priority we haven't been meeting, and that needs to change. Please stop by and ask for the general manager, or email us at memberservices@gym.com. We want to make this right for you and for every member.",
        },
        {
          stars: 5,
          review: "Brought my cat in for her annual and the vet spent a full 30 minutes with us without rushing. She asked great questions, explained everything clearly, and my cat was surprisingly calm. Best vet experience we've had.",
          response: "Thirty minutes well spent — thank you for this! We believe every pet deserves a thorough visit, not a rushed one, and we're so glad that came through. Hearing that your cat stayed calm means a lot too. We love having you both as patients and look forward to many more visits!",
        },
      ]}
      whyHeading="The Case for AI in Review Response"
      whyBody={[
        "Writing a unique, genuine response to every review takes time that most business owners simply don't have. AI review response tools solve the time problem without creating a new one — responses that feel robotic or dishonest. Reviewly strikes that balance by generating replies that are specific, personalized, and easy to publish.",
        "Consistent review responses also help your business rank better in local search. Google sees review engagement as a signal of business activity and credibility. By responding to every review — positive or negative — you're investing in your visibility as well as your reputation.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI review response generator dashboard"
      featureImageAlt="Reviewly overview for AI review responses"
      mobileImageAlt="Generate AI review responses on mobile"
      related={[
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/uses/ai-powered-review-response", label: "AI-Powered Review Response" },
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
        { href: "/uses/google-review-response-generator", label: "Google Review Response Generator" },
      ]}
    />
  );
}
