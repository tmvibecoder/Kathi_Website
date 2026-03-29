export type CourseProvider = "eigen" | "djk" | "vhs";

export interface Course {
  id: string;
  title: string;
  description: string;
  provider: CourseProvider;
  providerName: string;
  category: "yoga" | "schwangeren-yoga" | "rueckbildung";
  schedule: string;
  location: string;
  status: "aktiv" | "geplant" | "ausgebucht";
  spots?: string;
  price?: string;
  startDate?: string;
}

export const courses: Course[] = [
  // Eigene Kurse
  {
    id: "yoga-eigen-1",
    title: "Hatha Yoga",
    description:
      "Klassisches Hatha Yoga für alle Level. Wir arbeiten an Kraft, Flexibilität und innerer Ruhe.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "yoga",
    schedule: "Montags, 18:00 – 19:15 Uhr",
    location: "Kursraum Kathi Miler (Adresse folgt)",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },
  {
    id: "schwangeren-eigen-1",
    title: "Yoga für Schwangere",
    description:
      "Sanfte Yoga-Praxis speziell für werdende Mamas. Atemübungen, sanfte Dehnungen und Entspannung.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "schwangeren-yoga",
    schedule: "Mittwochs, 10:00 – 11:00 Uhr",
    location: "Kursraum Kathi Miler (Adresse folgt)",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },
  {
    id: "rueckbildung-eigen-1",
    title: "Rückbildungskurs",
    description:
      "Gezieltes Training nach der Geburt: Beckenboden, Rumpfstabilität und sanfter Wiedereinstieg in die Bewegung.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "rueckbildung",
    schedule: "Freitags, 09:30 – 10:30 Uhr",
    location: "Kursraum Kathi Miler (Adresse folgt)",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },

  // DJK Ottenhofen
  {
    id: "yoga-djk-1",
    title: "Yoga (DJK Ottenhofen)",
    description:
      "Yoga-Kurs im Rahmen des Sportvereins DJK Ottenhofen. Für Vereinsmitglieder und Gäste.",
    provider: "djk",
    providerName: "DJK Ottenhofen",
    category: "yoga",
    schedule: "Dienstags, 19:00 – 20:15 Uhr",
    location: "Turnhalle DJK Ottenhofen",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Vereinsbeitrag",
  },
  {
    id: "rueckbildung-djk-1",
    title: "Rückbildung (DJK Ottenhofen)",
    description:
      "Rückbildungskurs über den Sportverein DJK Ottenhofen.",
    provider: "djk",
    providerName: "DJK Ottenhofen",
    category: "rueckbildung",
    schedule: "Donnerstags, 10:00 – 11:00 Uhr",
    location: "Turnhalle DJK Ottenhofen",
    status: "geplant",
    startDate: "Geplanter Start: Frühjahr 2026",
  },

  // Volkshochschule
  {
    id: "yoga-vhs-1",
    title: "Yoga Grundkurs (VHS)",
    description:
      "Yoga-Einsteigerkurs über die Volkshochschule. Ideal für Anfänger ohne Vorkenntnisse.",
    provider: "vhs",
    providerName: "Volkshochschule",
    category: "yoga",
    schedule: "Mittwochs, 18:30 – 19:45 Uhr",
    location: "VHS-Kursraum (Adresse folgt)",
    status: "aktiv",
    price: "VHS-Kursgebühr",
  },
  {
    id: "schwangeren-vhs-1",
    title: "Schwangeren-Yoga (VHS)",
    description:
      "Yoga für Schwangere über die Volkshochschule. Sanft, sicher und wohltuend.",
    provider: "vhs",
    providerName: "Volkshochschule",
    category: "schwangeren-yoga",
    schedule: "Termine auf Anfrage",
    location: "VHS-Kursraum (Adresse folgt)",
    status: "geplant",
    startDate: "Geplant für 2026",
  },
];

export const providerInfo: Record<
  CourseProvider,
  { name: string; description: string; color: string }
> = {
  eigen: {
    name: "Eigene Kurse",
    description:
      "Kurse in eigener Regie — direkt bei mir buchen und anfragen.",
    color: "var(--color-sage-600)",
  },
  djk: {
    name: "DJK Ottenhofen",
    description:
      "Kurse über den Sportverein DJK Ottenhofen. Anmeldung über den Verein.",
    color: "var(--color-warm-600)",
  },
  vhs: {
    name: "Volkshochschule",
    description:
      "Kurse über die Volkshochschule. Anmeldung über die VHS.",
    color: "var(--color-rose-600)",
  },
};
