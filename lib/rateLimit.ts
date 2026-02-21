/**
 * In-memory rate limiter — suitable for Vercel serverless (per-instance).
 *
 * Note: In a multi-instance deployment, each instance maintains its own map.
 * For a contact form on a marketing site this provides meaningful spam reduction
 * without requiring a Redis dependency. If you scale to high volume, swap this
 * for Upstash Redis + @upstash/ratelimit.
 */

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const store = new Map<string, RateLimitEntry>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function evictExpired(): void {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now - entry.windowStart > WINDOW_MS) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
} {
  evictExpired();

  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    store.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  store.set(ip, entry);
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}
