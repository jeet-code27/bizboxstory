"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } },
  };

  if (!mounted) return null;

  return (
    <section className="relative flex items-center overflow-hidden bg-brand-blue-deep pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Background Elements */}
      {/* 1. Radial gradient top-left */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,182,5,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* 2. Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 182, 5, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 182, 5, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 3. Pure CSS Particle Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-gold opacity-[0.15]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            className="col-span-1 lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={textItemVariants} className="inline-block mb-6 mt-4 lg:mt-0">
              <div className="flex items-center border border-brand-gold/30 bg-brand-gold/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-dm font-medium text-brand-gold tracking-wider uppercase">
                  Trusted by 50+ Businesses Across US &amp; India
                </span>
              </div>
            </motion.div>

            {/* H1 Heading */}
            <h1 className="font-fraunces font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6">
              <motion.span variants={textItemVariants} className="block text-white pb-1">
                Revenue-Driven
              </motion.span>
              <motion.span variants={textItemVariants} className="block text-[#ffb605] pb-1">
                Digital Marketing
              </motion.span>
              <motion.span variants={textItemVariants} className="block text-white">
                Built for Global Brands
              </motion.span>
            </h1>

            {/* Paragraph */}
            <motion.p 
              variants={textItemVariants} 
              className="font-dm text-base sm:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed"
            >
              We help SMEs and startups in the US, UK, Australia &amp; India generate consistent leads, rank on Google, and build brands people trust. No fluff. Just measurable growth.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={textItemVariants} 
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link 
                href="/free-strategy-call"
                className="inline-flex justify-center items-center bg-brand-gold text-brand-ink font-dm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-brand-gold-light hover:shadow-[0_0_20px_rgba(255,182,5,0.4)] text-base"
              >
                Book Free Strategy Call &rarr;
              </Link>
              <Link 
                href="/results"
                className="inline-flex justify-center items-center border border-brand-gold/40 text-brand-gold font-dm px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-brand-gold/10 text-base"
              >
                See Our Results
              </Link>
            </motion.div>

            {/* Micro-stats */}
            <motion.div 
              variants={textItemVariants} 
              className="grid grid-cols-3 gap-4 border-t border-brand-gold/20 pt-6 mt-8 max-w-md"
            >
              <div>
                <div className="font-fraunces text-3xl sm:text-4xl text-brand-gold tracking-wide">50+</div>
                <div className="font-dm text-xs text-gray-400 mt-1">Clients</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl sm:text-4xl text-brand-gold tracking-wide">3</div>
                <div className="font-dm text-xs text-gray-400 mt-1">Countries</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl sm:text-4xl text-brand-gold tracking-wide">Page 1</div>
                <div className="font-dm text-xs text-gray-400 mt-1">Rankings</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            className="hidden lg:block lg:col-span-5 relative"
            variants={cardVariants}
            initial="hidden"
            animate="show"
          >
            <div 
              className="bg-white/5 border border-brand-gold/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(255,182,5,0.1)] backdrop-blur-sm relative"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              {/* Card Header Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="text-xl">📈</div>
                  <span className="font-dm font-medium text-white">Organic Traffic</span>
                </div>
                <div className="bg-green-500/10 text-green-400 text-sm font-bold px-3 py-1 rounded-full">
                  +127%
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="h-48 w-full border-b border-l border-gray-600 relative flex items-end">
                {/* SVG Line Chart */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.1)" strokeDasharray="2,2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="2,2" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.1)" strokeDasharray="2,2" />
                  
                  {/* Area gradient */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand-gold)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-brand-gold)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Chart Area */}
                  <polygon 
                    points="0,100 0,80 20,65 40,70 60,35 80,20 100,5 100,100" 
                    fill="url(#chartGradient)" 
                  />
                  
                  {/* Chart Line */}
                  <polyline 
                    points="0,80 20,65 40,70 60,35 80,20 100,5" 
                    fill="none" 
                    stroke="var(--color-brand-gold)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0px 4px 6px rgba(255, 182, 5, 0.4))" }}
                  />
                  
                  {/* Data Points */}
                  <circle cx="20" cy="65" r="3" fill="var(--color-brand-ink)" stroke="var(--color-brand-gold)" strokeWidth="2" />
                  <circle cx="40" cy="70" r="3" fill="var(--color-brand-ink)" stroke="var(--color-brand-gold)" strokeWidth="2" />
                  <circle cx="60" cy="35" r="3" fill="var(--color-brand-ink)" stroke="var(--color-brand-gold)" strokeWidth="2" />
                  <circle cx="80" cy="20" r="3" fill="var(--color-brand-ink)" stroke="var(--color-brand-gold)" strokeWidth="2" />
                  <circle cx="100" cy="5" r="4" fill="var(--color-brand-gold)" />
                </svg>

                {/* X-axis labels mock */}
                <div className="absolute -bottom-6 left-0 w-full flex justify-between px-2 text-xs text-gray-400 font-dm">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>
              </div>
            </div>
            
            {/* Background glowing orb behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-gold/20 blur-[100px] rounded-full z-[-1] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
