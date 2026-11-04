import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugd Case Study: 80K+ Organic Reach | BizBox Story",
  description: "How BizBox Story helped Plugd build a community-driven cannabis brand with 137% more engagement and 80K+ reel views from social content.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/plugd",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
