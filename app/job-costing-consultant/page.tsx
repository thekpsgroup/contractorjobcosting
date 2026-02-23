import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing Consultant for Contractors",
  description:
    "A job costing consultant for owner-led contractors. Fixed-scope 30-day install: profit scoreboard, costing rules, billing cadence, and weekly meeting.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/job-costing-consultant`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/job-costing-consultant`,
    title: "Job Costing Consultant for Contractors — Fixed Scope, 30 Days",
    description:
      "Done-for-you job costing implementation for owner-led contractors. Not a report. A working system.",
  },
};

const faqs = [
  {
    question: "What does a job costing consultant do?",
    answer:
      "A job costing consultant builds the system that tracks what each job actually cost — labor, materials, subcontractors — against the invoice amount. We configure your accounting software, write the rules for your team, build your billing cadence, and run the weekly profit meeting until your team owns it. We don't produce a report and leave. We install a working system.",
  },
  {
    question: "How is this different from hiring a bookkeeper?",
    answer:
      "Bookkeepers record what happened. We build the system that tells you what each job cost and whether you made money on it. A bookkeeper keeps your books clean. We connect your field operations to your accounting data — that's a different discipline.",
  },
  {
    question: "How is this different from hiring a fractional CFO?",
    answer:
      "A fractional CFO is ongoing, advisory, and expensive. We do a fixed-scope install: 30 days, four deliverables, done. After the install, you own the system and run it independently. We don't embed as your ongoing financial executive — we build the infrastructure and hand it to you.",
  },
  {
    question: "What do I get at the end of the engagement?",
    answer:
      "Four working deliverables: a profit-per-job scoreboard configured in your accounting software, written costing rules your team can follow, a billing cadence tied to your real job milestones, and a weekly profit meeting with a reusable agenda and action tracker. Everything is documented so your team can run it without us.",
  },
  {
    question: "How long does the engagement last?",
    answer:
      "30 days. If we're not there on day 30, we keep working until we are at no additional cost. Some clients continue with an optional monthly managed engagement — that's available but never required.",
  },
  {
    question: "What accounting software do you work with?",
    answer:
      "QuickBooks Online, QuickBooks Desktop, Jobber, Housecall Pro, or a combination. We work around your existing setup. We don't require you to switch software.",
  },
  {
    question: "What size contractor do you work with?",
    answer:
      "Owner-led contracting businesses doing $750K–$8M in annual revenue. Below $750K, the volume doesn't typically justify the install. Above $8M, you likely need a full-time controller.",
  },
  {
    question: "Is this for general contractors or trade contractors?",
    answer:
      "Both, as long as you're owner-led and in the right revenue range. We work with electrical, HVAC, plumbing, roofing, remodeling, landscaping, and other trades. The system is adapted to how your work actually runs.",
  },
  {
    question: "How is this priced?",
    answer:
      "Fixed price per engagement, based on business size and complexity. No hourly billing. Book a call and we'll give you a fixed quote within 24 hours.",
  },
  {
    question: "Do you guarantee the results?",
    answer:
      "We guarantee you'll have a working system — scoreboard, rules, billing cadence, and meeting structure — installed and running by day 30. If we aren't there, we keep working until we are. We don't guarantee specific financial outcomes, because outcomes depend on your participation and your business.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Read access to your accounting software, a job and invoice list from the last 60–90 days, and both the owner and ops lead committed to a weekly 45-minute call for 30 days.",
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
  "@id": `${siteConfig.siteUrl}/job-costing-consultant#service`,
  name: "Job Costing Consultant for Contractors",
  description:
    "Fixed-scope job costing implementation for owner-led contractors. 30-day install produces a profit scoreboard, costing rules, billing cadence, and weekly profit meeting.",
  url: `${siteConfig.siteUrl}/job-costing-consultant`,
  provider: { "@id": `${siteConfig.siteUrl}/#organization` },
  serviceType: "Job Costing Consulting",
  areaServed: { "@type": "Country", name: "United States" },
};

export default function JobCostingConsultantPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Job Costing Consultant
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            A job costing consultant who installs the system, not just describes it.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            Fixed scope. Fixed price. 30 days. We build the profit scoreboard,
            write the costing rules, install the billing cadence, and run the
            weekly meeting — inside your business, not in a report.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="consultant-hero"
              className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              Book a Call
            </BookCallLink>
            <Link
              href="/offer"
              className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              See the Full Scope
            </Link>
          </div>
        </div>
      </section>

      {/* ── What a Consultant Actually Does ───────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What This Is
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Not a report. Not a recommendation. An install.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: "What most consultants deliver",
                items: [
                  "Assessment report with findings",
                  "Recommendations for what to build",
                  "Framework document you have to implement yourself",
                  "Ongoing advisory retainer",
                ],
                tone: "muted",
              },
              {
                heading: "What we deliver",
                items: [
                  "Profit scoreboard configured in your accounting software",
                  "Written costing rules your team can follow",
                  "Billing cadence tied to your real job milestones",
                  "Weekly meeting your team owns after 30 days",
                ],
                tone: "amber",
              },
              {
                heading: "What we don't do",
                items: [
                  "Open-ended retainers",
                  "General business strategy",
                  "Bookkeeping or tax work",
                  "Software selection consulting",
                ],
                tone: "muted",
              },
            ].map(({ heading, items, tone }) => (
              <div key={heading}>
                <h3 className="text-fg font-bold text-base mb-4">{heading}</h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`text-sm leading-relaxed pl-3 border-l-2 ${
                        tone === "amber"
                          ? "border-amber-500 text-muted"
                          : "border-line text-muted-2"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Four Deliverables ─────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The 30-Day Install
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Four deliverables. No scope creep.
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-line">
            {[
              {
                number: "01",
                heading: "Profit-Per-Job Scoreboard",
                body: "Configured inside your existing accounting software. Labor, materials, and subcontractors tracked per job. Gross profit visible per job — not just across the business.",
              },
              {
                number: "02",
                heading: "Job Costing Rules",
                body: "Written documentation your team can reference. Which cost category covers which expense. Who enters costs. When they're reviewed. What happens when something doesn't add up.",
              },
              {
                number: "03",
                heading: "Billing & AR Cadence",
                body: "Invoice timing tied to how your jobs actually complete. Progress billing for longer jobs. A collections routine that runs without the owner chasing every payment.",
              },
              {
                number: "04",
                heading: "Weekly 45-Minute Profit Meeting",
                body: "We run it with you for the first month. Written agenda, action tracker, owners and due dates. Designed to stay under 45 minutes and to hand off to your team.",
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
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ──────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Good Fit
              </p>
              <h2 className="text-headline text-fg mb-8">
                Owner-led contractors who want real numbers.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "$750K–$8M in annual revenue",
                  "Owner-led — you're in the business every day",
                  "You have accounting software (QB, Jobber, HCP, or similar)",
                  "You suspect you're leaving margin on the table",
                  "Willing to share your numbers and show up weekly",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 px-4 py-3"
                  >
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
                We&apos;re direct about who we don&apos;t work with.
              </h2>
              <ul className="flex flex-col gap-2">
                {[
                  "Won't share financial data",
                  "Can't commit to a weekly 45-minute call",
                  "Looking for a report or advisory only",
                  "Need bookkeeping cleanup first (we can refer you)",
                  "Revenue under $750K or over $8M",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-surface border border-line px-4 py-3"
                  >
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

      {/* ── Proof ─────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Typical Outcomes
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            What the install consistently delivers.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Margin clarity per job — before the next one starts",
              "Top 3–5 profit leaks identified from your real data",
              "Invoice timing on a consistent schedule, not memory",
              "A weekly meeting your team actually shows up to",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border border-line p-4"
              >
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
              Read detailed contractor outcome examples &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            What contractors ask before they book.
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
            Ready to get a fixed price?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="consultant-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
