import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing for Doctors & Medical Practices | BizBox Story",
  description: "Digital marketing for doctors: local SEO, Google Ads, websites, and social media that help medical practices attract more patients.",
  alternates: {
    canonical: "https://bizboxstory.com/digital-marketing-for-doctors",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
