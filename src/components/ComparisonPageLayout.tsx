import Link from "next/link";
import type { Metadata } from "next";

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

function CellValue({ val }: { val: boolean | string }) {
  if (val === true)
    return <span className="font-semibold text-emerald-600">Yes</span>;
  if (val === false)
    return <span className="text-navy-400">No</span>;
  return <span className="text-navy-700">{val}</span>;
}

export default function ComparisonPageLayout(props: ComparisonPageProps) {
  const {
    competitorName,
    headline,
    subheadline,
    typaniPrice,
    competitorPrice,
    comparisonRows,
    whySwitchPoints,
    competitorWins,
    relatedLinks,
  } = props;

  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-full mb-5">
                Typani vs {competitorName}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {headline}
              </h1>
              <p className="text-navy-300 text-lg leading-relaxed mb-8">
                {subheadline}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/signup" className="btn-primary">
                  Try Free — No Card Needed
                </a>
                <a
                  href="/#demo"
                  className="btn-outline !border-navy-600 !text-navy-300 hover:!text-white hover:!border-emerald-500"
                >
                  See Live Demo
                </a>
              </div>
            </div>

            {/* VS Badge */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 shadow-2xl w-full max-w-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center flex-1">
                    <div className="text-xs text-navy-400 uppercase tracking-widest mb-2 font-semibold">You get</div>
                    <div className="text-2xl font-extrabold text-emerald-400">Typani</div>
                    <div className="mt-2 text-sm font-bold text-emerald-300">{typaniPrice}</div>
                  </div>
                  <div className="text-3xl font-black text-navy-500 flex-shrink-0">vs</div>
                  <div className="text-center flex-1">
                    <div className="text-xs text-navy-400 uppercase tracking-widest mb-2 font-semibold">Comparing</div>
                    <div className="text-2xl font-extrabold text-navy-300">{competitorName}</div>
                    <div className="mt-2 text-sm font-bold text-navy-400">{competitorPrice}</div>
                  </div>
                </div>
                <div className="mt-6 border-t border-navy-700 pt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold">No contract</div>
                    <div className="text-navy-500 text-xs mt-0.5">Typani</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold">Free to start</div>
                    <div className="text-navy-500 text-xs mt-0.5">Typani</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Feature Comparison</h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              Typani starts at <strong className="text-navy-800">{typaniPrice}</strong>. {competitorName} starts at <strong className="text-navy-800">{competitorPrice}</strong>.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-navy-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900">
                  <th className="px-6 py-4 text-left text-navy-300 font-semibold text-xs uppercase tracking-wider w-1/2">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-emerald-400 font-bold text-xs uppercase tracking-wider w-1/4">
                    Typani
                  </th>
                  <th className="px-6 py-4 text-center text-navy-300 font-semibold text-xs uppercase tracking-wider w-1/4">
                    {competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-navy-50/60"}
                  >
                    <td className="px-6 py-4 font-medium text-navy-800 border-b border-navy-100">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center border-b border-navy-100">
                      <CellValue val={row.typani} />
                    </td>
                    <td className="px-6 py-4 text-center border-b border-navy-100">
                      <CellValue val={row.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-navy-400 mt-4 text-center">
            Pricing sourced from public listings, G2, and user reviews as of early 2026. Verify with each vendor before purchasing.
          </p>
        </div>
      </section>

      {/* ── WHY SWITCH ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why businesses switch to Typani
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whySwitchPoints.map((pt) => (
              <div key={pt.heading} className="card p-8">
                <div className="text-4xl mb-4">{pt.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{pt.heading}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST SECTION ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
              Where {competitorName} wins
            </h2>
            <p className="text-navy-600 text-sm mb-6">
              We are not the right fit for every situation. Here is where {competitorName} has a genuine edge:
            </p>
            <ul className="space-y-3">
              {competitorWins.map((win, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-navy-700 text-sm leading-relaxed">{win}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try Typani free — no card, no commitment
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            5 free responses every month. Upgrade when you need more.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-navy-100">
        <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-4">
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
