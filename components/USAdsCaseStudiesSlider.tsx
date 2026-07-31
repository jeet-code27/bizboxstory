"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const usCaseStudies = [
  {
    title: "Torch Cannabis",
    subtitle: "Cannabis Dispensary & Retail",
    location: "🇺🇸 Massachusetts, USA",
    logo: "/images/clients/torch.svg",
    image: "/images/case-studies/torch-cannabis-home.svg",
    desc: "Built authentic local social media campaigns that expanded brand presence across MA, driving 320K+ organic video views and massive store foot-traffic.",
    metrics: [
      { value: "320K+", label: "Video Views" },
      { value: "+193%", label: "Engagement Rate" }
    ],
    tag: "Social Media & Video"
  },
  {
    title: "HighThere",
    subtitle: "National Cannabis Social Network",
    logo: "/images/clients/canna-connect.webp",
    image: "/images/case-studies/highthere-home.webp",
    location: "🇺🇸 USA Nationwide",
    desc: "Scaled organic search architecture, outranking national competitors for high-volume keywords and driving over $45,000/mo in recurring organic revenue.",
    metrics: [
      { value: "320+", label: "Keywords Ranked #1" },
      { value: "$45K+", label: "Organic Revenue/mo" }
    ],
    tag: "AI SEO & Content"
  },
  {
    title: "Bed Bugs Boston",
    subtitle: "Pest Control Services",
    logo: "/images/clients/bed-bug-boston-logo.jpg",
    image: "/images/clients/bed-bug-boston-logo.jpg",
    location: "🇺🇸 Boston, MA, USA",
    desc: "Engineered hyper-local Facebook & Google Ads funnels that drove 1,300+ direct clicks and established 98% technical SEO health for local search dominance.",
    metrics: [
      { value: "104K+", label: "Local Users Reached" },
      { value: "98%", label: "SEO Health Score" }
    ],
    tag: "Local PPC & Meta Ads"
  },
  {
    title: "Nirvana DC / DC Leafly",
    subtitle: "Dispensary & Local Search",
    logo: "/images/clients/nirvanadc-logo.webp",
    image: "/images/case-studies/dc-leafly-keywords.avif",
    location: "🇺🇸 Washington DC, USA",
    desc: "Restructured Google Ads and local GMB profile to double organic web traffic in 90 days and capture 310+ monthly qualified online inquiries.",
    metrics: [
      { value: "+142%", label: "Organic Traffic" },
      { value: "310+", label: "Monthly Lead Orders" }
    ],
    tag: "Google Ads & GMB"
  },
  {
    title: "Plugd",
    subtitle: "E-Commerce & Retail",
    logo: "/images/clients/plugd-logo.png",
    image: "/images/case-studies/plugd-home.png",
    location: "🇺🇸 California, USA",
    desc: "Created a culture-first social media strategy generating 80K+ organic reach and 137% engagement increase without relying solely on paid ad spend.",
    metrics: [
      { value: "80K+", label: "Organic Reach" },
      { value: "+137%", label: "Engagement Lift" }
    ],
    tag: "Social & Brand Scaling"
  },
  {
    title: "Zaza City",
    subtitle: "Retail & E-Commerce",
    logo: "/images/clients/zaza-city.png",
    image: "/images/clients/zaza-city.png",
    location: "🇺🇸 New York, USA",
    desc: "Optimized Google & Meta PPC ad spend to achieve a 4.2x ROAS in the first 30 days while lowering customer acquisition cost significantly.",
    metrics: [
      { value: "4.2x", label: "ROAS Achieved" },
      { value: "-42%", label: "Lower Cost Per Lead" }
    ],
    tag: "High-ROI PPC Ads"
  }
];

export default function USAdsCaseStudiesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi
      .on("reInit", onInit)
      .on("reInit", onSelect)
      .on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollToLeadForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-white border-b border-brand-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-bold mb-3 px-3.5 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/10">
              <span>🇺🇸</span> Verified US Client Success Stories
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep leading-tight mt-2">
              Proven Results for <span className="text-brand-gold italic">American Brands</span>
            </h2>
            <p className="font-dm text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
              Explore how we help US SMEs and growth companies scale lead volume, dominate local search, and maximize ROAS.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center transition-all duration-300 ${
                prevBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-brand-gold hover:text-brand-ink cursor-pointer shadow-sm"
              }`}
              aria-label="Previous case study"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center transition-all duration-300 ${
                nextBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-brand-gold hover:text-brand-ink cursor-pointer shadow-sm"
              }`}
              aria-label="Next case study"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-6">
            {usCaseStudies.map((study, idx) => (
              <div
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-4 sm:pl-6"
                key={idx}
              >
                <div className="bg-brand-surface rounded-3xl border border-brand-border p-7 h-full flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300 shadow-sm group">
                  
                  <div>
                    {/* Header: Brand Logo & Location */}
                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-brand-border/60 mb-5">
                      <div className="h-16 sm:h-20 w-40 sm:w-44 bg-white border border-brand-border/70 rounded-xl px-4 py-2.5 flex items-center justify-center shrink-0 shadow-xs">
                        <img
                          src={study.logo}
                          alt={`${study.title} logo`}
                          className="max-h-12 sm:max-h-16 max-w-full object-contain"
                        />
                      </div>
                      <span className="font-dm text-xs font-semibold px-3 py-1 bg-white rounded-full border border-brand-border/80 text-gray-700 shrink-0">
                        {study.location}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-brand-gold/15 text-brand-ink text-xs font-bold rounded-md font-dm">
                        {study.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-1 group-hover:text-brand-gold transition-colors">
                      {study.title}
                    </h3>
                    <p className="font-dm text-xs font-semibold text-gray-500 mb-4">
                      {study.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-dm text-gray-600 text-sm leading-relaxed mb-6">
                      {study.desc}
                    </p>
                  </div>

                  <div>
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-white p-3 rounded-2xl border border-brand-border/60 text-center">
                          <p className="font-dm font-bold text-xl text-brand-gold">{m.value}</p>
                          <p className="font-dm text-[11px] text-gray-500 uppercase tracking-wider mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* On-Page Conversion Action (No Offsite Redirects) */}
                    <button
                      onClick={scrollToLeadForm}
                      className="w-full font-dm font-bold text-sm py-3 px-4 bg-white text-brand-blue-deep border border-brand-border rounded-xl hover:bg-brand-gold hover:text-brand-ink hover:border-brand-gold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      Get Similar Growth &rarr;
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Controls & Dots */}
        <div className="flex items-center justify-between mt-8 md:mt-10">
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                  index === selectedIndex ? "w-8 bg-brand-gold" : "w-2.5 bg-brand-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
