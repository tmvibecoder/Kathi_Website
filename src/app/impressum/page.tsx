export default function ImpressumPage() {
  return (
    <>
      <section className="bg-[var(--color-warm-100)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl text-[var(--color-warm-900)]">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 prose prose-warm">
          <h2 className="text-xl text-[var(--color-warm-900)] mb-4">
            Angaben gemäß § 5 TMG
          </h2>

          <div className="space-y-4 text-sm text-[var(--color-warm-700)] leading-relaxed">
            <div>
              <p className="font-semibold">Katharina Miler</p>
              <p>
                [Straße und Hausnummer]
                <br />
                [PLZ Ort]
              </p>
            </div>

            <div>
              <p className="font-semibold">Kontakt</p>
              <p>
                E-Mail: katharina@miler.de
                <br />
                Telefon: [Telefonnummer]
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </p>
              <p>
                Katharina Miler
                <br />
                [Adresse wie oben]
              </p>
            </div>

            <div>
              <p className="font-semibold">Haftungsausschluss</p>
              <p>
                <strong>Haftung für Inhalte:</strong> Die Inhalte unserer
                Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>
              <p className="mt-2">
                <strong>Haftung für Links:</strong> Unser Angebot enthält
                Links zu externen Webseiten Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            <p className="text-xs italic text-[var(--color-warm-500)] mt-8">
              Bitte ergänze hier deine vollständige Adresse und
              Telefonnummer, Kathi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
