import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bed Bugs Boston Case Study | BizBox Story",
  description: "How BizBox Story helped Bed Bugs Boston grow local search visibility and Facebook engagement for a pest control business in Boston.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/bed-bugs-boston",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
