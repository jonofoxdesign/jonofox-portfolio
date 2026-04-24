"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Nav() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  const localePath = (path: string) =>
    locale === "en" ? `/en${path}` : `/de${path}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-surface-muted">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={localePath("/")} className="flex items-center">
          <img src="/logo.svg" alt="Jono Fox" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href={localePath("/work")} className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Arbeiten" : "Work"}
          </Link>
          <Link href={localePath("/about")} className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Über mich" : "About"}
          </Link>
          <Link href={localePath("/contact")} className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors">
            {locale === "de" ? "Kontakt" : "Contact"}
          </Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
