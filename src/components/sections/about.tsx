"use client";

import { motion } from "framer-motion";
import { aboutMetrics } from "@/data/portfolio";
import { Reveal } from "@/components/shared/animated-text";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <Reveal>
          <span className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/20">
            About
          </span>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
                I build AI applications
                <br />
                <span className="text-white/30">end to end.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-white/40 max-w-2xl">
                <p>
                  I&apos;m a CS undergrad at IIIT Kottayam with a focus on building
                  full-stack AI systems. Most of my recent work involves RAG pipelines —
                  hybrid retrieval with BM25 + vector search, cross-encoder reranking,
                  and streaming LLM responses.
                </p>
                <p>
                  I like working across the stack: Python/FastAPI for backends,
                  Next.js/TypeScript for frontends, Qdrant for vector storage,
                  and Docker for deployment. I care about things actually working
                  in production, not just in demos.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="flex flex-col gap-6 lg:pt-4">
              {aboutMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="border-l-2 border-white/[0.06] pl-6 transition-colors hover:border-blue-500/30"
                >
                  <p className="text-xl font-bold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/25">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] md:grid-cols-3">
            {[
              {
                title: "AI / RAG Systems",
                desc: "Hybrid retrieval pipelines, vector search with Qdrant, BM25 + reranking, streaming LLM integration.",
              },
              {
                title: "Full-Stack Development",
                desc: "FastAPI + Next.js apps with JWT auth, WebSocket streaming, Docker deployment, CI/CD.",
              },
              {
                title: "Frontend",
                desc: "React, TypeScript, Tailwind, Framer Motion. Clean interfaces that make complex systems usable.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="relative p-8 transition-colors"
              >
                {i < 2 && (
                  <div className="absolute right-0 top-8 bottom-8 hidden w-px bg-white/[0.06] md:block" />
                )}
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400/40">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/35">
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
