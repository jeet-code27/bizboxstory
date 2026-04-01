"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FiTrendingUp, FiGlobe, FiClock, FiTarget } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="bg-brand-surface py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content (Span 7) */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Eyebrow */}
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-3">
              The BizBox Story
            </span>

            {/* H2 Heading */}
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink leading-tight">
              We Don&apos;t Run Campaigns.<br />
              <span className="text-brand-gold">We Build Growth Engines.</span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />

            {/* Story Paragraphs */}
            <div className="space-y-6 font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Most businesses have tried digital marketing. They&apos;ve hired freelancers, boosted a few posts, maybe even paid a big agency — and walked away with nothing but a lighter bank account.
              </p>
              <p>
                BizBox Story was born from that frustration. Getting burned by agencies that sold empty promises and delivered generic reports forced us to build the agency we always wished existed.
              </p>
              <p>
                Today, we&apos;re a global team of strategists, writers, and ad managers working with one obsession: <strong className="text-brand-ink font-semibold">your revenue</strong>. Not your follower count or superficial impressions. Just actual, scalable business growth.
              </p>
            </div>

            {/* CTA Link */}
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-brand-gold font-dm text-lg hover:text-brand-gold-light transition-all duration-300 w-fit font-semibold group"
            >
              Discover Our Full Story 
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl leading-none">&rarr;</span>
            </Link>
          </motion.div>

          {/* RIGHT COLUMN: Sleek Metrics Card (Span 5) */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 relative w-full mt-8 lg:mt-0"
          >
            {/* Dark glassmorphism dashboard card mapped to Muted theme */}
            <div className="relative bg-brand-muted/80 backdrop-blur-md border border-brand-border rounded-3xl p-8 sm:p-10 shadow-lg overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand-gold/15 transition-colors duration-700" />

              {/* Top Banner inside card */}
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-brand-border">
                <h3 className="font-fraunces text-xl text-brand-blue-deep font-bold tracking-wide">
                  Agency Impact
                </h3>
                <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-3.5 py-1.5 rounded-full text-xs font-dm font-semibold border border-brand-gold/20 tracking-wider">
                  🇺🇸 USA &bull; 🇮🇳 IND
                </div>
              </div>

              {/* 2x2 Metrics Grid */}
              <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                {/* Metric 1 */}
                <div className="flex flex-col">
                  <FiTrendingUp className="text-brand-gold text-2xl mb-3 opacity-90" />
                  <div className="font-fraunces font-bold text-5xl text-brand-blue-deep tracking-wide leading-none">50+</div>
                  <div className="font-dm text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">
                    SMEs Scaled
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col">
                  <FiGlobe className="text-brand-gold text-2xl mb-3 opacity-90" />
                  <div className="font-fraunces font-bold text-5xl text-brand-blue-deep tracking-wide leading-none">3</div>
                  <div className="font-dm text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">
                    Countries
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col">
                  <FiClock className="text-brand-gold text-2xl mb-3 opacity-90" />
                  <div className="font-fraunces font-bold text-5xl text-brand-blue-deep tracking-wide leading-none">6+</div>
                  <div className="font-dm text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">
                    Years Active
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col">
                  <FiTarget className="text-brand-gold text-2xl mb-3 opacity-90" />
                  <div className="font-fraunces font-bold text-5xl text-brand-blue-deep tracking-wide leading-none">90</div>
                  <div className="font-dm text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-widest font-semibold">
                    Day ROI Target
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
