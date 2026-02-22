import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Update these dates whenever the page content meaningfully changes.
// Using static dates prevents Google from treating every deploy as a "fresh update".
const LAUNCH = new Date("2026-02-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  return [
    {
      url: base,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/offer`,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/proof`,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: LAUNCH,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: LAUNCH,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/platforms/jobber`,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/platforms/housecall-pro`,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/platforms/quickbooks`,
      lastModified: LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
