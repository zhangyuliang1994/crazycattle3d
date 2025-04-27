/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/game',
        destination: 'https://wordle2.io/crazy-cattle-3d.embed',
      },
    ]
  }
};

module.exports = nextConfig;


