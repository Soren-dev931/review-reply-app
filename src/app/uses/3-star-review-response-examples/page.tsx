import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "3-Star Review Response Examples | Typani",
    description: "Learn how to respond to 3-star reviews on Google. Mixed feedback is an opportunity — see real response examples that turn lukewarm ratings into loyal customers.",
  };
}

export default function ThreeStarReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Star Ratings"
      h1="3-Star Review Response Examples"
      tagline="Three stars means the customer had a mixed experience — they're not a lost cause. A smart response can tip them toward becoming a loyal fan."
      featureHeading="What to Address in a 3-Star Response"
      featureBody="Three-star reviewers are often on the fence. They found something they liked, but something let them down. Your response should acknowledge both — and show you're committed to being better."
      featurePoints={[
        "Thank them for the feedback — they took time to write it",
        "Acknowledge the specific issue that caused the deduction",
        "Highlight what went right to reinforce the positives",
        "Offer to make it right or invite them back",
        "Keep the tone warm — they're not angry, just disappointed",
        "Invite a follow-up conversation if the issue needs more detail",
      ]}
      examples={[
        {
          stars: 3,
          review: "Food was really good but the wait was way too long for a Tuesday afternoon. Staff was friendly though. Would come back if they sorted out the timing.",
          response: "Thank you for the honest feedback! We're glad the food and our team left a good impression — but you're right that Tuesday afternoon wait times have been longer than we'd like. We're actively working on it. We'd love to earn that 5th star on your next visit. Come back soon!",
        },
        {
          stars: 3,
          review: "The product itself is great but shipping took 10 days when it said 3-5. Customer service responded quickly when I reached out, so that helped.",
          response: "Thanks for taking the time to leave a review! We're sorry the shipping timeline didn't match what was shown — that's frustrating, especially when you're excited about an order. We're glad our team was responsive. If you ever have issues in the future, don't hesitate to reach out and we'll do everything we can to make it right.",
        },
      ]}
      whyHeading="Why 3-Star Reviews Deserve Your Attention"
      whyBody={[
        "Most businesses focus on 1-star reviews and ignore 3-star ones. That's a mistake. Three-star reviewers are your most reachable segment — they're not angry enough to leave and not delighted enough to come back on their own. A good response can change that.",
        "Responding thoughtfully to mixed reviews also signals to everyone reading that you listen to feedback and work to improve. That kind of transparency is more powerful than any marketing claim.",
      ]}
      heroImage="/images/screenshots/dashboard-5star-response.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Responding to 3-star reviews with AI"
      featureImageAlt="Review list showing mixed star ratings"
      mobileImageAlt="Managing 3-star reviews on mobile"
      related={[
        { href: "/uses/1-star-review-response-examples", label: "1-Star Review Response Examples" },
        { href: "/uses/4-star-review-response-examples", label: "4-Star Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
