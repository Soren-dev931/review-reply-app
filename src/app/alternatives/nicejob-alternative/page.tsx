import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "NiceJob Alternative — Typani vs NiceJob",
  description:
    "NiceJob automates collecting new reviews. Typani automates responding to them. Compare pricing and see which fits your situation.",
};

export default function NiceJobAlternativePage() {
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
        { feature: "Social proof website widgets", typani: false, competitor: true },
        { feature: "Auto-monitor for new reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: false },
        { feature: "Try without signing up", typani: true, competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "✍️",
          heading: "Built for response quality",
          body: "NiceJob is designed to get reviews in, not write responses to them. If responding to every review — especially the bad ones — is your challenge, Typani is built for exactly that.",
        },
        {
          icon: "💰",
          heading: "Lower price for response work",
          body: "NiceJob starts at $75/month. Typani Starter is $29/month and covers the full response workflow — monitoring new reviews, drafting responses, approving, and posting.",
        },
        {
          icon: "📝",
          heading: "Responses that address the actual review",
          body: "A copy-paste template response to a 1-star review does more harm than good. Typani reads what the customer wrote and responds to it specifically.",
        },
      ]}
      competitorWins={[
        "Excellent at automated review generation — email and SMS follow-up sequences designed to convert happy customers into reviewers.",
        "Social proof display widgets that pull reviews onto your website automatically.",
        "Strong track record with home service businesses — plumbers, cleaners, landscapers, contractors.",
        "If getting more reviews on Google is the priority, NiceJob is the better choice.",
      ]}
      relatedLinks={[
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/review-response-automation", label: "Review Response Automation" },
      ]}
    />
  );
}
