import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "RightResponse AI Alternative — Typani vs RightResponse AI",
  description:
    "Both Typani and RightResponse AI generate AI review responses. Compare pricing models, features, and what each does better.",
};

export default function RightResponseAiAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="RightResponse AI"
      headline="RightResponse AI vs Typani — AI Review Response Tools Compared"
      subheadline="These are the most similar tools on this list. Both focus on AI review responses for Google. Here is the honest side-by-side so you can decide which fits better."
      typaniPrice="From $29/month flat"
      competitorPrice="From $8/location/month (usage-based)"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo flat", competitor: "From $8/location/mo" },
        { feature: "Pricing model", typani: "Flat monthly — no surprises", competitor: "Hybrid usage-based" },
        { feature: "Free plan", typani: "5 responses/month, no card needed", competitor: "Free trial available" },
        { feature: "AI review responses", typani: true, competitor: true },
        { feature: "Auto-monitor Google reviews", typani: "Starter and up", competitor: true },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Map rank tracking", typani: false, competitor: "Add-on (~$6/mo)" },
        { feature: "Competitor review monitoring", typani: false, competitor: true },
        { feature: "Sentiment analysis", typani: false, competitor: true },
        { feature: "Unlimited responses", typani: "Pro plan ($79/mo flat)", competitor: "Scales with usage" },
      ]}
      whySwitchPoints={[
        {
          icon: "💰",
          heading: "Flat pricing, no surprises",
          body: "RightResponse AI uses a hybrid usage-based model. The entry price is low, but your bill grows as your review volume increases. Typani Starter is $29/month. Pro is $79/month. That is the whole number, every month.",
        },
        {
          icon: "🎯",
          heading: "Simpler to evaluate",
          body: "Go to Typani's homepage, paste a review, click generate — no account needed. You can see exactly what quality of response you will get before spending anything.",
        },
        {
          icon: "📊",
          heading: "Predictable costs as you grow",
          body: "With usage-based pricing, higher review volume means higher bills. On Typani Pro at $79/month flat, you can respond to every review across unlimited locations without watching the meter.",
        },
      ]}
      competitorWins={[
        "Map rank tracking built in — shows where your business ranks in local Google Maps for specific keywords. Typani does not have this.",
        "Competitor review monitoring — you can track and analyze what customers say about competing businesses.",
        "Sentiment analysis and review trend analytics built into the platform.",
        "Can be cheaper if you have many locations with low monthly review volume — the usage-based model works in your favor at low volume.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/reviewtrackers-alternative", label: "Typani vs ReviewTrackers" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
