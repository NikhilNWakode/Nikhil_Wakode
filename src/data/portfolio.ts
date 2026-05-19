import {
  Brain,
  Server,
  Globe,
  Database,
  Cloud,
  Layout,
  Code2,
  Cpu,
  Container,
  GitBranch,
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
  architecture: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  metrics: { label: string; value: string }[];
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
    tagline: "Intelligent Medical Image Analysis Platform",
    description:
      "An AI-powered platform that analyzes medical images using deep learning models to assist healthcare professionals in diagnosis and treatment planning.",
    problem:
      "Healthcare professionals spend significant time analyzing medical images manually, leading to delayed diagnoses and potential human error in critical cases.",
    solution:
      "Built an end-to-end AI pipeline that processes medical images through specialized deep learning models, providing real-time analysis with confidence scores and detailed reports.",
    architecture:
      "Multi-model inference pipeline with image preprocessing, feature extraction, classification, and report generation stages — all orchestrated through a streaming API.",
    techStack: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      "Real-time medical image analysis with confidence scoring",
      "Multi-model ensemble for improved accuracy",
      "Streaming inference results via WebSocket",
      "Comprehensive reporting with visual overlays",
      "HIPAA-compliant data handling pipeline",
    ],
    challenges: [
      "Optimized model inference to sub-second latency for real-time analysis",
      "Implemented secure, compliant data pipeline for sensitive medical data",
      "Built ensemble model architecture for 94% diagnostic accuracy",
    ],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Latency", value: "<800ms" },
      { label: "Models", value: "5+" },
      { label: "Daily Analyses", value: "1K+" },
    ],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    icon: Brain,
    github: "https://github.com/nikhilwakode",
    flowSteps: [
      { label: "Image Upload", icon: FileText },
      { label: "Preprocessing", icon: Cpu },
      { label: "Model Inference", icon: Brain },
      { label: "Ensemble Scoring", icon: Zap },
      { label: "Report Generation", icon: MessageSquare },
    ],
  },
  {
    id: "medisearch-ai",
    title: "MediSearch AI",
    tagline: "Hybrid RAG-Powered Medical Knowledge Engine",
    description:
      "A production-grade Retrieval-Augmented Generation system that enables healthcare professionals to query vast medical knowledge bases with natural language.",
    problem:
      "Medical professionals struggle to quickly find relevant, up-to-date information across thousands of research papers and clinical guidelines.",
    solution:
      "Designed a hybrid RAG pipeline combining dense and sparse retrieval with reranking, powered by vector search and LLM generation for accurate, cited medical answers.",
    architecture:
      "Hybrid retrieval pipeline using Qdrant vector DB for dense search, BM25 for sparse matching, cross-encoder reranking, and streaming LLM response generation.",
    techStack: [
      "Python",
      "FastAPI",
      "Qdrant",
      "LangChain",
      "Groq",
      "Next.js",
      "TypeScript",
      "Redis",
    ],
    features: [
      "Hybrid dense + sparse retrieval for maximum recall",
      "Cross-encoder reranking for precision",
      "Streaming LLM responses with source citations",
      "Multi-document chunking with semantic boundaries",
      "Query decomposition for complex medical questions",
    ],
    challenges: [
      "Achieved 92% retrieval accuracy with hybrid search approach",
      "Reduced hallucination rate by 40% through citation-grounded generation",
      "Optimized vector search to handle 100K+ document chunks efficiently",
    ],
    metrics: [
      { label: "Retrieval Accuracy", value: "92%" },
      { label: "Response Time", value: "<2s" },
      { label: "Documents", value: "100K+" },
      { label: "Hallucination ↓", value: "40%" },
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    icon: Search,
    github: "https://github.com/nikhilwakode",
    flowSteps: [
      { label: "Query Input", icon: MessageSquare },
      { label: "Embeddings", icon: Cpu },
      { label: "Vector Search", icon: Search },
      { label: "Reranker", icon: Zap },
      { label: "LLM Response", icon: Brain },
    ],
  },
  {
    id: "docmind",
    title: "DocMind",
    tagline: "Intelligent Document Understanding & QA System",
    description:
      "A sophisticated document intelligence platform that ingests, understands, and enables natural language querying over complex multi-format documents.",
    problem:
      "Organizations deal with massive volumes of unstructured documents — PDFs, reports, contracts — making information extraction slow and error-prone.",
    solution:
      "Built an intelligent document pipeline with advanced chunking, multi-modal embeddings, and conversational QA with context-aware retrieval and memory.",
    architecture:
      "Document ingestion pipeline with format detection, intelligent chunking, embedding generation, Qdrant storage, and conversational retrieval chain with memory.",
    techStack: [
      "Python",
      "FastAPI",
      "Qdrant",
      "LangChain",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Multi-format document ingestion (PDF, DOCX, TXT)",
      "Intelligent semantic chunking with overlap",
      "Conversational QA with chat memory",
      "Source highlighting and page references",
      "Batch processing for large document sets",
    ],
    challenges: [
      "Implemented semantic chunking that preserves document structure and context",
      "Built conversational memory system for multi-turn document QA",
      "Optimized batch ingestion to process 500+ pages in under 60 seconds",
    ],
    metrics: [
      { label: "QA Accuracy", value: "89%" },
      { label: "Ingestion", value: "500pg/min" },
      { label: "Formats", value: "10+" },
      { label: "Conversations", value: "5K+" },
    ],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    icon: FileText,
    github: "https://github.com/nikhilwakode",
    flowSteps: [
      { label: "PDF Upload", icon: FileText },
      { label: "Chunking", icon: Code2 },
      { label: "Embeddings", icon: Cpu },
      { label: "Qdrant Store", icon: Database },
      { label: "Streaming QA", icon: MessageSquare },
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
    period: "2024 — 2025",
    description:
      "Built production-grade AI/ML pipelines and backend systems powering intelligent travel operations at scale.",
    achievements: [
      "Developed LLM-powered NLP classification pipelines for automated supplier risk scoring",
      "Built semantic analysis engine processing thousands of supplier communications daily",
      "Designed and deployed Spring Boot REST APIs serving internal operations teams",
      "Implemented real-time data pipelines for supplier quality monitoring",
      "Reduced manual review time by 60% through intelligent automation",
    ],
    technologies: [
      "Python",
      "Spring Boot",
      "Java",
      "NLP",
      "LLM Pipelines",
      "PostgreSQL",
      "Redis",
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
    name: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "REST / WebSocket", level: 90 },
    ],
  },
  {
    name: "AI / ML",
    icon: Brain,
    skills: [
      { name: "RAG Systems", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "LLM Pipelines", level: 92 },
      { name: "NLP / Embeddings", level: 88 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Qdrant", level: 92 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    name: "DevOps",
    icon: Container,
    skills: [
      { name: "Docker", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Git / GitHub", level: 95 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "GCP", level: 75 },
      { name: "Cloudflare", level: 80 },
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
  "LangChain",
  "TypeScript",
  "Python",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Spring Boot",
  "TensorFlow",
];

export const processSteps = [
  {
    step: "01",
    title: "Research",
    description: "Deep-dive into the problem space, user needs, and existing solutions.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture",
    description: "Design scalable system architecture with clear data flow patterns.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Retrieval Design",
    description: "Build intelligent retrieval pipelines — chunking, embeddings, reranking.",
    icon: Database,
  },
  {
    step: "04",
    title: "Backend Systems",
    description: "Implement robust APIs, data pipelines, and real-time processing.",
    icon: Server,
  },
  {
    step: "05",
    title: "Frontend Experience",
    description: "Craft beautiful, performant interfaces with smooth interactions.",
    icon: Globe,
  },
  {
    step: "06",
    title: "Deployment",
    description: "Containerize, optimize, and deploy with CI/CD automation.",
    icon: Cloud,
  },
  {
    step: "07",
    title: "Optimization",
    description: "Monitor, benchmark, and continuously improve performance.",
    icon: Zap,
  },
];

export const aboutMetrics = [
  { label: "Projects Built", value: "12+" },
  { label: "AI Systems", value: "5+" },
  { label: "APIs Designed", value: "15+" },
  { label: "Technologies", value: "25+" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/nikhilwakode",
  linkedin: "https://linkedin.com/in/nikhilwakode",
  email: "wakode333nikhil@gmail.com",
};
