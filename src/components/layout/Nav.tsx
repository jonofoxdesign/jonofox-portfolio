"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { LogoIcon } from "@/components/ui/Logo";

const menuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -6, scale: 0.98 },
};

const menuTransition = {
  duration: 0.2,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
};

export default function Nav() {
  const params = useParams();
  const pathname = usePathname();
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
    <>
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full md:w-auto">
        {/* Main bar */}
        <div
          className="backdrop-blur-xl rounded-2xl px-5 h-14 flex items-center"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.38) 100%)",
            boxShadow: "0 8px 32px rgba(31,45,61,0.12), 0 1.5px 0 0 rgba(255,255,255,0.9) inset, 0 -1px 0 0 rgba(255,255,255,0.2) inset",
            border: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          {/* Desktop: flat flex row — logo | 64px | links (40px gap) | 64px | toggle */}
          <div className="hidden md:flex items-center">
            {/* Logo — home link with active-state underline */}
            {(() => {
              const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
              return (
                <Link href={localePath("/")} className="flex items-center gap-3">
                  <LogoIcon />
                  <span className={`text-sm font-normal font-sans transition-[color,border-color] duration-200 pb-0.5 border-b-2 translate-y-0.5 ${
                    isHome
                      ? "text-ink border-fox"
                      : "text-ink-secondary border-transparent hover:text-ink hover:border-ink"
                  }`}>
                    Jono Fox
                  </span>
                </Link>
              );
            })()}

            {/* Nav links — 64px from logo, fixed width to match DE locale */}
            <nav aria-label="Main navigation" className="ml-16 flex items-center justify-center gap-10 min-w-[272px]">
              {links.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-normal transition-[color,border-color] duration-200 pb-0.5 border-b-2 translate-y-0.5 ${
                      isActive
                        ? "text-ink border-fox"
                        : "text-ink-secondary border-transparent hover:text-ink hover:border-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Language toggle — 64px from links */}
            <div className="ml-16">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile: logo left, hamburger right */}
          <div className="flex md:hidden w-full items-center justify-between">
            <Link href={localePath("/")} className="flex items-center gap-3">
              <LogoIcon />
              <span className="text-base font-normal font-sans text-ink">Jono Fox</span>
            </Link>
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className={`block w-5 h-0.5 bg-ink transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              className="md:hidden mt-2 backdrop-blur-xl rounded-2xl px-6 py-4 flex flex-col gap-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={menuTransition}
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)",
                boxShadow: "0 8px 32px rgba(31,45,61,0.12), 0 1.5px 0 0 rgba(255,255,255,0.9) inset",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              {links.map((link, i) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm font-medium transition-colors duration-150 py-1 block ${
                        isActive ? "text-ink" : "text-ink-secondary hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                className="pt-4 mt-1 border-t border-surface-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18, delay: links.length * 0.05 }}
              >
                <LanguageToggle />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
}
