"use server";

import { headers } from "next/headers";
import { contactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/email";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "rate_limited" };

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // ── Get client IP for rate limiting ──────────────────────────────────────
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  // ── Rate limit check ──────────────────────────────────────────────────────
  const { allowed } = checkRateLimit(ip);
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
    website: formData.get("website"), // honeypot
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Please check your input and try again.";
    return { status: "error", message: firstError };
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
