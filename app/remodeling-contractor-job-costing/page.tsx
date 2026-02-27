import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookCallLink } from "@/components/ui/BookCallLink";

export const metadata: Metadata = {
  title: "Job Costing for Remodeling Contractors",
  description:
    "Job costing for residential remodeling contractors. Change order tracking, milestone billing, and per-job margin visibility — installed in 30 days.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/remodeling-contractor-job-costing`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/remodeling-contractor-job-costing`,
    title: "Job Costing for Remodeling Contractors — 30-Day Install",
    description:
      "Change orders, milestone billing, and sub-heavy jobs require specific job costing. We install the system for remodelers in 30 days.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Job Costing for Remodeling Contractors",
    description: "Job costing for residential remodeling contractors. Change order tracking, milestone billing, and per-job margin visibility — installed in 30 days.",
  },
};

const faqs = [
  {
    question: "How do change orders affect job costing for remodelers?",
    answer:
      "Change orders are a major source of margin erosion for remodelers. If change order costs are tracked but the additional revenue isn't billed, the job shows a loss that doesn't exist. If neither is tracked, you're flying blind. Our costing rules require change orders to be documented, costed, and billed before the job closes.",
  },
  {
    question: "What billing method works best for remodeling jobs?",
    answer:
      "It depends on job length and size. For jobs under 4 weeks, completion billing with a deposit usually works. For longer jobs ($100K+), milestone billing — tied to real project phases like demo complete, rough-in complete, finish work complete — prevents 30-45 day invoice lag and keeps cash flow predictable. We implement whichever fits your actual project structure.",
  },
  {
    question: "How do you track subcontractor costs per job?",
    answer:
      "We write the rules: every sub invoice gets coded to the specific job it was performed on, not to a general overhead category. The costing rule defines when to code it (at invoice receipt, not at payment) and who is responsible for entering it. This closes the gap between what you paid subs and what shows up in your job cost report.",
  },
  {
    question: "What is the most common profit leak in remodeling?",
    answer:
      "Invoice lag — sending the final invoice 30–45 days after job completion. During that gap, you've already paid labor and subs and purchased materials. The money is out, but it hasn't come back yet. Milestone billing and a clear job closeout trigger eliminate most of this lag.",
  },
  {
    question: "Can you work with my project management software?",
    answer:
      "We work around your existing setup — QuickBooks, Jobber, Buildertrend, CoConstruct, or a combination. We don't require you to switch software. The job costing layer is built on top of your accounting system, with rules that connect to whatever job tracking you already use.",
  },
  {
    question: "How do you handle WIP for remodeling projects?",
    answer:
      "For most remodeling contractors at the $750K–$8M revenue range, formal WIP schedules aren't necessary — milestone billing and a clean job cost report accomplish the same goal. If your revenue recognition requires WIP accounting, we'll tell you during the discovery call and map out what's needed.",
  },
  {
    question: "Do you work with residential or commercial remodelers?",
    answer:
      "Both, as long as you're owner-led and in the $750K–$8M revenue range. Residential remodelers typically need milestone billing and change order controls. Light commercial remodelers often need those plus sub bid tracking. We adapt the system to how your work actually runs.",
  },
  {
    question: "How long does the install take?",
    answer:
      "30 days. Four deliverables: profit-per-job scoreboard, written costing rules, billing cadence, and weekly profit meeting. If we're not there by day 30, we keep working until we are at no additional cost.",
  },
  {
    question: "What size remodeling contractor is this for?",
    answer:
      "Owner-led remodeling businesses doing $750K–$8M in annual revenue. Below $750K, the volume typically doesn't justify the install. Above $8M, you likely need a full-time controller or project accountant.",
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
  "@id": `${siteConfig.siteUrl}/remodeling-contractor-job-costing#service`,
  name: "Job Costing for Remodeling Contractors",
  description:
    "Done-for-you job costing for residential and light commercial remodeling contractors. Change order tracking, milestone billing, and per-job margin visibility. 30-day install.",
  url: `${siteConfig.siteUrl}/remodeling-contractor-job-costing`,
  provider: { "@id": `${siteConfig.siteUrl}/#organization` },
  serviceType: "Remodeling Contractor Job Costing",
  areaServed: { "@type": "Country", name: "United States" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Remodeling Job Costing", item: `${siteConfig.siteUrl}/remodeling-contractor-job-costing` },
  ],
};

export default function RemodelingContractorJobCostingPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Remodeling Contractor Job Costing
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Job costing built for how remodeling work actually runs.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            Change orders, milestone billing, and sub-heavy jobs create specific
            costing problems. We install the system for remodeling contractors
            in 30 days — inside your existing accounting setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookCallLink
              source="remodeling-hero"
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

      {/* ── Remodeling-Specific Problems ──────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Remodeling Costing Problem
          </p>
          <h2 className="text-headline text-fg mb-8 max-w-xl">
            Three costing gaps that are specific to remodeling.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: "Change orders absorbed without billing",
                body: "Scope expands, labor and materials go in, and the change order gets handled informally. The cost hits the job. The revenue doesn't. Margin disappears and you don't see it until closeout — if then.",
              },
              {
                heading: "Sub costs coded to overhead",
                body: "Sub invoices arrive after the job closes and get coded to a general overhead category instead of the specific job. The job looks profitable. The business absorbs the cost elsewhere. The true margin is hidden.",
              },
              {
                heading: "Final invoice sent 30–45 days late",
                body: "Punch lists, walkthroughs, final change orders — the closeout process drags. The invoice doesn't go out until everything is settled. That gap is your cash flow problem.",
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
            What Gets Tracked Per Job
          </p>
          <h2 className="text-headline text-fg mb-10 max-w-xl">
            Every cost, every job, every time.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Labor", detail: "Crew hours coded to the job from timesheets. Includes subbed labor when applicable." },
              { label: "Materials", detail: "Every purchase coded to the job it was used on — not to overhead." },
              { label: "Subcontractors", detail: "Sub invoices matched to the job at invoice receipt, not at payment." },
              { label: "Change Orders", detail: "Documented, costed, and billed before job close. Not absorbed quietly." },
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
            Four deliverables adapted to remodeling.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            The same four deliverables as our standard install — configured
            specifically for how remodeling work runs: milestone billing,
            change order rules, and sub-heavy cost tracking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                heading: "Profit-Per-Job Scoreboard",
                body: "Per-job view of labor, materials, subs, and change orders against the invoiced amount. Gross profit per project — not just per year.",
              },
              {
                heading: "Job Costing Rules",
                body: "Written rules for change order documentation, sub cost entry timing, material coding, and crew time entry — adapted to your workflow.",
              },
              {
                heading: "Milestone Billing Cadence",
                body: "Invoice triggers mapped to your real project phases. Change order billing policy. A collections routine that doesn't require the owner to chase every payment.",
              },
              {
                heading: "Weekly 45-Minute Profit Meeting",
                body: "Project-by-project cost review. Open change orders on the agenda. AR aging reviewed every meeting. Structured to stay under 45 minutes.",
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
              See the full offer with pricing details &rarr;
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
            Invoice lag from 38 days to 9 days — two billing cycles.
          </h2>
          <div className="border border-line p-8 max-w-2xl bg-canvas">
            <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
              Industry / Revenue
            </p>
            <p className="text-fg text-sm font-semibold mb-6">
              Residential Remodeling · $1M–$2M
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Strong reputation, full pipeline, and a cash problem. Final
              invoices went out 30–45 days after job completion. The owner was
              making payroll decisions based on anxiety, not cash position.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The install focused on the billing cadence — milestone triggers
              tied to real project phases and a progress billing rule at 70%
              completion for larger jobs. Within two billing cycles, invoice
              lag dropped from 38 days to 9 days.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { metric: "Invoice lag before", value: "38 days avg" },
                { metric: "Invoice lag after", value: "9 days avg" },
                { metric: "Time to result", value: "2 billing cycles" },
              ].map(({ metric, value }) => (
                <div key={metric} className="border border-line p-3 bg-surface">
                  <p className="text-muted-2 text-xs uppercase tracking-wider mb-1">{metric}</p>
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Remodeling-specific job costing questions.
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
            Ready to know your margin on every job?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll confirm you&apos;re a fit and
            give you a fixed quote within 24 hours.
          </p>
          <BookCallLink
            source="remodeling-cta"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </BookCallLink>
        </div>
      </section>
    </>
  );
}
