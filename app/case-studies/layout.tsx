import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies | BizBox Story",
  description: "Explore our digital marketing case studies. See how BizBox Story helps SMEs and startups drive revenue and scale their businesses globally.",
  keywords: ["Digital Marketing Case Studies", "SEO Case Studies", "BizBox Story Portfolio", "Marketing Success Stories"],
  authors: [{ name: "BizBox Story" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
