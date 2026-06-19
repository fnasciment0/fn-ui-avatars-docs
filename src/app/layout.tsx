import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "fn-ui-avatars | Deterministic Initials Avatar Generator",
  description: "A lightweight, zero-dependency library and React wrapper to generate consistent, colorful initials avatars with Smart Contrast using the UI-Avatars API.",
  keywords: [
    "avatar generator",
    "ui-avatars",
    "initials avatar",
    "react avatar component",
    "deterministic colors",
    "smart contrast",
    "javascript avatar",
    "nextjs avatar"
  ],
  authors: [{ name: "Fábio Nascimento", url: "https://github.com/fnasciment0" }],
  creator: "Fábio Nascimento",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "fn-ui-avatars | Initials Avatar Generator",
    description: "Generate consistent, colorful initials avatars with Smart Contrast. Available for Vanilla JS and React.",
    siteName: "fn-ui-avatars ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "fn-ui-avatars | Initials Avatar Generator",
    description: "Generate consistent, colorful initials avatars with Smart Contrast. Available for Vanilla JS and React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}