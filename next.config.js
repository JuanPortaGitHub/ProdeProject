/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.thesportsdb.com",
      "lh3.googleusercontent.com",
      "cloudinary.fifa.com",
    ],
  },
};

module.exports = nextConfig;
