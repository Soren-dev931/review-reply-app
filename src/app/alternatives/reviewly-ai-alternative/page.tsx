import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Reviewly.ai Alternative — Typani vs Reviewly.ai",
  description:
    "Reviewly.ai costs $99/month and focuses on getting new reviews via SMS. Typani starts at $29/month and focuses on responding to reviews you already have. Different tools.",
};

export default function ReviewlyAiAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="Reviewly.ai"
      headline="Typani vs Reviewly.ai — Different Tools for Different Jobs"
      subheadline="Both deal with Google reviews, but they solve different problems. Reviewly.ai helps you get more reviews. Typani helps you respond to the ones you already have. Here is the honest breakdown — some businesses may want both."
      typaniPrice="From $29/month"
      competitorPrice="$99/month (single location)"
      comparisonRows={[
        { feature: "Primary focus", typani: "Responding to existing reviews", competitor: "Getting new reviews via SMS" },
        { feature: "Starting price", typani: "From $29/mo", competitor: "$99/mo per location" },
        { feature: "Free plan", typani: true, competitor: "14-day trial only" },
        { feature: "AI review response generation", typani: "Core feature", competitor: "Secondary feature" },
        { feature: "SMS review request campaigns", typani: false, competitor: true },
        { feature: "QR codes and NFC tags", typani: false, competitor: true },
        { feature: "Kiosk mode for in-store review requests", typani: false, competitor: true },
        { feature: "Auto-monitor Google reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Try without signing up", typani: "Yes — live demo on homepage", competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "🎯",
          heading: "If responding is your goal",
          body: "Typani is built from the ground up to generate quality review responses. It is not a feature bolted onto a review-collection product. The quality and consistency of responses reflects that difference.",
        },
        {
          icon: "💰",
          heading: "Lower price for response-only use",
          body: "Reviewly.ai starts at $99/month. If you are not using their SMS campaigns, QR codes, NFC tags, or kiosk mode, you are paying for features you do not need. Typani Starter covers the full response workflow for $29/month.",
        },
        {
          icon: "⚡",
          heading: "Try it before you commit",
          body: "Go to Typani's homepage, paste a real review, click generate, see the response — no account needed. Reviewly.ai requires a trial signup before you can evaluate the response quality.",
        },
      ]}
      competitorWins={[
        "Far better at generating new reviews — SMS campaigns, QR codes, NFC tags, and kiosk mode are purpose-built for growing your review count.",
        "Leaderboard feature for multi-location teams to track which locations drive the most new reviews.",
        "CRM integrations and Zapier support for automated post-visit review requests.",
        "If your main challenge is getting more reviews (not responding to them), Reviewly.ai is the stronger choice.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/nicejob-alternative", label: "Typani vs NiceJob" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
