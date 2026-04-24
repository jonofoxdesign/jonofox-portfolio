"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
};

export function AnimatedButton({ children, className, ...props }: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}

export function AnimatedTextLink({ children, className, ...props }: Props) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}
