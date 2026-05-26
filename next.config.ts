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
  async redirects() {
    return [
      {
        source: '/digital-marketing-agency-united-states',
        destination: '/us',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-united-kingdom',
        destination: '/uk',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-australia',
        destination: '/au',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-canada',
        destination: '/ca',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-dubai',
        destination: '/ae',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
