"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Process"
          title="How I Build AI Products"
          description="A systematic approach from research to production — every step designed for reliability and scale."
        />

        <div ref={ref} className="relative">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />

          <div className="grid gap-6 md:gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="group relative"
                >
                  <div className="flex items-start gap-6 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03] md:gap-8 md:p-8 lg:ml-16">
                    <div className="absolute left-8 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 lg:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="h-full w-full rounded-full border border-white/[0.15] bg-[#0a0a0a]"
                      >
                        <div className="absolute inset-1 rounded-full bg-white/20" />
                      </motion.div>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] transition-colors group-hover:bg-blue-500/10">
                      <Icon className="h-5 w-5 text-white/40 transition-colors group-hover:text-blue-400/70" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-white/20">
                          {step.step}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-white/40">
                        {step.description}
                      </p>
                    </div>

                    {i < processSteps.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 text-white/10 md:block">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 0V10M6 10L2 6M6 10L10 6" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
