import type { Metadata } from "next";
import CaseStudyLayout, { Section, CaseStudyImage } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Voyager Visual Developer Tool — Aerospike Database",
  description: "Product design case study: end-to-end design of Aerospike's first visual developer tool for an enterprise NoSQL database. Developer experience design from connection to confidence.",
  openGraph: {
    title: "Aerospike Voyager Developer Tool | Jono Fox",
    description: "End-to-end design of Aerospike's first visual developer tool. A guided path from first connection to confident use.",
  },
  twitter: {
    card: "summary_large_image",
  },
};


export default async function AerospikeVoyagerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Aerospike"
      title={de
        ? <>Der Aha-Moment<br />sollte nicht drei Tage dauern</>
        : <>The aha moment<br />shouldn&apos;t take three days</>
      }
      intro={de
        ? "Aerospike ist leistungsstark, aber für neue Entwickler war es größtenteils unsichtbar. Das Setup war fragmentiert, das Datenmodell schwer zu visualisieren, und die meisten Workflows basierten auf CLI-Tools oder Dokumentation. Ich leitete das End-to-End-Design von Voyager – Aerospikes erstem visuellem Developer-Tool – und verwandelte einen internen Prototypen in einen geführten Weg von der ersten Verbindung bis zum vollen Verständnis."
        : "Aerospike is powerful, but for a new developer it was mostly invisible. Setup was fragmented, the data model was hard to visualise, and most workflows relied on CLI tools or docs. I led the end-to-end design of Voyager — Aerospike's first visual developer tool — turning an internal prototype into a guided path from connection to confidence."
      }
      meta={de
        ? {
            company: "Aerospike",
            product: "Voyager Desktop-Developer-Tool",
            year: "2025–2026",
            role: "End-to-End Product Designer",
            scope: "Discovery bis zur fertigen UI",
            collaboration: "Engineering, Produkt, Developer Education und Growth-Teams",
          }
        : {
            company: "Aerospike",
            product: "Voyager desktop developer tool",
            year: "2025–2026",
            role: "End-to-end product designer",
            scope: "Discovery through shipped UI",
            collaboration: "Engineering, product, developer education and growth teams",
          }
      }
    >
      {de ? (
        <>
          <Section heading="Die Herausforderung">
            <p>Aerospike ist leistungsstark, aber schwer zu erlernen. Neue Entwickler wussten nicht, wo sie anfangen sollten. Das Datenmodell zu verstehen bedeutete, zwischen Tools zu springen. Die frühe Erkundung fühlte sich undurchsichtig und fehleranfällig an. Der erste Moment der Klarheit dauerte viel zu lange.</p>
            <p>Das eigentliche Problem war nicht nur fehlendes Tooling. Es war ein Mangel an Klarheit, Vertrauen und Momentum in der ersten Stunde mit Aerospike. Bestehende Tools zeigten Power. Keines davon erklärte, was passiert.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-app.png" alt="Voyager — visuelles Developer-Tool für Aerospike" />

          <Section heading="Meine Rolle">
            <p>Ich war der Product Designer für das gesamte Erlebnis, von der frühen Discovery bis zur fertigen UI. Ich definierte die Produktrichtung, entwarf das Interaktionsmodell und übersetzte komplexe Datenbankkonzepte in etwas, das Entwickler verstehen konnten. Ich arbeitete eng mit Engineering, Produktmanagement sowie Growth- und Developer-Experience-Teams zusammen und blieb während Build und QA involviert, als Randfälle auftauchten.</p>
            <p>Der ursprüngliche Plan war, zu prototypisieren, Nutzerfeedback zu sammeln und dann mit dem Build zu beginnen. Das änderte sich früh. Die Annahme war, dass KI es uns erlaubt, die Prototyping-Phase zu überspringen und die App schnell zu bauen, um dann mit echten Nutzern zu testen. Ich habe das damals mitgemacht, und im Nachhinein war das ein Fehler. Wichtige Produkt- und UX-Fragen waren noch ungelöst, als wir in den Build gegangen sind, und wurden in Code gegossen statt zuerst beantwortet. Die Komplikation war, dass schnell zu releasen, um zu testen, und ein Produkt tatsächlich zu releasen dasselbe war. Sobald ein Produkt offiziell released ist, haben neue Features immer Vorrang, und alles, was von Standards abgedriftet ist, bleibt so.</p>
            <p>Meine Antwort war, auf Struktur zu setzen statt jeden Qualitätsmangel in Reviews zu diskutieren. Die Erwartungen der Stakeholder daran, was KI produzieren kann, liefen weit vor dem, was sie tatsächlich lieferte. Anstatt das Fall für Fall zu bekämpfen, habe ich ein Standards-System aufgebaut: Design-Guidelines in strukturiertem Markdown, das Tools lesen und auditieren konnten, mit klareren Prozessregeln dafür, wie Design-Feedback in der Praxis funktionierte.</p>
          </Section>

          <Section heading="Was ich früh gelernt habe">
            <p>Ich begann mit einer schnellen Discovery-Phase und überprüfte Gong-Calls, internes Feedback, Wettbewerbs-Tools und den ursprünglichen Engineering-Prototypen. Einige Dinge zeigten sich immer wieder. Entwickler brauchten einen klaren Startpunkt, nicht nur Flexibilität. Echte Daten schnell zu sehen war entscheidend für den Vertrauensaufbau. Bestehende Tools zeigten Power, aber kein Verständnis. Aerospikes Kernkonzepte blieben abstrakt ohne Visualisierung.</p>
            <p>Das deutete auf den Job-to-be-done hin: <em>von null zu einem funktionierenden Prototypen kommen, schnell genug, um Aerospike für einen echten Anwendungsfall zu validieren.</em></p>
          </Section>

          <Section heading="Die zentrale Designentscheidung">
            <p>Die wichtigste Entscheidung war, Voyager als geführten Weg zum Verständnis zu gestalten, nicht nur als Datenbrowser.</p>
            <p>Zusammen mit dem Growth-PM definierten wir einen Golden Path für neue Nutzer: <strong className="text-ink">Verbinden → Daten hinzufügen → Daten sehen → Untersuchen → Filtern → Sicher experimentieren.</strong> Anstatt alles von Anfang an zu zeigen, hilft das Produkt Nutzern, Schritt für Schritt zu bedeutungsvollem Fortschritt zu gelangen.</p>
            <p>Die Definition dieses Pfades hat auch das Team ausgerichtet. Produkt, Growth und Engineering hatten unterschiedliche Vorstellungen davon, wofür Voyager ist. Der Golden Path beantwortete die Frage: Wie sieht Erfolg wirklich aus? Er wurde zum Rückgrat sowohl der UX als auch der Telemetriestrategie.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-golden-path-user-journey.png" alt="Golden path — user journey from connect to confidence" />

          <Section heading="Design für Komplexität">
            <p>Aerospike ist eine NoSQL-Datenbank. Die Daten sind unstrukturiert, was sie extrem schnell, aber auch schwer zu visualisieren macht. Sie verhält sich nicht wie eine typische JSON-basierte Datenbank. Records, Bins, Datentypen, Ausdrücke und verschachtelte Strukturen erzeugen mentalen Overhead.</p>
            <p>Für die Datenerkundung entwarf ich erweiterbare Record-Ansichten, klare Trennung von Struktur und Werten sowie progressive Offenlegung für verschachtelte Daten.</p>
          </Section>

          <Section heading="Der Filter-Builder">
            <p>Für Abfragen führte ich einen visuellen Filter-Builder ein, der UI-Eingaben auf Aerospikes Expression DSL abbildet – was die Notwendigkeit reduziert, Syntax auswendig zu lernen, und Nutzern ermöglicht, durch Tun zu lernen. Für riskante Operationen wie Scans entwarf ich klare Warnungen und Leitplanken statt stiller Fehler.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-filters-dsl.png" alt="Visueller Filter-Builder und Expression DSL — Abfragen ohne Syntax auswendig zu lernen" />

          <Section heading="Ergebnis">
            <p>Voyager Preview wurde im April 2026 öffentlich als Aerospikes erstes visuelles Developer-Tool veröffentlicht, verfügbar für macOS, Windows und Linux. Im Umfang deckte es Datenbrowsing, geführtes Onboarding und einen eingebetteten MCP-Server ab. In der Absicht war es das Fundament für etwas Größeres.</p>
            <p>Das Maß, das wir intern gesetzt hatten, war ein konkretes: einen Entwickler vom ersten Cluster zur ersten gefilterten Abfrage schnell zu bringen. Nicht Tage. Kein Support-Ticket. Schnell. Jede Designentscheidung im Projekt war darauf ausgerichtet, diesen Weg freizumachen. In der ersten Woche der öffentlichen Preview lag die mittlere Zeit vom Verbinden eines Clusters bis zum Durchsuchen des ersten Datensatzes bei etwa 11 Sekunden. Nicht fünf Minuten. Elf Sekunden.</p>
            <p>Es führte eine visuelle Möglichkeit ein, Aerospike-Daten zu verstehen, einen geführten Onboarding-Flow für Entwickler die von null starten, einen visuellen Filter-Builder zum Formulieren von Abfragen ohne Syntax auswendig zu lernen, und Leitplanken bei riskanten Operationen statt stiller Fehler. Und dann ist da noch der MCP-Server, den ich für das interessanteste Ergebnis von allem halte.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-mcp.png" alt="MCP Server — KI-Tools über MCP mit Aerospike verbinden" />

          <Section heading="Was danach kam">
            <p>Der geführte Pfad, den wir für Entwickler entworfen haben, wurde zur Struktur, die Aerospike für eine Maschine lesbar macht. Tools wie Claude Code, Cursor, Codex und Gemini CLI können jetzt direkt über Voyager mit Aerospike-Clustern kommunizieren, weil das mentale Modell, das wir entwickelt haben, um einem neuen Entwickler zu helfen, sich zu orientieren, dasselbe ist, das KI-Agenten nutzen, um echte Daten zu erkunden. Der MCP-Server kommt mit 21 Tools über Verbindungsverwaltung, Browsing, Record-CRUD und Info-Befehle. In der ersten Woche der öffentlichen Verfügbarkeit hatten Nutzer bereits fast alle davon erkundet. Die UX-Arbeit diente nicht nur dem Produkt. Sie formte, was danach kam.</p>
            <p>Innerhalb eines Tages nach dem öffentlichen Launch gab es bereits Hinweise, dass Voyager half, eine Prospect-Evaluation zu gewinnen. Das frühe Nutzerfeedback aus dem Unternehmen war einfach: Es machte ihre Arbeit leichter. Für ein Developer-Tool ist das das richtige Signal zur richtigen Zeit.</p>
            <p>Es hat die Erfahrung von &quot;Finde es selbst heraus&quot; zu einem geführten Weg zum Verständnis verschoben.</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Interaktionsbeschränkungen und technische Beschränkungen von Anfang an gemeinsam definieren. Komplexität rund um Abfragen, verschachtelte Daten und Randfälle lässt sich früh einfacher gestalten als nachträglich einzubauen.</p>
            <p>In diesem Tempo zu bauen bestätigte auch etwas, das ich bereits ahnte: Schnell voranzukommen ohne gemeinsame Grundlage erzeugt Inkonsistenz, die sich aufschaukelt. Diese Erkenntnis hat geprägt, wie ich die Design-System-Arbeit angegangen bin, die danach folgte.</p>
            <p>Im Nachhinein hätte ich härter dafür kämpfen sollen, die Prototyping-Phase im Plan zu behalten. Ich habe die Verlagerung zu "schnell bauen und später testen" mitgemacht, ohne die Risiken explizit zu machen, und die offenen Fragen, die wir zuerst hätten beantworten wollen, wurden stattdessen ausgeliefert. Die Spannungen rund um Geschwindigkeit versus Qualität waren real, und ein Teil davon geht auf diese frühe Entscheidung zurück. Das Aufbauen der Standards, des Toolings, des Prozesses für KI-generierten Code erwies sich als nützlich über dieses Projekt hinaus. Aber es wäre günstiger gewesen, den Prototypen zu fahren.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The problem">
            <p>Aerospike is powerful but hard to learn. New developers didn&apos;t know where to start. Understanding the data model required jumping between tools. Early exploration felt opaque and error-prone. The first moment of clarity took too long to reach.</p>
            <p>The core issue wasn&apos;t just missing tooling. It was a lack of clarity, confidence, and momentum in the first hour of using Aerospike. Existing tools exposed power. None of them explained what was happening.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-app.png" alt="Voyager — visual developer tool for Aerospike" />

          <Section heading="My role">
            <p>I was the product designer across the entire experience, from early discovery through to shipped UI. I defined the product direction, designed the interaction model, and translated complex database concepts into something developers could reason about. I worked closely with engineering, product management, and growth and developer experience teams, staying involved through build and QA as edge cases surfaced throughout.</p>
            <p>The original plan was to prototype, get user feedback, then commit to build. That shifted early. The belief was that AI let us skip the prototype stage and build the full app fast, testing with real users from there instead. I went along with it at the time, and in hindsight that was the wrong call. Important product and UX questions were still unresolved when we moved into build, and they got baked into code rather than answered first. The complication was that releasing fast to test and actually releasing a product turned out to be the same thing. Once a product is released officially, new features always take priority and anything that has drifted from standards stays that way.</p>
            <p>My response was to push for structure rather than argue each quality gap in review. Stakeholder expectations about what AI could produce were running well ahead of what it actually delivered. Rather than fighting that case by case, I built a standards system: design guidelines in structured markdown that tools could read and audit, with clearer process rules for how design feedback worked in practice.</p>
          </Section>

          <Section heading="What I learned early">
            <p>I started with a fast discovery phase, reviewing Gong calls, internal feedback, competitor tools, and the original engineering prototype. A few things showed up consistently. Developers needed a clear starting point, not just flexibility. Seeing real data quickly was critical to building confidence. Existing tools exposed power, but not understanding. Aerospike&apos;s core concepts remained abstract without visualisation.</p>
            <p>This pointed to the job-to-be-done: <em>get from zero to a working prototype fast enough to validate Aerospike for a real use case.</em></p>
          </Section>

          <Section heading="The core design decision">
            <p>The most important decision was to design Voyager as a guided path to confidence, not just a data browser.</p>
            <p>Working with the growth PM, we defined a golden path for new users: <strong className="text-ink">Connect → Add data → See data → Inspect → Filter → Feel confident experimenting.</strong> Instead of exposing everything upfront, the product helps users move step by step toward meaningful progress.</p>
            <p>Defining this path also aligned the team. Product, growth, and engineering had different ideas about what Voyager was for. The golden path answered the question: what does success actually look like? It became the backbone of both the UX and the telemetry strategy.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-golden-path-user-journey.png" alt="Golden path — user journey from connect to confidence" />

          <Section heading="Designing for complexity">
            <p>Aerospike is a NoSQL database. The data is unstructured, which makes it extremely fast but also hard to visualise. It doesn&apos;t behave like a typical JSON-based database. Records, bins, data types, expressions, and nested structures all introduce mental overhead.</p>
            <p>For data exploration, I designed expandable record views, clear separation of structure versus values, and progressive disclosure for nested data.</p>
          </Section>

          <Section heading="The filter builder">
            <p>For querying, I introduced a visual filter builder that maps UI inputs to Aerospike&apos;s Expression DSL — reducing the need to memorise syntax and letting users learn by doing. For risky operations like scans, I designed clear warnings and guardrails instead of silent failures.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-filters-dsl.png" alt="Visual filter builder and Expression DSL — shaping queries without memorising syntax" />

          <Section heading="Outcome">
            <p>Voyager Preview shipped publicly in April 2026 as Aerospike&apos;s first visual developer tool, available on macOS, Windows, and Linux. In scope, it covered data browsing, guided onboarding, and an embedded MCP server. In intent, it was the foundation for something bigger.</p>
            <p>The measure we&apos;d set internally was a concrete one: get a developer from first cluster to first filtered query fast. Not days. Not a support ticket. Fast. Every design decision through the project was oriented toward clearing that path. In the first week of public preview, the median time from connecting to a cluster to browsing the first record was about 11 seconds. Not five minutes. Eleven seconds.</p>
            <p>It introduced a visual way to understand Aerospike data, a guided onboarding flow for developers starting from zero, a visual filter builder for shaping queries without memorising syntax, and guardrails on risky operations instead of silent failures. And then there&apos;s the MCP server, which I think is the most interesting outcome of all of it.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/aerospike-voyager/aerospike-voyager-mcp.png" alt="MCP Server — connect AI tools to Aerospike clusters via MCP" />

          <Section heading="What came after">
            <p>The guided path we designed for developers became the structure that makes Aerospike legible to a machine. Tools like Claude Code, Cursor, Codex, and Gemini CLI can now talk directly to Aerospike clusters through Voyager, because the mental model we built to help a new developer orient is the same one AI agents use to explore real data. The MCP server ships with 21 tools across connection management, browsing, record CRUD, and info commands. In the first week of public availability, users had already explored nearly every one of them. The UX work didn&apos;t just serve the product. It shaped what came after it.</p>
            <p>Within a day of the public launch, there was already evidence of Voyager helping win a prospect evaluation. Early user feedback from inside the company was simple: it made their work easier. For a developer tool, that&apos;s the right signal at the right time.</p>
            <p>It reframed the experience from &quot;figure it out yourself&quot; to a guided path to confidence.</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>Define interaction constraints alongside technical constraints from the start. Complexity around querying, nested data, and edge cases is easier to design for early than to retrofit late.</p>
            <p>Building at this pace also reinforced something I already suspected: moving fast without a shared foundation creates inconsistency that compounds. That realisation shaped how I approached the design system work that followed.</p>
            <p>Looking back, I should have pushed harder to keep the prototype stage in the plan. I went along with the shift to "build fast and test later" without making the risks explicit, and the open questions we&apos;d planned to answer first got shipped instead. The friction around speed versus quality was real throughout, and some of it traced back to that early decision. Building the standards, the tooling, the process for AI-generated code ended up being useful beyond this project. But it would have been cheaper to run the prototype.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
