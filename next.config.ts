import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
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
