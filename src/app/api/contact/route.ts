import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACTS_DIR = path.join(process.cwd(), "pdfs", "kontakt-anfragen");

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

    // Store contact request as JSON file
    try {
      await fs.access(CONTACTS_DIR);
    } catch {
      await fs.mkdir(CONTACTS_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString();
    const sanitizedName = name
      .replace(/[^a-zA-ZäöüÄÖÜß\s-]/g, "")
      .replace(/\s+/g, "_")
      .substring(0, 50);
    const fileName = `anfrage_${sanitizedName}_${timestamp.slice(0, 10)}_${Date.now()}.json`;

    await fs.writeFile(
      path.join(CONTACTS_DIR, fileName),
      JSON.stringify(
        {
          name,
          email,
          phone: phone || "",
          kurs: kurs || "",
          message,
          timestamp,
        },
        null,
        2
      )
    );

    // Send email notification
    try {
      await resend.emails.send({
        from: "Kathi Website <onboarding@resend.dev>",
        to: "katharina@miler.de",
        subject: `Neue Kontaktanfrage von ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>E-Mail:</strong> ${email}</p>
${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
${kurs ? `<p><strong>Kurs:</strong> ${kurs}</p>` : ""}
<p><strong>Nachricht:</strong></p>
<p>${message}</p>`,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }

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
