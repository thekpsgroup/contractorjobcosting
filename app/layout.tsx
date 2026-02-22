import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },

  applicationName: siteConfig.name,
  category: "Business Services",

  title: {
    default: "Contractor Job Costing — 30-Day Install for Owner-Led Contractors",
    template: "%s | Contractor Job Costing",
  },
  description: siteConfig.description,

  keywords: [
    "contractor job costing",
    "job costing for contractors",
    "contractor cash flow",
    "contractor profit margins",
    "construction job costing",
    "trades business financial systems",
    "contractor accounting setup",
    "QuickBooks job costing contractors",
    "Jobber job costing",
    "contractor profit tracking",
    "owner-led contractor financials",
  ],

  authors: [{ name: "The KPS Group", url: siteConfig.siteUrl }],
  creator: "The KPS Group",
  publisher: "The KPS Group",

  alternates: {
    canonical: siteConfig.siteUrl,
    languages: { "en-US": siteConfig.siteUrl },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Contractor Job Costing — 30-Day Install for Owner-Led Contractors",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: "Contractor Job Costing — 30-Day Install for Owner-Led Contractors",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  ...(siteConfig.searchConsoleVerification && {
    verification: {
      google: siteConfig.searchConsoleVerification,
    },
  }),
};

// ── Structured data ───────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.siteUrl}/#organization`,
  name: "Contractor Job Costing",
  alternateName: "CJC",
  description:
    "Job costing and cash flow implementation for owner-led contractors. Fixed-scope 30-day install.",
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Invoice",
  serviceType: ["Job Costing", "Cash Flow Management", "Business Financial Systems"],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Job Costing",
    "Contractor Accounting",
    "QuickBooks",
    "Jobber",
    "Housecall Pro",
    "Cash Flow Management",
    "Contractor Profit Margins",
  ],
  parentOrganization: {
    "@type": "Organization",
    "@id": "https://thekpsgroup.com/#organization",
    name: "The KPS Group",
    url: "https://thekpsgroup.com",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "QuickBooks ProAdvisor Gold",
    credentialCategory: "Professional Certification",
    recognizedBy: {
      "@type": "Organization",
      name: "Intuit",
    },
  },
  sameAs: [
    ...(siteConfig.social.linkedin ? [siteConfig.social.linkedin] : []),
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.siteUrl}/#organization`,
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <meta name="format-detection" content="telephone=no" />
        {/* ── Geo / local SEO ──────────────────────────────────────────── */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas, Texas" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        {/* ── Resource hints ───────────────────────────────────────────── */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="flex flex-col min-h-dvh">
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 bg-amber-500 text-black font-bold text-sm px-4 py-2"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>

        <Footer />
        <MobileCTABar />

        {siteConfig.analyticsId && (
          <GoogleAnalytics gaId={siteConfig.analyticsId} />
        )}
      </body>
    </html>
  );
}
