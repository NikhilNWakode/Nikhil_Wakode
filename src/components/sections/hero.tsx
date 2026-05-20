"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { AuroraBackground } from "@/components/effects/aurora-background";

const terminalPhases = [
  [
    { text: "$ python -m medisearch.pipeline --start", type: "cmd" },
    { text: "", type: "blank" },
    { text: "⟩ Loading BGE embedding model...", type: "info" },
    { text: "⟩ Connecting to Qdrant vector store...", type: "info" },
    { text: "✓ Vector DB connected", type: "success" },
    { text: "✓ Hybrid retrieval ready: BM25 + dense + reranker", type: "success" },
    { text: "", type: "blank" },
    { text: "⟩ Starting FastAPI server on :8000...", type: "info" },
    { text: "✓ WebSocket streaming enabled", type: "success" },
    { text: "✓ Pipeline ready", type: "success" },
  ],
  [
    { text: "", type: "blank" },
    { text: "$ query --input=\"treatment options for arrhythmia\"", type: "cmd" },
    { text: "", type: "blank" },
    { text: "⟩ Embedding query → 768-dim vector", type: "info" },
    { text: "⟩ Dense retrieval: 20 candidates", type: "info" },
    { text: "⟩ Sparse retrieval (BM25): 15 candidates", type: "info" },
    { text: "⟩ RRF fusion + cross-encoder reranking", type: "info" },
    { text: "✓ Top-5 passages selected", type: "success" },
    { text: "", type: "blank" },
    { text: "⟩ Streaming response from Llama 3...", type: "info" },
    { text: "█ Generating...", type: "stream" },
    { text: "✓ Response complete — 3 citations attached", type: "success" },
  ],
  [
    { text: "", type: "blank" },
    { text: "$ docker compose up --build", type: "cmd" },
    { text: "", type: "blank" },
    { text: "⟩ Building containers...", type: "info" },
    { text: "⟩ Running health checks...", type: "info" },
    { text: "✓ All services healthy", type: "success" },
    { text: "✓ Deployed successfully", type: "success" },
  ],
];

function InteractiveTerminal() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ text: string; type: string }[]>([]);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const phase = terminalPhases[phaseIndex];
    if (!phase || lineIndex >= phase.length) {
      if (phaseIndex < terminalPhases.length - 1) {
        const timeout = setTimeout(() => {
          setPhaseIndex((p) => p + 1);
          setLineIndex(0);
        }, 1500);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setLines([]);
        setPhaseIndex(0);
        setLineIndex(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const delay =
      phase[lineIndex].type === "cmd"
        ? 600
        : phase[lineIndex].type === "blank"
          ? 100
          : 200;
    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, phase[lineIndex]]);
      setLineIndex((l) => l + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [phaseIndex, lineIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const colorMap: Record<string, string> = {
    cmd: "text-blue-400",
    info: "text-white/40",
    success: "text-emerald-400/90",
    stream: "text-amber-400/80",
    blank: "text-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full max-w-xl"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/30 via-blue-500/5 to-transparent" />
      <div className="absolute -inset-8 rounded-3xl bg-blue-500/[0.04] blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050508]">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
          </div>
          <div className="ml-3 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] text-white/25">
              rag-pipeline — zsh
            </span>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="h-[280px] overflow-y-auto p-4 md:h-[320px] scrollbar-none"
        >
          {lines.map((line, i) => (
            <motion.div
              key={`${phaseIndex}-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`font-mono text-[11px] leading-[1.8] md:text-xs ${colorMap[line.type] || "text-white/40"}`}
            >
              {line.text || " "}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="inline-block h-3.5 w-1.5 bg-blue-400/50 mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
}

function CursorSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const hero = document.getElementById("home");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(800px circle at ${x}px ${y}px, rgba(59,130,246,0.04), transparent 40%)`
  );

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{ background }}
    />
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] max-h-[1000px] items-center overflow-hidden"
    >
      <AuroraBackground />
      <div className="absolute inset-0 grid-pattern" />
      <CursorSpotlight />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[11px] font-medium tracking-wide text-white/40">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-blue">Nikhil</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/35 lg:mx-0 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full-stack developer building AI-powered applications — RAG
            pipelines, hybrid retrieval systems, and the interfaces around them.
            Currently finishing my B.Tech at IIIT Kottayam.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
              className="border border-white/[0.1] bg-white/[0.03] text-white/80 hover:bg-white/[0.06]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex-1 hidden lg:flex justify-end">
          <InteractiveTerminal />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-white/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
