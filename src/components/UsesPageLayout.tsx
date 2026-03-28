import Link from "next/link";
import Image from "next/image";

export interface ReviewExample {
  stars: number; // 1-5
  review: string;
  response: string;
}

export interface UsesPageProps {
  // SEO / heading
  badge: string; // e.g. "Auto Repair Shops"
  h1: string;
  tagline: string; // 1-2 sentences under h1

  // Hero CTA
  primaryCta?: string; // default "Try Free — No Card Needed"
  secondaryCta?: string; // default "See a Live Demo"

  // Feature section
  featureHeading: string;
  featureBody: string;
  featurePoints: string[];

  // Examples
  examplesHeading?: string; // default "Real Examples — See What Typani Generates"
  examplesSubtitle?: string;
  examples: [ReviewExample, ReviewExample]; // exactly 2 — negative + positive

  // Why it matters section
  whyHeading: string;
  whyBody: string[]; // array of paragraphs

  // Images — use only real screenshots from /images/screenshots/
  heroImage: string;
  featureImage: string;
  mobileImage: string;
  heroImageAlt: string;
  featureImageAlt: string;
  mobileImageAlt: string;

  // Related links
  related: { href: string; label: string }[];
}

function StarRow({ count }: { count: number }) {
  return <span>{Array.from({ length: count }, (_, i) => "⭐").join("")}</span>;
}

export default function UsesPageLayout(props: UsesPageProps) {
  const {
    badge,
    h1,
    tagline,
    primaryCta = "Try Free — No Card Needed",
    featureHeading,
    featureBody,
    featurePoints,
    examplesHeading = "Real Examples — See What Typani Generates",
    examplesSubtitle = "Paste any review, get a reply that sounds like a real business owner — not a corporate template.",
    examples,
    whyHeading,
    whyBody,
    heroImage,
    featureImage,
    mobileImage,
    heroImageAlt,
    featureImageAlt,
    mobileImageAlt,
    related,
  } = props;

  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5">
              {h1}
            </h1>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/signup" className="btn-primary">
                {primaryCta}
              </a>
              <a href="/#demo" className="btn-outline">
                See a Live Demo
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy-100">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={720}
              height={480}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── FEATURE ROW ──────────────────────────────────────────────────── */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
              <Image
                src={featureImage}
                alt={featureImageAlt}
                width={720}
                height={480}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                {featureHeading}
              </h2>
              <p className="text-navy-600 mb-6 leading-relaxed">{featureBody}</p>
              <ul className="space-y-3">
                {featurePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span className="text-navy-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-3">{examplesHeading}</h2>
          <p className="text-navy-600 max-w-xl mx-auto">{examplesSubtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <StarRow count={ex.stars} />
                <span className="text-sm font-semibold text-navy-500 uppercase tracking-wide">
                  Customer Review
                </span>
              </div>
              <p className="text-navy-700 italic text-lg leading-relaxed mb-6">
                "{ex.review}"
              </p>
              <div className="border-t border-navy-100 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                    Typani Response
                  </span>
                </div>
                <p className="text-navy-700 leading-relaxed">"{ex.response}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────────────── */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">{whyHeading}</h2>
              {whyBody.map((para, i) => (
                <p key={i} className="text-navy-600 mb-4 leading-relaxed">
                  {para}
                </p>
              ))}
              <a href="/signup" className="btn-primary inline-block mt-2">
                Start Responding Free
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
              <Image
                src={mobileImage}
                alt={mobileImageAlt}
                width={720}
                height={480}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Generate your first response in seconds
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Free to start. No credit card. Works on any Google review.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg"
          >
            Try Typani Free
          </a>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-navy-100">
        <p className="text-sm font-semibold text-navy-500 uppercase tracking-wide mb-4">
          Related
        </p>
        <div className="flex flex-wrap gap-4">
          {related.map((r) => (
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
