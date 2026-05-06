import type { Metadata } from "next";
import CaseStudyLayout, { Section, CaseStudyImage, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Membership Sign-up Redesign — Goodlife Health Clubs",
  description: "Product design case study: membership sign-up redesign for Goodlife Health Clubs, one of Australia's largest gym chains. Conversion-focused UX that prioritised trust and transparency over dark patterns.",
};

export default async function GoodlifePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Goodlife Health Clubs"
      title={de
        ? <>Bindungsangst durch<br />Anmeldevertrauen ersetzen</>
        : <>Replacing lock-in anxiety<br />with sign-up confidence</>
      }
      intro={de
        ? "Goodlife Health Clubs ist eine der größten Fitnessstudio-Ketten Australiens mit Hunderttausenden von Mitgliedern an Dutzenden von Standorten. Ich habe ihren Mitgliedschafts-Registrierungsflow als Teil eines neuen Website-Builds neu gestaltet, mit dem Ziel, Verwirrung zu reduzieren, Vertrauen zu verbessern und einen Flow zu modernisieren, der nicht mehr widerspiegelte, wie Menschen eine Mitgliedschaft eingehen wollten."
        : "Goodlife Health Clubs is one of Australia's largest gym chains, with hundreds of thousands of members across dozens of locations. I redesigned their membership sign-up experience as part of a new website build, with the goal of reducing confusion, improving trust, and modernising a flow that no longer reflected how people wanted to commit to a membership."
      }
      meta={de
        ? {
            company: "Goodlife Health Clubs",
            product: "Mitgliedschafts-Registrierungsflow",
            year: "2020",
            role: "Alleiniger Product Designer",
            scope: "End-to-End-Mitgliedschafts-Registrierungsflow",
            collaboration: "Engineering-Team und Kunden-Stakeholder",
          }
        : {
            company: "Goodlife Health Clubs",
            product: "Membership sign-up flow",
            year: "2020",
            role: "Sole product designer",
            scope: "End-to-end membership sign-up flow",
            collaboration: "Engineering team and client stakeholders",
          }
      }
    >
      {de ? (
        <>
          <Section heading="Die Herausforderung">
            <p>Fitnessstudio-Mitgliedschaften sind notorisch schwer zu verstehen. Bei Goodlife zeigte sich das deutlich im Kundenfeedback. Menschen waren nicht frustriert von den Studios oder dem Personal. Sie waren frustriert von Verträgen, versteckten Gebühren und unklaren Kündigungsbedingungen. Das bestehende Anmeldeerlebnis verstärkte dieses Misstrauen.</p>
            <p>Aus geschäftlicher Sicht war der Flow auch veraltet und brüchig. Er stützte sich auf Muster, die Menschen durch den Checkout drängten, ohne ihnen ein Gefühl von Sicherheit zu geben. Das Ziel war nicht nur höhere Conversion. Ich wollte, dass das Erlebnis transparent wirkt, damit Menschen, die sich anmelden, sich wirklich gut darüber fühlen, wozu sie sich verpflichtet haben.</p>
          </Section>

          <CaseStudyImage
            src="/case-studies/goodlife/goodlife-health-clubs-bad-reviews.png"
            alt="Kundenbewertungen — häufige Beschwerden über Bindungsangst und unklare Vertragsbedingungen"
          />

          <Section heading="Meine Rolle">
            <p>Ich war der alleinige Designer in diesem Projekt. Ich arbeitete eng mit einem Engineering-Team zusammen und kollaborierte mit Kunden-Stakeholdern, aber ich verantwortete das Experience-Design und die Entscheidungen, die es prägten. Tägliche Produktentscheidungen wurden in enger Partnerschaft mit dem Engineering-Manager getroffen.</p>
            <p>Der Moment, der mir geblieben ist, war, als der Flow, den wir entworfen hatten, zum Problem für das Engineering-Team wurde. Ich hatte dem Entwickler die Vision früh verkauft. Ein stark angepasstes Checkout-Erlebnis, das von BigCommerce-Standards abwich. Er war enthusiastisch und sagte, wir könnten es umsetzen. Was weder er noch ich hart genug hinterfragt hatte, war, was diese Anpassung tatsächlich an Zeit kosten würde. Als das klar wurde, steckten wir bereits tief im Build. Das Projekt lieferte zu spät, und ein Teil davon fiel auf mich zurück.</p>
            <p>Was ich anders machen würde: dieses ehrliche Gespräch über Risiken viel früher führen und den Entwickler von Anfang an als echten Partner in den Designprozess einbinden, anstatt ihm eine fertige Vision zu präsentieren. Es gab eine Version dieses Flows, die zu 80% genauso gut und zu 50% weniger komplex gewesen wäre. Ich habe uns den Raum nicht gegeben, sie zu finden.</p>
          </Section>

          <Section heading="Was ich früh gelernt habe">
            <p>Eine Überprüfung von öffentlichem Feedback und Social-Media-Erwähnungen machte eines klar: Die meisten Beschwerden betrafen die Mitgliedschaftsstruktur, Preistransparenz und Kündigung. Menschen fühlten sich in Vereinbarungen gefangen, die sie nicht vollständig verstanden.</p>
            <p>Der Blick auf Wettbewerber bestätigte das Muster. Die meisten Fitnessstudios priorisierten Lead-Erfassung über Klarheit und versteckten bedeutungsvolle Details bis spät im Prozess. Die Chance war nicht, durch Entfernen von Optionen zu vereinfachen — es war, Optionen verständlich zu machen. Darunter fügte jede Entscheidung Komplexität hinzu: Standort, Mitgliedschaftsdauer, Anzahlungshöhe und standortspezifische Extras beeinflussten alle Preise und Konditionen und erzeugten Hunderte von gültigen Mitgliedschaftskonfigurationen.</p>
          </Section>

          <ImagePlaceholder label="Konfigurationskomplexität — Diagramm folgt" />

          <Section heading="Die zentrale Designentscheidung">
            <p>Die wichtigste Entscheidung war, die Anmeldung als Explorations- und Konfigurationsprozess zu behandeln, nicht als traditionellen Checkout.</p>
            <p>Ich entwarf einen progressiven Flow, bei dem Nutzer eine Entscheidung nach der anderen trafen, von denen jede formte, was sie als nächstes sahen. Ich entfernte den Standard-Warenkorb-Schritt vollständig und ersetzte ihn durch eine persistente Zusammenfassung, die sich in Echtzeit aktualisierte, während Nutzer ihre Mitgliedschaft konfigurierten. Als Menschen Mitgliedschaftsdauer, Anzahlungen oder optionale Features anpassten, spiegelte die Zusammenfassung sofort die Auswirkung auf Preise und Verpflichtungen wider.</p>
            <p>Das Ziel war nicht, Menschen durchzudrängen. Es war sicherzustellen, dass jemand, der die Zahlung erreichte, bereits genau verstand, wofür er sich anmeldete.</p>
          </Section>

          <ImagePlaceholder label="Progressive Konfiguration — Diagramm folgt" />

          <Section heading="Arbeiten innerhalb von Beschränkungen">
            <p>Das Erlebnis wurde auf BigCommerce aufgebaut. Die Nutzung einer SaaS-Plattform gab uns zuverlässige Infrastruktur und schnellere Lieferung, aber das für den gewünschten Flow erforderliche Maß an Anpassung führte Komplexität ein. Früh erweiterten wir Standardmuster, um das Interaktionsmodell zu unterstützen, das wir für richtig hielten.</p>
            <p>Als die Entwicklung voranschritt, wurde klar, dass einige dieser Entscheidungen Instabilität und zusätzlichen Engineering-Aufwand einführten. Im Nachhinein würde ich selektiver sein, wo ich anpasse versus wo ich das Design an Plattformbeschränkungen anpasse. Langfristige Wartbarkeit hätte Vorrang vor perfekter Ausrichtung an einem idealisierten Flow.</p>
          </Section>

          <Section heading="Ergebnis">
            <p>Der neu gestaltete Anmelde-Flow wurde größtenteils wie entworfen geliefert. Nutzer reagierten positiv auf die erhöhte Klarheit und das Gefühl der Kontrolle. Stakeholder fühlten sich sicher, das Erlebnis abzuzeichnen, und der Prototyp reduzierte Hin-und-Her während der Entwicklung, indem er die Logik früh explizit machte.</p>
            <p>Was bei mir am stärksten nachgewirkt hat, war, wie viel Menschen bereits trugen, bevor sie den ersten Button klickten. Die Frustration galt nicht dem Fitnessstudio. Es war die Angst, sich auf etwas einzulassen, das sie nicht vollständig verstanden. Für diesen emotionalen Zustand zu designen erwies sich als ein besserer Auftrag als &quot;Conversion steigern.&quot;</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Das war eines meiner frühen Projekte nach dem Wechsel in das Product Design. Ich war nervös dabei, und diese Nervosität machte mich sehr gründlich. Ich verbrachte viel Zeit damit, zu einer Lösung zu gelangen, von der ich überzeugt war. Im Nachhinein hat diese Gewissheit etwas Raum für Partnerschaft geschlossen. Ich hätte früher zu den Entwicklern gehen, die Beschränkungen gemeinsam durcharbeiten und eine Version finden können, die pünktlich geliefert hätte, ohne viel aufzugeben. Die Gründlichkeit war nicht umsonst. Sie kam nur etwas zu spät im Prozess, um wirklich nützlich zu sein.</p>
            <p>Die größere Erkenntnis: zu verstehen, was Nutzer fühlen, bevor sie beginnen, ist genauso wichtig wie zu verstehen, was sie tun müssen. Der beste Auftrag hier war nicht das Geschäftsziel. Es war das emotionale.</p>
            <p>Ich bin immer noch stolz auf diese Arbeit. Menschen waren wütend und fühlten sich von einem Mitgliedschaftsprozess manipuliert, den sie nicht vollständig verstanden. Einen Weg zu finden, ihnen die Kontrolle zurückzugeben und dabei Konfigurationsmuster aus anderen Bereichen zu entleihen, fühlte sich wie der richtige Instinkt an.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The problem">
            <p>Gym memberships are notoriously difficult to understand. At Goodlife, this showed up clearly in customer feedback. People weren&apos;t frustrated by the gyms or the staff. They were frustrated by contracts, hidden fees, and unclear cancellation terms. The existing sign-up experience reinforced that mistrust.</p>
            <p>From a business perspective, the flow was also dated and brittle. It relied on patterns that pushed people through checkout without helping them feel confident. The goal wasn&apos;t just higher conversion. I wanted the experience to feel transparent, so that people who signed up actually felt good about what they&apos;d agreed to.</p>
          </Section>

          <CaseStudyImage
            src="/case-studies/goodlife/goodlife-health-clubs-bad-reviews.png"
            alt="Customer reviews — widespread complaints about lock-in anxiety and unclear contract terms"
          />

          <Section heading="My role">
            <p>I was the sole designer on this project. I worked closely with an engineering team and collaborated with client stakeholders, but I owned the experience design and the decisions that shaped it. Day-to-day product decisions were made in close partnership with the engineering manager.</p>
            <p>The moment that stayed with me was when the flow we&apos;d designed started becoming a problem for the engineering team. I&apos;d sold the developer on the vision early. A highly customised checkout experience that broke from BigCommerce defaults. He was enthusiastic and said we could do it. What neither of us had pushed on hard enough was what that customisation would actually cost in time. By the time that became clear, we were already deep in build. The project shipped late, and some of that landed on me.</p>
            <p>What I&apos;d do differently is have that honest conversation about risk much earlier, and bring the developer into the design process as a real partner rather than someone I was presenting a completed vision to. There was a version of this flow that was 80% as good and 50% as complex. I didn&apos;t give us the space to find it.</p>
          </Section>

          <Section heading="What I learned early">
            <p>A review of public feedback and social mentions made one thing clear: most complaints were about membership structure, pricing clarity, and cancellation. People felt locked into agreements they didn&apos;t fully understand.</p>
            <p>Looking at competitors reinforced the pattern. Most gyms prioritised lead capture over clarity, hiding meaningful details until late in the process. The opportunity wasn&apos;t to simplify by removing choice — it was to make choice understandable. Underneath, every decision added complexity: location, membership length, deposit amount, and location-specific extras all affected pricing and terms, creating hundreds of valid membership configurations that needed to remain accurate, consistent, and explainable.</p>
          </Section>

          <ImagePlaceholder label="Configuration complexity diagram — coming soon" />

          <Section heading="The core design decision">
            <p>The most important decision was to treat sign-up as an exploration and configuration process, not a traditional checkout.</p>
            <p>I designed a progressive flow where users made one decision at a time, each shaping what they saw next. I removed the standard cart step entirely and replaced it with a persistent summary that updated in real time as users configured their membership. As people adjusted membership length, deposits, or optional features, the summary immediately reflected the impact on pricing and commitments.</p>
            <p>The goal wasn&apos;t to push people through. It was to make sure that by the time someone reached payment, they already understood exactly what they were signing up for.</p>
          </Section>

          <ImagePlaceholder label="Progressive configuration diagram — coming soon" />

          <Section heading="Working within constraints">
            <p>The experience was built on BigCommerce. Using a SaaS platform gave us reliable infrastructure and faster delivery, but the level of customisation required to support the desired flow introduced complexity. Early on, we extended default patterns to support the interaction model we believed was right.</p>
            <p>As development progressed, it became clear that some of these decisions introduced instability and additional engineering effort. In hindsight, I would be more selective about where to customise versus where to adapt the design to platform constraints. Long-term maintainability would take priority over perfect alignment with an idealised flow.</p>
          </Section>

          <Section heading="Outcome">
            <p>The redesigned sign-up flow shipped largely as designed. Users responded positively to the increased clarity and sense of control. Stakeholders felt confident signing off on the experience, and the prototype reduced back-and-forth during development by making the logic explicit early.</p>
            <p>What stayed with me most was how much people were already carrying before they clicked the first button. The frustration wasn&apos;t with the gym. It was the anxiety of committing to something they didn&apos;t fully understand. Designing for that emotional state turned out to be a better brief than &quot;increase conversion.&quot;</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>This was one of my early projects after switching to product design. I was anxious about it, and that anxiety made me very thorough. I spent a long time arriving at a solution I felt certain about. In hindsight, that certainty closed off some room for partnership. I could have gone to the developers earlier, worked through the constraints together, and found a version that shipped on time without giving up much. The thoroughness wasn&apos;t wasted. It just came a little too late in the process to be fully useful.</p>
            <p>The bigger lesson: understanding what users are feeling before they start is as important as understanding what they need to do. The best brief here wasn&apos;t the business goal. It was the emotional one.</p>
            <p>I&apos;m still proud of this one. People were angry and felt manipulated by a membership process they didn&apos;t fully understand. Finding a way to put control back in their hands, and borrowing from configuration patterns in other industries to do it, felt like the right instinct.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
