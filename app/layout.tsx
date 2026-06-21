import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharan Kumar M | Cybersecurity Engineer",
  description: "Cybersecurity Engineer and Security Researcher specializing in network security, vulnerability analysis, firmware hardening, and Linux kernel development.",
  keywords: ["Cybersecurity", "Security Researcher", "Network Security", "Vulnerability Analysis", "Linux Kernel", "CTF", "Penetration Testing"],
  authors: [{ name: "Sharan Kumar M" }],
  openGraph: {
    title: "Sharan Kumar M | Cybersecurity Engineer",
    description: "Cybersecurity Engineer and Security Researcher specializing in network security, vulnerability analysis, firmware hardening, and Linux kernel development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharan Kumar M | Cybersecurity Engineer",
    description: "Cybersecurity Engineer and Security Researcher.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-bg-primary text-text-secondary font-sans">
        {children}
      </body>
    </html>
  );
}