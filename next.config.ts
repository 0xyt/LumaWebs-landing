/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora errores de ESLint durante el despliegue
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora errores de TypeScript durante el despliegue
    ignoreBuildErrors: true,
  },
};

export default nextConfig;