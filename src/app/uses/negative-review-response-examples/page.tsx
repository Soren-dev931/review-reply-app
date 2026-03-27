import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Review Response Examples | Reviewly",
    description: "See real examples of professional responses to negative Google reviews. Learn the exact approach that turns critics into advocates.",
  };
}

export default function NegativeReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Negative Reviews"
      h1="Negative Review Response Examples That Turn Critics Around"
      tagline="The way you respond to negative reviews says more about your business than the review itself. See real examples of responses that de-escalate, build trust, and sometimes win back the customer."
      featureHeading="The Anatomy of a Strong Negative Review Response"
      featureBody="The best responses to negative reviews share a clear structure: they acknowledge the experience, take responsibility, explain what's being done, and invite resolution — all without becoming defensive."
      featurePoints={[
        "Start by acknowledging the customer's specific experience",
        "Apologize sincerely — even if the complaint seems unfair",
        "Avoid lengthy explanations that read as excuses",
        "Offer a concrete path to resolution",
        "Invite them to connect offline for follow-up",
        "Keep your tone calm and professional throughout",
      ]}
      examples={[
        {
          stars: 1,
          review: "Ordered food delivery and it showed up an hour late and completely cold. The driver had no explanation. This is the third time this has happened. Done.",
          response: "Three bad delivery experiences is three too many — we're truly sorry. This isn't the standard we hold ourselves to, and your frustration is completely justified. Please email us at delivery@restaurant.com with your order details and we'll issue a full refund and review what's been going wrong. Thank you for the patience you've shown up to this point.",
        },
        {
          stars: 2,
          review: "The salon double-booked my appointment, asked me to wait 30 minutes, and then gave me a rushed service. For what I paid, I expected much better.",
          response: "We are genuinely sorry — being double-booked and then rushed is exactly the opposite of the experience we want to provide. Please reach out to us at hello@salon.com and we'll rebook you at a time that's entirely yours, at no charge. You deserved better and we want to make it right.",
        },
      ]}
      whyHeading="The Real Impact of Negative Review Responses"
      whyBody={[
        "Research consistently shows that potential customers trust a business more when they see thoughtful responses to negative reviews. Not because they discount the complaint — but because they see evidence that the business is accountable. A well-handled negative review can actually make your business more attractive to new customers than a perfect 5-star record with no engagement.",
        "There's also a practical benefit: occasionally, a reviewer who feels heard will update their original review. It doesn't happen every time, but when it does, it's a direct rating improvement. More often, future customers simply feel better about choosing you because they saw how you handled difficulty.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Negative review response examples dashboard"
      featureImageAlt="Reviewly dashboard for managing negative reviews"
      mobileImageAlt="Respond to negative reviews from your phone"
      related={[
        { href: "/uses/bad-review-response-examples", label: "Bad Review Response Examples" },
        { href: "/uses/1-star-review-response-examples", label: "1-Star Review Response Examples" },
        { href: "/uses/negative-review-response-template", label: "Negative Review Response Templates" },
        { href: "/uses/sample-responses-to-negative-reviews", label: "Sample Responses to Negative Reviews" },
      ]}
    />
  );
}
