"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FiTarget,
  FiGlobe,
  FiHeart,
  FiCheckCircle,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiCoffee,
  FiArrowRight,
  FiStar,
  FiZap,
  FiShield,
} from "react-icons/fi";

/* ── Animated Counter ─────────────────────────────────────────────── */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Vision / Mission / Values data ─────────────────────────────── */
const tabs = [
  {
    id: "vision",
    label: "Our Vision",
    icon: <FiGlobe className="w-5 h-5" />,
    quote: "Empowering brands through innovative marketing solutions.",
    body: "At Bizbox Story, our vision is to redefine digital marketing by empowering businesses with innovative strategies that drive sustainable growth and foster long-term success.",
    points: [
      { icon: <FiZap />, label: "Innovative Leadership" },
      { icon: <FiGlobe />, label: "Global Impact" },
      { icon: <FiHeart />, label: "Customer-Centric Approach" },
    ],
    color: "from-brand-gold/20 to-amber-100/30",
    accent: "text-brand-gold",
    border: "border-brand-gold",
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: <FiTarget className="w-5 h-5" />,
    quote: "Deliver exceptional results that drive growth and engagement.",
    body: "We are committed to delivering unparalleled digital marketing expertise and driving measurable results for our clients through strategic and creative solutions.",
    points: [
      { icon: <FiStar />, label: "Strategic Excellence" },
      { icon: <FiZap />, label: "Creative Ingenuity" },
      { icon: <FiTrendingUp />, label: "Continuous Growth" },
    ],
    color: "from-blue-500/10 to-indigo-100/20",
    accent: "text-brand-blue-mid",
    border: "border-brand-blue-mid",
  },
  {
    id: "values",
    label: "Our Values",
    icon: <FiShield className="w-5 h-5" />,
    quote: "Integrity, creativity, collaboration: our commitment to excellence.",
    body: "At Bizbox Story, our values guide every decision and action, fostering a culture of integrity, collaboration, and innovation.",
    points: [
      { icon: <FiShield />, label: "Integrity" },
      { icon: <FiUsers />, label: "Collaboration" },
      { icon: <FiZap />, label: "Innovation" },
    ],
    color: "from-emerald-500/10 to-teal-100/20",
    accent: "text-emerald-600",
    border: "border-emerald-500",
  },
];

/* ── Mentality cards data ────────────────────────────────────────── */
const mentalityCards = [
  {
    number: "01",
    title: "WE SOLVE FOR THE CUSTOMER",
    body: "There's no one-size fits all solution here. We solve problems based on your goals. In digital marketing, we believe focusing on customer needs is crucial for driving engagement and achieving business success.",
    points: [
      "Understand and Address Customer Pain Points",
      "Enhance User Experience (UX) Across All Touchpoints",
      "Leverage Data-Driven Insights for Continuous Improvement",
    ],
  },
  {
    number: "02",
    title: "LONG-TERM IMPACT WITH AN AMAZING TEAM",
    body: "Our goal is to build long-term relationships and friendship on the foundation of success. Building and maintaining a strong team is crucial for achieving sustained success in digital marketing.",
    points: [
      "Innovative and Adaptable Strategies",
      "Consistent and Cohesive Brand Messaging",
      "Scalable and Measurable Growth",
    ],
  },
];

/* ── Stats data ──────────────────────────────────────────────────── */
const stats = [
  { end: 1000, suffix: "+", label: "Projects Completed", icon: <FiAward className="w-7 h-7" /> },
  { end: 100, suffix: "+", label: "Happy Clients", icon: <FiUsers className="w-7 h-7" /> },
  { end: 500, suffix: "+", label: "Cups of Coffee", icon: <FiCoffee className="w-7 h-7" /> },
  { end: 20, suffix: "+", label: "Awards Won", icon: <FiStar className="w-7 h-7" /> },
];

