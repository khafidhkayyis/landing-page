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
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildContactEmailHtml(data: ContactFormPayload): string {
  const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (character) => {
      const entities: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return entities[character];
    });

  const rows = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Industry", data.industry],
    ["Number of Employees", data.numberOfEmployees],
    ["Subject", data.subject],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e8edf2;color:#64748b;font-size:13px;width:38%;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e8edf2;color:#172033;font-size:14px;font-weight:600;vertical-align:top;word-break:break-word">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return `
    <div style="margin:0;padding:32px 12px;background-color:#f3f6fa;font-family:Arial,Helvetica,sans-serif;color:#172033">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;margin:0 auto;border-collapse:separate;border-spacing:0;background-color:#ffffff;border:1px solid #e5eaf0;border-radius:12px;overflow:hidden">
        <tr><td style="padding:28px 32px;background-color:#102a43;border-bottom:4px solid #22b8a7">
          <p style="margin:0 0 8px;color:#8ce4d8;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase">Website inquiry</p>
          <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;font-weight:700">New contact form submission</h1>
          <p style="margin:8px 0 0;color:#d5e1eb;font-size:14px;line-height:1.5">You have a new message from your website.</p>
        </td></tr>
        <tr><td style="padding:26px 32px 12px">
          <h2 style="margin:0 0 14px;color:#102a43;font-size:15px;line-height:1.4">Contact details</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e8edf2;border-radius:8px;border-collapse:separate;border-spacing:0;overflow:hidden">${rows}</table>
        </td></tr>
        <tr><td style="padding:14px 32px 30px">
          <h2 style="margin:0 0 12px;color:#102a43;font-size:15px;line-height:1.4">Message</h2>
          <div style="padding:16px;background-color:#f6f9fc;border-left:3px solid #22b8a7;border-radius:4px;color:#334155;font-size:14px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere">${escapeHtml(data.message)}</div>
        </td></tr>
      </table>
      <p style="margin:16px auto 0;max-width:640px;text-align:center;color:#94a3b8;font-size:11px;line-height:1.5">Sent from your website contact form</p>
    </div>
  `;
}

export function isContactFormComplete(data: ContactFormPayload): boolean {
  return Object.values(data).every((value) => value.trim() !== "");
}
