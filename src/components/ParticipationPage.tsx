"use client";

import { useEffect, useState } from "react";
import { HealthForm } from "./HealthForm";
import type { FormDefinition } from "@/lib/forms";

type Access = {
  token: string;
  form: FormDefinition;
  course: { name: string; period: string };
  submittedAt: string | null;
  email: string;
};

export function ParticipationPage() {
  const [access, setAccess] = useState<Access | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      const token = window.location.hash.slice(1);
      if (!token) { setError("Bitte öffne den persönlichen Link aus deiner Reservierungsbestätigung."); return; }
      try {
        const response = await fetch("/api/participation", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "access", token }), signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Der Link konnte nicht geöffnet werden.");
        setAccess({ ...data, token });
      } catch (e) {
        if (!controller.signal.aborted) setError(e instanceof Error ? e.message : "Bitte versuche es später erneut.");
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl text-[var(--color-sage-700)] mb-5">Gut vorbereitet in deinen Kurs</h1>
      {error ? (
        <div role="alert" className="space-y-4">
          <p>{error}</p>
          <a href="/kontakt" className="underline text-[var(--color-sage-700)]">Kathi kontaktieren</a>
        </div>
      ) : access ? (
        <>
          <p className="mb-8 text-[var(--color-warm-700)]">{access.course.name} · {access.course.period}</p>
          <HealthForm form={access.form} participation={{ token: access.token, submittedAt: access.submittedAt, email: access.email }} />
        </>
      ) : <p role="status">Dein persönliches Formular wird geladen …</p>}
    </section>
  );
}
