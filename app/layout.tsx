import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { LazyMotionProvider } from "@/components/ui/lazy-motion-provider";
import { Suspense } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trouvelabs.vercel.app";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trouve Labs - AI SDK Platform for Intelligent Mobility",
    template: "%s | Trouve Labs",
  },
  description:
    "Trouve Labs builds AI SDKs - knowledge graphs, voice, vision, and data intelligence - that power next-generation mobility systems and enterprise AI.",
  applicationName: "Trouve Labs",
  authors: [{ name: "Trouve Labs", url: SITE_URL }],
  creator: "Trouve Labs",
  publisher: "Trouve Labs",
  category: "technology",
  keywords: [
    "Trouve Labs",
    "AI SDK",
    "knowledge graph",
    "retrieval-augmented generation",
    "graph RAG",
    "data intelligence SDK",
    "voice AI SDK",
    "vision AI SDK",
    "tokenization SDK",
    "generative AI SDK",
    "multi-tenant AI platform",
    "enterprise AI",
    "intelligent mobility",
    "AHOY ecosystem",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Trouve Labs",
    title: "Trouve Labs - AI SDK Platform for Intelligent Mobility",
    description:
      "AI SDKs for knowledge graphs, voice, vision, and data intelligence. Built for enterprise teams shipping next-generation mobility systems.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        // TODO: replace with a purpose-built 1200x630 OG image; currently using the brand logo as a placeholder
        url: "/FULL LOGO.png",
        width: 1200,
        height: 630,
        alt: "Trouve Labs - AI SDK Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trouve Labs - AI SDK Platform for Intelligent Mobility",
    description:
      "AI SDKs for knowledge graphs, voice, vision, and data intelligence. Built for enterprise teams shipping next-generation mobility systems.",
    images: ["/FULL LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} ${robotoCondensed.variable} ${jetbrainsMono.variable}`}>
        <LazyMotionProvider>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazyMotionProvider>
      </body>
    </html>
  );
}
