import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "QuickBooks Job Costing — ProAdvisor Gold",
  description:
    "QuickBooks ProAdvisor Gold firm. We configure job costing inside your QB file and can provision and manage QBO, QB Payments, QB Payroll, and QB Time.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/platforms/quickbooks`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/platforms/quickbooks`,
    title: "Job Costing for QuickBooks Users — QuickBooks ProAdvisor Gold",
    description:
      "QuickBooks ProAdvisor Gold firm. We configure job costing in your QB file and can provision and manage your QB subscriptions.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "QuickBooks", item: `${siteConfig.siteUrl}/platforms/quickbooks` },
  ],
};

export default function QuickBooksPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                Platform · QuickBooks
              </p>
              <h1 className="text-display text-fg mb-6 max-w-3xl">
                Job Costing for QuickBooks Users
              </h1>
              <p className="text-subhead text-muted max-w-2xl">
                QuickBooks has job costing features built in. Most contractors
                have them enabled and never use them consistently. We build the
                system that makes them work — and we can provision your QB
                subscription if you&apos;re starting from scratch.
              </p>
            </div>
            {/* ProAdvisor Badge */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
              <Image
                src="/proadvisor-gold-badge.png"
                alt="QuickBooks ProAdvisor Gold badge — The KPS Group"
                width={160}
                height={160}
                className="w-32 lg:w-40"
                priority
              />
              <p className="text-muted-2 text-xs max-w-40 lg:text-right">
                The KPS Group holds QuickBooks ProAdvisor Gold status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ProAdvisor credentials ───────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Our QuickBooks Credentials
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            ProAdvisor Gold. We work inside QB files every day.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-line">
            {[
              {
                heading: "QuickBooks ProAdvisor Gold",
                body: "Intuit's professional certification for firms that work extensively with QuickBooks. Gold tier requires certified competency across QBO and is maintained through annual recertification.",
              },
              {
                heading: "QuickBooks Online Accountant",
                body: "We manage client QuickBooks files through the QBOA portal. This gives us accountant-level access to configure, audit, and maintain your QB setup — not just view-only.",
              },
              {
                heading: "ProAdvisor Preferred Pricing",
                body: "As a Gold ProAdvisor, we can provision your QBO subscription under our firm's wholesale billing. You get a permanent 30% discount versus direct pricing, with no 12-month expiry.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="py-8 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <h3 className="text-fg font-bold text-base mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QB context ───────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                The QuickBooks Reality
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                QuickBooks Online has job costing built in — class tracking,
                project costing, Job Profitability Detail reports. These
                features are mature and capable. Most contractors have them
                turned on and have never gotten them to work consistently.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The problem isn&apos;t the software. No one set up the cost
                coding rules, no one defined who enters what, and no one built
                the weekly review habit that turns data into decisions. The
                features exist. The system doesn&apos;t. That&apos;s what we
                build.
              </p>
            </div>
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Common Patterns We See
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Job costing is enabled but most expenses are coded to overhead, not jobs",
                  "Class tracking is on but used inconsistently — or not at all",
                  "The Job Profitability Detail report runs but no one reviews it weekly",
                  "Labor costs aren't allocated to specific jobs",
                  "Subcontractor bills are entered without job codes",
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

      {/* ── What we configure ────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Job Costing — What We Configure
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                We work directly inside your QuickBooks file:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Job or class tracking setup (or audit of your existing setup)",
                  "COGS category structure for labor, materials, and subcontractors",
                  "Job costing rules — written documentation of what gets coded where",
                  "Job Profitability Detail report configured for weekly review",
                  "Weekly review cadence tied to your QB reporting schedule",
                  "Billing timing rules that reduce the gap between job close and invoice",
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
                Clear scope boundaries for the job costing install:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Bookkeeping cleanup or catch-up (needs to happen before we start)",
                  "Tax preparation or filing",
                  "Running payroll or processing payroll (we can set up the subscription, not run it)",
                  "Day-to-day transaction data entry",
                  "QuickBooks technical support or end-user training",
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

      {/* ── QB Subscription Provisioning ─────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Starting Fresh with QuickBooks?
          </p>
          <h2 className="text-headline text-fg mb-4 max-w-xl">
            We can provision and manage your QuickBooks subscription.
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-12 max-w-2xl">
            If you&apos;re not on QuickBooks yet — or you&apos;re switching
            platforms — we can set up your account through our ProAdvisor
            QBOA portal. This gives you a permanent 30% discount on your
            subscription and keeps our firm as the managing accountant on
            your account.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                product: "QuickBooks Online",
                tiers: "Simple Start · Essentials · Plus · Advanced",
                note: "The accounting foundation. Required for job costing.",
                canProvision: true,
              },
              {
                product: "QB Payments",
                tiers: "Integrated payment processing",
                note: "Adds ACH and card payment acceptance directly inside QBO invoices.",
                canProvision: true,
              },
              {
                product: "QB Payroll",
                tiers: "Core · Premium · Elite",
                note: "We set up the subscription and configure it. You or your bookkeeper runs payroll.",
                canProvision: true,
              },
              {
                product: "QB Time",
                tiers: "Premium · Elite",
                note: "Time tracking for field crews. Integrates with QBO for labor cost coding.",
                canProvision: true,
              },
            ].map(({ product, tiers, note }) => (
              <div
                key={product}
                className="border border-line bg-surface p-6"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-fg font-bold text-base leading-snug">{product}</h3>
                  <span
                    className="mt-0.5 w-4 h-4 shrink-0 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center"
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
                </div>
                <p className="text-muted-2 text-xs uppercase tracking-wider mb-3">{tiers}</p>
                <p className="text-muted text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-amber-500/20 bg-amber-500/5 p-6 max-w-2xl">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
              ProAdvisor Preferred Pricing
            </p>
            <p className="text-muted text-sm leading-relaxed">
              When we provision your subscription, your firm gets a permanent
              30% discount off Intuit&apos;s standard pricing — not a
              12-month promotional rate. You pay us; we handle the Intuit
              billing. Pricing and exact discount are confirmed during your
              discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* ── Messy books note ─────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <div className="border border-line p-8 max-w-2xl">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
              A Note on Book Condition
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              To install job costing, we need your QuickBooks file to be
              reasonably current — not perfect, but not 18 months behind.
              If your books need significant cleanup first, we&apos;ll tell
              you during the discovery call and can refer you to a bookkeeper.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Don&apos;t let messy books stop you from booking a call.
              We&apos;ll tell you exactly where you stand.
            </p>
          </div>
        </div>
      </section>

      {/* ── ProAdvisor badge section ──────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="flex flex-col gap-6">
              <Image
                src="/proadvisor-gold-badge.png"
                alt="QuickBooks ProAdvisor Gold — The KPS Group"
                width={120}
                height={120}
                className="w-24"
              />
              <div>
                <p className="text-fg font-bold text-base mb-2">
                  The KPS Group — QuickBooks ProAdvisor Gold
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Gold tier ProAdvisor status is earned and maintained through
                  annual QuickBooks certification exams administered by Intuit.
                  It is not a paid sponsorship or a reseller designation.
                </p>
              </div>
            </div>
            <div className="border border-line p-8">
              <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-3">
                QuickBooks.com
              </p>
              <p className="text-muted text-sm leading-relaxed mb-5">
                If you&apos;re evaluating QuickBooks Online directly, the link
                below goes to Intuit. We don&apos;t earn a referral commission
                on direct QB subscriptions.
              </p>
              <a
                href={siteConfig.affiliateLinks.quickbooks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-amber-500 text-amber-500 font-bold text-sm px-6 py-3 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                QuickBooks.com →
              </a>
              <p className="mt-4 text-muted-2 text-xs">
                Direct link, no referral parameter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t-2 border-amber-500 pt-10">
            <div>
              <h2 className="text-fg font-bold text-2xl mb-2">
                Already on QuickBooks? Starting fresh? Either way.
              </h2>
              <p className="text-muted text-sm max-w-lg">
                Book a 30-minute call. We&apos;ll look at your situation —
                existing setup or new subscription — and tell you exactly what
                the job costing install would involve.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <BookCallLink
                source="platform-qb"
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
