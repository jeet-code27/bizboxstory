import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Strategy Call | Book a Free Digital Marketing Consultation",
  description: "Book a free 30-minute strategy session with BizBox Story's digital marketing experts. Get a custom growth roadmap, competitor analysis, and platform audit for your business.",
  keywords: ["free strategy call", "free digital marketing consultation", "book free strategy session", "digital marketing audit", "BizBox Story"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/free-strategy-call",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
