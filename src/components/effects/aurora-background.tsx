"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-1/2 left-1/4 h-[800px] w-[800px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 70%)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
