import type { Metadata } from "next";
import Link from "next/link";

export interface ComparisonRow {
  feature: string;
  typani: boolean | string;
  competitor: boolean | string;
}

export interface WhySwitchPoint {
  icon: string;
  heading: string;
  body: string;
}

export interface ComparisonPageProps {
  competitorName: string;
  headline: string;
  subheadline: string;
  typaniPrice: string;
  competitorPrice: string;
  comparisonRows: ComparisonRow[];
  whySwitchPoints: WhySwitchPoint[];
  competitorWins: string[];
  relatedLinks: Array<{ href: string; label: string }>;
}

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="text-emerald-600 font-semibold">Yes</span>;
  }
  if (value === false) {
    return <span className="text-navy-400">No</span>;
  }
  return <span className="text-navy-700">{value}</span>;
}

export default function ComparisonPageLayout({
  competitorName,
  headline,
  subheadline,
  typaniPrice,
  competitorPrice,
  comparisonRows,
  whySwitchPoints,
  competitorWins,
  relatedLinks,
}: ComparisonPageProps) {
  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-full mb-5">
                Typani vs {competitorName}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                {headline}
              </h1>
              <p className="text-lg text-navy-300 leading-relaxed mb-8">
                {subheadline}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/signup" className="btn-primary text-base !px-7 !py-3.5">
                  Try Free — No Card Needed
                </a>
                <a
                  href="/#demo"
                  className="btn-outline !border-navy-600 !text-navy-300 hover:!text-white hover:!border-emerald-500 text-base !px-7 !py-3.5"
                >
                  See Live Demo
                </a>
              </div>
            </div>

            {/* VS Badge */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-navy-800 border border-navy-600 rounded-2xl p-8 shadow-2xl w-full max-w-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center flex-1">
                    <div className="text-emerald-400 font-extrabold text-2xl tracking-tight mb-1">
                      Typani
                    </div>
                    <div className="text-emerald-500/70 text-sm font-medium">
                      {typaniPrice}
                    </div>
                  </div>
                  <div className="text-navy-400 font-bold text-xl px-2">vs</div>
                  <div className="text-center flex-1">
                    <div className="text-navy-300 font-extrabold text-2xl tracking-tight mb-1">
                      {competitorName}
                    </div>
                    <div className="text-navy-500 text-sm font-medium">
                      {competitorPrice}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-navy-700 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="text-navy-400">Free plan available</span>
                    <span className="ml-auto text-emerald-400 font-semibold text-xs">Typani ✓</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="text-navy-400">No annual contract</span>
                    <span className="ml-auto text-emerald-400 font-semibold text-xs">Typani ✓</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="text-navy-400">Live demo, no signup</span>
                    <span className="ml-auto text-emerald-400 font-semibold text-xs">Typani ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Feature Comparison</h2>
            <div className="inline-flex items-center gap-3 bg-white border border-navy-200 rounded-full px-5 py-2 text-sm shadow-sm">
              <span className="text-emerald-600 font-bold">Typani</span>
              <span className="text-navy-400">{typaniPrice}</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-600 font-medium">{competitorName}</span>
              <span className="text-navy-400">{competitorPrice}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900">
                  <th className="text-left px-6 py-4 text-navy-300 font-semibold w-2/5">Feature</th>
                  <th className="text-left px-6 py-4 text-emerald-400 font-semibold w-[30%]">Typani</th>
                  <th className="text-left px-6 py-4 text-navy-300 font-semibold w-[30%]">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-navy-50/60"}
                  >
                    <td className="px-6 py-4 font-medium text-navy-800 border-b border-navy-100/60">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 border-b border-navy-100/60">
                      <CellValue value={row.typani} />
                    </td>
                    <td className="px-6 py-4 border-b border-navy-100/60">
                      <CellValue value={row.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY SWITCH ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why businesses switch to Typani
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whySwitchPoints.map((point, i) => (
              <div key={i} className="card p-8">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{point.heading}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST SECTION ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              Where {competitorName} wins
            </h2>
            <p className="text-navy-600 text-sm mb-6">
              We are not the right fit for everyone. Here is where {competitorName} has a genuine edge:
            </p>
            <ul className="space-y-4">
              {competitorWins.map((win, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                  <span className="text-navy-700 text-sm leading-relaxed">{win}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try Typani free — no card needed
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Paste a real review on our homepage and see a real response in 10 seconds. No signup required to try.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/signup"
              className="inline-block bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg"
            >
              Start Free
            </a>
            <a
              href="/#demo"
              className="inline-block bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-800 transition-colors text-lg"
            >
              See Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-navy-100">
        <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-4">
          Related comparisons
        </p>
        <div className="flex flex-wrap gap-4">
          {relatedLinks.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              {r.label} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
