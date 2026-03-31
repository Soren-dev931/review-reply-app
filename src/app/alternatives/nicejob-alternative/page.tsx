import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "NiceJob Alternative — Typani vs NiceJob",
  description:
    "NiceJob automates collecting new reviews. Typani automates responding to them. Compare pricing and features to find which fits your situation.",
};

export default function NiceJobAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="NiceJob"
      headline="NiceJob Alternative — Getting Reviews vs Responding to Them"
      subheadline="NiceJob automates the process of collecting new reviews from happy customers. Typani automates the process of responding to every review you receive. Same universe, completely different jobs."
      typaniPrice="From $29/month"
      competitorPrice="$75–$125/month"
      comparisonRows={[
        { feature: "Primary focus", typani: "AI review responses", competitor: "Automated review collection" },
        { feature: "Starting price", typani: "From $29/mo", competitor: "$75–$125/mo" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "AI response generation", typani: "Core feature", competitor: "Not a focus" },
        { feature: "Automated review requests (email/SMS)", typani: false, competitor: true },
        { feature: "Social proof widgets for website", typani: false, competitor: true },
        { feature: "Auto-monitor for new reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "✍️",
          heading: "Built for response quality",
          body: "NiceJob is designed to get reviews, not respond to them. If writing better, faster responses to every review is the challenge you are solving, Typani is purpose-built for that.",
        },
        {
          icon: "💰",
          heading: "Better price for response work",
          body: "NiceJob starts at $75/month. Typani Starter is $29/month and covers the full response workflow — monitoring, drafting, approving, and posting to Google.",
        },
        {
          icon: "📝",
          heading: "Responses that address the actual review",
          body: "A generic template reply to a 1-star review often makes things worse. Typani reads the specific review and writes a response that addresses what the customer actually said.",
        },
      ]}
      competitorWins={[
        "Excellent at growing review count — automated email and SMS follow-up sequences with consistently high response rates.",
        "Social proof display widgets that automatically show reviews on your website.",
        "Strong track record with home service businesses — plumbers, cleaners, landscapers who need to build their review count from scratch.",
        "If your goal is more reviews on Google, NiceJob is the better tool. Typani focuses on the response side.",
      ]}
      relatedLinks={[
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
