import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brand Strategy & Consulting | Build a Stronger Brand",
  description: "Strengthen your business with brand strategy and consulting services that build trust, improve positioning, and support long-term growth.",
  keywords: ["brand strategy consulting", "brand presence", "business positioning", "brand identity", "long-term growth strategy"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/brand-presence-consulting",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
