"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiTrendingUp, FiTarget, FiUsers } from "react-icons/fi";

export default function DcLeaflyPage() {
  return (
    <section className="relative pt-48 pb-32 flex flex-col items-center justify-center min-h-[60vh] bg-brand-surface text-center px-4">
      <h1 className="font-fraunces text-5xl sm:text-6xl font-bold text-brand-blue-deep mb-6">
        Coming <span className="italic text-brand-gold">Soon</span>
      </h1>
      <p className="font-dm text-lg text-gray-500 max-w-2xl mx-auto mb-10">
        We are currently updating this case study to reflect our latest strategies and results. Please check back later!
      </p>
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 font-dm text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-semibold group"
      >
        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Portfolio
      </Link>
    </section>
  );
}

export function HiddenDcLeaflyPage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────────*/}
      <section className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-bl-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-dm text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-semibold mb-8 group"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-3 flex-wrap mb-6">
                <span className="px-4 py-1.5 bg-brand-blue-deep/10 text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  SEO
                </span>
                <span className="px-4 py-1.5 bg-brand-blue-deep/10 text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Cannabis Dispensary
                </span>
              </div>
              <h1 className="font-fraunces text-5xl sm:text-6xl font-bold text-brand-blue-deep leading-tight mb-6">
                DC Leafly <br />
                <span className="italic text-brand-gold text-4xl sm:text-5xl">142% Organic Traffic Growth</span>
              </h1>
              <p className="font-dm text-lg text-gray-500 leading-relaxed mb-8">
                How we helped DC Leafly improve local search visibility, build authority through backlinks, and increase organic orders with targeted SEO strategies.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="font-dm font-semibold px-8 py-4 bg-brand-blue-deep text-white rounded-full hover:bg-brand-blue-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Start Your Project
                </Link>
                <a
                  href="https://dcleafly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm font-semibold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 px-4"
                >
                  Visit DC Leafly
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/20 transform rotate-3 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white">
                <img
                  src="/images/case-studies/dc-leafly-keywords.png"
                  alt="DC Leafly — 498 Keywords Ranked"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS OVERVIEW ──────────────────────────────────────────────────*/}
      <section className="py-16 bg-brand-blue-deep text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">185+</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Keywords Ranked</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">+142%</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Organic Traffic</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">310+</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Organic Orders</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">998</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Referring Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE & SOLUTION ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Challenge */}
          <div className="mb-20">
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-6 flex items-center gap-4">
              <FiTarget className="text-brand-gold" /> The Challenge
            </h2>
            <p className="font-dm text-lg text-gray-600 leading-relaxed bg-brand-surface p-8 rounded-2xl border border-brand-border">
              DC Leafly wanted to improve its search visibility in a highly competitive cannabis market while driving more organic traffic and increasing online orders. The goal was to strengthen local SEO rankings, build website authority, and generate sustainable growth beyond social media traffic.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-8 flex items-center gap-4">
              <FiTrendingUp className="text-brand-gold" /> What We Delivered
            </h2>
            <div className="space-y-6">
              {[
                "Ranked 185+ keywords across local cannabis and dispensary-related searches.",
                "Built quality backlinks through strategic SEO outreach and authority-building campaigns.",
                "Increased organic traffic by 142% through on-page optimization, local SEO, and content improvements.",
                "Helped generate over 310+ organic orders through improved search visibility and website optimization.",
                "Optimized service pages, metadata, and local search structure for stronger Google rankings.",
                "Improved domain authority and search positioning in competitive local search results.",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white border border-brand-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <FiCheckCircle className="text-brand-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="font-dm text-lg text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Applied */}
          <div className="mt-16 border-t border-brand-border pt-16">
            <h3 className="font-dm font-bold text-gray-900 uppercase tracking-widest text-sm mb-6 text-center">Services Applied</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "SEO optimization",
                "Local SEO strategy",
                "Backlink building",
                "Content optimization",
                "Technical SEO",
                "Organic growth strategy",
              ].map((service) => (
                <span key={service} className="px-5 py-2 bg-brand-surface rounded-full font-dm text-gray-600 border border-brand-border/50 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── RESULTS IN ACTION ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-surface relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Proof in Numbers
            </span>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep">
              Results in <span className="italic text-brand-gold">Action</span>
            </h2>
            <p className="font-dm text-gray-500 mt-4 max-w-xl mx-auto">
              Real SEO data showing the keywords ranked and backlinks built — proof of consistent organic growth delivered for DC Leafly.
            </p>
          </motion.div>

          {/* Keywords Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-brand-gold/15 transform -rotate-1 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white">
              <img
                src="/images/case-studies/dc-leafly-keywords.png"
                alt="DC Leafly — 498 Keywords Ranked in a Month"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-border rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="font-dm text-gray-600 text-sm">498 keywords ranked —</span>
                <span className="font-fraunces text-2xl font-bold text-brand-blue-deep">in a single month</span>
              </span>
            </div>
          </motion.div>

          {/* Backlinks Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue-deep/10 transform rotate-1 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white">
              <img
                src="/images/case-studies/dc-leafly-backlinks.png"
                alt="DC Leafly — Backlinks Built in a Month"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-border rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="font-dm text-gray-600 text-sm">6.6K backlinks with</span>
                <span className="font-fraunces text-2xl font-bold text-brand-blue-deep">998 referring domains</span>
                <span className="font-dm text-gray-500 text-sm">built through strategic outreach</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FiUsers className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-50" />
          <blockquote className="font-fraunces text-2xl sm:text-3xl leading-relaxed text-brand-blue-deep italic mb-10">
            &quot;The SEO improvements helped us rank better locally and brought in consistent organic traffic that actually converted into orders.&quot;
          </blockquote>
          <div className="font-dm">
            <p className="font-bold text-gray-900 text-lg">DC Leafly Team</p>
            <p className="text-brand-gold mt-1">DC Leafly Dispensary</p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-blue-deep text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to <span className="italic text-brand-gold">Dominate</span> Local Search?
          </h2>
          <p className="font-dm text-lg text-white/70 mb-10">
            Let&apos;s build sustainable organic traffic and drive real conversions for your business — just like we did for DC Leafly.
          </p>
          <Link
            href="/contact"
            className="inline-block font-dm font-semibold px-10 py-5 bg-brand-gold text-brand-ink rounded-full hover:bg-white hover:text-brand-blue-deep transition-all duration-300 shadow-xl shadow-brand-gold/10 hover:-translate-y-1"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
