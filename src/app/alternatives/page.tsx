import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typani vs. The Competition — Honest Comparisons",
  description:
    "Side-by-side comparisons of Typani vs Birdeye, Podium, Reviewly.ai, NiceJob, ReviewTrackers, and RightResponse AI. Real pricing, real features, no spin.",
};

const competitors = [
  {
    name: "Birdeye",
    price: "$299–$449/mo per location",
    description:
      "Enterprise reputation platform with social media management, webchat, and review monitoring across 100+ platforms.",
    href: "/alternatives/birdeye-alternative",
    tag: "Enterprise",
  },
  {
    name: "Podium",
    price: "$399–$599/mo",
    description:
      "Business messaging platform that bundles review management with customer texting, payment processing, and team chat.",
    href: "/alternatives/podium-alternative",
    tag: "All-in-one",
  },
  {
    name: "Reviewly.ai",
    price: "$99/mo per location",
    description:
      "SMS-based review collection tool. Focuses on getting new reviews from customers via text, QR codes, and NFC tags.",
    href: "/alternatives/reviewly-ai-alternative",
    tag: "Review collection",
  },
  {
    name: "NiceJob",
    price: "$75–$125/mo",
    description:
      "Automated review collection via email and SMS follow-up campaigns. Strong track record with home service businesses.",
    href: "/alternatives/nicejob-alternative",
    tag: "Review collection",
  },
  {
    name: "ReviewTrackers",
    price: "From $89/mo per location",
    description:
      "Multi-platform review monitoring and analytics. Tracks reviews across 100+ sites with detailed reporting dashboards.",
    href: "/alternatives/reviewtrackers-alternative",
    tag: "Analytics",
  },
  {
    name: "RightResponse AI",
    price: "From $8/location/mo",
    description:
      "AI review response generation plus map rank tracking and competitor review monitoring. Most similar to Typani.",
    href: "/alternatives/rightresponse-ai-alternative",
    tag: "AI responses",
  },
];

const tagColors: Record<string, string> = {
  Enterprise: "bg-purple-100 text-purple-700",
  "All-in-one": "bg-blue-100 text-blue-700",
  "Review collection": "bg-amber-100 text-amber-700",
  Analytics: "bg-sky-100 text-sky-700",
  "AI responses": "bg-emerald-100 text-emerald-700",
};

export default function AlternativesPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Typani vs. Everyone Else
          </h1>
          <p className="text-lg text-navy-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Honest comparisons. Real pricing. No spin. The review management
            space has a lot of tools that do very different things — find the
            one that fits what you actually need.
          </p>
          <a href="/signup" className="btn-primary text-base !px-7 !py-3.5">
            Try Typani Free
          </a>
        </div>
      </section>

      {/* Competitor grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="card p-6 hover:shadow-md transition-shadow duration-200 flex flex-col group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-navy-900 group-hover:text-emerald-600 transition-colors">
                  {c.name}
                </h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${tagColors[c.tag] ?? "bg-navy-100 text-navy-600"}`}
                >
                  {c.tag}
                </span>
              </div>
              <p className="text-navy-500 text-sm font-medium mb-2">{c.price}</p>
              <p className="text-navy-600 text-sm leading-relaxed flex-1">{c.description}</p>
              <span className="text-emerald-600 font-semibold text-sm mt-4 group-hover:text-emerald-700">
                Compare →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Transparency note */}
      <section className="bg-navy-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="border border-navy-200 bg-white rounded-xl p-6 text-sm text-navy-600 leading-relaxed">
            <p className="font-semibold text-navy-800 mb-2">A note on these comparisons</p>
            <p>
              Pricing data is sourced from public pricing pages, G2, Capterra,
              and user reviews as of early 2026. Vendor pricing changes — verify
              current rates on each vendor's site before making a decision. We
              list genuine advantages competitors have over Typani on every page.
              We are biased, but we are trying to be honest about it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
