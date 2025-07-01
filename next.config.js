/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки для статического экспорта (Timeweb)
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Оптимизация изображений для статического экспорта
  images: {
    unoptimized: true, // Отключаем оптимизацию для статического экспорта
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Оптимизация производительности
  experimental: {
    // optimizeCss: true, // Отключено из-за проблем с critters в Vercel
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Сжатие
  compress: true,

  // PWA настройки - отключены для статического экспорта
  // async headers() { ... } - несовместимо с export

  // Оптимизация бандла
  webpack: (config, { dev, isServer }) => {
    // Оптимизация для продакшена
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }

    return config
  },

  // Настройки для мобильных устройств - отключены для статического экспорта
  // async rewrites() { ... } - несовместимо с export
}

module.exports = nextConfig
