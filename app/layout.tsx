import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adan Labs | Infraestructura Digital de Alto Rendimiento",
  description:
    "Diseñamos y programamos infraestructuras digitales de alto rendimiento. Desarrollo web fullstack, automatización inteligente e integración de IA.",
  openGraph: {
    title: "Adan Labs | Infraestructura Digital de Alto Rendimiento",
    description:
      "Diseñamos y programamos infraestructuras digitales de alto rendimiento. Desarrollo web fullstack, automatización inteligente e integración de IA.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Infraestructura Digital de Alto Rendimiento",
    description:
      "Diseñamos y programamos infraestructuras digitales de alto rendimiento.",
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
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
