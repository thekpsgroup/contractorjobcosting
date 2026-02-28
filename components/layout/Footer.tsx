import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { BookCallLink } from "@/components/ui/BookCallLink";

const mainLinks = [
  { href: "/offer", label: "The Offer" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const platformLinks = [
  { href: "/platforms/jobber", label: "Jobber" },
  { href: "/platforms/housecall-pro", label: "Housecall Pro" },
  { href: "/platforms/quickbooks", label: "QuickBooks" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="block text-fg font-bold text-base leading-tight">
                Contractor
              </span>
              <span className="block text-amber-500 font-bold text-base leading-tight">
                Job Costing
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Job costing and cash flow implementation for owner-led
              contractors. Fixed-scope. Real results.
            </p>
            <div className="mt-6">
              <BookCallLink
                source="footer"
                className="inline-block bg-amber-500 text-black font-bold text-xs tracking-wide px-5 py-2.5 hover:bg-amber-400 transition-colors"
              >
                Book a Call
              </BookCallLink>
            </div>
          </div>

          {/* Nav column */}
          <nav aria-label="Site pages">
            <p className="text-fg text-xs font-bold tracking-widest uppercase mb-4">
              Pages
            </p>
            <ul className="flex flex-col gap-2.5">
              {mainLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-sm hover:text-fg transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Platforms + Contact column */}
          <div>
            <nav aria-label="Platform integrations">
              <p className="text-fg text-xs font-bold tracking-widest uppercase mb-4">
                Platforms
              </p>
              <ul className="flex flex-col gap-2.5">
                {platformLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-muted text-sm hover:text-fg transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              <p className="text-fg text-xs font-bold tracking-widest uppercase mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-muted text-sm hover:text-fg transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted text-sm hover:text-fg transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other installs (cross-site network) */}
        <div className="border-t border-line pt-8 mb-8">
          <p className="text-muted-2 text-xs font-bold tracking-widest uppercase mb-4">
            The KPS Group Service Ecosystem
          </p>
          <div className="space-y-3">
            <div>
              <a
                href="https://www.contractorsetup.com/?utm_source=contractorjobcosting&utm_medium=referral&utm_campaign=network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-2 text-xs hover:text-fg transition-colors font-semibold"
              >
                Contractor Setup Install →
              </a>
              <p className="text-muted-2 text-xs mt-1">Foundation install for new contractors. Entity, banking, books, operating rhythm.</p>
            </div>
            <div>
              <span className="text-muted-2 text-xs font-semibold">Contractor Job Costing</span>
              <p className="text-muted-2 text-xs mt-1">Job costing & cash flow for $750K–$8M contractors. Know your margin. Fix your cash flow.</p>
            </div>
            <div>
              <a
                href="https://www.contractorscoo.com/?utm_source=contractorjobcosting&utm_medium=referral&utm_campaign=network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-2 text-xs hover:text-fg transition-colors font-semibold"
              >
                Contractors COO Install →
              </a>
              <p className="text-muted-2 text-xs mt-1">Operations leadership for $1M–$10M teams. Cadence, accountability, execution rhythm.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-muted-2 text-xs">
            &copy; {currentYear} {siteConfig.legalAttribution}
          </p>
          <p className="text-muted-2 text-xs max-w-sm">
            We are a PartnerStack partner for Jobber and Housecall Pro. We may
            earn a referral commission at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
