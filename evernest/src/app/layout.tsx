import type { Metadata } from "next"
import { Manrope, Playfair_Display } from "next/font/google"

import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { StickyActions } from "@/components/shared/StickyActions"

import "./globals.css"

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
  title: {
    default: "EverNest Consultants | Study Visas, Immigration & Partnerships",
    template: "%s | EverNest Consultants",
  },
  description:
    "EverNest Consultants (trading name of EN Consultants (Pvt) Ltd.) provides premium study visa, immigration, and B2B partnership consulting. Registered since 2013 with global reach across 18+ countries.",
  applicationName: "EverNest Consultants",
  metadataBase: new URL("https://evernestconsultants.com"),
  openGraph: {
    title: "EverNest Consultants",
    description:
      "Premium study visa, immigration, and B2B partnership consulting. Registered since 2013 with global reach across 18+ countries.",
    siteName: "EverNest Consultants",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverNest Consultants",
    description:
      "Premium study visa, immigration, and B2B partnership consulting. Registered since 2013 with global reach across 18+ countries.",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "EverNest Consultants",
    "EN Consultants (Pvt) Ltd.",
    "study visas",
    "immigration",
    "work permits",
    "student counseling",
    "B2B partnerships",
    "university recruitment",
    "global mobility consulting",
  ],
}

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
