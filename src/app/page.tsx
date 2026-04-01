import Image from "next/image";
import Link from "next/link";

const courseHighlights = [
  {
    title: "Yoga",
    description:
      "Finde Balance und innere Ruhe. Meine Yoga-Kurse sind für alle Level geeignet — ob Anfänger oder Fortgeschrittene.",
    image: "/images/kurs-yoga.jpg",
  },
  {
    title: "Schwangeren-Yoga",
    description:
      "Sanfte Übungen speziell für werdende Mamas. Stärke deinen Körper und bereite dich auf die Geburt vor.",
    image: "/images/kurs-schwangeren-yoga.jpg",
  },
  {
    title: "Rückbildung",
    description:
      "Nach der Geburt zurück zu dir selbst finden. Gezieltes Training für Beckenboden und Rumpfmuskulatur.",
    image: "/images/kurs-rueckbildung.jpg",
  },
  {
    title: "Mama-Sport",
    description:
      "Fit bleiben als Mama — gemeinsam trainieren, Kraft aufbauen und den Alltag mit mehr Energie meistern.",
    image: null,
  },
  {
    title: "Workout Mix",
    description:
      "Abwechslungsreiches Ganzkörpertraining mit Elementen aus Fitness, Kraft und Ausdauer.",
    image: null,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Yoga Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--color-warm-50)]/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-700)] mb-4">
            Yoga &middot; Schwangeren-Yoga &middot; Rückbildung
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[var(--color-warm-900)] mb-6 leading-tight">
            Kathi Miler
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-warm-700)] max-w-xl mx-auto leading-relaxed mb-10">
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
              className="inline-block border border-[var(--color-warm-500)] text-[var(--color-warm-800)] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-warm-200)] transition-colors bg-white/50"
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
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Kathi Miler"
                fill
                className="object-cover"
              />
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
                  Seit über 10 Jahren bringe ich Menschen in Bewegung. Angefangen
                  habe ich beim DJK Ottenhofen — und seitdem hat mich die
                  Begeisterung für Sport und Gesundheit nicht mehr losgelassen.
                </p>
                <p>
                  Ich bin ausgebildete Group Fitness Trainerin (B-Lizenz),
                  Personal Trainerin und Fitnesstrainerin (Euro Education) sowie
                  zertifizierte Yoga-Lehrerin (200+ Stunden, München). Außerdem
                  habe ich Ausbildungen in Schwangeren-Yoga, Rückbildung und
                  Mama-Sport absolviert.
                </p>
                <p>
                  Zweieinhalb Jahre lang habe ich im Gesundheits- und
                  Fitnessstudio Tripila gearbeitet und dort Trampolin-Kurse,
                  High-Intensity-Training, Reha-Sport, Aqua-Gymnastik,
                  Lauftraining und Firmensport gegeben. Nach meiner eigenen
                  Schwangerschaft habe ich meine Leidenschaft für Mama-Kurse
                  entdeckt: Seit drei Jahren unterrichte ich Schwangeren-Yoga
                  und seit eineinhalb Jahren Rückbildung und Mama-Sport in der
                  Hebammenpraxis Markt Schwaben.
                </p>
                <p>
                  Meine Kurse finden in eigener Regie, über den DJK Ottenhofen
                  und über die Volkshochschule Poing statt — so findest du
                  garantiert den passenden Kurs für dich.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseHighlights.map((course) => (
              <Link
                key={course.title}
                href="/kurse"
                className="bg-[var(--color-warm-50)] group hover:bg-[var(--color-sage-50)] transition-colors overflow-hidden block"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {course.image ? (
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--color-sage-100)] flex items-center justify-center">
                      <span className="text-[var(--color-sage-400)] text-sm">Foto folgt</span>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-[var(--color-warm-900)] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-[var(--color-warm-600)] text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </Link>
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
