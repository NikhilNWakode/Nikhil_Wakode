"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { AuroraBackground } from "@/components/effects/aurora-background";

const terminalLines = [
  { text: "$ initializing ai-pipeline...", delay: 0.8 },
  { text: "→ loading embeddings model [all-MiniLM-L6-v2]", delay: 1.4 },
  { text: "→ connecting to Qdrant vector store", delay: 2.0 },
  { text: "✓ vector db connected [128 collections]", delay: 2.6 },
  { text: "→ building retrieval chain...", delay: 3.2 },
  { text: "→ hybrid search: dense + sparse + reranker", delay: 3.8 },
  { text: "✓ RAG pipeline ready [latency: 230ms]", delay: 4.4 },
  { text: "→ websocket server listening on :8080", delay: 5.0 },
  { text: "✓ streaming response enabled", delay: 5.4 },
  { text: "→ deploying to production...", delay: 5.8 },
  { text: "✓ deployment successful ✨", delay: 6.4 },
];

function TerminalCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full max-w-lg"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent opacity-50 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <span className="ml-2 font-mono text-xs text-white/30">ai-pipeline — zsh</span>
        </div>
        <div ref={scrollRef} className="h-[320px] overflow-y-auto p-4 md:h-[360px]">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.4 }}
              className={`font-mono text-xs leading-relaxed md:text-sm ${
                line.text.startsWith("✓")
                  ? "text-emerald-400/80"
                  : line.text.startsWith("$")
                    ? "text-blue-400/80"
                    : "text-white/40"
              }`}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="mt-2 inline-block h-4 w-2 bg-blue-400/60"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <AuroraBackground />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-white/50">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Building{" "}
            <span className="text-gradient-blue">Intelligent Systems</span>
            <br />
            with Exceptional{" "}
            <span className="text-gradient">Interfaces.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base text-white/40 md:text-lg lg:mx-0 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            AI Engineer + Full Stack Developer specializing in RAG systems,
            AI applications, scalable backend systems, and modern frontend
            experiences.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton
              href="#projects"
              className="bg-white text-black hover:bg-white/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.08]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex-1 hidden lg:flex justify-end">
          <TerminalCard />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20">Scroll</span>
          <ArrowDown className="h-4 w-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
