/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/share',
        destination: '/share.html',
        permanent: true,
      },
      {
        source: '/preview',
        destination: '/preview.html',
        permanent: true,
      },
      {
        source: '/index-preview',
        destination: '/index-preview.html',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
