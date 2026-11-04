import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pikky Case Study: 529K Accounts Reached | BizBox Story",
  description: "How BizBox Story drove efficient app installs for Pikky, a restaurant discovery startup, across multiple cities with hyper-local targeting.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/pikky",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
