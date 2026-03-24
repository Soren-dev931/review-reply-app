import type { Metadata } from "next";
import "./globals.css";

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
        <nav className="border-b border-navy-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span className="text-xl font-bold text-navy-900">Reviewly</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="text-navy-600 hover:text-navy-900 font-medium text-sm transition-colors"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="btn-primary text-sm !px-4 !py-2"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="bg-navy-900 text-navy-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
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
                  <a href="/#faq" className="block hover:text-white transition-colors">FAQ</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Account</h4>
                <div className="space-y-2 text-sm">
                  <a href="/login" className="block hover:text-white transition-colors">Log in</a>
                  <a href="/signup" className="block hover:text-white transition-colors">Sign up</a>
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
