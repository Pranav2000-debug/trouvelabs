export interface UseCaseData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
}

export const USE_CASES: UseCaseData[] = [
  {
    name: "Data Intelligence",
    slug: "data-intelligence",
    builtWith: "Graph RAG SDK",
    description: "Intelligent data processing and analysis with graph-based retrieval.",
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "LLM Service + GenAI SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
  },
];