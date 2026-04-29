import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Design Services | Build a Website That Converts",
  description: "Create a fast, SEO-friendly website designed to attract visitors, improve user experience, and turn traffic into real customers.",
  keywords: ["website design services", "web development", "SEO-friendly websites", "user experience design", "custom web design"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/graphic-website-design",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
