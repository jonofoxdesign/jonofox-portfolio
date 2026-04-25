import Link from "next/link";
import { ButtonAnchor } from "@/components/ui/Button";

const roles = [
  { company: "Aerospike", title: "Principal Product Designer", years: "2023 – Now" },
  { company: "Workwise", title: "Expert Product Designer", years: "2022 – 2023" },
  { company: "Sygnum Bank", title: "Senior Product Designer / Team Lead", years: "2021 – 2022" },
  { company: "Publicis", title: "Senior Conceptual Designer", years: "2018 – 2021" },
];

const awards = [
  "Cannes Lions", "The Webby Awards", "D&AD", "The One Show",
  "New York Festivals", "Deutscher Design Club", "AWARD Awards", "AXIS Awards",
];

const skills = {
  howIThink: ["Deep focus", "Systems thinking", "Decision driven", "Asks 'Why' a lot", "Pattern recognition", "Team mentoring"],
  whatIDo: ["DevEx design", "Scalable design systems", "Figma libraries", "AI-augmented workflows", "Product strategy", "User research"],
  howIWork: ["Feedback friendly", "Problem-first", "Shares early", "Human-centered", "Cuts complexity", "Pragmatic polish"],
};

const values = [
  {
    title: "Keep a learning mindset",
    body: "I stay curious, test assumptions, and aim to grow with every project.",
  },
  {
    title: "Find creative solutions to complexity",
    body: "I love that moment when everything clicks into place.",
  },
  {
    title: "Ask 'how can this be more fun?'",
    body: "Small sparks of delight matter. I try to build them in without getting in the way of clarity or usability.",
  },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const contactHref = `/${locale}/contact`;

  return (
    <div className="pt-44">
      <div className="max-w-6xl mx-auto px-6 pb-24">

        {/* Hero */}
        <div className="max-w-3xl mb-24">
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-8">
            I think clearly, design carefully,{" "}
            <span className="text-teal">and ship</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6">
            I spent nine years as an Art Director in advertising, at Droga5, Clemenger BBDO,
            Grey, and others. That&apos;s where I learned how to make complicated things clear,
            compelling, and human. I moved into product design in 2019 because I wanted to
            work closer to the actual thing being built.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6">
            Since then, I&apos;ve worked across industries helping teams simplify complexity,
            improve developer experience, and scale systems that hold up over time. I&apos;m
            now a Principal Product Designer, often working on problems where direction is
            still forming and alignment matters as much as execution.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-10">
            I believe great product design is about helping others do their best work. That
            means building tools and systems that are durable, clear, and calm under pressure.
            It also means knowing when to subtract rather than add.
          </p>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-ink transition-colors border-b border-teal/40 hover:border-ink/40 pb-0.5"
          >
            Get in touch →
          </Link>
        </div>

        {/* Roles + Awards */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-syne text-2xl font-bold text-ink mb-8">Recent roles</h2>
            <div className="space-y-6 mb-10">
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
            <div className="flex flex-wrap gap-4">
              <ButtonAnchor
                href="https://drive.google.com/drive/folders/1W-wVnS8RzMKucIRXi-ASznmiOAx8ZqEX?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                variant="teal"
              >
                Download CV
              </ButtonAnchor>
              <ButtonAnchor
                href="https://www.linkedin.com/in/jonofox/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Connect on LinkedIn
              </ButtonAnchor>
            </div>
          </div>

          <div>
            <h2 className="font-syne text-2xl font-bold text-ink mb-8">
              Awards &amp; <span className="text-fox">recognition</span>
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {awards.map((award) => (
                <p key={award} className="text-sm text-ink-secondary">{award}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24">
          <h2 className="font-syne text-2xl font-bold text-ink mb-10">
            Skills &amp; <span className="text-teal">strengths</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">How I think</p>
              <div className="flex flex-wrap gap-2">
                {skills.howIThink.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-surface-muted text-xs text-ink-secondary">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">What I do</p>
              <div className="flex flex-wrap gap-2">
                {skills.whatIDo.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-teal-subtle text-xs text-teal">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-4">How I work</p>
              <div className="flex flex-wrap gap-2">
                {skills.howIWork.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-surface-muted text-xs text-ink-secondary">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-syne text-2xl font-bold text-ink mb-10">
            Design <span className="text-fox">values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="space-y-3">
                <div className="w-8 h-0.5 bg-gradient-accent" />
                <h3 className="font-syne font-semibold text-ink">{v.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
