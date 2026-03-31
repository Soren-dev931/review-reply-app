import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "ReviewTrackers Alternative — Typani vs ReviewTrackers",
  description:
    "ReviewTrackers monitors reviews across 100+ platforms. Typani writes AI responses to them. Compare features and pricing for small to mid-size businesses.",
};

export default function ReviewTrackersAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="ReviewTrackers"
      headline="ReviewTrackers Alternative for AI Review Responses"
      subheadline="ReviewTrackers is built for teams that need to monitor and analyze reviews across 100+ platforms. Typani is built to write the actual responses — quickly and specifically."
      typaniPrice="From $29/month"
      competitorPrice="From $89/month per location"
      comparisonRows={[
        { feature: "Primary focus", typani: "AI response generation", competitor: "Review monitoring and analytics" },
        { feature: "Starting price", typani: "From $29/mo", competitor: "From $89/mo per location" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "AI response generation", typani: "Core feature", competitor: "Limited" },
        { feature: "Review monitoring (Google)", typani: "Starter and up", competitor: true },
        { feature: "Review monitoring (100+ platforms)", typani: false, competitor: true },
        { feature: "Analytics and reporting dashboards", typani: "Basic on Pro", competitor: "Comprehensive" },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: false },
        { feature: "Multi-location support", typani: "Pro plan", competitor: true },
        { feature: "API access", typani: false, competitor: true },
      ]}
      whySwitchPoints={[
        {
          icon: "✍️",
          heading: "Writes the response, not just the alert",
          body: "ReviewTrackers is strong at monitoring and sending you notifications. When a review comes in, you still have to write the reply yourself. Typani drafts it, you approve it in one click, and it posts.",
        },
        {
          icon: "💰",
          heading: "Lower cost for 1–3 locations",
          body: "ReviewTrackers pricing scales per location. For a small business focused on response quality rather than enterprise analytics, Typani is a fraction of the cost.",
        },
        {
          icon: "⚡",
          heading: "Faster from alert to reply",
          body: "ReviewTrackers sends the alert. Typani sends a ready-to-approve draft. That difference in time-to-response adds up across every review you receive.",
        },
      ]}
      competitorWins={[
        "Monitors reviews across 100+ platforms — Yelp, TripAdvisor, G2, Glassdoor, app stores, and more. Typani is Google-only.",
        "Deeper analytics — sentiment trends, competitor comparisons, location benchmarking over time.",
        "Better for mid-market and enterprise teams with dedicated reporting and analytics needs.",
        "API access for building custom dashboards and integrations into existing business intelligence tools.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
