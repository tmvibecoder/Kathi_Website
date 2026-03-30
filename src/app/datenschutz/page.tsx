export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-[var(--color-warm-100)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl text-[var(--color-warm-900)]">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 space-y-8 text-sm text-[var(--color-warm-700)] leading-relaxed">
          {/* 1. Verantwortliche */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <p className="mt-2">
              Katharina Miler
              <br />
              [Adresse]
              <br />
              E-Mail: katharina@miler.de
            </p>
          </div>

          {/* 2. Allgemeines */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p>
              Die Nutzung dieser Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf diesen Seiten
              personenbezogene Daten (z.B. Name, Anschrift oder
              E-Mail-Adresse) erhoben werden, erfolgt dies stets auf
              freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
              Zustimmung nicht an Dritte weitergegeben.
            </p>
          </div>

          {/* 3. Server-Log-Files */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              3. Server-Log-Dateien
            </h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr
              Browser automatisch übermittelt. Dies sind: Browsertyp und
              -version, verwendetes Betriebssystem, Referrer URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und
              IP-Adresse.
            </p>
            <p className="mt-2">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenführung mit anderen Datenquellen wird nicht
              vorgenommen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          {/* 4. Kontaktformular */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              4. Kontaktformular
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Formular (Name, E-Mail-Adresse,
              ggf. Telefonnummer und Nachricht) zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen).
            </p>
          </div>

          {/* 5. Gesundheitsdaten */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              5. Verarbeitung von Gesundheitsdaten (Art. 9 DSGVO)
            </h2>
            <p>
              Im Rahmen der Kursanmeldung erheben wir über digitale
              Fragebögen Gesundheitsdaten (z.B. Angaben zu Schmerzen,
              Beckenbodenproblemen, Schwangerschaft, Geburt). Diese Daten
              gehören zu den besonderen Kategorien personenbezogener Daten
              gemäß Art. 9 DSGVO.
            </p>
            <p className="mt-2">
              <strong>Zweck der Verarbeitung:</strong> Die Daten dienen
              ausschließlich der Beurteilung Ihrer Eignung für die
              Kursteilnahme und der sicheren Kursgestaltung.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Ihre ausdrückliche
              Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO. Diese
              Einwilligung erteilen Sie durch Ankreuzen des entsprechenden
              Feldes und Ihre digitale Unterschrift auf dem Fragebogen.
            </p>
            <p className="mt-2">
              <strong>Speicherung:</strong> Die ausgefüllten Fragebögen
              werden als PDF-Dateien verschlüsselt auf unserem Server bei
              Hetzner Online GmbH (Standort Deutschland) gespeichert.
            </p>
            <p className="mt-2">
              <strong>Speicherdauer:</strong> Die Gesundheitsdaten werden
              für die Dauer Ihrer Kursteilnahme und bis zu 12 Monate nach
              Kursende gespeichert und anschließend gelöscht.
            </p>
            <p className="mt-2">
              <strong>Widerruf:</strong> Sie können Ihre Einwilligung
              jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie
              uns eine E-Mail an katharina@miler.de senden. Der Widerruf
              berührt nicht die Rechtmäßigkeit der bis dahin erfolgten
              Verarbeitung.
            </p>
          </div>

          {/* 6. Digitale Unterschrift */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              6. Digitale Unterschrift
            </h2>
            <p>
              Die Fragebögen werden mit einer einfachen elektronischen
              Signatur (SES) im Sinne der eIDAS-Verordnung unterschrieben.
              Dabei wird Ihre handschriftliche Unterschrift auf dem
              Bildschirm (per Maus oder Finger) erfasst und als Bilddatei
              in das PDF-Dokument eingebettet. Zusätzlich wird ein Zeitstempel
              gespeichert.
            </p>
          </div>

          {/* 7. Hosting */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              7. Hosting
            </h2>
            <p>
              Diese Website wird bei der Hetzner Online GmbH, Industriestr.
              25, 91710 Gunzenhausen, Deutschland gehostet. Die Server
              befinden sich in Deutschland. Hetzner verarbeitet Daten in
              unserem Auftrag und ist vertraglich zur Einhaltung der DSGVO
              verpflichtet.
            </p>
          </div>

          {/* 8. Ihre Rechte */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              8. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <strong>Auskunft</strong> über Ihre bei uns gespeicherten
                personenbezogenen Daten (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16
                DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung</strong> der Verarbeitung (Art. 18
                DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung (Art.
                21 DSGVO)
              </li>
              <li>
                <strong>Beschwerde</strong> bei einer Aufsichtsbehörde
                (Art. 77 DSGVO) — zuständig ist das Bayerische Landesamt
                für Datenschutzaufsicht (BayLDA)
              </li>
            </ul>
          </div>

          {/* 9. SSL */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-warm-900)] mb-3">
              9. SSL-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine
              SSL-Verschlüsselung (HTTPS). Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
          </div>

          <p className="text-xs text-[var(--color-warm-500)] italic pt-4 border-t border-[var(--color-warm-200)]">
            Stand: März 2026. Bitte ergänze deine vollständige Adresse,
            Kathi.
          </p>
        </div>
      </section>
    </>
  );
}
