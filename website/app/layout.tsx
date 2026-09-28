import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Quant Lab — Five Research Models",
  description: "Explore five inspectable models for financial research, prediction markets, portfolio decisions, market simulation, and quantitative discovery.",
  openGraph: {
    title: "AI Quant Lab — Five Research Models",
    description: "Five inspectable models for evidence-driven quantitative research.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AI Quant Lab system map" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Quant Lab — Five Research Models",
    description: "Five inspectable models for evidence-driven quantitative research.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
