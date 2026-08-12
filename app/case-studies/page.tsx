"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

export default function CaseStudiesPage() {
  return (
    <>
      {/* —————————————————————————————————————————————————————————————————————— HERO SECTION ——————————————————————————————————————————————————————————————————————*/}
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

      {/* US CLIENTS */}
      <section className="pb-16 bg-brand-surface relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-blue-deep text-white text-xs font-bold rounded-full uppercase tracking-widest font-dm">
                US Clients
              </span>
            </div>
            <div className="flex-grow h-px bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Bed Bugs Boston */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/bed-bugs-boston-home.webp"
                  alt="Bed Bugs Boston Case Study"
                  className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Facebook Marketing
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Pest Control
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Bed Bugs Boston
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped Bed Bugs Boston rank #1 on Google, achieve 98% SEO site health, reach 104K+ users, and drive 1,300+ website clicks through local Facebook campaigns.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">104K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Users Reached</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">98%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">SEO Health</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/bed-bugs-boston"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Cleaning Corp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5 flex items-center justify-center p-6">
                <img
                  src="/images/case-studies/ecc-new-logo.webp"
                  alt="Enterprise Cleaning Corp Case Study"
                  className="max-h-48 max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Local SEO
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Commercial Cleaning
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Enterprise Cleaning Corp
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped Enterprise Cleaning Corp strengthen its local online presence and attract more qualified commercial cleaning enquiries across Central MA, RI &amp; NH.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+185%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Lead Growth</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">Top 3</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Map Rankings</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/enterprise-cleaning-corp"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Torch Cannabis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/torch-cannabis-home.svg"
                  alt="Torch Cannabis Dispensary Case Study"
                  className="w-full h-full object-cover p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Retail
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Torch Cannabis
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped a fast-growing dispensary build local brand awareness, hit 320K+ video views, and drive 193% engagement growth through authentic social content.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">320K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Video Views</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+193%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Engagement</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/torch-cannabis"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Plugd */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/plugd-home.png"
                  alt="Plugd Cannabis Case Study"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Retail
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Plugd
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped Plugd build a community-driven cannabis brand with 80K+ organic reach and 137% engagement growth through authentic, culture-first social content.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">80K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Organic Reach</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+137%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Engagement</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/plugd"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Pikky */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                    <p className="font-dm text-brand-gold font-bold text-2xl">â‚¹3.93</p>
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

            {/* DC Leafly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/dc-leafly-keywords.avif"
                  alt="DC Leafly SEO Case Study"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Dispensary
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  DC Leafly
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped DC Leafly improve local search visibility, build authority through backlinks, and increase organic orders with targeted SEO strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+142%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Organic Traffic</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">310+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Organic Orders</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/dc-leafly"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* HighThere */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/highthere-home.webp"
                  alt="HighThere Case Study"
                  className="w-full h-full object-fit p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Market
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  HighThere
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped HighThere scale organic traffic, dominate competitive cannabis search terms, and generate over $45,000/month in revenue.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">320+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Keywords</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">$45K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Revenue/mo</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/highthere"
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

      {/* â”€â”€ INDIAN CLIENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€*/}
      <section className="pb-32 bg-brand-surface relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-gold text-brand-ink text-xs font-bold rounded-full uppercase tracking-widest font-dm">
                Indian Clients
              </span>
            </div>
            <div className="flex-grow h-px bg-brand-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Royal Bikers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
            >
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <img
                  src="/images/case-studies/royal-bikers-logo.png"
                  alt="Royal Bikers Case Study"
                  className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Performance Marketing
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Tour Booking
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Royal Bikers
                </h2>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped Royal Bikers generate over £25,000 in tour bookings within 2 months through high-converting Meta ad campaigns.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">£25K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Revenue</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">2 Months</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Timeframe</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/case-studies/royal-bikers"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Smarana App */}
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
                    <p className="font-dm text-brand-gold font-bold text-2xl">â‚¹2.41</p>
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

            {/* Hashville Real Estate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  How we drove nearly 400K views and built organic brand authority in Gurgaon&apos;s crowded luxury real estate market.
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

            {/* Shop Shakun */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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

          </div>
        </div>
      </section>
    </>
  );
}
