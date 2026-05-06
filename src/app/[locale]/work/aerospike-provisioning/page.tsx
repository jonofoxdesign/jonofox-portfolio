import type { Metadata } from "next";
import CaseStudyLayout, { Section } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Cluster Provisioning — Aerospike Database",
  description: "Product design case study: cluster provisioning for Aerospike, an enterprise NoSQL database. Safe defaults, deep configuration, and clear guidance for developer teams.",
};

const IMG = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-12 w-full rounded-2xl overflow-hidden border border-surface-muted" >
    <img src={src} alt={alt} className="w-full h-auto" />
  </div>
);

export default async function AerospikeProvisioningPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Aerospike"
      title={de
        ? <>Kontrolle nach Bedarf.<br />Sicherheit als Standard.</>
        : <>Depth when you want it.<br />Safety when you don&apos;t.</>
      }
      intro={de
        ? "Ein Cluster-Provisioning-Flow, der Teams ermöglicht, mit sicheren Standards schnell voranzukommen, bei Bedarf auf erweiterte Kontrolle umzuschalten und sich schnell zu erholen, wenn etwas schiefgeht. Entwickelt als erstes Erlebnis, das Aerospike Cloud aus der Preview-Phase in die allgemeine Verfügbarkeit geführt hat."
        : "A cluster provisioning flow that lets teams move fast with safe defaults, switch to advanced control when needed, and recover quickly when something goes wrong. Built as the first experience to take Aerospike Cloud beyond preview and into general availability."
      }
      meta={de
        ? {
            company: "Aerospike",
            product: "Managed cloud database platform",
            year: "2025",
            role: "Alleiniger Designer",
            scope: "End-to-End-Provisioning-Flow",
            collaboration: "Engineering, Produkt, Backend- und Datenbankingenieure",
          }
        : {
            company: "Aerospike",
            product: "Managed cloud database platform",
            year: "2025",
            role: "Sole designer",
            scope: "End-to-end provisioning flow",
            collaboration: "Engineering, product, backend and database engineers",
          }
      }
    >
      {de ? (
        <>
          <Section heading="Die Herausforderung">
            <p>Vor diesem Projekt bedeutete der Einstieg in Aerospike: die Datenbank selbst installieren, die eigene Infrastruktur provisionieren und die Konfiguration aus der Dokumentation herleiten. Für erfahrene Nutzer war das kein Problem. Für alle anderen war es ein Grund, es gar nicht erst zu versuchen.</p>
            <p>Aerospike Cloud war das Managed-Angebot, das das ändern sollte. Damit es funktioniert, brauchten Kunden einen Self-Service-Weg zu produktionsbereiten Clustern. Kein Tutorial, keine Preview. Ein zuverlässiges erstes Erlebnis, das von Anfang an Vertrauen weckt.</p>
            <p>Managed Services haben einen anderen Anspruch als selbstverwaltete Lösungen. Standardwerte müssen sicher sein. Fehlkonfiguration muss schwer sein. Fehlermeldungen müssen tatsächlich erklären, was schiefgelaufen ist. Und das Ganze muss schnell gehen. Aerospikes Kunden sind Backend-, Plattform- und Operations-Engineers, die ihre Infrastruktur kennen und Präzision erwarten. Ein Flow, der sich vereinfacht oder undurchsichtig anfühlt, verliert sie sofort.</p>
            <p>Den Betrieb von Infrastruktur zu ermöglichen war nur ein Teil davon. Der eigentliche Maßstab war, ob ein Team seine Anwendung verbinden und Daten fließen sehen konnte. Alles in derselben Sitzung.</p>
          </Section>

          <Section heading="Meine Rolle">
            <p>Ich war der alleinige Designer des Provisioning-Flows und übernahm dabei auch einen großen Teil der Produkt- und Frontend-Verantwortung. Ich definierte die Gesamtstruktur und die Schrittabfolge, entschied, welche Konfigurationen offengelegt und welche abstrahiert werden sollten, gestaltete die Einführung erweiterter Einstellungen und JSON/YAML, schrieb Tickets, testete Implementierungen und trieb Entscheidungen voran, wenn Verantwortlichkeiten unklar waren.</p>
            <p>Ich arbeitete am engsten mit dem Engineering-Manager, Frontend-Engineers und Backend- und Datenbankengineers zusammen. Produkt war durchgehend einbezogen, aber ich trieb oft die Priorisierung voran, um die Dinge in Bewegung zu halten.</p>
            <p>Die Engineers, die Aerospike gebaut haben, kannten das Produkt in der Tiefe und wollten, dass die UI das alles widerspiegelt: jede Konfigurationsoption, jeden erweiterten Parameter. Ich musste immer wieder gegensteuern. Meine Einschätzung war, dass echte Power-User eine Web-UI sowieso nicht nutzen würden. Die wären in der API, der CLI, würden direkt mit Configs arbeiten. Die UI musste neue und fortgeschrittene Nutzer gut bedienen, und zu versuchen, die Tiefe der API abzubilden, hätte genau die Menschen begraben, die eigentlich Orientierung brauchten.</p>
            <p>Das andere, worauf ich hart gepusht habe, war Terminologie. Aerospike hat seine eigene Sprache. Namespaces, Sets, Records, Bins. Die muss konsistent sein — über UI, APIs, Dokumentation und die Datenbank selbst. Wenn sie es nicht ist, verlieren Nutzer das Vertrauen und die Lernkurve wird steiler. Ich habe viel Zeit damit verbracht, Leute zurückzuholen, wenn Dinge anfingen, anders benannt zu werden.</p>
          </Section>

          <Section heading="Die zentrale Spannung">
            <p>Das eigentliche Problem war nicht, wie man ein Formular baut. Es ging darum, zwei völlig unterschiedliche Erwartungen zu bedienen, ohne das Produkt aufzuspalten oder jemanden auf den falschen Weg zu zwingen.</p>
            <p>Manche Nutzer wollten schnell vorankommen und dem System vertrauen. Sie waren nicht hier, um Replikationsfaktoren zu justieren – sie wollten einen funktionierenden Cluster. Andere brauchten Transparenz und Kontrolle. Das waren Engineers, die selbstverwaltetes Aerospike in der Produktion betrieben, und die würden das nicht einem Formular mit versteckten Einstellungen überlassen.</p>
            <p>Zu einfach gestaltet, und die zweite Gruppe würde es nicht vertrauen. Zu komplex, und die erste Gruppe würde ins Stocken geraten. Das Ziel war, Nutzern die Wahl zu lassen, wie viel Kontrolle sie brauchten – ohne diese Wahl wie eine Last wirken zu lassen.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-progressive-provisioning.png" alt="Progressive provisioning — simple defaults with advanced configuration available on demand" />

          <Section heading="Design für sichere Geschwindigkeit">
            <p><strong className="text-ink">Standardwerte, die widerspiegeln, wie Aerospike wirklich funktioniert.</strong> Die Standardwerte waren keine generischen Cloud-Presets. Sie basierten auf Aerospike Best Practices und wurden mit Engineers validiert, die die Datenbank täglich betreiben und unterstützen. Wenn ein Nutzer jeden Standardwert akzeptierte, musste das Ergebnis etwas sein, hinter dem das Aerospike-Team steht.</p>
            <p><strong className="text-ink">Schrittweise Kontrolle ohne Bestrafung.</strong> Erweiterte Einstellungen waren verfügbar, ohne alle von Anfang an in den Expertenmodus zu zwingen. Für Nutzer, die volle Kontrolle wollten, war die JSON/YAML-Konfiguration bewusst zugänglich gemacht. Nicht versteckt, nicht vorgeschrieben. Und es war möglich, zwischen Modi zu wechseln, ohne den Flow neu zu starten oder den Kontext zu verlieren.</p>
            <p><strong className="text-ink">Leitplanken statt Überraschungen.</strong> Provisioning-Fehler können teuer sein. Im gesamten Flow wurden Einschränkungen und Validierungen entworfen, um ungültige oder riskante Konfigurationen vor dem Start zu verhindern. Wenn etwas falsch war, erklärten Fehlermeldungen explizit, was geändert werden musste und warum. Fehlerpfade erhielten genauso viel Designaufmerksamkeit wie Erfolgspfade.</p>
            <p><strong className="text-ink">Dokumentation als Teil des Systems.</strong> Kontextbezogene Hinweise erschienen neben Entscheidungen, stimmten mit der Sprache und dem Verhalten der UI überein und verstärkten dasselbe mentale Modell über UI, APIs und Dokumentation hinweg. Nutzer konnten lernen und Entscheidungen validieren, ohne das Produkt zu verlassen.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-same-step-two-paths.png" alt="Same step, two paths — simple and advanced configuration side by side" />

          <Section heading="Weg zu den ersten Daten">
            <p>Das Provisionieren eines Clusters dauert etwa 20 Minuten. Anstatt diese Zeit als Wartezeit zu behandeln, macht das Design sie nutzbar. Sobald ein Cluster gestartet ist, werden Nutzer sofort zu den zwei Aufgaben geleitet, die abgeschlossen sein müssen, bevor Daten fließen können: Netzwerkzugang einrichten und einen Datenbanknutzer erstellen. Beides ist verfügbar, bevor der Cluster live ist. Wenn das Provisioning abgeschlossen ist, haben die meisten Nutzer beides bereits erledigt.</p>
            <p>VPC Peering war der technisch anspruchsvollste Schritt in diesem Setup und das ungewöhnlichste Designproblem im gesamten Projekt. Eine Peering-Verbindung herzustellen erfordert Schritte in AWS, einer Umgebung, die Aerospike nicht kontrolliert. Nutzer müssen das Produkt verlassen, ihre AWS-Konsole aufrufen, bestimmte Werte sammeln, zurückkehren und das Formular ausfüllen. Das kontextbezogene Docs-Panel, das beim Provisioning als optionale Hilfe dient, wird an diesem Schritt zu etwas Wesentlicherem. Es öffnet sich mit einer Schritt-für-Schritt-Anleitung für genau diesen AWS-Workflow. Etwa jeder vierte Nutzer, der das VPC-Peering-Formular erreichte, öffnete das Panel, typischerweise nach einigen Minuten im Formular. Das legt nahe, dass das Layout die meisten Routinefälle abdeckte und das Panel für echte Komplexität zuständig war.</p>
            <p>Die Erstellung von Datenbanknutzern war bewusst unkompliziert. Die wichtigste Entscheidung betraf das Passwort: Automatische Generierung war verfügbar, und das Passwort wurde einmal bei der Erstellung angezeigt. Ein CSV-Export ermöglichte die sichere Speicherung. Ein kleines Detail, aber eines, das zum Support-Problem wird, wenn es sorglos umgesetzt wird.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-finish-cluster-setup.png" alt="Finish cluster setup — network access and database user creation before the cluster is live" />

          <Section heading="Ergebnis">
            <p>Der Flow wurde als Grundlage für die allgemeine Verfügbarkeit von Aerospike Cloud geliefert. Die Abschlussrate durch den vollständigen Provisioning-Wizard lag weit über den Erwartungen für einen mehrstufigen technischen Konfigurationsflow. Der Schritt mit der höchsten durchschnittlichen Zeit war der erweiterte Konfigurationsschritt mit 24 Sekunden – beabsichtigt. Geschwindigkeit, wo es schnell sein soll. Tiefe, wo sie gebraucht wird.</p>
            <p>Die durchschnittliche End-to-End-Provisioning-Zeit lag bei 72 Sekunden. Der Benchmark, den wir angestrebt hatten, war 90. Für Engineers, die einen Managed Service bewerten, ist das der Unterschied zwischen &quot;Das könnte für uns funktionieren&quot; und &quot;Schauen wir uns weiter um.&quot;</p>
            <p>Der Verlauf über die Zeit war das aufschlussreichste Signal. Validierungsfehler und Dokumentationsaufrufe beim Provisioning begannen beide hoch und sanken stetig, als das Erlebnis reifte – nicht weil die Nutzung zurückging, sondern weil die UI mehr selbst erklärte. Der Standard-Cluster-Pfad dominierte und bestätigte die zentrale Design-Wette: Standardwerte waren kein Fallback. Sie waren das primäre Erlebnis.</p>
            <p>Das übergeordnete Ziel war ein Team, das vom ersten Klick über einen laufenden Cluster bis zur verbundenen Anwendung in einer einzigen Sitzung kommen konnte. Provisioning-Wizard, Setup-Hinweise und der Netzwerkzugangs-Flow waren alle auf dieses Ziel ausgerichtet.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-docs.png" alt="Contextual documentation panel open during VPC peering setup" />

          <Section heading="Was ich mitnehme">
            <p>Geschwindigkeit und Sicherheit erwiesen sich hier nicht als Gegensätze. Erfahrene Nutzer profitierten trotzdem sehr von klaren Standardwerten. Fehlerpfade und Wiederherstellung brauchten genauso viel Designzeit wie der Happy Path.</p>
            <p>Das andere, was ich mitnehme: Dokumentation, APIs und UI müssen dieselbe Geschichte erzählen. Wenn nicht, verlieren Nutzer schnell das Vertrauen. Wenn doch, bewegen sich Menschen schneller als erwartet.</p>
            <p>Für Engineers, die überlegen, ob sie einen Managed Service nutzen sollen, ist das Provisioning im Grunde die gesamte Präsentation. Falsch umgesetzt, und sie schauen sich anderswo um.</p>
            <p>Das Feedback seit dem Launch war gut. Ich habe den Flow mit Wachstum im Hinterkopf gebaut, daher denke ich, dass die Grundlagen vorhanden sind. Aber jede neue Ergänzung wird ihre eigenen Fragen mitbringen. Preismodelle, andere Cloud-Anbieter, Backup-Optionen. Ob dieselben Prinzipien so weit tragen — das ist es, worauf ich mich freue, herauszufinden.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The problem">
            <p>Before this project, getting started with Aerospike meant installing the database yourself, provisioning your own infrastructure, and figuring out configuration from the docs. For expert users, that was fine. For everyone else, it was a reason not to bother.</p>
            <p>Aerospike Cloud was the managed offering that was supposed to change that. For it to work, customers needed a self-serve path to production-ready clusters. Not a tutorial, not a preview. A reliable first experience that felt trustworthy from the start.</p>
            <p>Managed services have a different bar than self-managed ones. Defaults have to be safe. Misconfiguration has to be hard. Errors have to actually tell you what went wrong. And the whole thing has to be fast. Aerospike&apos;s customers are backend, platform, and operations engineers who know their infrastructure and expect precision. A flow that felt dumbed down or opaque would lose them immediately.</p>
            <p>Getting infrastructure running was only part of it. The real measure was whether a team could connect their application and get data flowing, all in the same session.</p>
          </Section>

          <Section heading="My role">
            <p>I was the sole designer on the provisioning flow, and took on a large amount of product and frontend ownership alongside it. I defined the overall step structure and sequencing, decided what configuration to expose versus abstract, shaped how advanced settings and JSON/YAML were introduced, wrote tickets, tested implementations, and drove decisions when ownership was unclear.</p>
            <p>I worked most closely with the engineering manager, frontend engineers, and backend and database engineers. Product was involved throughout, but I often drove prioritisation to keep things moving.</p>
            <p>The engineers who built Aerospike knew the product deeply and wanted the UI to reflect all of it: every configuration option, every advanced parameter. I kept pushing back on that. My read was that real power users were not going to use a web UI anyway. They would be in the API, the CLI, working with configs directly. The UI needed to serve new and intermediate users well, and trying to match the depth of the API would have buried the people who actually needed guidance.</p>
            <p>The other thing I pushed hard on was terminology. Aerospike has its own language. Namespaces, sets, records, bins. It needs to be consistent across the UI, the APIs, the docs, and the database itself. If they do not match, users lose trust and the learning curve gets steeper. I spent a lot of time pulling people back to that when things started to drift.</p>
          </Section>

          <Section heading="The core tension">
            <p>The real problem was not how to build a form. It was how to support two completely different expectations without splitting the product or forcing anyone down the wrong path.</p>
            <p>Some users wanted to move fast and trust the system. They were not here to tune replication factors — they wanted a cluster that worked. Others needed visibility and control. These were engineers who ran self-managed Aerospike in production, and they were not going to hand that over to a form with hidden settings.</p>
            <p>Design it too simple and the second group would not trust it. Design it too complex and the first group would stall. The goal was to let users choose how much control they needed, without making that choice feel like a burden.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-progressive-provisioning.png" alt="Progressive provisioning — simple defaults with advanced configuration available on demand" />

          <Section heading="Designing for safe speed">
            <p><strong className="text-ink">Defaults that reflect how Aerospike actually works.</strong> Defaults were not generic cloud presets. They were based on Aerospike best practices and validated with engineers who run and support the database every day. If a user accepted every default, the result had to be something the Aerospike team would stand behind.</p>
            <p><strong className="text-ink">Progressive control without punishment.</strong> Advanced settings were available without forcing everyone into expert mode from the start. For users who wanted full control, JSON/YAML configuration was exposed deliberately. It wasn&apos;t hidden, and it wasn&apos;t required. And it was possible to move between modes without restarting the flow or losing context.</p>
            <p><strong className="text-ink">Guardrails instead of surprises.</strong> Provisioning mistakes can be expensive. Throughout the flow, constraints and validation were designed to prevent invalid or risky configurations before launch. When something was wrong, errors were explicit about what needed to change and why. Error paths got as much design attention as success paths.</p>
            <p><strong className="text-ink">Docs as part of the system.</strong> Contextual guidance appeared alongside decisions, matched the language and behaviour of the UI, and reinforced the same mental model across UI, APIs, and docs. Users could learn and validate choices without leaving the product.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-same-step-two-paths.png" alt="Same step, two paths — simple and advanced configuration side by side" />

          <Section heading="Getting to first data">
            <p>Provisioning a cluster takes around 20 minutes. Rather than treat that as dead time, the design puts it to use. Once a cluster is launched, users are directed immediately to the two tasks they need to complete before data can flow: set up network access and create a database user. Both are available before the cluster is live, so by the time provisioning completes, most users have already worked through them.</p>
            <p>VPC peering was the most technically demanding part of that setup, and the most unusual design problem in the project. Establishing a peering connection requires steps taken inside AWS, an environment Aerospike does not control. Users have to leave the product, navigate their AWS console, collect specific values, come back, and fill in the form. The contextual docs panel, which serves as optional guidance during provisioning, becomes something closer to essential at this step. It opens with a step-by-step guide for exactly that AWS workflow. Around 1 in 4 users who reached the VPC peering form opened it, typically several minutes in, which suggests the inline layout handled most routine cases and the panel caught genuine complexity.</p>
            <p>Database user creation was designed to be fast. The main decision was the password: auto-generation was available, and the password was shown once on creation. A CSV export let users store it securely. A small detail, but the kind that becomes a support problem if it is handled carelessly.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-finish-cluster-setup.png" alt="Finish cluster setup — network access and database user creation before the cluster is live" />

          <Section heading="Outcome">
            <p>The flow shipped as the foundation for Aerospike Cloud&apos;s general availability. Completion through the full provisioning wizard came in well above expectations for a multi-step technical configuration flow. The step with the highest average time was the advanced configuration step, at 24 seconds — intentional. Speed where it should be fast, depth where it needs to be.</p>
            <p>The average end-to-end provisioning time came in at 72 seconds. The benchmark we had been aiming for was 90. For engineers evaluating a managed service, that is the difference between &quot;this might work for us&quot; and &quot;let&apos;s keep looking.&quot;</p>
            <p>The trend over time was the most telling signal. Validation errors and documentation opens during provisioning both started high and declined steadily as the experience matured — not because usage slowed, but because the UI was doing more of the explaining itself. The default cluster path dominated, confirming the core design bet: defaults were not a fallback. They were the primary experience.</p>
            <p>The underlying goal was a team that could go from first click to running cluster to connected application in a single session. Provisioning, the setup prompts, and the network access flow were all built toward that.</p>
          </Section>

          <IMG src="/case-studies/aerospike-provisioning/aerospike-cloud-docs.png" alt="Contextual documentation panel open during VPC peering setup" />

          <Section heading="What I&apos;d carry forward">
            <p>Speed and safety turned out not to be opposites here. Advanced users still got a lot from having clear defaults. Error paths and recovery needed as much design time as the happy path.</p>
            <p>The other thing I&apos;d carry forward: documentation, APIs, and UI have to tell the same story. When they don&apos;t, users lose confidence fast. When they do, people move faster than you&apos;d expect.</p>
            <p>For engineers evaluating whether to use a managed service, provisioning is basically the whole pitch. Get it wrong and they&apos;re looking elsewhere.</p>
            <p>The feedback since launch has been good. I built with growth in mind, so I think the foundations are there. But each new addition will bring its own questions. Pricing models, other cloud providers, backup options. Whether the same principles stretch that far is what I&apos;m looking forward to finding out.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
