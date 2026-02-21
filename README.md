# Contractor Job Costing — Website

Production marketing website for [contractorjobcosting.com](https://contractorjobcosting.com).

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Resend, Vercel

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values
cp .env.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Configuration

All site-wide values live in **one file: `lib/config.ts`**. Change once, updates everywhere.

### Booking Link

```ts
// lib/config.ts
bookingUrl: "https://calendly.com/your-actual-link",
```

Replace with your Calendly, Cal.com, or other scheduling URL.

### Phone and Email

```ts
// lib/config.ts
phone: "(555) 000-0000",
phoneHref: "tel:+15550000000",
email: "hello@contractorjobcosting.com",
```

### Affiliate / Referral Links

```ts
// lib/config.ts
affiliateLinks: {
  jobber: "https://getjobber.com/?ref=YOUR_REF_CODE",
  housecallPro: "https://www.housecallpro.com/?ref=YOUR_REF_CODE",
  quickbooks: "https://quickbooks.intuit.com/", // no affiliate — direct link
},
```

Set any value to `""` (empty string) to hide the referral block on that platform page.

---

## Environment Variables

Copy `.env.example` to `.env.local` and set:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Your Resend API key |
| `NOTIFICATION_EMAIL` | Yes | Email that receives contact form submissions |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 Measurement ID (G-XXXXXXXXXX) |
| `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION` | No | Search Console HTML tag content value |

### Setting Up Resend

1. Create an account at resend.com
2. Verify your sending domain (contractorjobcosting.com) — add the DNS records they provide
3. Create an API key
4. Set `RESEND_API_KEY` in your env file
5. Update the `from` address in `lib/email.ts` to match your verified domain

---

## Analytics

### Google Analytics 4

1. Create a GA4 property at analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel environment variables

**Events tracked automatically:**
- `book_call_click` — every "Book a Call" button click (includes `source` param)
- `form_submit_success` — contact form successful submission

### Google Search Console Verification

1. Add property in Search Console
2. Choose "HTML tag" verification method
3. Copy the `content` attribute value from the meta tag
4. Set `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION=your_value` in Vercel env vars

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables (or use Vercel dashboard)
vercel env add RESEND_API_KEY
vercel env add NOTIFICATION_EMAIL
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION
```

Or connect your GitHub repo to Vercel for automatic deployments on push to main.

**Environment variable scopes on Vercel:**
- `RESEND_API_KEY` — Production + Preview, server-side only (no NEXT_PUBLIC_ prefix)
- `NOTIFICATION_EMAIL` — Production + Preview, server-side only
- `NEXT_PUBLIC_GA_ID` — Production only (or all environments for testing)
- `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION` — Production only

---

## Testing the Contact Form

### Local testing

1. Set `RESEND_API_KEY` and `NOTIFICATION_EMAIL` in `.env.local`
2. Run `npm run dev`
3. Visit http://localhost:3000/contact
4. Submit a test message and check the notification inbox

**Test honeypot:** Open DevTools, find the hidden `website` input, fill it in, submit — should silently reject (no success state, no email sent).

**Test rate limiting:** Submit the form 4+ times rapidly — the 4th attempt should return the rate limit error UI.

### Production testing

After deploying, submit a test from the live /contact page and confirm:
1. Success state appears in the browser
2. Notification email arrives at `NOTIFICATION_EMAIL`
3. Reply-to is set to the submitter's email address

---

## Testing GA Events

1. Open Chrome DevTools → Network tab → filter by `collect` or `google-analytics`
2. Click a "Book a Call" button → confirm `book_call_click` event
3. Submit the contact form → confirm `form_submit_success` event

Or use GA4 DebugView (Admin → DebugView) in real-time.

---

## Build Commands

```bash
npm run build       # Production build
npm run typecheck   # TypeScript check only
npm run lint        # ESLint
npm run dev         # Development server
npm start           # Production server (after build)
```

---

## Pages

| URL | File |
|---|---|
| `/` | `app/page.tsx` |
| `/offer` | `app/offer/page.tsx` |
| `/proof` | `app/proof/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/platforms/jobber` | `app/platforms/jobber/page.tsx` |
| `/platforms/housecall-pro` | `app/platforms/housecall-pro/page.tsx` |
| `/platforms/quickbooks` | `app/platforms/quickbooks/page.tsx` |
| `/sitemap.xml` | `app/sitemap.ts` |
| `/robots.txt` | `app/robots.ts` |

---

## Launch Checklist

1. **Domain / DNS** — Point contractorjobcosting.com to Vercel. Add domain in Vercel → Project Settings → Domains. SSL is automatic.

2. **Resend domain verification** — Verify your sending domain in Resend. Add SPF and DKIM DNS records. Update `from` in `lib/email.ts`.

3. **Set env vars on Vercel** — `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION`.

4. **Update booking link** — Replace placeholder in `lib/config.ts → bookingUrl` with your real scheduling URL.

5. **Update phone and email** — Set real values in `lib/config.ts → phone`, `phoneHref`, `email`.

6. **Test form end-to-end** — Submit from live `/contact` page. Confirm email delivery and correct reply-to.

7. **Verify GA events** — Confirm `book_call_click` and `form_submit_success` appear in GA4 Realtime or DebugView.

8. **Search Console** — Verify property, then submit sitemap: `https://contractorjobcosting.com/sitemap.xml`.

9. **Update affiliate links** — Replace `?ref=placeholder` in `lib/config.ts → affiliateLinks` with your real PartnerStack codes.

10. **Lighthouse audit** — Run on the live site. Targets: 95+ Performance, 100 Accessibility, 100 SEO.
