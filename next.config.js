/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.xedla.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
