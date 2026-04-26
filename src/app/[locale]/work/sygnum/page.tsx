import type { Metadata } from "next";
import CaseStudyLayout, { Section } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Digital Assets Dashboard — Sygnum Bank",
  description: "Product design case study: digital assets dashboard for Sygnum Bank — the world's first regulated digital asset bank. Fintech UX design for high-net-worth private banking clients.",
};

export default async function SygnumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const de = locale === "de";

  return (
    <CaseStudyLayout
      locale={locale}
      tag="Sygnum Bank"
      title={de
        ? "Niemand sollte seine Bank anrufen müssen, nur um den Kontostand zu prüfen"
        : "No one should have to call their bank just to check their balance"
      }
      intro={de
        ? "Sygnum ist eine regulierte Schweizer Digital-Asset-Bank. Als ich anfing, mussten Kunden, die ihre Bestände verstehen wollten, ihren Kundenbetreuer anrufen oder eine gedruckte Abrechnung lesen. Für die weltweit erste regulierte Digital-Asset-Bank war das nicht nur ein UX-Problem – es war eine Glaubwürdigkeitslücke. Dieses Projekt hat das zentrale Dashboard geschaffen, das das geändert hat."
        : "Sygnum is a regulated Swiss digital asset bank. When I joined, clients who wanted to understand their holdings had to call their account manager or read a printed statement. For the world's first regulated digital asset bank, that wasn't just a UX problem — it was a credibility gap. This project created the central dashboard that changed that."
      }
      meta={de
        ? {
            company: "Sygnum Bank",
            product: "Digital-Assets-Dashboard",
            year: "2022",
            role: "Design Lead",
            scope: "Dashboard + Design-System-Validierung",
            collaboration: "Produkt, Blockchain-Engineers, Frontend-Engineers, Account-Teams",
          }
        : {
            company: "Sygnum Bank",
            product: "Digital assets dashboard",
            year: "2022",
            role: "Design Lead",
            scope: "Dashboard + design system validation",
            collaboration: "Product, blockchain engineers, frontend engineers, account teams",
          }
      }
    >
      {de ? (
        <>
          <Section heading="Die Ausgangssituation">
            <p>Sygnums Produkt war schnell über mehrere Teams gewachsen, die jeweils unabhängig voneinander designten und bauten. Das Ergebnis waren inkonsistente Layouts, wechselnde Terminologie von Seite zu Seite und keine einheitliche Ansicht der digitalen Asset-Bestände eines Kunden. Die Oberfläche wirkte veraltet und unzuverlässig.</p>
            <p>Kunden waren vermögende Private-Banking-Kunden, die an persönlichen Service gewöhnt waren. Sie erwarteten trotzdem sofortigen Zugriff auf ihre Salden, klare Erklärungen zu ihrem Besitz und ein Erlebnis, das dem modernen Banking entspricht. Sie verstanden Finanzprodukte. Die Oberfläche musste das respektieren, nicht herabsehen.</p>
          </Section>

          <div className="my-12 w-full aspect-video rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
            <img
              src="/case-studies/sygnum/asset-overview.png"
              alt="Sygnum digital assets overview dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <Section heading="Meine Rolle">
            <p>Ich war der Design Lead in diesem Projekt, unterstützt von einem Junior Designer. Ich definierte die Gesamtstruktur und das Interaktionsmodell, übersetzte komplexe Blockchain-Konzepte in verständliche UI, setzte und hielt den visuellen Qualitätsstandard und entschied, was zu vereinfachen und was explizit zu zeigen war.</p>
            <p>Dieses Projekt war auch eines der ersten großen Produktbereiche, die Sygnums neues Design System nutzten. Es musste beweisen, dass das System echte Komplexität bewältigen kann, nicht nur einfache Flows. Diese doppelte Verantwortung – das richtige Produkt liefern und das System unter Druck validieren – hat jede Entscheidung geprägt.</p>
          </Section>

          <Section heading="Der Ansatz">
            <p>Anstatt einzelne Screens zu entwerfen, konzentrierte ich mich darauf, ein klares mentales Modell dafür zu etablieren, wie Sygnum digitale Assets präsentiert. Das bedeutete, das Erlebnis wo möglich in vertrauten Banking-Konzepten zu verankern, eine einzige Übersicht zu schaffen, die den Gesamtbestand über alle Asset-Typen widerspiegelt, und Assets und Aktionen so zu gruppieren, wie Kunden denken – nicht wie Systeme strukturiert sind.</p>
            <p>Häufige Aktionen wie Trading und Staking mussten leicht zu finden sein, ohne das Dashboard in ein Kontrollpanel zu verwandeln. Die Herausforderung war, zu vereinfachen ohne zu übervereinfachen. Regulierung machte Genauigkeit unverzichtbar. Asset-Komplexität – Salden, Gebühren, Settlement-Timing, Transaktionsstatus – konnte nicht versteckt, nur strukturiert werden.</p>
          </Section>

          <div className="my-12 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
              <img
                src="/case-studies/sygnum/asset-overview-scrolled.png"
                alt="Asset breakdown by type — trading wallets, vault wallets, staking, asset tokens"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
              <img
                src="/case-studies/sygnum/btc-wallet-detail.png"
                alt="BTC wallet detail — balance, performance chart, and transaction history"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <Section heading="Das Ergebnis">
            <p>Das finale Dashboard gab Kunden eine klare Übersicht darüber, was sie hielten und dessen aktuellen Wert, unterstützte Crypto, tokenisierte Assets, Staking und NFTs und machte häufige Aktionen leicht auffindbar, ohne die Übersicht zu beeinträchtigen. Es funktionierte sowohl als schneller Check-in als auch als tieferes Explorationstool.</p>
            <p>Es bewies auch, dass das Design System unter echter Komplexität standhält – was zur Adoption über andere Teams hinweg führte.</p>
          </Section>

          <div className="my-12 w-full aspect-video rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
            <img
              src="/case-studies/sygnum/dashboard-overlay-send.png"
              alt="Send transaction overlay — inline action modal over the dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <Section heading="Ergebnisse">
            <p>Ohne detaillierte Analytics kam Erfolg durch qualitative Signale. Kunden konnten ihre digitalen Asset-Bestände klar verstehen. Feedback von Account-Teams war durchgehend positiv. Support-Anfragen zu Salden gingen zurück. Andere Teams adoptierten das Design System, nachdem sie es in einem komplexen Kontext funktionieren sahen.</p>
            <p>Am wichtigsten: Das Produkt begann sich wieder wie eine Bank anzufühlen.</p>
          </Section>

          <Section heading="Was ich mitnehme">
            <p>Was mir dieses Projekt gezeigt hat: Ein Design System beweist sich nur unter echter Komplexität. Die einfache Version ist, Komponenten zu haben. Die schwierige Version ist, Komponenten zu haben, die standhalten, wenn es wirklich kompliziert wird.</p>
            <p>Die wichtigsten Entscheidungen drehten sich oft darum, was wegzulassen ist. Da Tools und KI die Komponentenerstellung beschleunigen, denke ich, dass das zunehmend der Teil ist, der zählt. Das strukturelle Denken, die &quot;nein, das wird bereits von X behandelt&quot;-Gespräche. Das ist die Arbeit, die mir am meisten Freude macht.</p>
          </Section>
        </>
      ) : (
        <>
          <Section heading="The situation">
            <p>Sygnum&apos;s product had grown quickly across multiple teams, each designing and building independently. The result was inconsistent layouts, changing terminology from page to page, and no single view of a client&apos;s digital asset holdings. The interface felt dated and untrustworthy.</p>
            <p>Clients were high-net-worth private banking clients, accustomed to personal service. They still expected immediate access to their balances, clear explanations of what they owned, and an experience comparable to modern banking. They understood financial products. The interface needed to respect that, not talk down to it.</p>
          </Section>

          <div className="my-12 w-full aspect-video rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
            <img
              src="/case-studies/sygnum/asset-overview.png"
              alt="Sygnum digital assets overview dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <Section heading="My role">
            <p>I was the Design Lead on this project, supported by a junior designer. I defined the overall structure and interaction model, translated complex blockchain concepts into understandable UI, set and maintained the visual quality bar, and decided what to simplify and what to surface explicitly.</p>
            <p>This project was also one of the first major product areas to use Sygnum&apos;s new design system. It had to prove the system could handle real complexity, not just simple flows. That dual responsibility — shipping the right product and validating the system under pressure — shaped every decision.</p>
          </Section>

          <Section heading="The approach">
            <p>Rather than designing individual screens, I focused on establishing a clear mental model for how Sygnum presents digital assets. That meant anchoring the experience in familiar banking concepts where possible, creating a single overview that reflected total holdings across asset types, and grouping assets and actions based on how clients think — not how systems are structured.</p>
            <p>Common actions like trading and staking needed to be easy to find without turning the dashboard into a control panel. The challenge was simplifying without oversimplifying. Regulation made accuracy non-negotiable. Asset complexity — balances, fees, settlement timing, transaction states — couldn&apos;t be hidden, only structured.</p>
          </Section>

          <div className="my-12 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
              <img
                src="/case-studies/sygnum/asset-overview-scrolled.png"
                alt="Asset breakdown by type — trading wallets, vault wallets, staking, asset tokens"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
              <img
                src="/case-studies/sygnum/btc-wallet-detail.png"
                alt="BTC wallet detail — balance, performance chart, and transaction history"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <Section heading="The result">
            <p>The final dashboard gave clients a clear overview of what they held and its current value, supported crypto, tokenised assets, staking, and NFTs, and made common actions easy to find without intruding on the overview. It worked both as a quick check-in and a deeper exploration tool.</p>
            <p>It also proved the design system could hold up under real complexity — which led to adoption across other teams.</p>
          </Section>

          <div className="my-12 w-full aspect-video rounded-2xl overflow-hidden border border-surface-muted shadow-xl">
            <img
              src="/case-studies/sygnum/dashboard-overlay-send.png"
              alt="Send transaction overlay — inline action modal over the dashboard"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <Section heading="Outcomes">
            <p>Without detailed analytics, success came through qualitative signals. Clients could clearly understand their digital asset holdings. Feedback from account teams was consistently positive. Support requests related to balances decreased. Other teams adopted the design system after seeing it work in a complex context.</p>
            <p>Most importantly, the product started to feel like a bank again.</p>
          </Section>

          <Section heading="What I&apos;d carry forward">
            <p>What this project showed me is that a design system only proves itself under real complexity. The easy version is having components. The hard version is having components that hold up when things get genuinely complicated.</p>
            <p>The most important decisions were often about what to leave out. As tools and AI make component creation faster, I think that&apos;s the part that matters more and more. The structural thinking, the &quot;no, that&apos;s already handled by X&quot; conversations. That&apos;s the work I enjoy most.</p>
          </Section>
        </>
      )}
    </CaseStudyLayout>
  );
}
