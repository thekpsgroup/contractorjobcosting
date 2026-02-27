import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config";

const COMPANY_NAME = "The KPS Group";
const ADDRESS_LINE1 = "2342 FM 36, Suite A";
const ADDRESS_LINE2 = "Caddo Mills, TX 75135";
const LAST_UPDATED = "February 27, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  alternates: { canonical: `${siteConfig.siteUrl}/privacy` },
  openGraph: {
    url: `${siteConfig.siteUrl}/privacy`,
    title: "Privacy Policy",
    description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy",
    description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteConfig.siteUrl}/privacy` },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="section-lg border-b border-line">
        <div className="container">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Legal
          </p>
          <h1 className="text-display text-fg mb-4">Privacy Policy</h1>
          <p className="text-subhead text-muted max-w-2xl">
            How {siteConfig.name} collects, uses, and protects your information.
          </p>
          <p className="text-muted-2 text-sm mt-4">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-fg text-xl font-bold mb-3">1. Who We Are</h2>
              <p className="text-muted leading-relaxed">
                {siteConfig.name} (<a href={siteConfig.siteUrl} className="text-amber-500">contractorjobcosting.com</a>) is a business advisory service operated by{" "}
                <a
                  href="https://www.thekpsgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500"
                >
                  {COMPANY_NAME}
                </a>
                , located at {ADDRESS_LINE1}, {ADDRESS_LINE2}. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">2. Information We Collect</h2>
              <p className="text-muted leading-relaxed mb-4">
                We collect information in two ways:
              </p>
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <p className="text-fg font-semibold mb-1">Information you provide directly</p>
                  <p className="text-muted text-sm leading-relaxed">
                    When you submit our contact form, we collect your name, email address, phone number (optional), business name, and message. This information is used solely to respond to your inquiry.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <p className="text-fg font-semibold mb-1">Information collected automatically</p>
                  <p className="text-muted text-sm leading-relaxed">
                    We use Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects anonymized data including pages visited, time on site, device type, and general geographic location. This data is aggregated and does not identify you personally. No cross-site tracking is performed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">3. Cookies</h2>
              <p className="text-muted leading-relaxed mb-4">
                This site uses cookies through Google Analytics 4. These are analytics cookies only. We do not use advertising cookies, retargeting cookies, or social media tracking pixels.
              </p>
              <div className="border border-line bg-canvas-alt p-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="text-left py-2 text-muted font-semibold">Cookie</th>
                      <th className="text-left py-2 text-muted font-semibold">Purpose</th>
                      <th className="text-left py-2 text-muted font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "_ga", purpose: "Google Analytics — distinguishes users", duration: "2 years" },
                      { name: "_ga_*", purpose: "Google Analytics — maintains session state", duration: "2 years" },
                      { name: "_gid", purpose: "Google Analytics — distinguishes users", duration: "24 hours" },
                    ].map((row) => (
                      <tr key={row.name} className="border-b border-line">
                        <td className="py-2 text-fg font-mono text-xs">{row.name}</td>
                        <td className="py-2 text-muted">{row.purpose}</td>
                        <td className="py-2 text-muted-2">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-2 text-sm mt-3 leading-relaxed">
                You can opt out of Google Analytics tracking at any time by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500"
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>
                , or by adjusting your browser's cookie settings.
              </p>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">4. How We Use Your Information</h2>
              <ul className="text-muted leading-relaxed list-disc pl-5 flex flex-col gap-2">
                <li>To respond to contact form inquiries</li>
                <li>To deliver services you have engaged us for</li>
                <li>To understand site usage and improve our content (analytics only)</li>
                <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">5. Third-Party Services</h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    name: "Google Analytics 4",
                    description: "Used for anonymous website analytics. Data is processed by Google under their privacy policy.",
                    link: "https://policies.google.com/privacy",
                    linkLabel: "Google Privacy Policy",
                  },
                  {
                    name: "Resend",
                    description: "Used to deliver contact form submissions to our team. Form data is transmitted securely and not stored by Resend beyond delivery.",
                    link: "https://resend.com/legal/privacy-policy",
                    linkLabel: "Resend Privacy Policy",
                  },
                  {
                    name: "Calendly",
                    description: "Our booking links use Calendly for scheduling. Calendly operates under their own privacy policy.",
                    link: "https://calendly.com/privacy",
                    linkLabel: "Calendly Privacy Policy",
                  },
                  {
                    name: "Vercel",
                    description: "Our site is hosted on Vercel. Vercel may process server-side request logs as part of hosting.",
                    link: "https://vercel.com/legal/privacy-policy",
                    linkLabel: "Vercel Privacy Policy",
                  },
                ].map((service) => (
                  <div key={service.name} className="border border-line bg-canvas-alt p-4">
                    <p className="text-fg font-semibold text-sm mb-1">{service.name}</p>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}{" "}
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-amber-500">
                        {service.linkLabel} →
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">6. Data Retention</h2>
              <p className="text-muted leading-relaxed">
                Contact form submissions are retained in our email inbox and CRM for as long as necessary to maintain our business relationship or respond to inquiries. Google Analytics data is retained for 14 months per our GA4 configuration. You may request deletion of your personal information at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">7. Your Rights</h2>
              <p className="text-muted leading-relaxed mb-3">
                Depending on your location, you may have rights under applicable law including:
              </p>
              <ul className="text-muted leading-relaxed list-disc pl-5 flex flex-col gap-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of analytics tracking</li>
              </ul>
              <p className="text-muted leading-relaxed mt-3">
                To exercise any of these rights, email us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-amber-500">{siteConfig.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">8. Security</h2>
              <p className="text-muted leading-relaxed">
                We take reasonable steps to protect your information from loss, misuse, and unauthorized access. However, no method of transmission over the internet is 100% secure. If you have questions about our security practices, contact us.
              </p>
            </div>

            <div>
              <h2 className="text-fg text-xl font-bold mb-3">9. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your information, email us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-amber-500">{siteConfig.email}</a>.
              </p>
              <p className="text-muted leading-relaxed mt-2">
                {COMPANY_NAME}, {ADDRESS_LINE1}, {ADDRESS_LINE2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
