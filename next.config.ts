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
      // Yahan aap apne purane WordPress URLs aur naye Next.js URLs ka map bana sakte hain
      // Example:
      // {
      //   source: '/purana-wordpress-page-url',
      //   destination: '/naya-nextjs-page-url',
      //   permanent: true, // true ka matlab 301 Permanent Redirect (SEO ke liye best)
      // },
      
      // Agar kuch purane blogs the jinka URL structure change ho gaya hai
      // {
      //   source: '/category/marketing/:slug', 
      //   destination: '/blogs/:slug',
      //   permanent: true,
      // }
    ];
  },
};

export default nextConfig;
