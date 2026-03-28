import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Funny Responses to Negative Reviews | Typani",
    description: "See examples of clever, witty responses to negative reviews that work — without crossing the line. Learn when humor helps and when it hurts.",
  };
}

export default function FunnyResponsesToNegativeReviews() {
  return (
    <UsesPageLayout
      badge="Review Strategy"
      h1="Funny Responses to Negative Reviews — When It Works and When It Doesn't"
      tagline="A well-timed witty response can go viral and win you more fans than the review lost you. But get it wrong and it backfires badly. Here's how to thread the needle."
      featureHeading="When Humor Actually Works in Review Responses"
      featureBody="Humor in review responses is high-risk, high-reward. It works best when the review is over-the-top, the business has a casual brand voice, and the response is clever without being mean."
      featurePoints={[
        "Use humor only when the review is clearly unreasonable or absurd",
        "Never punch down — don't mock the customer's intelligence or experience",
        "Keep it warm and self-aware rather than defensive",
        "Match your brand voice — humor works for a taco truck, not a law firm",
        "Still acknowledge any valid points in the review",
        "When in doubt, default to a professional response",
      ]}
      examples={[
        {
          stars: 1,
          review: "One star because they didn't have my usual drink when I came in at 9pm. How are you out of cold brew at night? Ridiculous.",
          response: "We hear you — running low on cold brew this late in the day is a tragedy we take very seriously. We're officially adding 'emergency cold brew reserves' to our closing checklist. In all seriousness, we're sorry we didn't have it on hand. We'd love to make it up to you next time you stop by.",
        },
        {
          stars: 2,
          review: "I asked for extra guac and got exactly the amount of guac I usually get. Not extra. Just the regular amount. I was deeply misled.",
          response: "The Great Guac Incident of 2024 has been logged and reviewed at the highest levels. Our team has been alerted. In all seriousness, we're sorry we missed the mark on your extra guac — that's on us, and we'll always make sure you get exactly what you ordered. Come back and we'll personally oversee the guac portion.",
        },
      ]}
      whyHeading="Why Some Businesses Use Humor Strategically"
      whyBody={[
        "A genuinely funny response to a trivial complaint can spread on social media and generate enormous positive attention. Several restaurants and retailers have gone viral this way — getting thousands of new customers from a single clever reply. But it requires good judgment, a brand voice that supports humor, and the confidence to know the difference between a legitimate complaint and an absurd one.",
        "The key rule: never be funny at the expense of the customer's actual grievance. If someone had a real problem — cold food, a billing error, a safety issue — humor is entirely inappropriate. Reserve witty responses for the reviews that are clearly not serious, and always leave room for the person to feel acknowledged even in a light reply.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Managing review responses with the right tone"
      featureImageAlt="Typani dashboard showing response strategy"
      mobileImageAlt="Review response strategy on mobile"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/bad-review-response-examples", label: "Bad Review Response Examples" },
        { href: "/uses/1-star-review-response-examples", label: "1-Star Review Response Examples" },
        { href: "/uses/sample-responses-to-negative-reviews", label: "Sample Responses to Negative Reviews" },
      ]}
    />
  );
}
