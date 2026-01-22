/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable React strict mode to prevent double-mounting issues
  reactStrictMode: false,
}

module.exports = nextConfig
