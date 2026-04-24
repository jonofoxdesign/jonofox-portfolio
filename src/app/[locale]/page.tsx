
import Link from "next/link";
import { AnimatedButton, AnimatedTextLink } from "@/components/ui/AnimatedLink";


const workCards = [
  {
    tag: "AEROSPIKE",
    title: "Depth when you want it. Safety when you don't.",
    body: "A provisioning flow that lets teams launch Aerospike clusters in under 90 seconds, with safe defaults or deep configuration, and clear guidance and guardrails throughout.",
    cta: "View case study",
    href: "/work/aerospike-provisioning",
    gradient: "from-teal-subtle to-surface-light",
  },
  {
    tag: "AEROSPIKE",
    title: "The aha moment shouldn't take three days",
    body: "Led end-to-end design of Aerospike's first visual developer tool. A guided path from connection to confidence, with a foundation built for AI-assisted workflows.",
    cta: "View case study",
    href: "/work/aerospike-voyager",
    gradient: "from-fox-subtle to-surface-light",
  },
  {
    tag: "MULTIPLE COMPANIES",
    title: "A design system designers, engineers, and AI tools all follow",
    body: "Built systems from scratch across three companies, with a documentation layer at Aerospike that makes AI-generated output system-consistent by default.",
    cta: "Explore the systems",
    href: "/work/design-systems",
    gradient: "from-teal-subtle to-fox-subtle",
  },
  {
    tag: "SYGNUM BANK",
    title: "No one should have to call their bank just to check their balance",
    body: "At the world's first regulated digital asset bank, clients had to call their account manager just to check their balance. I designed the dashboard that changed that.",
    cta: "See the project",
    href: "/work/sygnum",
    gradient: "from-surface-muted to-surface-light",
  },
];

const testimonials = [
  {
    quote:
      "Jono has consistently demonstrated strategic impact that goes beyond his role, excelling in design while driving project leadership and cross-functional alignment.",
    name: "Evan Cummack",
    title: "Chief Product Officer, Aerospike",
  },
  {
    quote:
      "Jono brought a clear uplift in both aesthetics and UX. Even in chaotic times, I could always rely on his smart prioritization and ability to balance different stakeholders.",
    name: "Gino Weiss",
    title: "Senior Product Manager, Workwise",
  },
  {
    quote:
      "Jono has one of those minds that sees things differently, producing unique outcomes no matter the complexity of the requirement.",
    name: "Ash Durham",
    title: "Lead Developer, Matter Design",
  },
  {
    quote:
      "Jono's leadership built an atmosphere where the team felt motivated and supported. His strong UI/UX expertise helped us design a system that worked better every day for both designers and developers.",
    name: "Iryna Melnykova",
    title: "Product Designer, Sygnum",
  },
  {
    quote:
      "Working with Jono was one of the greatest gains for our team. He combined exceptional design skills with a strategic mindset and always knew exactly what the squad needed at the right time.",
    name: "Samuel Fleck",
    title: "Product Manager, Workwise",
  },
  {
    quote:
      "Jono successfully established a strong foundation for product design, demonstrating exceptional skill and vision, and will be key in elevating the user and developer experience as we grow.",
    name: "Nicholas Naraja",
    title: "Brand Design Lead, Aerospike",
  },
];

const logos = [
  "Aerospike", "Sygnum", "UBS", "Workwise", "Netflix",
  "Heineken", "Goodlife", "Gillette", "Swiss Post", "American Express",
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

export default function HomePage() {
  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background grid + blobs */}
        <div className="absolute inset-0 bg-[image:repeating-linear-gradient(0deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,#E5E7EB_79px,#E5E7EB_80px)] opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-fox/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-36 pb-24">
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
              <AnimatedButton
                href="/work"
                className="px-6 py-3 rounded-lg bg-fox text-white font-medium font-syne hover:bg-fox-hover transition-colors"
              >
                See my work
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                className="gradient-border px-6 py-3 rounded-lg font-medium font-syne text-ink hover:text-teal transition-colors"
              >
                Get in contact
              </AnimatedButton>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center md:justify-end group">
            {/* B&W — default */}
            <img
              src="/hero-bw.png"
              alt="Jono Fox"
              className="w-72 md:w-full max-w-md rounded-2xl transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* Colour — revealed on hover */}
            <img
              src="/hero-color.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-72 md:w-full max-w-md rounded-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 mx-auto md:ml-auto md:mx-0"
            />
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="py-12 border-y border-surface-muted">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest text-ink-disabled text-center mb-8 uppercase">
            Worked with teams at:
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logos.map((logo) => (
              <span key={logo} className="text-sm font-medium text-ink-disabled">
                {logo}
              </span>
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
            <AnimatedTextLink
              href="/about"
              className="text-base font-medium font-syne text-teal hover:text-teal-hover transition-colors"
            >
              Learn more about me →
            </AnimatedTextLink>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16">
            Featured <span className="text-fox">work</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workCards.map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-8 flex flex-col gap-4 group`}
              >
                <span className="text-xs font-semibold tracking-widest text-ink-disabled uppercase">
                  {card.tag}
                </span>
                <h3 className="font-syne font-bold text-xl text-ink leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="text-sm font-medium text-teal group-hover:text-teal-hover transition-colors"
                >
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-syne text-4xl font-bold text-ink mb-16 text-center">
            In their <span className="text-teal">own words</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="space-y-4">
                <p className="text-sm text-ink-secondary leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-disabled">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-inverse text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl font-bold mb-4">
            Let's <span className="text-fox">talk</span>
          </h2>
          <p className="text-ink-disabled mb-8 leading-relaxed">
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
