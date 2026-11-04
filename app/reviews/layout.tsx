import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | BizBox Story",
  description: "Read what clients say about working with BizBox Story on SEO, paid ads, content marketing, and lead generation.",
  alternates: {
    canonical: "https://bizboxstory.com/reviews",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
