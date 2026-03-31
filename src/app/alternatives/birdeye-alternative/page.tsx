import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Birdeye Alternative — Typani vs Birdeye",
  description:
    "Birdeye starts at $299/month per location with annual contracts. Typani starts at $29/month with no contracts and no per-location fees. Compare features.",
};

export default function BirdeyeAlternativePage() {
  return (
    <ComparisonPageLayout
      competitorName="Birdeye"
      headline="Birdeye Alternative for Small Businesses"
      subheadline="Birdeye is a powerful platform built for enterprise chains. If you run a single location or a handful of locations, you are paying for features you will never touch — and a price tag to match."
      typaniPrice="From $29/month"
      competitorPrice="$299–$449/mo per location"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo", competitor: "$299–$449/mo per location" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "Annual contract required", typani: false, competitor: true },
        { feature: "Per-location fees", typani: "None on Pro plan", competitor: "Yes, per location" },
        { feature: "AI review responses", typani: true, competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Review monitoring", typani: "Starter and up", competitor: true },
        { feature: "Setup time", typani: "Under 5 minutes", competitor: "Days to weeks" },
        { feature: "Sales call required to start", typani: false, competitor: true },
        { feature: "Transparent public pricing", typani: true, competitor: false },
        { feature: "Covers platforms beyond Google", typani: false, competitor: "100+ platforms" },
      ]}
      whySwitchPoints={[
        {
          icon: "🔓",
          heading: "No annual contract",
          body: "Pay month-to-month. Cancel anytime. Birdeye locks you into a 12-month commitment, often with automatic renewals. Real user reviews mention price increases mid-contract with no warning.",
        },
        {
          icon: "⚡",
          heading: "Start today, not next week",
          body: "No sales calls, no demos, no 'contact us for pricing.' Sign up, connect your Google Business Profile, and you are responding to reviews the same day.",
        },
        {
          icon: "📍",
          heading: "One flat price for all locations",
          body: "Birdeye charges per location — costs stack up fast. Typani Pro covers unlimited locations for $79/month flat. No surprises as you add more locations.",
        },
      ]}
      competitorWins={[
        "Covers 100+ review platforms — Yelp, TripAdvisor, Facebook, Glassdoor, and more. Typani is Google-only right now.",
        "Built-in social media management, webchat, and business listings management all in one platform.",
        "Advanced competitor benchmarking, sentiment trend tracking, and enterprise-level reporting.",
        "Better fit for franchise groups, healthcare networks, and enterprise chains with dedicated IT and marketing staff.",
      ]}
      relatedLinks={[
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/best-review-management-software", label: "Best Review Management Software" },
      ]}
    />
  );
}
