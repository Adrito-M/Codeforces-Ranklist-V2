/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['userpic.codeforces.org', 'cdn-userpic.codeforces.com'],
  },
}

module.exports = nextConfig
