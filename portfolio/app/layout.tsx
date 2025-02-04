import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.giannisk.dev'),
  title: "Giannis Katsanakis - Full Stack Developer",
  description: "Full Stack Developer specializing in Java, Spring Boot, React, and Next.js",
  keywords: [
    "portfolio",
    "web development",
    "frontend",
    "backend",
    "full-stack",
    "react",
    "next.js",
    "typescript",
    "java",
    "spring boot"
  ],
  authors: [{ name: "Giannis Katsanakis" }],
  creator: "Giannis Katsanakis",
  publisher: "Giannis Katsanakis",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Giannis Katsanakis Portfolio",
    title: "Giannis Katsanakis - Full Stack Developer",
    description: "Full Stack Developer specializing in Java, Spring Boot, React, and Next.js",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giannis Katsanakis Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giannis Katsanakis - Full Stack Developer",
    description: "Full Stack Developer specializing in Java, Spring Boot, React, and Next.js",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
