import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "The 30-Day Job Costing Install",
  description:
    "Fixed-scope job costing for contractors. Four deliverables in 30 days: profit scoreboard, costing rules, billing cadence, and weekly profit meeting.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/offer`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/offer`,
    title: "The 30-Day Contractor Job Costing Install",
    description:
      "Fixed-scope job costing implementation for owner-led contractors. Know your margin in 30 days.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The 30-Day Job Costing Install",
    description: "Fixed-scope job costing for contractors. Four deliverables in 30 days: profit scoreboard, costing rules, billing cadence, and weekly profit meeting.",
  },
};

const faqs = [
  {
    question: "What does this cost?",
    answer:
      "We price per engagement based on business size and complexity. Book a call to get a fixed quote. There are no hourly fees — you get a single fixed price for the complete 30-day install.",
  },
  {
    question: "What accounting software do you work with?",
    answer:
      "We work around your existing setup — QuickBooks Online, QuickBooks Desktop, Jobber, Housecall Pro, or a combination. We don't require you to switch software. If your current setup has a significant gap, we'll tell you plainly during the discovery call.",
  },
  {
    question: "Do I need to change my accounting software?",
    answer:
      "Usually not. We work with what you have and build the costing layer around it. If there's a materially better fit for your workflow, we'll explain it — but we don't require or push software changes.",
  },
  {
    question: "How much of my time does this take?",
    answer:
      "One 45-minute weekly call with you and your ops lead. That's the primary ongoing commitment. Setup requires roughly 2 hours upfront to walk us through your current workflow and get accounting access.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "You own the system. We document every rule, every cadence, and every meeting agenda so your team can run it independently. Some clients continue with an optional monthly managed engagement — that's available but never required.",
  },
  {
    question: "Is this the same as bookkeeping?",
    answer:
      "No. Bookkeeping records what happened. Job costing tells you what each specific job cost and whether you made money on it. We build the system that connects your field operations to your accounting data — something bookkeepers don't typically do.",
  },
  {
    question: "What if my books aren't clean?",
    answer:
      "Tell us during the discovery call. Messy books don't automatically disqualify you — they shape what we need to do first. In some cases we can work around gaps; in others we'll refer you to a bookkeeper to get current before we start.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We guarantee you'll have a working job costing system — scoreboard, rules, billing cadence, and meeting structure — installed and running by day 30. If we aren't there, we keep working until we are. We don't guarantee specific financial outcomes, because outcomes depend on your participation and your business — and no honest consultant guarantees that.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.siteUrl}/offer#service`,
  name: "30-Day Contractor Job Costing Install",
  description:
    "Fixed-scope job costing and cash flow implementation for owner-led contractors. Four deliverables in 30 days: profit-per-job scoreboard, job costing rules, billing & AR cadence, and weekly profit meeting.",
  url: `${siteConfig.siteUrl}/offer`,
  provider: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  serviceType: "Job Costing Implementation",
  audience: {
    "@type": "Audience",
    audienceType:
      "Owner-led contracting businesses with $750K–$8M in annual revenue",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "30-Day Install Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Profit-Per-Job Scoreboard",
          description:
            "A clean view of labor, materials, and subcontractor costs against each job with gross profit per job.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Job Costing Rules",
          description:
            "Written rules for what costs get coded where, who enters them, and when they are reviewed.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Billing & AR Cadence",
          description:
            "Invoice timing that matches job completion milestones and a collections routine.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Weekly 45-Minute Profit Meeting",
          description:
            "Structured weekly meeting with agenda, action tracker, owners and due dates on every item.",
        },
      },
    ],
  },
};

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Offer", item: `${siteConfig.siteUrl}/offer` },
  ],
};

