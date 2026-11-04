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
      // Old WordPress URLs that still get crawled or linked
      { source: '/seo-services', destination: '/services/seo-services', permanent: true },
      { source: '/google-my-business', destination: '/services/google-my-business', permanent: true },
      { source: '/brand-presence-consulting', destination: '/services/brand-presence-consulting', permanent: true },
      { source: '/services/brand-presence', destination: '/services/brand-presence-consulting', permanent: true },
      { source: '/services/ai-seo', destination: '/services/seo-services', permanent: true },
      { source: '/graphic-website-design', destination: '/services/graphic-website-design', permanent: true },
      { source: '/lead-generation', destination: '/services/lead-generation', permanent: true },
      { source: '/content-marketing-3', destination: '/services/content-marketing', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/email-marketing', destination: '/services', permanent: true },
      { source: '/why-choose-us', destination: '/about', permanent: true },
      {
        source: '/industries',
        destination: '/industries/home-services-marketing',
        permanent: false,
      },
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
