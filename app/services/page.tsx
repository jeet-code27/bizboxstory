"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import {
  MdCampaign,
  MdAdsClick,
  MdDesignServices,
  MdSearch,
  MdLocationOn,
  MdPhoneIphone,
  MdEmojiEvents,
  MdLeaderboard,
} from "react-icons/md";

/* ── Animation Variants ───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Services Data ────────────────────────────────────────────────── */
const services = [
  {
    id: "content-marketing",
    icon: <MdCampaign className="w-8 h-8" />,
    title: "Content Marketing",
    tagline: "Not just content — the right content that turns readers into customers.",
    points: [
      "SEO-friendly blog writing",
      "Social media copy",
      "Content personalization and strategy",
    ],
    image: "/images/services/content-marketing.webp",
    accent: "#e8a045",
    badge: "Most Popular",
  },
  {
    id: "google-facebook-ads",
    icon: <MdAdsClick className="w-8 h-8" />,
    title: "Google & Facebook Ads Management",
    tagline: "We run targeted ads that deliver actual results — without wasting your budget.",
    points: [
      "Audience targeting",
      "Ad creatives design",
      "Performance tracking & optimization",
    ],
    image: "/images/services/ads-management.webp",
    accent: "#3b82f6",
    badge: null,
  },
  {
    id: "graphic-website-design",
    icon: <MdDesignServices className="w-8 h-8" />,
    title: "Graphic / Website Design",
    tagline: "First impressions are lasting impressions — your website should be stunning and fast.",
    points: [
      "User-centered responsive design",
      "Brand consistency",
      "SEO-optimized pages",
    ],
    image: "/images/services/web-design.webp",
    accent: "#8b5cf6",
    badge: null,
  },
  {
    id: "seo-services",
    icon: <MdSearch className="w-8 h-8" />,
    title: "SEO Services",
    tagline: "Ranking on Google's first page isn't luck — it's strategy.",
    points: [
      "Keyword research & strategy",
      "Technical SEO",
      "High-quality backlinks",
    ],
    image: "/images/services/seo.webp",
    accent: "#10b981",
    badge: "High ROI",
  },
  {
    id: "google-my-business",
    icon: <MdLocationOn className="w-8 h-8" />,
    title: "Google My Business Optimization",
    tagline: "Let local customers find you before they find your competitors.",
    points: [
      "Profile verification & setup",
      "Optimized business listing",
      "Customer review management",
    ],
    image: "/images/services/gmb.webp",
    accent: "#ef4444",
    badge: null,
  },
  {
    id: "social-media-management",
    icon: <MdPhoneIphone className="w-8 h-8" />,
    title: "Social Media Management",
    tagline: "Instagram, Facebook — your presence should be consistent and engaging.",
    points: [
      "Social listening",
      "Analytics & insights",
      "Active audience interaction",
    ],
    image: "/images/services/social-media.webp",
    accent: "#ec4899",
    badge: null,
  },
  {
    id: "brand-presence",
    icon: <MdEmojiEvents className="w-8 h-8" />,
    title: "Brand Presence & Consulting",
    tagline: "Not just a logo — a complete brand identity.",
    points: [
      "Brand positioning",
      "Reputation management",
      "Brand identity creation",
    ],
    image: "/images/services/brand.webp",
    accent: "#f59e0b",
    badge: null,
  },
  {
    id: "lead-generation",
    icon: <MdLeaderboard className="w-8 h-8" />,
    title: "Lead Generation",
    tagline: "We don't want traffic — we want buyers.",
    points: [
      "Targeted audience identification",
      "Multi-channel strategy",
      "Strong calls-to-action",
    ],
    image: "/images/services/lead-gen.webp",
    accent: "#06b6d4",
    badge: null,
  },
];

/* ── Why Choose Us ────────────────────────────────────────────────── */
const whyUs = [
  { num: "1000+", label: "Projects Completed" },
  { num: "100+", label: "Happy Clients" },
  { num: "25+", label: "Years Experience" },
  { num: "8+", label: "Service Verticals" },
];