export default function OfferPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Fixed Scope · Fixed Price · 30 Days
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            The 30-Day Contractor Job Costing Install
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            Four deliverables. One fixed price. Your job costing system running
            inside your business in 30 days — or we keep working until it is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="offer-hero"
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
      </section>

      {/* ── Deliverables ─────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What You Get
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Four deliverables. No scope creep.
          </h2>

          <div className="flex flex-col gap-0 divide-y divide-line">
            {[
              {
                number: "01",
                heading: "Profit-Per-Job Scoreboard",
                subhead: "Labor · Materials · Subs · Gross Profit",
                body: "A clean, consistent view of what each job cost — broken down by labor, materials, and subcontractors — set against the invoice amount. You see gross profit per job, not just revenue. We build this inside your accounting system so it pulls from real data, not a spreadsheet you forget to update.",
                detail:
                  "Configured in your existing accounting software. Updates as costs are entered. No new tools required.",
              },
              {
                number: "02",
                heading: "Job Costing Rules",
                subhead: "What gets coded where · Who enters it · When you check it",
                body: "The scoreboard is only as good as the data going into it. We write the rules: which cost category covers which type of expense, who on your team is responsible for entering costs, and what the weekly review cadence looks like. Rules are documented and given to your team.",
                detail:
                  "Written documentation your team can reference. Includes a review checklist and a clear escalation path when something doesn't add up.",
              },
              {
                number: "03",
                heading: "Billing & AR Cadence",
                subhead: "Invoice timing · Collections routine",
                body: "We build a billing schedule that matches how your jobs actually complete — whether that's milestone billing, progress billing, or completion billing. Then we add a collections routine: when invoices go out, when follow-ups happen, and who is responsible at each step. No more invoicing 45 days after the job closes.",
                detail:
                  "Documented cadence your office can run without chasing the owner. Includes a collections script for common scenarios.",
              },
              {
                number: "04",
                heading: "Weekly 45-Minute Profit Meeting",
                subhead: "Agenda · Action tracker · Owners and dates",
                body: "We run a weekly 45-minute profit meeting with you and your ops lead for the first month. The meeting has a written agenda, a running action tracker, and clear owners and due dates on every item. We teach you how to run it so you can own it after the install ends.",
                detail:
                  "Reusable agenda template and action tracker provided. Meeting structure designed to stay under 45 minutes.",
              },
            ].map(({ number, heading, subhead, body, detail }) => (
              <div
                key={number}
                className="py-10 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6"
              >
                <p className="text-amber-500/40 font-bold text-5xl font-mono leading-none">
                  {number}
                </p>
                <div>
                  <h3 className="text-fg font-bold text-2xl mb-1">{heading}</h3>
                  <p className="text-amber-500 text-xs font-bold tracking-wider uppercase mb-4">
                    {subhead}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                    {body}
                  </p>
                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <p className="text-muted-2 text-xs leading-relaxed">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ─────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                What We Need From You
              </p>
              <h2 className="text-headline text-fg mb-8">
                Three requirements to start.
              </h2>
              <ul className="flex flex-col gap-6">
                {[
                  {
                    heading: "Accounting access or clean exports",
                    body: "Read access to your accounting software, or clean exports from the last 60–90 days. We need to see real data to build a real system.",
                  },
                  {
                    heading: "Job and invoice list from last 60–90 days",
                    body: "A list of jobs completed, with associated invoices and any cost data you have. Even if it's incomplete, we work with what you have.",
                  },
                  {
                    heading: "Owner + ops lead on every weekly call",
                    body: "Both of you. Every week. The meeting is where decisions get made and the system gets reinforced. One person can't carry this back to the other.",
                  },
                ].map(({ heading, body }) => (
                  <li key={heading} className="flex items-start gap-4">
                    <span
                      className="mt-1 w-5 h-5 shrink-0 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="text-amber-500" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-fg font-bold text-sm mb-1">{heading}</p>
                      <p className="text-muted text-sm leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Typical Outcomes
              </p>
              <h2 className="text-headline text-fg mb-8">
                What to expect.
              </h2>
              <ul className="flex flex-col gap-5">
                {[
                  "Margin clarity per job — you see profit before the next job starts",
                  "Your top 3–5 profit leaks identified and documented",
                  "Invoicing on a consistent schedule, not memory",
                  "Collections routine that doesn't require the owner to chase every payment",
                  "A weekly meeting structure your team actually shows up to",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line pb-5 last:border-0 last:pb-0"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-muted text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted-2 text-xs">
                Outcomes listed are typical, not guaranteed. Results depend on
                your data quality and participation.
              </p>
              <div className="mt-6">
                <Link
                  href="/proof"
                  className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
                >
                  Read detailed contractor outcome examples &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optional Managed Service ──────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="border border-line p-8 md:p-12 max-w-3xl">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
              Optional — After the Install
            </p>
            <h2 className="text-fg font-bold text-2xl mb-4">
              Managed Job Costing
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-4 max-w-xl">
              After the 30-day install, some clients keep us involved on a
              monthly basis — reviewing job costing reports, flagging issues
              before they compound, and running the profit meeting alongside
              your team.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              This is month-to-month, not required, and only available to clients
              who&apos;ve completed the install. It&apos;s for owners who want an
              outside set of eyes on the numbers every month — not for owners who
              need someone to run the system for them.
            </p>
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
            Straightforward answers.
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

      {/* ── Cross-links ────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-line p-6">
              <p className="text-muted text-sm leading-relaxed mb-3">
                If your margins are unclear because operations are chaotic, you
                may need the ops layer first.
              </p>
              <a
                href="https://www.contractorscoo.com/?utm_source=contractorjobcosting&utm_medium=referral&utm_campaign=offer-crosslink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
              >
                Contractors COO Install &rarr;
              </a>
            </div>
            <div className="border border-line p-6">
              <p className="text-muted text-sm leading-relaxed mb-3">
                If your entity structure or accounting foundation isn&apos;t set,
                start there.
              </p>
              <a
                href="https://www.contractorsetup.com/?utm_source=contractorjobcosting&utm_medium=referral&utm_campaign=offer-crosslink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 text-sm font-bold hover:text-amber-400 transition-colors"
              >
                Contractor Setup Install &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-amber-500 py-16 px-6">
        <div className="container text-center">
          <h2 className="text-headline text-black mb-4 font-extrabold">
            Ready to get a fixed price?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and give
            you a fixed quote within 24 hours of the call.
          </p>
          <BookCallLink
            source="offer-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
