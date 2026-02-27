export interface UseCaseData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
}

export const USE_CASES: UseCaseData[] = [
  {
    name: "Agentic Video",
    slug: "agentic-video",
    builtWith: "Vision SDK + GenAI SDK",
    description: "Autonomous video analysis and generation powered by composable AI pipelines.",
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "LLM Service + GenAI SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
  },
];