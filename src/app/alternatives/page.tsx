import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typani Alternatives & Comparisons — See How We Stack Up",
  description:
    "Honest side-by-side comparisons of Typani vs Birdeye, Podium, Reviewly.ai, NiceJob, ReviewTrackers, and RightResponse AI. Real pricing, real features, no spin.",
};

const competitors = [
  {
    name: "Birdeye",
    price: "$299–$449/mo per location",
    description:
      "Enterprise reputation platform with social, webchat, and review monitoring across 100+ platforms.",
    href: "/alternatives/birdeye-alternative",
  },
  {
    name: "Podium",
    price: "$399–$599/mo",
    description:
      "Business messaging platform that bundles review management with texting, payments, and team chat.",
    href: "/alternatives/podium-alternative",
  },
  {
    name: "Reviewly.ai",
    price: "$99/mo (single location)",
    description:
      "SMS-based review collection tool. Focused on getting new reviews, not responding to existing ones.",
    href: "/alternatives/reviewly-ai-alternative",
  },
  {
    name: "NiceJob",
    price: "$75–$125/mo",
    description:
      "Automated review collection via email and SMS follow-up campaigns. Strong on growing review count.",
    href: "/alternatives/nicejob-alternative",
  },
  {
    name: "ReviewTrackers",
    price: "From $89/mo per location",
    description:
      "Multi-platform review monitoring and analytics across 100+ sites. Built for reporting, not responses.",
    href: "/alternatives/reviewtrackers-alternative",
  },
  {
    name: "RightResponse AI",
    price: "From $8/location/mo",
    description:
      "AI review responses plus map rank tracking and competitor monitoring. Usage-based pricing model.",
    href: "/alternatives/rightresponse-ai-alternative",
  },
];

export default function AlternativesHub() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Typani vs. Everyone Else
          </h1>
          <p className="text-navy-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Honest comparisons. Real pricing. No spin. Find the right tool for
            what you actually need — even if that tool isn't us.
          </p>
        </div>
      </section>

      {/* Competitor grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">
          Pick a comparison
        </h2>
        <p className="text-navy-500 mb-10">
          Each page has a full feature table, honest pricing breakdown, and a
          section on where the competitor genuinely has an edge.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitors.map((c) => (
            <div
              key={c.name}
              className="card p-6 hover:shadow-md transition-shadow duration-150 flex flex-col"
            >
              <h3 className="text-xl font-bold text-navy-900">{c.name}</h3>
              <p className="text-sm text-navy-500 mt-1 font-medium">{c.price}</p>
              <p className="text-navy-600 text-sm mt-3 leading-relaxed flex-1">
                {c.description}
              </p>
              <Link
                href={c.href}
                className="mt-5 inline-block text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
              >
                Typani vs {c.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How we built these */}
      <section className="bg-navy-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg font-bold text-navy-900 mb-3">
            A note on how we built these comparisons
          </h2>
          <p className="text-navy-500 text-sm leading-relaxed">
            Pricing data comes from each vendor's public website, G2 listings,
            and user reviews as of early 2026. Prices change — always verify
            directly with the vendor before making a decision. We tried to
            represent competitor strengths fairly, not just our own.
          </p>
        </div>
      </section>
    </div>
  );
}
