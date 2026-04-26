
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jono Fox — Principal Product Designer",
  description: "Jono Fox — Principal Product Designer specialising in developer tools, design systems, and complex B2B products. Aerospike, Sygnum Bank, Goodlife. Available for senior IC and design leadership roles.",
};
import { ButtonLink, ButtonAnchor, TextLink } from "@/components/ui/Button";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

const content = {
  en: {
    hero: {
      headline1: "I design",
      headline2: "complex",
      headline3: "tools that feel",
      headline4: "clear",
      sub: "Principal product designer for complex systems. I help engineering and PM teams get the experience right so users understand it, enjoy it, and the product grows.",
      cta1: "See my work",
      cta2: "Get in contact",
    },
    logoStrip: "Worked with teams at:",
    pillars: {
      heading: "What I do",
      headingAccent: "best",
      learnMore: "Learn more about me →",
      items: [
        {
          title: "Design systems that designers, engineers, and AI tools can trust",
          body: "A design system only works if everyone uses it. So I build them as shared infrastructure: tokens, components, contribution rules, and documentation that holds up as teams grow. At Aerospike I took that further, building a structured layer that AI tools use to generate output that's system-consistent by default. That's increasingly the part that matters.",
        },
        {
          title: "Make developer tools feel approachable without dumbing them down",
          body: "Developer tools usually fail in one of two ways. Too simple to trust, or too complex to move through. I try to work in the space between those. Experts can go deep when they want to, and newcomers have a path forward that doesn't require reading the docs first.",
        },
        {
          title: "Good experience moves the numbers that matter",
          body: "I work closely with PMs and engineering teams to make the case for design and then deliver on it. Getting users to value faster, reducing friction that becomes support volume, building something people actually come back to. I do my best work when I'm close to decisions from early on.",
        },
      ],
    },
    work: {
      heading: "Featured",
      headingAccent: "work",
      cards: [
        {
          tag: "AEROSPIKE",
          title: "Depth when you want it. Safety when you don't.",
          body: "A provisioning flow that lets teams launch Aerospike clusters in under 90 seconds, with safe defaults or deep configuration, and clear guidance and guardrails throughout.",
          cta: "View case study",
          href: "/work/aerospike-provisioning",
          gradient: "linear-gradient(135deg, #E0F5F2 0%, rgba(42,157,143,0.13) 100%)",
        },
        {
          tag: "AEROSPIKE",
          title: "The aha moment shouldn't take three days",
          body: "Led end-to-end design of Aerospike's first visual developer tool. A guided path from connection to confidence, with a foundation built for AI-assisted workflows.",
          cta: "View case study",
          href: "/work/aerospike-voyager",
          gradient: "linear-gradient(135deg, #EDE9FE 0%, rgba(139,92,246,0.13) 100%)",
        },
        {
          tag: "MULTIPLE COMPANIES",
          title: "A design system designers, engineers, and AI tools all follow",
          body: "Built systems from scratch across three companies, with a documentation layer at Aerospike that makes AI-generated output system-consistent by default.",
          cta: "View case study",
          href: "/work/design-systems",
          gradient: "linear-gradient(135deg, #FFF2E0 0%, rgba(245,124,0,0.13) 100%)",
        },
      ],
    },
    testimonials: {
      heading: "In their",
      headingAccent: "own words",
    },
    cta: {
      heading: "Let's",
      headingAccent: "talk",
      body: "Seen something that resonates? I'm open to the right opportunity, a good collaboration, or just a conversation about where design is heading.",
      email: "Send an email",
      linkedin: "Connect on LinkedIn",
    },
  },
  de: {
    hero: {
      headline1: "Ich gestalte",
      headline2: "komplexe",
      headline3: "Tools, die",
      headline4: "klar wirken",
      sub: "Principal Product Designer für komplexe Systeme. Ich helfe Engineering- und PM-Teams dabei, die Experience so hinzubekommen, dass Nutzer sie verstehen, gerne nutzen und das Produkt wächst.",
      cta1: "Meine Arbeiten",
      cta2: "Kontakt aufnehmen",
    },
    logoStrip: "Zusammengearbeitet mit Teams bei:",
    pillars: {
      heading: "Was ich am besten",
      headingAccent: "kann",
      learnMore: "Mehr über mich →",
      items: [
        {
          title: "Design Systems, auf die Designer, Entwickler und KI-Tools vertrauen können",
          body: "Ein Design System funktioniert nur, wenn alle es verwenden. Daher baue ich sie als gemeinsame Infrastruktur: Tokens, Komponenten, Contribution-Regeln und Dokumentation, die auch mit wachsenden Teams standhält. Bei Aerospike bin ich noch weiter gegangen – mit einer strukturierten Ebene, die KI-Tools nutzen, um standardmäßig systemkonsistenten Output zu erzeugen. Genau das ist es, was zunehmend zählt.",
        },
        {
          title: "Developer-Tools zugänglich machen, ohne sie zu vereinfachen",
          body: "Developer-Tools scheitern meistens auf eine von zwei Arten: zu einfach, um ihnen zu vertrauen, oder zu komplex, um voranzukommen. Ich versuche, im Raum dazwischen zu arbeiten. Experten können tief einsteigen, wenn sie wollen. Einsteiger haben einen Weg nach vorne, der kein Dokumentationsstudium voraussetzt.",
        },
        {
          title: "Gute Experience bewegt die Zahlen, die zählen",
          body: "Ich arbeite eng mit PMs und Engineering-Teams zusammen, um den Fall für Design zu machen und ihn dann einzulösen. Nutzer schneller zum Wert bringen, Reibung reduzieren, die zu Support-Aufwand wird, etwas bauen, das Menschen wirklich wiederkommen lässt. Ich arbeite am besten, wenn ich früh nah an Entscheidungen bin.",
        },
      ],
    },
    work: {
      heading: "Ausgewählte",
      headingAccent: "Arbeiten",
      cards: [
        {
          tag: "AEROSPIKE",
          title: "Kontrolle nach Bedarf. Sicherheit als Standard.",
          body: "Ein Provisioning-Flow, der Teams ermöglicht, Aerospike-Cluster in unter 90 Sekunden zu starten – mit sicheren Standards oder tiefer Konfiguration und klarer Führung auf dem Weg.",
          cta: "Fallstudie ansehen",
          href: "/work/aerospike-provisioning",
          gradient: "linear-gradient(135deg, #E0F5F2 0%, rgba(42,157,143,0.13) 100%)",
        },
        {
          tag: "AEROSPIKE",
          title: "Der Aha-Moment sollte nicht drei Tage dauern",
          body: "End-to-End-Design von Aerospikes erstem visuellem Developer-Tool. Ein geführter Weg von der ersten Verbindung bis zum vollen Verständnis – mit einer Grundlage für KI-gestützte Workflows.",
          cta: "Fallstudie ansehen",
          href: "/work/aerospike-voyager",
          gradient: "linear-gradient(135deg, #EDE9FE 0%, rgba(139,92,246,0.13) 100%)",
        },
        {
          tag: "MEHRERE UNTERNEHMEN",
          title: "Ein Design System, das Designer, Entwickler und KI-Tools gleichermaßen befolgen",
          body: "Systeme von Grund auf in drei Unternehmen aufgebaut – mit einer Dokumentationsebene bei Aerospike, die KI-generierten Output standardmäßig systemkonsistent macht.",
          cta: "Fallstudie ansehen",
          href: "/work/design-systems",
          gradient: "linear-gradient(135deg, #FFF2E0 0%, rgba(245,124,0,0.13) 100%)",
        },
      ],
    },
    testimonials: {
      heading: "In ihren",
      headingAccent: "eigenen Worten",
    },
    cta: {
      heading: "Lass uns",
      headingAccent: "reden",
      body: "Etwas gefunden, das dich anspricht? Ich bin offen für die richtige Gelegenheit, eine gute Zusammenarbeit oder einfach ein Gespräch darüber, wohin sich Design entwickelt.",
      email: "E-Mail schreiben",
      linkedin: "Auf LinkedIn vernetzen",
    },
  },
} as const;

