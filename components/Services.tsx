"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { 
  FiSearch, 
  FiEdit3, 
  FiInstagram, 
  FiTarget, 
  FiMonitor, 
  FiUsers, 
  FiAward, 
  FiMapPin 
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "AI SEO Services",
    desc: "Rank higher with AI-assisted keyword strategy and on-page optimization built for sustainable organic growth.",
    href: "/services/seo-services"
  },
  {
    icon: FiEdit3,
    title: "Content Marketing",
    desc: "High-impact blogs, landing pages & SEO content that attracts the right audience and converts them into leads.",
    href: "/services/content-marketing"
  },
  {
    icon: FiInstagram,
    title: "Social Media Management",
    desc: "Platform-specific content, analytics, and engagement strategies that build real, loyal audiences.",
    href: "/services/social-media-management"
  },
  {
    icon: FiTarget,
    title: "Google & Facebook Ads",
    desc: "Performance ad campaigns engineered to maximize ROAS across US, UK, and Indian markets.",
    href: "/services/google-facebook-ads"
  },
  {
    icon: FiMonitor,
    title: "Website Design",
    desc: "Fast, user-first websites built for conversions — not just aesthetics. SEO-baked from day one.",
    href: "/services/graphic-website-design"
  },
  {
    icon: FiUsers,
    title: "Lead Generation",
    desc: "End-to-end funnels that bring qualified buyers to your door — consistently, every single month.",
    href: "/services/lead-generation"
  },
  {
    icon: FiAward,
    title: "Brand Strategy",
    desc: "Positioning, identity, and reputation management for brands ready to lead their category.",
    href: "/services/brand-presence-consulting"
  },
  {
    icon: FiMapPin,
    title: "Google Business Profile",
    desc: "Full GBP setup, verification & local SEO optimization — get found by local customers 3x faster.",
    href: "/services/google-my-business"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  // Header variants for a slight fade up
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-brand-muted py-24 object-contain overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading Block */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
            What We Do
          </span>
          <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-brand-ink mt-3 leading-tight">
            Everything Your Brand Needs <br className="hidden sm:block" />
            <span className="text-brand-gold">to Win Online</span>
          </h2>
          <p className="font-dm text-brand-blue-deep/70 text-lg sm:text-xl mt-5 leading-relaxed">
            From AI-powered SEO to performance ads and brand strategy — we&apos;re your full-stack digital growth team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-white border border-brand-border rounded-2xl p-7 transition-all duration-300 hover:border-brand-gold/40 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                <service.icon className="text-brand-gold text-2xl" strokeWidth={2.5} />
              </div>

              {/* Title */}
              <h3 className="font-fraunces font-bold text-xl text-brand-blue-deep mt-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-dm text-gray-600 text-sm mt-3 leading-relaxed flex-grow">
                {service.desc}
              </p>

              {/* Bottom Link */}
              <Link 
                href={service.href} 
                className="text-brand-gold text-sm font-dm font-semibold hover:underline mt-6 inline-block w-fit"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
