import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO Services | Grow Rankings, Traffic & Leads",
  description: "Increase your online visibility with SEO services designed to improve Google rankings, drive organic traffic, and generate more leads.",
  keywords: ["SEO services", "search engine optimization", "organic traffic", "Google rankings", "SEO agency"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/seo-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
