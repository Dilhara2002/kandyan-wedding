"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Methana duration? kiyala ekathu karanna ona
type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number; // Add this line
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  y = 30,
  duration = 0.8, // Default value ekak danna
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}