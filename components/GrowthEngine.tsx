"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  FiSearch, 
  FiPenTool, 
  FiZap, 
  FiBarChart2, 
  FiTrendingUp 
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    icon: FiSearch,
    desc: "Deep audit of your funnel, traffic, competition, and conversion gaps. We find what's bleeding revenue before we build anything."
  },
  {
    number: "02",
    title: "Architect",
    icon: FiPenTool,
    desc: "We design your full-funnel growth map — channels, messaging, audience segments, and the exact levers to pull first."
  },
  {
    number: "03",
    title: "Activate",
    icon: FiZap,
    desc: "SEO, paid ads, content, and social deployed in a sequenced launch — not a scattered blast. Everything connects."
  },
  {
    number: "04",
    title: "Optimize",
    icon: FiBarChart2,
    desc: "Weekly performance loops. Data-driven decisions. We cut what doesn't convert and scale what does — every single week."
  },
  {
    number: "05",
    title: "Compound",
    icon: FiTrendingUp,
    desc: "Each month builds on the last. Organic + paid + brand equity compound into a self-sustaining growth engine you own."
  }
];

export default function GrowthEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-brand-blue-deep py-24 object-contain overflow-hidden relative" ref={ref}>
      {/* Background glowing effects — matches Hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,182,5,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-mid/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold block mb-3">
            Our Proprietary Framework
          </span>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            The BizBox 5-Layer <span className="text-brand-gold">Growth Engine</span>
          </h2>
          <p className="font-dm text-white/70 text-lg sm:text-xl mt-5 leading-relaxed">
            Not a collection of services. A compounding system designed to build on itself — each layer makes the next more powerful.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="relative group flex flex-col items-center text-center"
            >
              {/* Connector Line (Desktop Only) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[120%] h-[1px] bg-gradient-to-r from-brand-gold/30 to-brand-gold/0 -z-10" />
              )}
              
              {/* Desktop and Tablet circles background effect */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-white/5 border border-brand-gold/20 group-hover:border-brand-gold/50 group-hover:bg-brand-gold/5 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <span className="absolute -top-4 -left-3 text-5xl font-fraunces font-bold text-white/[0.04] group-hover:text-brand-gold/10 transition-colors duration-300 pointer-events-none">
                  {step.number}
                </span>
                <step.icon className="text-brand-gold text-3xl group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>

              <h3 className="font-fraunces font-bold text-xl text-white mb-3 flex flex-col items-center gap-1">
                <span className="text-brand-gold text-xs font-dm tracking-widest uppercase">{step.number}</span>
                {step.title}
              </h3>
              
              <p className="font-dm text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
