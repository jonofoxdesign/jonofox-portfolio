import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Design Systems at Scale",
  description: "Product design case study: building scalable design systems at Aerospike, Sygnum Bank, and Workwise — Figma libraries, token architecture, and an AI instruction layer for Claude, Cursor, and Codex.",
};

export default async function DesignSystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Sygnum · Workwise · Aerospike"
      title={de
        ? <>Ein Design System, das Designer, Entwickler<br />und KI-Tools gleichermaßen befolgen</>
        : <>A design system designers, engineers,<br />and AI tools all follow</>
      }
      intro={de
        ? "Ich habe Design Systems in mehreren Organisationen aufgebaut und weiterentwickelt. Drei stechen hervor: eine regulierte Schweizer Digital-Asset-Bank, eine Recruiting-Plattform, die schnell genug gewachsen war, um sich selbst in Unordnung zu bringen, und ein Enterprise-Datenbankunterhemen. Unterschiedliche Teams, unterschiedliche Einschränkungen, dasselbe Grundproblem: mangelndes gemeinsames Verständnis. Bei Aerospike habe ich das System weiter erweitert, um eine Dokumentationsebene einzuschließen, die KI-Tools wie Claude, Cursor und Codex nutzen können, um standardmäßig systemkonsistenten Output zu erzeugen."
        : "I've built and evolved design systems across multiple organisations. Three stand out: a regulated Swiss digital asset bank, a recruiting platform that had grown fast enough to make a mess of itself, and an enterprise database company. Different teams, different constraints, same underlying problem: a lack of shared understanding. At Aerospike, I extended the system further to include a documentation layer that AI tools like Claude, Cursor, and Codex can use to generate output that's system-consistent by default."
      }
      meta={de
        ? {
            company: "Sygnum, Workwise, Aerospike",
            product: "Design Systems + KI-Instruktionsebene",
            year: "2019–2026",
            role: "Design Lead / Design-System-Verantwortlicher",
            scope: "Grundlage bis Adoption",
            collaboration: "Frontend-Engineers, Produkt, Engineering-Leads",
          }
        : {
            company: "Sygnum, Workwise, Aerospike",
            product: "Design systems + AI instruction layer",
            year: "2019–2026",
            role: "Design lead / Design system owner",
            scope: "Foundation through adoption",
            collaboration: "Front-end engineers, product, engineering leads",
          }
      }
    >
      {de ? (
        <>
          <Section heading="Das gemeinsame Problem">
            <p>Bei Sygnum gab es neun verschiedene Design-Stile in separaten CSS-Repositories. Bei Workwise hatten frühe Entscheidungen aufgehört zu skalieren. Bei Aerospike standen mehrere Teams kurz davor, ohne eine gemeinsame Grundlage zu bauen.</p>
            <p>Das Muster war jedes Mal dasselbe: inkonsistente UI über Teams hinweg, mehrere Versionen derselben Komponente, lokale Entscheidungen ohne gemeinsame Standards, neue Personen, die nicht wussten, wie gut aussieht. Es fehlten nicht die Komponenten. Es fehlte die Einigung darüber.</p>
          </Section>

          <ImagePlaceholder label="Vorher/Nachher – UI-Konsistenz in einem der drei Unternehmen" />

          <Section heading="Meine Rolle">
            <p>In allen drei Projekten verantwortete ich das Design System von der Definition bis zur Adoption. Bei Sygnum und Aerospike war ich der erste eingestellte Designer und definierte Standards von Grund auf, in direkter Zusammenarbeit mit Frontend-Engineers. Bei Workwise stabilisierte und entwickelte ich ein System weiter, das organisch gewachsen war.</p>
            <p>In allen Fällen definierte ich die Systemarchitektur mit Engineering-Input, verantwortete Designentscheidungen und Contribution-Regeln und arbeitete täglich eng mit Frontend-Engineers zusammen.</p>
          </Section>

          <Section heading="Die eigentliche Herausforderung">
            <p>Komponenten zu bauen war der einfache Teil. Der schwierigere Teil war die Angleichung von Designabsichten in Figma mit der Produktionsrealität im Code und herauszufinden, wie Entscheidungen tatsächlich über Menschen und Prozesse hinweg getroffen werden.</p>
            <p>Bei Aerospike gab es eine vierte Herausforderung, mit der keiner von uns zuvor zu tun hatte: KI-Tools generierten UI und Prototypen neben dem Team. Ein für Menschen konzipiertes System war für Maschinen nicht lesbar. Das musste sich auch ändern.</p>
            <p>Bei Sygnum und Aerospike basierte ich das System auf Material UI: ein bewusster Kompromiss für Barrierefreiheits-Standards, bewährte Interaktionsmuster und schnellere Ausrichtung mit Engineering. Wir passten die visuelle Ebene an das Produkt an, anstatt alles von Grund auf neu aufzubauen.</p>
          </Section>

          <ImagePlaceholder label="Token-Architektur – Farbe, Typografie, Abstände" />

          <Section heading="Was ich systematisiert habe">
            <p>Ich konzentrierte mich auf die Teile, die die meiste Reibung zwischen Teams erzeugten: Tokens als Grundlage (Farbe, Typografie, Abstände, Layout – einmal definiert, zwischen Design und Code gemappt), Komponenten mit klaren Zuständen und Verhaltensweisen, die von Anfang an mit Barrierefreiheit entwickelt wurden, Contribution-Regeln, die klar machten, wie das System sich weiterentwickelte, und Dokumentation, die Entscheidungen erklärte – nicht nur was zu verwenden ist, sondern warum es existiert und wann.</p>
            <p>Bei Aerospike erweiterte ich die Dokumentation zu einer strukturierten Markdown-Ebene, die Tokens und ihren Zweck, Komponentennutzung und -einschränkungen, Designprinzipien mit Begründungen und Contribution-Logik definiert. Dies wurde zu einer gemeinsamen Instruktionsebene, die Claude, Cursor und Codex nutzen können, um systemkonforme Ausgaben zu erzeugen.</p>
          </Section>

          <ImagePlaceholder label="Figma → Code → Markdown → KI – der vernetzte Loop" />

          <Section heading="Ein vernetztes Ökosystem">
            <p>Das System entwickelte sich von einem Satz von Assets zu einem Loop: Figma erfasst Designabsichten → Code enthält Produktionskomponenten → die Markdown-Ebene definiert Systemlogik und Anleitungen → KI-Tools generieren UI nach diesen Regeln.</p>
            <p>Entscheidungen werden einmal kodiert und über jede Ebene hinweg wiederverwendet. Das beschleunigt die Dinge, bedeutet aber auch, dass Inkonsistenz schnell skaliert, wenn Regeln nicht klar sind. Das ist es, was die Contribution-Regeln und der Review-Prozess verwalten.</p>
          </Section>

          <Section heading="Ergebnisse">
            <p>In allen drei Systemen wurden Komponenten konsistent wiederverwendet, Design- und Engineering-Nacharbeit ging zurück, und die Systeme blieben auch nach meiner Beteiligung bestehen. Stakeholder gewannen Vertrauen in UI-Entscheidungen und die Lieferung wurde vorhersehbarer.</p>
            <p>Keines dieser Systeme war perfekt. Sie waren gut genug, dass Teams sie weiter nutzten und darauf aufbauten, ohne neu anfangen zu müssen. Das war mein Ziel.</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Design Systems brauchen Pflege, Gespräch und Weiterentwicklung. Die Arbeit hört beim Launch nicht auf. Sie wird nur zu einer anderen Art von Arbeit.</p>
            <p>Was mich jetzt interessiert, ist, dass sich die Oberfläche verändert. Systeme sind nicht mehr nur Komponentenbibliotheken. Sie werden zur gemeinsamen Sprache zwischen Design, Engineering und den KI-Tools, die neben dem Team bauen. Das über alle drei hinweg konsistent zu halten ist eine schwierigere und interessantere Version desselben Problems. Das ist die Arbeit, die mich am meisten interessiert.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The shared problem">
            <p>At Sygnum there were nine different design styles across separate CSS repositories. At Workwise, early decisions had stopped scaling. At Aerospike, multiple teams were about to start building without anything shared to build from.</p>
            <p>The pattern was the same every time: inconsistent UI across teams, multiple versions of the same component, local decisions without shared standards, new people not knowing what good looked like. It wasn&apos;t that there weren&apos;t components. It was that nobody agreed on them.</p>
          </Section>

          <ImagePlaceholder label="Before/after — UI consistency at one of the three companies" />

          <Section heading="My role">
            <p>Across all three projects, I owned the design system from definition through adoption. At Sygnum and Aerospike, I was the first designer hired and defined standards from scratch, working directly with front-end engineers. At Workwise, I stabilised and evolved a system that had grown organically.</p>
            <p>In all cases, I defined system architecture with engineering input, owned design decisions and contribution rules, and partnered closely with front-end engineers day-to-day.</p>
          </Section>

          <Section heading="The real challenge">
            <p>Building components was the easy bit. The harder part was aligning design intent in Figma with production reality in code, and figuring out how decisions actually get made across people and process.</p>
            <p>At Aerospike there was a fourth challenge none of us had dealt with before: AI tools were generating UI and prototypes alongside the team. A system designed for humans wasn&apos;t legible to machines. That had to change too.</p>
            <p>At Sygnum and Aerospike, I based the system on Material UI: a deliberate tradeoff for accessibility defaults, proven interaction patterns, and faster alignment with engineering. We adapted the visual layer to match the product instead of rebuilding everything from scratch.</p>
          </Section>

          <ImagePlaceholder label="Token architecture — colour, typography, spacing" />

          <Section heading="What I systematised">
            <p>I focused on the parts that created the most friction between teams: tokens as the foundation (colour, typography, spacing, layout — defined once, mapped between design and code), components with clear states and behaviours built with accessibility from the start, contribution rules that made it clear how the system evolved, and documentation that explained decisions — not just what to use, but why it existed and when.</p>
            <p>At Aerospike, I extended the documentation into a structured markdown layer that defines tokens and their purpose, component usage and constraints, design principles with reasoning, and contribution logic. This became a shared instruction layer that Claude, Cursor, and Codex can use to generate system-aligned output.</p>
          </Section>

          <ImagePlaceholder label="Figma → Code → Markdown → AI — the connected loop" />

          <Section heading="A connected ecosystem">
            <p>The system evolved from a set of assets into a loop: Figma captures design intent → code holds production components → the markdown layer defines system logic and guidance → AI tools generate UI using those rules.</p>
            <p>Decisions get encoded once and reused across every layer. That speeds things up, but it also means inconsistency scales fast when rules aren&apos;t clear. That&apos;s what the contribution rules and review process manage.</p>
          </Section>

          <Section heading="Outcomes">
            <p>Across all three systems, components were reused consistently, design and engineering rework went down, and the systems stayed in place beyond my involvement. Stakeholders gained confidence in UI decisions and delivery became more predictable.</p>
            <p>None of these were perfect systems. They were solid enough that teams kept using them and building on top of them without needing to start over. That&apos;s what I was aiming for.</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>Design systems need maintenance, conversation, and evolution. The work doesn&apos;t stop at launch. It just becomes a different kind of work.</p>
            <p>What I find interesting now is that the surface area is changing. Systems aren&apos;t just component libraries anymore. They&apos;re becoming the shared language between design, engineering, and the AI tools building alongside the team. Keeping that consistent across all three is a harder and more interesting version of the same problem. That&apos;s the work I&apos;m most interested in.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
