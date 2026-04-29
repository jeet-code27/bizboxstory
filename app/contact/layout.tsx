import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact BizBox Story | Let’s Grow Your Business Online",
  description: "Get in touch with BizBox Story for expert SEO, digital marketing, paid ads, and lead generation services that help grow your business online.",
  keywords: ["contact BizBox Story", "digital marketing consultation", "hire SEO agency", "marketing expert contact", "business growth consultation"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
