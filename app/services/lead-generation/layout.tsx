import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lead Generation Services | Get More Leads & Grow Faster",
  description: "Grow your business with lead generation services that help attract quality leads, boost conversions, and turn more visitors into customers.",
  keywords: ["lead generation services", "B2B lead generation", "customer acquisition", "conversion rate optimization", "business growth"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/lead-generation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
