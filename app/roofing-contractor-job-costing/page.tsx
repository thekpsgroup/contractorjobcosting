import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing for Roofing Contractors",
  description:
    "Job costing for roofing contractors. Materials tracking, crew labor by job, and per-job margin clarity — installed in your accounting setup in 30 days.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/roofing-contractor-job-costing`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/roofing-contractor-job-costing`,
    title: "Job Costing for Roofing Contractors — 30-Day Install",
    description:
      "Materials volatility, crew-based labor, and storm vs. routine margins. Job costing installed for roofers in 30 days.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Job Costing for Roofing Contractors",
    description: "Job costing for roofing contractors. Materials tracking, crew labor by job, and per-job margin clarity — installed in your accounting setup in 30 days.",
  },
};

const faqs = [
  {
    question: "What are the most common profit leaks in roofing?",
    answer:
      "Materials overruns are the most common — crews pull extra shingles, underlayment, or flashing that never makes it back to the job cost record. Crew labor coded to the wrong job is second. Storm work with inflated estimates but cost overruns on the repair side is third. All three are visible in a properly configured costing system within the first two weeks.",
  },
  {
    question: "How do you track materials costs when prices change mid-job?",
    answer:
      "We configure the system to capture actual invoice costs — not estimate costs — per job. When material prices change, the actual cost is what gets coded to the job. This shows you the real margin variance between what you bid and what you paid, which is the data you need to reprice accurately.",
  },
  {
    question: "How is crew labor tracked to specific jobs?",
    answer:
      "Through timesheets tied to job numbers. We write the rules for how crews log time: which app, which job code, what happens when crews split time across jobs in a day. Labor hours multiplied by the loaded rate (wage plus burden) equals your labor cost per job.",
  },
  {
    question: "How do you handle storm work vs. routine roofing in job costing?",
    answer:
      "Storm work and replacement work have different cost structures and different margin profiles. We configure the costing system so storm jobs, replacement jobs, and repair jobs are tracked separately — so you can see which type of work is actually profitable for your business.",
  },
  {
    question: "Do you work with insurance-based roofing businesses?",
    answer:
      "Yes. Insurance-based work has specific billing considerations: supplement billing, ACV vs. RCV, and depreciation holdbacks all affect when and how much you get paid. We build the billing cadence around how insurance jobs actually close, including supplement tracking.",
  },
  {
    question: "Can you work with my estimating software?",
    answer:
      "We work around your existing setup. If you use EagleView, Xactimate, AccuLynx, or another estimating tool, the job costing layer is built in your accounting system (QuickBooks, for example) and the costing rules define how costs flow from the field to the accounting record. We don't require you to switch estimating tools.",
  },
  {
    question: "What accounting software do you work with for roofing?",
    answer:
      "QuickBooks Online, QuickBooks Desktop, Jobber, or a combination. We configure job costing within whatever accounting system you're already using.",
  },
  {
    question: "How long does the install take?",
    answer:
      "30 days. Four deliverables: profit-per-job scoreboard, written costing rules, billing cadence, and weekly profit meeting. If we're not there by day 30, we keep working at no additional cost.",
  },
  {
    question: "What size roofing company is this for?",
    answer:
      "Owner-led roofing businesses doing $750K–$8M in annual revenue. This is where margin visibility has the most leverage — you're big enough that job-level costing matters, but you don't yet have a full-time controller or CFO.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Read access to your accounting software, a job and invoice list from the last 60–90 days, and both the owner and ops lead committed to a weekly 45-minute call. We do the work — we just need you to show up.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.siteUrl}/roofing-contractor-job-costing#service`,
  name: "Job Costing for Roofing Contractors",
  description:
    "Done-for-you job costing for roofing contractors. Materials tracking, crew labor by job, storm vs. routine margin visibility. 30-day install.",
  url: `${siteConfig.siteUrl}/roofing-contractor-job-costing`,
  provider: { "@id": `${siteConfig.siteUrl}/#organization` },
  serviceType: "Roofing Contractor Job Costing",
  areaServed: { "@type": "Country", name: "United States" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Roofing Job Costing", item: `${siteConfig.siteUrl}/roofing-contractor-job-costing` },
  ],
};

export default function RoofingContractorJobCostingPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Roofing Contractor Job Costing
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Know your margin on every roof — not just at year end.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            Materials volatility, crew-based labor, and storm vs. routine
            margin differences make roofing one of the hardest trades to cost
            accurately. We install the system that tracks all of it — in 30
            days, inside your existing accounting setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="roofing-hero"
              className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              Book a Call
            </BookCallLink>
            <Link
              href="/offer"
              className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              See the Full Offer
            </Link>
          </div>
        </div>
      </section>

      {/* ── Roofing-Specific Problems ──────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Roofing Costing Problem
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            Three costing gaps common in roofing.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: "Materials overruns that never hit the job",
                body: "Crews pull extra shingles, underlayment, or flashing from the truck. It goes on the job. It doesn't make it to the job cost record. The job looks profitable. The business absorbs the cost in overhead.",
              },
              {
                heading: "Storm vs. routine margins averaged together",
                body: "Storm work and replacement work have different cost structures. When they're averaged together, you can't see which type of work actually makes money — or whether your storm volume is helping or hurting your overall margin.",
              },
              {
                heading: "Crew time not tied to the right job",
                body: "Crews move between jobs. Time entries go to the wrong job number or don't get entered at all. Labor cost per job becomes a guess. You're bidding future work based on incorrect historical data.",
              },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <h3 className="text-fg font-bold text-lg mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Gets Tracked ─────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What Gets Tracked
          </p>
          <h2 className="text-headline text-fg mb-10 max-w-xl">
            Per-job cost visibility for roofing work.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Materials",
                detail: "Actual invoice cost coded to the specific job. Not estimated cost — actual cost.",
              },
              {
                label: "Crew Labor",
                detail: "Hours per crew or employee tied to the job number. Loaded rate includes wages and burden.",
              },
              {
                label: "Subcontractors",
                detail: "Sub invoices matched to the job at receipt. Storm-specific subs tracked separately.",
              },
              {
                label: "Job Type",
                detail: "Storm, replacement, repair, and maintenance tracked separately so margin by work type is visible.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="border border-line p-5">
                <p className="text-fg font-bold text-base mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ──────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The 30-Day Install
          </p>
          <h2 className="text-headline text-fg mb-4 max-w-xl">
            Four deliverables configured for roofing.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            The same four-deliverable structure as our standard install —
            adapted to how roofing work runs: materials check-out rules, crew
            time entry, job type separation, and insurance-aware billing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                heading: "Profit-Per-Job Scoreboard",
                body: "Materials, crew labor, and sub costs against each job's invoiced amount. Storm vs. routine visible separately.",
              },
              {
                heading: "Job Costing Rules",
                body: "Materials check-out rules tied to job numbers. Crew time entry requirements. Sub invoice coding at receipt.",
              },
              {
                heading: "Billing Cadence",
                body: "Invoice triggers for completion jobs. Supplement tracking for insurance work. Collections routine for outstanding receivables.",
              },
              {
                heading: "Weekly 45-Minute Profit Meeting",
                body: "Job-by-job cost review. Open supplements on the agenda. AR aging reviewed every week. Structure your team can own.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="border border-line p-6 bg-surface">
                <h3 className="text-fg font-bold text-lg mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/offer"
              className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              See the full offer with scope and pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Good Fit ──────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Good Fit
              </p>
              <h2 className="text-headline text-fg mb-8">
                Built for roofing owners who want to know their numbers.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "$750K–$8M in annual revenue",
                  "Owner-led — you're in the business every day",
                  "You have QuickBooks or another accounting system",
                  "Storm, replacement, or residential roofing (or all three)",
                  "Willing to share accounting access and show up weekly",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 px-4 py-3">
                    <span className="mt-0.5 w-4 h-4 shrink-0 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center" aria-hidden="true">
                      <svg className="text-amber-500" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-muted text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-muted-2">
                Not a Fit
              </p>
              <h2 className="text-headline text-fg mb-8">
                We&apos;re straightforward about who we don&apos;t work with.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "Won't share financial data or accounting access",
                  "Can't commit to a weekly 45-minute call",
                  "Need bookkeeping cleanup first (we can refer you)",
                  "Looking for estimating software or a pricing tool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-surface border border-line px-4 py-3">
                    <span className="mt-0.5 w-4 h-4 shrink-0 bg-line border border-line flex items-center justify-center" aria-hidden="true">
                      <svg className="text-muted-2" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 3l4 4M7 3l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-muted-2 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ──────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Typical Outcomes
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            What the install typically surfaces.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Which job types are actually profitable — vs. which look profitable",
              "Materials overruns identified and traced to specific crews or jobs",
              "Crew labor cost per job vs. what was estimated",
              "Invoice timing on a consistent schedule, not memory",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-line p-4">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/proof"
              className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              Read contractor outcome examples &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Roofing-specific job costing questions.
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-line">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="py-8">
                <h3 className="text-fg font-bold text-lg mb-3">{question}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-2xl">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-amber-500 py-16 px-6">
        <div className="container text-center">
          <h2 className="text-headline text-black mb-4 font-extrabold">
            Ready to see which jobs made money?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="roofing-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
