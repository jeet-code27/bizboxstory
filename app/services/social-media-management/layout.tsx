import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Management | Grow Your Brand Online",
  description: "Build a stronger online presence with social media management services focused on engagement, content strategy, and business growth.",
  keywords: ["social media management", "social media strategy", "brand engagement", "online presence", "social media marketing"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/social-media-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
