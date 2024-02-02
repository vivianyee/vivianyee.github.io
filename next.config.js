/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vivianyeebucket.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_AWS_URL: process.env.NEXT_PUBLIC_AWS_URL
  }
}

module.exports = nextConfig
