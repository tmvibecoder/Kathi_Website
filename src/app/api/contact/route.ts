import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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
