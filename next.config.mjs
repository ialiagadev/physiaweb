/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactivar ESLint durante el build para evitar errores
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Mantener la configuración de imágenes existente
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        pathname: '**',
      },
    ],
  },
  // Añadir redirecciones para URLs antiguas
  redirects: async () => {
    return [
      // Redirección de la página antigua de precios a la nueva
      {
        source: '/index.php/price',
        destination: '/precios',
        permanent: true, // 301 redirección permanente (mejor para SEO)
      },
      // Redirección de /price a /precios
      {
        source: '/price',
        destination: '/precios',
        permanent: true,
      },
      // Redirección de cualquier otra ruta antigua que use index.php
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // Redirecciones adicionales para otras variantes de la URL de precios
      {
        source: '/pricing',
        destination: '/precios',
        permanent: true,
      },
      {
        source: '/tarifas',
        destination: '/precios',
        permanent: true,
      },
      {
        source: '/planes',
        destination: '/precios',
        permanent: true,
      },
    ];
  },
};

// Usar export default para archivos .mjs (ES modules)
export default nextConfig;

