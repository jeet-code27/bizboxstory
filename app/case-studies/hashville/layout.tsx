import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hashville Real Estate Case Study | BizBox Story",
  description: "How BizBox Story built organic brand authority for Hashville Real Estate in Gurgaon's competitive luxury real estate market, reaching 399,800+ views.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/hashville",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
