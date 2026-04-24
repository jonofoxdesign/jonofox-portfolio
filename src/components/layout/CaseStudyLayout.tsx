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
}

export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="my-12 w-full aspect-video rounded-2xl bg-surface-muted flex items-center justify-center text-ink-disabled text-sm">
      {label}
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="font-syne text-2xl font-bold text-ink mb-4">{heading}</h2>
      <div className="space-y-4 text-ink-secondary leading-relaxed">{children}</div>
    </section>
  );
}

export default function CaseStudyLayout({ tag, title, intro, meta, children }: CaseStudyLayoutProps) {
  return (
    <div className="pt-44">
      <div className="max-w-3xl mx-auto px-6 pb-24">

        {/* Tag */}
        <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-6">
          {tag}
        </p>

        {/* Title */}
        <h1 className="font-syne text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
          {title}
        </h1>

        {/* Intro */}
        <p className="text-lg text-ink-secondary leading-relaxed mb-12">
          {intro}
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 pb-12 border-b border-surface-muted mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Company</p>
            <p className="text-sm text-ink">{meta.company}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Product</p>
            <p className="text-sm text-ink">{meta.product}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Year</p>
            <p className="text-sm text-ink">{meta.year}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Role</p>
            <p className="text-sm text-ink">{meta.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Scope</p>
            <p className="text-sm text-ink">{meta.scope}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-ink-disabled uppercase mb-1">Collaboration</p>
            <p className="text-sm text-ink">{meta.collaboration}</p>
          </div>
        </div>

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
          <h2 className="font-syne text-4xl font-bold mb-4">
            Let's <span className="text-fox">talk</span>
          </h2>
          <p className="text-ink-disabled mb-8 leading-relaxed">
            Seen something that resonates? I'm open to the right opportunity, a
            collaboration, or a good conversation about design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonAnchor href="mailto:jonathanlouisfox@gmail.com" variant="teal">
              Send an email
            </ButtonAnchor>
            <ButtonAnchor
              href="https://www.linkedin.com/in/jonofox/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
            >
              Connect on LinkedIn
            </ButtonAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}
