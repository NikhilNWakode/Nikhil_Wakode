"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const responses: Record<string, string> = {
  projects:
    "I've built three main projects: MedVision AI (a multimodal radiology copilot using BiomedCLIP + BGE embeddings with hybrid RAG), MediSearch AI (a medical research assistant that ingests PubMed papers and answers questions with citations), and DocMind (a document QA platform with OCR support). All three use FastAPI + Next.js + Qdrant.",
  skills:
    "My main stack is Python/FastAPI for backends, Next.js/TypeScript for frontends, Qdrant for vector search, and Docker for deployment. I work a lot with RAG pipelines — BM25, vector search, cross-encoder reranking, and streaming LLM responses via Groq and Ollama.",
  experience:
    "I interned at TripFactory (Jan–Apr 2026) as a Software Developer. Built an NLP pipeline using Groq API with Qwen2.5 and Phi-3-mini to classify support issues into 46 categories. Also worked on PII anonymization, Spring Boot APIs, and JWT auth.",
  education:
    "I'm doing my B.Tech in Computer Science at IIIT Kottayam (Indian Institute of Information Technology). Graduating in April 2026.",
  rag:
    "My RAG approach: I use hybrid retrieval combining BM25 (sparse) with dense vector search via BGE embeddings in Qdrant. Then I apply Reciprocal Rank Fusion to merge results and a cross-encoder for reranking. Responses stream from Llama 3 or Groq with citations.",
  default:
    "Hey! I can tell you about Nikhil's projects, tech stack, work experience, or education. What would you like to know?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("project") || lower.includes("build") || lower.includes("medvision") || lower.includes("docmind") || lower.includes("medisearch")) return responses.projects;
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("language")) return responses.skills;
  if (lower.includes("experience") || lower.includes("job") || lower.includes("intern") || lower.includes("tripfactory") || lower.includes("work")) return responses.experience;
  if (lower.includes("education") || lower.includes("college") || lower.includes("university") || lower.includes("degree") || lower.includes("iiit")) return responses.education;
  if (lower.includes("rag") || lower.includes("retrieval") || lower.includes("vector") || lower.includes("pipeline")) return responses.rag;
  return responses.default;
}

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! Ask me anything about Nikhil — projects, skills, experience, or education.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function handleSend() {
    if (!input.trim() || isTyping) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(userMsg);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 600 + Math.random() * 400);
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0a0a0a] text-white/50 shadow-2xl shadow-black/40 transition-all hover:border-blue-500/20 hover:text-blue-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <Sparkles className="h-4 w-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[min(360px,calc(100vw-48px))] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                  <Brain className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Ask about Nikhil
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="h-[280px] overflow-y-auto p-3.5 space-y-3"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2 text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-500/15 text-white/80"
                        : "bg-white/[0.04] text-white/55"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-xl bg-white/[0.04] px-3.5 py-2.5">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-white/20"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/[0.06] p-2.5">
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 transition-all hover:bg-blue-500/30 disabled:opacity-30"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
