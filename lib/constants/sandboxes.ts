export interface SandboxData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
  /** Internal path or full external URL */
  href: string;
  /** When true, link opens in a new tab */
  external?: boolean;
}

export const SANDBOXES: SandboxData[] = [
  {
    name: "Data Intelligence",
    slug: "data-intelligence",
    builtWith: "Data Intelligence SDK",
    description: "Intelligent data processing and analysis with graph-based retrieval.",
    href: "https://dataintelligence.trouve.works",
    external: true,
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "Voice SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
    href: "https://voiceai.trouve.works",
    external: true,
  },
];
