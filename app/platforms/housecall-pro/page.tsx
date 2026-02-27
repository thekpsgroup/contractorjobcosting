import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Housecall Pro Job Costing Setup",
  description:
    "Using Housecall Pro? We install job costing on top of your HCP setup — scoreboard, rules, and weekly profit meeting — in 30 days.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/platforms/housecall-pro`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/platforms/housecall-pro`,
    title: "Job Costing for Housecall Pro Users",
    description:
      "Housecall Pro manages your field ops. Our install makes sure you know if those jobs made money.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Housecall Pro Job Costing Setup",
    description: "Using Housecall Pro? We install job costing on top of your HCP setup — scoreboard, rules, and weekly profit meeting — in 30 days.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Housecall Pro", item: `${siteConfig.siteUrl}/platforms/housecall-pro` },
  ],
};

export default function HousecallProPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Platform · Housecall Pro
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Job Costing for Housecall Pro Users
          </h1>
          <p className="text-subhead text-muted max-w-2xl">
            Housecall Pro runs your scheduling, dispatching, and invoicing. It
            doesn&apos;t tell you whether you made money on each job. That&apos;s
            what we build.
          </p>
        </div>
      </section>

      {/* ── HCP context ──────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                What Housecall Pro Does Well
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Housecall Pro is designed for high-volume service businesses —
                HVAC, plumbing, electrical, and similar trades that run many
                smaller jobs per week. Scheduling, GPS dispatch, customer
                follow-up, and invoicing are all strong.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The gap is the same as with most field service platforms: it
                captures revenue well, but it doesn&apos;t give you job-level
                cost data in a format you can review and act on. You see what
                you billed. You don&apos;t see what that job actually cost.
              </p>
            </div>
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Where the Gap Is
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "HCP shows revenue and customer data. Job-level profit requires more.",
                  "Labor costs tied to specific jobs don't flow automatically into a P&L view.",
                  "Materials and parts used on a job often don't reconcile cleanly to accounting.",
                  "HCP's reporting tells you about customers and jobs — not about margins.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we configure / don't ────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                What We Configure
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                We build the costing layer between Housecall Pro and your
                accounting system:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Job cost export and reconciliation workflow from HCP to accounting",
                  "Cost coding rules for labor, parts, and materials per job",
                  "HCP job status triggers for invoice timing (milestone-based billing)",
                  "Weekly review cadence tied to your HCP job completion data",
                  "Profit-per-job scoreboard view pulled from reconciled accounting data",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span
                      className="mt-1 w-4 h-4 shrink-0 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="text-amber-500" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4l1.5 1.5 3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-4">
                What We Don&apos;t Do
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Clear scope boundaries:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "We don't resell Housecall Pro or set up new HCP accounts",
                  "We don't provide HCP technical support or platform training",
                  "We don't reconfigure your HCP job or service templates",
                  "We don't replace Housecall Pro — we build on top of it",
                  "We don't manage your HCP account on an ongoing basis",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-2 text-sm leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-line shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Referral ─────────────────────────────────────────────────────── */}
      {siteConfig.affiliateLinks.housecallPro && (
        <section className="section border-b border-line">
          <div className="container">
            <div className="border border-line p-8 max-w-2xl">
              <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-3">
                Don&apos;t Have Housecall Pro Yet?
              </p>
              <p className="text-muted text-xs mb-4">
                <span className="font-bold">Affiliate disclosure:</span> We are
                a PartnerStack affiliate for Housecall Pro and may earn a
                commission if you sign up through the link below, at no
                additional cost to you. We are not an official or authorized
                Housecall Pro partner.
              </p>
              <a
                href={siteConfig.affiliateLinks.housecallPro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-amber-500 text-amber-500 font-bold text-sm px-6 py-3 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Learn More About Housecall Pro →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t-2 border-amber-500 pt-10">
            <div>
              <h2 className="text-fg font-bold text-2xl mb-2">
                Want to see this on top of your HCP workflow?
              </h2>
              <p className="text-muted text-sm max-w-lg">
                Book a 30-minute call. We&apos;ll look at your current HCP
                setup and tell you what the install would cover.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <BookCallLink
                source="platform-hcp"
                className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors text-center"
              >
                Book a Call
              </BookCallLink>
              <Link
                href="/offer"
                className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors text-center"
              >
                See the Full Offer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
