import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  description: "Leading end-to-end design of Aerospike's first visual developer tool — a guided path from connection to confidence.",
};

export default function AerospikeVoyagerPage() {
  return (
    <CaseStudyLayout
      tag="Aerospike"
      title={<>The aha moment<br />shouldn&apos;t take three days</>}
      intro="Aerospike is powerful, but for a new developer it was mostly invisible. Setup was fragmented, the data model was hard to visualise, and most workflows relied on CLI tools or docs. I led the end-to-end design of Voyager — Aerospike's first visual developer tool — turning an internal prototype into a guided path from connection to confidence."
      meta={{
        company: "Aerospike",
        product: "Voyager desktop developer tool",
        year: "2025–2026",
        role: "End-to-end product designer",
        scope: "Discovery through shipped UI",
        collaboration: "Engineering, product, developer education and growth teams",
      }}
    >
      <Section heading="The problem">
        <p>Aerospike is powerful but hard to learn. New developers didn&apos;t know where to start, understanding the data model meant jumping between tools, and early exploration was mostly guesswork. The moment where things started to make sense took way too long.</p>
        <p>Other tools gave you access to the database but didn&apos;t explain it. There was no guided path from zero to actually understanding what you were looking at.</p>
      </Section>

      <ImagePlaceholder label="Voyager — main data browser UI" />

      <Section heading="My role">
        <p>I was the product designer across the entire experience, from early discovery through to shipped UI. I defined the product direction, designed the interaction model, and translated complex database concepts into something developers could reason about. I worked closely with engineering, product management, and growth and developer experience teams, staying involved through build and QA as edge cases surfaced throughout.</p>
      </Section>

      <Section heading="What I learned early">
        <p>I started with a fast discovery phase, reviewing Gong calls, internal feedback, competitor tools, and the original engineering prototype. A few things kept coming up: developers needed a clear starting point more than they needed flexibility. Seeing real data quickly mattered a lot for building confidence. And Aerospike&apos;s core concepts stayed abstract until you could see them in front of you.</p>
        <p>This pointed to the job-to-be-done: get from zero to a working prototype fast enough to validate Aerospike for a real use case.</p>
      </Section>

      <Section heading="The core design decision">
        <p>The most important decision was to design Voyager as a guided path to confidence, not just a data browser.</p>
        <p>Working with the growth PM, we defined a golden path for new users: <strong className="text-ink">Connect → Add data → See data → Inspect → Filter → Feel confident experimenting.</strong> Instead of exposing everything upfront, the product helps users move step by step toward meaningful progress.</p>
        <p>Defining this path also aligned the team. Product, growth, and engineering had different ideas about what Voyager was for. The golden path answered the question: what does success actually look like? It became the backbone of both the UX and the telemetry strategy.</p>
      </Section>

      <ImagePlaceholder label="Golden path flow — Connect → Add → See → Inspect → Filter" />

      <Section heading="Designing for complexity">
        <p>Aerospike is a NoSQL database. The data is unstructured, which makes it extremely fast but also hard to visualise. It doesn&apos;t behave like a typical JSON-based database. Records, bins, data types, expressions, and nested structures all introduce mental overhead.</p>
        <p>For data exploration, I designed expandable record views, clear separation of structure versus values, and progressive disclosure for nested data. For querying, I introduced a visual filter builder that maps UI inputs to Aerospike&apos;s Expression DSL — reducing the need to memorise syntax and letting users learn by doing. For risky operations like scans, I designed clear warnings and guardrails instead of silent failures.</p>
      </Section>

      <ImagePlaceholder label="Visual filter builder and nested record exploration" />

      <Section heading="Outcome">
        <p>Voyager v0.1 shipped as Aerospike&apos;s first visual tool for data exploration. It introduced a visual way to understand Aerospike data, a guided onboarding flow for developers starting from zero, and a foundation for AI-assisted workflows via MCP server integration.</p>
        <p>That last part matters. The guided path we designed for developers became the interface that AI tools use to explore the database. The same mental model that helps a new developer orient is now the structure that makes Aerospike legible to a machine. The UX work didn&apos;t just serve the product. It shaped what came after it.</p>
        <p>And it got developers from &quot;figure it out yourself&quot; to &quot;I actually understand what I&apos;m looking at.&quot;</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Looking back, I&apos;d push harder to define interaction constraints and technical constraints at the same time. Querying complexity, nested data, edge cases — those were easier to design for early and a lot harder to retrofit once things were already built.</p>
        <p>Building at this pace also reinforced something I already suspected: moving fast without a shared foundation creates inconsistency that compounds. That realisation shaped how I approached the design system work that followed.</p>
      </Section>
    </CaseStudyLayout>
  );
}
