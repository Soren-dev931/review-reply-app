import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Sample Responses to Negative Reviews | Reviewly",
    description: "Browse real sample responses to negative Google reviews. Copy, adapt, or generate your own tailored response with Reviewly's AI — free to start.",
  };
}

export default function SampleResponsesToNegativeReviews() {
  return (
    <UsesPageLayout
      badge="Negative Reviews"
      h1="Sample Responses to Negative Reviews"
      tagline="See real-world examples of professional responses to negative reviews — then generate your own tailored response in seconds with Reviewly's AI."
      featureHeading="What Makes a Negative Review Response Work"
      featureBody="The best negative review responses aren't magic — they follow a consistent pattern that anyone can learn. Here's what every effective response has in common."
      featurePoints={[
        "Opens with acknowledgment, not defense",
        "Apologizes without over-explaining",
        "Addresses the specific complaint, not a generic version",
        "Provides a clear next step for resolution",
        "Closes with an invitation to reconnect",
        "Stays under 100 words in most cases",
      ]}
      examples={[
        {
          stars: 1,
          review: "Paid for priority shipping and it arrived a week after the estimated delivery date. No email update, no tracking movement for five days. Terrible experience.",
          response: "We're so sorry — priority shipping that misses the delivery window and goes silent on tracking is a failure on our end, not yours. You deserved better communication and a faster resolution. Please email us at priority@shop.com with your order number and we'll issue a refund on the shipping cost and look into what happened.",
        },
        {
          stars: 2,
          review: "Had a reservation for 7pm. Didn't get seated until 7:45 with no explanation. By the time food came it was 9pm. The food itself was great but the experience was stressful.",
          response: "A 45-minute wait past your reservation time with no explanation is unacceptable — especially for an evening meant to be enjoyable. We're sorry we let the execution fall short of the food quality. Please reach out to us at reservations@restaurant.com and we'd love to invite you back for an evening that goes the way it should.",
        },
      ]}
      whyHeading="How Sample Responses Improve Your Own Writing"
      whyBody={[
        "Most business owners have never been trained in review response writing — they pick it up as they go, which usually means defaulting to defensive or generic replies. Reading strong sample responses recalibrates your approach quickly. You see what good looks like, and you start recognizing when your own responses fall short.",
        "For businesses that want to go further, Reviewly's AI generates responses tailored to each actual review — not sample-based templates. Instead of adapting a sample, you get a draft that already incorporates the specific complaint or praise from the review you're responding to. It's faster and the quality is consistently better.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Sample responses to negative reviews dashboard"
      featureImageAlt="Reviewly sample response library"
      mobileImageAlt="Browse sample negative review responses on mobile"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/bad-review-response-examples", label: "Bad Review Response Examples" },
        { href: "/uses/negative-review-response-template", label: "Negative Review Response Templates" },
        { href: "/uses/1-star-review-response-examples", label: "1-Star Review Response Examples" },
      ]}
    />
  );
}
