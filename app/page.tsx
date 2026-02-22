import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contractor Job Costing — Know Your Margin in 30 Days",
  description:
    "Job costing and cash flow implementation for owner-led contractors doing $750K–$8M/year. Fixed-scope 30-day install. Find your profit leaks. Get paid faster.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    url: siteConfig.siteUrl,
    title: "Contractor Job Costing — Know Your Margin in 30 Days",
    description:
      "Job costing and cash flow implementation for owner-led contractors. Fixed-scope 30-day install.",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.siteUrl}/#webpage`,
  name: "Contractor Job Costing — Know Your Margin in 30 Days",
  url: siteConfig.siteUrl,
  description:
    "Job costing and cash flow implementation for owner-led contractors doing $750K–$8M/year. Fixed-scope 30-day install. Find your profit leaks. Get paid faster.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": `${siteConfig.siteUrl}/#organization` },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: siteConfig.bookingUrl,
    },
    name: "Book a Discovery Call",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            30-Day Install · Fixed Scope · Real Numbers
          </p>
          <h1 className="text-display text-fg mb-6 max-w-3xl">
            Know Your Margin.<br />
            Fix Your Cash Flow.<br />
            In 30 Days.
          </h1>
          <p className="text-subhead text-muted max-w-2xl mb-10">
            We install job costing into your contracting business — the processes,
            the cadence, and the clarity — so you stop guessing and start running
            on real numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              Book a Call
            </a>
            <Link
              href="/offer"
              className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas text-center"
            >
              See the 30-Day Install
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            Running blind is the default. It doesn&apos;t have to be.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: "01",
                heading: "You finish jobs without knowing if you made money.",
                body: "Your accountant tells you the annual number. By then, six months of margin-destroying jobs are already behind you and the damage is done.",
              },
              {
                number: "02",
                heading: "Your best customers might be your worst jobs.",
                body: "Volume looks good. The phone is busy. But without job-level costing, you have no idea which work actually pays and which work you're subsidizing.",
              },
              {
                number: "03",
                heading: "Cash comes in, cash goes out, and you're always guessing.",
                body: "Invoicing late, chasing payments late, and making payroll decisions based on vibes instead of a real cash position.",
              },
            ].map(({ number, heading, body }) => (
              <div key={number}>
                <p className="text-amber-500/50 font-bold text-4xl font-mono mb-4">
                  {number}
                </p>
                <h3 className="text-fg font-bold text-lg mb-3 leading-snug">
                  {heading}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-headline text-fg mb-4 max-w-xl">
            Four deliverables. 30 days. Your system, running.
          </h2>
          <p className="text-muted text-base mb-12 max-w-2xl">
            The 30-Day Contractor Job Costing Install is fixed scope. You know
            exactly what you&apos;re getting before we start.
          </p>

          <div className="flex flex-col gap-0 divide-y divide-line">
            {[
              {
                label: "Deliverable 1",
                heading: "Profit-Per-Job Scoreboard",
                body: "A clean view of labor, materials, and subcontractor costs against each job — plus gross profit per job. You see where money goes before the next job starts, not after your accountant files taxes.",
              },
              {
                label: "Deliverable 2",
                heading: "Job Costing Rules",
                body: "We write the rules: what costs get coded where, who enters them, and when you review them. No more guessing what goes in which bucket. Everyone on your team knows the system.",
              },
              {
                label: "Deliverable 3",
                heading: "Billing & AR Cadence",
                body: "Invoice timing that matches how your jobs actually complete. A collections routine that doesn't rely on memory, sticky notes, or awkward follow-up calls three months later.",
              },
              {
                label: "Deliverable 4",
                heading: "Weekly Profit Meeting",
                body: "45 minutes, every week. A written agenda, an action tracker, owners and dates on every item. We run the first month. You own it after. The cadence is the system.",
              },
            ].map(({ label, heading, body }) => (
              <div
                key={label}
                className="py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12"
              >
                <p className="text-muted text-xs font-bold tracking-widest uppercase mt-1">
                  {label}
                </p>
                <div>
                  <h3 className="text-fg font-bold text-xl mb-3">{heading}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/offer"
              className="inline-block border border-amber-500 text-amber-500 font-bold text-sm tracking-wide px-8 py-4 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Full Offer Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                Good Fit
              </p>
              <h2 className="text-headline text-fg mb-8">
                Built for contractors who run serious businesses.
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "$750K–$8M in annual revenue",
                  "Owner-led — you're in the business every day",
                  "You suspect you're leaving margin on the table but can't prove it",
                  "You're too busy to hire a CFO but can't keep running blind",
                  "You're willing to share your numbers and show up to a weekly call",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-4 h-4 shrink-0 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center"
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
              <ul className="flex flex-col gap-4">
                {[
                  "Won't share financial data — we can't build a system we can't see",
                  "Can't commit to a weekly call — the cadence is the product",
                  "Looking for free advice without implementation",
                  "Need bookkeeping cleanup first (we can refer you)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-4 h-4 shrink-0 bg-line border border-line flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
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

      {/* ── Proof Teaser ─────────────────────────────────────────────────── */}
      <section className="section border-b border-line bg-surface">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Typical Outcomes
          </p>
          <h2 className="text-headline text-fg mb-12 max-w-xl">
            What contractors typically see after the install.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                stat: "Margin clarity per job",
                detail:
                  "You know whether you made money before the next job starts.",
              },
              {
                stat: "3–5 profit leaks identified",
                detail:
                  "Documented and ranked. You know exactly where you're leaving money.",
              },
              {
                stat: "Faster invoicing",
                detail:
                  "A billing cadence that runs on schedule, not on memory.",
              },
              {
                stat: "Weekly operating rhythm",
                detail:
                  "A meeting that actually runs — with an agenda, actions, and owners.",
              },
            ].map(({ stat, detail }) => (
              <div
                key={stat}
                className="border border-line p-6 bg-canvas"
              >
                <p className="text-fg font-bold text-lg mb-2">{stat}</p>
                <p className="text-muted text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted-2 text-xs italic">
            Outcomes listed are typical, not guaranteed. Results vary by business
            size, data quality, and owner participation.
          </p>

          <div className="mt-8">
            <Link
              href="/proof"
              className="text-amber-500 font-bold text-sm hover:text-amber-400 transition-colors"
            >
              Read detailed outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Platforms ─────────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Platform Agnostic
          </p>
          <h2 className="text-headline text-fg mb-4 max-w-xl">
            Works with the tools you&apos;re already using.
          </h2>
          <p className="text-muted text-sm mb-12 max-w-2xl">
            We don&apos;t require software changes. We layer job costing on top
            of your existing setup — Jobber, Housecall Pro, or QuickBooks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-line border border-line">
            {[
              {
                name: "Jobber",
                href: "/platforms/jobber",
                body: "Jobber runs your operations. We add the financial layer that tells you whether those operations are profitable.",
              },
              {
                name: "Housecall Pro",
                href: "/platforms/housecall-pro",
                body: "Housecall Pro handles dispatch and invoicing. We build the job costing system that HCP doesn't provide.",
              },
              {
                name: "QuickBooks",
                href: "/platforms/quickbooks",
                body: "QB has job costing built in. We configure it properly, write the rules, and make sure it actually gets used.",
              },
            ].map(({ name, href, body }) => (
              <Link
                key={href}
                href={href}
                className="block p-8 hover:bg-surface transition-colors group"
              >
                <h3 className="text-fg font-bold text-lg mb-3 group-hover:text-amber-500 transition-colors">
                  {name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{body}</p>
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                  How it works →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Band ───────────────────────────────────────────────── */}
      <section className="bg-amber-500 py-16 px-6">
        <div className="container text-center">
          <h2 className="text-headline text-black mb-4 font-extrabold">
            Ready to know your numbers?
          </h2>
          <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll tell you if you&apos;re a fit, and
            if so, exactly what the install looks like for your business.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold text-sm tracking-wide px-10 py-4 hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
          >
            Book a Call
          </a>
          <p className="mt-4 text-black/75 text-xs">
            No pitch deck. No sales pressure. Just a conversation.
          </p>
        </div>
      </section>
    </>
  );
}
