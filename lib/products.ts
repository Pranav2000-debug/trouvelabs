import { Eye, Lock, Network, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
};

export const PRODUCTS: Product[] = [
  {
    title: "Vision SDK",
    slug: "vision-sdk",
    description: "Computer vision capabilities for intelligent visual processing.",
    icon: Eye,
  },
  {
    title: "Graph RAG SDK",
    slug: "graph-rag-sdk",
    description: "Knowledge graph + retrieval-augmented generation for context-aware AI.",
    icon: Network,
  },
  {
    title: "Tokenization SDK",
    slug: "tokenization-sdk",
    description: "Secure data tokenization and orchestration at scale.",
    icon: Lock,
  },
  {
    title: "GenAI SDK",
    slug: "genai-sdk",
    description: "Multimodal generative AI capabilities for diverse applications.",
    icon: Sparkles,
  },
];
