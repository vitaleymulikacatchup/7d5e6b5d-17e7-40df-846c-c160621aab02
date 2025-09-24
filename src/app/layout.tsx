import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun Community-Driven Crypto Landing Page",
  description: "MemePulse is a playful memecoin landing page with clear buy steps, tokenomics at a glance, and a friendly community vibe—fast access, no fluff.",
  keywords: ["memecoin","crypto","landing-page","tokenomics","buy-steps","community","meme","blockchain","digital-asset","crypto-trend"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MemePulse Memecoin — Fun Community-Driven Crypto Landing Page",
    description: "MemePulse is a playful memecoin landing page with clear buy steps, tokenomics at a glance, and a friendly community vibe—fast access, no fluff.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "MemePulse Memecoin"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun Community-Driven Crypto Landing Page",
    description: "MemePulse is a playful memecoin landing page with clear buy steps, tokenomics at a glance, and a friendly community vibe—fast access, no fluff.",
    images: ["/images/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">  
      <body className={`${interTight.variable} ${poppins.variable} antialiased bg-gradient-to-r from-[#fdf2f8] to-[#e9f7ff]`}>  
        {children}  
      </body>
    </html>
  );
}
