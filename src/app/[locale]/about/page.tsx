import Link from "next/link";

const roles = [
  { company: "Aerospike", title: "Principal Product Designer", years: "2023 – Now" },
  { company: "Workwise", title: "Expert Product Designer", years: "2022 – 2023" },
  { company: "Sygnum Bank", title: "Senior Product Designer / Team Lead", years: "2021 – 2022" },
  { company: "Publicis", title: "Senior Conceptual Designer", years: "2018 – 2021" },
];

const awards = [
  "Cannes Lions", "The Webby Awards", "D&AD", "The One Show",
  "New York Festivals", "Deutscher Design Club", "AWWWD Awards", "A&D Awards",
];

const skills = {
  howIThink: ["Deep focus", "Systems thinking", "Decision driven", "Asks 'Why' a lot", "Pattern recognition", "Team mentoring"],
  whatIDo: ["DevEx design", "Scalable design systems", "Figma Blaster", "AI-augmented workflows", "Product strategy", "User research"],
  howIWork: ["Feedback firstly", "Problem-first", "Shares early", "Human-centered", "Cuts complexity", "Pragmatic polish"],
};

const values = [
  {
    title: "Keep a learning mindset",
    body: "I enjoy uncertainty, set out to learn, and aim to grow with every project.",
  },
  {
    title: "Find creative solutions to complexity",
    body: "I get most excited when everything clicks into place.",
  },
  {
    title: "Ask 'how can this be more fun?'",
    body: "Small sparks of delight matter. I try to build them in without getting in the way of clarity or usability.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-6 pb-24">

        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-8">
            I think clearly, design carefully,{" "}
            <span className="text-teal">and ship</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6">
            After nine years as an Art Director in advertising, where I honed storytelling,
            problem-solving, and craft, I moved into Product and Product Design to work
            closer to real outcomes for real users.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed mb-6">
            Since 2015, I have worked across industries helping teams simplify complexity,
            improve Developer Experience, and scale systems that help them do their best
            work over time. I am now a Principal Product Designer, often working on problems
            where direction is unclear and alignment matters as much as execution.
          </p>
          <p className="text-lg text-ink-secondary leading-relaxed">
            I believe great product design is about helping others do their best work.
            That means building systems and tools that are durable, intuitive, and calm
            under pressure.
          </p>
        </div>

        {/* Photos placeholder */}
        <div className="grid grid-cols-4 gap-4 mb-24">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-surface-muted flex items-center justify-center text-ink-disabled text-xs"
            >
              Photo {i}
            </div>
          ))}
        </div>

        {/* Roles + Awards */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-syne text-2xl font-bold text-ink mb-8">
              Recent roles
            </h2>
            <div className="space-y-6">
              {roles.map((role) => (
                <div key={role.company} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-semibold text-ink text-sm">{role.company}</p>
                    <p className="text-sm text-ink-secondary">{role.title}</p>
                  </div>
                  <span className="text-xs text-ink-disabled whitespace-nowrap">{role.years}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://drive.google.com/drive/folders/1W-wVnS8RzMKucIRXi-ASznmiOAx8ZqEX?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-teal text-white text-sm font-medium font-syne hover:bg-teal-hover transition-colors"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/jonofox/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-surface-muted text-sm font-medium text-ink hover:border-teal/40 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-syne text-2xl font-bold text-ink mb-8">
              Awards &amp; <span className="text-fox">recognition</span>
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {awards.map((award) => (
                <p key={award} className="text-sm text-ink-secondary">
                  {award}
                </p>
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
          <h2 className="font-syne text-2xl font-bold text-ink mb-10 text-center">
            Design <span className="text-fox">values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="space-y-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-accent-diagonal mx-auto" />
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
