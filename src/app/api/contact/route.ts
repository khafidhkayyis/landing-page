import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { contactInfo } from "@/config/contact";
import {
  buildContactEmailText,
  type ContactFormPayload,
  isContactFormComplete,
} from "@/lib/contact-email";

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

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_PORT } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, fallback: "mailto" as const },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: contactInfo.email,
      replyTo: payload.email,
      subject: `[Website Contact] ${payload.subject}`,
      text: buildContactEmailText(payload),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
