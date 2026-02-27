import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing System for Contractors",
  description:
    "Not software — a complete job costing system. Scoreboard, rules, billing cadence, and weekly meeting installed in your contracting business in 30 days.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contractor-job-costing-system`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/contractor-job-costing-system`,
    title: "Job Costing System for Contractors — Beyond Software",
    description:
      "A job costing system built for your business, not just another tool to learn. Installed in 30 days.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Job Costing System for Contractors",
    description: "Not software — a complete job costing system. Scoreboard, rules, billing cadence, and weekly meeting installed in your contracting business in 30 days.",
  },
};

const faqs = [
  {
    question: "What's the difference between job costing software and a job costing system?",
    answer:
      "Software is a tool. A system is the tool plus the rules for using it, the cadence for reviewing it, and the accountability structure to make it stick. Most contractors who buy job costing software stop using it within 90 days because there's no system around it. We install the system.",
  },
  {
    question: "I already have QuickBooks / Jobber / Housecall Pro. Do I need more software?",
    answer:
      "Usually not. We build the costing system inside your existing tools. The problem is rarely the software — it's that nobody configured it properly for job-level cost tracking, and there are no rules or cadence around it.",
  },
  {
    question: "We've been using spreadsheets. Will this replace them?",
    answer:
      "Yes. The scoreboard pulls from your accounting data automatically, so you're not relying on someone to manually update a spreadsheet. The costing rules ensure data goes in correctly at the source, eliminating double-entry and formula errors.",
  },
  {
    question: "What does 'installed in your business' actually mean?",
    answer:
      "It means the scoreboard is configured in your accounting software, the rules are documented and given to your team, the billing cadence is mapped to your real job completion milestones, and the weekly meeting has a written agenda your team can run. You own it after 30 days.",
  },
  {
    question: "How much of my time does this take?",
    answer:
      "One 45-minute weekly call with you and your ops lead. Setup requires roughly 2 hours upfront to walk us through your workflow and get accounting access. That's the commitment.",
  },
  {
    question: "What if my team won't use it?",
    answer:
      "The weekly meeting is the accountability layer. It's where the scoreboard gets reviewed, action items get assigned, and the system gets reinforced. If the owner and ops lead show up every week, the team follows. That's why we require both on every call.",
  },
  {
    question: "Is this bookkeeping?",
    answer:
      "No. Bookkeeping records transactions. We build the system that tells you what each job cost and whether you made money on it. We connect field operations to accounting data — that's a different discipline than recording debits and credits.",
  },
  {
    question: "What's the pricing?",
    answer:
      "Fixed price per engagement, based on business size and complexity. No hourly billing. Book a call and we'll give you a fixed quote within 24 hours.",
  },
  {
    question: "What size contractor is this for?",
    answer:
      "Owner-led businesses doing $750K–$8M in annual revenue. Below $750K, the volume doesn't usually justify the install. Above $8M, you likely need a full-time controller or CFO.",
  },
  {
    question: "What happens after the 30 days?",
    answer:
      "You own the system and run it independently. Some clients continue with an optional monthly managed engagement — that's available but never required.",
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
  "@id": `${siteConfig.siteUrl}/contractor-job-costing-system#service`,
  name: "Contractor Job Costing System",
  description:
    "A complete job costing system for contractors — scoreboard, rules, billing cadence, and weekly meeting — installed in 30 days. Not software. A system.",
  url: `${siteConfig.siteUrl}/contractor-job-costing-system`,
  provider: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  serviceType: "Job Costing System Implementation",
  areaServed: { "@type": "Country", name: "United States" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Job Costing System", item: `${siteConfig.siteUrl}/contractor-job-costing-system` },
  ],
};

export default function ContractorJobCostingSystemPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Beyond Spreadsheets. Beyond Software.
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            A job costing system built for your contracting business.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            You don&apos;t need another tool. You need a system — scoreboard,
            rules, cadence, and accountability — installed in your business in
            30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="jc-system-hero"
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

      {/* ── The Gap ───────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Why Software Alone Fails
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            You bought the tool. Nobody built the system.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: "Spreadsheets break",
                body: "Someone changes a formula. Someone forgets to update it. The owner stops checking it. 88% of spreadsheets contain errors. The data becomes unreliable, then useless.",
              },
              {
                heading: "Software requires configuration",
                body: "QuickBooks, Jobber, Housecall Pro — all have job costing features. But features don't matter if nobody set up the chart of accounts, labor rates, or cost categories correctly.",
              },
              {
                heading: "A system has rules and accountability",
                body: "A system tells your team what gets coded where, who enters it, when it's reviewed, and what happens when something doesn't add up. That's what makes job costing stick.",
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

      {/* ── What a System Includes ─────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What You Get
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            A complete system — not a feature tour.
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-line">
            {[
              {
                number: "01",
                heading: "Profit-Per-Job Scoreboard",
                body: "Configured inside your existing accounting software. Updates as costs are entered. No new tools required. You see gross profit per job — not just revenue.",
              },
              {
                number: "02",
                heading: "Written Costing Rules",
                body: "Which cost category covers which expense. Who on your team is responsible for entering costs. What the weekly review cadence looks like. Documented and given to your team.",
              },
              {
                number: "03",
                heading: "Billing & AR Cadence",
                body: "Invoice timing mapped to your real job completion milestones. A collections routine that runs whether or not the owner is thinking about it.",
              },
              {
                number: "04",
                heading: "Weekly 45-Minute Profit Meeting",
                body: "Written agenda, action tracker, owners and due dates on every item. We run it with you for the first month, then hand you the structure to run independently.",
              },
            ].map(({ number, heading, body }) => (
              <div
                key={number}
                className="py-10 grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4"
              >
                <p className="text-amber-500/40 font-bold text-4xl font-mono leading-none">
                  {number}
                </p>
                <div>
                  <h3 className="text-fg font-bold text-xl mb-2">{heading}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">
                    {body}
                  </p>
                </div>
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

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Process
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Three steps. 30 days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                heading: "Discovery",
                body: "One call. We learn your workflow, see your current setup, and confirm you're a fit. You get a fixed quote within 24 hours.",
              },
              {
                step: "02",
                heading: "Install",
                body: "We configure the scoreboard, write the rules, build the billing cadence, and start the weekly meetings. Four deliverables in 30 days.",
              },
              {
                step: "03",
                heading: "Handoff",
                body: "You own the system. Everything is documented. Your team can run the meeting, review the scoreboard, and enforce the rules independently.",
              },
            ].map(({ step, heading, body }) => (
              <div key={step}>
                <p className="text-amber-500/40 font-bold text-3xl font-mono mb-3">
                  {step}
                </p>
                <h3 className="text-fg font-bold text-lg mb-2">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
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
                This is for operators, not spectators.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "$750K–$8M in annual revenue",
                  "Owner-led — you're in the business every day",
                  "You have accounting software (QB, Jobber, HCP, or similar)",
                  "You'll share your numbers and show up weekly",
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
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4 text-muted-2">
                Not a Fit
              </p>
              <h2 className="text-headline text-fg mb-8">
                We&apos;re direct about who this isn&apos;t for.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "Won't share financial data",
                  "Can't commit to a weekly call",
                  "Looking for free advice without implementation",
                  "Need bookkeeping cleanup first (we can refer you)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-surface border border-line px-4 py-3"
                  >
                    <span
                      className="mt-0.5 w-4 h-4 shrink-0 bg-line border border-line flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="text-muted-2"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M3 3l4 4M7 3l-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="text-muted-2 text-sm leading-relaxed">
                      {item}
                    </span>
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
            What happens when the system is running.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              {
                heading: "Margin clarity per job",
                body: "You know whether you made money before the next job starts — not three months later.",
              },
              {
                heading: "Profit leaks documented",
                body: "Your top 3–5 leaks identified and ranked from your actual data. Not guesses.",
              },
              {
                heading: "Predictable billing",
                body: "Invoices go out on a schedule. Collections runs without the owner chasing.",
              },
              {
                heading: "A meeting that holds",
                body: "Agenda, tracker, owners, dates. The structure that makes weekly reviews stick.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="border border-line p-6">
                <h3 className="text-fg font-bold text-base mb-2">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
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
            Answers about the job costing system.
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
            Ready to install a real system?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="jc-system-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
