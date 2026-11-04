import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Shakun Case Study | BizBox Story",
  description: "How BizBox Story helped Indian fashion brand Shop Shakun build a loyal direct audience with 5,168 new followers and 66K+ views.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/shopshakun",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
