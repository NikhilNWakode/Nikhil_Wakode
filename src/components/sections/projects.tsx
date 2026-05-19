"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/animated-text";
import { MagneticButton } from "@/components/shared/magnetic-button";

function ArchitectureFlow({ steps }: { steps: Project["flowSteps"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mt-8 overflow-x-auto pb-2">
      <div className="flex items-center gap-2 md:gap-3 min-w-max">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 md:px-4 md:py-2.5"
              >
                <Icon className="h-3.5 w-3.5 text-blue-400/70" />
                <span className="text-xs font-medium text-white/60 whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
                  className="h-px w-6 bg-gradient-to-r from-blue-500/40 to-blue-500/10 md:w-8"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 !== 0;
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a]/80 transition-colors duration-300 group-hover:border-white/[0.1]">
        <div className="spotlight absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className={`relative grid gap-0 lg:grid-cols-2 ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={`p-8 md:p-12 ${isReversed ? "lg:col-start-2" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40">{project.tagline}</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/50">
              {project.description}
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Problem
                </h4>
                <p className="text-sm text-white/40">{project.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Solution
                </h4>
                <p className="text-sm text-white/40">{project.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
                Architecture Flow
              </h4>
              <ArchitectureFlow steps={project.flowSteps} />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {project.github && (
                <MagneticButton
                  href={project.github}
                  target="_blank"
                  className="border border-white/[0.1] bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </MagneticButton>
              )}
              {project.live && (
                <MagneticButton
                  href={project.live}
                  target="_blank"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              )}
            </div>
          </div>

          <div className={`relative border-white/[0.04] p-8 md:p-12 ${isReversed ? "lg:col-start-1 lg:border-r" : "lg:border-l"}`}>
            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Key Features
                </h4>
                <StaggerContainer staggerDelay={0.05}>
                  {project.features.map((feature, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 py-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/50" />
                        <p className="text-sm text-white/50">{feature}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Challenges Solved
                </h4>
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/50" />
                    <p className="text-sm text-white/50">{challenge}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Impact & Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <p className="text-xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-xs text-white/30">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="absolute inset-0 radial-gradient opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Featured Work"
          title="Projects That Push Boundaries"
          description="Production-grade AI systems designed for scale, reliability, and exceptional user experience."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
