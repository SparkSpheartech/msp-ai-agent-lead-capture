/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Disable React strict mode to prevent double-mounting issues
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.sparkspheartechsolutions.com',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
