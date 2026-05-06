"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ButtonAnchor } from "@/components/ui/Button";

interface Meta {
  company: string;
  product: string;
  year: string;
  role: string;
  scope: string;
  collaboration: string;
}

interface CaseStudyLayoutProps {
  tag: string;
  title: React.ReactNode;
  intro: string;
  meta: Meta;
  children: React.ReactNode;
  locale?: string;
}

const metaLabels = {
  en: { company: "Company", product: "Product", year: "Year", role: "Role", scope: "Scope", collaboration: "Collaboration" },
  de: { company: "Unternehmen", product: "Produkt", year: "Jahr", role: "Rolle", scope: "Umfang", collaboration: "Zusammenarbeit" },
};

const cta = {
  en: {
    heading: "Let's",
    headingAccent: "talk",
    body: "Seen something that resonates? I'm open to the right opportunity, a collaboration, or a good conversation about design.",
    email: "Send an email",
    linkedin: "Connect on LinkedIn",
  },
  de: {
    heading: "Lass uns",
    headingAccent: "reden",
    body: "Etwas gefunden, das dich anspricht? Ich bin offen für die richtige Gelegenheit, eine Zusammenarbeit oder ein gutes Gespräch über Design.",
    email: "E-Mail schreiben",
    linkedin: "Auf LinkedIn vernetzen",
  },
};

// Shared scroll-reveal variants
const revealVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const revealTransition = {
  duration: 0.55,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="my-12 w-full aspect-video rounded-2xl bg-surface-muted flex items-center justify-center text-ink-disabled text-sm">
      {label}
    </div>
  );
}

/** Shared case study image — animated scroll reveal, no shadow */
export function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : revealTransition;
  return (
    <motion.div
      className="my-12 w-full rounded-2xl overflow-hidden border border-surface-muted"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </motion.div>
  );
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : revealTransition;
  return (
    <motion.section
      className="mb-14"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
    >
      <h2 className="font-display text-2xl font-bold text-ink mb-4">{heading}</h2>
      <div className="space-y-4 text-ink-secondary leading-relaxed">{children}</div>
    </motion.section>
  );
}

export default function CaseStudyLayout({ tag, title, intro, meta, children, locale }: CaseStudyLayoutProps) {
  const lang = locale === "de" ? "de" : "en";
  const labels = metaLabels[lang];
  const c = cta[lang];
  const prefersReducedMotion = useReducedMotion();
  const entryTransition = (delay: number) =>
    prefersReducedMotion ? { duration: 0 } : { ...revealTransition, delay };

  return (
    <div className="pt-44">
      <div className="max-w-3xl mx-auto px-6 pb-24">

        {/* Tag */}
        <motion.p
          className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-6"
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          transition={entryTransition(0.05)}
        >
          {tag}
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-8"
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          transition={entryTransition(0.12)}
        >
          {title}
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg text-ink-secondary leading-relaxed mb-12"
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          transition={entryTransition(0.22)}
        >
          {intro}
        </motion.p>

        {/* Metadata grid */}
        <motion.div
          className="grid grid-cols-3 gap-x-8 gap-y-6 pb-12 border-b border-surface-muted mb-14"
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          transition={entryTransition(0.32)}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.company}</p>
            <p className="text-sm text-ink">{meta.company}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.product}</p>
            <p className="text-sm text-ink">{meta.product}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.year}</p>
            <p className="text-sm text-ink">{meta.year}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.role}</p>
            <p className="text-sm text-ink">{meta.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.scope}</p>
            <p className="text-sm text-ink">{meta.scope}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">{labels.collaboration}</p>
            <p className="text-sm text-ink">{meta.collaboration}</p>
          </div>
        </motion.div>

        {/* Content */}
        {children}

      </div>

      {/* CTA */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{ background: "#1F2D3D" }}
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-fox/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
            {c.heading} <span className="text-fox">{c.headingAccent}</span>
          </h2>
          <p className="text-ink-disabled mb-8 leading-relaxed">
            {c.body}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
              {c.email}
            </ButtonAnchor>
            <ButtonAnchor
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              {c.linkedin}
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
