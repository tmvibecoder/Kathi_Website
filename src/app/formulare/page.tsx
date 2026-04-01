"use client";

import { useState } from "react";
import { HealthForm } from "@/components/HealthForm";
import { forms } from "@/lib/forms";

export default function FormularePage() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const form = forms.find((f) => f.id === selectedForm);

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-warm-100)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
            Für Kursteilnehmer
          </p>
          <h1 className="text-4xl md:text-5xl text-[var(--color-warm-900)] mb-4">
            Formulare
          </h1>
          <p className="text-[var(--color-warm-600)] max-w-xl mx-auto">
            Bitte füllen Sie vor Kursbeginn den passenden Fragebogen aus und
            unterschreiben Sie digital. Ihre Daten werden verschlüsselt
            übertragen und sicher gespeichert.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          {!selectedForm ? (
            /* Form Selection */
            <div className="space-y-4">
              <h2 className="text-xl text-[var(--color-warm-900)] mb-6 text-center">
                Bitte wählen Sie Ihren Kurs:
              </h2>
              {forms.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedForm(f.id)}
                  className="w-full text-left bg-white p-6 border border-[var(--color-warm-200)] hover:border-[var(--color-sage-400)] transition-colors group"
                >
                  <h3 className="text-lg text-[var(--color-warm-900)] group-hover:text-[var(--color-sage-700)] transition-colors">
                    {f.subtitle}
                  </h3>
                  <p className="text-sm text-[var(--color-warm-500)] mt-1">
                    {f.title} — {f.questions.length} Fragen + Haftungsausschluss +
                    Unterschrift
                  </p>
                </button>
              ))}
            </div>
          ) : (
            /* Selected Form */
            <div>
              <button
                onClick={() => setSelectedForm(null)}
                className="text-sm text-[var(--color-sage-600)] hover:text-[var(--color-sage-800)] mb-6 flex items-center gap-1 transition-colors"
              >
                ← Zurück zur Auswahl
              </button>
              {form && <HealthForm form={form} />}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
