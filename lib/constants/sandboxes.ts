export interface SandboxData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
  /** Internal path or full external URL */
  href: string;
  /** When true, link opens in a new tab */
  external?: boolean;
  /** Product illustration shown at the top of the sandbox card */
  image: string;
}

export const SANDBOXES: SandboxData[] = [
  {
    name: "Perception",
    slug: "perception",
    builtWith: "Perception SDK",
    description: "Computer vision capabilities for intelligent visual processing.",
    href: "https://perceptionsdk.trouvelabs.io/",
    external: true,
    image: "/product/perception-img.webp",
  },
  {
    name: "Data Intelligence Platform",
    slug: "data-intelligence",
    builtWith: "Data Intelligence SDK",
    description: "Intelligent data processing and analysis with graph-based retrieval.",
    href: "https://dataintelligence.trouve.works",
    external: true,
    image: "/product/data-intelligence.webp",
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "Voice SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
    href: "https://denoise.trouve.works/",
    external: true,
    image: "/product/voice-sdk.webp",
  },
];
