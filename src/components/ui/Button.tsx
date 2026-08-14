"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const tapTransition = {
  type: "spring" as const,
  stiffness: 800,
  damping: 35,
};

const base =
  "flex items-center justify-center px-6 py-3 rounded-xl font-medium font-sans text-base transition-colors";

const variants = {
  primary:   `${base} bg-fox-button text-ink hover:bg-fox-button-hover`,
  teal:      `${base} bg-teal text-white hover:bg-teal-hover`,
  outline:   `${base} gradient-border text-ink`,
  outlineLight: `${base} gradient-border text-white`,
};

type Variant = keyof typeof variants;

// ── Link-based button ──────────────────────────────────────────────────────
type LinkButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  variant = "teal",
  children,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={tapTransition}
      className="block"
    >
      <Link className={`${variants[variant]} ${className ?? ""}`} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}

// ── Anchor-based button ────────────────────────────────────────────────────
type AnchorButtonProps = Omit<
  ComponentProps<"a">,
  "className"
> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function ButtonAnchor({
  variant = "teal",
  children,
  className,
  ...props
}: AnchorButtonProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={tapTransition}
      className="block"
    >
      <a className={`${variants[variant]} ${className ?? ""}`} {...props}>
        {children}
      </a>
    </motion.div>
  );
}

// ── Text link (nudges right on hover) ─────────────────────────────────────
type TextLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
  className?: string;
};

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      <Link
        className={`text-base font-medium font-sans text-teal hover:text-teal-hover transition-colors ${className ?? ""}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
}
