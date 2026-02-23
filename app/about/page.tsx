import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "About Us — The KPS Group",
  description:
    "Contractor Job Costing is a service of The KPS Group. We build job costing and cash flow systems for owner-led contractors to run on real numbers.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/about`,
    title: "About — Contractor Job Costing by The KPS Group",
    description:
      "Contractor Job Costing is a service of The KPS Group. Built for owner-led contractors who are done guessing.",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.siteUrl}/about#aboutpage`,
  name: "About Contractor Job Costing",
  url: `${siteConfig.siteUrl}/about`,
  description:
    "Contractor Job Costing is a service of The KPS Group. We work with owner-led contractors to build the job costing and cash flow systems that let owners run on real numbers.",
  mainEntity: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            About
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            The KPS Group — built on real contractor numbers.
          </h1>
          <p className="text-subhead text-muted max-w-2xl">
            Contractor Job Costing is a service of The KPS Group.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="prose-contractor">
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                Why This Exists
              </h2>
              <p>
                The KPS Group works with owner-led businesses on the financial
                and operational systems that let owners build something durable
                — and step back from the day-to-day grind of guessing.
              </p>
              <p>
                Job costing is the thing most contractors avoid because it
                sounds like more administrative work. The reality is different:
                without job-level costing, you&apos;re making pricing, hiring,
                and growth decisions without real information. You&apos;re
                working off gut feel, averaged annual numbers, and optimistic
                estimates.
              </p>
              <p>
                We built this service to solve that specifically. Not a
                consulting engagement that produces a report. Not a software
                recommendation with a referral link. A working system, installed
                inside your business, in 30 days — with the rules, the cadence,
                and the meeting structure to keep it running.
              </p>
              <p>
                The contractors who get the most out of this aren&apos;t the
                ones with the worst books. They&apos;re the ones who are growing
                and don&apos;t trust their numbers. Revenue is up. The business
                feels busy. But they can&apos;t answer the question that matters:
                &ldquo;Are we making money on the right work?&rdquo;
              </p>
            </div>

            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                What We Are — and Are Not
              </h2>
              <div className="flex flex-col gap-0 divide-y divide-line">
                {[
                  {
                    label: "We are",
                    items: [
                      "Implementation specialists",
                      "Financial systems builders",
                      "Operators who work in contractor businesses",
                      "Direct, honest about fit",
                    ],
                  },
                  {
                    label: "We are not",
                    items: [
                      "A bookkeeping firm",
                      "A software reseller",
                      "General business consultants",
                      "A CFO service",
                    ],
                  },
                ].map(({ label, items }) => (
                  <div key={label} className="py-6">
                    <p className="text-fg text-sm font-bold mb-4">{label}:</p>
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-muted text-sm"
                        >
                          <span
                            className="w-1 h-1 rounded-full bg-amber-500 shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work With ──────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Who We Work With
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            Owner-led contractors doing $750K–$8M in annual revenue.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="prose-contractor">
              <p>
                Typically trades businesses — electrical, HVAC, plumbing,
                mechanical, remodeling, roofing, and similar. Owner-operated,
                with a small management team and a real operations challenge.
              </p>
              <p>
                Revenue range matters because below $750K, the overhead of a
                formal job costing system usually isn&apos;t worth it. Above
                $8M, you likely need a full-time financial operator — not a
                30-day install.
              </p>
            </div>
            <div className="prose-contractor">
              <p>
                The client who gets the most out of this service is usually
                running between $1.5M and $5M, has 5–20 employees or
                subcontractors, and has never had a consistent way to see
                job-level profit.
              </p>
              <p>
                They&apos;re not disorganized — they&apos;re just running on the
                wrong information. The install fixes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legal Attribution ────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="border border-line p-8 max-w-2xl">
            <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-4">
              Legal Attribution
            </p>
            <p className="text-fg text-sm leading-relaxed">
              Contractor Job Costing is a service of The KPS Group. All
              engagements are conducted under The KPS Group&apos;s standard
              service agreement. We are a PartnerStack partner for Jobber and
              Housecall Pro. Where referral links appear on this site, we may
              earn a commission at no additional cost to you. We are not
              certified, officially authorized, or exclusively affiliated with
              any software platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t-2 border-amber-500 pt-10">
            <div>
              <h2 className="text-fg font-bold text-2xl mb-2">
                Ready to talk?
              </h2>
              <p className="text-muted text-sm max-w-lg">
                Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
                explain what the install looks like for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <BookCallLink
                source="about-cta"
                className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
              >
                Book a Call
              </BookCallLink>
              <Link
                href="/contact"
                className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
