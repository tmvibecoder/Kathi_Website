# Kathi Website – bisherige Next.js-Anwendung

Stand: 07.09.2026. Seit dem 06.09.2026 wird die öffentliche Website unter
[katharinamiler.de](https://katharinamiler.de) und www.katharinamiler.de aus dem separaten
Repository [kathi-webseite-v2](https://github.com/tmvibecoder/kathi-webseite-v2) statisch
bereitgestellt. Dieses Repository enthält die bisherige Website und bleibt für ältere
API-Aufrufe sowie einen möglichen Rückfall in Betrieb.

## Zuständigkeiten

| Bestandteil | Betrieb |
|---|---|
| Neue öffentliche Seiten | V2, nginx-Root `/var/www/kathi-webseite-v2/current` |
| Diese bisherige Next.js-Anwendung | web01, `/home/kathi-website`, PM2 `kathi-website`, Port 3001 |
| Kurse, neue Anfragen, Teilnahme und Rechnungen | [fitness-app](https://github.com/tmvibecoder/fitness-app), app.katharinamiler.de, Port 3003 |

nginx leitet unter der öffentlichen Domain `/api/...` weiterhin an diese Anwendung weiter.
Nicht im statischen Release vorhandene `/_next/...`-Assets fallen ebenfalls auf sie zurück.
`/kontakt` leitet auf die neue Seite `/anfrage` um; `/fragebogen/...` auf `/frageboegen`.
Die alte Anwendung daher nicht ohne Prüfung ihrer verbliebenen Aufrufe stoppen.

Die **neue** Website ruft Kurs-, Anfrage- und Teilnahme-API direkt aus dem Browser unter
`https://app.katharinamiler.de` auf. Ihr Erscheinungsbild wird in `kathi-webseite-v2` geändert,
nicht in diesem Repository. [Livebetrieb, Routing, Sicherung, Rückfall und Prüfprotokoll](https://github.com/tmvibecoder/kathi-webseite-v2/blob/main/docs/livebetrieb.md)
sind dort zentral dokumentiert.

## Entwicklung dieser Anwendung

Next.js 16, React 19, TypeScript und Tailwind CSS 4; Resend/nodemailer für bisherigen
Mailversand, pdf-lib und signature_pad für Fragebögen. Gemeinsame Projektregeln:
[AGENTS.md](AGENTS.md).

```bash
npm install
npm run dev
```

Die lokale Anwendung ist standardmäßig unter http://localhost:3000 erreichbar.
Codeänderungen mit den im Projekt vorhandenen Lint- und Buildbefehlen prüfen:

```bash
npm run lint
npm run build
```

## Bestehende Teilnahme-Anbindung

Die in diesem Repository vorhandene Route `/teilnahme` liest den persönlichen Link aus
der Reservierungs-E-Mail. Ihr Server-Proxy `/api/participation` verbindet die alte Anwendung
mit der Fitness-Verwaltung; optional `FITNESS_API_URL` setzen (Standard:
`https://app.katharinamiler.de`). Diese Variable gehört zur alten Anwendung, nicht zur V2.

Fragebogen, Unterschrift und PDF-Nachweis des kursbezogenen Ablaufs werden in der Fitness-App
gespeichert. Die E-Mail-Kopie enthält einen persönlichen Download-Link. Die produktive
V2-Seite `/teilnahme` verwendet dieselbe Backend-Funktion direkt. Generische alte Formulare
im Quellcode sind nicht der neue kursbezogene Buchungsablauf.
[Teilnahme und Buchung](https://github.com/tmvibecoder/fitness-app/blob/main/docs/teilnahme-workflow.md)
und [neue Website-Anfragen](https://github.com/tmvibecoder/fitness-app/blob/main/docs/website-anfragen.md)
sind in der Verwaltung dokumentiert.

## Deployment und Rückfall

Push auf `main` startet weiterhin den GitHub-Actions-Workflow mit `git pull --ff-only`,
`npm install`, `npm run build` und `pm2 restart kathi-website` auf web01. Das aktualisiert
diesen alten Dienst, ersetzt jedoch **nicht** die statische V2-Website. Reine
Dokumentations-Commits mit `[skip ci]` verhindern einen unnötigen Neustart.

Beim öffentlichen Wechsel wurde der Anwendungscode dieses Dienstes nicht verändert.
Für eine Rückkehr zu seinen Seiten ist eine nginx-Umschaltung erforderlich. Vorgehen und
vorhandene Sicherungen stehen im verlinkten V2-Betriebshandbuch. Dabei keine alte
Verwaltungsdatenbank wiederherstellen: neue Anfragen, Nachweise und Zahlungen müssen
bestehen bleiben. Zugangsdaten, private PDFs und Datensicherungen bleiben außerhalb von Git.
