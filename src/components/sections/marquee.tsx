"use client";

import { motion } from "framer-motion";
import { techMarquee } from "@/data/portfolio";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="group relative flex shrink-0 items-center gap-2 sm:gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.04]"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at center, rgba(59,130,246,0.06), transparent 70%)",
              }}
            />
            <span className="relative text-sm font-medium text-white/50 transition-colors group-hover:text-white/80">
              {tech}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] py-8 sm:py-12">
      <div className="absolute inset-0 radial-gradient opacity-50" />
      <div className="relative flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
