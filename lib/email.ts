import { Resend } from "resend";
import { siteConfig } from "./config";

// Resend client — initialized lazily so missing API key doesn't crash dev builds
let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "RESEND_API_KEY environment variable is not set. " +
          "Add it to your .env.local file or Vercel environment variables."
      );
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export interface ContactEmailPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

function buildEmailHtml(payload: ContactEmailPayload): string {
  const { name, company, email, phone, message } = payload;

  const companyRow = company
    ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;width:100px">Company</td><td style="padding:8px 0;font-size:14px">${escapeHtml(company)}</td></tr>`
    : "";

  const phoneRow = phone
    ? `<tr><td style="padding:8px 0;color:#888;font-size:13px">Phone</td><td style="padding:8px 0;font-size:14px">${escapeHtml(phone)}</td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:4px;overflow:hidden">
        <tr>
          <td style="background:#0a0a0a;padding:24px 32px">
            <p style="margin:0;color:#f59e0b;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">Contractor Job Costing</p>
            <h1 style="margin:4px 0 0;color:#fff;font-size:20px;font-weight:700">New Contact Form Submission</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e5e5">
              <tr><td style="padding:8px 0;color:#888;font-size:13px;width:100px">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600">${escapeHtml(name)}</td></tr>
              ${companyRow}
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${escapeHtml(email)}" style="color:#f59e0b">${escapeHtml(email)}</a></td></tr>
              ${phoneRow}
            </table>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e5e5">
              <p style="margin:0 0 8px;color:#888;font-size:13px;text-transform:uppercase;letter-spacing:0.05em">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#1a1a1a;white-space:pre-wrap">${escapeHtml(message)}</p>
            </div>
            <div style="margin-top:32px">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#f59e0b;color:#000;font-weight:700;font-size:14px;padding:12px 24px;text-decoration:none;border-radius:2px">Reply to ${escapeHtml(name)}</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #e5e5e5">
            <p style="margin:0;font-size:12px;color:#999">Sent from contractorjobcosting.com contact form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(
  payload: ContactEmailPayload
): Promise<void> {
  const resend = getResend();

  const { name, company, email } = payload;
  const subjectCompany = company ? ` — ${company}` : "";

  await resend.emails.send({
    from: "Contractor Job Costing <sales@thekpsgroup.com>",
    to: siteConfig.notificationEmail,
    replyTo: email,
    subject: `New inquiry from ${name}${subjectCompany}`,
    html: buildEmailHtml(payload),
  });
}
