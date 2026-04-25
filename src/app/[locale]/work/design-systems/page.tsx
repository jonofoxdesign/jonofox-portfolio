import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  description: "Building design systems across three companies — and extending them into an instruction layer for AI-assisted workflows.",
};

export default function DesignSystemsPage() {
  return (
    <CaseStudyLayout
      tag="Sygnum · Workwise · Aerospike"
      title={<>A design system designers, engineers,<br />and AI tools all follow</>}
      intro="I've built and evolved design systems across multiple organisations. Three stand out: a regulated Swiss digital asset bank, a recruiting platform that had grown fast enough to make a mess of itself, and an enterprise database company. Different teams, different constraints, same underlying problem: a lack of shared understanding. At Aerospike, I extended the system further to include a documentation layer that AI tools like Claude, Cursor, and Codex can use to generate output that's system-consistent by default."
      meta={{
        company: "Sygnum, Workwise, Aerospike",
        product: "Design systems + AI instruction layer",
        year: "2019–2026",
        role: "Design lead / Design system owner",
        scope: "Foundation through adoption",
        collaboration: "Front-end engineers, product, engineering leads",
      }}
    >
      <Section heading="The shared problem">
        <p>At Sygnum there were nine different design styles across separate CSS repositories. At Workwise, early decisions had stopped scaling. At Aerospike, multiple teams were about to start building without anything shared to build from.</p>
        <p>The pattern was the same every time: inconsistent UI across teams, multiple versions of the same component, local decisions without shared standards, new people not knowing what good looked like. It wasn&apos;t that there weren&apos;t components. It was that nobody agreed on them.</p>
      </Section>

      <ImagePlaceholder label="Before/after — UI consistency at one of the three companies" />

      <Section heading="My role">
        <p>Across all three projects, I owned the design system from definition through adoption. At Sygnum and Aerospike, I was the first designer hired and defined standards from scratch, working directly with front-end engineers. At Workwise, I stabilised and evolved a system that had grown organically.</p>
        <p>In all cases, I defined system architecture with engineering input, owned design decisions and contribution rules, and partnered closely with front-end engineers day-to-day.</p>
      </Section>

      <Section heading="The real challenge">
        <p>Building components was the easy bit. The harder part was aligning design intent in Figma with production reality in code, and figuring out how decisions actually get made across people and process.</p>
        <p>At Aerospike there was a fourth challenge none of us had dealt with before: AI tools were generating UI and prototypes alongside the team. A system designed for humans wasn&apos;t legible to machines. That had to change too.</p>
        <p>At Sygnum and Aerospike, I based the system on Material UI: a deliberate tradeoff for accessibility defaults, proven interaction patterns, and faster alignment with engineering. We adapted the visual layer to match the product instead of rebuilding everything from scratch.</p>
      </Section>

      <ImagePlaceholder label="Token architecture — colour, typography, spacing" />

      <Section heading="What I systematised">
        <p>I focused on the parts that created the most friction between teams: tokens as the foundation (colour, typography, spacing, layout — defined once, mapped between design and code), components with clear states and behaviours built with accessibility from the start, contribution rules that made it clear how the system evolved, and documentation that explained decisions — not just what to use, but why it existed and when.</p>
        <p>At Aerospike, I extended the documentation into a structured markdown layer that defines tokens and their purpose, component usage and constraints, design principles with reasoning, and contribution logic. This became a shared instruction layer that Claude, Cursor, and Codex can use to generate system-aligned output.</p>
      </Section>

      <ImagePlaceholder label="Figma → Code → Markdown → AI — the connected loop" />

      <Section heading="A connected ecosystem">
        <p>The system evolved from a set of assets into a loop: Figma captures design intent → code holds production components → the markdown layer defines system logic and guidance → AI tools generate UI using those rules.</p>
        <p>Decisions get encoded once and reused across every layer. That speeds things up, but it also means inconsistency scales fast when rules aren&apos;t clear. That&apos;s what the contribution rules and review process manage.</p>
      </Section>

      <Section heading="Outcomes">
        <p>Across all three systems, components were reused consistently, design and engineering rework went down, and the systems stayed in place beyond my involvement. Stakeholders gained confidence in UI decisions and delivery became more predictable.</p>
        <p>None of these were perfect systems. They were solid enough that teams kept using them and building on top of them without needing to start over. That&apos;s what I was aiming for.</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Design systems need maintenance, conversation, and evolution. The work doesn&apos;t stop at launch. It just becomes a different kind of work.</p>
        <p>What I find interesting now is that the surface area is changing. Systems aren&apos;t just component libraries anymore. They&apos;re becoming the shared language between design, engineering, and the AI tools building alongside the team. Keeping that consistent across all three is a harder and more interesting version of the same problem. That&apos;s the work I&apos;m most interested in.</p>
      </Section>
    </CaseStudyLayout>
  );
}
