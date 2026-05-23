// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google"; // Fuentes Modernas Premium
import "./globals.css";

// Configuración de fuentes Inter (para texto base) y Lexend (para títulos)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "N0VA Labs | Landing Pages de Alto Impacto",
  description: "Creamos landing pages profesionales en Bolivia desde 200 Bs. Diseño moderno, carga rápida y listas en días.",
  openGraph: {
    title: "N0VA Labs | Landing Pages de Alto Impacto",
    description: "Creamos landing pages profesionales en Bolivia desde 200 Bs. Diseño moderno, carga rápida y listas en días.",
    siteName: "N0VA Labs",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Aplicamos las variables de fuente al HTML
    <html lang="es" className={`${inter.variable} ${lexend.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}