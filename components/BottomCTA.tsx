"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FiClock, FiVideo, FiShield } from "react-icons/fi";

export default function BottomCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-brand-blue-deep relative w-full overflow-hidden" ref={ref}>
      
      {/* Top Gradient Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-40" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative flex items-center justify-center">
        
        {/* Background Decorative Blur Circles */}
        <div className="absolute top-10 left-0 lg:left-10 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 right-0 lg:right-10 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none z-0" />

        {/* Central Sub-Card Block */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-brand-blue-mid border border-brand-gold/10 rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-20 px-6 sm:px-10 text-center shadow-[0_0_50px_rgba(232,160,69,0.03)] z-10"
        >
          {/* Eyebrow */}
          <span className="font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-bold">
            Ready to Grow?
          </span>

          {/* Heading */}
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
            Stop Guessing.<br className="hidden sm:block" />
            <span className="text-brand-gold inline-block mt-1 sm:mt-2">Start Growing.</span>
          </h2>

          {/* Paragraph */}
          <p className="font-dm text-white/90 text-base sm:text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Get a free 30-minute strategy call. We&apos;ll audit your current marketing and show you exactly where you&apos;re leaving money on the table — no obligation.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/free-strategy-call"
              className="inline-flex items-center justify-center bg-brand-gold text-brand-ink font-dm font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-brand-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(232,160,69,0.3)] transition-all duration-300 group w-full sm:w-auto"
            >
              Book Your Free Strategy Call
              <span className="ml-3 sm:ml-4 text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Subtext */}
          <div className="mt-8 font-dm text-xs sm:text-sm text-white/50 flex flex-col sm:flex-row justify-center items-center gap-y-3 gap-x-1">
            <span className="flex items-center gap-2 text-white/90">
              <FiClock className="text-brand-gold text-base" /> 30-minute session
            </span>
            <span className="hidden sm:inline-block text-white/30 px-3">|</span>
            <span className="flex items-center gap-2 text-white/90">
              <FiVideo className="text-brand-gold text-base" /> Zoom or Google Meet
            </span>
            <span className="hidden sm:inline-block text-white/30 px-3">|</span>
            <span className="flex items-center gap-2 text-white/90">
              <FiShield className="text-brand-gold text-base" /> No Sales Pressure
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
