import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Responder | Reviewly",
    description: "Respond to all your Google reviews faster with AI. Reviewly generates professional, personalized responses for every review — ready to post in seconds.",
  };
}

export default function GoogleReviewResponder() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="Google Review Responder — Reply to Every Review Faster"
      tagline="Reviewly's AI-powered Google review responder generates professional replies for every review — so you can stay on top of your reputation without the time drain."
      featureHeading="How the Google Review Responder Works"
      featureBody="Paste any Google review — or connect your Google Business Profile — and Reviewly generates a response that's personalized, professional, and ready to post in seconds."
      featurePoints={[
        "AI reads the full review before generating a response",
        "Tailored to the star rating and review content",
        "Handles complaints with empathy, praise with warmth",
        "Edit any response before posting",
        "Works for any business category",
        "Free to start — no card needed",
      ]}
      examples={[
        {
          stars: 2,
          review: "The instructor canceled class 20 minutes before it started and I had already driven 40 minutes. No email, no text. Just a sign on the door.",
          response: "We are so sorry — driving 40 minutes to find a cancellation notice on the door is inexcusable, and there's no good explanation for not contacting you ahead of time. Please reach out to us at studio@fitnesscenter.com and we'll comp your next class and cover what we can. Thank you for letting us know.",
        },
        {
          stars: 5,
          review: "My go-to gym for two years. The trainers know my goals, the equipment is always maintained, and it doesn't feel like a factory. Worth every dollar.",
          response: "Two years — thank you! Knowing the trainers understand your goals and that it feels personal rather than like a factory is exactly what we work toward every day. We're grateful to have you as a member and we'll keep earning your trust.",
        },
      ]}
      whyHeading="Why a Dedicated Google Review Responder Matters"
      whyBody={[
        "Google specifically rewards businesses that respond to reviews. An active response history improves your visibility in local search and signals to the algorithm that you're an engaged, credible business. A dedicated review responder tool makes that activity consistent — not something you get to when you have time.",
        "More importantly, every response you post is read by prospective customers. When they see a business that engages thoughtfully with both happy and unhappy customers, they feel more confident choosing you over a competitor with no responses at all.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review responder interface"
      featureImageAlt="Reviewly Google review responder dashboard"
      mobileImageAlt="Google review responder on mobile"
      related={[
        { href: "/uses/ai-review-responder", label: "AI Review Responder" },
        { href: "/uses/google-review-response-tool", label: "Google Review Response Tool" },
        { href: "/uses/ai-google-review-reply", label: "AI Google Review Reply" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
