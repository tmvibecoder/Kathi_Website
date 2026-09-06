<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Kathi_Website: gemeinsame Projektanweisungen

## Gemeinsame Arbeitsweise für Claude Code und Codex

Diese Regeln gelten ergänzend zu den projektspezifischen Anweisungen. Der aktuelle Nutzerauftrag bestimmt den Umfang; diese Datei erteilt keine zusätzliche Merge- oder Deployment-Freigabe.

- Zu Beginn und bei jedem Modellwechsel den tatsächlichen Git-Stand prüfen: Repository-Root und Remote-Zuordnung, Branch, HEAD, `git status --short --branch`, ungestagten und gestagten Diff, letzte Commits und vorhandenen Upstream. Gecachte Remote-Refs nicht als frisch abgeglichen ausgeben.
- Bestehende Änderungen, ungetrackte Dateien und andere Worktrees erhalten. Kein automatisches Stash, Reset, Clean oder Branchwechsel, um einen vermeintlich sauberen Start herzustellen; nur eigene auftragsbezogene Dateien aufnehmen.
- Projekt- und Statusdokumentation vor der Fortsetzung lesen. Wissen aus einer früheren Claude-/Codex-Unterhaltung oder lokalem Memory nicht voraussetzen und nicht ungeprüft übernehmen. Fehlende Informationen als offen kennzeichnen.
- Die betroffene Änderung angemessen prüfen: vorhandene relevante Tests, Lint-/Buildbefehle und projektbezogene Browserprüfungen verwenden. Reine Dokumentationsänderungen auf Diff, Verweise und Konsistenz prüfen; keine Tests oder erfolgreichen Deploys behaupten, die nicht ausgeführt wurden. Strengere projektspezifische Prüfregeln bleiben bestehen.
- Dauerhaftes Projektwissen in der unten zugeordneten gemeinsamen Dokumentation pflegen. Bestehende Status-/Offene-Punkte-Dokumente bei relevanten Änderungen aktualisieren. Zur Übergabe Branch/Commit, Änderungen, tatsächlich ausgeführte Prüfungen, offene Punkte und nächsten Schritt knapp festhalten; ohne eigene Statusdatei genügt dafür die Aufgabenabschlussnachricht.
- `CLAUDE.md` bleibt der Import. Gemeinsame Regeln nur in `AGENTS.md` bzw. der ausdrücklich zugeordneten Projektdokumentation pflegen. Historische Claude-Bezeichnungen und Selbstverweise in übernommenen Texten ändern diese Zuordnung nicht.

## Dokumentationszuordnung

`AGENTS.md`, `README.md`.

Die folgenden Projektanweisungen wurden aus `CLAUDE.md` übernommen. Sie gelten für Claude Code und Codex und werden künftig hier gepflegt.

---

# Kathi Website (katharinamiler.de)

Website der Trainerin Katharina Miler: Kursangebot (Yoga/Rückbildung) mit
Kontaktformular und PDF-Fragebögen. Eingaben werden per E-Mail (Resend)
versendet.

## Tech-Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 ·
Resend + nodemailer (Mailversand) · pdf-lib + signature_pad (Fragebögen).

## Deployment

Auto-Deploy via GitHub Actions (`.github/workflows/deploy.yml`):
Push auf `main` → SSH zu Server **web01** → `git pull` + `npm install` +
`npm run build` + `pm2 restart kathi-website`.

- Server-Pfad: `/home/kathi-website`, pm2-Prozess `kathi-website`,
  live auf https://katharinamiler.de
- Repo-Secrets: `SERVER_IP`, `SERVER_USER`, `SSH_PRIVATE_KEY`
  (gemeinsamer Deploy-Key auf web01)
- Doku-/Nicht-Deploy-Commits mit `[skip ci]` in der Message versehen.

### Historie (2026-06-17)

`main` war über 2 Monate veraltet; die Live-Version lief auf dem Branch
`claude/build-course-website-PuzUB`. Am 2026-06-17 wurde dieser Live-Stand
zur neuen `main` gemacht. Der alte `main`-Stand ist als Branch
`main-backup-april-2026` gesichert.
