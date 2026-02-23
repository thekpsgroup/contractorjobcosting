import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Contractor Cash Flow Fix — Bill Faster, Get Paid Faster",
  description:
    "Most contractor cash flow problems trace back to late invoicing, not revenue. We install the billing system that closes the gap between job completion and cash in your account.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contractor-cash-flow`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/contractor-cash-flow`,
    title: "Contractor Cash Flow Fix — Done in 30 Days",
    description:
      "Fix contractor cash flow by fixing when you invoice. Billing cadence and AR system installed in 30 days.",
  },
};

const faqs = [
  {
    question: "Why do contractors have cash flow problems?",
    answer:
      "The most common cause isn't revenue — it's billing lag. Jobs finish and invoices go out 30, 45, even 60 days later. During that gap, you're funding payroll and materials out of pocket or credit. Fix the billing timing and most cash flow problems shrink dramatically.",
  },
  {
    question: "Is a line of credit the right fix for contractor cash flow?",
    answer:
      "A line of credit treats the symptom. It doesn't fix the root cause — which is usually that invoices aren't going out when work completes. Borrowing to cover billing lag is expensive and it compounds. The fix is closing the time between job completion and invoice sent.",
  },
  {
    question: "What is billing lag and how much does it cost?",
    answer:
      "Billing lag is the number of days between when a job completes and when the invoice goes out. Industry surveys show 82% of contractors wait more than 30 days. If you have $300K in monthly revenue with a 30-day billing lag, you're perpetually carrying $300K of unbilled receivables — that's your working capital tied up in invoicing process.",
  },
  {
    question: "What is a billing cadence and how does it work?",
    answer:
      "A billing cadence is a written schedule that defines when invoices go out based on job milestones — not on when someone remembers to send them. For completion billing, the trigger is job close-out. For milestone billing, triggers are tied to specific project phases. We map the cadence to how your jobs actually run, then document it so your office can execute it without the owner involved.",
  },
  {
    question: "How does job costing relate to cash flow?",
    answer:
      "Job costing tells you when a job is complete and what it cost — both of which are required to invoice accurately. Without job costing, owners often wait until they're sure about costs before billing, which causes lag. With a costing system, job cost data closes automatically as costs are entered, giving a clear trigger to invoice.",
  },
  {
    question: "What is progress billing and do I need it?",
    answer:
      "Progress billing sends invoices at defined completion milestones — typically 30%, 70%, and completion — rather than only at the end. For jobs longer than 4–6 weeks, progress billing eliminates most billing lag and dramatically reduces your receivables exposure. We implement progress billing triggers as part of the billing cadence deliverable.",
  },
  {
    question: "What does a collections routine include?",
    answer:
      "A collections routine defines when follow-up happens after an invoice is sent, who is responsible for the follow-up, what they say, and what the escalation path looks like. Most contractor offices don't have one — which means chasing invoices is random, inconsistent, and usually falls on the owner. We document a routine your office can run.",
  },
  {
    question: "How quickly can you fix contractor cash flow?",
    answer:
      "The billing cadence and AR routine are typically live within the first two weeks of the install. The full system — scoreboard, rules, cadence, and meeting — is complete by day 30. Most clients see invoice timing improve within the first billing cycle.",
  },
  {
    question: "Do I need better accounting software to fix cash flow?",
    answer:
      "Probably not. The problem is almost never the software — it's the process. We work inside your existing setup: QuickBooks, Jobber, Housecall Pro, or a combination. We add the billing triggers and collections routine to what you already have.",
  },
  {
    question: "What size contractor is this for?",
    answer:
      "Owner-led contracting businesses doing $750K–$8M in annual revenue. At this size, billing lag has a material impact on working capital — and a CFO isn't justified yet.",
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
  "@id": `${siteConfig.siteUrl}/contractor-cash-flow#service`,
  name: "Contractor Cash Flow System",
  description:
    "Billing cadence and AR system for owner-led contractors. Closes the gap between job completion and invoice sent. Part of the 30-day job costing install.",
  url: `${siteConfig.siteUrl}/contractor-cash-flow`,
  provider: { "@id": `${siteConfig.siteUrl}/#organization` },
  serviceType: "Contractor Cash Flow Improvement",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function ContractorCashFlowPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Contractor Cash Flow
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Your cash flow problem is a billing timing problem.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            Most contractors don&apos;t have a revenue problem — they have a
            billing lag problem. Jobs finish and invoices go out 30, 45, 60
            days later. We install the billing system that closes that gap in
            30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="cash-flow-hero"
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

      {/* ── The Real Problem ──────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Root Cause
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            A line of credit doesn&apos;t fix billing lag.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                heading: "The symptom",
                body: "Payroll is tight. You're watching the account. Revenue looks fine on paper but cash isn't there when you need it.",
              },
              {
                heading: "The misdiagnosis",
                body: "Most contractors borrow to cover it. A line of credit buys time but doesn't fix the process. The lag — and the cost of carrying it — continues.",
              },
              {
                heading: "The actual fix",
                body: "Invoice when work completes, not when someone remembers. A billing cadence tied to job milestones closes the gap permanently.",
              },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <h3 className="text-fg font-bold text-lg mb-3">{heading}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="border border-amber-500/20 bg-amber-500/5 p-6 max-w-2xl">
            <p className="text-fg text-sm leading-relaxed">
              <span className="font-bold text-amber-500">Industry data:</span>{" "}
              82% of contractors face invoice waits over 30 days. At $300K/month
              in revenue, that&apos;s $300K perpetually tied up in unbilled
              work. The fix is process, not capital.
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Fix ───────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What Gets Fixed
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            The three billing problems we eliminate.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                problem: "Invoice lag",
                fix: "Billing triggers tied to job completion milestones — not to when someone thinks to send the invoice.",
              },
              {
                problem: "No collections routine",
                fix: "A documented follow-up process: when to reach out, what to say, who does it, what the escalation looks like.",
              },
              {
                problem: "Unknown job cost at billing time",
                fix: "Job costing that closes when costs are entered, so you always know what a job cost before you invoice.",
              },
            ].map(({ problem, fix }) => (
              <div key={problem} className="border border-line p-6">
                <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                  Problem
                </p>
                <p className="text-fg font-bold text-base mb-4">{problem}</p>
                <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                  Fix
                </p>
                <p className="text-muted text-sm leading-relaxed">{fix}</p>
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
            Four deliverables. Cash flow is one of them.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            The billing and AR cadence is one of four deliverables in the
            30-day install. Job costing gives you the data to invoice correctly.
            The billing cadence gives you the timing. Together, they close the
            cash flow gap.
          </p>
          <div className="flex flex-col gap-0 divide-y divide-line max-w-2xl">
            {[
              {
                number: "01",
                heading: "Profit-Per-Job Scoreboard",
                body: "Know your costs before you invoice. No more waiting until you think costs are 'settled' to send the bill.",
              },
              {
                number: "02",
                heading: "Job Costing Rules",
                body: "Clear rules for cost entry so job cost data closes accurately and on time.",
              },
              {
                number: "03",
                heading: "Billing & AR Cadence",
                body: "Invoice timing tied to job milestones. Progress billing for longer jobs. A collections routine that runs without the owner chasing every payment.",
              },
              {
                number: "04",
                heading: "Weekly 45-Minute Profit Meeting",
                body: "AR review is part of every meeting. Late invoices and open receivables surface before they become problems.",
              },
            ].map(({ number, heading, body }) => (
              <div
                key={number}
                className="py-8 grid grid-cols-[40px_1fr] gap-4"
              >
                <p className="text-amber-500/40 font-bold text-3xl font-mono leading-none">
                  {number}
                </p>
                <div>
                  <h3 className="text-fg font-bold text-lg mb-1">{heading}</h3>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
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

      {/* ── Proof ─────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Outcome Example
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            38 days to 9 days — two billing cycles.
          </h2>
          <div className="border border-line p-8 max-w-2xl bg-canvas">
            <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
              Industry / Revenue
            </p>
            <p className="text-fg text-sm font-semibold mb-6">
              Residential Remodeling · $1M–$2M
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              A remodeler with a full pipeline and a cash problem. Final invoices
              were going out 30–45 days after job completion. Payroll decisions
              were made on anxiety, not cash position.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The install focused on the billing cadence deliverable — milestone
              triggers and a progress billing rule at 70% completion. Within two
              billing cycles, invoice lag dropped from 38 days to 9 days.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { metric: "Invoice lag before", value: "38 days avg" },
                { metric: "Invoice lag after", value: "9 days avg" },
                { metric: "Time to result", value: "2 billing cycles" },
              ].map(({ metric, value }) => (
                <div key={metric} className="border border-line p-3 bg-surface">
                  <p className="text-muted-2 text-xs uppercase tracking-wider mb-1">
                    {metric}
                  </p>
                  <p className="text-fg font-bold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/proof"
              className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              Read more contractor outcome examples &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Good Fit ──────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Who This Is For
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            The install works if you&apos;re willing to work it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ul className="flex flex-col gap-2">
              {[
                "Owner-led contractor doing $750K–$8M/year",
                "Billing lag is a recurring problem — not a one-time issue",
                "You're willing to share accounting access",
                "Owner + ops lead can commit to a weekly 45-minute call",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 px-4 py-3"
                >
                  <span
                    className="mt-0.5 w-4 h-4 shrink-0 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="text-amber-500" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-muted text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {[
                "Can't commit to a weekly call",
                "Won't share financial data or accounting access",
                "Looking for a loan or credit line referral",
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
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Answers about contractor cash flow.
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
            Ready to close the billing gap?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="cash-flow-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
