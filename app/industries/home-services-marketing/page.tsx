import type { Metadata } from "next";
import HomeServicesPage from "@/components/HomeServicesPage";
import { HOME_SERVICES_BASE, homeServicesHub } from "@/lib/homeServices";

const url = `https://bizboxstory.com${HOME_SERVICES_BASE}`;

export const metadata: Metadata = {
  title: homeServicesHub.title,
  description: homeServicesHub.description,
  keywords: homeServicesHub.keywords,
  alternates: { canonical: url },
  openGraph: {
    title: homeServicesHub.title,
    description: homeServicesHub.description,
    url,
    type: "website",
    images: [{ url: homeServicesHub.image, width: 1536, height: 1024, alt: homeServicesHub.imageAlt }],
  },
};

export default function Page() {
  return <HomeServicesPage page={homeServicesHub} />;
}
