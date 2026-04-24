"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isDE = locale === "de";

  const toggle = () => {
    if (isDE) {
      const newPath = pathname.replace(/^\/de/, "") || "/";
      router.push(`/en${newPath === "/" ? "" : newPath}`);
    } else {
      const newPath = pathname.replace(/^\/en/, "") || "";
      router.push(`/de${newPath}`);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDE ? "English" : "Deutsch"}`}
      className="flex items-center gap-1.5 bg-surface rounded-full px-3 py-1.5 border border-surface-muted hover:border-ink-disabled transition-colors select-none"
    >
      <Image
        src={isDE ? "/flag-de.svg" : "/flag-en.svg"}
        alt={isDE ? "DE" : "EN"}
        width={18}
        height={18}
        className="rounded-full"
      />
      <span className="text-xs font-semibold text-ink tracking-wide">
        {isDE ? "DE" : "EN"}
      </span>
      <svg
        className="w-3 h-3 text-ink-disabled"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
