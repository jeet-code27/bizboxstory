"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";

export default function ShortPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-brand-surface py-20 border-y border-brand-border/40 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-3">
              Quick Insights
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink leading-tight">
              Your 360° Digital <br />
              <span className="text-brand-gold italic">Marketing Partner</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />
            
            <p className="font-dm text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Watch this quick short to see how BizBox Story provides global digital marketing and sales expertise to scale your business. We don&apos;t just run campaigns, we build growth engines.
            </p>

            <ul className="space-y-4 mb-8">
              {["Global Reach & Expertise", "Data-Driven Strategies", "High ROI Marketing"].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FiPlayCircle className="text-brand-gold text-xl shrink-0" />
                  <span className="font-dm text-brand-ink font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-brand-gold font-dm text-lg hover:text-brand-gold-light transition-all duration-300 w-fit font-semibold group"
            >
              Start Your Journey 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right: Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] border-[6px] border-white shadow-2xl overflow-hidden bg-brand-muted">
              {/* Standard border, no notch */}
              
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/ksOiXHDHHpA?autoplay=1&mute=1&loop=1&playlist=ksOiXHDHHpA"
                title="BizBox Story 360 Marketing Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
