/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hydeparkwinterwonderland.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
