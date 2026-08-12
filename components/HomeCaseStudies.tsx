"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HomeCaseStudies() {
  return (
    <section className="py-24 bg-brand-surface relative z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue-deep/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Our Success Stories
            </span>
            <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep mb-6 leading-tight">
              Real Results for <span className="italic text-brand-gold">Real Brands</span>
            </h2>
            <p className="font-dm text-lg text-gray-600 leading-relaxed">
              Discover how our data-driven strategies have transformed businesses, scaling their reach and multiplying their revenue.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Enterprise Cleaning Corp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
          >
            <div className="h-64 w-full relative overflow-hidden bg-brand-ink/5 flex-shrink-0 flex items-center justify-center p-6">
              <img
                src="/images/case-studies/ecc-new-logo.webp"
                alt="Enterprise Cleaning Corp Case Study"
                className="max-h-40 max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
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
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                Enterprise Cleaning Corp
              </h3>
              <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                How we helped Enterprise Cleaning Corp strengthen its local online presence and attract qualified commercial cleaning enquiries across MA, RI &amp; NH.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">+185%</p>
                  <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Lead Growth</p>
                </div>
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">Top 3</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
          >
            <div className="h-64 w-full relative overflow-hidden bg-brand-ink/5 flex-shrink-0">
              <img
                src="/images/case-studies/torch-cannabis-home.svg"
                alt="Torch Cannabis Dispensary Case Study"
                className="w-full h-full object-fit p-4 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Social Media
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Cannabis
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                Torch Cannabis
              </h3>
              <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                How we helped a fast-growing dispensary build local brand awareness, hit 320K+ video views, and drive 193% engagement growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">320K+</p>
                  <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Video Views</p>
                </div>
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">+193%</p>
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

          {/* HighThere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
          >
            <div className="h-64 w-full relative overflow-hidden bg-brand-ink/5 flex-shrink-0">
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
                  Cannabis
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                HighThere
              </h3>
              <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                How we helped HighThere scale organic traffic, dominate competitive cannabis search terms, and generate over $45,000/month in revenue.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">320+</p>
                  <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Keywords</p>
                </div>
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">$45K+</p>
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

          {/* Royal Bikers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}
          >
            <div className="h-64 w-full relative overflow-hidden bg-brand-ink/5 flex-shrink-0">
              <img
                src="/images/case-studies/royal-bikers-logo.png"
                alt="Royal Bikers Case Study"
                className="w-full h-full object-fit p-4 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Performance
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Tours
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                Royal Bikers
              </h3>
              <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                How we helped Royal Bikers generate over £25,000 in tour bookings within 2 months through high-converting Meta ad campaigns.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">£25K+</p>
                  <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Revenue</p>
                </div>
                <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                  <p className="font-dm text-brand-gold font-bold text-xl">2 Months</p>
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue-deep text-white rounded-full font-dm font-bold text-lg hover:bg-brand-gold hover:text-brand-ink transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Case Studies
            <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
