import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "digital@asehtejaratasia.co";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, panels, message } = body;
  const panelsArr: string[] = Array.isArray(panels) ? panels : [];
  const panelsText = panelsArr.length > 0 ? panelsArr.join("، ") : "—";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"آسه پانل - فرم تماس" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `درخواست جدید از ${name}${company ? ` — ${company}` : ""}`,
      text: [
        `نام: ${name}`,
        `ایمیل: ${email}`,
        `شرکت: ${company || "—"}`,
        `پانل‌های مورد نیاز: ${panelsText}`,
        ``,
        `پیام:`,
        message,
      ].join("\n"),
      html: `
        <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:14px;color:#222;max-width:600px">
          <h2 style="border-bottom:2px solid #2D4FA3;padding-bottom:8px;color:#2D4FA3">درخواست جدید — آسه پانل</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr><td style="padding:8px;color:#555;width:130px">نام:</td><td style="padding:8px;font-weight:bold">${name}</td></tr>
            <tr style="background:#f7f7f7"><td style="padding:8px;color:#555">ایمیل:</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;color:#555">شرکت:</td><td style="padding:8px">${company || "—"}</td></tr>
            <tr style="background:#f7f7f7"><td style="padding:8px;color:#555">پانل‌های مورد نیاز:</td><td style="padding:8px">${panelsText}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f0f4ff;border-right:4px solid #2D4FA3;border-radius:4px">
            <div style="color:#555;margin-bottom:8px">پیام:</div>
            <div style="white-space:pre-wrap">${message}</div>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("[contact form] email error:", err);
  }

  console.log("[contact form]", { name, email, company, panels: panelsArr, message });
  return NextResponse.json({ ok: true });
}
