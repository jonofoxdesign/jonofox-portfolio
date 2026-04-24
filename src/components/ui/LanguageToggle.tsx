"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isDE = locale === "de";

  const toggle = () => {
    if (isDE) {
      const newPath = pathname.replace(/^\/de/, "") || "";
      router.push(`/en${newPath}`);
    } else {
      const newPath = pathname.replace(/^\/en/, "") || "";
      router.push(`/de${newPath}`);
    }
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={`Switch to ${isDE ? "English" : "Deutsch"}`}
      className="flex items-center gap-2 select-none cursor-pointer bg-transparent border-0 p-0"
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${!isDE ? "text-ink" : "text-ink-disabled"}`}>
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
        transition={{ duration: 0.3 }}
      >
        {/* Thumb — spring slide */}
        <motion.div
          className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md overflow-hidden"
          animate={{ left: isDE ? "30px" : "2px" }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isDE ? "/flag-de.svg" : "/flag-en.svg"}
            alt={isDE ? "DE" : "EN"}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }}
          />
        </motion.div>
      </motion.div>

      <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${isDE ? "text-ink" : "text-ink-disabled"}`}>
        DE
      </span>
    </motion.button>
  );
}
