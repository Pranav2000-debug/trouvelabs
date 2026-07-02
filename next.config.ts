import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Static export for Azure Static Web Apps (no Node server at runtime).
  output: "export",
  // Emit per-route folders (about/index.html) so SWA serves deep links natively.
  trailingSlash: true,
  // No image optimizer server on SWA - assets are pre-optimized in /public.
  images: { unoptimized: true },
  reactCompiler: true,
};

const withMDX = createMDX({
  // .mdx files are imported as modules (not routes), so pageExtensions is left default.
  // Plugins are referenced by name (string) so Turbopack can serialize the options.
  options: {
    rehypePlugins: [["rehype-slug"], ["rehype-mdx-code-props"]],
  },
});

export default withMDX(nextConfig);
