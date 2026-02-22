import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Legitimate crawlers — full access ──────────────────────────────
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "DuckDuckBot",
          "Slurp",
          "LinkedInBot",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ── AI assistants used for search / answers — allowed ──────────────
      // Keeping these allows the site to appear in AI-generated search answers
      // (ChatGPT Browse, Perplexity, etc.) which can drive qualified leads.
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot"],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ── AI training scrapers — blocked ─────────────────────────────────
      // These crawl solely to train models, not to serve search results.
      {
        userAgent: [
          "CCBot",             // CommonCrawl — primary AI training dataset
          "anthropic-ai",      // Anthropic training crawler
          "ClaudeBot",         // Anthropic training crawler (alternate UA)
          "Claude-Web",        // Anthropic training crawler (alternate UA)
          "Bytespider",        // ByteDance / TikTok training crawler
          "Diffbot",           // Data extraction / AI training
          "img2dataset",       // Image dataset scraper
          "Omgilibot",
          "omgili",
          "Applebot-Extended", // Apple ML training (separate from Applebot search)
          "DataForSeoBot",
          "PetalBot",          // Huawei training crawler
          "Scrapy",
        ],
        disallow: "/",
      },

      // ── SEO audit tools — rate limited ─────────────────────────────────
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 10,
      },

      // ── Everything else — standard access ──────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/cdn-cgi/"],
      },
    ],

    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
