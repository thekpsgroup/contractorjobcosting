import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Construction Job Costing — Done For You",
  description:
    "Construction job costing installed in your business in 30 days. We track labor, materials, and subs per job so you see gross profit — not just revenue.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/construction-job-costing`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/construction-job-costing`,
    title: "Construction Job Costing — Installed in 30 Days",
    description:
      "Done-for-you job costing for contractors. Scoreboard, rules, billing cadence, and weekly profit meeting.",
  },
};

const faqs = [
  {
    question: "What is construction job costing?",
    answer:
      "Job costing tracks the actual cost of each job — labor, materials, and subcontractors — against the invoice amount. It tells you whether a job made money, not just whether the business made money overall. Most contractors know their total revenue but can't tell you gross profit per job.",
  },
  {
    question: "How is this different from bookkeeping?",
    answer:
      "Bookkeeping records what happened. Job costing tells you what each specific job cost and whether you made money on it. We build the system that connects your field operations to your accounting data — something bookkeepers don't typically set up.",
  },
  {
    question: "What costs get tracked per job?",
    answer:
      "Labor hours (from timesheets or time tracking), materials purchased and used, subcontractor invoices, equipment charges if applicable, and any other direct costs. We write the rules for what goes where so the data stays clean.",
  },
  {
    question: "Can you work with my existing software?",
    answer:
      "Yes. We work around your existing setup — QuickBooks Online, QuickBooks Desktop, Jobber, Housecall Pro, or a combination. We don't require you to switch software.",
  },
  {
    question: "What's a profit leak?",
    answer:
      "A profit leak is money you're losing on jobs without knowing it. Common examples: service labor priced below actual cost, materials coded to overhead instead of specific jobs, invoices sent 30–45 days late, and change orders absorbed without billing. The install surfaces these from your real data.",
  },
  {
    question: "How long does the install take?",
    answer:
      "30 days. You get four deliverables: a profit-per-job scoreboard, written costing rules, a billing and AR cadence, and a weekly 45-minute profit meeting. If we're not there by day 30, we keep working until we are.",
  },
  {
    question: "What size contractor is this for?",
    answer:
      "Owner-led contracting businesses doing $750K–$8M in annual revenue. You need to be big enough that margin visibility matters but small enough that a full-time CFO doesn't make sense.",
  },
  {
    question: "Do I need clean books to start?",
    answer:
      "Not necessarily. Messy books don't automatically disqualify you — they shape what we need to do first. If your books need cleanup before we can build the costing layer, we'll tell you during the discovery call.",
  },
  {
    question: "What if I'm already tracking job costs in a spreadsheet?",
    answer:
      "That's common. Spreadsheets work until they don't — they break when crews forget to update them, when someone changes a formula, or when you hire your fifth crew. We replace the spreadsheet with a system inside your accounting software that pulls from real data automatically.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "You own the system. Everything is documented so your team can run it. Some clients continue with an optional monthly managed engagement — that's available but never required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.siteUrl}/construction-job-costing#service`,
  name: "Construction Job Costing Install",
  description:
    "Done-for-you construction job costing for owner-led contractors. Labor, materials, and subcontractor tracking per job with gross profit visibility in 30 days.",
  url: `${siteConfig.siteUrl}/construction-job-costing`,
  provider: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  serviceType: "Construction Job Costing",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ConstructionJobCostingPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Construction Job Costing — Done For You
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Know what every job actually cost — not what you think it cost.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            We install a job costing system inside your business in 30 days.
            Labor, materials, and subs — tracked per job — so you see gross
            profit before the next job starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="construction-jc-hero"
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

      {/* ── What Gets Tracked ─────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Per-Job Visibility
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            What gets tracked on every job.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Labor",
                detail:
                  "Hours per crew or employee, coded to the specific job from timesheets or time tracking.",
              },
              {
                label: "Materials",
                detail:
                  "Every purchase coded to the job it belongs to — not dumped into a general overhead category.",
              },
              {
                label: "Subcontractors",
                detail:
                  "Sub invoices matched to the job they performed, tracked against the original estimate.",
              },
              {
                label: "Gross Profit",
                detail:
                  "Revenue minus all direct costs. Per job. Not averaged across the business.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="border border-line p-6">
                <p className="text-fg font-bold text-lg mb-2">{label}</p>
                <p className="text-muted text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Profit Leak Problem ───────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            Most contractors don&apos;t know which jobs made money.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            Revenue is growing. Crews are busy. The books show a profit at year
            end. But you can&apos;t point to a specific job and say &ldquo;we
            made 22% on that one.&rdquo; That&apos;s the gap. Without per-job
            costing, profit leaks hide in plain sight.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Service labor priced below actual cost",
              "Materials coded to overhead, not to the job",
              "Invoices sent 30–45 days after job completion",
              "Change orders absorbed without billing",
              "Crew time not tracked to the correct job",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 px-4 py-3"
              >
                <span
                  className="mt-0.5 w-4 h-4 shrink-0 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="text-amber-500"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-muted text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-2 text-xs">
            These are the five most common profit leaks we find across
            contractor installs.
          </p>
        </div>
      </section>

      {/* ── What You Get ──────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The 30-Day Install
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Four deliverables. One fixed price.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                heading: "Profit-Per-Job Scoreboard",
                body: "A view of labor, materials, and sub costs against each job with gross profit. Built inside your accounting software.",
              },
              {
                heading: "Job Costing Rules",
                body: "Written rules for what costs get coded where, who enters them, and when they're reviewed. Documented for your team.",
              },
              {
                heading: "Billing & AR Cadence",
                body: "Invoice timing that matches how your jobs actually complete. Plus a collections routine that runs without the owner chasing payments.",
              },
              {
                heading: "Weekly 45-Minute Profit Meeting",
                body: "Structured agenda, action tracker, owners and due dates on every item. We run it with you for the first month.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="border border-line p-8 bg-surface">
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
              See the full offer with pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Good Fit ──────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Who This Is For
          </p>
          <h2 className="text-headline text-fg mb-8">
            Built for serious contracting businesses.
          </h2>
          <ul className="flex flex-col gap-2 max-w-xl">
            {[
              "Owner-led contractor doing $750K–$8M/year",
              "You suspect you're leaving margin on the table but can't prove it",
              "You want to know your numbers — not guess at them",
              "Willing to share accounting access and show up to a weekly call",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 px-4 py-3"
              >
                <span
                  className="mt-0.5 w-4 h-4 shrink-0 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="text-amber-500"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-muted text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Outcomes ──────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Typical Outcomes
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            What the install typically delivers.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              "Margin clarity per job — before the next one starts",
              "Top 3–5 profit leaks identified from your real data",
              "Invoicing on a consistent schedule, not memory",
              "A weekly meeting structure your team actually follows",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-line pb-5 last:border-0 last:pb-0"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/proof"
              className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              Read detailed contractor outcome examples &rarr;
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
            Straightforward answers about construction job costing.
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-line">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="py-8">
                <h3 className="text-fg font-bold text-lg mb-3">{question}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-2xl">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-amber-500 py-16 px-6">
        <div className="container text-center">
          <h2 className="text-headline text-black mb-4 font-extrabold">
            Ready to see what your jobs actually cost?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="construction-jc-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
