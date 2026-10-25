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
      // Legacy FIELD NOTES index redirect. Main-site blog posts live at
      // /blog/<slug> (content/blog/*.md) and keep serving there.
      {
        source: '/blog',
        destination: 'https://blog.sparkspheartechsolutions.com',
        permanent: true,
      },
  {
   // Workflow Opportunity Calculator moved to THE SPARK (blog) 2026-10-25
  source: '/tools',
        destination: 'https://sparkspheartechsolutions.blog/tools',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
