import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torch Cannabis Case Study: 320K+ Video Views | BizBox Story",
  description: "How BizBox Story helped Torch Cannabis build local brand awareness with 193% more engagement and 320K+ video views from social content.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/torch-cannabis",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