const logoFiles = [
  { name: "Aerospike",        file: "/logo-aerospike.svg" },
  { name: "Sygnum",           file: "/logo-sygnum.svg" },
  { name: "UBS",              file: "/logo-ubs.svg" },
  { name: "Workwise",         file: "/logo-workwise.svg" },
  { name: "Netflix",          file: "/logo-netflix.svg" },
  { name: "Heineken",         file: "/logo-heineken.svg" },
  { name: "Goodlife",         file: "/logo-goodlife.svg" },
  { name: "Gillette",         file: "/logo-gillette.svg" },
  { name: "Swiss Post",       file: "/logo-swiss-post.svg" },
  { name: "American Express", file: "/logo-american-express.svg" },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (path: string) => `/${locale}${path}`;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:repeating-linear-gradient(0deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px)] opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-fox/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pt-44 pb-24">
          <div>
            <h1 className="font-syne text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
              {c.hero.headline1}{" "}
              <span className="text-teal italic">{c.hero.headline2}</span>{" "}
              {c.hero.headline3}{" "}
              <span className="text-fox">{c.hero.headline4}</span>
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-lg">
              {c.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={lp("/work")} variant="primary">
                {c.hero.cta1}
              </ButtonLink>
              <ButtonLink href={lp("/contact")} variant="outline">
                {c.hero.cta2}
              </ButtonLink>
            </div>
          </div>

          {/* Portrait — always colour */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src="/hero-color.png"
              alt="Jono Fox"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section
        className="py-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(42,157,143,0.06) 0%, rgba(245,245,247,1) 40%, rgba(245,245,247,1) 60%, rgba(245,124,0,0.06) 100%)",
        }}
      >
        <p className="text-sm font-medium tracking-widest text-ink-disabled text-center mb-8">
          {c.logoStrip}
        </p>
        {/* Marquee — mask fades edges */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex marquee-track">
            {/* Two identical sets so the loop is seamless */}
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-12 px-6 shrink-0" aria-hidden={set === 1}>
                {logoFiles.map(({ name, file }) => (
                  <img
                    key={name}
                    src={file}
                    alt={name}
                    className="h-7 w-auto opacity-40 grayscale"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I do best */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16">
            {c.pillars.heading} <span className="text-teal">{c.pillars.headingAccent}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.pillars.items.map((pillar, i) => (
              <div key={i} className="space-y-4">
                <div className="w-8 h-0.5 bg-gradient-accent" />
                <h3 className="font-syne font-semibold text-ink leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <TextLink href={lp("/about")}>{c.pillars.learnMore}</TextLink>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16">
            {c.work.heading} <span className="text-fox">{c.work.headingAccent}</span>
          </h2>
          <div className="space-y-4">
            {c.work.cards.map((card, i) => (
              <Link
                key={i}
                href={lp(card.href)}
                className="group grid md:grid-cols-[1fr_320px] gap-8 items-center p-8 rounded-2xl border border-surface-muted hover:border-teal/30 hover:bg-teal-subtle/20 transition-all duration-200 block"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold tracking-widest text-ink-disabled uppercase">
                    {card.tag}
                  </span>
                  <h3 className="font-syne font-bold text-2xl text-ink leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {card.body}
                  </p>
                  <span className="inline-block text-sm font-medium text-teal group-hover:text-teal-hover transition-colors">
                    {card.cta} →
                  </span>
                </div>
                <div
                  className="hidden md:block aspect-video rounded-xl overflow-hidden"
                  style={{ background: card.gradient ?? "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialCarousel heading={c.testimonials.heading} headingAccent={c.testimonials.headingAccent} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{
          background: "#1F2D3D",
        }}
      >
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-fox/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl font-bold mb-4">
            {c.cta.heading} <span className="text-fox">{c.cta.headingAccent}</span>
          </h2>
          <p className="text-ink-disabled mb-8 leading-relaxed">
            {c.cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
              {c.cta.email}
            </ButtonAnchor>
            <ButtonAnchor
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              {c.cta.linkedin}
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
