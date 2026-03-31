import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";

export const metadata: Metadata = {
  title: "Podium Alternative — Typani vs Podium",
  description:
    "Podium Core starts at $399/month with annual contracts. If you need AI review responses, Typani does it for $29/month with no commitments.",
};

export default function PodiumAlternative() {
  return (
    <ComparisonPageLayout
      competitorName="Podium"
      headline="Podium Alternative for Review Responses"
      subheadline="Podium is a business communications platform. It handles customer texts, payments, team messaging, and reviews. If responding to reviews is your main goal, you are paying for a lot of overhead."
      typaniPrice="From $29/month"
      competitorPrice="$399–$599/month"
      comparisonRows={[
        { feature: "Starting price", typani: "From $29/mo", competitor: "$399–$599/mo" },
        { feature: "Free plan", typani: true, competitor: false },
        { feature: "Annual contract required", typani: false, competitor: true },
        { feature: "Core focus", typani: "AI review responses", competitor: "Business messaging platform" },
        { feature: "AI review responses", typani: true, competitor: "Included in platform" },
        { feature: "Auto-post responses to Google", typani: "Pro plan", competitor: true },
        { feature: "Customer SMS inbox", typani: false, competitor: true },
        { feature: "Payment processing", typani: false, competitor: true },
        { feature: "Team messaging", typani: false, competitor: true },
        { feature: "Transparent public pricing", typani: true, competitor: false },
        { feature: "Setup time", typani: "Under 5 minutes", competitor: "Onboarding required" },
      ]}
      whySwitchPoints={[
        {
          icon: "🎯",
          heading: "Built for one job",
          body: "Podium is a full communications platform — webchat, payments, team inbox, review management. It does a lot. If you just need to respond to reviews well and consistently, Typani does that without the overhead.",
        },
        {
          icon: "💰",
          heading: "90% lower starting price",
          body: "Podium Core starts at $399/month. Typani Starter is $29/month. Both let you draft and approve AI responses to Google reviews. The difference is everything else you're paying for.",
        },
        {
          icon: "🔓",
          heading: "No lock-in",
          body: "Real Podium users on TrustRadius describe $500/month bills and difficulty canceling annual contracts. Typani is month-to-month. You can cancel any time from your account settings.",
        },
      ]}
      competitorWins={[
        "Full business messaging platform — handles all customer text conversations, not just review notifications.",
        "Built-in payment processing and customer-facing payment links.",
        "Better for businesses that want to consolidate multiple communication tools into one place.",
        "Larger company with a wider ecosystem of integrations and a bigger support team.",
      ]}
      relatedLinks={[
        { href: "/alternatives/birdeye-alternative", label: "Typani vs Birdeye" },
        { href: "/alternatives/reviewly-ai-alternative", label: "Typani vs Reviewly.ai" },
        { href: "/alternatives/nicejob-alternative", label: "Typani vs NiceJob" },
        { href: "/uses/google-review-management-software", label: "Google Review Management Software" },
        { href: "/alternatives", label: "All Comparisons" },
      ]}
    />
  );
}
