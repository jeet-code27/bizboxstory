import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About BizBox Story | Helping Brands Grow Online",
  description: "Learn how BizBox Story helps businesses grow through SEO, content marketing, paid ads, and digital strategies that drive real results.",
  keywords: ["about BizBox Story", "digital strategies", "brand growth online", "digital marketing agency"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
