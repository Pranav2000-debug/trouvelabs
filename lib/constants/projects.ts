import { Eye, Lock, Network, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { VoiceAiLineIcon } from "@/components/icons/ri-voice-ai-line";

type ProjectIcon = ComponentType<{ className?: string }>;

export type Project = {
  title: string;
  slug: string;
  description: string;
  icon: ProjectIcon;
  comingSoon?: boolean;
  /** Overrides the "API Reference" docs nav label for this project. */
  apiReferenceLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Perception SDK",
    slug: "perception-sdk",
    description: "Computer vision capabilities for intelligent visual processing.",
    icon: Eye,
    apiReferenceLabel: "User Guide",
  },
  {
    title: "Data Intelligence SDK",
    slug: "data-intelligence-sdk",
    description: "Knowledge graph + retrieval-augmented generation for context-aware AI.",
    icon: Network,
  },
  {
    title: "Voice SDK",
    slug: "voice-sdk",
    description: "Advanced voice processing and understanding capabilities.",
    icon: VoiceAiLineIcon,
  },
  {
    title: "Tokenization SDK",
    slug: "tokenization-sdk",
    description: "Secure data tokenization and orchestration at scale.",
    icon: Lock,
    comingSoon: true,
  },
  {
    title: "GenAI SDK",
    slug: "genai-sdk",
    description: "Multimodal generative AI capabilities for diverse applications.",
    icon: Sparkles,
    comingSoon: true,
  },
];
