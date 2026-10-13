import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Roboto, Roboto_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { LazyMotionProvider } from "@/components/ui/lazy-motion-provider";
import { Suspense } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trouvelabs.io";

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
    default: "Trouve Labs - R&D Engine for Intelligent Mobility Systems",
    template: "%s | Trouve Labs",
  },
  description:
    "Trouve Labs is the R&D engine behind AHOY. We de-risk deep technology to build sovereign infrastructure systems for mobility, smart cities, and critical infrastructure - shipping AI SDKs as one output of that research.",
  applicationName: "Trouve Labs",
  authors: [{ name: "Trouve Labs", url: SITE_URL }],
  creator: "Trouve Labs",
  publisher: "Trouve Labs",
  category: "technology",
  keywords: [
    "Trouve Labs",
    "R&D lab",
    "deep tech research",
    "sovereign infrastructure",
    "intelligent mobility",
    "smart cities",
    "critical infrastructure",
    "AHOY ecosystem",
    "AI SDK",
    "knowledge graph",
    "retrieval-augmented generation",
    "graph RAG",
    "data intelligence SDK",
    "voice AI SDK",
    "vision AI SDK",
    "tokenization SDK",
    "generative AI SDK",
    "enterprise AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Trouve Labs",
    title: "Trouve Labs - R&D Engine for Intelligent Mobility Systems",
    description:
      "We de-risk deep technology and build sovereign infrastructure systems for mobility, smart cities, and critical infrastructure - the R&D engine behind AHOY.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        // TODO: replace with a purpose-built 1200x630 OG image; currently using the brand logo as a placeholder
        url: "/assets/full-logo.png",
        width: 1200,
        height: 630,
        alt: "Trouve Labs - R&D Engine for Intelligent Mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trouve Labs - R&D Engine for Intelligent Mobility Systems",
    description:
      "We de-risk deep technology and build sovereign infrastructure systems for mobility, smart cities, and critical infrastructure - the R&D engine behind AHOY.",
    images: ["/assets/full-logo.png"],
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3S4KKH6EDF" />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3S4KKH6EDF');
          `}
        </Script>
      </head>
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
