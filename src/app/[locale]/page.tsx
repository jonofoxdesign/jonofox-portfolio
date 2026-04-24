
import Link from "next/link";
import { ButtonLink, ButtonAnchor, TextLink } from "@/components/ui/Button";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

const workCards = [
  {
    tag: "AEROSPIKE",
    title: "Depth when you want it. Safety when you don't.",
    body: "A provisioning flow that lets teams launch Aerospike clusters in under 90 seconds, with safe defaults or deep configuration, and clear guidance and guardrails throughout.",
    cta: "View case study",
    href: "/work/aerospike-provisioning",
  },
  {
    tag: "AEROSPIKE",
    title: "The aha moment shouldn't take three days",
    body: "Led end-to-end design of Aerospike's first visual developer tool. A guided path from connection to confidence, with a foundation built for AI-assisted workflows.",
    cta: "View case study",
    href: "/work/aerospike-voyager",
  },
  {
    tag: "MULTIPLE COMPANIES",
    title: "A design system designers, engineers, and AI tools all follow",
    body: "Built systems from scratch across three companies, with a documentation layer at Aerospike that makes AI-generated output system-consistent by default.",
    cta: "View case study",
    href: "/work/design-systems",
  },
];


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

const pillars = [
  {
    title: "Design systems that designers, engineers, and AI tools can trust",
    body: "I build design systems as shared infrastructure. Tokens, components, contribution rules, and documentation. At Aerospike, I extended that into a structured layer that AI tools use to generate system-aligned output. The system holds whether a human or a machine is building from it.",
  },
  {
    title: "Make developer tools feel approachable without dumbing them down",
    body: "Developer tools usually fail in one of two ways. They're either too simple to trust, or too complex to move through. I design for the space in between. Experts get deep control when they need it, and newcomers have a clear path forward without needing a manual.",
  },
  {
    title: "The details are what really matter",
    body: "I pay attention to the parts users notice without knowing why. The edge case handled gracefully, the label that doesn't need explaining, the transition that feels right. Those small moments add up into something that feels finished and trustworthy.",
  },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:repeating-linear-gradient(0deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px)] opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-fox/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-44 pb-24">
          <div>
            <h1 className="font-syne text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
              I design{" "}
              <span className="text-teal italic">complex</span>{" "}
              tools that feel{" "}
              <span className="text-fox">clear</span>
            </h1>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-lg">
              Principal product designer for developer tools and complex systems.
              I help engineering teams ship products people actually understand.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={lp("/work")} variant="primary">
                See my work
              </ButtonLink>
              <ButtonLink href={lp("/contact")} variant="outline">
                Get in contact
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
          Worked with teams at:

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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16">
            What I do <span className="text-teal">best</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
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
            <TextLink href={lp("/about")}>Learn more about me →</TextLink>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16">
            Featured <span className="text-fox">work</span>
          </h2>
          <div className="space-y-4">
            {workCards.map((card, i) => (
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
                  <p className="text-sm text-ink-secondary leading-relaxed max-w-lg">
                    {card.body}
                  </p>
                  <span className="inline-block text-sm font-medium text-teal group-hover:text-teal-hover transition-colors">
                    {card.cta} →
                  </span>
                </div>
                <div className="hidden md:flex aspect-video rounded-xl bg-surface-muted items-center justify-center text-ink-disabled text-xs">
                  Case study image
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialCarousel />
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
            Let's <span className="text-fox">talk</span>
          </h2>
          <p className="text-ink-disabled mb-8 leading-relaxed">
            Seen something that resonates? I'm open to the right opportunity, a
            collaboration, or a good conversation about design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
              Send an email
            </ButtonAnchor>
            <ButtonAnchor
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              Connect on LinkedIn
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
