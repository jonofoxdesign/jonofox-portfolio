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

const PER_PAGE = 3;
const pages = [testimonials.slice(0, 3), testimonials.slice(3)];

export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > page ? 1 : -1);
    setPage(idx);
  };

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -40, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="grid md:grid-cols-3 gap-4"
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
                    className="w-10 h-10 rounded-full object-cover grayscale"
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

      {/* Pagination dots */}
      <div className="flex items-center gap-2 mt-8">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === page ? "w-6 bg-teal" : "w-1.5 bg-surface-muted hover:bg-ink-disabled"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
