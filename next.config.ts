import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "cdn.cloudflare.steamstatic.com",
      "shared.akamai.steamstatic.com",
      "cdn.wccftech.com",
      "cdn1.epicgames.com",
    ],
  },
};

export default nextConfig;
