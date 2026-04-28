"use client";
import ReactLenis from "lenis/react";

// TODO: Add docs sidebar - separate task.
export default function GenAiSdkDocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReactLenis>{children}</ReactLenis>
    </>
  );
}
