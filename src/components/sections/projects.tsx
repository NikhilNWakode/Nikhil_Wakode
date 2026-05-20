"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";
import { projects, type Project } from "@/data/portfolio";
import { MagneticButton } from "@/components/shared/magnetic-button";

function AnimatedArchitecture({ steps }: { steps: Project["flowSteps"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative py-4">
      <div className="flex flex-col items-center gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="group relative flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 transition-all hover:border-blue-500/20 hover:bg-blue-500/[0.04]"
              >
                <Icon className="relative h-3.5 w-3.5 text-blue-400/60" />
                <span className="relative text-xs font-medium text-white/50">
                  {step.label}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={inView ? { height: 24, opacity: 1 } : {}}
                  transition={{ delay: i * 0.12 + 0.08, duration: 0.3 }}
                  className="w-px overflow-hidden"
                >
                  <div className="h-full w-full bg-gradient-to-b from-blue-500/30 to-blue-500/10" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -30]);
  const Icon = project.icon;

  const gradientColors: Record<number, string> = {
    0: "from-blue-500/[0.05]",
    1: "from-violet-500/[0.05]",
    2: "from-emerald-500/[0.05]",
  };

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="relative">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradientColors[index] || "from-blue-500/[0.05]"} to-transparent rounded-2xl`}
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#060609]/80">
        <div className="p-6 md:p-10 lg:p-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-white/20">
              0{index + 1}
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/30">{project.tagline}</p>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-white/40 md:text-base">
                {project.description}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400/50">
                    Problem
                  </h4>
                  <p className="text-sm leading-relaxed text-white/35">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400/50">
                    Approach
                  </h4>
                  <p className="text-sm leading-relaxed text-white/35">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-white/40"
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
                    className="border border-white/[0.08] bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
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

            <div className="hidden lg:block">
              <h4 className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                Pipeline
              </h4>
              <AnimatedArchitecture steps={project.flowSteps} />
            </div>
          </div>

          {/* Mobile architecture */}
          <div className="mt-8 lg:hidden">
            <div className="overflow-x-auto pb-2">
              <div className="flex items-center gap-2 min-w-max">
                {project.flowSteps.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                        <StepIcon className="h-3 w-3 text-blue-400/60" />
                        <span className="text-[11px] text-white/50">
                          {step.label}
                        </span>
                      </div>
                      {i < project.flowSteps.length - 1 && (
                        <span className="text-white/15 text-xs">→</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                What I Built
              </h4>
              <div className="space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/40" />
                    <p className="text-sm text-white/40">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                Interesting Challenges
              </h4>
              <div className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/40" />
                    <p className="text-sm text-white/40">{challenge}</p>
                  </div>
                ))}
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
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/20">
            Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Things I&apos;ve{" "}
            <span className="text-gradient-blue">Built</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm text-white/30">
            Full-stack AI applications with hybrid retrieval, streaming
            responses, and production deployment.
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-16 md:space-y-20">
          {projects.map((project, i) => (
            <ProjectSection key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
