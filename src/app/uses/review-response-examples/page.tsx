import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Review Response Examples | Reviewly",
    description: "See real review response examples for any star rating or industry. Use them as inspiration or generate your own instantly with Reviewly's AI.",
  };
}

export default function ReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Examples & Templates"
      h1="Review Response Examples for Any Business"
      tagline="See what a great review response actually looks like — positive, negative, or mixed. Use these as inspiration or generate your own in seconds with AI."
      featureHeading="What Great Review Responses Have in Common"
      featureBody="Whether you're responding to a 1-star complaint or a glowing 5-star review, the best responses share a few qualities: they're specific, they're genuine, and they move the relationship forward."
      featurePoints={[
        "Acknowledge the specific experience — not just 'your feedback'",
        "Respond to the emotion, not just the facts",
        "Offer a path forward for unresolved issues",
        "Keep it concise — under 100 words in most cases",
        "Never copy-paste the same response to different reviews",
        "Include a name or contact for follow-up on complaints",
      ]}
      examples={[
        {
          stars: 1,
          review: "The contractor showed up without the right materials, did half the job, and never came back. It's been six weeks. I've been left with a half-finished kitchen.",
          response: "We are deeply sorry — leaving a job unfinished for six weeks is not acceptable under any circumstances, and we understand how disruptive this has been for your family. Please call our project manager directly at 555-0199 and we will prioritize getting your kitchen completed immediately. Thank you for your patience and we're sorry for letting you down.",
        },
        {
          stars: 5,
          review: "Clean, organized, and the staff went out of their way to help me find exactly what I needed. Spent less than I expected and left happier than I arrived. That's rare.",
          response: "Leaving happier than you arrived — that's the goal! We're really glad the team came through and the value was there too. It's genuinely our favorite thing to hear. Thank you for taking the time to share it and we hope to see you again soon!",
        },
      ]}
      whyHeading="How Review Response Examples Help You Get Better"
      whyBody={[
        "Seeing strong review response examples is one of the fastest ways to improve your own. Most business owners have never been formally taught how to respond to reviews — they default to what feels natural, which is often either too formal or too defensive. Good examples recalibrate your instincts.",
        "The even faster path is using Reviewly's AI generator to create responses tailored to each actual review. You still benefit from seeing examples — they help you recognize quality and know when to adjust a generated response — but you don't have to write from scratch every time.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/dashboard-5star-response.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Review response examples library"
      featureImageAlt="Example review responses in Reviewly"
      mobileImageAlt="Browse review response examples on mobile"
      related={[
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      ]}
    />
  );
}
