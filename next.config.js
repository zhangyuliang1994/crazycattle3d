/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/crazy-cattle-3d.embed',
        destination: 'https://wordle2.io/crazy-cattle-3d.embed',
      },
    ]
  }
};

module.exports = nextConfig;




