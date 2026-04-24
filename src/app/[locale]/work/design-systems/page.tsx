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
        <p>At Sygnum, there were nine different design styles across separate CSS repositories. At Workwise, early decisions stopped scaling. At Aerospike, multiple teams were about to build without any shared foundation.</p>
        <p>Different companies, same pattern: inconsistent UI patterns across teams, multiple versions of the same component, local decisions without shared standards, and new team members unsure what good looked like. The problem wasn&apos;t a lack of components. It was a lack of shared understanding.</p>
      </Section>

      <ImagePlaceholder label="Before/after — UI consistency at one of the three companies" />

      <Section heading="My role">
        <p>Across all three projects, I owned the design system from definition through adoption. At Sygnum and Aerospike, I was the first designer hired and defined standards from scratch, working directly with front-end engineers. At Workwise, I stabilised and evolved a system that had grown organically.</p>
        <p>In all cases, I defined system architecture with engineering input, owned design decisions and contribution rules, and partnered closely with front-end engineers day-to-day.</p>
      </Section>

      <Section heading="The real challenge">
        <p>The hard part wasn&apos;t building components. It was aligning three things at once: design intent in Figma, production reality in code, and how decisions are made across people and process.</p>
        <p>At Aerospike, there was a fourth challenge none of us had dealt with before — AI tools generating UI and prototypes alongside the team. A system designed for humans wasn&apos;t legible to machines. That had to change too.</p>
        <p>At Sygnum and Aerospike, I based the system on Material UI: a deliberate tradeoff for accessibility defaults, proven interaction patterns, and faster alignment with engineering. We adapted the visual layer to match the product instead of rebuilding everything from scratch.</p>
      </Section>

      <ImagePlaceholder label="Token architecture — colour, typography, spacing" />

      <Section heading="What I systematised">
        <p>I focused on the parts that created the most friction between teams: tokens as the foundation (colour, typography, spacing, layout — defined once, mapped between design and code), components with clear states and behaviours built with accessibility from the start, contribution rules that made it clear how the system evolved, and documentation that explained decisions — not just what to use, but why it existed and when.</p>
        <p>At Aerospike, I extended the documentation into a structured markdown layer that defines tokens and their purpose, component usage and constraints, design principles with reasoning, and contribution logic. This became a shared instruction layer that Claude, Cursor, and Codex can use to generate system-aligned output.</p>
      </Section>

      <ImagePlaceholder label="Figma → Code → Markdown → AI — the connected loop" />

      <Section heading="A connected ecosystem">
        <p>The system evolved from a set of assets into a loop: Figma captures design intent and exploration → code (monorepo) holds production components → the markdown layer defines system logic and guidance → AI tools generate UI and prototypes using those rules.</p>
        <p>Instead of a handoff, decisions are encoded once and reused across every layer. Speed increases — and so does the risk of inconsistency. Clear rules manage that. Existing coded components can be used freely, new components require review, and generated output must map back to system tokens and components.</p>
      </Section>

      <Section heading="Outcomes">
        <p>Across all three systems, components were reused consistently, design and engineering rework was reduced, and the systems remained in place beyond my involvement. Stakeholders gained confidence in UI decisions and delivery became more predictable.</p>
        <p>These weren&apos;t perfect systems. They were stable enough to support growth.</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Design systems sit between rules and judgment. They need maintenance, conversation, and evolution — not just at launch.</p>
        <p>What&apos;s changing now is the surface area. Systems are no longer just component libraries. They&apos;re becoming infrastructure for product teams, shared language between design and engineering, and instruction layers for AI-assisted workflows. The challenge is no longer just consistency across people — it&apos;s consistency across designers, engineers, and the tools helping build the product. That&apos;s the work I&apos;m most interested in.</p>
      </Section>
    </CaseStudyLayout>
  );
}
