import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "4-Star Review Response Examples | Typani",
    description: "See how to respond to 4-star Google reviews. These near-perfect ratings deserve thoughtful replies that encourage return visits and 5-star upgrades.",
  };
}

export default function FourStarReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Star Ratings"
      h1="4-Star Review Response Examples"
      tagline="Four stars is almost perfect — but that one missing star is a clue. Respond well, fix the gap, and you've got a customer for life."
      featureHeading="Making the Most of 4-Star Feedback"
      featureBody="Four-star reviewers are happy customers who noticed something small that held them back from a perfect rating. These are your best opportunities — they're already fans. A great response nudges them to 5 stars next time."
      featurePoints={[
        "Express genuine gratitude — 4 stars is still a strong endorsement",
        "Acknowledge the specific thing they mentioned as a drawback",
        "Invite them back to experience the improvement",
        "Keep it brief and warm — this isn't damage control",
        "Personalize with the reviewer's name if available",
        "Mention any changes or improvements you've made since their visit",
      ]}
      examples={[
        {
          stars: 4,
          review: "Really enjoyed the atmosphere and the food was excellent. Only giving 4 stars because parking was a nightmare and we had to walk quite a distance. Will definitely be back though!",
          response: "Thank you so much — we're really glad the food and atmosphere hit the mark! The parking situation is something we hear about and we're actively looking at solutions, including a validated parking option nearby. We'll make sure your next visit is even smoother. Can't wait to see you again!",
        },
        {
          stars: 4,
          review: "Great service and the staff was super helpful. Room was clean and comfortable. Lost a star because the Wi-Fi was painfully slow the whole stay.",
          response: "Thanks for the kind words about our team and room comfort — that really means a lot! You're right about the Wi-Fi and we've already been in touch with our provider to get it upgraded. We hope you'll give us another shot on your next trip through the area — we'd love to earn that 5th star!",
        },
      ]}
      whyHeading="Why You Shouldn't Ignore 4-Star Reviews"
      whyBody={[
        "It's easy to focus on your worst reviews and forget about the ones that are almost great. But 4-star reviewers are your most valuable segment — they already like you and just need one more positive experience to become loyal advocates.",
        "A thoughtful response to a 4-star review also signals to prospective customers that you're listening and continuously improving. That kind of attentiveness is a competitive advantage in any industry.",
      ]}
      heroImage="/images/screenshots/dashboard-5star-response.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Responding to 4-star reviews with AI"
      featureImageAlt="Review list showing 4-star ratings"
      mobileImageAlt="Managing 4-star reviews from your phone"
      related={[
        { href: "/uses/5-star-review-response-examples", label: "5-Star Review Response Examples" },
        { href: "/uses/3-star-review-response-examples", label: "3-Star Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
