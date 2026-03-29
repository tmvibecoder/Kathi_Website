import Link from "next/link";
import { courses, providerInfo, type CourseProvider } from "@/lib/courses";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    aktiv: "bg-[var(--color-sage-100)] text-[var(--color-sage-700)]",
    geplant: "bg-[var(--color-warm-200)] text-[var(--color-warm-700)]",
    ausgebucht: "bg-[var(--color-rose-100)] text-[var(--color-rose-700)]",
  };

  const labels: Record<string, string> = {
    aktiv: "Aktiv",
    geplant: "Geplant",
    ausgebucht: "Ausgebucht",
  };

  return (
    <span className={`text-xs px-3 py-1 uppercase tracking-wider ${styles[status] || ""}`}>
      {labels[status] || status}
    </span>
  );
}

function CourseCard({ course }: { course: (typeof courses)[0] }) {
  return (
    <div className="bg-white p-6 border border-[var(--color-warm-200)] hover:border-[var(--color-sage-300)] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs uppercase tracking-wider"
          style={{ color: providerInfo[course.provider].color }}
        >
          {course.providerName}
        </span>
        <StatusBadge status={course.status} />
      </div>
      <h3 className="text-xl text-[var(--color-warm-900)] mb-2">
        {course.title}
      </h3>
      <p className="text-sm text-[var(--color-warm-600)] mb-4 leading-relaxed">
        {course.description}
      </p>
      <div className="space-y-1 text-sm text-[var(--color-warm-500)]">
        <p>📅 {course.schedule}</p>
        <p>📍 {course.location}</p>
        {course.price && <p>💰 {course.price}</p>}
        {course.spots && (
          <p className="text-[var(--color-sage-600)]">✓ {course.spots}</p>
        )}
        {course.startDate && (
          <p className="text-[var(--color-warm-600)] italic">
            {course.startDate}
          </p>
        )}
      </div>
      {course.status !== "ausgebucht" && (
        <Link
          href={`/kontakt?kurs=${encodeURIComponent(course.title)}`}
          className="inline-block mt-4 text-sm text-[var(--color-sage-600)] hover:text-[var(--color-sage-800)] underline underline-offset-4 transition-colors"
        >
          Platz anfragen →
        </Link>
      )}
    </div>
  );
}

export default function KursePage() {
  const providers: CourseProvider[] = ["eigen", "djk", "vhs"];

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-100)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
            Kursangebot
          </p>
          <h1 className="text-4xl md:text-5xl text-[var(--color-warm-900)] mb-4">
            Meine Kurse
          </h1>
          <p className="text-[var(--color-warm-600)] max-w-xl mx-auto">
            Hier findest du eine Übersicht aller aktuellen und geplanten Kurse —
            ob direkt bei mir, über DJK Ottenhofen oder die Volkshochschule.
          </p>
        </div>
      </section>

      {/* Courses by Provider */}
      {providers.map((provider) => {
        const providerCourses = courses.filter(
          (c) => c.provider === provider
        );
        const info = providerInfo[provider];

        return (
          <section
            key={provider}
            className="py-16 border-b border-[var(--color-warm-200)] last:border-0"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl text-[var(--color-warm-900)] mb-2"
                  style={{ borderLeft: `3px solid ${info.color}`, paddingLeft: "1rem" }}
                >
                  {info.name}
                </h2>
                <p className="text-sm text-[var(--color-warm-600)] ml-[calc(3px+1rem)]">
                  {info.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providerCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-[var(--color-sage-50)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl text-[var(--color-warm-900)] mb-4">
            Kein passender Kurs dabei?
          </h2>
          <p className="text-[var(--color-warm-600)] mb-6">
            Schreib mir gerne — ich informiere dich über neue Kurse und freie
            Plätze.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[var(--color-sage-600)] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-sage-700)] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
