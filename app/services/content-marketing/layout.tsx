import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Content Marketing Services | Content That Drives Growth",
  description: "Grow your brand with content marketing services that improve SEO, engage your audience, and turn traffic into real business leads.",
  keywords: ["content marketing services", "content strategy", "audience engagement", "lead generation content"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/content-marketing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
