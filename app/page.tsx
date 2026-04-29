import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import GrowthEngine from "@/components/GrowthEngine";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "BizBox Story | Digital Marketing Agency for Business Growth",
  description: "BizBox Story is a digital marketing agency offering SEO, Google Ads, content marketing, and lead generation services to grow brands globally.",
  keywords: ["digital marketing agency", "SEO", "Google Ads", "content marketing", "lead generation", "business growth"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogos />
      <About />
      <Services />
      <GrowthEngine />
      <VideoSection />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <BottomCTA />
    </>
  );
}
