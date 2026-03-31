import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Typani — AI Review Response Generator",
  description: "Generate thoughtful, personalized responses to Google reviews in seconds. Not generic AI slop — real responses that sound like you.",
  verification: {
    google: "41KJOkAHzcKGRIB6I2CtIbliIK_fmn999c73Jm6gExY",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Typani — AI Review Response Generator",
    description: "Generate professional responses to Google reviews in seconds. Free to start.",
    url: "https://typani.com",
    siteName: "Typani",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Typani — AI Review Response Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typani — AI Review Response Generator",
    description: "Generate professional responses to Google reviews in seconds. Free to start.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Typani",
  "url": "https://typani.com",
  "logo": "https://typani.com/brand/typani-logo-square.png",
  "description": "AI-powered review response tool for local businesses. Automatically reply to every Google review with personalized, on-brand responses.",
  "email": "support@typani.com",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61574439053590",
    "https://x.com/Typaniapp",
    "https://www.instagram.com/typaniapp",
    "https://www.linkedin.com/company/typani/",
    "https://www.youtube.com/@Typaniapp"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <NavBar />

        <main className="flex-1">{children}</main>

        <footer className="bg-navy-900 text-navy-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="mb-3">
                  <img src="/brand/typani-logo-dark.svg" alt="Typani" width={130} height={36} className="h-9 w-auto" />
                </div>
                <p className="text-sm text-navy-400 mb-4">
                  AI-powered review responses that sound like you, not a robot.
                </p>
                <p className="text-xs text-navy-500 mb-4">
                  © {new Date().getFullYear()} Typani. All rights reserved.
                </p>
                <div className="flex gap-3">
                  <a href="https://x.com/Typaniapp" target="_blank" rel="noopener noreferrer" aria-label="Typani on X" className="text-navy-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61574439053590" target="_blank" rel="noopener noreferrer" aria-label="Typani on Facebook" className="text-navy-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/typaniapp" target="_blank" rel="noopener noreferrer" aria-label="Typani on Instagram" className="text-navy-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/typani/" target="_blank" rel="noopener noreferrer" aria-label="Typani on LinkedIn" className="text-navy-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@Typaniapp" target="_blank" rel="noopener noreferrer" aria-label="Typani on YouTube" className="text-navy-400 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <div className="space-y-2 text-sm">
                  <a href="/#pricing" className="block hover:text-white transition-colors">Pricing</a>
                  <a href="/#demo" className="block hover:text-white transition-colors">Live Demo</a>
                  <a href="/uses" className="block hover:text-white transition-colors">Use Cases</a>
                  <a href="/blog" className="block hover:text-white transition-colors">Blog</a>
                  <a href="/contact" className="block hover:text-white transition-colors">Contact</a>
                  <a href="/alternatives" className="block hover:text-white transition-colors">Compare Tools</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Industries</h4>
                <div className="space-y-2 text-sm">
                  <a href="/uses/restaurant-review-response-examples" className="block hover:text-white transition-colors">Restaurants</a>
                  <a href="/uses/hotel-review-response-examples" className="block hover:text-white transition-colors">Hotels</a>
                  <a href="/uses/dental-review-response-examples" className="block hover:text-white transition-colors">Dental</a>
                  <a href="/uses/salon-review-response-examples" className="block hover:text-white transition-colors">Salons</a>
                  <a href="/uses/auto-repair-review-response-examples" className="block hover:text-white transition-colors">Auto Repair</a>
                  <a href="/uses" className="block text-emerald-400 hover:text-emerald-300 font-medium transition-colors">View All →</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Resources</h4>
                <div className="space-y-2 text-sm">
                  <a href="/blog/how-to-respond-to-bad-reviews-on-google" className="block hover:text-white transition-colors">How to Respond to Bad Reviews</a>
                  <a href="/blog/does-responding-to-google-reviews-help-seo" className="block hover:text-white transition-colors">Does Responding Help SEO?</a>
                  <a href="/uses/negative-review-response-template" className="block hover:text-white transition-colors">Response Templates</a>
                  <a href="/uses/review-response-examples" className="block hover:text-white transition-colors">Review Response Examples</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Legal</h4>
                <div className="space-y-2 text-sm">
                  <a href="/terms" className="block hover:text-white transition-colors">Terms of Service</a>
                  <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/cookies" className="block hover:text-white transition-colors">Cookie Policy</a>
                  <a href="/contact" className="block hover:text-white transition-colors">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
