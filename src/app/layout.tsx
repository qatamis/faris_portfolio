import type { Metadata } from "next";
import { Archivo, Cairo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-cairo",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono2",
});

export const metadata: Metadata = {
  title: "Faris Alkhateeb — Visual Journalist",
  description:
    "Visual journalist & editorial designer with 16+ years crafting infographics, maps, and interactive coverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${archivo.variable} ${cairo.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0b] text-[#f4f4f3]">{children}</body>
    </html>
  );
}
