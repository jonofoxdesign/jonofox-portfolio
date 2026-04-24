import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  description: "Redesigning Goodlife's membership sign-up flow to make contracts clear, choices understandable, and commitment something people felt good about.",
};

export default function GoodlifePage() {
  return (
    <CaseStudyLayout
      tag="Goodlife Health Clubs"
      title={<>Replacing lock-in anxiety<br />with sign-up confidence</>}
      intro="Goodlife Health Clubs is one of Australia's largest gym chains, with hundreds of thousands of members across dozens of locations. I redesigned their membership sign-up experience as part of a new website build, with the goal of reducing confusion, improving trust, and modernising a flow that no longer reflected how people wanted to commit to a membership."
      meta={{
        company: "Goodlife Health Clubs",
        product: "Membership sign-up flow",
        year: "2020",
        role: "Sole product designer",
        scope: "End-to-end membership sign-up flow",
        collaboration: "Engineering team and client stakeholders",
      }}
    >
      <Section heading="The problem">
        <p>Gym memberships are notoriously difficult to understand. At Goodlife, this showed up clearly in customer feedback. People weren&apos;t frustrated by the gyms or the staff — they were frustrated by contracts, hidden fees, and unclear cancellation terms. The existing sign-up experience reinforced that mistrust.</p>
        <p>From a business perspective, the flow was also dated and brittle. It relied on patterns that pushed people through checkout without helping them feel confident in their decisions. The challenge wasn&apos;t just to increase conversion. It was to create an experience that felt transparent, modern, and fair.</p>
        <p>Underneath, every decision added complexity. Location, membership length, deposit amount, and location-specific extras all affected pricing and terms. Together, these inputs created hundreds of valid membership configurations that needed to remain accurate, consistent, and explainable.</p>
      </Section>

      <ImagePlaceholder label="Configuration complexity — inputs to valid combinations" />

      <Section heading="My role">
        <p>I was the sole designer on this project. I worked closely with an engineering team and collaborated with client stakeholders, but I owned the experience design and the decisions that shaped it. Day-to-day product decisions were made in close partnership with the engineering manager.</p>
      </Section>

      <Section heading="What I learned early">
        <p>A review of public feedback and social mentions made one thing clear: most complaints were about membership structure, pricing clarity, and cancellation. People felt locked into agreements they didn&apos;t fully understand.</p>
        <p>Looking at competitors reinforced the pattern. Most gyms prioritised lead capture over clarity, hiding meaningful details until late in the process. The opportunity wasn&apos;t to simplify by removing choice — it was to make choice understandable.</p>
      </Section>

      <Section heading="The core design decision">
        <p>The most important decision was to treat sign-up as an exploration and configuration process, not a traditional checkout.</p>
        <p>I designed a progressive flow where users made one decision at a time, each shaping what they saw next. I removed the standard cart step entirely and replaced it with a persistent summary that updated in real time as users configured their membership. As people adjusted membership length, deposits, or optional features, the summary immediately reflected the impact on pricing and commitments.</p>
        <p>The goal was not persuasion. It was confidence. If someone reached payment, they should already understand their commitment.</p>
      </Section>

      <ImagePlaceholder label="Progressive configuration — one decision at a time, summary updating in real time" />

      <Section heading="Working within constraints">
        <p>The experience was built on BigCommerce. Using a SaaS platform gave us reliable infrastructure and faster delivery, but the level of customisation required to support the desired flow introduced complexity. Early on, we extended default patterns to support the interaction model we believed was right.</p>
        <p>As development progressed, it became clear that some of these decisions introduced instability and additional engineering effort. In hindsight, I would be more selective about where to customise versus where to adapt the design to platform constraints. Long-term maintainability would take priority over perfect alignment with an idealised flow.</p>
      </Section>

      <Section heading="Outcome">
        <p>The redesigned sign-up flow shipped largely as designed. Users responded positively to the increased clarity and sense of control. Stakeholders felt confident signing off on the experience, and the prototype reduced back-and-forth during development by making the logic explicit early.</p>
        <p>What stayed with me most was how much people were already carrying before they clicked the first button. The frustration wasn&apos;t with the gym — it was the anxiety of committing to something they didn&apos;t fully understand. Designing for that emotional state turned out to be a better brief than &quot;increase conversion.&quot;</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Push harder on platform constraints earlier. The experience delivered what it was meant to, but some of that came at a cost in engineering time that better upfront scoping could have avoided.</p>
        <p>The bigger lesson: understanding what users are feeling before they start is as important as understanding what they need to do. The best brief here wasn&apos;t the business goal — it was the emotional one.</p>
      </Section>
    </CaseStudyLayout>
  );
}