/* ── Testimonials data ───────────────────────────────────────────── */
const testimonials = [
  {
    name: "Ms. Shuchi Singh",
    role: "Founder, Saabanvali",
    quote:
      "I have used Biz Box Story's services in setting up the website for my beauty brand, Saabanvali. The team has been meticulous with timelines, and the quality of work has been more than satisfactory. Very happy with the services.",
    initials: "SS",
  },
  {
    name: "Our Hive Cafe",
    role: "Café Brand",
    quote:
      "Our Hive Cafe's social media is taken care by Biz Box Story. They set up our Instagram, Facebook and got us group bookings and increased sales. Their work on Google Business Profile got us a lot of visibility and orders.",
    initials: "OH",
  },
  {
    name: "English Institute",
    role: "Education Institution",
    quote:
      "Our complete digital media is taken care of by Biz Box Story. They do Instagram, Facebook and GMB for us. They made our website and help us with offline marketing too. Very helpful, Thank you.",
    initials: "EI",
  },
  {
    name: "Ms. Jessica",
    role: "Nirvana DC",
    quote:
      "Bizbox Story transformed our online presence! Their innovative strategies and dedicated team took our brand to new heights. We've seen remarkable growth and engagement since partnering with them. Highly recommend!",
    initials: "JN",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("vision");
  const activeData = tabs.find((t) => t.id === activeTab)!;

  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const mentalityRef = useRef(null);
  const founderRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const visionInView = useInView(visionRef, { once: true, margin: "-80px" });
  const mentalityInView = useInView(mentalityRef, { once: true, margin: "-80px" });
  const founderInView = useInView(founderRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };
  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        {/* Particle dots */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-gold/20"
            style={{
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              top: `${10 + ((i * 31) % 80)}%`,
              left: `${5 + ((i * 17) % 90)}%`,
              animation: `float-particle ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Gold glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-400/10 rounded-full blur-[100px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold mb-4 px-5 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
              Who We Are
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mt-4"
          >
            About{" "}
            <span className="italic text-brand-gold">BizBox</span> Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-dm text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Premier Digital Marketing Agency — We&apos;d love to schedule a meeting
            to discuss how we can help you grow your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="font-dm font-semibold px-8 py-3.5 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.4)" }}
            >
              Get a Free Strategy Call <FiArrowRight />
            </Link>
            <Link
              href="#story"
              className="font-dm font-medium px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

       
      </section>

      {/* ── INTRO / STORY ─────────────────────────────────────────── */}
      <section id="story" className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Your Success, Our Passion
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                Premier Digital Marketing Agency{" "}
                <span className="text-brand-gold italic">in Gurgaon</span>
              </h2>
              <div className="w-16 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />
              <div className="space-y-5 font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  At BizBox Story, we are a dedicated team of digital marketing professionals
                  committed to helping businesses grow in the ever-evolving digital landscape.
                  We specialize in crafting tailored marketing strategies that deliver real,
                  measurable results for our clients.
                </p>
                <p>
                  From startups to established enterprises, we partner with businesses across
                  industries to build a strong digital presence, drive quality traffic, and
                  convert visitors into loyal customers.
                </p>
                <p>
                  We&apos;d love to schedule a meeting to discuss how we can help you{" "}
                  <strong className="text-brand-ink">grow your business</strong> — with
                  strategies tailored specifically to your unique goals and market.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 font-dm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group"
              >
                Schedule a Free Meeting
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: Highlight cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                { num: "1000+", label: "Projects Completed", icon: <FiAward className="w-6 h-6" /> },
                { num: "100+", label: "Happy Clients", icon: <FiUsers className="w-6 h-6" /> },
                { num: "25+", label: "Years Experience", icon: <FiTrendingUp className="w-6 h-6" /> },
                { num: "20+", label: "Awards Won", icon: <FiStar className="w-6 h-6" /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-brand-muted rounded-2xl p-6 border border-brand-border hover:border-brand-gold/30 transition-all duration-300 group"
                >
                  <div className="text-brand-gold mb-3 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <div className="font-fraunces text-4xl font-bold text-brand-blue-deep">{item.num}</div>
                  <div className="font-dm text-sm text-gray-500 mt-1 uppercase tracking-wider font-semibold">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ─────────────────────────────── */}
      <section ref={visionRef} className="py-20 bg-brand-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Our Foundation
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-2">
              Vision, Mission &amp; Values
            </h2>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-dm font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand-gold text-brand-ink shadow-lg scale-105"
                    : "bg-white text-gray-500 border border-brand-border hover:border-brand-gold/40 hover:text-brand-gold"
                }`}
                style={
                  activeTab === tab.id
                    ? { boxShadow: "0 8px 30px rgba(232,160,69,0.35)" }
                    : {}
                }
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-lg max-w-5xl mx-auto"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left */}
                <div>
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-dm font-semibold uppercase tracking-widest mb-5 ${activeData.accent}`}
                  >
                    {activeData.icon}
                    {activeData.label}
                  </div>
                  <blockquote
                    className={`font-fraunces text-2xl sm:text-3xl font-bold text-brand-blue-deep italic leading-snug mb-6 pl-5 border-l-4 ${activeData.border}`}
                  >
                    &ldquo;{activeData.quote}&rdquo;
                  </blockquote>
                  <p className="font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
                    {activeData.body}
                  </p>
                </div>

                {/* Right: Key Points */}
                <div className="space-y-5">
                  {activeData.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-brand-muted border border-brand-border hover:border-brand-gold/30 transition-colors group"
                    >
                      <div
                        className={`text-xl ${activeData.accent} group-hover:scale-110 transition-transform`}
                      >
                        {pt.icon}
                      </div>
                      <span className="font-dm font-semibold text-brand-ink">
                        {pt.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── MENTALITY ─────────────────────────────────────────────── */}
      <section ref={mentalityRef} className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={mentalityInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Our Mentality
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-2 leading-tight">
              We Believe in{" "}
              <span className="text-brand-gold italic">Reputation</span> Over Revenue
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={mentalityInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {mentalityCards.map((card) => (
              <motion.div
                key={card.number}
                variants={fadeUp}
                className="relative bg-brand-muted rounded-3xl p-8 sm:p-10 border border-brand-border hover:border-brand-gold/30 transition-all duration-500 group overflow-hidden"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}
              >
                {/* Big number watermark */}
                <div className="absolute top-6 right-8 font-fraunces text-[7rem] font-bold text-brand-gold/8 leading-none select-none group-hover:text-brand-gold/12 transition-colors">
                  {card.number}
                </div>

                {/* Gold top bar */}
                <div className="w-12 h-1 bg-brand-gold rounded-full mb-6" />

                <h3 className="font-dm text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-3">
                  {card.title}
                </h3>
                <p className="font-dm text-gray-600 text-base leading-relaxed mb-8">
                  {card.body}
                </p>

                {/* Checklist */}
                <ul className="space-y-3">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                      <span className="font-dm text-sm text-gray-600">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────── */}
      <section ref={founderRef} className="py-0 overflow-hidden bg-brand-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

            {/* LEFT: Large Image Panel */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="relative overflow-hidden min-h-[450px] lg:min-h-[700px]"
            >
              {/* Full-bleed image */}
              <Image
                src="/images/shay.webp"
                alt="Shailesh Mehta — Founder of BizBox Story"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-muted/20 hidden lg:block" />

              {/* Floating label on image */}
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="inline-flex items-center gap-3 bg-brand-gold px-5 py-3 rounded-2xl"
                  style={{ boxShadow: "0 8px 32px rgba(232,160,69,0.5)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-brand-ink animate-pulse" />
                  <span className="font-dm font-bold text-brand-ink text-sm tracking-wide">
                    25+ Years Shaping Digital Success
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20 bg-white"
            >
              {/* Eyebrow */}
              <span className="font-dm text-brand-gold text-xs uppercase tracking-[0.22em] font-bold mb-4">
                Founder / Owner
              </span>

              {/* Name */}
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep leading-tight">
                Shailesh
                <span className="block text-brand-gold italic">Mehta</span>
              </h2>

              <p className="font-dm text-gray-400 text-sm mt-2 mb-6 uppercase tracking-widest">
                Founder of BizBox Story
              </p>

              <div className="w-14 h-1 bg-brand-gold rounded-full mb-8" />

              {/* Bio paragraphs */}
              <div className="space-y-4 font-dm text-gray-600 text-base leading-relaxed">
                <p>
                  I&apos;m Shailesh Mehta, the founder of BizBox Story, and I&apos;m passionate
                  about helping businesses thrive in the digital age. With over{" "}
                  <strong className="text-brand-ink">25+ years of experience</strong> in
                  digital marketing, I&apos;ve honed my skills in crafting strategies that
                  drive results.
                </p>
                <p>
                  My journey began with a deep-seated curiosity for how digital platforms
                  could transform businesses — leading me to build a career focused on
                  innovation and growth. From mastering SEO and PPC to leveraging social
                  media and content marketing, I&apos;ve navigated every shift in this industry.
                </p>
                <p>
                  My commitment to staying ahead of trends and technologies ensures that
                  BizBox Story delivers cutting-edge solutions tailored to each client&apos;s
                  unique needs.{" "}
                  <em className="text-brand-ink font-medium">
                    Let&apos;s collaborate to bring your vision to life in the digital world.
                  </em>
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["SEO & PPC", "Social Media", "Content Marketing", "Google Ads", "Brand Strategy"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-dm text-xs font-semibold text-brand-blue-deep border border-brand-border bg-brand-muted px-4 py-1.5 rounded-full hover:border-brand-gold/40 hover:text-brand-gold transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Mission quote */}
              <div className="mt-10 p-5 rounded-2xl border-l-4 border-brand-gold bg-brand-gold/5">
                <p className="font-fraunces text-brand-blue-deep italic text-lg leading-snug">
                  &ldquo;Our mission is to drive your business forward with innovative digital
                  marketing strategies tailored to your unique needs.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS COUNTER ─────────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              By the Numbers
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-2">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-brand-muted rounded-3xl p-8 text-center border border-brand-border hover:border-brand-gold/40 transition-all duration-500 overflow-hidden"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="text-brand-gold text-3xl flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="font-fraunces text-5xl sm:text-6xl font-bold text-brand-blue-deep">
                    {statsInView ? (
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="font-dm text-sm text-gray-500 mt-3 uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section ref={testimonialsRef} className="py-20 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Client Love
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-2">
              What Our Clients Think About Us
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-3xl p-8 border border-brand-border hover:border-brand-gold/30 transition-all duration-500 flex flex-col"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <FiStar
                      key={s}
                      className="text-brand-gold fill-current"
                      style={{ fill: "#e8a045" }}
                    />
                  ))}
                </div>

                {/* Quote mark */}
                <div className="font-fraunces text-6xl text-brand-gold/20 leading-none -mb-4 select-none">
                  &ldquo;
                </div>

                <p className="font-dm text-gray-600 text-base leading-relaxed italic flex-1 mt-2">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-7 pt-6 border-t border-brand-border flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-dm font-bold text-brand-ink text-sm flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #e8a045 0%, #f5c878 100%)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-dm font-semibold text-brand-ink text-sm">
                      {t.name}
                    </div>
                    <div className="font-dm text-gray-400 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Ready to Grow?
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Our Mission: Drive Your Business{" "}
              <span className="text-brand-gold italic">Forward</span>
            </h2>
            <p className="font-dm text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              With innovative digital marketing strategies tailored to your unique needs,
              we&apos;re here to collaborate and bring your vision to life in the digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="font-dm font-semibold px-9 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-base"
                style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.4)" }}
              >
                Book a Free Strategy Call <FiArrowRight />
              </Link>
              <Link
                href="/services"
                className="font-dm font-medium px-9 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-base"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
