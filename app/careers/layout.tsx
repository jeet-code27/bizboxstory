import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers | BizBox Story | 100% Remote Roles",
  description: "Join BizBox Story, a fully remote digital marketing agency. Explore our open roles in SEO, Performance Marketing, Social Media, and Design. Work from anywhere, grow everywhere.",
  keywords: ["Digital Marketing Jobs", "Remote Marketing Jobs", "Careers at BizBox Story", "Work from anywhere", "SEO jobs", "Performance Marketing jobs"],
  authors: [{ name: "BizBox Story" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/careers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
