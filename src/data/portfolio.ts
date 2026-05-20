import {
  Brain,
  Server,
  Database,
  Cloud,
  Layout,
  Code2,
  Cpu,
  Container,
  Zap,
  Search,
  FileText,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  gradient: string;
  icon: LucideIcon;
  github?: string;
  live?: string;
  flowSteps: { label: string; icon: LucideIcon }[];
}

export const projects: Project[] = [
  {
    id: "medvision-ai",
    title: "MedVision AI",
    tagline: "Multimodal Radiology Copilot",
    description:
      "A full-stack radiology AI platform with structured report generation, DICOM parsing, canvas-based image viewer, and HL7 FHIR R4 export for EHR integration.",
    problem:
      "Radiologists need quick, structured insights from medical images along with relevant literature — but existing tools don't connect imaging with knowledge retrieval in one workflow.",
    solution:
      "Built a hybrid RAG pipeline using BiomedCLIP (512-d) image and BGE (768-d) text embeddings with BM25, vector search, Reciprocal Rank Fusion, and LLM-based reranking.",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "BiomedCLIP",
      "BGE",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      "Hybrid RAG with BiomedCLIP image + BGE text embeddings",
      "BM25 + vector search + Reciprocal Rank Fusion + LLM reranking",
      "WebSocket streaming chat with real-time responses",
      "Patient case management with priority tracking and audit trail",
      "Deployed via Docker Compose with GitHub Actions CI/CD",
    ],
    challenges: [
      "Integrated multimodal embeddings (image + text) into a single retrieval pipeline",
      "Implemented DICOM parsing and canvas-based image viewer for radiology workflows",
      "Built HL7 FHIR R4 export for EHR system integration",
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    icon: Brain,
    github: "https://github.com/NikhilNWakode",
    flowSteps: [
      { label: "DICOM Upload", icon: FileText },
      { label: "BiomedCLIP + BGE", icon: Cpu },
      { label: "Hybrid Search", icon: Search },
      { label: "RRF + Reranker", icon: Zap },
      { label: "Streaming Report", icon: MessageSquare },
    ],
  },
  {
    id: "medisearch-ai",
    title: "MediSearch AI",
    tagline: "AI-Powered Medical Research Assistant",
    description:
      "A production-ready RAG system for medical Q&A that ingests PubMed papers via NCBI Entrez API, indexes BGE-embedded chunks into Qdrant, and delivers citation-backed answers.",
    problem:
      "Researchers and clinicians spend hours searching through PubMed papers to find relevant answers — and existing search tools return documents, not direct answers with citations.",
    solution:
      "Implemented hybrid retrieval (BM25 + semantic search + RRF + cross-encoder reranking) delivering citation-backed answers with multi-turn context memory and PDF export.",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Qdrant",
      "Llama 3",
      "BM25",
      "RAGAS",
    ],
    features: [
      "PubMed paper ingestion via NCBI Entrez API with BGE embeddings",
      "Hybrid retrieval: BM25 + semantic search + RRF + cross-encoder reranking",
      "Citation-backed answers with multi-turn context memory",
      "Pipeline evaluation with RAGAS metrics",
      "Dual LLM support — Ollama locally, Groq in cloud",
    ],
    challenges: [
      "Evaluated retrieval quality systematically with RAGAS metrics",
      "Built dual LLM support for local dev (Ollama) and production (Groq)",
      "Deployed on Railway/Render with JWT auth and dark/light UI",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    icon: Search,
    github: "https://github.com/NikhilNWakode",
    flowSteps: [
      { label: "PubMed Ingest", icon: FileText },
      { label: "BGE Embeddings", icon: Cpu },
      { label: "Hybrid Search", icon: Search },
      { label: "Cross-Encoder", icon: Zap },
      { label: "Llama 3 Response", icon: Brain },
    ],
  },
  {
    id: "docmind",
    title: "DocMind",
    tagline: "AI Document Intelligence Platform",
    description:
      "A document-scoped RAG platform for PDF, DOCX, TXT, and image files (OCR via Tesseract). Each chat is isolated to its linked document for accurate, focused retrieval.",
    problem:
      "People deal with long, complex documents — PDFs, reports, contracts — and need a way to ask questions and get accurate answers scoped to a specific document.",
    solution:
      "Designed an ingestion pipeline (PyMuPDF → tiktoken → HuggingFace embeddings → Qdrant) with SSE streaming progress and Groq-powered (Llama 3.3 70B) chat responses.",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "Groq",
      "Docker",
    ],
    features: [
      "Multi-format ingestion: PDF, DOCX, TXT, images with OCR (Tesseract)",
      "Document-scoped RAG — each chat isolated to its linked document",
      "SSE streaming for ingestion progress and chat responses",
      "JWT access/refresh token auth with Redis rate limiting",
      "Framer Motion UI deployed on Vercel + Render",
    ],
    challenges: [
      "Built document-scoped retrieval so each chat stays focused on its linked file",
      "Implemented ingestion pipeline: PyMuPDF → tiktoken → HuggingFace embeddings → Qdrant",
      "Set up JWT access/refresh tokens and Redis rate limiting for production use",
    ],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    icon: FileText,
    github: "https://github.com/NikhilNWakode",
    flowSteps: [
      { label: "Document Upload", icon: FileText },
      { label: "PyMuPDF Parse", icon: Code2 },
      { label: "HF Embeddings", icon: Cpu },
      { label: "Qdrant Store", icon: Database },
      { label: "Groq Streaming", icon: MessageSquare },
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "TripFactory",
    role: "Software Developer Intern",
    period: "Jan 2026 — Apr 2026",
    description:
      "Worked on AI/NLP pipelines and backend systems for travel operations.",
    achievements: [
      "Built an NLP pipeline using LLMs (Groq API, Qwen2.5, Phi-3-mini) to classify customer support issues into 46 categories with automated supplier risk scoring",
      "Designed hybrid AI workflows with PII anonymization, semantic issue analysis, and automated response evaluation",
      "Developed JWT-based auth modules in Java and Spring Boot; debugged and optimized legacy enterprise APIs",
      "Collaborated with cross-functional teams to improve API performance and streamline issue resolution workflows",
    ],
    technologies: [
      "Python",
      "Groq API",
      "Spring Boot",
      "Java",
      "NLP",
      "LLMs",
      "PostgreSQL",
      "Docker",
    ],
  },
];

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    name: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TailwindCSS", level: 90 },
      { name: "Redux", level: 75 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js / Express", level: 82 },
      { name: "Spring Boot", level: 72 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    name: "AI / ML",
    icon: Brain,
    skills: [
      { name: "RAG Pipelines", level: 88 },
      { name: "Vector Search", level: 85 },
      { name: "LLM Integration", level: 85 },
      { name: "BM25 / Reranking", level: 82 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Qdrant", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    name: "DevOps",
    icon: Container,
    skills: [
      { name: "Docker", level: 82 },
      { name: "Git / GitHub Actions", level: 88 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 78 },
    ],
  },
];

export const techMarquee = [
  "Next.js",
  "FastAPI",
  "Qdrant",
  "Docker",
  "PostgreSQL",
  "Redis",
  "Groq",
  "TypeScript",
  "Python",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Spring Boot",
  "LangChain",
  "BM25",
];

export const aboutMetrics = [
  { label: "Education", value: "IIIT Kottayam" },
  { label: "Degree", value: "B.Tech CSE" },
  { label: "Graduating", value: "2026" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/NikhilNWakode",
  linkedin: "https://linkedin.com/in/nikhilwakode",
  email: "wakode333nikhil@gmail.com",
};
