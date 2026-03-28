import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Bad Review Response Examples | Typani",
    description: "See real examples of professional responses to bad Google reviews. Learn what to say (and what not to say) when a customer leaves a harsh review.",
  };
}

export default function BadReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Negative Reviews"
      h1="Bad Review Response Examples That Actually Work"
      tagline="A bad review doesn't have to damage your business — if you respond the right way. See real examples of responses that turn harsh feedback into trust-building moments."
      featureHeading="What to Include in a Bad Review Response"
      featureBody="The best responses to bad reviews follow a clear structure: acknowledge, apologize, explain what you're doing about it, and invite the customer to reconnect. Here's what that looks like in practice."
      featurePoints={[
        "Acknowledge the specific complaint — don't be vague",
        "Apologize genuinely, not defensively",
        "Avoid arguing with the customer in public",
        "Offer a clear path to resolution (call, email, return visit)",
        "Keep it short — long responses look like excuses",
        "Sign with a real name to humanize the reply",
      ]}
      examples={[
        {
          stars: 1,
          review: "The cleaner didn't show up for my scheduled appointment and nobody called to let me know. I took time off work for this. When I called to complain, the person on the phone was dismissive.",
          response: "We are so sorry — not showing up and then being dismissive when you called is a double failure, and you deserved far better. Please email us at help@cleaningservice.com and ask for the owner. We'll make this right with a full refund and a complimentary rescheduled appointment. Thank you for giving us the chance to fix this.",
        },
        {
          stars: 2,
          review: "Ordered a birthday cake and it came completely different from what I designed with the decorator. Wrong colors, different flowers, total disappointment on a special day.",
          response: "We are heartbroken to hear this — a birthday cake should be exactly right, and we clearly missed the mark. There's no excuse for a cake not matching what was agreed on, especially for a milestone occasion. Please call us at 555-0111 and ask for our head decorator. We want to make this right for you and your family.",
        },
      ]}
      whyHeading="Why Bad Review Responses Matter More Than the Review Itself"
      whyBody={[
        "When someone leaves a bad review, the real audience isn't the unhappy customer — it's the dozens or hundreds of potential customers who will read that review before deciding whether to visit you. Your response is what they're watching. A calm, professional, empathetic reply actually increases confidence in your business, even when the underlying review is harsh.",
        "Studies consistently show that consumers trust businesses more when they see thoughtful responses to negative reviews. A business with a few bad reviews and great responses often outperforms one with a higher average rating and no responses at all.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Dashboard for managing bad Google reviews"
      featureImageAlt="Typani overview for responding to bad reviews"
      mobileImageAlt="Respond to bad reviews from your phone"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/1-star-review-response-examples", label: "1-Star Review Response Examples" },
        { href: "/uses/customer-service-negative-review-response-examples", label: "Customer Service Negative Review Responses" },
        { href: "/uses/sample-responses-to-negative-reviews", label: "Sample Responses to Negative Reviews" },
      ]}
    />
  );
}
