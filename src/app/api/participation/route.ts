import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const actions = new Set(["access", "submit", "pdf", "copy"]);

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 600000) {
      return NextResponse.json({ error: "Das Formular ist zu groß." }, { status: 413 });
    }
    const raw = await request.text();
    if (raw.length > 600000) return NextResponse.json({ error: "Das Formular ist zu groß." }, { status: 413 });
    let body;
    try { body = JSON.parse(raw); }
    catch { return NextResponse.json({ error: "Ungültige Formulardaten." }, { status: 400 }); }
    if (!body || !actions.has(body.action) || typeof body.token !== "string") {
      return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
    }
    const origin = process.env.FITNESS_API_URL || "https://app.katharinamiler.de";
    const upstream = await fetch(`${origin.replace(/\/$/, "")}/api/participation/${body.action}`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), cache: "no-store", signal: AbortSignal.timeout(25000),
    });
    const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
    if (body.action === "pdf" && upstream.ok) {
      return new NextResponse(await upstream.arrayBuffer(), { headers: { ...headers, "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=Teilnahmebestaetigung.pdf" } });
    }
    if (!(upstream.headers.get("content-type") || "").includes("application/json")) {
      return NextResponse.json({ error: "Die Kursverwaltung ist gerade nicht erreichbar. Bitte später erneut versuchen." }, { status: 502, headers });
    }
    return NextResponse.json(await upstream.json(), { status: upstream.status, headers });
  } catch {
    // Never log bearer links, health answers or signatures.
    return NextResponse.json({ error: "Die Verbindung zur Kursverwaltung konnte nicht abgeschlossen werden. Bitte erneut versuchen; bereits gespeicherte Angaben bleiben erhalten." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
