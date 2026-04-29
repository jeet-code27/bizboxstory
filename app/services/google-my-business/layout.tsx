import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google Business Profile Services | Boost Local Visibility",
  description: "Get found by more local customers with Google Business Profile services designed to improve rankings, visibility, and local leads.",
  keywords: ["Google Business Profile services", "local SEO", "Google My Business", "local visibility", "local search rankings"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/google-my-business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
