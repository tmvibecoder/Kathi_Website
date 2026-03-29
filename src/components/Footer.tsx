import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-warm-900)] text-[var(--color-warm-300)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-[var(--color-warm-100)] text-xl mb-3">
              Kathi Miler
            </h3>
            <p className="text-sm leading-relaxed">
              Yoga, Schwangeren-Yoga &amp; Rückbildung.
              <br />
              Mit Herz und Achtsamkeit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[var(--color-warm-100)] text-sm uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kurse"
                  className="hover:text-[var(--color-warm-100)] transition-colors"
                >
                  Kurse
                </Link>
              </li>
              <li>
                <Link
                  href="/formulare"
                  className="hover:text-[var(--color-warm-100)] transition-colors"
                >
                  Formulare
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-[var(--color-warm-100)] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[var(--color-warm-100)] text-sm uppercase tracking-wider mb-3">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-[var(--color-warm-100)] transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-[var(--color-warm-100)] transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-warm-800)] text-center text-xs text-[var(--color-warm-500)]">
          &copy; {new Date().getFullYear()} Katharina Miler. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
