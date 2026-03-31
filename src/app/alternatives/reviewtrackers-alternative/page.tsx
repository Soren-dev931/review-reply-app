import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "ReviewTrackers Alternative — Typani vs ReviewTrackers",
  description:
    "ReviewTrackers monitors reviews across 100+ platforms. Typani writes AI responses to them. Compare features and pricing.",
};

export default function ReviewTrackersAlternativePage() {
  return (
    <ComparisonPageLayout
      competitorName="ReviewTrackers"
      headline="ReviewTrackers Alternative for AI Review Responses"
      subheadline="ReviewTrackers is built for teams that need to monitor and analyze reviews across 100+ platforms. Typani is built to write the actual responses — fast, and specific to what each reviewer said."
      typaniPrice="From $29/month"
      competitorPrice="From $89/month per location"
      comparisonRows={[
        { feature: "Primary focus", typani: "AI response generation", competitor: "Review monitoring and analytics" },
        { feature: "Starting price", typani: "From $29/mo", competitor: "From $89/mo per location" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "AI response generation", typani: "Core feature", competitor: "Limited or absent" },
        { feature: "Review monitoring (Google)", typani: "Starter and up", competitor: true },
        { feature: "Review monitoring (100+ platforms)", typani: false, competitor: true },
        { feature: "Analytics and reporting", typani: "Basic on Pro", competitor: "Comprehensive" },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: false },
        { feature: "Multi-location reporting", typani: "Pro plan", competitor: true },
        { feature: "API access", typani: false, competitor: true },
      ]}
      whySwitchPoints={[
        {
          icon: "✍️",
          heading: "It actually writes the response",
          body: "ReviewTrackers monitors and alerts. When a new review lands, writing the reply is still on you. Typani drafts it, you approve it in one click, it posts to Google.",
        },
        {
          icon: "💰",
          heading: "Lower cost for small businesses",
          body: "ReviewTrackers charges per location — for 3 locations, you are looking at $200+ a month. For a business focused on response quality rather than cross-platform analytics, Typani is a fraction of the cost.",
        },
        {
          icon: "⚡",
          heading: "Faster from alert to reply",
          body: "ReviewTrackers sends an alert. Typani sends a draft. The difference in how quickly you respond matters — Google notices and so does the customer.",
        },
      ]}
      competitorWins={[
        "Monitors reviews across 100+ platforms — Yelp, TripAdvisor, G2, Glassdoor, app stores, and more. Typani is Google-only right now.",
        "Deeper analytics — sentiment trends, competitor comparisons, location benchmarking over time.",
        "Better fit for mid-market and enterprise teams with dedicated reporting needs.",
        "API access for building custom integrations and dashboards.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/rightresponse-ai-alternative", label: "Typani vs RightResponse AI" },
        { href: "/alternatives/podium-alternative", label: "Typani vs Podium" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
      ]}
    />
  );
}
