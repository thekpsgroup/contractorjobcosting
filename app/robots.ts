import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const allowRenderAssets = ["/_next/static/", "/_next/image"];

  return {
    rules: [
      // ── Legitimate crawlers — full access ──────────────────────────────
      // NOTE: Do not block render-critical assets. If you disallow /_next/,
      // explicitly allow /_next/static/ (and /_next/image if used).
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "DuckDuckBot",
          "Slurp",
          "LinkedInBot",
          "Applebot",
        ],
        allow: ["/", ...allowRenderAssets],
        disallow: ["/api/", "/_next/"],
      },

      // ── AI assistants used for search / answers — allowed ──────────────
      // Keeping these allows the site to appear in AI-generated search answers.
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot"],
        allow: ["/", ...allowRenderAssets],
        disallow: ["/api/", "/_next/"],
      },

      // ── AI training scrapers — blocked ─────────────────────────────────
      // These crawl solely to train models / build datasets.
      {
        userAgent: [
          "CCBot", // CommonCrawl — primary AI training dataset
          "anthropic-ai", // Anthropic training crawler
          "ClaudeBot", // Anthropic training crawler (alternate UA)
          "Claude-Web", // Anthropic training crawler (alternate UA)
          "Bytespider", // ByteDance / TikTok training crawler
          "Diffbot", // Data extraction / AI training
          "img2dataset", // Image dataset scraper
          "Omgilibot",
          "omgili",
          "Applebot-Extended", // Apple ML usage control (separate from Applebot search)
          "DataForSeoBot",
          "PetalBot", // Huawei crawler
          "Scrapy",
        ],
        disallow: "/",
      },

      // ── SEO audit tools — rate limited (best-effort) ───────────────────
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        allow: ["/", ...allowRenderAssets],
        disallow: ["/api/", "/_next/"],
        crawlDelay: 10,
      },

      // ── Everything else — standard access ──────────────────────────────
      {
        userAgent: "*",
        allow: ["/", ...allowRenderAssets],
        disallow: ["/api/", "/_next/", "/cdn-cgi/"],
      },
    ],

    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}