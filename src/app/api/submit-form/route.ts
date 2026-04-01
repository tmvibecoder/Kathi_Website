import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { forms } from "@/lib/forms";

const PDFS_DIR = path.join(process.cwd(), "pdfs");

async function ensureDir(dir: string) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formId, answers, signature, timestamp } = body;

    // Validate
    const formDef = forms.find((f) => f.id === formId);
    if (!formDef) {
      return NextResponse.json(
        { error: "Ungültiges Formular." },
        { status: 400 }
      );
    }

    if (!answers.name || !signature) {
      return NextResponse.json(
        { error: "Name und Unterschrift sind erforderlich." },
        { status: 400 }
      );
    }

    // Generate PDF
    const pdfDoc = await PDFDocument.create();
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const pageWidth = 595.28; // A4
    const pageHeight = 841.89;
    const margin = 50;
    const contentWidth = pageWidth - 2 * margin;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    const darkColor = rgb(0.24, 0.2, 0.17);
    const grayColor = rgb(0.5, 0.46, 0.42);
    const greenColor = rgb(0.29, 0.38, 0.29);

    // Helper: wrap text into lines
    function wrapText(text: string, font: typeof helvetica, fontSize: number, maxWidth: number): string[] {
      const words = text.split(" ");
      const lines: string[] = [];
      let currentLine = "";

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, fontSize);
        if (testWidth > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);
      return lines;
    }

    // Helper: add new page if needed
    function checkNewPage(neededHeight: number) {
      if (y - neededHeight < margin) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
    }

    // Title
    const titleSize = 18;
    const titleText = formDef.title;
    const titleWidth = helveticaBold.widthOfTextAtSize(titleText, titleSize);
    page.drawText(titleText, {
      x: (pageWidth - titleWidth) / 2,
      y,
      size: titleSize,
      font: helveticaBold,
      color: darkColor,
    });
    y -= 24;

    // Subtitle
    const subtitleSize = 13;
    const subtitleText = formDef.subtitle;
    const subtitleWidth = helvetica.widthOfTextAtSize(subtitleText, subtitleSize);
    page.drawText(subtitleText, {
      x: (pageWidth - subtitleWidth) / 2,
      y,
      size: subtitleSize,
      font: helvetica,
      color: greenColor,
    });
    y -= 16;

    // Disclaimer
    const disclaimerSize = 8;
    const disclaimerWidth = helvetica.widthOfTextAtSize(formDef.disclaimer, disclaimerSize);
    page.drawText(formDef.disclaimer, {
      x: (pageWidth - disclaimerWidth) / 2,
      y,
      size: disclaimerSize,
      font: helvetica,
      color: grayColor,
    });
    y -= 30;

    // Line
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageWidth - margin, y },
      thickness: 0.5,
      color: grayColor,
    });
    y -= 20;

    // Questions & Answers
    for (const q of formDef.questions) {
      checkNewPage(60);

      // Question label
      const labelLines = wrapText(q.label, helveticaBold, 10, contentWidth);
      for (const line of labelLines) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10,
          font: helveticaBold,
          color: darkColor,
        });
        y -= 14;
      }

      if (q.subLabel) {
        page.drawText(q.subLabel, {
          x: margin,
          y,
          size: 8,
          font: helvetica,
          color: grayColor,
        });
        y -= 14;
      }

      // Answer
      const answer = answers[q.id] || "—";
      const answerLines = wrapText(answer, helvetica, 10, contentWidth);
      for (const line of answerLines) {
        checkNewPage(16);
        page.drawText(line, {
          x: margin,
          y,
          size: 10,
          font: helvetica,
          color: darkColor,
        });
        y -= 14;
      }

      y -= 10;
    }

    // Haftungsausschluss
    checkNewPage(120);
    y -= 10;
    page.drawText("Haftungsausschlusserklärung", {
      x: margin,
      y,
      size: 12,
      font: helveticaBold,
      color: greenColor,
    });
    y -= 18;

    for (const item of formDef.haftungsausschluss) {
      const bulletLines = wrapText(`• ${item}`, helvetica, 8, contentWidth);
      for (const line of bulletLines) {
        checkNewPage(12);
        page.drawText(line, {
          x: margin,
          y,
          size: 8,
          font: helvetica,
          color: darkColor,
        });
        y -= 11;
      }
      y -= 3;
    }

    // Teilnahmehinweis
    checkNewPage(60);
    y -= 8;
    page.drawText("Teilnahme- und Stornierungshinweis", {
      x: margin,
      y,
      size: 12,
      font: helveticaBold,
      color: greenColor,
    });
    y -= 18;

    for (const item of formDef.teilnahmehinweis) {
      const bulletLines = wrapText(`• ${item}`, helvetica, 8, contentWidth);
      for (const line of bulletLines) {
        checkNewPage(12);
        page.drawText(line, {
          x: margin,
          y,
          size: 8,
          font: helvetica,
          color: darkColor,
        });
        y -= 11;
      }
    }

    // Signature
    checkNewPage(120);
    y -= 20;

    // Date
    const dateStr = new Date(timestamp).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    page.drawText(`Datum: ${dateStr}`, {
      x: margin,
      y,
      size: 10,
      font: helvetica,
      color: darkColor,
    });

    // Embed signature image
    if (signature) {
      const signatureData = signature.replace(/^data:image\/png;base64,/, "");
      const signatureBytes = Buffer.from(signatureData, "base64");
      const signatureImage = await pdfDoc.embedPng(signatureBytes);

      const sigMaxWidth = 200;
      const sigMaxHeight = 60;
      const sigAspect = signatureImage.width / signatureImage.height;
      let sigWidth = sigMaxWidth;
      let sigHeight = sigWidth / sigAspect;
      if (sigHeight > sigMaxHeight) {
        sigHeight = sigMaxHeight;
        sigWidth = sigHeight * sigAspect;
      }

      page.drawText("Unterschrift:", {
        x: pageWidth - margin - sigWidth,
        y: y + sigHeight + 5,
        size: 8,
        font: helvetica,
        color: grayColor,
      });

      page.drawImage(signatureImage, {
        x: pageWidth - margin - sigWidth,
        y: y - 5,
        width: sigWidth,
        height: sigHeight,
      });
    }

    // Save PDF
    const pdfBytes = await pdfDoc.save();

    await ensureDir(PDFS_DIR);

    const sanitizedName = (answers.name || "unbekannt")
      .replace(/[^a-zA-ZäöüÄÖÜß\s-]/g, "")
      .replace(/\s+/g, "_")
      .substring(0, 50);
    const dateFileName = new Date(timestamp)
      .toISOString()
      .slice(0, 10);
    const fileName = `${formId}_${sanitizedName}_${dateFileName}.pdf`;
    const filePath = path.join(PDFS_DIR, fileName);

    await fs.writeFile(filePath, pdfBytes);

    return NextResponse.json({
      success: true,
      message: "Fragebogen erfolgreich gespeichert.",
      fileName,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Ein interner Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
