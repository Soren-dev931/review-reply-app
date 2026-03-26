import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Reviewly — AI Review Response Generator",
  description: "Generate thoughtful, personalized responses to Google reviews in seconds. Not generic AI slop — real responses that sound like you.",
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💬</span>
                  <span className="text-lg font-bold text-white">Reviewly</span>
                </div>
                <p className="text-sm text-navy-400">
                  AI-powered review responses that sound like you, not a robot.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <div className="space-y-2 text-sm">
                  <a href="/#pricing" className="block hover:text-white transition-colors">Pricing</a>
                  <a href="/#demo" className="block hover:text-white transition-colors">Live Demo</a>
                  <a href="/for" className="block hover:text-white transition-colors">For Businesses</a>
                  <a href="/examples" className="block hover:text-white transition-colors">Examples</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Business Types</h4>
                <div className="space-y-2 text-sm">
                  <a href="/for/restaurants" className="block hover:text-white transition-colors">Restaurants</a>
                  <a href="/for/hotels" className="block hover:text-white transition-colors">Hotels</a>
                  <a href="/for/dentists" className="block hover:text-white transition-colors">Dentists</a>
                  <a href="/for/salons" className="block hover:text-white transition-colors">Salons</a>
                  <a href="/for/auto-repair" className="block hover:text-white transition-colors">Auto Repair</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Legal</h4>
                <div className="space-y-2 text-sm">
                  <a href="/terms" className="block hover:text-white transition-colors">Terms of Service</a>
                  <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/cookies" className="block hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
            <div className="border-t border-navy-800 mt-8 pt-8 text-sm text-navy-500">
              © {new Date().getFullYear()} Reviewly. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
