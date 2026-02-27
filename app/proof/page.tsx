import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing Outcomes for Contractors",
  description:
    "Contractor outcomes after the job costing install. Margin clarity, faster invoicing, profit leak identification, and a weekly operating rhythm.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/proof`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/proof`,
    title: "Outcomes — What Contractors See After the Job Costing Install",
    description:
      "Outcome examples from contractor job costing installs. Not case studies with logos — real scenarios from real businesses.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Job Costing Outcomes for Contractors",
    description: "Contractor outcomes after the job costing install. Margin clarity, faster invoicing, profit leak identification, and a weekly operating rhythm.",
  },
};

const outcomeListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.siteUrl}/proof#itemlist`,
  name: "Contractor Job Costing Outcome Examples",
  description:
    "Real outcome scenarios from contractors who completed the 30-day job costing install — margin clarity, faster invoicing, and profit leak identification.",
  url: `${siteConfig.siteUrl}/proof`,
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Article",
        name: "Electrical Contractor — Per-Crew Profit Visibility",
        headline: "We had no idea which crews were profitable.",
        description:
          "An electrical contractor running four crews had flat margins despite growing revenue. After the install, per-crew job costing revealed service labor underpricing was masking losses. Gross margin on service work improved approximately 8 points within the following quarter.",
        author: { "@type": "Organization", "@id": `${siteConfig.siteUrl}/#organization`, name: "Contractor Job Costing" },
        datePublished: "2026-02-22",
        about: { "@id": `${siteConfig.siteUrl}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Article",
        name: "Residential Remodeler — Invoice Lag Reduced from 38 to 9 Days",
        headline: "We were invoicing 30–45 days after job completion.",
        description:
          "A residential remodeler with a strong pipeline had a cash flow problem — invoices went out 30–45 days after job completion. After implementing a milestone-based billing cadence and progress billing trigger, average invoice lag dropped from 38 days to 9 days within two billing cycles.",
        author: { "@type": "Organization", "@id": `${siteConfig.siteUrl}/#organization`, name: "Contractor Job Costing" },
        datePublished: "2026-02-22",
        about: { "@id": `${siteConfig.siteUrl}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Article",
        name: "HVAC Contractor — Materials Losses Found in Overhead",
        headline: "Materials losses were buried in overhead. We didn't know.",
        description:
          "An HVAC contractor saw consistently thin margins on new installations despite competitive estimates. Job costing rules requiring materials coded to specific jobs revealed field crews were pulling parts that never made it to the job cost record. Installation margins recovered without any change to pricing.",
        author: { "@type": "Organization", "@id": `${siteConfig.siteUrl}/#organization`, name: "Contractor Job Costing" },
        datePublished: "2026-02-22",
        about: { "@id": `${siteConfig.siteUrl}/#organization` },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Proof", item: `${siteConfig.siteUrl}/proof` },
  ],
};

