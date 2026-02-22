import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing for Jobber Users",
  description:
    "Already using Jobber? Here's what we configure, what we don't touch, and why job costing still requires our install even with Jobber.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/platforms/jobber`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/platforms/jobber`,
    title: "Job Costing for Jobber Users",
    description:
      "Jobber tracks your jobs. Our install makes sure you know if you made money on them.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Jobber", item: `${siteConfig.siteUrl}/platforms/jobber` },
  ],
};

export default function JobberPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Platform · Jobber
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Job Costing for Jobber Users
          </h1>
          <p className="text-subhead text-muted max-w-2xl">
            You&apos;re using Jobber to dispatch, quote, and invoice. That
            handles operations. Here&apos;s what still needs to happen for you
            to know if you&apos;re making money on each job.
          </p>
        </div>
      </section>

      {/* ── Jobber context ───────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                What Jobber Does Well
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Jobber is built for field service operations. It handles job
                scheduling, technician dispatch, customer communication, quoting,
                and invoicing. For most trades businesses under $5M, it&apos;s
                a solid operations platform.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The gap: Jobber is an operations tool, not an accounting or
                job costing tool. It can produce job-level revenue data. It
                doesn&apos;t give you job-level cost data — labor hours by job,
                materials per job, subcontractor costs per job — in a format
                you can actually review weekly and act on.
              </p>
            </div>
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Where the Gap Is
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Jobber shows what you invoiced. Not what each job cost.",
                  "Labor time entries in Jobber don't automatically flow into your job P&L.",
                  "Materials and subs tracked in Jobber rarely reconcile cleanly to accounting.",
                  "There's no weekly profit review built into Jobber's workflow.",
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
                We work within your Jobber + accounting stack to build the
                costing layer:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Job cost export workflow from Jobber to your accounting system",
                  "Cost coding rules: what labor, materials, and subs get coded to which jobs",
                  "Weekly reconciliation check between Jobber job data and accounting job records",
                  "Profit-per-job scoreboard view using reconciled data",
                  "Billing cadence rules based on Jobber job status milestones",
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
                We want to be clear about scope:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "We don't resell Jobber or set up new Jobber accounts",
                  "We don't provide Jobber technical support or training",
                  "We don't replace your Jobber subscription with something else",
                  "We don't reconfigure your Jobber workflow or job templates",
                  "We don't sync Jobber to QuickBooks for you (we build the process, you or your team runs it)",
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
      {siteConfig.affiliateLinks.jobber && (
        <section className="section border-b border-line">
          <div className="container">
            <div className="border border-line p-8 max-w-2xl">
              <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-3">
                Don&apos;t Have Jobber Yet?
              </p>
              <p className="text-muted text-xs mb-4">
                <span className="font-bold">Affiliate disclosure:</span> We are
                a PartnerStack affiliate for Jobber and may earn a commission if
                you sign up through the link below, at no additional cost to
                you. We are not an official or authorized Jobber partner.
              </p>
              <a
                href={siteConfig.affiliateLinks.jobber}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-amber-500 text-amber-500 font-bold text-sm px-6 py-3 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Learn More About Jobber →
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
                Ready to see how this works with your Jobber setup?
              </h2>
              <p className="text-muted text-sm max-w-lg">
                Book a 30-minute call. We&apos;ll look at your current workflow
                and tell you exactly what the install would cover.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <BookCallLink
                source="platform-jobber"
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
