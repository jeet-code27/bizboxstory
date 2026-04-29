import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google & Facebook Ads Services | More Traffic & Leads",
  description: "Drive targeted traffic and quality leads with Google and Facebook Ads services built to increase conversions and grow your business.",
  keywords: ["Google Ads services", "Facebook Ads services", "paid ads", "PPC management", "lead generation ads"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/services/google-facebook-ads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
