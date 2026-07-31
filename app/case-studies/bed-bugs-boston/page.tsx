"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiTrendingUp, FiTarget, FiUsers } from "react-icons/fi";

export default function BedBugsBostonCaseStudy() {
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

function HiddenBedBugsBostonCaseStudy() {
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
                  Facebook Marketing
                </span>
                <span className="px-4 py-1.5 bg-brand-blue-deep/10 text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Pest Control
                </span>
              </div>
              <h1 className="font-fraunces text-5xl sm:text-6xl font-bold text-brand-blue-deep leading-tight mb-6">
                Bed Bugs Boston <br />
                <span className="italic text-brand-gold text-4xl sm:text-5xl">104K+ Users Reached</span>
              </h1>
              <p className="font-dm text-lg text-gray-500 leading-relaxed mb-8">
                How we helped Bed Bugs Boston dominate local search, achieve a 98% SEMrush site health score, rank #1 on Google, and drive 1,300+ website clicks through Facebook-focused campaigns and AI SEO.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="font-dm font-semibold px-8 py-4 bg-brand-blue-deep text-white rounded-full hover:bg-brand-blue-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Start Your Project
                </Link>
                <a
                  href="https://bedbugsboston.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm font-semibold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 px-4"
                >
                  Visit bedbugsboston.us
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
                  src="/images/case-studies/bed-bugs-boston-home.webp"
                  alt="Bed Bugs Boston Case Study"
                  className="w-full aspect-video object-fit"
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
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">104K+</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Users Reached</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">+86%</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Engagement Growth</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">1,300+</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Website Clicks</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">98%</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">SEO Site Health</p>
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
              Bed Bugs Boston needed a stronger digital presence to generate consistent local inquiries in a highly competitive pest control market. The main goal was to increase trust, improve Facebook engagement, and drive more qualified leads from homeowners actively searching for reliable bed bug treatment services.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-8 flex items-center gap-4">
              <FiTrendingUp className="text-brand-gold" /> What We Delivered
            </h2>
            <div className="space-y-6">
              {[
                "Generated strong engagement through Facebook-focused campaigns and optimized local targeting.",
                "Increased engagement by 86% with educational content, awareness posts, and trust-building creatives.",
                "Reached over 104K+ users organically and through boosted campaigns across Facebook.",
                "Drove 1,300+ website clicks through conversion-focused content and call-to-action optimization.",
                "Built a stronger local brand presence with consistent posting and audience interaction.",
                "Created content focused on awareness, prevention tips, treatment education, and customer trust.",
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
                "Facebook marketing",
                "Lead generation strategy",
                "Content creation",
                "Community engagement",
                "Local brand positioning",
                "Conversion-focused campaigns",
              ].map((service) => (
                <span key={service} className="px-5 py-2 bg-brand-surface rounded-full font-dm text-gray-600 border border-brand-border/50 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SEO & RANKING RESULTS ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-surface relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Proof in Numbers
            </span>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep">
              SEO & Rankings in <span className="italic text-brand-gold">Action</span>
            </h2>
            <p className="font-dm text-gray-500 mt-4 max-w-xl mx-auto">
              From fixing every technical error to ranking #1 on Google — here&apos;s the real proof of what our AI SEO work delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {/* SEMrush Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/15 transform -rotate-1 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white">
                <img
                  src="/images/case-studies/bed-bugs-boston-semrush.png"
                  alt="Bed Bugs Boston SEMrush Site Health 98% Score"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
                <p className="font-dm text-sm text-gray-600 text-center">
                  <span className="font-fraunces font-bold text-brand-blue-deep text-lg">98% Site Health</span> — SEMrush audit with all errors resolved &amp; 99% AI Search Health
                </p>
              </div>
            </motion.div>

            {/* Google Ranking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/15 transform rotate-1 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white">
                <img
                  src="/images/case-studies/bed-bugs-boston-ranking.png"
                  alt="Bed Bugs Boston #1 Google Ranking for bed bugs boston ma"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
                <p className="font-dm text-sm text-gray-600 text-center">
                  <span className="font-fraunces font-bold text-brand-blue-deep text-lg">#1 on Google</span> — Ranking first for &quot;bed bugs boston ma&quot; above all competitors
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FiUsers className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-50" />
          <blockquote className="font-fraunces text-2xl sm:text-3xl leading-relaxed text-brand-blue-deep italic mb-10">
            &quot;We started getting more consistent inquiries and stronger engagement within weeks. The content helped build trust while bringing in real local leads.&quot;
          </blockquote>
          <div className="font-dm">
            <p className="font-bold text-gray-900 text-lg">Bed Bugs Boston Team</p>
            <p className="text-brand-gold mt-1">
              <a href="https://bedbugsboston.us/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                bedbugsboston.us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-blue-deep text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to <span className="italic text-brand-gold">Rank #1</span> in Your Market?
          </h2>
          <p className="font-dm text-lg text-white/70 mb-10">
            Let&apos;s fix your SEO, dominate local search, and drive qualified leads that actually convert.
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
