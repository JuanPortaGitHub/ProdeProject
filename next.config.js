/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  styledComponents: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.thesportsdb.com",
      "lh3.googleusercontent.com",
      "cloudinary.fifa.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
