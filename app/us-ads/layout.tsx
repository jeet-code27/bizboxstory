import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale Your Business in USA | High-ROI Digital Marketing & AI Lead Gen",
  description: "Exclusive US Growth Offer: Get a custom AI SEO & Google/Meta Ads growth plan tailored for American SMEs. Scale qualified US leads and double your sales pipeline.",
  keywords: [
    "digital marketing agency USA",
    "lead generation USA",
    "Google Ads management USA",
    "Meta Ads agency USA",
    "AI SEO services USA",
    "small business marketing USA",
    "BizBox Story US Ads"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizboxstory.com/us-ads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
