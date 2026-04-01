"use client";

import { useState, useCallback } from "react";
import { SignaturePad } from "./SignaturePad";
import type { FormDefinition } from "@/lib/forms";

interface HealthFormProps {
  form: FormDefinition;
}

export function HealthForm({ form }: HealthFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [signature, setSignature] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [dsgvoConsent, setDsgvoConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignatureChange = useCallback((dataUrl: string | null) => {
    setSignature(dataUrl);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!signature) {
      setErrorMessage("Bitte unterschreiben Sie das Formular.");
      return;
    }
    if (!consent) {
      setErrorMessage(
        "Bitte bestätigen Sie den Haftungsausschluss und die Teilnahmehinweise."
      );
      return;
    }
    if (!dsgvoConsent) {
      setErrorMessage(
        "Bitte stimmen Sie der Verarbeitung Ihrer Gesundheitsdaten zu."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId: form.id,
          formTitle: form.subtitle,
          answers,
          signature,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Ein Fehler ist aufgetreten.");
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Verbindungsfehler. Bitte versuchen Sie es erneut."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl text-[var(--color-sage-700)] mb-3">
          Vielen Dank!
        </h3>
        <p className="text-[var(--color-warm-600)]">
          Ihr Fragebogen wurde erfolgreich übermittelt und als PDF gespeichert.
          <br />
          Katharina Miler wird Ihre Angaben vor Kursbeginn prüfen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div className="text-center border-b border-[var(--color-warm-200)] pb-6">
        <h2 className="text-2xl md:text-3xl text-[var(--color-warm-900)] mb-1">
          {form.title}
        </h2>
        <p className="text-lg text-[var(--color-sage-700)]">
          {form.subtitle}
        </p>
        <p className="text-xs text-[var(--color-warm-500)] mt-2 italic">
          {form.disclaimer}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {form.questions.map((q) => (
          <div key={q.id}>
            <label
              htmlFor={`${form.id}-${q.id}`}
              className="block text-sm font-semibold text-[var(--color-warm-800)] mb-1"
            >
              {q.label} {q.required && <span className="text-[var(--color-rose-500)]">*</span>}
            </label>
            {q.subLabel && (
              <p className="text-xs text-[var(--color-warm-500)] mb-1">
                {q.subLabel}
              </p>
            )}
            {q.type === "textarea" ? (
              <textarea
                id={`${form.id}-${q.id}`}
                rows={3}
                value={answers[q.id] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [q.id]: e.target.value })
                }
                required={q.required}
                className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors resize-y"
              />
            ) : q.type === "date" ? (
              <input
                id={`${form.id}-${q.id}`}
                type="date"
                value={answers[q.id] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [q.id]: e.target.value })
                }
                required={q.required}
                className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
              />
            ) : (
              <input
                id={`${form.id}-${q.id}`}
                type="text"
                value={answers[q.id] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [q.id]: e.target.value })
                }
                required={q.required}
                className="w-full border border-[var(--color-warm-300)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-sage-500)] transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      {/* Haftungsausschluss */}
      <div className="bg-[var(--color-warm-100)] p-6 border-l-4 border-[var(--color-sage-600)]">
        <h3 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
          Haftungsausschlusserklärung
        </h3>
        <ul className="space-y-2 text-sm text-[var(--color-warm-700)] leading-relaxed">
          {form.haftungsausschluss.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Teilnahmehinweis */}
      <div className="bg-[var(--color-warm-100)] p-6 border-l-4 border-[var(--color-warm-600)]">
        <h3 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
          Teilnahme- und Stornierungshinweis
        </h3>
        <ul className="space-y-2 text-sm text-[var(--color-warm-700)] leading-relaxed">
          {form.teilnahmehinweis.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[var(--color-sage-600)]"
          />
          <span className="text-sm text-[var(--color-warm-700)]">
            Ich habe den Haftungsausschluss und den Teilnahme- und
            Stornierungshinweis gelesen und akzeptiere diese. *
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={dsgvoConsent}
            onChange={(e) => setDsgvoConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[var(--color-sage-600)]"
          />
          <span className="text-sm text-[var(--color-warm-700)]">
            Ich willige ausdrücklich in die Verarbeitung meiner
            Gesundheitsdaten zum Zweck der Beurteilung meiner Eignung für die
            Kursteilnahme ein. Ich kann diese Einwilligung jederzeit
            widerrufen. Weitere Informationen finde ich in der{" "}
            <a
              href="/datenschutz"
              target="_blank"
              className="text-[var(--color-sage-600)] underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>
            . *
          </span>
        </label>
      </div>

      {/* Signature */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
          Unterschrift *
        </h3>
        <SignaturePad onSignatureChange={handleSignatureChange} />
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-[var(--color-rose-600)] text-sm text-center">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[var(--color-sage-600)] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[var(--color-sage-700)] transition-colors disabled:opacity-50"
      >
        {status === "submitting"
          ? "Wird gesendet..."
          : "Fragebogen absenden"}
      </button>
    </form>
  );
}
