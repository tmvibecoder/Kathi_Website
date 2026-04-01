export type CourseProvider = "eigen" | "djk" | "vhs";

export interface Course {
  id: string;
  title: string;
  description: string;
  provider: CourseProvider;
  providerName: string;
  category: "yoga" | "schwangeren-yoga" | "rueckbildung" | "mama-sport" | "workout-mix";
  schedule: string;
  day: string;
  location: string;
  status: "aktiv" | "geplant" | "ausgebucht";
  spots?: string;
  price?: string;
  startDate?: string;
  note?: string;
}

export const courses: Course[] = [
  // Eigene Kurse (Hebammenpraxis Markt Schwaben)
  {
    id: "schwangeren-yoga-mo-1",
    title: "Schwangeren-Yoga (Kurs 1)",
    description:
      "Sanfte Yoga-Praxis speziell für werdende Mamas. Atemübungen, sanfte Dehnungen und Entspannung.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "schwangeren-yoga",
    day: "Montag",
    schedule: "Montags, 17:45 – 18:45 Uhr",
    location: "Hebammenpraxis Markt Schwaben",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },
  {
    id: "schwangeren-yoga-mo-2",
    title: "Schwangeren-Yoga (Kurs 2)",
    description:
      "Sanfte Yoga-Praxis speziell für werdende Mamas. Atemübungen, sanfte Dehnungen und Entspannung.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "schwangeren-yoga",
    day: "Montag",
    schedule: "Montags, 19:00 – 20:00 Uhr",
    location: "Hebammenpraxis Markt Schwaben",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },
  {
    id: "rueckbildung-mi",
    title: "Rückbildung",
    description:
      "Gezieltes Training nach der Geburt: Beckenboden, Rumpfstabilität und sanfter Wiedereinstieg in die Bewegung.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "rueckbildung",
    day: "Mittwoch",
    schedule: "Mittwochs, 09:00 – 10:00 Uhr",
    location: "Hebammenpraxis Markt Schwaben",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },
  {
    id: "mama-sport-mi",
    title: "Mama-Sport",
    description:
      "Fit bleiben als Mama — gemeinsam trainieren, Kraft aufbauen und den Alltag mit mehr Energie meistern.",
    provider: "eigen",
    providerName: "Eigener Kurs",
    category: "mama-sport",
    day: "Mittwoch",
    schedule: "Mittwochs, 10:15 – 11:15 Uhr",
    location: "Hebammenpraxis Markt Schwaben",
    status: "aktiv",
    spots: "Noch Plätze frei",
    price: "Preis auf Anfrage",
  },

  // DJK Ottenhofen
  {
    id: "yoga-djk-di",
    title: "Yoga",
    description:
      "Yoga-Kurs im Rahmen des Sportvereins DJK Ottenhofen. Für Vereinsmitglieder und Gäste.",
    provider: "djk",
    providerName: "Über den DJK Ottenhofen",
    category: "yoga",
    day: "Dienstag",
    schedule: "Dienstags, 17:30 – 18:45 Uhr",
    location: "DJK Ottenhofen",
    status: "aktiv",
    note: "Anmeldung über den Verein",
  },
  {
    id: "yoga-djk-fr",
    title: "Early Bird Yoga",
    description:
      "Starte energiegeladen in den Tag mit einer belebenden Yoga-Einheit am frühen Morgen.",
    provider: "djk",
    providerName: "Über den DJK Ottenhofen",
    category: "yoga",
    day: "Freitag",
    schedule: "Freitags, 07:00 – 08:00 Uhr",
    location: "DJK Ottenhofen",
    status: "aktiv",
    note: "Anmeldung über den Verein",
  },
  {
    id: "workout-mix-djk-fr",
    title: "Workout Mix",
    description:
      "Abwechslungsreiches Ganzkörpertraining mit Elementen aus Fitness, Kraft und Ausdauer.",
    provider: "djk",
    providerName: "Über den DJK Ottenhofen",
    category: "workout-mix",
    day: "Freitag",
    schedule: "Freitags, 08:15 – 09:15 Uhr",
    location: "DJK Ottenhofen",
    status: "aktiv",
    note: "Anmeldung über den Verein",
  },

  // Volkshochschule Poing
  {
    id: "mama-sport-vhs-di",
    title: "Mama-Sport",
    description:
      "Mama-Sport über die Volkshochschule Poing. Fit bleiben als Mama — gemeinsam trainieren und Kraft aufbauen.",
    provider: "vhs",
    providerName: "Über die VHS Poing",
    category: "mama-sport",
    day: "Dienstag",
    schedule: "Dienstags, 10:15 – 11:15 Uhr",
    location: "Volkshochschule Poing",
    status: "aktiv",
    note: "Anmeldung über die VHS Poing",
  },
];

export const providerInfo: Record<
  CourseProvider,
  { name: string; description: string; color: string }
> = {
  eigen: {
    name: "Eigene Kurse",
    description:
      "Kurse in eigener Regie in der Hebammenpraxis Markt Schwaben — direkt bei mir buchen und anfragen.",
    color: "var(--color-sage-600)",
  },
  djk: {
    name: "Über den DJK Ottenhofen",
    description:
      "Kurse über den Sportverein DJK Ottenhofen. Anmeldung über den Verein.",
    color: "var(--color-warm-600)",
  },
  vhs: {
    name: "Über die Volkshochschule Poing",
    description:
      "Kurse über die Volkshochschule Poing. Anmeldung über die VHS.",
    color: "var(--color-rose-600)",
  },
};
