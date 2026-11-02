import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeServicesPage from "@/components/HomeServicesPage";
import { homeServicePath, homeServiceVerticals } from "@/lib/homeServices";

type Props = { params: Promise<{ vertical: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return homeServiceVerticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical } = await params;
  const page = homeServiceVerticals.find((v) => v.slug === vertical);
  if (!page) return {};

  const url = `https://bizboxstory.com${homeServicePath(page)}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
      images: [{ url: page.image, width: 1536, height: 1024, alt: page.imageAlt }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { vertical } = await params;
  const page = homeServiceVerticals.find((v) => v.slug === vertical);
  if (!page) notFound();

  return <HomeServicesPage page={page} />;
}
