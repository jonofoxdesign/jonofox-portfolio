import Link from "next/link";
import { useLocale } from "next-intl";

const caseStudies = [
  {
    tag: "AEROSPIKE",
    title: "Depth when you want it. Safety when you don't.",
    body: "A provisioning flow that lets teams launch Aerospike clusters in under 90 seconds, with safe defaults or deep configuration, and clear guidance and guardrails throughout.",
    cta: "View the case study",
    href: "/work/aerospike-provisioning",
  },
  {
    tag: "AEROSPIKE",
    title: "The aha moment shouldn't take three days",
    body: "Led end-to-end design of Aerospike's first visual developer tool. A guided path from connection to confidence, with a foundation built for AI-assisted workflows.",
    cta: "View the case study",
    href: "/work/aerospike-voyager",
  },
  {
    tag: "MULTIPLE COMPANIES",
    title: "A design system designers, engineers, and AI tools all follow",
    body: "Built systems from scratch across three companies, with a documentation layer at Aerospike that makes AI-generated output system-consistent by default.",
    cta: "Explore the systems",
    href: "/work/design-systems",
  },
  {
    tag: "SYGNUM BANK",
    title: "No one should have to call their bank just to check their balance",
    body: "At the world's first regulated digital asset bank, clients had to call their account manager just to check their balance. I designed the dashboard that changed that.",
    cta: "See the project",
    href: "/work/sygnum",
  },
  {
    tag: "GOODLIFE HEALTH CLUBS",
    title: "Replacing lock-in anxiety with sign-up confidence",
    body: "Redesigned Goodlife's membership sign-up flow to make contracts clear, choices understandable, and commitment something people felt good about.",
    cta: "Read the case study",
    href: "/work/goodlife",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Crafting <span className="text-teal">clarity</span> from complexity
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed">
            From database infrastructure to developer tools and design systems.
            A selection of projects where I helped teams ship faster, users get
            unstuck, and products scale with confidence.
          </p>
        </div>

        {/* Case study list */}
        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[1fr_320px] gap-8 items-center p-8 rounded-2xl border border-surface-muted hover:border-teal/30 hover:bg-teal-subtle/20 transition-all duration-200"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-widest text-ink-disabled uppercase">
                  {cs.tag}
                </span>
                <h2 className="font-syne font-bold text-2xl text-ink leading-snug">
                  {cs.title}
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-lg">
                  {cs.body}
                </p>
                <Link
                  href={cs.href}
                  className="inline-block text-sm font-medium text-teal group-hover:text-teal-hover transition-colors"
                >
                  {cs.cta} →
                </Link>
              </div>

              {/* Card image placeholder */}
              <div className="hidden md:flex aspect-video rounded-xl bg-surface-muted items-center justify-center text-ink-disabled text-xs">
                Case study image
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 bg-surface-inverse text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl font-bold mb-4">
            Let's <span className="text-teal">talk</span>
          </h2>
          <p className="text-ink-disabled mb-8">
            Seen something that resonates? I'm open to the right opportunity, a
            collaboration, or a good conversation about design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jonathanlouisfox@gmail.com"
              className="px-6 py-3 rounded-lg bg-teal text-white font-medium font-syne hover:bg-teal-hover transition-colors"
            >
              Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border px-6 py-3 rounded-lg font-medium font-syne text-white hover:text-teal transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
