import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | BizBox Story",
  description: "Thanks for contacting BizBox Story. Book a time for your strategy call.",
  alternates: {
    canonical: "https://bizboxstory.com/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
