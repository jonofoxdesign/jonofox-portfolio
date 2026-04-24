"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const localePath = (path: string) =>
    locale === "en" ? path : `/de${path}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-surface-muted">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center">
          <img src="/logo.svg" alt="Jono Fox" className="h-8 w-auto" />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={localePath("/work")}
            className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            {t("work")}
          </Link>
          <Link
            href={localePath("/about")}
            className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href={localePath("/contact")}
            className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            {t("contact")}
          </Link>
        </nav>

        {/* Language toggle */}
        <LanguageToggle />
      </div>
    </header>
  );
}
