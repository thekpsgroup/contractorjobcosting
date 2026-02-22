/**
 * Site-wide configuration — single source of truth.
 *
 * To deploy:
 *  1. Update phone, email, bookingUrl, notificationEmail below.
 *  2. Set RESEND_API_KEY + NOTIFICATION_EMAIL in your Vercel environment variables.
 *  3. Set NEXT_PUBLIC_GA_ID for Google Analytics (optional).
 *  4. Set NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION for Search Console (optional).
 */

export const siteConfig = {
  // ─── Brand ─────────────────────────────────────────────────────────────────
  name: "Contractor Job Costing",
  legalAttribution: "Contractor Job Costing is a service of The KPS Group.",
  tagline: "Know Your Margin. Fix Your Cash Flow. In 30 Days.",
  description:
    "Job costing and cash flow implementation for owner-led contractors doing $750K–$8M/year. Fixed-scope 30-day install. Real numbers, real margin clarity.",

  // ─── URLs ──────────────────────────────────────────────────────────────────
  // www is canonical — apex redirects to www (Vercel). Keep env var aligned.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.contractorjobcosting.com",

  // ─── Contact (update these before launch) ──────────────────────────────────
  phone: "(469) 534-3392",
  phoneHref: "tel:+14695343392",
  email: "sales@thekpsgroup.com",

  // ─── Booking link ──────────────────────────────────────────────────────────
  // Replace with your Calendly, Cal.com, or other scheduling URL
  bookingUrl: "https://calendly.com/thekpsgroup/30min",

  // ─── Form notification (set via NOTIFICATION_EMAIL env var on Vercel) ──────
  notificationEmail:
    process.env.NOTIFICATION_EMAIL ?? "sales@thekpsgroup.com",

  // ─── Analytics ─────────────────────────────────────────────────────────────
  // Set NEXT_PUBLIC_GA_ID in Vercel env vars to enable Google Analytics
  analyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",

  // Set NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION in Vercel env vars (or leave as default below)
  searchConsoleVerification:
    process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION ??
    "UWNdf7a2hFdMKwX-q-QyuFj5InuKBXEMfUewBbYxpMs",

  // ─── Affiliate / referral links ────────────────────────────────────────────
  // PartnerStack referral links for Jobber and Housecall Pro.
  // Set to empty string "" to remove the referral block from a platform page.
  affiliateLinks: {
    // sid1 SubID tells PartnerStack which page drove the conversion (dashboard analytics)
    jobber: "https://go.getjobber.com/fgq3a1l0ag8t?sid1=jobber-page",
    housecallPro: "https://housecallpro.partnerlinks.io/thekpsgroup?sid1=hcp-page",
    // QuickBooks — direct link only (The KPS Group holds QuickBooks ProAdvisor Gold status)
    quickbooks: "https://quickbooks.intuit.com/",
  },

  // ─── Social (optional — add if you have profiles) ──────────────────────────
  social: {
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
