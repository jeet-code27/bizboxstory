import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cleaning Corp Case Study | BizBox Story",
  description: "How BizBox Story helped Enterprise Cleaning Corp strengthen local search and attract more commercial cleaning enquiries across Central Massachusetts.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/enterprise-cleaning-corp",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
