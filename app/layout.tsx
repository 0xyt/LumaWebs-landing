// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google"; // Fuentes Modernas Premium
import "./globals.css";

// Configuración de fuentes Inter (para texto base) y Lexend (para títulos)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

// SEO Premium: Metadatos Reales para "Adan Web Source"
export const metadata: Metadata = {
  title: "Adan Web Source | Landing Pages de Élite - Básicas y Completas",
  description: "Digitalizamos tu visión con landing pages geométricas y de carga ultra-rápida. Especialistas en creación de sitios web de alto impacto para convertir visitantes en clientes.",
  // Añade un favicon si tienes uno en public/favicon.ico
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