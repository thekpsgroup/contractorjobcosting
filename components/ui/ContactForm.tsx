"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { submitContact, type FormState } from "@/app/contact/actions";

const initialState: FormState = { status: "idle" };

export function ContactForm() {
  const [state, action, isPending] = useActionState<FormState, FormData>(
    submitContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Fire GA event on success — only when analytics is configured
  useEffect(() => {
    if (state.status === "success" && process.env.NEXT_PUBLIC_GA_ID) {
      sendGAEvent("event", "form_submit_success");
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-success bg-success/5 p-8"
      >
        <div className="flex items-start gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-success shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="text-fg font-bold text-base mb-1">Message received.</p>
            <p className="text-muted text-sm">
              We review every inquiry and respond within one business day.
              If your need is urgent, call or email us directly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (state.status === "rate_limited") {
    return (
      <div role="alert" className="border border-error bg-error/5 p-6">
        <p className="text-fg font-bold text-sm mb-1">Too many submissions.</p>
        <p className="text-muted text-sm">
          Please wait 15 minutes before submitting again, or reach us directly by phone or email.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} noValidate>
      {/* Error state */}
      {state.status === "error" && (
        <div
          id="form-error"
          role="alert"
          aria-live="assertive"
          className="mb-6 border border-error bg-error/5 p-4"
        >
          <p className="text-error text-sm font-medium">
            {state.message}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {/* Name + Company row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
              Name <span className="text-amber-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              aria-invalid={state.status === "error" || undefined}
              aria-describedby={state.status === "error" ? "form-error" : undefined}
              className="w-full bg-surface border border-line text-fg text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-fg mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              className="w-full bg-surface border border-line text-fg text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Business name"
            />
          </div>
        </div>

        {/* Email + Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
              Email <span className="text-amber-500" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              aria-invalid={state.status === "error" || undefined}
              aria-describedby={state.status === "error" ? "form-error" : undefined}
              className="w-full bg-surface border border-line text-fg text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-fg mb-2">
              Phone <span className="text-muted text-xs font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              className="w-full bg-surface border border-line text-fg text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="(555) 000-0000"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
            Message <span className="text-amber-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            aria-invalid={state.status === "error" || undefined}
            aria-describedby={state.status === "error" ? "form-error" : undefined}
            className="w-full bg-surface border border-line text-fg text-sm px-4 py-3 placeholder:text-muted-2 focus:outline-none focus:border-amber-500 transition-colors resize-y min-h-30"
            placeholder="Tell us briefly about your business and what you're trying to solve."
          />
        </div>

        {/* Honeypot — hidden from real users, visible to bots */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-amber-500 text-black font-bold text-sm px-8 py-4 hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {isPending ? "Sending…" : "Send Message"}
          </button>
          <p className="mt-3 text-muted text-xs">
            We respond within one business day.
          </p>
        </div>
      </div>
    </form>
  );
}
