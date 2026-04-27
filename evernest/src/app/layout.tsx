import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evernest Consultants | Study Visas, Immigration & Partnerships",
  description:
    "Premium study visa, immigration, and B2B partnership consulting with global reach. Registered in 2013 with thousands of cases and a trusted international network.",
};

import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { StickyActions } from "@/components/shared/StickyActions"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
