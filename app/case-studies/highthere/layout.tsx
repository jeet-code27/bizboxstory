import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HighThere Case Study: $45,000/mo Revenue | BizBox Story",
  description: "How BizBox Story helped HighThere scale organic traffic, rank for competitive cannabis search terms, and grow to over $45,000/month in revenue.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/highthere",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
