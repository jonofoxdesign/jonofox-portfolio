import type { Metadata } from "next";
import { ButtonAnchor } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jono Fox — Principal Product Designer available for senior IC roles, design leadership, and collaborations on developer tools, design systems, and complex B2B products.",
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
    <div className="pt-44 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — content */}
          <div>
            <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
              {c.heading} <span className="text-teal">{c.headingAccent}</span>
            </h1>
            <p className="text-xl font-medium text-ink leading-relaxed mb-3">
              {c.subheading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
            <p className="text-lg text-ink-secondary leading-relaxed mb-10">
              {c.body}
            </p>
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

          {/* Right — 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            {["/jono/jono1.png", "/jono/jono2.png", "/jono/jono4.png", "/jono/jono3.png"].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img src={src} alt="Jono Fox" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
