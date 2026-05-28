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
  title: "Adan Labs | Desarrollo Web, Automatización e IA para Negocios",
  description:
    "Sistemas web, automatización de procesos, integración CRM e inteligencia artificial aplicada. Landing pages, dashboards y funnels de alta conversión.",
  openGraph: {
    title: "Adan Labs | Desarrollo Web, Automatización e IA para Negocios",
    description:
      "Sistemas web, automatización de procesos, integración CRM e inteligencia artificial aplicada.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Desarrollo Web, Automatización e IA para Negocios",
    description:
      "Sistemas web, automatización de procesos, integración CRM e inteligencia artificial aplicada.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
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
