import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.bizboxstory.com',
      },
      {
        protocol: 'https',
        hostname: 'bizboxstory.com',
      },
    ],
  },
};

export default nextConfig;
