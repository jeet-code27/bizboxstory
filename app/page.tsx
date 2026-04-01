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
  title: "BizBox Story | AI-Powered Digital Marketing Agency — US, UK & India",
  description: "Revenue-driven digital marketing agency helping SMEs scale with AI SEO, Content Marketing, Google Ads & Social Media. Serving US, UK, Australia & India.",
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
