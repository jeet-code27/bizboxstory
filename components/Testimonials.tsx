"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    quote:
      "BizBox Story completely transformed our online presence. Within 90 days, our organic traffic doubled and we were ranking on page 1 for our top keywords. The team is incredibly responsive and truly invested in our success.",
    name: "Mike Harrison",
    role: "CEO, Nirvana DC Dispensary",
    country: "🇺🇸 Massachusetts, USA",
    avatar: "/images/testimonials/mike.jpg",
  },
  {
    quote:
      "We'd tried 3 agencies before BizBox Story. None of them could explain what they were actually doing. Shay's team gave us clarity, consistency, and most importantly — real leads coming in every month.",
    name: "Priya Sharma",
    role: "Founder, TechStart India",
    country: "🇮🇳 Bangalore, India",
    avatar: "/images/testimonials/priya.jpg",
  },
  {
    quote:
      "The ROI from their Google Ads management paid for itself in the first month. They don't just run campaigns — they actually optimize aggressively and tell you exactly what's working and what isn't.",
    name: "James O'Connor",
    role: "Owner, Zaza City",
    country: "🇺🇸 New York, USA",
    avatar: "/images/testimonials/james.jpg",
  },
];

const AvatarImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-muted shrink-0 border border-brand-border flex items-center justify-center">
      <img
        src={
          error || !src
            ? `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=333&color=e8a045`
            : src
        }
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Embla Carousel hook setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <section className="bg-brand-surface py-24 overflow-hidden relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Client Stories
            </span>
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-brand-ink mt-4 leading-tight">
              Don&apos;t Take Our Word For It
            </h2>
            <p className="font-dm text-gray-600 text-lg mt-4">
              Real businesses. Real results. Real words.
            </p>
          </div>

          {/* Nav Arrows (Desktop mapped) */}
          <div className="hidden md:flex items-center gap-3 pb-2">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center transition-all duration-300 ${
                prevBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-brand-gold/10 hover:border-brand-gold cursor-pointer"
              }`}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-brand-gold text-xl" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center transition-all duration-300 ${
                nextBtnDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-brand-gold/10 hover:border-brand-gold cursor-pointer"
              }`}
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-brand-gold text-xl" />
            </button>
          </div>
        </motion.div>

        {/* Carousel Tracks */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-4 sm:pl-6"
                  key={idx}
                >
                  <div className="bg-white shadow-sm border border-brand-border rounded-2xl p-8 h-full flex flex-col hover:border-brand-gold/20 transition-colors duration-300">
                    
                    {/* Stars */}
                    <div className="text-brand-gold text-lg tracking-wider">
                      ★★★★★
                    </div>
                    
                    {/* Quote */}
                    <p className="font-dm text-gray-700 text-base sm:text-lg leading-relaxed italic mt-5 flex-grow">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-brand-border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <div>
                        <div className="font-dm font-bold text-brand-blue-deep flex items-center gap-2">
                          {testimonial.name}
                        </div>
                        <div className="font-dm text-sm text-gray-500 mt-1">
                          {testimonial.role} <br className="hidden lg:block xl:hidden" />
                          <span className="inline-block">{testimonial.country}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Specific Controls: Arrows + Dots */}
          <div className="flex md:hidden items-center justify-between mt-8">
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === selectedIndex ? "w-6 bg-brand-gold" : "w-2 bg-brand-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <FiChevronLeft className="text-brand-gold text-lg" />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <FiChevronRight className="text-brand-gold text-lg" />
              </button>
            </div>
          </div>

        </motion.div>

        {/* Global Google Reviews Badge Bottom Attachment */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="mt-16 flex justify-center"
        >
          <Link
            href="#"
            className="group flex flex-wrap justify-center sm:inline-flex items-center gap-2.5 bg-brand-muted border border-brand-border hover:border-brand-gold/30 px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="View Google Reviews"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-fraunces font-bold text-brand-ink group-hover:text-brand-gold transition-colors">
              4.9
            </span>
            <span className="text-brand-gold text-lg tracking-widest leading-none mt-[-2px]">
              ★★★★★
            </span>
            <span className="font-dm text-gray-600 text-sm">on Google</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
