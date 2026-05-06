import type { Metadata } from "next";
import { ButtonAnchor, TextLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Jono Fox — Principal Product Designer with 6+ years in product and 9 years as an Art Director. Specialist in developer tools, design systems, DevEx, and enterprise B2B products. Expert in Figma and AI-augmented design workflows.",
};

const roles = [
  { company: "Aerospike", title: "Principal Product Designer", years: "2025 – Now" },
  { company: "Workwise", title: "Expert Product Designer", years: "2023 – 2025" },
  { company: "Sygnum Bank", title: "Senior Product Designer / Team Lead", years: "2022 – 2023" },
  { company: "Publicis", title: "Senior Conceptual Designer", years: "2020 – 2022" },
];

const awards = [
  "Cannes Lions", "The Webby Awards", "D&AD", "The One Show",
  "New York Festivals", "Deutscher Design Club", "AWARD Awards", "AXIS Awards",
];

const content = {
  en: {
    hero: {
      h1a: "I think clearly, design carefully,",
      h1b: "and ship",
      p1: "Most of my work starts before anyone's certain what good looks like. Developer tools at Aerospike, banking infrastructure at Sygnum, recruiting platforms at Workwise. Complex systems where the problem space is genuinely unclear and working that out is part of the job. I'm a Principal Product Designer, and that's the kind of problem I'm here for.",
      p2: "What I actually believe about design is pretty simple: the person using the thing shouldn't have to work hard to understand what it's asking of them. Experience also has a real effect on whether a product grows. Support load, retention, how fast users figure out what to do. Design is always in there somewhere. I've worked on enough of those situations to know how to get it right, and how to make the case when nobody's convinced yet.",
      p3: "I came to product design from nine years as an Art Director. That's where I learned to think under real constraints and communicate in a way that lands. The switch made sense. I'd been working on campaigns that were basically products, and the process got its hooks in me.",
      contact: "Get in touch →",
    },
    roles: {
      heading: "Recent roles",
    },
    awards: {
      heading: "Awards &",
      headingAccent: "recognition",
      descriptor: "From my advertising career, across teams at Droga5, Clemenger BBDO, Grey, and others.",
    },
    buttons: {
      cv: "Download CV",
      linkedin: "Connect on LinkedIn",
    },
    skills: {
      heading: "Skills &",
      headingAccent: "strengths",
      howIThink: "How I think",
      whatIDo: "What I do",
      howIWork: "How I work",
      howIThinkItems: ["Deep focus", "Systems thinking", "Decision driven", "Asks 'Why' a lot", "Pattern recognition", "Team mentoring"],
      whatIDoItems: ["DevEx design", "Scalable design systems", "Figma libraries", "AI-augmented workflows", "Product strategy", "User research"],
      howIWorkItems: ["Feedback friendly", "Problem-first", "Shares early", "Human-centered", "Cuts complexity", "Pragmatic polish"],
    },
    values: {
      heading: "Design",
      headingAccent: "values",
      items: [
        {
          title: "Keep a learning mindset",
          body: "The moment I think I've figured out what users need is usually when I stop listening to them. I try to stay curious and push on my own assumptions.",
        },
        {
          title: "Find creative solutions to complexity",
          body: "I love that moment when everything clicks into place.",
        },
        {
          title: "Ask 'how can this be more fun?'",
          body: "There should always be time to step back and ask this. I want to create the small moments that people notice without knowing why — the things that make a product feel properly finished.",
        },
      ],
    },
  },
  de: {
    hero: {
      h1a: "Ich denke klar, designe sorgfältig",
      h1b: "und liefere",
      p1: "Die meisten meiner Projekte beginnen, bevor irgendjemand sicher weiß, wie gut aussieht. Developer-Tools bei Aerospike, Banking-Infrastruktur bei Sygnum, Recruiting-Plattformen bei Workwise. Komplexe Systeme, bei denen der Problemraum wirklich unklar ist und das Herausfinden Teil der Arbeit. Ich bin Principal Product Designer, und genau das ist die Art von Problem, für die ich hier bin.",
      p2: "Was ich wirklich über Design glaube, ist ziemlich einfach: Die Person, die etwas benutzt, sollte sich nicht anstrengen müssen, um zu verstehen, was es von ihr will. Experience hat auch einen echten Einfluss darauf, ob ein Produkt wächst. Support-Aufwand, Retention, wie schnell Nutzer verstehen, was zu tun ist. Design steckt immer irgendwo dahinter. Ich habe genug solche Situationen erlebt, um zu wissen, wie man es richtig hinbekommt, und wie man argumentiert, wenn noch niemand überzeugt ist.",
      p3: "Zum Product Design kam ich nach neun Jahren als Art Director. Dort habe ich gelernt, unter echten Constraints zu denken und so zu kommunizieren, dass es wirklich ankommt. Der Wechsel ergab Sinn. Ich hatte an Kampagnen gearbeitet, die im Grunde schon Produkte waren, und der Prozess hat mich gepackt.",
      contact: "Kontakt aufnehmen →",
    },
    roles: {
      heading: "Letzte Positionen",
    },
    awards: {
      heading: "Auszeichnungen &",
      headingAccent: "Anerkennung",
      descriptor: "Aus meiner Zeit in der Werbung, in Teams bei Droga5, Clemenger BBDO, Grey und anderen.",
    },
    buttons: {
      cv: "Lebenslauf herunterladen",
      linkedin: "Auf LinkedIn vernetzen",
    },
    skills: {
      heading: "Fähigkeiten &",
      headingAccent: "Stärken",
      howIThink: "Wie ich denke",
      whatIDo: "Was ich tue",
      howIWork: "Wie ich arbeite",
      howIThinkItems: ["Tiefe Konzentration", "Systemdenken", "Entscheidungsorientiert", "Fragt oft 'Warum'", "Mustererkennung", "Team-Mentoring"],
      whatIDoItems: ["DevEx Design", "Skalierbare Design Systems", "Figma-Bibliotheken", "KI-gestützte Workflows", "Produktstrategie", "Nutzerforschung"],
      howIWorkItems: ["Feedbackoffen", "Problemorientiert", "Teilt früh", "Menschenzentriert", "Reduziert Komplexität", "Pragmatische Sorgfalt"],
    },
    values: {
      heading: "Design-",
      headingAccent: "Werte",
      items: [
        {
          title: "Lernbereit bleiben",
          body: "Der Moment, in dem ich glaube, verstanden zu haben, was Nutzer brauchen, ist meistens genau dann, wenn ich aufgehört habe, ihnen zuzuhören. Ich versuche, neugierig zu bleiben und meine eigenen Annahmen zu hinterfragen.",
        },
        {
          title: "Kreative Lösungen für Komplexität finden",
          body: "Ich liebe den Moment, in dem alles an seinen Platz fällt.",
        },
        {
          title: "Fragen: 'Wie kann das mehr Spaß machen?'",
          body: "Es sollte immer Zeit geben, einen Schritt zurückzutreten und das zu fragen. Ich möchte die kleinen Momente schaffen, die Menschen bemerken, ohne zu wissen warum – die Dinge, die ein Produkt wirklich fertig wirken lassen.",
        },
      ],
    },
  },
} as const;

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;
  const contactHref = `/${locale}/contact`;

  return (
    <div>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight mb-8">
              {c.hero.h1a}{" "}
              <span className="text-teal">{c.hero.h1b}</span>
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed mb-6">
              {c.hero.p1}
            </p>
            <p className="text-lg text-ink-secondary leading-relaxed mb-6">
              {c.hero.p2}
            </p>
            <p className="text-lg text-ink-secondary leading-relaxed mb-10">
              {c.hero.p3}
            </p>
            <TextLink href={contactHref}>{c.hero.contact}</TextLink>
          </div>
        </div>
      </section>

      {/* Roles + Awards */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-8">{c.roles.heading}</h2>
              <div className="space-y-6">
                {roles.map((role) => (
                  <div key={role.company} className="flex justify-between items-start gap-4">
                    <div>
                      <p className="font-semibold text-ink text-sm">{role.company}</p>
                      <p className="text-sm text-ink-secondary">{role.title}</p>
                    </div>
                    <span className="text-xs text-ink-disabled whitespace-nowrap pt-0.5">{role.years}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-8">
                {c.awards.heading} <span className="text-fox">{c.awards.headingAccent}</span>
              </h2>
              <p className="text-sm text-ink-secondary mb-6">{c.awards.descriptor}</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {awards.map((award) => (
                  <p key={award} className="text-sm text-ink-secondary">{award}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <ButtonAnchor
              href="https://drive.google.com/drive/folders/1W-wVnS8RzMKucIRXi-ASznmiOAx8ZqEX?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              variant="teal"
            >
              {c.buttons.cv}
            </ButtonAnchor>
            <ButtonAnchor
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              {c.buttons.linkedin}
            </ButtonAnchor>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-ink mb-10">
            {c.skills.heading} <span className="text-teal">{c.skills.headingAccent}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">{c.skills.howIThink}</p>
              <div className="flex flex-wrap gap-2">
                {c.skills.howIThinkItems.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-surface-muted text-xs text-ink-secondary">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">{c.skills.whatIDo}</p>
              <div className="flex flex-wrap gap-2">
                {c.skills.whatIDoItems.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-teal-subtle text-xs text-teal">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">{c.skills.howIWork}</p>
              <div className="flex flex-wrap gap-2">
                {c.skills.howIWorkItems.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-surface-muted text-xs text-ink-secondary">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-ink mb-10">
            {c.values.heading} <span className="text-fox">{c.values.headingAccent}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.values.items.map((v) => (
              <div key={v.title} className="space-y-3">
                <div className="w-8 h-0.5 bg-gradient-accent" />
                <h3 className="font-display font-medium text-lg text-ink">{v.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
