import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Review Response Examples | Typani",
    description: "See real examples of how to respond to positive Google reviews. Thoughtful, specific replies that build loyalty and encourage more 5-star feedback.",
  };
}

export default function PositiveReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Positive Reviews"
      h1="Positive Review Response Examples for Any Business"
      tagline="Happy customers who leave reviews deserve more than a copy-paste thank you. See real examples of responses that feel personal, build loyalty, and keep them coming back."
      featureHeading="What Makes a Great Positive Review Response"
      featureBody="The best responses to positive reviews do more than say thank you — they acknowledge what the reviewer said specifically, reinforce their decision, and invite them back in a genuine way."
      featurePoints={[
        "Reference something specific from the review — not just 'great experience'",
        "Avoid the generic opener: 'We're so glad you enjoyed your visit'",
        "Match the reviewer's energy — warm if they're warm, enthusiastic if they're excited",
        "Mention a team member by name if they were called out",
        "Keep it under 80 words — short and genuine beats long and formal",
        "End with an invitation to return or share, without being pushy",
      ]}
      examples={[
        {
          stars: 5,
          review: "The chef came out to our table personally to ask how everything was. That kind of attention is rare at any price point. The food was also exceptional. We'll be back.",
          response: "We love hearing this — and the chef is going to be so happy to know that moment landed. He genuinely loves connecting with guests, and it sounds like it made your evening special. We can't wait to have you back and hopefully surprise you again!",
        },
        {
          stars: 5,
          review: "Booked a last-minute appointment and they squeezed me in the same day. The work was perfect and I was in and out in under an hour. Exactly what I needed.",
          response: "Same-day, done right, done fast — that's what we aim for when someone's in a pinch! We're really glad we could come through for you. You're always welcome to call and we'll do our best to make it work. See you next time!",
        },
      ]}
      whyHeading="Why Responding to Positive Reviews Is Good Business"
      whyBody={[
        "It's easy to think of review responses as only necessary for damage control. But the most strategically valuable responses you'll write are often to your happiest customers. They've taken their time to advocate for your business — responding personally deepens that relationship and makes it far more likely they'll return, refer others, and update their review if anything ever changes.",
        "From a search perspective, responding to positive reviews also contributes to your engagement signals on Google. Businesses with active response histories — across both positive and negative reviews — tend to rank better in local search results, which drives more organic discovery.",
      ]}
      heroImage="/images/screenshots/dashboard-5star-response.webp"
      featureImage="/images/screenshots/dashboard-recent-responses.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Positive review response examples dashboard"
      featureImageAlt="Responding to positive reviews in Typani"
      mobileImageAlt="Respond to positive reviews on mobile"
      related={[
        { href: "/uses/5-star-review-response-examples", label: "5-Star Review Response Examples" },
        { href: "/uses/positive-review-response-template", label: "Positive Review Response Templates" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
      ]}
    />
  );
}
