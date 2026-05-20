/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/company-profile.html' },
      ],
    };
  },
}

module.exports = nextConfig
