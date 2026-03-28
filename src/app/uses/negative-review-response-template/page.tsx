import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Review Response Templates | Typani",
    description: "Use these proven negative review response templates to handle Google complaints professionally. Customizable for any industry or situation.",
  };
}

export default function NegativeReviewResponseTemplate() {
  return (
    <UsesPageLayout
      badge="Templates"
      h1="Negative Review Response Templates for Any Business"
      tagline="Stop writing negative review responses from scratch. Use these proven templates as a starting point — then customize with Typani's AI to fit the specific review."
      featureHeading="How to Use Negative Review Response Templates"
      featureBody="Templates are most useful as a structural guide. The best negative review responses follow a predictable format — it's the specific details that make them feel genuine rather than canned."
      featurePoints={[
        "Use templates as a structure, not a verbatim script",
        "Always insert the specific complaint from the review",
        "Include a named point of contact or department for follow-up",
        "Adjust the tone to match the severity of the complaint",
        "Never copy the same template word-for-word across reviews",
        "Use AI to customize the template instantly for each review",
      ]}
      examples={[
        {
          stars: 1,
          review: "I requested a full refund weeks ago and have heard nothing. Every time I call I'm put on hold for 30 minutes and then disconnected. This is unacceptable.",
          response: "We're so sorry about this — weeks without a refund resolution and disconnected calls is a serious failure on our part. You should not have to fight this hard for something you're owed. Please email us directly at refunds@company.com with your order number marked 'URGENT' and we will handle this within 24 hours. Thank you for your patience.",
        },
        {
          stars: 2,
          review: "The product was fine but the packaging was completely destroyed on arrival. Looked like the box had been dropped multiple times. The contents survived but it wasn't a good first impression.",
          response: "We're sorry the packaging arrived in that condition — even when the product is intact, receiving a damaged box is frustrating and we understand why. We're always looking to improve our shipping process, and your feedback helps. If you'd like a replacement box or a discount on your next order, please reach out at support@shop.com. Thank you.",
        },
      ]}
      whyHeading="Why Templates Help and When to Go Beyond Them"
      whyBody={[
        "Templates solve the blank-page problem — they give you a starting structure so you're not writing from scratch every time. But templates have a ceiling. A response that's obviously templated can feel dismissive, which defeats the purpose. The best approach is to use a template as a skeleton and personalize it with the specific details from the review.",
        "Typani's AI takes this one step further: paste the review, and the AI generates a response that incorporates the specifics automatically. You get the speed of a template with the quality of a custom response — ready to edit and post in seconds.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/dashboard-5star-response.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Negative review response template examples"
      featureImageAlt="Typani template library for negative reviews"
      mobileImageAlt="Use review response templates on mobile"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/bad-review-response-examples", label: "Bad Review Response Examples" },
        { href: "/uses/positive-review-response-template", label: "Positive Review Response Templates" },
        { href: "/uses/sample-responses-to-negative-reviews", label: "Sample Responses to Negative Reviews" },
      ]}
    />
  );
}
