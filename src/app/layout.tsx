import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Reviewly — AI Review Response Generator",
  description: "Generate thoughtful, personalized responses to Google reviews in seconds. Not generic AI slop — real responses that sound like you.",
  verification: {
    google: "-KSVZVUBBqLmOjFo7WMUs-njzctGSF7Tp5q_wr5Wqg0",
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
    title: "Reviewly — AI Review Response Generator",
    description: "Generate professional responses to Google reviews in seconds. Free to start.",
    url: "https://thereviewly.io",
    siteName: "Reviewly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reviewly — AI Review Response Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviewly — AI Review Response Generator",
    description: "Generate professional responses to Google reviews in seconds. Free to start.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-1">{children}</main>

        <footer className="bg-navy-900 text-navy-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="mb-3">
                  <img src="/brand/reviewly-logo-dark.svg" alt="Reviewly" width={130} height={36} className="h-9 w-auto" />
                </div>
                <p className="text-sm text-navy-400 mb-4">
                  AI-powered review responses that sound like you, not a robot.
                </p>
                <p className="text-xs text-navy-500">
                  © {new Date().getFullYear()} Reviewly. All rights reserved.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <div className="space-y-2 text-sm">
                  <a href="/#pricing" className="block hover:text-white transition-colors">Pricing</a>
                  <a href="/#demo" className="block hover:text-white transition-colors">Live Demo</a>
                  <a href="/uses" className="block hover:text-white transition-colors">Use Cases</a>
                  <a href="/blog" className="block hover:text-white transition-colors">Blog</a>
                  <a href="/contact" className="block hover:text-white transition-colors">Contact</a>
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
