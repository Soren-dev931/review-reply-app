import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Blog — Review Response Tips and Guides | Reviewly",
    description: "Practical guides on responding to Google reviews, improving local SEO, and handling customer feedback. Tips for every business owner.",
  };
}

const posts = [
  {
    href: "/blog/how-to-respond-to-bad-reviews-on-google",
    title: "How to Respond to Bad Reviews on Google",
    description: "A step-by-step approach to handling negative reviews without getting defensive. With examples.",
  },
  {
    href: "/blog/does-responding-to-google-reviews-help-seo",
    title: "Does Responding to Google Reviews Help SEO?",
    description: "Yes. Google confirms it. Here's how review responses affect your local search ranking.",
  },
  {
    href: "/blog/how-to-respond-to-positive-reviews",
    title: "How to Respond to Positive Reviews",
    description: "Most businesses get this wrong. Learn to write warm, specific replies that build loyalty.",
  },
];

export default function BlogHub() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-4">
        Blog
      </h1>
      <p className="text-lg text-navy-700 mb-12">
        Practical guides on responding to reviews, improving local SEO, and managing your online reputation.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="block card p-6 hover:border-emerald-300 transition-colors">
            <h2 className="text-xl font-bold text-navy-900 mb-2">{post.title}</h2>
            <p className="text-navy-600">{post.description}</p>
            <span className="text-emerald-600 font-medium text-sm mt-3 inline-block">Read →</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-navy-600 mb-4">Want to see Reviewly in action?</p>
        <a href="/#demo" className="btn-primary inline-block">
          Generate a Response Free
        </a>
      </div>

      <div className="border-t border-navy-100 pt-8 mt-12">
        <p className="text-sm text-navy-500 mb-2">Browse by use case:</p>
        <Link href="/uses" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
          AI Review Responses for Every Business →
        </Link>
      </div>
    </div>
  );
}
