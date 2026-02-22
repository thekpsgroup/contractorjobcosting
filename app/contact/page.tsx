import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ContactForm } from "@/components/ui/ContactForm";
import { BookCallLink } from "@/components/ui/BookCallLink";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Contractor Job Costing",
  description:
    "Book a call, send a message, or reach us directly by phone or email. We respond to every inquiry within one business day.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/contact`,
    title: "Contact — Contractor Job Costing",
    description:
      "Book a call or send us a message. We respond to every inquiry within one business day.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.siteUrl}/contact#contactpage`,
  name: "Contact Contractor Job Costing",
  url: `${siteConfig.siteUrl}/contact`,
  description: "Book a call, send a message, or reach us directly by phone or email.",
  mainEntity: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="text-display text-fg mb-6 max-w-2xl">
            Contact Contractor Job Costing
          </h1>
          <p className="text-subhead text-muted max-w-xl">
            Book a call, send a message, or reach us directly. We respond to
            every inquiry within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact grid ─────────────────────────────────────────────────── */}
      <section className="section border-b border-line">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — direct contact */}
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-8">
                Reach Us Directly
              </h2>

              {/* Book a call — primary action */}
              <div className="border border-amber-500/30 bg-amber-500/5 p-6 mb-8">
                <p className="text-fg font-bold text-base mb-2">
                  Schedule a call directly
                </p>
                <p className="text-muted text-sm mb-5 leading-relaxed">
                  The fastest way to move forward. We keep slots available for
                  qualified contractors. 30 minutes. No pitch deck.
                </p>
                <BookCallLink
                  source="contact-cta"
                  className="inline-block bg-amber-500 text-black font-bold text-sm tracking-wide px-6 py-3 hover:bg-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  Book a 30-Minute Call →
                </BookCallLink>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-6 divide-y divide-line">
                <div className="pt-0">
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Phone
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-fg font-bold text-xl hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="pt-6">
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-fg font-bold text-xl hover:text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="pt-6">
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-2">
                    Response time
                  </p>
                  <p className="text-fg text-sm">Within one business day.</p>
                </div>

                <div className="pt-6">
                  <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-3">
                    Legal
                  </p>
                  <p className="text-muted-2 text-xs leading-relaxed">
                    Contractor Job Costing is a service of The KPS Group.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h2 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-8">
                Send a Message
              </h2>
              <p className="text-muted text-sm mb-8 leading-relaxed">
                Prefer to write first? Use the form below. We review every
                message and respond within one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
