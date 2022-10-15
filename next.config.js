const mongoose = require('mongoose')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-userpic.codeforces.com',
      'userpic.codeforces.org'
    ],
  },
}

module.exports = (phase) => {
  mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('connected to DB')
		})
  return nextConfig;
};