export default function ProofPage() {
  return (
    <>
      <JsonLd data={[outcomeListSchema, breadcrumbSchema]} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Typical Outcomes
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            What contractors typically see after the install.
          </h1>
          <p className="text-subhead text-muted max-w-2xl">
            These aren&apos;t promises. They&apos;re the kind of outcomes that
            show up when the system gets installed correctly and the owner shows
            up to the weekly meeting.
          </p>
          <p className="mt-4 text-muted-2 text-sm">
            Business names and identifying details are not shared. Industry and
            revenue range are included for context.
          </p>
        </div>
      </section>

      {/* ── Case Vignettes ───────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-12">
            Scenario Examples
          </p>

          <div className="flex flex-col gap-0 divide-y divide-line">
            {/* Vignette 1 */}
            <article className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Industry
                  </p>
                  <p className="text-fg text-sm font-semibold">Electrical</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Revenue range
                  </p>
                  <p className="text-fg text-sm font-semibold">$2M–$4M</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Crew size
                  </p>
                  <p className="text-fg text-sm font-semibold">4 crews</p>
                </div>
                <div>
                  <h2 className="text-fg font-bold text-2xl mb-4">
                    &ldquo;We had no idea which crews were profitable.&rdquo;
                  </h2>
                  <div className="prose-contractor">
                    <p>
                      An electrical contractor running four crews had revenue
                      growing year over year but flat margins. Every crew looked
                      busy. The books showed a profit. But the owner couldn&apos;t
                      tell you which crew — or which type of work — was actually
                      making money.
                    </p>
                    <p>
                      After the install, they had a per-crew job costing report
                      pulling from their existing QuickBooks setup. Within the
                      first two weeks, a pattern emerged: their service and
                      repair work was consistently over-budget on labor. Their
                      new-construction work was hitting margins. The two were
                      averaged together, masking the problem.
                    </p>
                    <p>
                      Within 60 days of completing the install, the owner had
                      restructured how service calls were priced — increasing
                      their service rate to reflect actual labor cost. Gross
                      margin on service work improved by approximately 8 points
                      within the following quarter.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { metric: "Profit leak found", value: "Service labor underpricing" },
                      { metric: "Time to finding", value: "First 2 weeks" },
                      { metric: "Margin improvement", value: "~8 pts on service work" },
                    ].map(({ metric, value }) => (
                      <div
                        key={metric}
                        className="border border-line p-4 bg-surface"
                      >
                        <p className="text-muted-2 text-xs uppercase tracking-wider mb-1">
                          {metric}
                        </p>
                        <p className="text-fg font-bold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Vignette 2 */}
            <article className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Industry
                  </p>
                  <p className="text-fg text-sm font-semibold">Remodeling</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Revenue range
                  </p>
                  <p className="text-fg text-sm font-semibold">$1M–$2M</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Business type
                  </p>
                  <p className="text-fg text-sm font-semibold">Residential</p>
                </div>
                <div>
                  <h2 className="text-fg font-bold text-2xl mb-4">
                    &ldquo;We were invoicing 30–45 days after job completion.&rdquo;
                  </h2>
                  <div className="prose-contractor">
                    <p>
                      A residential remodeler with a strong reputation and a
                      full pipeline had a cash problem. Jobsites were finishing.
                      Final invoices were going out 30 to 45 days later — sometimes
                      longer. The owner was using accounts receivable as a
                      float, which meant payroll decisions were made on anxiety,
                      not on actual cash position.
                    </p>
                    <p>
                      The install focused heavily on the billing cadence deliverable.
                      We mapped how their jobs actually ended — punch lists,
                      owner walkthroughs, final change orders — and built a
                      billing timeline around those real milestones, not an
                      arbitrary schedule. We added a progress billing trigger at
                      the 70% completion point for larger jobs.
                    </p>
                    <p>
                      Within two billing cycles, the average time from job
                      completion to invoice dropped from 38 days to 9 days. The
                      owner described it as &ldquo;finally feeling like the business
                      had a pulse.&rdquo; The weekly profit meeting added the
                      accountability structure to keep the cadence running.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { metric: "Invoice lag before", value: "38 days average" },
                      { metric: "Invoice lag after", value: "9 days average" },
                      { metric: "Time to result", value: "2 billing cycles" },
                    ].map(({ metric, value }) => (
                      <div
                        key={metric}
                        className="border border-line p-4 bg-surface"
                      >
                        <p className="text-muted-2 text-xs uppercase tracking-wider mb-1">
                          {metric}
                        </p>
                        <p className="text-fg font-bold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Vignette 3 */}
            <article className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                <div>
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Industry
                  </p>
                  <p className="text-fg text-sm font-semibold">HVAC</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Revenue range
                  </p>
                  <p className="text-fg text-sm font-semibold">$3M–$6M</p>
                  <p className="mt-4 text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Work type
                  </p>
                  <p className="text-fg text-sm font-semibold">Install + Service</p>
                </div>
                <div>
                  <h2 className="text-fg font-bold text-2xl mb-4">
                    &ldquo;Materials losses were buried in overhead. We didn&apos;t
                    know.&rdquo;
                  </h2>
                  <div className="prose-contractor">
                    <p>
                      An HVAC contractor was consistently profitable on service
                      work but saw thinner margins on new installations. The
                      installs looked competitive on the estimate — but final
                      numbers were consistently below expectation. The owner
                      assumed it was estimating error and tightened bids.
                      Margins didn&apos;t improve.
                    </p>
                    <p>
                      The job costing rules we built required materials costs to
                      be coded to the specific job, not a general overhead
                      category. Within the first two weeks of tracking, a pattern
                      emerged: recurring material overruns on new residential
                      installs. Equipment was being ordered at the estimate
                      quantity, but field crews were pulling additional parts
                      and materials that never made it back to the job&apos;s
                      cost record.
                    </p>
                    <p>
                      The fix was operational, not financial — a materials
                      check-out process tied to job numbers, and a weekly review
                      of any materials cost coded to overhead instead of a job.
                      The installation margins recovered without any change to
                      pricing or estimating.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { metric: "Root cause", value: "Uncoded materials costs" },
                      { metric: "Fix type", value: "Operational, not financial" },
                      { metric: "Pricing change needed", value: "None" },
                    ].map(({ metric, value }) => (
                      <div
                        key={metric}
                        className="border border-line p-4 bg-surface"
                      >
                        <p className="text-muted-2 text-xs uppercase tracking-wider mb-1">
                          {metric}
                        </p>
                        <p className="text-fg font-bold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Outcome Summary ───────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Across All Engagements
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            What the install consistently delivers.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                heading: "Margin clarity per job",
                body: "You know whether you made money on a job before the next one starts — not three months later when the accountant runs the year-end.",
              },
              {
                heading: "3–5 profit leaks documented",
                body: "Not guesses. Documented patterns in your actual job data — ranked by impact. You walk away knowing exactly where the money is going.",
              },
              {
                heading: "A billing cadence that actually runs",
                body: "Invoices go out on a schedule. The collections routine runs whether or not the owner is thinking about it. Cash flow starts feeling predictable.",
              },
              {
                heading: "A weekly meeting that holds",
                body: "Most businesses that try weekly meetings stop after six weeks. The structure we install — agenda, tracker, owners, dates — is what makes it stick.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="border border-line p-8 bg-canvas"
              >
                <h3 className="text-fg font-bold text-lg mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-muted-2 text-xs max-w-2xl">
            Outcomes described are typical of completed installs where the client
            met the three participation requirements: accounting access, current job
            data, and owner + ops lead on weekly calls. Results vary. We don&apos;t
            guarantee specific financial outcomes.
          </p>
        </div>
      </section>

      {/* ── Bridge to Offer ──────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
              See What&apos;s Included
            </p>
            <h2 className="text-fg font-bold text-2xl mb-2">
              Ready to see the full offer?
            </h2>
            <p className="text-muted text-sm max-w-md">
              Four deliverables. Fixed scope. 30 days. See exactly what we
              build, what we need from you, and what it costs to start.
            </p>
          </div>
          <Link
            href="/offer"
            className="shrink-0 inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas whitespace-nowrap"
          >
            See the Full Offer →
          </Link>
        </div>
      </section>

      {/* ── Cross-link ───────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="border border-line p-6 max-w-lg">
            <p className="text-muted text-sm leading-relaxed mb-3">
              If your entity structure or accounting foundation isn&apos;t solid
              yet, that&apos;s the first step.
            </p>
            <a
              href="https://www.contractorsetup.com/?utm_source=contractorjobcosting&utm_medium=referral&utm_campaign=proof-crosslink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              Contractor Setup Install &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-amber-500 py-16 px-6">
        <div className="container text-center">
          <h2 className="text-headline text-black mb-4 font-extrabold">
            Want results like these?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll tell you whether the install makes
            sense for your business and what it would look like.
          </p>
          <BookCallLink
            source="proof-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
          <p className="mt-6 text-black/60 text-sm">
            Not ready to call?{" "}
            <Link
              href="/contact"
              className="font-bold text-black/80 underline hover:text-black transition-colors"
            >
              Send us a message
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
