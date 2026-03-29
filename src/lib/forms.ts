export interface FormQuestion {
  id: string;
  label: string;
  subLabel?: string;
  type: "text" | "textarea" | "date";
  required?: boolean;
}

export interface FormDefinition {
  id: string;
  title: string;
  subtitle: string;
  disclaimer: string;
  questions: FormQuestion[];
  haftungsausschluss: string[];
  teilnahmehinweis: string[];
}

export const forms: FormDefinition[] = [
  {
    id: "rueckbildung",
    title: "Fragebogen / Selbstauskunft",
    subtitle: "Rückbildung bei Katharina Miler",
    disclaimer:
      "Sämtliche Angaben unterliegen der Schweigepflicht und den geltenden Datenschutzbestimmungen.",
    questions: [
      {
        id: "name",
        label: "Name, Vorname",
        type: "text",
        required: true,
      },
      {
        id: "geburtsdatum",
        label: "Geburtsdatum",
        type: "date",
        required: true,
      },
      {
        id: "erste_geburt",
        label: "War das Ihre erste Geburt?",
        type: "textarea",
      },
      {
        id: "anzahl_kinder",
        label: "Wenn nein, wie viele Kinder haben Sie bereits?",
        type: "text",
      },
      {
        id: "spontane_geburt",
        label: "Haben Sie eine spontane Geburt gehabt?",
        type: "textarea",
      },
      {
        id: "rektusdiastase",
        label:
          "Ist die Rektusdiastase (Spalt zwischen dem geraden Bauchmuskel) noch vorhanden?",
        type: "textarea",
      },
      {
        id: "schmerzen",
        label: "Haben Sie derzeit Schmerzen?",
        subLabel: "Wenn ja, wo haben Sie Schmerzen?",
        type: "textarea",
      },
      {
        id: "beckenboden",
        label: "Haben Sie derzeit Probleme mit dem Beckenboden?",
        subLabel: "Wenn ja, welche?",
        type: "textarea",
      },
      {
        id: "stillen",
        label: "Stillen Sie?",
        type: "textarea",
      },
      {
        id: "sport_vergangenheit",
        label: "Haben Sie in der Vergangenheit Sport getrieben?",
        subLabel: "Wenn ja, was und in welchem Umfang?",
        type: "textarea",
      },
      {
        id: "ziele",
        label:
          'Welche Ziele wollen Sie mit dem Kurs „Rückbildung" erreichen?',
        type: "textarea",
      },
    ],
    haftungsausschluss: [
      "Ich bin mir bewusst, dass mit körperlichem Training ein erhöhtes Verletzungs- und Beschwerderisiko verbunden ist und ich während der Kursstunde für mich selbst verantwortlich bin.",
      "Zum Zeitpunkt des Trainings fühle ich mich körperlich, geistig und seelisch gesund und nehme auf eigene Verantwortung und auf eigenes Risiko teil.",
      "Mir ist bewusst, dass das falsche oder unachtsame Ausführen der Übungen Auswirkungen auf meine Gesundheit haben kann.",
      "Beschwerden jedweder Art oder Unwohlsein werde ich unverzüglich mitteilen.",
      "Bei Zweifel an meinem Gesundheitszustand (z.B. bei körperlichen Einschränkungen, Problemen am Bewegungsapparat, Herz-/Kreislaufbeschwerden, Atemwegsproblemen oder Bluthochdruck) werde ich vor Teilnahme diesen von einem Arzt/Therapeuten abklären lassen.",
      "Ich schließe deshalb alle Haftungsansprüche gegenüber der Kursleitung, die aus eventuellen gesundheitlich-medizinischen Problemen als Folge des Trainings entstehen können, ausdrücklich aus.",
    ],
    teilnahmehinweis: [
      "Sollte ich an einer gebuchten Kursstunde nicht teilnehmen können, besteht kein Anspruch auf Rückerstattung der Kursgebühr oder auf einen Nachholtermin. Die Kursgebühr gilt für den gesamten gebuchten Kurszeitraum, unabhängig von der tatsächlichen Teilnahme an einzelnen Stunden.",
    ],
  },
  {
    id: "schwangeren-yoga",
    title: "Fragebogen / Selbstauskunft",
    subtitle: "Schwangerschafts-Yoga bei Katharina Miler",
    disclaimer:
      "Sämtliche Angaben unterliegen der Schweigepflicht und den geltenden Datenschutzbestimmungen.",
    questions: [
      {
        id: "name",
        label: "Name, Vorname",
        type: "text",
        required: true,
      },
      {
        id: "geburtsdatum",
        label: "Geburtsdatum",
        type: "date",
        required: true,
      },
      {
        id: "sport_vergangenheit",
        label: "Haben Sie in der Vergangenheit Sport getrieben?",
        subLabel: "Wenn ja, was und in welchem Umfang?",
        type: "textarea",
      },
      {
        id: "erste_schwangerschaft",
        label: "Ist das Ihre erste Schwangerschaft?",
        type: "textarea",
      },
      {
        id: "anzahl_kinder",
        label: "Wenn nein, wie viele Kinder haben Sie bereits?",
        type: "text",
      },
      {
        id: "ziele",
        label:
          "Welche Ziele wollen Sie mit dem Schwangerschafts-Yoga-Kurs erreichen?",
        type: "textarea",
      },
      {
        id: "beckenboden",
        label: "Haben Sie derzeit Probleme mit dem Beckenboden?",
        subLabel: "Wenn ja, welche?",
        type: "textarea",
      },
      {
        id: "schmerzen",
        label: "Haben Sie derzeit Schmerzen?",
        subLabel: "Wenn ja, wo haben Sie Schmerzen?",
        type: "textarea",
      },
    ],
    haftungsausschluss: [
      "Ich bin mir bewusst, dass mit körperlichem Training ein erhöhtes Verletzungs- und Beschwerderisiko verbunden ist und ich während der Kursstunde für mich selbst verantwortlich bin.",
      "Zum Zeitpunkt des Trainings fühle ich mich körperlich, geistig und seelisch gesund und nehme auf eigene Verantwortung und auf eigenes Risiko teil.",
      "Mir ist bewusst, dass das falsche oder unachtsame Ausführen der Übungen Auswirkungen auf meine Gesundheit haben kann.",
      "Beschwerden jedweder Art oder Unwohlsein werde ich unverzüglich mitteilen.",
      "Bei Zweifel an meinem Gesundheitszustand (z.B. bei körperlichen Einschränkungen, Problemen am Bewegungsapparat, Herz-/Kreislaufbeschwerden, Atemwegsproblemen oder Bluthochdruck) werde ich vor Teilnahme diesen von einem Arzt/Therapeuten abklären lassen.",
      "Ich schließe deshalb alle Haftungsansprüche gegenüber der Kursleitung, die aus eventuellen gesundheitlich-medizinischen Problemen als Folge des Trainings entstehen können, ausdrücklich aus.",
    ],
    teilnahmehinweis: [
      "Sollte ich an einer gebuchten Kursstunde nicht teilnehmen können, besteht kein Anspruch auf Rückerstattung der Kursgebühr oder auf einen Nachholtermin. Die Kursgebühr gilt für den gesamten gebuchten Kurszeitraum, unabhängig von der tatsächlichen Teilnahme an einzelnen Stunden.",
    ],
  },
];
