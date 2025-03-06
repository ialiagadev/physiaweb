/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Desactivar ESLint durante el build (solo para desarrollo)
      ignoreDuringBuilds: true,
    },
  }
  
  module.exports = nextConfig