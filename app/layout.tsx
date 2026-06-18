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
  metadataBase: new URL("https://adanlabs.vercel.app"),
  title: "Forge Webs | Diseño y Desarrollo Web para Negocios",
  description:
    "Creamos páginas web modernas, rápidas y estratégicas para negocios que quieren verse profesionales, generar confianza y atraer más clientes.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "páginas web para negocios",
    "diseño web Bolivia",
    "landing pages",
    "rediseño web",
  ],
  openGraph: {
    title: "Forge Webs | Diseño y Desarrollo Web para Negocios",
    description:
      "Creamos páginas web modernas, rápidas y estratégicas para negocios que quieren verse profesionales, generar confianza y atraer más clientes.",
    url: "https://adanlabs.vercel.app",
    siteName: "Forge Webs",
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Webs | Diseño y Desarrollo Web para Negocios",
    description:
      "Páginas web modernas, rápidas y estratégicas para negocios que quieren atraer más clientes.",
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
