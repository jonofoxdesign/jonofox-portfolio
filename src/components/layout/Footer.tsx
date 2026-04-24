"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";
  const localePath = (path: string) =>
    locale === "en" ? `/en${path}` : `/de${path}`;

  return (
    <footer className="border-t border-surface-muted py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href={localePath("/")}>
          <img src="/logo.svg" alt="Jono Fox" className="h-7 w-auto" />
        </Link>
        <nav className="flex items-center gap-8">
          <Link href={localePath("/work")} className="text-sm text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Arbeiten" : "Work"}
          </Link>
          <Link href={localePath("/about")} className="text-sm text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Über mich" : "About"}
          </Link>
          <Link href={localePath("/contact")} className="text-sm text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Kontakt" : "Contact"}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/jonofox/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-secondary hover:text-ink transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
