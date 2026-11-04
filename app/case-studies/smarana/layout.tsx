import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smarana App Case Study: 5,000+ Downloads | BizBox Story",
  description: "How BizBox Story built a sustainable paid acquisition engine for the Smarana app, growing from 0 to 5,000+ downloads.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/smarana",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
