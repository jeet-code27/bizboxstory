"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiTrendingUp, FiTarget, FiUsers } from "react-icons/fi";

export default function HashvilleCaseStudy() {
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
                  Social Media Management
                </span>
                <span className="px-4 py-1.5 bg-brand-blue-deep/10 text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Content Strategy
                </span>
              </div>
              <h1 className="font-fraunces text-5xl sm:text-6xl font-bold text-brand-blue-deep leading-tight mb-6">
                Hashville Real Estate <br />
                <span className="italic text-brand-gold text-4xl sm:text-5xl">399,800+ Views</span>
              </h1>
              <p className="font-dm text-lg text-gray-500 leading-relaxed mb-8">
                How we built organic brand authority and stood out in Gurgaon's highly competitive luxury real estate market against massive developer budgets.
              </p>
              
              <div className="flex items-center gap-4">
                 <Link
                    href="/contact"
                    className="font-dm font-semibold px-8 py-4 bg-brand-blue-deep text-white rounded-full hover:bg-brand-blue-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  >
                    Start Your Project
                  </Link>
                  <a href="https://hashville.in" target="_blank" rel="noopener noreferrer" className="font-dm font-semibold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 px-4">
                    Visit hashville.in
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
                  src="/images/case-studies/hashville-home.png" 
                  alt="Hashville Real Estate Case Study Mockup" 
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
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">399K+</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Content Views</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">+745%</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Views Growth WoW</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">140K</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">Search Impressions</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-gold mb-2">676</p>
              <p className="font-dm text-sm uppercase tracking-wider opacity-80">SEO Clicks</p>
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
              Hashville needed to stand out in Gurgaon's crowded luxury real estate market — a space dominated by large developers with massive ad budgets. The goal was to build organic brand authority while running efficient paid campaigns to generate property inquiries.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-8 flex items-center gap-4">
               <FiTrendingUp className="text-brand-gold" /> What We Delivered
            </h2>
            <div className="space-y-6">
              {[
                "399,800 total views, with a week-on-week spike of 745% — driven by viral property content.",
                "Engagement up 32% week-over-week, with 384 total engagements and consistent audience growth.",
                "676 clicks from 140K impressions via SEO — building long-term search equity.",
                "Social strategy built around property series (Ravista, Godrej Alira, Bhopal Project) driving qualified buyer interest."
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
                {["Social media management", "Content strategy", "Performance marketing", "SEO visibility"].map((service) => (
                  <span key={service} className="px-5 py-2 bg-brand-surface rounded-full font-dm text-gray-600 border border-brand-border/50 text-sm">
                    {service}
                  </span>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FiUsers className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-50" />
          <blockquote className="font-fraunces text-2xl sm:text-3xl leading-relaxed text-brand-blue-deep italic mb-10">
            &quot;The content Biz Box Story created positioned us as the authority on Gurgaon real estate. The reach numbers blew us away — nearly 400K views with a fraction of a developer's budget.&quot;
          </blockquote>
          <div className="font-dm">
            <p className="font-bold text-gray-900 text-lg">Hashville Real Estate Team</p>
            <p className="text-brand-gold mt-1">
              <a href="https://hashville.in" target="_blank" rel="noopener noreferrer" className="hover:underline">hashville.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-blue-deep text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to <span className="italic text-brand-gold">Dominate</span> Your Market?
          </h2>
          <p className="font-dm text-lg text-white/70 mb-10">
            Let's build organic brand authority and drive qualified leads for your business.
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
