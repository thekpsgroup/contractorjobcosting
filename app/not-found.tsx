import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section-lg">
      <div className="container">
        <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
          404
        </p>
        <h1 className="text-display text-fg mb-6 max-w-xl">
          Page not found.
        </h1>
        <p className="text-muted text-lg mb-10 max-w-lg">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Try one of the links below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/"
            className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-line pt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { href: "/offer", label: "The Offer" },
            { href: "/proof", label: "Outcomes" },
            { href: "/about", label: "About" },
            { href: "/platforms/jobber", label: "Jobber" },
            { href: "/platforms/housecall-pro", label: "Housecall Pro" },
            { href: "/platforms/quickbooks", label: "QuickBooks" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted text-sm hover:text-amber-500 transition-colors"
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
