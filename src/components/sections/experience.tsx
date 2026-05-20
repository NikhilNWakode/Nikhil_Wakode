"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/shared/animated-text";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="experience"
      className="relative flex min-h-screen items-center py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-5xl px-6 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/20">
            Experience
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Work &{" "}
            <span className="text-gradient-blue">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={i}>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#060609]/60">
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                        <Briefcase className="h-5 w-5 text-white/50" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-blue-400/60">{exp.role}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-xs text-white/30">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-white/40 max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {exp.achievements.map((achievement, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: j * 0.05, duration: 0.4 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/30" />
                        <p className="text-sm text-white/45">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Education */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#060609]/60">
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">
                      <GraduationCap className="h-5 w-5 text-white/50" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        IIIT Kottayam
                      </h3>
                      <p className="text-sm text-blue-400/60">
                        B.Tech — Computer Science & Engineering
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-xs text-white/30">
                    Nov 2022 — Apr 2026
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/35">
                  Indian Institute of Information Technology, Kottayam.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
