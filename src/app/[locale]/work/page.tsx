import type { Metadata } from "next";
import Link from "next/link";
import { ButtonAnchor } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Work",
  description: "Product design case studies in developer tools, design systems, fintech, and enterprise B2B. Aerospike database, Sygnum digital assets bank, Goodlife Health Clubs, and more.",
};

const caseStudies = [
  {
    tag: "AEROSPIKE",
    title: "Depth when you want it. Safety when you don't.",
    body: "A provisioning flow that lets teams launch Aerospike clusters in under 90 seconds, with safe defaults or deep configuration, and clear guidance and guardrails throughout.",
    cta: "View case study",
    href: "/work/aerospike-provisioning",
    gradient: "linear-gradient(135deg, #E0F5F2 0%, #2A9D8F22 100%)",
  },
  {
    tag: "AEROSPIKE",
    title: "The aha moment shouldn't take three days",
    body: "Led end-to-end design of Aerospike's first visual developer tool. A guided path from connection to confidence, with a foundation built for AI-assisted workflows.",
    cta: "View case study",
    href: "/work/aerospike-voyager",
    gradient: "linear-gradient(135deg, #ECEBFA 0%, #5A4FCF22 100%)",
  },
  {
    tag: "MULTIPLE COMPANIES",
    title: "A design system designers, engineers, and AI tools all follow",
    body: "Built systems from scratch across three companies, with a documentation layer at Aerospike that makes AI-generated output system-consistent by default.",
    cta: "View case study",
    href: "/work/design-systems",
    gradient: "linear-gradient(135deg, #FFF2E0 0%, #F57C0022 100%)",
  },
  {
    tag: "SYGNUM BANK",
    title: "No one should have to call their bank just to check their balance",
    body: "At the world's first regulated digital asset bank, clients had to call their account manager just to check their balance. I designed the dashboard that changed that.",
    cta: "View case study",
    href: "/work/sygnum",
    image: "/case-studies/sygnum/sygnum-digital-assets-dashboard-hero.png",
    gradient: "linear-gradient(135deg, #E3F2FD 0%, #1976D222 100%)",
  },
  {
    tag: "GOODLIFE HEALTH CLUBS",
    title: "Replacing lock-in anxiety with sign-up confidence",
    body: "Redesigned Goodlife's membership sign-up flow to make contracts clear, choices understandable, and commitment something people felt good about.",
    cta: "View case study",
    href: "/work/goodlife",
    gradient: "linear-gradient(135deg, #FCE4EC 0%, #E91E6322 100%)",
  },
];

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <div className="pt-44">
      <div className="max-w-6xl mx-auto px-6 pb-24">
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
            <Link
              key={i}
              href={lp(cs.href)}
              className="group grid md:grid-cols-[1fr_320px] gap-8 items-center p-8 rounded-2xl border border-surface-muted hover:border-teal/30 hover:bg-teal-subtle/20 transition-all duration-200 block"
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
                <span className="inline-block text-sm font-medium text-teal group-hover:text-teal-hover transition-colors">
                  {cs.cta} →
                </span>
              </div>

              {/* Card image */}
              <div
                className="hidden md:block aspect-video rounded-xl overflow-hidden"
                style={{ background: cs.gradient ?? "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)" }}
              >
                {cs.image && (
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover object-top" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 text-white relative overflow-hidden" style={{ background: "#1F2D3D" }}>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-fox/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl font-bold mb-4">
            Let's <span className="text-teal">talk</span>
          </h2>
          <p className="text-ink-disabled mb-8">
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

