import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/config";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adan Labs | Sistemas Digitales para Negocios",
  description:
    "Diseñamos y construimos sistemas web que convierten visitas en clientes. Landing pages, automatización y branding digital.",
  openGraph: {
    title: "Adan Labs | Sistemas Digitales para Negocios",
    description:
      "Diseñamos y construimos sistemas web que convierten visitas en clientes.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Sistemas Digitales para Negocios",
    description:
      "Diseñamos y construimos sistemas web que convierten visitas en clientes.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
