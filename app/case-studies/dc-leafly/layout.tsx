import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DC Leafly Case Study: 142% Organic Traffic Growth | BizBox Story",
  description: "How BizBox Story helped DC Leafly improve local search visibility, build authority through backlinks, and increase organic orders with targeted SEO.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/dc-leafly",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
