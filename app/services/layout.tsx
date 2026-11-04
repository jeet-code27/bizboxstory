import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | BizBox Story",
  description: "Explore BizBox Story's digital marketing services: SEO, Google & Facebook Ads, content marketing, social media, web design, and lead generation.",
  alternates: {
    canonical: "https://bizboxstory.com/services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
