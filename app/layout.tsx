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
  title: "Adan Labs | Desarrollo Web Estratégico para Emprendedores y Negocios Locales",
  description:
    "Estudio digital independiente. Diseñamos, desarrollamos y remodelamos sitios web profesionales para emprendedores, negocios locales y profesionales independientes.",
  openGraph: {
    title: "Adan Labs | Desarrollo Web Estratégico",
    description:
      "Diseñamos, desarrollamos y remodelamos sitios web con personalidad, enfocados en transmitir confianza y ayudar a tu negocio a crecer.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Desarrollo Web Estratégico",
    description:
      "Diseñamos, desarrollamos y remodelamos sitios web con personalidad.",
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
