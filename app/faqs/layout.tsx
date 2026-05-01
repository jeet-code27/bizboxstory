import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | BizBox Story",
  description: "Get answers to your questions about our SEO, Digital Marketing, Web Design, and targeted industry (like CBD) services. Discover how BizBox Story can help your business grow.",
  keywords: ["Digital Marketing FAQs", "SEO FAQs", "BizBox Story questions", "CBD SEO questions", "Web design help"],
  authors: [{ name: "BizBox Story" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/faqs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
