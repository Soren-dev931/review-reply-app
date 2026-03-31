import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Reviewly.ai Alternative — Typani vs Reviewly.ai",
  description:
    "Reviewly.ai focuses on getting new reviews via SMS at $99/month. Typani starts at $29/month and focuses on responding to the reviews you already have. Different tools, different jobs.",
};

export default function ReviewlyAiAlternativePage() {
  return (
    <ComparisonPageLayout
      competitorName="Reviewly.ai"
      headline="Typani vs Reviewly.ai — Different Tools for Different Jobs"
      subheadline="Reviewly.ai and Typani both deal with Google reviews, but they solve different problems. Reviewly.ai helps you GET more reviews from customers. Typani helps you RESPOND to the ones you already have. Some businesses need one. Some need both."
      typaniPrice="From $29/month"
      competitorPrice="$99/month per location"
      comparisonRows={[
        { feature: "Primary focus", typani: "Responding to existing reviews", competitor: "Getting new reviews via SMS" },
        { feature: "Starting price", typani: "From $29/mo", competitor: "$99/mo per location" },
        { feature: "Free plan", typani: true, competitor: "14-day trial only" },
        { feature: "AI review response generation", typani: "Core feature", competitor: "Secondary feature" },
        { feature: "SMS review request campaigns", typani: false, competitor: true },
        { feature: "QR codes and NFC tags", typani: false, competitor: true },
        { feature: "In-store kiosk mode", typani: false, competitor: true },
        { feature: "Auto-monitor Google reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Try without signing up", typani: true, competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "🎯",
          heading: "Built for responses, not bolted on",
          body: "Typani is built from the ground up to write good responses. It is not a feature added onto a review-collection product. The quality of the output reflects that difference.",
        },
        {
          icon: "💰",
          heading: "Lower price if responding is all you need",
          body: "Reviewly.ai starts at $99/month. If you are not using their SMS campaigns, QR codes, and kiosk mode, you are paying for things you will never use.",
        },
        {
          icon: "⚡",
          heading: "See it before you commit",
          body: "Go to Typani's homepage, paste a real review, get a real response — zero signup required. Reviewly.ai requires a trial account before you can see anything.",
        },
      ]}
      competitorWins={[
        "Far better at generating new reviews — SMS campaigns, QR codes, NFC tags, and kiosk mode are purpose-built for growing your review count.",
        "Built-in leaderboard for multi-location teams to track which locations drive the most reviews.",
        "CRM integrations and Zapier support for automated post-visit review requests.",
        "If getting more reviews is the priority, Reviewly.ai is the stronger tool. Both tools can work together.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/nicejob-alternative", label: "Typani vs NiceJob" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      ]}
    />
  );
}
