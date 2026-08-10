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
        source: '/blog/barbershop-owner-automation-guide',
        destination: 'https://blog.sparkspheartechsolutions.com/p/barbershop-owner-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/ai-agents-small-business-automation-2025',
        destination: 'https://blog.sparkspheartechsolutions.com/p/ai-agents-small-business-automation-2025',
        permanent: true,
      },
      {
        source: '/blog/cybersecurity-guide-2025',
        destination: 'https://blog.sparkspheartechsolutions.com/p/cybersecurity-guide-2025',
        permanent: true,
      },
      {
        source: '/blog/digital-marketing-roi-local',
        destination: 'https://blog.sparkspheartechsolutions.com/p/digital-marketing-roi-local',
        permanent: true,
      },
      {
        source: '/blog/managed-it-benefits-fort-wayne',
        destination: 'https://blog.sparkspheartechsolutions.com/p/managed-it-benefits-fort-wayne',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.sparkspheartechsolutions.com',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: 'https://blog.sparkspheartechsolutions.com',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
