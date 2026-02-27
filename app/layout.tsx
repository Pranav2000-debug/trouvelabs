import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LazyMotionProvider } from "@/components/ui/lazy-motion-provider";
import { Suspense } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trouve Labs — AI SDK Platform",
  description: "Trouve Labs delivers AI SDKs that power next-generation mobility systems. Finding efficiencies at every curve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.variable}>
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
