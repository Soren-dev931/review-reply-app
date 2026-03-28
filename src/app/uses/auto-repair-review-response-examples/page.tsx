import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export function generateMetadata(): Metadata {
  return {
    title: "Auto Repair Review Response Examples — Replies for Shops | Typani",
    description: "Auto repair review response examples for pricing, repair quality, and turnaround time. Generate mechanic shop review replies in 10 seconds.",
  };
}

export default function AutoRepairReviewResponseExamples() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Auto Repair Shops
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5">
              Auto Repair Review Response Examples
            </h1>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              In an industry built on trust, your response to a bad review is
              more powerful than the review itself. Typani generates
              professional replies for pricing complaints, repair quality issues,
              and 5-star shoutouts — in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/signup" className="btn-primary">
                Try Free — No Card Needed
              </a>
              <a href="/#demo" className="btn-outline">
                See a Live Demo
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy-100">
            <Image
              src="/images/screenshots/dashboard-main.webp"
              alt="Typani dashboard — auto repair review response management"
              width={720}
              height={480}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-400">10s</p>
              <p className="text-navy-300 text-sm mt-1">avg response time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-400">500+</p>
              <p className="text-navy-300 text-sm mt-1">businesses using Typani</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-400">4.8★</p>
              <p className="text-navy-300 text-sm mt-1">avg rating improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: What customers mention ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <Image
              src="/images/screenshots/reviews-dashboard.webp"
              alt="Review monitoring dashboard for auto repair shops"
              width={720}
              height={480}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              What Customers Mention in Auto Repair Reviews
            </h2>
            <p className="text-navy-600 mb-6">
              Every auto repair review tends to hit the same topics. Typani
              picks up on the details and writes a response that actually
              addresses what was said.
            </p>
            <ul className="space-y-3">
              {[
                "Pricing — were costs explained upfront?",
                "Repair quality — did the fix hold?",
                "Turnaround time — was it done when promised?",
                "Communication during the repair",
                "Honesty — did they upsell unnecessary work?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EXAMPLE: Pricing complaint ───────────────────────────────────── */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">
              Real Examples — See What Typani Generates
            </h2>
            <p className="text-navy-600 max-w-xl mx-auto">
              Paste any review, get a reply that sounds like a real shop owner —
              not a corporate template.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Negative example */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⭐⭐</span>
                <span className="text-sm font-semibold text-navy-500 uppercase tracking-wide">Customer Review</span>
              </div>
              <p className="text-navy-700 italic text-lg leading-relaxed mb-6">
                "Came in for brakes and left with a $900 bill. They added stuff
                I didn't ask for. Felt like I got taken advantage of."
              </p>
              <div className="border-t border-navy-100 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Typani Response</span>
                </div>
                <p className="text-navy-700 leading-relaxed">
                  "I understand the frustration — a higher-than-expected bill
                  doesn't feel good. Our tech found additional issues during the
                  brake job and should have called before proceeding. That's our
                  policy, and I'm sorry it wasn't followed. Please reach out so
                  we can review the invoice together."
                </p>
              </div>
            </div>

            {/* Positive example */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⭐⭐⭐⭐⭐</span>
                <span className="text-sm font-semibold text-navy-500 uppercase tracking-wide">Customer Review</span>
              </div>
              <p className="text-navy-700 italic text-lg leading-relaxed mb-6">
                "Been bringing my truck here for 5 years. Mike always explains
                what's wrong and gives me options. Fair prices, honest work."
              </p>
              <div className="border-t border-navy-100 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Typani Response</span>
                </div>
                <p className="text-navy-700 leading-relaxed">
                  "Five years — that means a lot. Mike prides himself on being
                  straight with customers. We'll keep taking care of your truck.
                  Thanks for trusting us with it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: Why it matters ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Auto Shops Live and Die by Reviews
            </h2>
            <p className="text-navy-600 mb-4 leading-relaxed">
              Nobody wants to pick the wrong mechanic. Before calling, people
              read every review — especially the bad ones. Your response to a
              1-star review is read by more potential customers than the review
              itself.
            </p>
            <p className="text-navy-600 mb-6 leading-relaxed">
              Typani helps shop owners respond between jobs. No drafting, no
              wordsmithing. Paste the review, hit generate, post it.
            </p>
            <a href="/signup" className="btn-primary inline-block">
              Start Responding Free
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-100">
            <Image
              src="/images/screenshots/mobile-dashboard.webp"
              alt="Respond to auto repair reviews from your phone with Typani"
              width={720}
              height={480}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Generate your first response in 10 seconds
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

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-navy-100">
        <p className="text-sm font-semibold text-navy-500 uppercase tracking-wide mb-4">Related</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/uses/car-dealership-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Car Dealership Review Response Examples →
          </Link>
          <Link href="/uses/negative-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Negative Review Response Examples →
          </Link>
          <Link href="/uses/1-star-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            1-Star Review Response Examples →
          </Link>
          <Link href="/uses/google-review-response-examples" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
            Google Review Response Examples →
          </Link>
        </div>
      </section>

    </div>
  );
}
