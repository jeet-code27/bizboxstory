"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiPlay } from "react-icons/fi";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasMounted, setHasMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const videoVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="bg-brand-blue-deep py-24 border-y border-brand-gold/10 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Video Player */}
          {/* Order logic: mobile text is #1, video is #2. Desktop video is #1, text is #2. */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full relative rounded-2xl border-2 border-brand-gold/30 shadow-2xl shadow-brand-gold/10 overflow-hidden aspect-video bg-brand-blue-mid order-2 lg:order-1 flex items-center justify-center"
          >
            {/* Custom Next.js Image Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 z-10 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/youtube-thumnail.webp"
                    alt="Shay Mehta Video Thumbnail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* Custom Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(232,160,69,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <FiPlay className="text-white text-2xl sm:text-3xl ml-1.5 sm:ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Render Iframe ONLY when requested (improves page load drastically) */}
            {hasMounted && isPlaying && (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/v1S7JWmAddc?si=39HZdjQlQtKM58WQ&amp;autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
            
            {/* Loading Spinner underneath before mount */}
            {!hasMounted && (
              <div className="absolute inset-0 flex items-center justify-center bg-brand-blue-mid">
                <div className="w-10 h-10 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full flex flex-col order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-dm px-4 py-2 rounded-full inline-block w-fit tracking-wide font-medium">
              &#9654; Watch: 3 min
            </div>

            {/* Heading */}
            <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-white mt-6 leading-snug">
              Is Your SEO, AISEO, &amp; <br className="hidden sm:block" />
              <span className="text-brand-gold">Socials Optimized?</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="font-dm text-white/90 text-lg sm:text-lg mt-5 leading-relaxed">
              We help businesses grow online with expert SEO, social media marketing, content creation, and lead generation.
            </p>

            {/* Paragraph 2 */}
            <p className="font-dm text-white/70 text-base mt-4 leading-relaxed">
              If you want to build your brand and reach more customers across India and globally, we&apos;re here to help!
            </p>

            {/* Bullet Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-brand-gold text-xl shrink-0 mt-0.5" />
                <span className="font-dm text-white/90 text-base">
                  Expert SEO &amp; AI-assisted optimization
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-brand-gold text-xl shrink-0 mt-0.5" />
                <span className="font-dm text-white/90 text-base">
                  High-impact social media marketing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-brand-gold text-xl shrink-0 mt-0.5" />
                <span className="font-dm text-white/90 text-base">
                  Results-driven content creation &amp; lead gen
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/free-strategy-call"
              className="mt-10 inline-flex items-center justify-center bg-brand-gold text-brand-ink font-dm font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-gold-light hover:-translate-y-[2px] shadow-[0_10px_20px_rgba(232,160,69,0.3)] w-fit"
            >
              Book Your Free Strategy Call &rarr;
            </Link>

            {/* Subtext */}
            <p className="font-dm text-xs text-white/50 mt-4 tracking-wide text-center sm:text-left">
              Free 30-minute session. No obligation. No sales pitch.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
