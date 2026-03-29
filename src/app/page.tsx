import Link from "next/link";

const courseHighlights = [
  {
    title: "Yoga",
    description:
      "Finde Balance und innere Ruhe. Meine Yoga-Kurse sind für alle Level geeignet — ob Anfänger oder Fortgeschrittene.",
    icon: "🧘",
  },
  {
    title: "Schwangeren-Yoga",
    description:
      "Sanfte Übungen speziell für werdende Mamas. Stärke deinen Körper und bereite dich auf die Geburt vor.",
    icon: "🤰",
  },
  {
    title: "Rückbildung",
    description:
      "Nach der Geburt zurück zu dir selbst finden. Gezieltes Training für Beckenboden und Rumpfmuskulatur.",
    icon: "💪",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[var(--color-warm-100)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-warm-100)] to-[var(--color-warm-50)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-4">
            Yoga &middot; Schwangeren-Yoga &middot; Rückbildung
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[var(--color-warm-900)] mb-6 leading-tight">
            Kathi Miler
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-warm-600)] max-w-xl mx-auto leading-relaxed mb-10">
            Bewegung mit Achtsamkeit. Kurse für jede Lebensphase — für dich,
            in der Schwangerschaft und danach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kurse"
              className="inline-block bg-[var(--color-sage-600)] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-sage-700)] transition-colors"
            >
              Kurse ansehen
            </Link>
            <Link
              href="/kontakt"
              className="inline-block border border-[var(--color-warm-400)] text-[var(--color-warm-700)] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-warm-200)] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--color-warm-50)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Placeholder Image */}
            <div className="aspect-[4/5] bg-[var(--color-warm-200)] flex items-center justify-center text-[var(--color-warm-400)] text-sm">
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p>Foto von Kathi</p>
                <p className="text-xs mt-1">(Platzhalter)</p>
              </div>
            </div>

            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
                Über mich
              </p>
              <h2 className="text-3xl md:text-4xl text-[var(--color-warm-900)] mb-6">
                Hallo, ich bin Kathi
              </h2>
              <div className="space-y-4 text-[var(--color-warm-600)] leading-relaxed">
                <p>
                  Als zertifizierte Yoga-Lehrerin begleite ich dich mit Herz und
                  Fachwissen durch jede Lebensphase. Ob du zum ersten Mal auf
                  die Matte kommst, dich auf die Geburt vorbereitest oder nach
                  der Entbindung wieder zu dir finden möchtest — bei mir bist du
                  richtig.
                </p>
                <p>
                  Meine Kurse finden sowohl in eigener Regie als auch über den
                  Sportverein DJK Ottenhofen und die Volkshochschule statt. So
                  erreichst du mich über verschiedene Wege und findest garantiert
                  den passenden Kurs für dich.
                </p>
                <p className="text-sm italic text-[var(--color-warm-500)]">
                  (Hier kommt bald dein persönlicher Text, Kathi!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
              Mein Angebot
            </p>
            <h2 className="text-3xl md:text-4xl text-[var(--color-warm-900)]">
              Kurse für jede Lebensphase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseHighlights.map((course) => (
              <div
                key={course.title}
                className="bg-[var(--color-warm-50)] p-8 text-center group hover:bg-[var(--color-sage-50)] transition-colors"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl text-[var(--color-warm-900)] mb-3">
                  {course.title}
                </h3>
                <p className="text-[var(--color-warm-600)] text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/kurse"
              className="inline-block bg-[var(--color-sage-600)] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-sage-700)] transition-colors"
            >
              Alle Kurse &amp; Termine
            </Link>
          </div>
        </div>
      </section>

      {/* Forms CTA */}
      <section className="py-20 bg-[var(--color-warm-100)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
            Für Kursteilnehmer
          </p>
          <h2 className="text-3xl md:text-4xl text-[var(--color-warm-900)] mb-6">
            Formulare digital ausfüllen
          </h2>
          <p className="text-[var(--color-warm-600)] leading-relaxed mb-8">
            Fülle deinen Gesundheitsfragebogen und den Haftungsausschluss bequem
            online aus — mit digitaler Unterschrift. Kein Ausdrucken nötig.
          </p>
          <Link
            href="/formulare"
            className="inline-block bg-[var(--color-warm-800)] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-warm-900)] transition-colors"
          >
            Zu den Formularen
          </Link>
        </div>
      </section>
    </>
  );
}
