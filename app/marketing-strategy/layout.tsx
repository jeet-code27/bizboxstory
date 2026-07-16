import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizBox Story | AI-Powered Digital Marketing Agency",
  description:
    "Revenue-driven digital marketing agency helping SMEs scale with AI SEO, Content Marketing, Google Ads & Social Media. Serving US, UK, Australia & India.",
  keywords:
    "AI SEO, Content Marketing, Google Ads, Social Media, SME marketing, digital marketing agency, BizBox Story",
  authors: [{ name: "BizBox Story" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MarketingStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
