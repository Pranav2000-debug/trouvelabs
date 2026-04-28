import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LazyMotionProvider } from "@/components/ui/lazy-motion-provider";
import { Suspense } from "react";

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
  title: "Trouve Labs - AI SDK Platform",
  description: "Trouve Labs delivers AI SDKs that power next-generation mobility systems. Finding efficiencies at every curve.",
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
