import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Update these dates whenever the page content meaningfully changes.
// Using static dates prevents Google from treating every deploy as a "fresh update".
const LAUNCH = new Date("2026-02-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  return [
    { url: base,                               lastModified: LAUNCH },
    { url: `${base}/offer`,                    lastModified: LAUNCH },
    { url: `${base}/proof`,                    lastModified: LAUNCH },
    { url: `${base}/about`,                    lastModified: LAUNCH },
    { url: `${base}/contact`,                  lastModified: LAUNCH },
    { url: `${base}/platforms/jobber`,         lastModified: LAUNCH },
    { url: `${base}/platforms/housecall-pro`,  lastModified: LAUNCH },
    { url: `${base}/platforms/quickbooks`,     lastModified: LAUNCH },
  ];
}
