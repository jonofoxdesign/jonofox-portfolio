"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Nav() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";
  const [menuOpen, setMenuOpen] = useState(false);

  const localePath = (path: string) =>
    locale === "en" ? `/en${path}` : `/de${path}`;

  const links = [
    { href: localePath("/work"), label: locale === "de" ? "Arbeiten" : "Work" },
    { href: localePath("/about"), label: locale === "de" ? "Über mich" : "About" },
    { href: localePath("/contact"), label: locale === "de" ? "Kontakt" : "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-6xl">
        {/* Main bar */}
        <div
          className="backdrop-blur-xl rounded-2xl px-6 h-16 flex items-center justify-between"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.38) 100%)",
            boxShadow: "0 8px 32px rgba(31,45,61,0.12), 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -1px 0 0 rgba(255,255,255,0.2) inset",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          <Link href={localePath("/")} className="flex items-center">
            <img src="/logo.svg" alt="Jono Fox" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-secondary hover:text-ink underline-offset-4 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language toggle — desktop only */}
            <div className="hidden md:flex">
              <LanguageToggle />
            </div>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="md:hidden mt-2 backdrop-blur-xl rounded-2xl px-6 py-4 flex flex-col gap-4"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)",
              boxShadow: "0 8px 32px rgba(31,45,61,0.12), 0 1.5px 0 0 rgba(255,255,255,0.9) inset",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            {/* Language toggle — inside mobile menu */}
            <div className="pt-4 mt-1 border-t border-surface-muted">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
