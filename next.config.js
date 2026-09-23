/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Disable React strict mode to prevent double-mounting issues
  reactStrictMode: false,
  async redirects() {
    // Old Writizzy blog (blog.sparkspheartechsolutions.com) is retired.
    // The new blog lives at sparkspheartechsolutions.blog with different slugs,
    // so all legacy /blog paths 301 to the new blog homepage.
    return [
      {
        source: '/blog',
        destination: 'https://sparkspheartechsolutions.blog',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: 'https://sparkspheartechsolutions.blog',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
