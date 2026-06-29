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
        source: '/us',
        destination: '/digital-marketing-agency-united-states',
        permanent: true,
      },
      {
        source: '/digital-marketing-agency-united-kingdom',
        destination: '/uk',
        permanent: true,
      },
      {
        source: '/au',
        destination: '/digital-marketing-agency-australia',
        permanent: true,
      },
      {
        source: '/ca',
        destination: '/digital-marketing-agency-canada',
        permanent: true,
      },
      {
        source: '/ae',
        destination: '/digital-marketing-agency-dubai',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
