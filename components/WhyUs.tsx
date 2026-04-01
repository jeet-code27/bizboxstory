"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { FiUserCheck, FiCpu, FiGlobe } from "react-icons/fi";

const stats = [
  { value: "50+", label: "SMEs Scaled Globally" },
  { value: "3", label: "Countries Served" },
  { value: "2x", label: "Avg. Traffic Growth in 90 Days" },
  { value: "100%", label: "Transparent Reporting" },
];

const features = [
  {
    icon: FiUserCheck,
    title: "We Work Like Partners, Not Vendors",
    desc: "You get direct access to your strategist from day one. No account manager chains, no generic monthly reports. Just honest conversations about your growth.",
  },
  {
    icon: FiCpu,
    title: "AI Tools + Human Strategy",
    desc: "We use the latest AI SEO and content tools — but every strategy is built and reviewed by experienced humans who've actually grown businesses.",
  },
  {
    icon: FiGlobe,
    title: "Globally Tested Playbooks",
    desc: "Our strategies are proven across the US, India, and beyond — not just local theory. We've ranked businesses in competitive markets on multiple continents.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-brand-surface py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-brand-ink mt-4 leading-tight">
            Why 50+ Businesses Chose BizBox Story <br className="hidden lg:block" />
            <span className="text-brand-gold">Over Bigger Agencies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 w-full"
        >
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white shadow-sm border border-brand-border rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-md"
              >
                <div className="font-fraunces text-5xl lg:text-6xl text-brand-blue-deep font-bold tracking-wide leading-none">
                  {stat.value}
                </div>
                <div className="font-dm text-sm text-gray-500 mt-3 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Rows */}
          <div className="mt-20 space-y-10 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start ${
                  idx !== features.length - 1 ? "pb-10 border-b border-brand-border" : ""
                }`}
              >
                {/* Left: Icon + Title */}
                <div className="md:col-span-5 flex items-center md:items-start lg:items-center gap-5">
                  <div className="w-[52px] h-[52px] rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <feature.icon className="text-brand-gold text-2xl" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-fraunces font-bold text-xl text-brand-blue-deep">
                    {feature.title}
                  </h3>
                </div>

                {/* Right: Description */}
                <div className="md:col-span-7 flex items-center h-full">
                  <p className="font-dm text-gray-600 leading-relaxed text-base lg:text-lg">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
