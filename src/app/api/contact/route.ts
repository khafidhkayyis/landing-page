import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { contactInfo } from "@/config/contact";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  type ContactFormPayload,
  isContactFormComplete,
} from "@/lib/contact-email";

export const runtime = "nodejs";

function getPayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;
  const payload: ContactFormPayload = {
    fullName: String(data.fullName ?? "").trim(),
    email: String(data.email ?? "").trim(),
    industry: String(data.industry ?? "").trim(),
    numberOfEmployees: String(data.numberOfEmployees ?? "").trim(),
    subject: String(data.subject ?? "").trim(),
    message: String(data.message ?? "").trim(),
  };

  if (!isContactFormComplete(payload)) {
    return null;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return null;
  }

  return payload;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    user,
    pass,
    port,
    from: process.env.SMTP_FROM ?? user,
    to: process.env.SMTP_TO ?? contactInfo.email,
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = getPayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all fields with a valid email." },
      { status: 400 },
    );
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    return NextResponse.json(
      {
        ok: false,
        error: "SMTP is not configured. Update SMTP_* in .env.local.",
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    });

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: payload.email,
      subject: `[Website Contact] ${payload.subject}`,
      text: buildContactEmailText(payload),
      html: buildContactEmailHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "Failed to send email. Check SMTP credentials in .env.local and try again.",
      },
      { status: 500 },
    );
  }
}
