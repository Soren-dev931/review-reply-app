import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Customer Service Negative Review Response Examples | Typani",
    description: "Learn how to respond when customers complain about customer service in Google reviews. Real examples that de-escalate tension and rebuild trust.",
  };
}

export default function CustomerServiceNegativeReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Customer Service"
      h1="Customer Service Negative Review Response Examples"
      tagline="Customer service complaints are the most personal reviews you'll receive. Responding well means acknowledging the person — not just the problem."
      featureHeading="What Drives Customer Service Complaints in Reviews"
      featureBody="Customer service reviews almost always center on how the customer was made to feel. Understanding the root of those feelings helps you craft a response that genuinely addresses what went wrong."
      featurePoints={[
        "Being made to feel dismissed or unheard by staff",
        "Long hold times or difficulty reaching a real person",
        "Conflicting information from different team members",
        "Promises made but not kept during a service call",
        "Attitude or tone of frontline staff",
        "Feeling like their complaint wasn't taken seriously",
      ]}
      examples={[
        {
          stars: 1,
          review: "Called customer service four times about the same issue. Each time I was given a different answer and told someone would call me back. Nobody ever did. This is absolutely unacceptable.",
          response: "Four calls and no resolution — we completely understand your frustration, and we owe you a real apology. Inconsistent answers and missed callbacks are exactly the kind of experience we work to prevent, and we clearly failed here. Please email us directly at priority@company.com with your account details and we will personally handle this until it's resolved.",
        },
        {
          stars: 2,
          review: "The product is fine but the service experience was disappointing. The rep was impatient and talked over me when I was trying to explain my issue. I felt like a burden.",
          response: "Nobody should ever feel like a burden when they reach out to us for help — we're genuinely sorry you felt that way. This is a training and culture issue that we take seriously. Thank you for telling us specifically what happened. Please let us know if your issue was ultimately resolved; if not, we want to fix it properly.",
        },
      ]}
      whyHeading="Why Customer Service Review Responses Are High Stakes"
      whyBody={[
        "Customer service complaints carry extra weight because they're not about a product or a one-time experience — they're about how your company treats people. Other readers identify strongly with these stories. A defensive or dismissive response to a customer service complaint can do lasting damage. A genuine, accountable response can actually build loyalty with readers who've never interacted with you.",
        "The best responses to customer service reviews do one thing above all else: they make the reviewer feel heard. Not excused, not dismissed — heard. That shift in tone, even in a brief reply, signals to everyone reading that your company is different from the ones that ignore complaints.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Customer service review response examples dashboard"
      featureImageAlt="Managing customer service complaints in reviews"
      mobileImageAlt="Respond to customer service reviews on mobile"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/bad-review-response-examples", label: "Bad Review Response Examples" },
        { href: "/uses/negative-review-response-template", label: "Negative Review Response Templates" },
        { href: "/uses/sample-responses-to-negative-reviews", label: "Sample Responses to Negative Reviews" },
      ]}
    />
  );
}
