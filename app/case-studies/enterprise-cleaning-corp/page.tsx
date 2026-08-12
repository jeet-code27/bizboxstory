"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiTrendingUp, FiTarget, FiMapPin, FiSearch } from "react-icons/fi";

export default function EnterpriseCleaningCorpPage() {
  const servicesApplied = [
    "Local SEO",
    "SEO strategy",
    "Keyword research",
    "Location-based SEO",
    "Website content optimisation",
    "Service page optimisation",
    "Content marketing",
    "Commercial cleaning SEO",
    "Local search strategy",
    "Conversion-focused website strategy",
  ];

  const deliverables = [
    "Developed a targeted digital marketing strategy focused on commercial cleaning services.",
    "Optimised the brand’s online presence to improve visibility across Central Massachusetts, Rhode Island and Southern New Hampshire.",
    "Created location-focused content targeting businesses actively searching for commercial cleaning services.",
    "Built messaging around Enterprise Cleaning Corp’s expertise in serving hotels, hospitals, clinics and warehouses.",
    "Developed SEO-focused website content designed to attract relevant commercial search traffic.",
    "Targeted high-intent local keywords to connect the business with potential customers closer to the point of purchase.",
    "Strengthened service and location pages to improve relevance, visibility and conversion potential.",
    "Created a scalable content strategy designed to support long-term organic growth and qualified lead generation.",
  ];

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
                  Local SEO
                </span>
                <span className="px-4 py-1.5 bg-brand-blue-deep/10 text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                  Commercial Cleaning
                </span>
                <span className="px-4 py-1.5 bg-brand-gold/20 text-brand-ink text-xs font-bold rounded-full uppercase tracking-wider font-dm flex items-center gap-1">
                  🇺🇸 Massachusetts, USA
                </span>
              </div>
              <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-blue-deep leading-tight mb-6">
                Enterprise Cleaning Corp <br />
                <span className="italic text-brand-gold text-3xl sm:text-4xl lg:text-5xl">Local Search &amp; Lead Generation</span>
              </h1>
              <p className="font-dm text-lg text-gray-600 leading-relaxed mb-8">
                How we helped Enterprise Cleaning Corp strengthen its local online presence and attract more qualified commercial cleaning enquiries across Central Massachusetts, Rhode Island and Southern New Hampshire.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="font-dm font-semibold px-8 py-4 bg-brand-blue-deep text-white rounded-full hover:bg-brand-ink transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold/20 transform rotate-3 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl bg-white p-8 flex items-center justify-center min-h-[320px]">
                <img
                  src="/images/case-studies/ecc-new-logo.webp"
                  alt="Enterprise Cleaning Corp Logo"
                  className="max-h-48 max-w-full object-contain"
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
              <p className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-gold mb-2">3 States</p>
              <p className="font-dm text-xs sm:text-sm uppercase tracking-wider opacity-80">MA, RI &amp; NH Coverage</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-gold mb-2">+185%</p>
              <p className="font-dm text-xs sm:text-sm uppercase tracking-wider opacity-80">Local Lead Growth</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-gold mb-2">Top 3</p>
              <p className="font-dm text-xs sm:text-sm uppercase tracking-wider opacity-80">Local Search Rankings</p>
            </div>
            <div className="px-4">
              <p className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-gold mb-2">B2B</p>
              <p className="font-dm text-xs sm:text-sm uppercase tracking-wider opacity-80">Commercial Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE & WHAT WE DELIVERED ─────────────────────────────*/}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* The Challenge */}
          <div className="bg-brand-surface p-8 sm:p-12 rounded-3xl border border-brand-border">
            <span className="font-dm text-brand-gold text-xs uppercase tracking-widest font-bold block mb-3">
              The Challenge
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-4">
              Expanding B2B Reach Across Target Commercial Markets
            </h2>
            <p className="font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
              Enterprise Cleaning Corp wanted to strengthen its digital presence and reach more commercial clients across its target service areas. The focus was on positioning the company as a reliable commercial cleaning provider while improving visibility for high-value searches and generating more relevant enquiries from businesses looking for professional cleaning services.
            </p>
          </div>

          {/* What We Delivered */}
          <div>
            <span className="font-dm text-brand-gold text-xs uppercase tracking-widest font-bold block mb-3">
              Our Execution
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-8">
              What We Delivered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-brand-surface p-5 rounded-2xl border border-brand-border">
                  <FiCheckCircle className="text-brand-gold text-xl flex-shrink-0 mt-0.5" />
                  <p className="font-dm text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Applied */}
          <div>
            <span className="font-dm text-brand-gold text-xs uppercase tracking-widest font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-6">
              Services Applied
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {servicesApplied.map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border border-brand-border text-brand-blue-deep text-xs font-bold rounded-full font-dm shadow-xs"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Result & Testimonial */}
          <div className="bg-[#080c18] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
            <span className="font-dm text-brand-gold text-xs uppercase tracking-widest font-bold block mb-3">
              The Result
            </span>
            <h2 className="font-fraunces text-3xl font-bold mb-6">
              Measurable Business Growth &amp; Brand Positioning
            </h2>
            <p className="font-dm text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              The strategy helped Enterprise Cleaning Corp build a stronger digital presence across its target markets and position the brand in front of businesses actively looking for professional commercial cleaning services. By combining local SEO, targeted content and conversion-focused messaging, we created a foundation designed to generate more relevant visibility, enquiries and long-term growth.
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 italic font-dm text-gray-200 text-base sm:text-lg">
              &quot;A strong fit for commercial service businesses looking to turn local search visibility into real business opportunities.&quot;
              <footer className="not-italic font-bold text-brand-gold text-sm mt-3">
                — Enterprise Cleaning Corp Team
              </footer>
            </blockquote>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────*/}
      <section className="py-20 bg-brand-surface text-center border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep mb-4">
            Ready to Scale Your Commercial Service Business?
          </h2>
          <p className="font-dm text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Get in touch with our team today to build a custom local SEO &amp; lead generation strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-dm font-bold text-base sm:text-lg px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-lg hover:-translate-y-1"
          >
            Get Free Strategy Call →
          </Link>
        </div>
      </section>
    </>
  );
}
