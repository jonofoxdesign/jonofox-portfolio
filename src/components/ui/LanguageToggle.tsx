"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Emil's strong ease-out — starts fast, feels responsive
const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isDE = locale === "de";

  const toggle = () => {
    if (isDE) {
      router.push(`/en${pathname.replace(/^\/de/, "") || ""}`);
    } else {
      router.push(`/de${pathname.replace(/^\/en/, "") || ""}`);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDE ? "English" : "Deutsch"}`}
      className="flex items-center gap-2 select-none cursor-pointer bg-transparent border-0 p-0"
    >
      <span className={`text-xs font-semibold tracking-wide transition-colors duration-200 ${!isDE ? "text-ink" : "text-ink-disabled"}`}>
        EN
      </span>

      {/* Track */}
      <motion.div
        className="relative w-14 h-7 rounded-full flex-shrink-0"
        animate={{
          background: isDE
            ? "linear-gradient(135deg, #F57C00, #c0392b)"
            : "linear-gradient(135deg, #2A9D8F, #1565C0)",
        }}
        transition={{ duration: 0.25, ease: easeOut }}
      >
        {/* Thumb — snappy ease-out, no bounce */}
        <motion.div
          className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md overflow-hidden"
          animate={{ left: isDE ? "30px" : "2px" }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isDE ? "/flag-de.svg" : "/flag-en.svg"}
            alt={isDE ? "DE" : "EN"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
            }}
          />
        </motion.div>
      </motion.div>

      <span className={`text-xs font-semibold tracking-wide transition-colors duration-200 ${isDE ? "text-ink" : "text-ink-disabled"}`}>
        DE
      </span>
    </button>
  );
}
