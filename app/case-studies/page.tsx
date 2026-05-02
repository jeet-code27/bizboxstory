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

      {/* ── CASE STUDIES LIST ───────────────────────────────────────────────────*/}
      <section className="pb-32 bg-brand-surface relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Smarana Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/smarana-home.png"
                  alt="Smarana App Case Study"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Performance Marketing
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    App Growth
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Smarana App
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  0 to 5,000+ app downloads. How we built the engine that keeps growing in a crowded AI productivity space, ranking #1 above MIT News.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">5,000+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Downloads</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">₹2.41</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">CPI</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/smarana"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story 
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Hashville Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/hashville-home.png"
                  alt="Hashville Real Estate Case Study"
                  className="w-full h-full object-fit p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Real Estate
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Hashville Real Estate
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we drove nearly 400K views and built organic brand authority in Gurgaon's crowded luxury real estate market.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">399K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Views</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+745%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Growth WoW</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/hashville"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story 
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Shop Shakun Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/shopshakun-home.png"
                  alt="Shop Shakun Case Study"
                  className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    E-commerce
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Shop Shakun
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we built a loyal direct audience and drove 66K+ views in a month for an Indian fashion e-commerce brand.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">5,168</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">New Followers</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">13.2%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Search CTR</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/shopshakun"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story 
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Pikky Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/pikky-home.svg"
                  alt="Pikky Case Study"
                  className="w-full h-full object-fit p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Performance Marketing
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Food Tech
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Pikky
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we drove highly efficient app installs for a food-tech startup across multiple cities with sharp hyper-local targeting.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">529K</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Accounts Reached</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">₹3.93</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">CPA</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/pikky"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story 
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
