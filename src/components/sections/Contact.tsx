"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { Container } from "@/components/layout";
import { contactInfo } from "@/config/contact";
import {
  buildContactMailtoUrl,
  type ContactFormPayload,
  isContactFormComplete,
} from "@/lib/contact-email";

const inputClassName =
  "w-full rounded-xl border border-white/25 bg-transparent px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-white/50 sm:text-base";

const initialFormState = {
  fullName: "",
  email: "",
  industry: "",
  numberOfEmployees: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isComplete = useMemo(() => isContactFormComplete(form), [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
    setSubmitted(false);
  }

  function openMailto(payload: ContactFormPayload) {
    window.location.href = buildContactMailtoUrl(payload);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isComplete) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const payload: ContactFormPayload = { ...form };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm(initialFormState);
        return;
      }

      const result = (await response.json()) as {
        fallback?: "mailto";
        error?: string;
      };

      if (response.status === 503 && result.fallback === "mailto") {
        openMailto(payload);
        setSubmitted(true);
        setForm(initialFormState);
        return;
      }

      setError(result.error ?? "Failed to send. Please try again.");
    } catch {
      openMailto(payload);
      setSubmitted(true);
      setForm(initialFormState);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          value={form.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          className={inputClassName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputClassName}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="industry"
          placeholder="Industry*"
          value={form.industry}
          onChange={(e) => updateField("industry", e.target.value)}
          className={inputClassName}
          required
        />
        <input
          type="text"
          name="numberOfEmployees"
          placeholder="Number of Employees*"
          value={form.numberOfEmployees}
          onChange={(e) => updateField("numberOfEmployees", e.target.value)}
          className={inputClassName}
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject*"
        value={form.subject}
        onChange={(e) => updateField("subject", e.target.value)}
        className={inputClassName}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message*"
        rows={6}
        value={form.message}
        onChange={(e) => updateField("message", e.target.value)}
        className={`${inputClassName} resize-none`}
        required
      />

      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p className="text-sm text-emerald-400" role="status">
          Thank you! Your message was sent to {contactInfo.email}.
        </p>
      ) : null}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={!isComplete || isSubmitting}
          className="rounded-xl bg-[#00AEEF] px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#0096d1] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section id={contactInfo.sectionId} className="relative overflow-hidden bg-black py-16 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — contact info */}
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {contactInfo.title}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-gray-300 sm:text-base">
              {contactInfo.description}
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <Phone className="size-5 shrink-0 text-white" strokeWidth={1.75} />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm text-gray-200 transition-colors hover:text-white sm:text-base"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="size-5 shrink-0 text-white" strokeWidth={1.75} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-200 transition-colors hover:text-white sm:text-base"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="size-5 shrink-0 text-white" strokeWidth={1.75} />
                <span className="text-sm text-gray-200 sm:text-base">
                  {contactInfo.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </Container>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-2 pl-2 pr-5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Ask a question on WhatsApp"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-white/20">
          <svg
            viewBox="0 0 24 24"
            className="size-5 fill-current"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        Ask a question
      </a>
    </section>
  );
}
