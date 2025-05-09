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
        destination: '/game/crazycattle3d/index.html',
      },
      {
        source: '/crazy-cow-3d.embed',
        destination: '/game/crazycow3d/index.html',
      },
      {
        source: '/cheese-chompers-3d.embed',
        destination: '/game/cheesechompers3d/index.html',
      },
      {
        source: '/brainrot-clicker.embed',
        destination: '/game/brainrot-clicker/index.html',
      }
    ]
  }
};

module.exports = nextConfig;
