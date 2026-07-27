import { contactInfo } from "@/config/contact";

export type ContactFormPayload = {
  fullName: string;
  email: string;
  industry: string;
  numberOfEmployees: string;
  subject: string;
  message: string;
};

export function buildContactEmailText(data: ContactFormPayload): string {
  return [
    "New contact form submission",
    "",
    `Full Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Industry: ${data.industry}`,
    `Number of Employees: ${data.numberOfEmployees}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildContactMailtoUrl(data: ContactFormPayload): string {
  const subject = `[Website Contact] ${data.subject}`;
  const body = buildContactEmailText(data);

  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function isContactFormComplete(data: ContactFormPayload): boolean {
  return Object.values(data).every((value) => value.trim() !== "");
}
