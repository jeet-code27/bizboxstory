import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CBD SEO Services | Grow Your Cannabis Brand Online",
  description: "Help your cannabis or CBD business grow with expert CBD SEO services designed to improve Google rankings, increase traffic, and attract more customers.",
  keywords: ["CBD SEO services", "cannabis marketing", "marijuana SEO", "dispensary SEO", "CBD brand growth"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/cbd-seo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
