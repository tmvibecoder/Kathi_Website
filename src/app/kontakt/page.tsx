"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function KontaktForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    kurs: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    const kurs = searchParams.get("kurs");
    if (kurs) {
      setFormData((prev) => ({ ...prev, kurs }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", kurs: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm text-[var(--color-warm-700)] mb-1"
        >
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm text-[var(--color-warm-700)] mb-1"
        >
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm text-[var(--color-warm-700)] mb-1"
        >
          Telefon (optional)
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="kurs"
          className="block text-sm text-[var(--color-warm-700)] mb-1"
        >
          Kurs / Interesse
        </label>
        <select
          id="kurs"
          value={formData.kurs}
          onChange={(e) =>
            setFormData({ ...formData, kurs: e.target.value })
          }
          className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
        >
          <option value="">Bitte wählen...</option>
          <option value="Hatha Yoga">Hatha Yoga</option>
          <option value="Yoga für Schwangere">Yoga für Schwangere</option>
          <option value="Rückbildungskurs">Rückbildungskurs</option>
          <option value="Yoga (DJK Ottenhofen)">Yoga (DJK Ottenhofen)</option>
          <option value="Rückbildung (DJK Ottenhofen)">
            Rückbildung (DJK Ottenhofen)
          </option>
          <option value="Yoga Grundkurs (VHS)">Yoga Grundkurs (VHS)</option>
          <option value="Schwangeren-Yoga (VHS)">Schwangeren-Yoga (VHS)</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-[var(--color-warm-700)] mb-1"
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors resize-y"
          placeholder="Schreib mir gerne deine Fragen oder teile mir mit, für welchen Kurs du dich interessierst..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--color-sage-600)] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[var(--color-sage-700)] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
      </button>

      {status === "sent" && (
        <p className="text-[var(--color-sage-600)] text-sm text-center">
          Vielen Dank! Deine Nachricht wurde gesendet. Ich melde mich bei dir.
        </p>
      )}
      {status === "error" && (
        <p className="text-[var(--color-rose-600)] text-sm text-center">
          Es gab einen Fehler. Bitte versuche es erneut oder schreib mir
          direkt per E-Mail.
        </p>
      )}
    </form>
  );
}

export default function KontaktPage() {
  return (
    <>
      <section className="bg-[var(--color-warm-100)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--color-sage-600)] mb-3">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl text-[var(--color-warm-900)] mb-4">
            Schreib mir
          </h1>
          <p className="text-[var(--color-warm-600)] max-w-xl mx-auto">
            Du hast Fragen zu einem Kurs oder möchtest einen Platz anfragen?
            Ich freue mich, von dir zu hören.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Suspense fallback={<div>Laden...</div>}>
            <KontaktForm />
          </Suspense>

          <div className="mt-12 pt-8 border-t border-[var(--color-warm-200)] text-center text-sm text-[var(--color-warm-500)]">
            <p>
              Oder schreib mir direkt an:{" "}
              <a
                href="mailto:katharina@miler.de"
                className="text-[var(--color-sage-600)] underline underline-offset-4"
              >
                katharina@miler.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
