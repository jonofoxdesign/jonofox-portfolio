import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Voyager Visual Developer Tool — Aerospike Database",
  description: "Product design case study: end-to-end design of Aerospike's first visual developer tool for an enterprise NoSQL database. Developer experience design from connection to confidence.",
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
            <p>Aerospike ist leistungsstark, aber schwer zu erlernen. Neue Entwickler wussten nicht, wo sie anfangen sollten, das Datenmodell zu verstehen bedeutete, zwischen Tools zu springen, und die frühe Erkundung war größtenteils Raten. Der Moment, in dem die Dinge Sinn ergaben, dauerte viel zu lange.</p>
            <p>Andere Tools gaben dir Zugang zur Datenbank, erklärten sie aber nicht. Es gab keinen geführten Weg von null zu wirklichem Verständnis dessen, was man sah.</p>
          </Section>

          <ImagePlaceholder label="Voyager – Hauptdaten-Browser-UI" />

          <Section heading="Meine Rolle">
            <p>Ich war der Product Designer für das gesamte Erlebnis, von der frühen Discovery bis zur fertigen UI. Ich definierte die Produktrichtung, entwarf das Interaktionsmodell und übersetzte komplexe Datenbankkonzepte in etwas, das Entwickler verstehen konnten. Ich arbeitete eng mit Engineering, Produktmanagement sowie Growth- und Developer-Experience-Teams zusammen und blieb während Build und QA involviert, als Randfälle auftauchten.</p>
          </Section>

          <Section heading="Was ich früh gelernt habe">
            <p>Ich begann mit einer schnellen Discovery-Phase, überprüfte Gong-Calls, internes Feedback, Wettbewerbs-Tools und den ursprünglichen Engineering-Prototypen. Einige Dinge tauchten immer wieder auf: Entwickler brauchten einen klaren Startpunkt mehr als Flexibilität. Echte Daten schnell zu sehen war sehr wichtig für den Vertrauensaufbau. Und Aerospikes Kernkonzepte blieben abstrakt, bis man sie vor sich sehen konnte.</p>
            <p>Das deutete auf den Job-to-be-done hin: von null zu einem funktionierenden Prototypen kommen, schnell genug, um Aerospike für einen echten Anwendungsfall zu validieren.</p>
          </Section>

          <Section heading="Die zentrale Designentscheidung">
            <p>Die wichtigste Entscheidung war, Voyager als geführten Weg zum Verständnis zu gestalten, nicht nur als Datenbrowser.</p>
            <p>Zusammen mit dem Growth-PM definierten wir einen Golden Path für neue Nutzer: <strong className="text-ink">Verbinden → Daten hinzufügen → Daten sehen → Untersuchen → Filtern → Sicher experimentieren.</strong> Anstatt alles von Anfang an zu zeigen, hilft das Produkt Nutzern, Schritt für Schritt zu bedeutungsvollem Fortschritt zu gelangen.</p>
            <p>Die Definition dieses Pfades hat auch das Team ausgerichtet. Produkt, Growth und Engineering hatten unterschiedliche Vorstellungen davon, wofür Voyager ist. Der Golden Path beantwortete die Frage: Wie sieht Erfolg wirklich aus? Er wurde zum Rückgrat sowohl der UX als auch der Telemetriestrategie.</p>
          </Section>

          <ImagePlaceholder label="Golden-Path-Flow – Verbinden → Hinzufügen → Sehen → Untersuchen → Filtern" />

          <Section heading="Design für Komplexität">
            <p>Aerospike ist eine NoSQL-Datenbank. Die Daten sind unstrukturiert, was sie extrem schnell, aber auch schwer zu visualisieren macht. Sie verhält sich nicht wie eine typische JSON-basierte Datenbank. Records, Bins, Datentypen, Ausdrücke und verschachtelte Strukturen erzeugen mentalen Overhead.</p>
            <p>Für die Datenerkundung entwarf ich erweiterbare Record-Ansichten, klare Trennung von Struktur und Werten sowie progressive Offenlegung für verschachtelte Daten. Für Abfragen führte ich einen visuellen Filter-Builder ein, der UI-Eingaben auf Aerospikes Expression DSL abbildet – was die Notwendigkeit reduziert, Syntax auswendig zu lernen, und Nutzern ermöglicht, durch Tun zu lernen. Für riskante Operationen wie Scans entwarf ich klare Warnungen und Leitplanken statt stiller Fehler.</p>
          </Section>

          <ImagePlaceholder label="Visueller Filter-Builder und verschachtelte Record-Erkundung" />

          <Section heading="Ergebnis">
            <p>Voyager v0.1 wurde als Aerospikes erstes visuelles Tool zur Datenerkundung geliefert. Es führte eine visuelle Möglichkeit ein, Aerospike-Daten zu verstehen, einen geführten Onboarding-Flow für Entwickler, die von null starten, und eine Grundlage für KI-gestützte Workflows über MCP-Server-Integration.</p>
            <p>Dieser letzte Teil ist wichtig. Der geführte Pfad, den wir für Entwickler entworfen haben, wurde zur Schnittstelle, die KI-Tools zur Erkundung der Datenbank nutzen. Dasselbe mentale Modell, das einem neuen Entwickler hilft, sich zu orientieren, ist jetzt die Struktur, die Aerospike für eine Maschine lesbar macht. Die UX-Arbeit diente nicht nur dem Produkt. Sie formte, was danach kam.</p>
            <p>Und es hat Entwickler von &quot;Finde es selbst heraus&quot; zu &quot;Ich verstehe wirklich, was ich sehe&quot; gebracht.</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Rückblickend würde ich härter daran arbeiten, Interaktionsbeschränkungen und technische Beschränkungen gleichzeitig zu definieren. Abfragekomplexität, verschachtelte Daten, Randfälle – für diese war es früh einfacher zu gestalten und viel schwieriger nachzurüsten, wenn die Dinge bereits gebaut waren.</p>
            <p>In diesem Tempo zu bauen bestätigte auch etwas, das ich bereits ahnte: Schnell voranzukommen ohne gemeinsame Grundlage erzeugt Inkonsistenz, die sich aufschaukelt. Diese Erkenntnis hat geprägt, wie ich die Design-System-Arbeit angegangen bin, die danach folgte.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The problem">
            <p>Aerospike is powerful but hard to learn. New developers didn&apos;t know where to start, understanding the data model meant jumping between tools, and early exploration was mostly guesswork. The moment where things started to make sense took way too long.</p>
            <p>Other tools gave you access to the database but didn&apos;t explain it. There was no guided path from zero to actually understanding what you were looking at.</p>
          </Section>

          <ImagePlaceholder label="Voyager — main data browser UI" />

          <Section heading="My role">
            <p>I was the product designer across the entire experience, from early discovery through to shipped UI. I defined the product direction, designed the interaction model, and translated complex database concepts into something developers could reason about. I worked closely with engineering, product management, and growth and developer experience teams, staying involved through build and QA as edge cases surfaced throughout.</p>
          </Section>

          <Section heading="What I learned early">
            <p>I started with a fast discovery phase, reviewing Gong calls, internal feedback, competitor tools, and the original engineering prototype. A few things kept coming up: developers needed a clear starting point more than they needed flexibility. Seeing real data quickly mattered a lot for building confidence. And Aerospike&apos;s core concepts stayed abstract until you could see them in front of you.</p>
            <p>This pointed to the job-to-be-done: get from zero to a working prototype fast enough to validate Aerospike for a real use case.</p>
          </Section>

          <Section heading="The core design decision">
            <p>The most important decision was to design Voyager as a guided path to confidence, not just a data browser.</p>
            <p>Working with the growth PM, we defined a golden path for new users: <strong className="text-ink">Connect → Add data → See data → Inspect → Filter → Feel confident experimenting.</strong> Instead of exposing everything upfront, the product helps users move step by step toward meaningful progress.</p>
            <p>Defining this path also aligned the team. Product, growth, and engineering had different ideas about what Voyager was for. The golden path answered the question: what does success actually look like? It became the backbone of both the UX and the telemetry strategy.</p>
          </Section>

          <ImagePlaceholder label="Golden path flow — Connect → Add → See → Inspect → Filter" />

          <Section heading="Designing for complexity">
            <p>Aerospike is a NoSQL database. The data is unstructured, which makes it extremely fast but also hard to visualise. It doesn&apos;t behave like a typical JSON-based database. Records, bins, data types, expressions, and nested structures all introduce mental overhead.</p>
            <p>For data exploration, I designed expandable record views, clear separation of structure versus values, and progressive disclosure for nested data. For querying, I introduced a visual filter builder that maps UI inputs to Aerospike&apos;s Expression DSL — reducing the need to memorise syntax and letting users learn by doing. For risky operations like scans, I designed clear warnings and guardrails instead of silent failures.</p>
          </Section>

          <ImagePlaceholder label="Visual filter builder and nested record exploration" />

          <Section heading="Outcome">
            <p>Voyager v0.1 shipped as Aerospike&apos;s first visual tool for data exploration. It introduced a visual way to understand Aerospike data, a guided onboarding flow for developers starting from zero, and a foundation for AI-assisted workflows via MCP server integration.</p>
            <p>That last part matters. The guided path we designed for developers became the interface that AI tools use to explore the database. The same mental model that helps a new developer orient is now the structure that makes Aerospike legible to a machine. The UX work didn&apos;t just serve the product. It shaped what came after it.</p>
            <p>And it got developers from &quot;figure it out yourself&quot; to &quot;I actually understand what I&apos;m looking at.&quot;</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>Looking back, I&apos;d push harder to define interaction constraints and technical constraints at the same time. Querying complexity, nested data, edge cases — those were easier to design for early and a lot harder to retrofit once things were already built.</p>
            <p>Building at this pace also reinforced something I already suspected: moving fast without a shared foundation creates inconsistency that compounds. That realisation shaped how I approached the design system work that followed.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
