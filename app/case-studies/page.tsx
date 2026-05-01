"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────────*/}
      <section 
        className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden bg-brand-surface min-h-[60vh]"
      >
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-blue-deep/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Our Portfolio
            </span>
            <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-blue-deep leading-tight">
              Client <span className="italic text-brand-gold">Success Stories</span>
            </h1>
            <p className="mt-6 font-dm text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Discover how we&apos;ve helped businesses across the globe achieve exponential growth through data-driven digital marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMING SOON SECTION ───────────────────────────────────────────────────*/}
      <section className="pb-32 bg-brand-surface relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-white rounded-3xl p-10 sm:p-16 border border-brand-border"
             style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
          >
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
              <FiTrendingUp className="w-10 h-10" />
            </div>
            <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-4">
              Case Studies Are Being Compiled
            </h2>
            <p className="font-dm text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              We are currently gathering data, metrics, and insights from our most successful campaigns. Check back soon to read in-depth case studies on how we drive revenue for our partners.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="font-dm font-semibold px-9 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-base shadow-lg shadow-brand-gold/20"
              >
                Discuss Your Project <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
