import type { Metadata } from "next";
import Link from "next/link";
import { ButtonAnchor } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";

  return {
    title: isDE
      ? "Lebenslauf — Jono Fox, Principal Product Designer"
      : "Resume — Jono Fox, Principal Product Designer",
    description: isDE
      ? "Lebenslauf von Jono Fox — Principal Product Designer mit Schwerpunkt auf Developer Experience, Designsysteme und komplexe B2B-Produkte. Basiert in Herxheim, Deutschland. Offen für Remote-Rollen und persönliche Stellen in Deutschland."
      : "Resume of Jono Fox — Principal Product Designer specialising in developer experience, design systems, and AI-augmented design workflows. Six years in product, nine as an Art Director. Based in Germany, working remotely. Open to senior IC and design leadership roles.",
    openGraph: {
      title: isDE
        ? "Lebenslauf — Jono Fox, Principal Product Designer"
        : "Resume — Jono Fox, Principal Product Designer",
      description: isDE
        ? "Principal Product Designer · Developer Experience · Designsysteme · Enterprise B2B · Remote · Deutschland"
        : "Principal Product Designer · Developer Experience · Design Systems · AI-augmented workflows · Remote · Germany",
    },
  };
}

const content = {
  en: {
    pageTitle: "Resume",
    downloadLabel: "Download PDF",
    downloadHref: "/Jono Fox Resume - English.pdf",
    switchLabel: "Auf Deutsch lesen",
    switchHref: "/de/resume",
    contact: {
      location: "Herxheim, Germany",
      availability: "Remote — open to in-person roles within Germany",
      email: "jonathanlouisfox@gmail.com",
      linkedin: "linkedin.com/in/jonofox",
      linkedinHref: "https://www.linkedin.com/in/jonofox/",
      portfolio: "jonofox.com",
      portfolioHref: "https://jonofox.com",
    },
    summary: {
      heading: "Summary",
      body: "Product Designer with six years in product and nine before that as an Art Director. I specialise in developer experience, design systems, and making complex technical workflows feel approachable without stripping out what makes them powerful. I've worked on enterprise database tooling, regulated fintech platforms, and recruiting infrastructure — always at the point where the problem space is genuinely unclear and working that out is part of the job. Recently built an AI reference layer into a design system that lets AI tools generate on-spec UI without manual correction. Open to senior IC and design leadership roles, remote or in person within Germany.",
    },
    experience: {
      heading: "Experience",
      roles: [
        {
          title: "Principal Product Designer",
          company: "Aerospike",
          location: "Remote",
          period: "Oct 2025 – Present",
          bullets: [
            "Lead design for the Aerospike Cloud platform — cluster provisioning, observability dashboards, and admin tooling across AWS, GCP, and Azure.",
            "Built a structured AI reference layer into the design system, enabling AI tools to generate on-spec UI without manual correction.",
            "Partner with engineering and product leads to define UX strategy and scope for multi-cloud developer tools.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Aerospike",
          location: "Remote",
          period: "Feb 2025 – Oct 2025",
          bullets: [
            "Designed the full end-to-end Aerospike Cloud experience, from a provisioning flow that gets clusters live in under 90 seconds to observability dashboards.",
            "Improved task success rate by 32% through iterative user testing and flow optimisation.",
            "Translated complex distributed-system logic into intuitive UI patterns, working closely with backend and platform engineering teams.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Workwise",
          location: "Karlsruhe, Germany",
          period: "Apr 2023 – Jan 2025",
          note: "titled Expert Product Designer internally",
          bullets: [
            "Led design for candidate-facing and internal platforms, introducing a new UX strategy and unified design system from scratch.",
            "Overhauled the Figma component library and integrated Storybook, significantly improving design-to-dev handoff quality and speed.",
            "Ran usability testing cycles that directly shaped product prioritisation.",
          ],
        },
        {
          title: "Senior Product Designer (Team Lead)",
          company: "Sygnum Bank",
          location: "Zurich, Switzerland",
          period: "Apr 2022 – Mar 2023",
          bullets: [
            "First product designer at the world's first regulated crypto bank — built team processes, design tooling, and critique culture from scratch.",
            "Delivered a cross-platform design system and UI/UX for institutional and retail crypto products.",
            "Simplified complex blockchain workflows for mainstream adoption without losing the depth that expert users needed.",
          ],
        },
        {
          title: "Senior Conceptual Designer",
          company: "Publicis",
          location: "Zurich, Switzerland",
          period: "Aug 2020 – Mar 2022",
          bullets: [
            "Art direction, UI/UX, and visual strategy for UBS across multiple product lines.",
            "Led concepting, prototyping, and campaign execution across multi-disciplinary teams.",
          ],
        },
        {
          title: "Creative Lead",
          company: "Matter Design",
          location: "Sydney, Australia",
          period: "Aug 2019 – Mar 2020",
          bullets: [
            "Led design direction across UX, UI, and eCommerce builds. Clients included Goodlife Health Clubs, Gillette, DNA Connect.",
            "Owned projects end-to-end — from pitch through delivery.",
          ],
        },
        {
          title: "Senior Art Director",
          company: "CHE Proximity",
          location: "Sydney, Australia",
          period: "Jan 2019 – Aug 2019",
          bullets: [
            "Led creative across digital pitches and branding projects. Clients included American Express, Samsung, ING.",
          ],
        },
        {
          title: "Senior Art Director",
          company: "Equipe",
          location: "Zurich, Switzerland",
          period: "Jun 2016 – Apr 2018",
          bullets: [
            "Multi-language, multinational campaigns for Heineken, UBS, Swiss Post, Zurich Insurance.",
            "Managed large cross-functional design projects and pitch work.",
          ],
        },
        {
          title: "Art Director — Early Career",
          company: "Droga5 · Clemenger BBDO · Leo Burnett · Grey",
          location: "Australasia & Germany",
          period: "2011 – 2016",
          bullets: [
            "Art Director at some of the most awarded agencies in the world, working across Australasia and Germany on brand, digital, and product campaigns.",
          ],
        },
      ],
    },
    awards: {
      heading: "Awards & Recognition",
      body: "Awarded at Cannes Lions, D&AD, The One Show, The Webby Awards, New York Festivals, Deutscher Design Club, AXIS Awards, and AWARD Awards — spanning product design, digital, and advertising.",
    },
    education: {
      heading: "Education",
      items: [
        { title: "UX Upskill", institution: "Hyper Island", location: "Karlskrona, Sweden", period: "2021 – 2022" },
        { title: "Diploma in Creative Advertising", institution: "Media Design School", location: "Auckland, New Zealand", period: "2010" },
        { title: "Diploma in Television Production", institution: "Otago School of Media", location: "Dunedin, New Zealand", period: "2008" },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { label: "Design Tools", items: "Figma, FigJam, Adobe CC, Sketch, MUI" },
        { label: "UX & Research", items: "User interviews, usability testing, journey mapping, wireframing, design systems, UX writing" },
        { label: "Systems & Frontend", items: "Design tokens, component libraries, AI-augmented workflows, design-to-dev alignment, CSS logic, Storybook" },
        { label: "Other", items: "Agile, Jira, Confluence, Notion, PostHog, stakeholder workshops, technical discovery" },
      ],
    },
    languages: {
      heading: "Languages",
      items: [
        { lang: "English", level: "Native" },
        { lang: "German", level: "B1 (TELC Certificate)" },
      ],
    },
  },
  de: {
    pageTitle: "Lebenslauf",
    downloadLabel: "PDF herunterladen",
    downloadHref: "/Jono Fox Lebenslauf - Deutsch.pdf",
    switchLabel: "Read in English",
    switchHref: "/en/resume",
    contact: {
      location: "Herxheim, Deutschland",
      availability: "Remote — offen für persönliche Stellen in Deutschland",
      email: "jonathanlouisfox@gmail.com",
      linkedin: "linkedin.com/in/jonofox",
      linkedinHref: "https://www.linkedin.com/in/jonofox/",
      portfolio: "jonofox.com",
      portfolioHref: "https://jonofox.com",
    },
    summary: {
      heading: "Profil",
      body: "Produktdesigner mit sechs Jahren in der Produktgestaltung und neun Jahren davor als Art Director. Schwerpunkte: Developer Experience, Designsysteme und komplexe technische Abläufe, die sich zugänglich anfühlen, ohne an Tiefe zu verlieren. Ich habe an Enterprise-Datenbanktools, regulierten Fintech-Plattformen und Recruiting-Infrastruktur gearbeitet — immer dort, wo das Problem noch unklar ist und das Herausarbeiten Teil der Aufgabe ist. Zuletzt habe ich eine KI-Referenzebene in ein Designsystem eingebaut, die es KI-Tools ermöglicht, spezifikationskonforme UI ohne manuelle Korrekturen zu generieren. Offen für Senior-IC- und Design-Leadership-Rollen, remote oder in Person in Deutschland.",
    },
    experience: {
      heading: "Berufserfahrung",
      roles: [
        {
          title: "Principal Product Designer",
          company: "Aerospike",
          location: "Remote",
          period: "Okt 2025 – Heute",
          bullets: [
            "Verantwortlich für das Design der gesamten Aerospike Cloud Plattform — Cluster-Provisionierung, Observability-Dashboards und Admin-Tools über AWS, GCP und Azure.",
            "Aufbau einer strukturierten KI-Referenzebene im Designsystem, die es KI-Tools ermöglicht, spezifikationskonforme UI ohne manuelle Korrekturen zu generieren.",
            "Enge Zusammenarbeit mit Engineering und Produkt zur Definition von UX-Strategie und Scope für Multi-Cloud-Developer-Tools.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Aerospike",
          location: "Remote",
          period: "Feb 2025 – Okt 2025",
          bullets: [
            "Gestaltung der kompletten Aerospike Cloud Erfahrung — von einem Provisionierungsflow, der Cluster in unter 90 Sekunden in Betrieb nimmt, bis zu Observability-Dashboards.",
            "Verbesserung der Aufgaben-Erfolgsrate um 32 % durch Nutzertests und iterative Optimierung der Abläufe.",
            "Komplexe verteilte Systemlogik in intuitive UI-Muster übersetzt, in enger Zusammenarbeit mit Backend- und Plattform-Engineering.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Workwise",
          location: "Karlsruhe, Deutschland",
          period: "Apr 2023 – Jan 2025",
          note: "intern als Expert Product Designer geführt",
          bullets: [
            "Leitung des Designs für kandidatenseitige und interne Plattformen, Einführung einer neuen UX-Strategie und eines einheitlichen Designsystems von Grund auf.",
            "Überarbeitung der Figma-Komponentenbibliothek und Storybook-Integration — deutliche Verbesserung der Design-to-Dev-Übergabe.",
            "Usability-Testing-Zyklen, die direkt die Produktpriorisierung beeinflusst haben.",
          ],
        },
        {
          title: "Senior Product Designer (Team Lead)",
          company: "Sygnum Bank",
          location: "Zürich, Schweiz",
          period: "Apr 2022 – Mär 2023",
          bullets: [
            "Erster Produktdesigner bei der weltweit ersten regulierten Krypto-Bank — Aufbau von Teamprozessen, Design-Tooling und Feedback-Kultur von Grund auf.",
            "Entwicklung eines plattformübergreifenden Designsystems und UI/UX für institutionelle und private Kunden.",
            "Vereinfachung komplexer Blockchain-Abläufe für eine breitere Nutzung — ohne die Tiefe für Experten zu verlieren.",
          ],
        },
        {
          title: "Senior Conceptual Designer",
          company: "Publicis",
          location: "Zürich, Schweiz",
          period: "Aug 2020 – Mär 2022",
          bullets: [
            "Art Direction, UI/UX und visuelle Strategie für UBS über mehrere Produktlinien.",
            "Leitung von Konzepten, Prototypen und Kampagnen über mehrere Teams hinweg.",
          ],
        },
        {
          title: "Creative Lead",
          company: "Matter Design",
          location: "Sydney, Australien",
          period: "Aug 2019 – Mär 2020",
          bullets: [
            "Leitung von UX-, UI- und E-Commerce-Projekten. Kunden: Goodlife Health Clubs, Gillette, DNA Connect.",
            "Projekte von der Idee bis zur Umsetzung verantwortet.",
          ],
        },
        {
          title: "Senior Art Director",
          company: "CHE Proximity",
          location: "Sydney, Australien",
          period: "Jan 2019 – Aug 2019",
          bullets: [
            "Leitung von digitalen Kampagnen und Markenprojekten. Kunden: American Express, Samsung, ING.",
          ],
        },
        {
          title: "Senior Art Director",
          company: "Equipe",
          location: "Zürich, Schweiz",
          period: "Jun 2016 – Apr 2018",
          bullets: [
            "Internationale Kampagnen für Heineken, UBS, Swiss Post, Zurich Insurance.",
            "Leitung von großen, funktionsübergreifenden Designprojekten.",
          ],
        },
        {
          title: "Art Director — Frühe Karriere",
          company: "Droga5 · Clemenger BBDO · Leo Burnett · Grey",
          location: "Australien, Neuseeland & Deutschland",
          period: "2011 – 2016",
          bullets: [
            "Art Director in einigen der renommiertesten Agenturen weltweit — Marken-, Digital- und Produktkampagnen in Australien, Neuseeland und Deutschland.",
          ],
        },
      ],
    },
    awards: {
      heading: "Auszeichnungen",
      body: "Ausgezeichnet bei Cannes Lions, D&AD, The One Show, The Webby Awards, New York Festivals, Deutscher Design Club, AXIS Awards und AWARD Awards — in Produktdesign, Digital und Werbung.",
    },
    education: {
      heading: "Ausbildung",
      items: [
        { title: "UX Upskill", institution: "Hyper Island", location: "Karlskrona, Schweden", period: "2021 – 2022" },
        { title: "Diploma in Creative Advertising", institution: "Media Design School", location: "Auckland, Neuseeland", period: "2010" },
        { title: "Diploma in Television Production", institution: "Otago School of Media", location: "Dunedin, Neuseeland", period: "2008" },
      ],
    },
    skills: {
      heading: "Fähigkeiten",
      groups: [
        { label: "Design-Tools", items: "Figma, FigJam, Adobe CC, Sketch, MUI" },
        { label: "UX & Recherche", items: "Nutzerinterviews, Usability-Tests, Journey Mapping, Wireframing, Designsysteme, UX Writing" },
        { label: "Systeme & Frontend", items: "Design Tokens, Komponentenbibliotheken, KI-gestützte Workflows, Zusammenarbeit mit Entwicklern, CSS-Logik, Storybook" },
        { label: "Weitere Kenntnisse", items: "Agile, Jira, Confluence, Notion, PostHog, Workshops, Technische Analyse" },
      ],
    },
    languages: {
      heading: "Sprachen",
      items: [
        { lang: "Englisch", level: "Muttersprache" },
        { lang: "Deutsch", level: "B1 (TELC-Zertifikat)" },
      ],
    },
  },
} as const;

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="min-h-screen bg-surface">
      {/* Page header — pt-44 matches the rest of the site's nav offset */}
      <div className="border-b border-surface-muted bg-surface-light pt-44">
        <div className="max-w-4xl mx-auto px-6 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-2">
              Jono Fox
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
              {c.pageTitle}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={c.switchHref}
              className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors border-b border-transparent hover:border-ink pb-0.5"
            >
              {c.switchLabel}
            </Link>
            <ButtonAnchor href={c.downloadHref} variant="outline" download>
              {c.downloadLabel}
            </ButtonAnchor>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_280px] gap-16">

        {/* Main column */}
        <div className="space-y-14">

          {/* Summary */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-teal" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-teal uppercase">
                {c.summary.heading}
              </h2>
            </div>
            <p className="text-ink-secondary leading-relaxed">{c.summary.body}</p>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-0.5 bg-teal" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-teal uppercase">
                {c.experience.heading}
              </h2>
            </div>
            <div className="space-y-10">
              {c.experience.roles.map((role, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-display font-semibold text-ink text-lg leading-snug">
                      {role.title}
                    </h3>
                    <span className="text-sm text-ink-disabled whitespace-nowrap shrink-0">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-sm text-ink-secondary mb-1">
                    {role.company}
                    {role.location ? ` — ${role.location}` : ""}
                  </p>
                  {"note" in role && role.note && (
                    <p className="text-xs text-ink-disabled italic mb-3">{role.note}</p>
                  )}
                  <ul className="space-y-1.5 mt-3">
                    {role.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-ink-secondary leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-teal shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-teal" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-teal uppercase">
                {c.awards.heading}
              </h2>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed">{c.awards.body}</p>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="space-y-10">

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-fox" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-fox uppercase">
                Contact
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-ink">{c.contact.location}</p>
              <p className="text-ink-secondary">{c.contact.availability}</p>
              <a
                href={`mailto:${c.contact.email}`}
                className="block text-teal hover:text-teal-hover transition-colors"
              >
                {c.contact.email}
              </a>
              <a
                href={c.contact.linkedinHref}
                target="_blank"
                rel="me noopener noreferrer"
                className="block text-teal hover:text-teal-hover transition-colors"
              >
                {c.contact.linkedin}
              </a>
              <a
                href={c.contact.portfolioHref}
                className="block text-teal hover:text-teal-hover transition-colors"
              >
                {c.contact.portfolio}
              </a>
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-fox" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-fox uppercase">
                {c.skills.heading}
              </h2>
            </div>
            <div className="space-y-4">
              {c.skills.groups.map((group, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold text-ink mb-1">{group.label}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed">{group.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-fox" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-fox uppercase">
                {c.education.heading}
              </h2>
            </div>
            <div className="space-y-4">
              {c.education.items.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-ink leading-snug">{item.title}</p>
                  <p className="text-sm text-ink-secondary">{item.institution}</p>
                  <p className="text-xs text-ink-disabled">{item.location} · {item.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-fox" />
              <h2 className="font-display text-xs font-semibold tracking-widest text-fox uppercase">
                {c.languages.heading}
              </h2>
            </div>
            <div className="space-y-2">
              {c.languages.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="font-medium text-ink">{item.lang}</span>
                  <span className="text-ink-secondary">{item.level}</span>
                </div>
              ))}
            </div>
          </section>

        </aside>
      </div>
    </div>
  );
}
