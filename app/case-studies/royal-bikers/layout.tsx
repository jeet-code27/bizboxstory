import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Bikers Case Study: £25,000+ Revenue | BizBox Story",
  description: "How BizBox Story helped Royal Bikers generate over £25,000 in tour bookings within 2 months through Meta ad campaigns and targeted creative.",
  alternates: {
    canonical: "https://bizboxstory.com/case-studies/royal-bikers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
