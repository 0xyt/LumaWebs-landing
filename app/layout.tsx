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
  title: "Adan Labs | Páginas web claras para negocios locales",
  description:
    "Creamos y mejoramos páginas web fáciles de entender para emprendedores, negocios locales y profesionales independientes.",
  openGraph: {
    title: "Adan Labs | Páginas web claras para negocios locales",
    description:
      "Creamos páginas web simples, bonitas y fáciles de usar para que tus clientes puedan encontrarte y contactarte.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Páginas web claras",
    description:
      "Páginas web simples, bonitas y fáciles de usar para negocios locales.",
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
