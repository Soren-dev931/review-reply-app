import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "5-Star Review Response Examples | Reviewly",
    description: "See real examples of how to respond to 5-star Google reviews. Thank your best customers in a way that feels genuine and encourages more great reviews.",
  };
}

export default function FiveStarReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Star Ratings"
      h1="5-Star Review Response Examples"
      tagline="Your happiest customers deserve more than a copy-paste 'thank you.' Show them you read their review with a personal, specific response."
      featureHeading="What Makes a Great 5-Star Response"
      featureBody="Five-star reviews are gold — don't waste them with a generic reply. A personalized response reinforces their decision, deepens loyalty, and shows future readers that you actually care."
      featurePoints={[
        "Reference something specific from their review — it shows you read it",
        "Thank them by name if it's included in the review",
        "Avoid the robotic 'We're glad you had a great experience!' opener",
        "Mention a team member or specific detail they praised",
        "Keep it warm and human — match the energy of their review",
        "Invite them back without being pushy",
      ]}
      examples={[
        {
          stars: 5,
          review: "Best haircut I've had in years. Jessica really listened to what I wanted and didn't just do whatever she felt like. The whole vibe of the salon is super relaxing too. Already booked my next appointment.",
          response: "That makes our day — thank you! Jessica is going to love hearing this. We always want every client to leave feeling like themselves, just better. We're so glad the whole experience hit the mark, and we can't wait to see you at your next appointment!",
        },
        {
          stars: 5,
          review: "Took my dog in for the first time and I was nervous because he's a rescue and gets anxious. The staff was so patient with him and he actually seemed calm by the end. Highly recommend.",
          response: "This means so much to us — thank you for trusting us with your rescue pup. We know how nerve-wracking that first visit can be, and our team absolutely loves taking the time to help anxious dogs feel safe. Give him a treat from us and we'll see you both next time!",
        },
      ]}
      whyHeading="Why Responding to 5-Star Reviews Matters"
      whyBody={[
        "Many businesses only respond to negative reviews and ignore the positive ones. That's backwards. Your 5-star reviewers are your biggest fans — a warm, personal response deepens that relationship and often leads to them recommending you to friends.",
        "Responding to every review also sends a powerful signal to Google that you're an engaged business, which can help with local search rankings. And for potential customers reading reviews, seeing a business that actively engages with happy customers is reassuring.",
      ]}
      heroImage="/images/screenshots/dashboard-5star-response.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="AI-generated responses to 5-star reviews"
      featureImageAlt="Dashboard showing 5-star review responses"
      mobileImageAlt="Responding to 5-star reviews on mobile"
      related={[
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/4-star-review-response-examples", label: "4-Star Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/positive-review-response-template", label: "Positive Review Response Templates" },
      ]}
    />
  );
}
