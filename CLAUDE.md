@AGENTS.md

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
