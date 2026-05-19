"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/animated-text";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Built & Shipped"
          description="Building production systems and AI pipelines in real-world environments."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent md:left-8" />

          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-8 md:pl-20">
                <div className="absolute left-0 top-0 md:left-8">
                  <motion.div
                    className="flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                  </motion.div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.1]">
                  <div className="spotlight absolute inset-0 opacity-0 transition-opacity hover:opacity-100" />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                          <Briefcase className="h-5 w-5 text-white/60" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                          <p className="text-sm text-blue-400/70">{exp.role}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/40">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-white/40">{exp.description}</p>

                    <StaggerContainer className="mt-6 space-y-2" delay={0.2} staggerDelay={0.05}>
                      {exp.achievements.map((achievement, j) => (
                        <StaggerItem key={j}>
                          <div className="flex items-start gap-3">
                            <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                            <p className="text-sm text-white/50">{achievement}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>

                    <div className="mt-6">
                      <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-3 w-3 rounded-full bg-white/10" />
                          <div className="h-3 w-3 rounded-full bg-white/10" />
                          <div className="h-3 w-3 rounded-full bg-white/10" />
                          <span className="ml-2 text-xs text-white/20 font-mono">tech-stack.ts</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-white/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
