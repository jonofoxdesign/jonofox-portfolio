"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isDE = locale === "de";

  const toggle = () => {
    if (isDE) {
      // Remove /de prefix
      const newPath = pathname.replace(/^\/de/, "") || "/";
      router.push(newPath);
    } else {
      // Add /de prefix
      router.push(`/de${pathname}`);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDE ? "English" : "Deutsch"}`}
      className="flex items-center gap-2 select-none"
    >
      <span
        className={`text-xs font-semibold tracking-wide transition-colors ${
          !isDE ? "text-ink" : "text-ink-disabled"
        }`}
      >
        EN
      </span>

      {/* Toggle track */}
      <div
        className="relative w-12 h-6 rounded-full transition-all duration-300"
        style={{
          background: isDE
            ? "linear-gradient(135deg, #F57C00, #DB6800)"
            : "linear-gradient(135deg, #2A9D8F, #1565C0)",
        }}
      >
        {/* Thumb */}
        <div
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
            isDE ? "left-6" : "left-0.5"
          }`}
        >
          <span className="text-xs leading-none">
            {isDE ? "🇩🇪" : "🇬🇧"}
          </span>
        </div>
      </div>

      <span
        className={`text-xs font-semibold tracking-wide transition-colors ${
          isDE ? "text-ink" : "text-ink-disabled"
        }`}
      >
        DE
      </span>
    </button>
  );
}
