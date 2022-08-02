/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-userpic.codeforces.com',
    ],
  },
}

module.exports = nextConfig
