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
  title: "Nikhil Wakode — AI + Full Stack Engineer",
  description:
    "Building intelligent systems with exceptional interfaces. Specializing in RAG systems, AI applications, scalable backends, and modern frontend experiences.",
  keywords: [
    "Nikhil Wakode",
    "AI Engineer",
    "Full Stack Developer",
    "RAG Systems",
    "LLM",
    "Next.js",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Nikhil Wakode" }],
  openGraph: {
    title: "Nikhil Wakode — AI + Full Stack Engineer",
    description:
      "Building intelligent systems with exceptional interfaces.",
    type: "website",
    locale: "en_US",
    siteName: "Nikhil Wakode",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Wakode — AI + Full Stack Engineer",
    description:
      "Building intelligent systems with exceptional interfaces.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
