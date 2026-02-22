"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/email";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; field?: string; message: string }
  | { status: "rate_limited" };

/** Safely extract the origin from a URL string; returns null on parse failure. */
function parseOrigin(val: string | null): string | null {
  if (!val) return null;
  try {
    return new URL(val).origin;
  } catch {
    return null;
  }
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // ── Honeypot — silent success + small delay so bots learn nothing ─────────
  const hp = (formData.get("website") ?? "").toString().trim();
  if (hp.length > 0) {
    await new Promise((r) =>
      setTimeout(r, 150 + Math.floor(Math.random() * 250))
    );
    return { status: "success" };
  }

  // ── Pre-cap: reject absurd payloads before doing any real work ────────────
  const rawMessage = (formData.get("message") ?? "").toString();
  if (rawMessage.length > 5000) {
    return { status: "error", message: "Message is too long." };
  }

  // ── Get headers once ──────────────────────────────────────────────────────
  const headersList = await headers();

  // ── Same-origin guard — reject cross-site POSTs silently ─────────────────
  const validOrigins = new Set([
    "https://www.contractorjobcosting.com",
    "https://contractorjobcosting.com",
    ...(process.env.NODE_ENV === "development"
      ? ["http://localhost:3000", "http://localhost"]
      : []),
  ]);
  const requestOrigin =
    parseOrigin(headersList.get("origin")) ??
    parseOrigin(headersList.get("referer"));
  if (requestOrigin && !validOrigins.has(requestOrigin)) {
    return { status: "success" };
  }

  // ── Get client IP + UA for rate limiting ──────────────────────────────────
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const ip = forwarded?.split(",")[0].trim() || realIp || "unknown";
  const ua = (headersList.get("user-agent") || "unknown").slice(0, 120);
  const rateKey = `${ip}:${ua}`;

  // ── Rate limit check ──────────────────────────────────────────────────────
  const { allowed } = checkRateLimit(rateKey);
  if (!allowed) {
    return { status: "rate_limited" };
  }

  // ── Validate form data ────────────────────────────────────────────────────
  const raw = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    website: formData.get("website"), // honeypot (secondary schema check)
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const firstZodError = parsed.error.errors[0];
    return {
      status: "error",
      field: firstZodError?.path[0]?.toString(),
      message: firstZodError?.message ?? "Please check your input and try again.",
    };
  }

  const { name, company, email, phone, message } = parsed.data;

  // ── Send notification email ───────────────────────────────────────────────
  try {
    await sendContactEmail({
      name,
      company: company ?? undefined,
      email,
      phone: phone ?? undefined,
      message,
    });
  } catch {
    // Log the failure timestamp only — no PII in server logs
    console.error(`[contact-form] Email delivery failed at ${new Date().toISOString()}`);
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please email us directly or try again in a moment.",
    };
  }

  // Log submission event (no PII)
  console.info(`[contact-form] Submission received at ${new Date().toISOString()}`);

  return { status: "success" };
}
