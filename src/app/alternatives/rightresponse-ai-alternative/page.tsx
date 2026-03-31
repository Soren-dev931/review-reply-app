import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "RightResponse AI Alternative — Typani vs RightResponse AI",
  description:
    "Both Typani and RightResponse AI generate AI review responses. Compare pricing models, features, and what each does better.",
};

export default function RightResponseAiAlternativePage() {
  return (
    <ComparisonPageLayout
      competitorName="RightResponse AI"
      headline="RightResponse AI vs Typani — AI Review Tools Compared"
      subheadline="RightResponse AI and Typani are the most similar tools on this list. Both are built around AI review responses. Here is the honest side-by-side so you can figure out which fits better."
      typaniPrice="From $29/month flat"
      competitorPrice="From $8/location/month (usage-based)"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo flat", competitor: "From $8/location/mo" },
        { feature: "Pricing model", typani: "Flat monthly", competitor: "Hybrid usage-based" },
        { feature: "Free plan", typani: "5 responses/mo, no card", competitor: "Free trial" },
        { feature: "AI review response generation", typani: true, competitor: true },
        { feature: "Auto-monitor Google reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Map rank tracking", typani: false, competitor: "Add-on (+$6/mo)" },
        { feature: "Competitor review monitoring", typani: false, competitor: true },
        { feature: "Sentiment analysis", typani: false, competitor: true },
        { feature: "Unlimited responses (flat fee)", typani: "Pro plan ($79/mo)", competitor: "Scales with usage" },
        { feature: "Try without signing up", typani: true, competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "💰",
          heading: "Flat pricing, no surprises",
          body: "RightResponse AI uses hybrid usage-based billing. The entry price is low but grows with how much you use it. Typani Starter is $29/month. Pro is $79/month. That is the whole bill — no per-response or per-location overage charges.",
        },
        {
          icon: "🎯",
          heading: "Simpler if responses are all you need",
          body: "RightResponse AI packs in map rank tracking, competitor monitoring, and sentiment analysis. That is useful if you need it. If you mainly need to respond to reviews well, Typani keeps things focused.",
        },
        {
          icon: "📊",
          heading: "Cost stays predictable as you grow",
          body: "Add more locations, get more reviews — with Typani Pro, the price stays $79/month. With usage-based pricing, higher volume means a higher bill.",
        },
      ]}
      competitorWins={[
        "Map rank tracking built in — shows where your business ranks in local Google Maps results for specific keywords.",
        "Competitor review monitoring — see what customers are saying about competitors.",
        "Sentiment analysis and review trend analytics.",
        "Can be cheaper if you have many locations with low review volume per location (usage-based billing works in your favor at low usage).",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/reviewtrackers-alternative", label: "Typani vs ReviewTrackers" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      ]}
    />
  );
}
