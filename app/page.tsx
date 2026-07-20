import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import GrowthEngine from "@/components/GrowthEngine";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "BizBox Story | Digital Marketing Agency for Business Growth",
  description: "BizBox Story is a digital marketing agency offering SEO, Google Ads, content marketing, and lead generation services to grow brands globally.",
  keywords: ["digital marketing agency", "SEO", "Google Ads", "content marketing", "lead generation", "business growth"],
  authors: [{ name: "Shay Mehta", url: "https://shaymehta.com" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BizBox Story",
              "url": "https://bizboxstory.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bizboxstory.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BizBox Story",
              "url": "https://bizboxstory.com",
              "description": "Digital marketing agency offering SEO, Google Ads, content marketing, and lead generation.",
              "image": "https://bizboxstory.com/images/logo.png"
            }
          ]),
        }}
      />
      <Hero />
      <TrustBar />
      <ClientLogos />
      <About />
      <Services />
      <GrowthEngine />
      <HomeCaseStudies />
      <VideoSection />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <BottomCTA />
    </>
  );
}
