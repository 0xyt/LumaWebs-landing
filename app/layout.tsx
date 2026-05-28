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
  title: "Adan Labs | Diseño y Desarrollo Web de Alto Impacto",
  description:
    "Creamos y remodelamos páginas web desde cero. Desarrollo web a medida, diseño minimalista, gestión de dominios y mantenimiento técnico.",
  openGraph: {
    title: "Adan Labs | Diseño y Desarrollo Web de Alto Impacto",
    description:
      "Creamos y remodelamos páginas web desde cero. Desarrollo web a medida, diseño minimalista, gestión de dominios y mantenimiento técnico.",
    siteName: "Adan Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adan Labs | Diseño y Desarrollo Web de Alto Impacto",
    description:
      "Creamos y remodelamos páginas web desde cero. Desarrollo web a medida, diseño minimalista.",
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
