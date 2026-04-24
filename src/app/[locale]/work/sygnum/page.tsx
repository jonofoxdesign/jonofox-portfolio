import type { Metadata } from "next";
import CaseStudyLayout, { Section, ImagePlaceholder } from "@/components/layout/CaseStudyLayout";

export const metadata: Metadata = {
  title: "No one should have to call their bank just to check their balance",
  description: "Designing the central dashboard for Sygnum — the world's first regulated digital asset bank.",
};

export default function SygnumPage() {
  return (
    <CaseStudyLayout
      tag="Sygnum Bank"
      title={<>No one should have to call their bank<br />just to check their balance</>}
      intro="Sygnum is a regulated Swiss digital asset bank. When I joined, clients who wanted to understand their holdings had to call their account manager or read a printed statement. For the world's first regulated digital asset bank, that wasn't just a UX problem — it was a credibility gap. This project created the central dashboard that changed that."
      meta={{
        company: "Sygnum Bank",
        product: "Digital assets dashboard",
        year: "2022",
        role: "Design Lead",
        scope: "Dashboard + design system validation",
        collaboration: "Product, blockchain engineers, frontend engineers, account teams",
      }}
    >
      <Section heading="The situation">
        <p>Sygnum&apos;s product had grown quickly across multiple teams, each designing and building independently. The result was inconsistent layouts, changing terminology from page to page, and no single view of a client&apos;s digital asset holdings. The interface felt dated and untrustworthy.</p>
        <p>Clients were high-net-worth private banking clients, accustomed to personal service. They still expected immediate access to their balances, clear explanations of what they owned, and an experience comparable to modern banking. They understood financial products. The interface needed to respect that, not talk down to it.</p>
      </Section>

      <ImagePlaceholder label="Digital assets overview dashboard" />

      <Section heading="My role">
        <p>I was the Design Lead on this project, supported by a junior designer. I defined the overall structure and interaction model, translated complex blockchain concepts into understandable UI, set and maintained the visual quality bar, and decided what to simplify and what to surface explicitly.</p>
        <p>This project was also one of the first major product areas to use Sygnum&apos;s new design system. It had to prove the system could handle real complexity, not just simple flows. That dual responsibility — shipping the right product and validating the system under pressure — shaped every decision.</p>
      </Section>

      <Section heading="The approach">
        <p>Rather than designing individual screens, I focused on establishing a clear mental model for how Sygnum presents digital assets. That meant anchoring the experience in familiar banking concepts where possible, creating a single overview that reflected total holdings across asset types, and grouping assets and actions based on how clients think — not how systems are structured.</p>
        <p>Common actions like trading and staking needed to be easy to find without turning the dashboard into a control panel. The challenge was simplifying without oversimplifying. Regulation made accuracy non-negotiable. Asset complexity — balances, fees, settlement timing, transaction states — couldn&apos;t be hidden, only structured.</p>
      </Section>

      <ImagePlaceholder label="Asset type grouping — crypto, tokenised assets, staking, NFTs" />

      <Section heading="The result">
        <p>The final dashboard gave clients a clear overview of what they held and its current value, supported crypto, tokenised assets, staking, and NFTs, and made common actions easy to find without intruding on the overview. It worked both as a quick check-in and a deeper exploration tool.</p>
        <p>It also proved the design system could hold up under real complexity — which led to adoption across other teams.</p>
      </Section>

      <Section heading="Outcomes">
        <p>Without detailed analytics, success came through qualitative signals. Clients could clearly understand their digital asset holdings. Feedback from account teams was consistently positive. Support requests related to balances decreased. Other teams adopted the design system after seeing it work in a complex context.</p>
        <p>Most importantly, the product started to feel like a bank again.</p>
      </Section>

      <Section heading="What I&apos;d carry forward">
        <p>Design systems only matter if they hold up under real complexity. This project reinforced that structure and understanding matter more than novelty or surface polish — and that the most important design decisions are often about what to leave out.</p>
        <p>As tools and AI make component creation easier, the value shifts further toward decision making, structure, and systems thinking. That&apos;s the part of the work I enjoy most.</p>
      </Section>
    </CaseStudyLayout>
  );
}
