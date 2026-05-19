"use client";

import { motion } from "framer-motion";
import { aboutMetrics } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/shared/animated-text";

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at center, rgba(59,130,246,0.05), transparent 70%)",
        }}
      />
      <p className="relative text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="relative mt-1 text-sm text-white/40">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="About"
          title="Crafting AI Systems That Scale"
          description="I build production-grade AI applications — from intelligent retrieval pipelines to beautiful, performant interfaces."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white/[0.05] text-4xl font-bold text-white/80">
                      NW
                    </div>
                    <p className="mt-4 text-sm text-white/30">Nikhil Wakode</p>
                    <p className="text-xs text-white/20">AI + Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <div className="space-y-6 text-white/50 leading-relaxed">
                <p>
                  I&apos;m a full-stack engineer with deep expertise in building AI-powered
                  applications. My focus is on designing production-grade RAG systems,
                  hybrid retrieval pipelines, and scalable backend architectures that serve
                  real users at scale.
                </p>
                <p>
                  From vector search optimization to streaming LLM responses, I work across
                  the entire stack — combining robust backend systems with meticulously crafted
                  frontend experiences. Every system I build is designed for reliability,
                  performance, and maintainability.
                </p>
                <p>
                  I believe the best AI products are invisible — they feel effortless to use,
                  but are backed by sophisticated engineering underneath.
                </p>
              </div>
            </Reveal>

            <StaggerContainer className="mt-10 grid grid-cols-2 gap-4" delay={0.3}>
              {aboutMetrics.map((metric) => (
                <StaggerItem key={metric.label}>
                  <MetricCard {...metric} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "AI Systems",
                desc: "Production RAG pipelines, hybrid search, reranking, and streaming LLM integrations.",
              },
              {
                title: "Scalable Architecture",
                desc: "Event-driven backends, microservices, real-time processing, and containerized deployments.",
              },
              {
                title: "Frontend Craft",
                desc: "Pixel-perfect interfaces, smooth animations, accessible design, and optimized performance.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.1]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.06), transparent 70%)",
                  }}
                />
                <h3 className="relative text-lg font-semibold text-white">{card.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/40">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
