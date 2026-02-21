import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be under 100 characters.")
    .trim(),

  company: z
    .string()
    .max(150, "Company name must be under 150 characters.")
    .trim()
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long.")
    .toLowerCase()
    .trim(),

  phone: z
    .string()
    .regex(
      /^[+\d\s\-(). ]{7,20}$/,
      "Please enter a valid phone number."
    )
    .trim()
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters.")
    .trim(),

  // Honeypot — must be empty; bots fill this in
  website: z.string().max(0, ""),
});

export type ContactFormData = z.infer<typeof contactSchema>;
