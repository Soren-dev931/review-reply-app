import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Podium Alternative — Typani vs Podium",
  description:
    "Podium Core starts at $399/month with annual contracts. If you need AI review responses, Typani does it for $29/month with no commitments.",
};

export default function PodiumAlternativePage() {
  return (
    <ComparisonPageLayout
      competitorName="Podium"
      headline="Podium Alternative for Review Responses"
      subheadline="Podium is a business communications platform — it handles customer texts, payment processing, team messaging, and reviews all in one. If review responses are your main goal, you are paying for a lot of overhead you will not use."
      typaniPrice="From $29/month"
      competitorPrice="$399–$599/month"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo", competitor: "$399–$599/mo" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "Annual contract required", typani: false, competitor: true },
        { feature: "Primary focus", typani: "AI review responses", competitor: "Business messaging platform" },
        { feature: "AI review response generation", typani: true, competitor: "Included in platform" },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Customer SMS inbox", typani: false, competitor: true },
        { feature: "Payment processing", typani: false, competitor: true },
        { feature: "Team messaging", typani: false, competitor: true },
        { feature: "Setup time", typani: "Under 5 minutes", competitor: "Onboarding call required" },
        { feature: "Transparent public pricing", typani: true, competitor: false },
      ]}
      whySwitchPoints={[
        {
          icon: "🎯",
          heading: "One job, done well",
          body: "Podium is a full communications platform. Review management is one slice of it. If you need to respond to Google reviews — not manage an SMS inbox or process payments — Typani is built exactly for that job.",
        },
        {
          icon: "💰",
          heading: "90% lower starting price",
          body: "Podium Core starts at $399/month. Typani Starter is $29/month. Both can draft and post responses to Google reviews. The gap is everything else you end up paying for.",
        },
        {
          icon: "🔓",
          heading: "No lock-in",
          body: "Podium users on TrustRadius describe annual contracts that are difficult to exit. Typani is month-to-month — cancel whenever you want, no fees.",
        },
      ]}
      competitorWins={[
        "Full business messaging — handles all customer text conversations, not just review notifications.",
        "Built-in payment processing and team inbox in a single platform.",
        "Better for businesses that want to consolidate multiple communication tools into one place.",
        "Larger company with a bigger integrations ecosystem (CRMs, practice management software, etc.).",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/nicejob-alternative", label: "Typani vs NiceJob" },
        { href: "/alternatives", label: "All Comparisons" },
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
      ]}
    />
  );
}
