/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
