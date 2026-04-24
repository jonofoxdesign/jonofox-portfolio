import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  description: "A cluster provisioning flow that lets teams move fast with safe defaults, switch to advanced control when needed, and recover quickly when something goes wrong.",
};

export default function AerospikeProvisioningPage() {
  return (
    <CaseStudyLayout
      tag="Aerospike"
      title={<>Depth when you want it.<br />Safety when you don&apos;t.</>}
      intro="A cluster provisioning flow that lets teams move fast with safe defaults, switch to advanced control when needed, and recover quickly when something goes wrong. Built as the first experience to take Aerospike Cloud beyond preview and into general availability."
      meta={{
        company: "Aerospike",
        product: "Cloud cluster provisioning",
        year: "2025",
        role: "Sole designer",
        scope: "End-to-end provisioning flow",
        collaboration: "Engineering, product, backend and database engineers",
      }}
    >
      <Section heading="The problem">
        <p>Before this project, getting started with Aerospike meant installing the database, provisioning your own infrastructure, and figuring out configuration yourself. For expert users, that was fine. For everyone else, it was a reason not to bother.</p>
        <p>Aerospike Cloud was the managed offering that was supposed to change that. For it to succeed, customers needed a self-serve path to production-ready clusters. Not a tutorial, not a preview — a reliable first experience that felt trustworthy from the first click.</p>
        <p>A managed service has a different bar. Defaults should be safe. Misconfiguration should be hard. Errors should be clear and actionable. Time to first value should be measured in minutes, not days. Aerospike&apos;s customers are deeply technical — backend, platform, and operations engineers who know their infrastructure and expect precision. A flow that felt dumbed down or opaque would lose their trust immediately.</p>
      </Section>

      <ImagePlaceholder label="Provisioning flow overview" />

      <Section heading="My role">
        <p>I was the sole designer on the provisioning flow, and took on a large amount of product and frontend ownership alongside it. I defined the overall step structure and sequencing, decided what configuration to expose versus abstract, shaped how advanced settings and JSON/YAML were introduced, wrote tickets, tested implementations, and drove decisions when ownership was unclear.</p>
        <p>I worked most closely with the engineering manager, frontend engineers, and backend and database engineers. Product was involved throughout, but I often drove prioritisation to keep things moving.</p>
      </Section>

      <Section heading="The core tension">
        <p>The real problem was not how to build a form. It was how to support two completely different expectations without splitting the product or forcing anyone down the wrong path.</p>
        <p>Some users wanted to move fast and trust the system. They were not here to tune replication factors — they wanted a cluster that worked. Others needed visibility and control. These were engineers who ran self-managed Aerospike in production, and they were not going to hand that over to a form with hidden settings.</p>
        <p>Design it too simple and the second group would not trust it. Design it too complex and the first group would stall. The goal was to let users choose how much control they needed, without making that choice feel like a burden.</p>
      </Section>

      <ImagePlaceholder label="Default vs. advanced mode — step comparison" />

      <Section heading="Designing for safe speed">
        <p><strong className="text-ink">Defaults that reflect how Aerospike actually works.</strong> Defaults were not generic cloud presets. They were based on Aerospike best practices and validated with engineers who run and support the database every day. If a user accepted every default, the result had to be something the Aerospike team would stand behind.</p>
        <p><strong className="text-ink">Progressive control without punishment.</strong> Advanced settings were available without forcing everyone into expert mode from the start. For users who wanted full control, JSON/YAML configuration was exposed deliberately — not hidden, and not required. It was possible to move between modes without restarting the flow or losing context.</p>
        <p><strong className="text-ink">Guardrails instead of surprises.</strong> Provisioning mistakes can be expensive. Throughout the flow, constraints and validation were designed to prevent invalid or risky configurations before launch. When something was wrong, errors were explicit about what needed to change and why. Errors were treated as part of the happy path, not edge cases.</p>
        <p><strong className="text-ink">Docs as part of the system.</strong> Contextual guidance appeared alongside decisions, matched the language and behaviour of the UI, and reinforced the same mental model across UI, APIs, and docs. Users could learn and validate choices in place, without needing to leave the product.</p>
      </Section>

      <ImagePlaceholder label="Contextual documentation panel in context" />

      <Section heading="Outcome">
        <p>The flow shipped as the foundation for Aerospike Cloud&apos;s general availability. Completion through the full provisioning wizard came in well above expectations for a multi-step technical configuration flow. The step with the highest average time was the advanced configuration step, at 24 seconds — intentional. Speed where it should be fast, depth where it needs to be.</p>
        <p>The average end-to-end provisioning time came in at 72 seconds. The benchmark we had been aiming for was 90. For engineers evaluating a managed service, that is the difference between &quot;this might work for us&quot; and &quot;let&apos;s keep looking.&quot;</p>
        <p>The trend over time was the most telling signal. Validation errors and documentation opens during provisioning both started high and declined steadily as the experience matured — not because usage slowed, but because the UI was doing more of the explaining itself. The default cluster path dominated, confirming the core design bet: defaults were not a fallback. They were the primary experience.</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Speed and safety are not opposites. Advanced users still benefit from clear defaults. Errors and recovery deserve as much design attention as success paths. Documentation, APIs, and the UI have to tell the same story — when they do, users can move faster with more confidence.</p>
        <p>Provisioning is not just setup. It is the first proof that a system can be trusted.</p>
      </Section>
    </CaseStudyLayout>
  );
}
