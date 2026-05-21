import type { Metadata } from "next";
import { ButtonAnchor } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hire Jono Fox — Principal Product Designer",
  description: "Jono Fox is a Principal Product Designer available for senior IC and design leadership roles. Specialising in developer tools, design systems, infrastructure UX, and complex B2B enterprise products. Based in Germany, open to remote.",
};

const content = {
  en: {
    heading: "Let's",
    headingAccent: "talk",
    subheading: "Want experience to be a real growth lever for your product?\nWant someone who'll help your PM and engineering teams understand what good actually looks like?",
    body: "I'm open to the right opportunity. Senior IC, design leadership, or somewhere in between. Hit me up.",
    email: "Send an email",
    linkedin: "Connect on LinkedIn",
  },
  de: {
    heading: "Lass uns",
    headingAccent: "reden",
    subheading: "Willst du, dass Experience ein echter Wachstumshebel für dein Produkt wird?\nWillst du jemanden, der deinen PM- und Engineering-Teams zeigt, wie gut wirklich aussieht?",
    body: "Ich bin offen für die richtige Gelegenheit. Senior IC, Design Leadership oder irgendwo dazwischen. Meld dich.",
    email: "E-Mail schreiben",
    linkedin: "Auf LinkedIn vernetzen",
  },
} as const;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="pt-36 md:pt-44 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="max-w-2xl">

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight mb-8">
          {c.heading} <span className="text-teal">{c.headingAccent}</span>
        </h1>

        <p className="text-xl font-medium text-ink leading-relaxed mb-8">
          {c.subheading.split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        {/* Speech bubble card */}
        <div className="flex items-start gap-4 mb-10">
          <img
            src="/jono/jono-fox-hire-product-designer-mobile.jpg"
            alt="Jono Fox"
            className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0 mt-0.5"
            loading="eager"
          />
          <div
            className="backdrop-blur-xl rounded-2xl rounded-tl-sm px-5 py-4"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.38) 100%)",
              boxShadow: "0 8px 32px rgba(31,45,61,0.12), 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -1px 0 0 rgba(255,255,255,0.2) inset",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <p className="text-base text-ink leading-relaxed">
              {c.body}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
            {c.email}
          </ButtonAnchor>
          <ButtonAnchor
            href="https://www.linkedin.com/in/jonofox/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            {c.linkedin}
          </ButtonAnchor>
        </div>

        </div>
      </div>
    </div>
  );
}
