import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A showcase of modern web development skills and projects",
  keywords: [
    "portfolio",
    "web development",
    "frontend",
    "backend",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    siteName: "Modern Portfolio",
    title: "Modern Portfolio - Your Name",
    description: "A showcase of modern web development skills and projects",
    images: [
      {
        url: "https://your-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Portfolio - Your Name",
    description: "A showcase of modern web development skills and projects",
    creator: "@yourusername",
    images: ["https://your-portfolio.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
