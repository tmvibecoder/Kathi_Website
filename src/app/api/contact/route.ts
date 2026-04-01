import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, kurs, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Kathi Website" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: `Neue Kursanfrage von ${name}${kurs ? ` – ${kurs}` : ""}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        kurs ? `Kurs: ${kurs}` : null,
        "",
        "Nachricht:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Anfrage erfolgreich gesendet.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein interner Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