/* ── Image with gradient fallback ────────────────────────────────── */
function ServiceImage({
  src,
  alt,
  accent,
  badge,
  icon,
  colClass,
}: {
  src: string;
  alt: string;
  accent: string;
  badge: string | null;
  icon: React.ReactNode;
  colClass: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden min-h-[280px] lg:min-h-[380px] ${colClass}`}
      style={{
        background: errored
          ? `linear-gradient(135deg, ${accent}22 0%, ${accent}08 100%)`
          : undefined,
      }}
    >
      {/* Real image — hidden once it errors */}
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
      )}

      {/* Fallback gradient panel shown when image is missing */}
      {errored && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl"
            style={{ background: `${accent}22`, color: accent }}
          >
            {icon}
          </div>
          <span
            className="font-dm text-xs uppercase tracking-widest font-semibold opacity-40"
            style={{ color: accent }}
          >
            Image Coming Soon
          </span>
        </div>
      )}

      {/* Gradient overlay (always visible) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${accent}22 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-5 left-5">
          <span
            className="font-dm text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
            style={{ background: accent }}
          >
            {badge}
          </span>
        </div>
      )}
      {/* Icon watermark */}
      <div
        className="absolute bottom-5 right-5 opacity-15 select-none"
        style={{ color: accent }}
      >
        <div className="text-[4rem] [&>svg]:w-16 [&>svg]:h-16">{icon}</div>
      </div>
    </div>
  );
}

/* ── Service Card Component ───────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative bg-white rounded-3xl overflow-hidden border border-brand-border hover:border-brand-gold/30 transition-all duration-500"
      style={{
        boxShadow: hovered
          ? "0 30px 80px rgba(0,0,0,0.12)"
          : "0 8px 30px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:grid-flow-dense" : ""}`}
      >
        {/* Image panel */}
        <ServiceImage
          src={service.image}
          alt={service.title}
          accent={service.accent}
          badge={service.badge}
          icon={service.icon}
          colClass={!isEven ? "lg:col-start-2" : ""}
        />

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
            !isEven ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${service.accent}18`, color: service.accent }}
          >
            {service.icon}
          </div>

          {/* Title */}
          <Link
            href={`/services/${service.id}`}
            className="font-fraunces text-2xl sm:text-3xl font-bold text-brand-blue-deep leading-tight hover:text-brand-gold transition-colors"
            id={service.id}
          >
            {service.title}
          </Link>

          {/* Tagline */}
          <p className="font-dm text-sm italic text-gray-500 mt-2 mb-4 leading-relaxed">
            {service.tagline}
          </p>

          {/* Accent line */}
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ background: service.accent }}
          />



          {/* Points */}
          <ul className="space-y-2.5 mb-8">
            {service.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: service.accent }}
                  size={17}
                />
                <span className="font-dm text-sm text-gray-600">{pt}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-2 font-dm font-semibold text-sm group/link"
            style={{ color: service.accent }}
          >
            Learn More
            <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-[110px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold mb-4 px-5 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
              What We Do
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mt-4"
          >
            Our{" "}
            <span className="italic text-brand-gold">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-dm text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Taking your business forward in the digital world — that is our purpose. BizBoxStory is a full-service digital marketing agency helping your brand grow online, whether you are a small startup or an established business.
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
              Free Consultation <FiArrowRight />
            </Link>
            <a
              href="#services-list"
              className="font-dm font-medium px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="py-10 bg-brand-muted border-y border-brand-border"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUs.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep">
                  {item.num}
                </div>
                <div className="font-dm text-xs uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO BAND ────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Full-Service Agency
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep mt-3 leading-tight">
              Whether you are a{" "}
              <span className="italic text-brand-gold">startup</span> or an{" "}
              <span className="italic text-brand-gold">established business</span>
            </h2>
            <p className="font-dm text-gray-500 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We offer tailored digital marketing solutions for businesses of every size. Explore our 8 core service areas below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────────── */}
      <section
        id="services-list"
        className="py-10 pb-24 bg-brand-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/10 rounded-full blur-[160px]" />

        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${6 + (i % 4) * 4}px`,
              height: `${6 + (i % 4) * 4}px`,
              top: `${15 + ((i * 23) % 70)}%`,
              left: `${8 + ((i * 19) % 84)}%`,
              animation: `float-particle ${5 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Ready to Grow?
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              1000+ Projects Completed,{" "}
              <span className="italic text-brand-gold">Now It&apos;s Your Turn</span>
            </h2>
            <p className="font-dm text-white/65 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              1000+ projects completed, 100+ happy clients — now it&apos;s your turn.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="font-dm font-semibold px-8 py-3.5 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.4)" }}
              >
                Start Your Journey <FiArrowRight />
              </Link>
              <a
                href="tel:+919821774565"
                className="font-dm font-medium px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <FiPhone /> Call Now
              </a>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap justify-center gap-6 text-white/50 font-dm text-sm">
              <a
                href="mailto:info@bizboxstory.com"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <FiMail className="text-brand-gold" />
                info@bizboxstory.com
              </a>
              <a
                href="tel:+919821774565"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <FiPhone className="text-brand-gold" />
                +91-9821774565
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
