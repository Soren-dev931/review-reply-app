import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Review Response Templates | Typani",
    description: "Use these positive review response templates to thank your best customers with more than a generic reply. Customizable for any industry.",
  };
}

export default function PositiveReviewResponseTemplate() {
  return (
    <UsesPageLayout
      badge="Templates"
      h1="Positive Review Response Templates for Every Business"
      tagline="Your 5-star reviewers deserve more than copy-paste. Use these templates as a starting point — then personalize them in seconds with Typani's AI."
      featureHeading="How to Use Positive Review Response Templates"
      featureBody="Templates give you structure so you're not starting from zero. The best positive responses follow a predictable pattern — but the details that make them feel real are always specific to the review."
      featurePoints={[
        "Start with genuine gratitude — skip the corporate opener",
        "Reference one specific thing from the review",
        "Acknowledge a team member if they were named",
        "End with a warm invitation to return",
        "Keep it under 80 words for maximum impact",
        "Use AI to personalize any template instantly",
      ]}
      examples={[
        {
          stars: 5,
          review: "Been coming here for three years and the quality never drops. The staff treats every customer like they've known them forever. This place has become part of my routine.",
          response: "Three years — that means the world to us, truly. Being part of someone's regular routine is exactly what we hope to be. The team loves having regulars and we'll keep earning your loyalty one visit at a time. Thank you for sticking with us!",
        },
        {
          stars: 5,
          review: "Everything was exactly as described and arrived two days early. The packaging was beautiful and it made a perfect gift. Will definitely order again.",
          response: "Early and perfectly packaged — you made our day! We put a lot of care into the presentation because we know it's often going to someone special. So glad it worked out as a gift and we'd love to help again next time!",
        },
      ]}
      whyHeading="Why Good Templates Beat Bad Templates"
      whyBody={[
        "The problem with most review response templates isn't that they use templates — it's that they use bad ones. Responses that say 'Thank you for your kind words! We're thrilled you had a great experience!' feel hollow because they're completely interchangeable with any other business. A good template gives you the rhythm without the filler.",
        "Typani's AI takes templates to the next level: instead of inserting generic phrases, it generates a response built around what the reviewer actually said. You get the efficiency of a template with the specificity of a custom reply. Try it free and see the difference immediately.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/dashboard-5star-response.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Positive review response templates dashboard"
      featureImageAlt="Typani positive review template library"
      mobileImageAlt="Use positive review templates on mobile"
      related={[
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/5-star-review-response-examples", label: "5-Star Review Response Examples" },
        { href: "/uses/negative-review-response-template", label: "Negative Review Response Templates" },
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
      ]}
    />
  );
}
