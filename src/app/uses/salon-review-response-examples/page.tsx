import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Salon Review Response Examples | Reviewly",
    description: "See how hair salons and beauty salons should respond to Google reviews. Real examples for handling client complaints, color issues, and 5-star praise.",
  };
}

export default function SalonReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Salons & Beauty"
      h1="Salon Review Response Examples for Hair and Beauty"
      tagline="Salon clients are loyal when they find the right fit — and brutally honest when they don't. How you respond to their reviews shapes your reputation with every prospective client."
      featureHeading="What Clients Mention in Salon Reviews"
      featureBody="Salon reviews are deeply personal — they reflect how clients feel about their appearance and the relationship with their stylist. These are the themes that come up most often."
      featurePoints={[
        "Hair color result vs. what was shown or discussed",
        "Haircut accuracy and listening to client requests",
        "Wait time and appointment scheduling",
        "Stylist attentiveness and consultation quality",
        "Pricing vs. expectations for the service received",
        "Atmosphere, cleanliness, and overall experience",
      ]}
      examples={[
        {
          stars: 1,
          review: "Showed my stylist exactly what I wanted and she did the complete opposite. My hair is now three shades darker than requested and completely different from the reference photo. Completely devastated.",
          response: "We are so sorry — feeling devastated after a haircut that didn't match what you wanted is heartbreaking, and your frustration is completely valid. This shouldn't have happened, and we want to make it right. Please call us at 555-0120 and ask to speak with our salon manager. We'll schedule a correction appointment at no charge as soon as possible.",
        },
        {
          stars: 5,
          review: "Found Sofia through a friend recommendation and I will never go anywhere else. She listens carefully, remembers my preferences from last time, and the color always comes out exactly right. Book her now.",
          response: "Sofia is going to love seeing this — thank you! Remembering preferences and getting the color right every time is exactly what she works toward, and hearing it from a client means the world to her. We're so glad the recommendation brought you to us. See you at your next appointment!",
        },
      ]}
      whyHeading="Why Salon Review Responses Build a Clientele"
      whyBody={[
        "Salons live and die by their reputation and word of mouth. When someone is looking for a new salon, they read reviews like they're getting a recommendation from a friend. A salon that responds professionally to every review — including clients who were disappointed — signals that they take pride in their work and care about every client's experience.",
        "Responding to positive reviews is equally important in the salon industry. When you thank a client publicly for recommending a specific stylist, it reinforces that stylist's reputation and makes new clients specifically seek them out. It's free marketing for your best team members.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Salon review response dashboard"
      featureImageAlt="Managing salon client reviews in Reviewly"
      mobileImageAlt="Respond to salon reviews on your phone"
      related={[
        { href: "/uses/spa-review-response-examples", label: "Spa Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
