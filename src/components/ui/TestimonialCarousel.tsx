"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Jono has consistently demonstrated strategic impact that goes beyond his role, excelling in design while driving project leadership and cross-functional alignment.",
    name: "Evan Cummack",
    title: "Chief Product Officer, Aerospike",
    image: "/Evan.png",
  },
  {
    quote: "Jono brought a clear uplift in both aesthetics and UX. Even in chaotic times, I could always rely on his smart prioritization and ability to balance different stakeholders.",
    name: "Gino Weiss",
    title: "Senior Product Manager, Workwise",
    image: "/Gino.png",
  },
  {
    quote: "Jono has one of those minds that sees things differently, producing unique outcomes no matter the complexity of the requirement.",
    name: "Ash Durham",
    title: "Lead Developer, Matter Design",
    image: "/Ash.png",
  },
  {
    quote: "Jono's leadership built an atmosphere where the team felt motivated and supported. His strong UI/UX expertise helped us design a system that worked better every day for both designers and developers.",
    name: "Iryna Melnykova",
    title: "Product Designer, Sygnum",
    image: "/Iryna.png",
  },
  {
    quote: "Working with Jono was one of the greatest gains for our team. He combined exceptional design skills with a strategic mindset and always knew exactly what the squad needed at the right time.",
    name: "Samuel Fleck",
    title: "Product Manager, Workwise",
    image: "/Samuel.png",
  },
  {
    quote: "Jono successfully established a strong foundation for product design, demonstrating exceptional skill and vision, and will be key in elevating the user and developer experience as we grow.",
    name: "Nicholas Naraja",
    title: "Brand Design Lead, Aerospike",
    image: "/Nicholas.png",
  },
];

const pages = [testimonials.slice(0, 3), testimonials.slice(3)];

// Render all pages invisibly to let the browser determine the tallest one,
// then lock the container to that height. Cards use position:absolute so
// entering and exiting slides overlap — no layout shift.
export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > page ? 1 : -1);
    setPage(idx);
  };

  const prev = () => goTo(Math.max(0, page - 1));
  const next = () => goTo(Math.min(pages.length - 1, page + 1));

  return (
    <div>
      {/* Header row with navigation */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-syne text-4xl font-bold text-ink">
          In their <span className="text-teal">own words</span>
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-surface-muted flex items-center justify-center text-ink-secondary hover:border-teal hover:text-teal transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-sm text-ink-disabled tabular-nums">
            {page + 1} / {pages.length}
          </span>
          <button
            onClick={next}
            disabled={page === pages.length - 1}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-surface-muted flex items-center justify-center text-ink-secondary hover:border-teal hover:text-teal transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Sizer: renders tallest page invisibly to lock container height */}
      <div className="relative">
        <div aria-hidden className="invisible grid md:grid-cols-3 gap-4">
          {pages.reduce((tallest, pg) =>
            pg === pages[1] ? pg : tallest
          ).map((t) => (
            <div key={t.name} className="bg-surface-light rounded-2xl border border-surface-muted p-6 flex flex-col gap-6">
              <p className="text-sm text-ink-secondary leading-relaxed italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-muted flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-disabled">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated slides — absolute so they don't push the sizer */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: `${d * 100}%`, opacity: 0 }),
                center: { x: "0%", opacity: 1 },
                exit: (d: number) => ({ x: `${d * -100}%`, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
              className="grid md:grid-cols-3 gap-4 absolute inset-0 content-start"
            >
              {pages[page].map((t) => (
                <div
                  key={t.name}
                  className="bg-surface-light rounded-2xl border border-surface-muted p-6 flex flex-col gap-6"
                >
                  <p className="text-sm text-ink-secondary leading-relaxed italic flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover grayscale flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink-disabled">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
