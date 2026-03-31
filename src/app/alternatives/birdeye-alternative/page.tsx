import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Birdeye Alternative — Typani vs Birdeye",
  description:
    "Birdeye starts at $299/month per location with annual contracts. Typani starts at $29/month with no contracts and no per-location fees. Compare features.",
};

export default function BirdeyeAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="Birdeye"
      headline="Birdeye Alternative for Small Businesses"
      subheadline="Birdeye is a powerful platform built for enterprise chains. If you run a single-location or small multi-location business, you are paying for a lot of features you will never use — and a price tag to match."
      typaniPrice="From $29/month"
      competitorPrice="$299–$449/month per location"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo", competitor: "$299–$449/mo per location" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "Annual contract required", typani: false, competitor: true },
        { feature: "Per-location fees", typani: "None on Pro plan", competitor: "Yes, per location" },
        { feature: "AI review responses", typani: true, competitor: true },
        { feature: "Auto-post to Google", typani: "Pro plan", competitor: true },
        { feature: "Review monitoring", typani: "Starter and up", competitor: true },
        { feature: "Setup time", typani: "Under 5 minutes", competitor: "Days to weeks" },
        { feature: "Sales call required to start", typani: false, competitor: true },
        { feature: "Covers platforms beyond Google", typani: false, competitor: "100+ platforms" },
      ]}
      whySwitchPoints={[
        {
          icon: "📅",
          heading: "No annual contract",
          body: "Pay month-to-month. Cancel anytime. Birdeye locks you into a 12-month commitment, often with automatic renewals. Real users report price increases mid-contract with no recourse.",
        },
        {
          icon: "⚡",
          heading: "Start today, not next week",
          body: "No sales calls, no demos, no 'contact us for pricing.' Typani has a live demo on the homepage, transparent pricing, and you can connect your Google Business Profile and start responding the same day.",
        },
        {
          icon: "📍",
          heading: "One flat price for all locations",
          body: "Birdeye charges per location. On Typani Pro, add unlimited locations for $79/month flat. No bill that grows every time you open a new location.",
        },
      ]}
      competitorWins={[
        "Covers 100+ review platforms — Yelp, TripAdvisor, Facebook, Glassdoor, and more. Typani is Google-only right now.",
        "Built-in social media management, webchat, and business listings management in one platform.",
        "Advanced competitor benchmarking, sentiment trends, and enterprise-level reporting.",
        "Better fit for franchise groups, healthcare networks, and enterprise operations with dedicated marketing teams.",
      ]}
      relatedLinks={[
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
