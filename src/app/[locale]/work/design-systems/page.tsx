import type { Metadata } from "next";
import CaseStudyLayout, { Section, CaseStudyImage } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Design Systems at Scale",
  description: "Product design case study: design systems at Sygnum Bank, Workwise and Aerospike. Token architecture, adoption, and a system where the code is the source of truth for designers, engineers and AI tools like Claude, Cursor and Codex.",
  openGraph: {
    title: "Design Systems at Scale | Jono Fox",
    description: "Design systems across three companies. At Aerospike, the source of truth moved into the code, so designers, engineers and AI tools all build from the same place.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function DesignSystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Sygnum · Workwise · Aerospike"
      title={de
        ? "Design Systems, die Designer, Entwickler und KI-Tools gleichermaßen befolgen"
        : "Design systems that designers, engineers, and AI tools all follow"
      }
      intro={de
        ? "Ich habe Design Systems in drei Unternehmen aufgebaut: bei einer regulierten Schweizer Digital-Asset-Bank, bei einer Recruiting-Plattform, die schnell genug gewachsen war, um sich selbst in Unordnung zu bringen, und bei einem Enterprise-Datenbankunternehmen. Unterschiedliche Teams, unterschiedliche Einschränkungen, darunter dasselbe Problem: Niemand war sich einig, wie gut aussieht. Bei Aerospike bekam das Problem ein neues Publikum. KI-Tools bauten UI neben dem Team, also habe ich die Quelle der Wahrheit aus Figma in den Code verlegt. Jetzt lesen Menschen und Tools aus derselben Stelle."
        : "I've built design systems at three companies: a regulated Swiss digital asset bank, a recruiting platform that had grown fast enough to make a mess of itself, and an enterprise database company. Different teams, different constraints, and the same problem underneath: nobody agreed on what good looked like. At Aerospike the problem got a new audience. AI tools were building UI alongside the team, so I moved the system's source of truth out of Figma and into the code. Now people and tools read from the same place."
      }
      meta={de
        ? {
            company: "Sygnum, Workwise, Aerospike",
            product: "Design Systems + KI-Tooling",
            year: "2019–2026",
            role: "Design Lead / Design-System-Verantwortlicher",
            scope: "Grundlage bis Adoption",
            collaboration: "Frontend-Engineers, Produkt, Engineering-Leads",
          }
        : {
            company: "Sygnum, Workwise, Aerospike",
            product: "Design systems + AI tooling",
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
            <p>Das Muster war jedes Mal dasselbe: inkonsistente UI über Teams hinweg, mehrere Versionen derselben Komponente, lokale Entscheidungen ohne gemeinsame Standards, neue Leute, die nicht wussten, wie gut aussieht. Es fehlten nicht die Komponenten. Es fehlte die Einigung darüber.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-nine-repos-problem.png" alt="Das Nine-Repos-Problem bei Sygnum: neun Teams, die unabhängig voneinander bauen" />

          <Section heading="Meine Rolle">
            <p>In allen drei Projekten verantwortete ich das Design System von der Definition bis zur Adoption. Bei Sygnum und Aerospike war ich der erste eingestellte Designer und definierte Standards von Grund auf, in direkter Zusammenarbeit mit Frontend-Engineers. Bei Workwise stabilisierte und entwickelte ich ein System weiter, das organisch gewachsen war.</p>
            <p>Bei Sygnum war die größte Herausforderung, Engineering-Teams davon zu überzeugen, Zeit in die Migration weg von ihren eigenen hardgecodeten Komponenten ins Monorepo zu investieren. Jedes Team hatte seine eigenen Lösungen gebaut und hielt sie für funktionierend. Das hieß, den Fall immer wieder zu machen, nicht nur einmal.</p>
            <p>Bei Workwise war der Widerstand passiver. Niemand war gegen das Design System. Man hielt es nur nicht für wichtig genug, um mir Frontend-Zeit dafür zu geben. Dieses Muster kam in allen drei Unternehmen in anderer Form wieder: Die technische Arbeit an einem Design System ist der lösbare Teil. Menschen dazu zu bringen, es als echte Arbeit zu sehen statt als Nebenprojekt des Design-Teams, ist die eigentliche Aufgabe.</p>
            <p>Bei Aerospike hat sich meine Rolle zuletzt noch einmal verschoben. Ich schreibe die Regeln nicht mehr nur auf, ich bringe Änderungen selbst per Pull Request in die Theme-Bibliothek.</p>
          </Section>

          <Section heading="Die eigentliche Herausforderung">
            <p>Bei Sygnum und Workwise war der schwierige Teil, Figma und Code synchron zu halten. Designabsicht lebte an einem Ort, die Produktionsrealität an einem anderen, und irgendjemand musste ständig zwischen beiden vermitteln. Meistens ich.</p>
            <p>Bei Aerospike kam etwas Neues dazu. KI-Tools generierten UI und Prototypen neben dem Team, und sie lesen, was sie finden. Unsere Regeln lagen in Figma, in Confluence und in Markdown-Skill-Dateien. Drei Versionen der Wahrheit, und die Tools nahmen einfach die, die am nächsten lag.</p>
            <p>Bei Sygnum und Aerospike basierte ich das System auf Material UI: ein bewusster Kompromiss für gute Barrierefreiheits-Standards, bewährte Interaktionsmuster und schnellere Abstimmung mit Engineering. Wir passten die visuelle Ebene an das Produkt an, statt alles neu zu bauen.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-tokens.png" alt="Design-System-Tokens bei Aerospike: Farb-, Typografie- und Abstands-Tokens in der Praxis" />

          <Section heading="Was ich systematisiert habe">
            <p>Ich konzentrierte mich auf die Teile, die zwischen Teams am meisten Reibung erzeugten. Tokens als Grundlage: Farbe, Typografie, Abstände und Layout, einmal definiert und zwischen Design und Code gemappt. Komponenten mit klaren Zuständen und Verhalten, von Anfang an barrierefrei gebaut. Contribution-Regeln, die klar machten, wie sich das System weiterentwickelt. Und Dokumentation, die Entscheidungen erklärt, also nicht nur was man verwendet, sondern warum es existiert und wann.</p>
          </Section>


          <Section heading="Eine Quelle, jede Ebene">
            <p>Also habe ich die Wahrheit an einen Ort gelegt: in den Code. Jede andere Ebene liest von dort.</p>
            <p><strong className="text-ink">Code.</strong> Tokens, Komponenten und die Nutzungsregeln liegen im Repo. Was nicht gemergt ist, ist nicht Teil des Systems. Das ist die ganze Regel.</p>
            <p><strong className="text-ink">Skills.</strong> Aus vielen einzelnen Skill-Dateien wurden zwei. Eine zum Bauen: Komponenten, Layouts, Seiten, Tokens, Icons und Motion. Eine zum Prüfen. Claude, Cursor und Codex lesen dieselben Dateien wie das Team.</p>
            <p><strong className="text-ink">Storybook.</strong> Zieht seine Referenzen aus denselben Dateien und ersetzt die verstreuten Docs in Figma, Confluence und den Skills. Zu jeder Komponente steht, wann man sie nimmt, zum Beispiel Select oder Autocomplete. Das hilft Menschen und LLMs gleichermaßen, die richtige Variante zu wählen. Ein Link für alle, die UI bauen.</p>
            <p><strong className="text-ink">Validierung.</strong> Die Prüfung listet jede Stelle auf, an der eine Umsetzung von den Standards abweicht. Sie entscheidet nicht, was davon ein Blocker ist. Das macht ein Mensch. Diese Entscheidung habe ich dem Modell bewusst weggenommen, weil &quot;Claude sagt, das passt&quot; zu einer Ausrede wurde, Fixes zu überspringen. Die Liste geht mit jedem Pull Request mit, also gibt es eine Spur, wer was akzeptiert hat.</p>
            <p><strong className="text-ink">Figma.</strong> Spiegelt jetzt den Code, nicht umgekehrt. Exploration passiert weiterhin dort, aber nichts ist offiziell, bis es gemergt ist. Figma nutzen wir nur noch für neue Systemkomponenten und wiederverwendbare zusammengesetzte Komponenten. Feature-Screens, die aus bestehenden Komponenten gebaut werden, brauchen keine Figma-Datei mehr.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-one-source.png" alt="Der Code im Zentrum: Skills, Storybook, Validierung und Figma lesen alle aus derselben Quelle" />

          <Section heading="Was sich für Designer geändert hat">
            <p>Designer bei Aerospike sollen keine Frontend-Engineers werden. Aber wir lesen Storybook, tauschen Props und Varianten und bringen kleine Änderungen selbst per Pull Request ein, etwa eine neue Chip-Variante. Ein Design-Ticket ist fertig, wenn es einen Figma-Link oder eine Claude-Spec gibt. Das Frontend-Ticket folgt danach.</p>
            <p>Auch die KI-Seite ist einfacher geworden. Als meine Kollegin Krissi ihr Claude auf die aktuelle Theme-Bibliothek statt auf die alten Skill-Dateien gerichtet hat, wurde der Output sofort konsistenter. Es gab nur noch eine Stelle, an der es nachschauen konnte.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-change-flow.png" alt="Wie eine Änderung ins System kommt: Exploration, Pull Request, Validierung, menschliche Entscheidung, Merge" />

          <Section heading="Ergebnisse">
            <p>In allen drei Systemen wurden Komponenten konsistent wiederverwendet, Nacharbeit in Design und Engineering ging zurück, und die Systeme blieben auch nach meiner Beteiligung bestehen. Keines davon war perfekt. Sie waren gut genug, dass Teams weiter darauf aufgebaut haben, ohne neu anzufangen.</p>
            <p>Bei Aerospike läuft die Validierung bei Pull Requests, und der Frontend-Lead ist dafür verantwortlich, nicht ich. Das Storybook ist mit Design und Engineering geteilt, und eine interne App-Plattform baut auf denselben Skills auf, also über die Produkte hinaus, die ich selbst gestalte.</p>
            <p>Eine saubere Vorher-nachher-Zahl habe ich noch nicht. Seit dem Umbau wird neu gemessen, wie gut die Tools dem System folgen, und ich warte lieber darauf, als zu raten.</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Der schwierigste Teil jedes Systems, das ich gebaut habe, waren nicht die Komponenten oder die Architektur. Es war, Menschen davon zu überzeugen, dass die Arbeit echt ist. Engineers haben Features zu liefern. Hardgecodete Komponenten zu migrieren fühlt sich nicht dringend an, bis es das ist. Die Systeme, auf die ich am stolzesten bin, sind die, bei denen Engineers, die den Wert anfangs nicht sahen, irgendwann selbst ihre Kollegen überzeugt haben.</p>
            <p>KI-Tools lesen ein Design System wie ein neuer Engineer: wörtlich, und aus dem, was am nächsten liegt. Also muss das, was am nächsten liegt, das Echte sein. Das ist für mich der ganze Grund, warum die Quelle der Wahrheit in den Code gehört.</p>
            <p>Ganz leicht fiel mir das nicht. Ich habe Jahre in Figma verbracht, und es war seltsam, laut zu sagen, dass es nicht mehr die Quelle ist. Für dieses Team ist es richtig. Was mich noch beschäftigt, ist Review. Eine Prüfung findet einen hardgecodeten Hex-Wert. Sie findet keinen Flow, der falsch ist. Manche behandeln ein Claude-Gespräch inzwischen wie ein Design-Review, und das kann kein System für sie lösen.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The shared problem">
            <p>At Sygnum there were nine different design styles across separate CSS repositories. At Workwise, early decisions had stopped scaling. At Aerospike, multiple teams were about to start building without anything shared to build from.</p>
            <p>The pattern was the same every time: inconsistent UI across teams, multiple versions of the same component, local decisions without shared standards, new people not knowing what good looked like. It wasn&apos;t that there weren&apos;t components. It was that nobody agreed on them.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-nine-repos-problem.png" alt="The nine repos problem at Sygnum: nine teams building independently with no shared foundation" />

          <Section heading="My role">
            <p>Across all three projects, I owned the design system from definition through adoption. At Sygnum and Aerospike, I was the first designer hired and defined standards from scratch, working directly with front-end engineers. At Workwise, I stabilised and evolved a system that had grown organically.</p>
            <p>At Sygnum, the biggest challenge was convincing engineering teams to commit time to migrating away from their own hardcoded components into the monorepo. Every team had built their own things and regarded those things as working. Getting them to agree that consolidating was worth the disruption meant making the case again and again, not just once.</p>
            <p>At Workwise the resistance was more passive. Nobody was opposed to the design system. They just didn&apos;t think it was important enough to give me frontend time for it. That pattern came back at all three companies in different forms: the technical work in a design system is the tractable part. Getting people to treat it as real work, rather than a design team side project, is the actual job.</p>
            <p>At Aerospike my role has shifted again recently. I don&apos;t just write the rules down anymore. I raise pull requests to the theme library myself.</p>
          </Section>

          <Section heading="The real challenge">
            <p>At Sygnum and Workwise, the hard part was keeping Figma and code in sync. Design intent lived in one place, production reality in another, and someone had to keep translating between them. Usually me.</p>
            <p>At Aerospike something new showed up. AI tools were generating UI and prototypes alongside the team, and they read whatever they find. Our rules lived in Figma, in Confluence and in markdown skill files. Three versions of the truth, and the tools just picked whichever one was closest.</p>
            <p>At Sygnum and Aerospike, I based the system on Material UI: a deliberate tradeoff for accessibility defaults, proven interaction patterns, and faster alignment with engineering. We adapted the visual layer to match the product instead of rebuilding everything from scratch.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-tokens.png" alt="Design system tokens at Aerospike: colour, typography and spacing tokens in practice" />

          <Section heading="What I systematised">
            <p>I focused on the parts that created the most friction between teams. Tokens as the foundation: colour, typography, spacing and layout, defined once and mapped between design and code. Components with clear states and behaviours, built with accessibility from the start. Contribution rules that made it clear how the system evolved. And documentation that explained decisions, so not just what to use, but why it existed and when.</p>
          </Section>


          <Section heading="One source, every layer">
            <p>So I put the truth in one place: the code. Every other layer reads from there.</p>
            <p><strong className="text-ink">Code.</strong> Tokens, components and the usage rules live in the repo. If it isn&apos;t merged, it isn&apos;t the system. That&apos;s the whole rule.</p>
            <p><strong className="text-ink">Skills.</strong> We went from a pile of separate skill files down to two. One for building: components, layouts, pages, tokens, icons and motion. One for checking. Claude, Cursor and Codex read the same files the team does.</p>
            <p><strong className="text-ink">Storybook.</strong> Pulls its reference material from those same files, and replaces the docs that used to be spread across Figma, Confluence and the skills. Each component says when to use it, like select versus autocomplete, which helps people and LLMs pick the right variant. One link for anyone building UI.</p>
            <p><strong className="text-ink">Validation.</strong> The check lists every place an implementation falls short of the standards. It doesn&apos;t decide which of those are blockers. A person does. I took that call away from the model on purpose, because &quot;Claude said it&apos;s fine&quot; was turning into a reason to skip fixes. The list goes up with every pull request, so there&apos;s a record of who accepted what.</p>
            <p><strong className="text-ink">Figma.</strong> Mirrors the code now, not the other way round. Exploration still happens there, but nothing is official until it&apos;s merged. We only use Figma for new system components and reusable composed ones. Feature screens assembled from existing components don&apos;t need a Figma file anymore.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-one-source.png" alt="Code at the centre: skills, Storybook, validation and Figma all read from the same source" />

          <Section heading="What changed for designers">
            <p>Designers at Aerospike aren&apos;t expected to become frontend engineers. But we read Storybook, swap props and variants, and raise small pull requests ourselves, like adding a new chip variant. A design ticket is done when there&apos;s a Figma link or a Claude spec. The frontend ticket follows from that.</p>
            <p>The AI side got simpler too. When Krissi, the other designer on the team, pointed her Claude at the current theme library instead of the old skill files, the output got noticeably more consistent straight away. There was only one place left for it to look.</p>
          </Section>

          <CaseStudyImage wide src="/case-studies/design-systems/design-systems-change-flow.png" alt="How a change gets into the system: explore, pull request, validation, a person decides, merge" />

          <Section heading="Outcomes">
            <p>Across all three systems, components were reused consistently, design and engineering rework went down, and the systems stayed in place beyond my involvement. None of them were perfect. They were solid enough that teams kept building on them without needing to start over.</p>
            <p>At Aerospike the validation check runs on pull requests, and the frontend lead owns it, not me. The Storybook is shared across design and engineering, and an internal app platform builds on the same skills, which takes the system beyond the products I design myself.</p>
            <p>I don&apos;t have a clean before-and-after number yet. How well the tools follow the system is being re-benchmarked since the restructure, and I&apos;d rather wait for that than guess.</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>The hardest part of every system I&apos;ve built wasn&apos;t the components or the architecture. It was convincing people the work was real. Engineers have features to ship. Migrating hardcoded components doesn&apos;t feel urgent until it does. The systems I&apos;m most proud of are the ones where engineers who didn&apos;t see the value at first ended up making the case to their own teammates.</p>
            <p>AI tools read a design system the way a new engineer does: literally, and from whatever&apos;s closest. So whatever&apos;s closest has to be the real thing. For me that&apos;s the whole reason the source of truth belongs in the code.</p>
            <p>It wasn&apos;t a completely comfortable call. I&apos;ve spent years living in Figma, and saying out loud that it isn&apos;t the source anymore felt strange. It&apos;s right for this team. What I&apos;m still uneasy about is review. A check can find a hard-coded hex value. It can&apos;t find a flow that&apos;s wrong. Some people now treat a Claude conversation as their design review, and no system can fix that for them.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
