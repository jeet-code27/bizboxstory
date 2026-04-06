"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiSearch,
  FiMapPin,
  FiTrendingUp,
  FiLink,
  FiSmartphone,
  FiBarChart2,
  FiCheckCircle,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiStar,
  FiUsers,
  FiAward,
  FiZap,
  FiShield,
  FiTarget,
} from "react-icons/fi";

/* ── Animation variants ─────────────────────────────────────────── */
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

/* ── Section heading helper ─────────────────────────────────────── */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-14">
      <span
        className={`font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-fraunces text-4xl sm:text-5xl font-bold mt-3 leading-tight ${
          light ? "text-white" : "text-brand-blue-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 font-dm text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/65" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Why Choose Us data ─────────────────────────────────────────── */
const whyUs = [
  {
    icon: <FiAward className="w-6 h-6" />,
    stat: "23+",
    label: "Dispensaries Managed in USA",
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    stat: "45 Days",
    label: "Average Time to First-Page Rankings",
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    stat: "24×7",
    label: "Support & Query Resolution",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    stat: "100%",
    label: "Custom Strategy Per Client",
  },
];

/* ── Strategy pillars ─────────────────────────────────────────────*/
const strategies = [
  {
    icon: <FiSearch className="w-7 h-7" />,
    title: "Keyword Research",
    desc: "We identify high-impact and long-tail keywords using Google Keyword Planner, SEMrush, and Ahrefs to find the exact terms your buyers use.",
    points: [
      "Best CBD products",
      "Buy CBD oil online",
      "CBD for anxiety",
      "Best CBD oil for pain relief",
      "Where to buy CBD gummies near me",
    ],
  },
  {
    icon: <FiZap className="w-7 h-7" />,
    title: "On-Page Optimisation",
    desc: "Every page is optimised for SERP domination — title tags, meta descriptions, header hierarchy, and keyword-rich content that converts.",
    points: [
      "Primary keyword in title (55–60 chars)",
      "Meta descriptions within 150–160 chars",
      "H1 → H2 → H3 structure with related terms",
      "Internal & external high-quality links",
      "Zero keyword stuffing — natural density",
    ],
  },
  {
    icon: <FiLink className="w-7 h-7" />,
    title: "Off-Page & Backlinks",
    desc: "We build authority signals that tell Google your dispensary is the real deal — through guest posts, influencer partnerships, and PR coverage.",
    points: [
      "Guest posts on industry-related blogs",
      "Collaborate with CBD influencers & experts",
      "Social media syndication & forums",
      "High-DA directory submissions",
      "Brand mentions & digital PR",
    ],
  },
  {
    icon: <FiMapPin className="w-7 h-7" />,
    title: "Local SEO & GBP",
    desc: "For dispensaries with physical locations, local dominance is everything. We fully optimise your Google Business Profile and local citations.",
    points: [
      "Complete & accurate GBP profile setup",
      "High-quality product & location photos",
      "Review generation strategy",
      "Consistent NAP across Yelp, Yellow Pages",
      "Geo-fencing campaigns for walk-ins",
    ],
  },
  {
    icon: <FiSmartphone className="w-7 h-7" />,
    title: "Technical SEO",
    desc: "Site speed, mobile performance, and clean URL structures are the backbone of sustainable rankings. We fix the invisible barriers to your traffic.",
    points: [
      "Core Web Vitals optimisation",
      "Mobile-first responsive design",
      "Image compression & CDN setup",
      "SEO-friendly URL architecture",
      "Schema markup & structured data",
    ],
  },
  {
    icon: <FiBarChart2 className="w-7 h-7" />,
    title: "Monitoring & Analytics",
    desc: "SEO is a live organism. We track every KPI weekly and adjust your strategy based on real data — not gut feel.",
    points: [
      "Google Analytics & Search Console",
      "Organic traffic & bounce rate tracking",
      "Keyword rank monitoring weekly",
      "Conversion rate optimisation",
      "Monthly transparent reporting",
    ],
  },
];

/* ── Case study results ─────────────────────────────────────────── */
const caseStudies = [
  {
    client: "ZAZACITY",
    location: "Washington, DC",
    image: "/images/cbd/zazacity-result-1.jpg",
    results: ["#1 on Leafly for DC dispensaries", "+340% organic traffic in 60 days", "3× increase in walk-in foot traffic"],
    tag: "Dispensary SEO",
  },
  {
    client: "DC Leafly",
    location: "Washington, DC",
    image: "/images/cbd/dc-leafly-result.jpg",
    results: ["Top 3 for 18 high-intent keywords", "+280% Google Business clicks", "45-day ranking achievement"],
    tag: "Local SEO + GBP",
  },
  {
    client: "Canna Connect DC",
    location: "Washington, DC",
    image: "/images/cbd/canna-connect-result.jpg",
    results: ["Full page-1 domination for 'DC weed'", "+190% revenue from organic channel", "4.9★ GMB rating after review campaign"],
    tag: "Full SEO Strategy",
  },
];

/* ── FAQ data ──────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What is CBD SEO, and why is it important?",
    a: "CBD SEO involves optimising your dispensary website to rank higher in search engine results, driving more organic traffic and increasing visibility. It's critical because it helps your site stand out in a fiercely competitive market — and unlike paid ads, organic rankings keep generating traffic 24×7.",
  },
  {
    q: "How can I find the best keywords for my CBD website?",
    a: "We use tools like Google Keyword Planner, SEMrush, and Ahrefs to find high-impact and long-tail keywords relevant to your products, location, and buyer intent. We also analyse what your top competitors are ranking for.",
  },
  {
    q: "What are effective off-page SEO strategies for CBD websites?",
    a: "Building high-quality backlinks through guest posting, engaging with CBD-focused social media communities, collaborating with influencers, and earning mentions in cannabis industry publications are the most effective off-page strategies.",
  },
  {
    q: "How do I optimise my CBD website for mobile users?",
    a: "We ensure your site passes Core Web Vitals, uses a fully responsive design, and loads under 2 seconds on mobile. Tools like Google PageSpeed Insights guide our optimisation roadmap.",
  },
  {
    q: "Why should I choose BizBox Story for CBD SEO?",
    a: "We've managed SEO for over 23 dispensaries across the USA. We understand the target audience, the competitive dynamics of local cannabis markets, the products that convert, and how to run effective CRM to bring customers back. Our strategies get clients on Page 1 in under 45 days.",
  },
  {
    q: "How quickly can I expect to see SEO results?",
    a: "Our local area strategy typically delivers first-page rankings within 45 days for targeted keywords. Broader national organic traffic growth is usually measurable within 60–90 days. We provide weekly rank tracking so you always know where you stand.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function CbdSeoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const strategiesRef = useRef(null);
  const casesRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const strategiesInView = useInView(strategiesRef, { once: true, margin: "-80px" });
  const casesInView = useInView(casesRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── SEO JSON-LD ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────*/}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1228 0%, #0f1b3d 45%, #1a2f6b 100%)",
        }}
      >
        {/* Particle dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-gold/20"
            style={{
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              top: `${8 + ((i * 37) % 82)}%`,
              left: `${3 + ((i * 19) % 94)}%`,
              animation: `float-particle ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-emerald-400/8 rounded-full blur-[120px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold mb-5 px-5 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
              <FiMapPin className="w-4 h-4" /> CBD Dispensary SEO Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-fraunces text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.07] mt-2"
          >
            CBD Dispensaries{" "}
            <span className="italic text-brand-gold">SEO Strategies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 font-dm text-lg sm:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
          >
            Increase organic traffic to your CBD website through precision Local SEO,
            Google Business Profile optimisation, authoritative backlinks, and
            geo-fencing — strategies proven across 23+ US dispensaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="font-dm font-semibold px-9 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-base"
              style={{ boxShadow: "0 14px 40px rgba(232,160,69,0.4)" }}
            >
              Get Your Free CBD SEO Audit <FiArrowRight />
            </Link>
            <Link
              href="#strategies"
              className="font-dm font-medium px-9 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-base"
            >
              Explore Strategies ↓
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {whyUs.map((w, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 backdrop-blur-sm hover:bg-white/8 transition-colors"
              >
                <div className="text-brand-gold flex justify-center mb-2">{w.icon}</div>
                <div className="font-fraunces text-2xl font-bold text-white">{w.stat}</div>
                <div className="font-dm text-xs text-white/50 mt-1 leading-snug">{w.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

      
      </section>

      {/* ── INTRO / WHAT & WHY ─────────────────────────────────── */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Understanding CBD SEO
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                What Is CBD SEO &{" "}
                <span className="text-brand-gold italic">Why Does It Matter?</span>
              </h2>
              <div className="w-14 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />
              <div className="space-y-5 font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-brand-ink">CBD SEO</strong> is the practice of
                  optimising your dispensary or CBD product website to rank higher in
                  search engine results — covering keyword research, on-page content,
                  local area presence, and link building.
                </p>
                <p>
                  With the CBD market growing fiercely competitive, a well-executed SEO
                  strategy helps your site stand out, earn trust with potential customers,
                  and drive consistent organic traffic that converts into sales.
                </p>
                <p>
                  Local e-commerce is the key battleground. Winning in your city or
                  neighbourhood requires a pinpoint, hyper-local strategy — exactly what
                  we&apos;ve perfected across 23+ US dispensaries.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Managed over 23 dispensaries in the USA",
                  "Clear understanding of target audience & market",
                  "Local area strategies ranking sites in under 45 days",
                  "E-commerce websites built for quick buying decisions",
                  "24×7 support for all queries and concerns",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-base text-gray-700">
                    <FiCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 font-dm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group text-base"
              >
                Start Your CBD SEO Journey
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-brand-muted border border-brand-border">
                <Image
                  src="/images/cbd/cbd-seo-hero.jpg"
                  alt="CBD SEO Strategy — BizBox Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Floating badge */}
                <div
                  className="absolute bottom-6 left-6 bg-brand-gold px-5 py-3 rounded-2xl flex items-center gap-3"
                  style={{ boxShadow: "0 8px 32px rgba(232,160,69,0.5)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-brand-ink animate-pulse" />
                  <span className="font-dm font-bold text-brand-ink text-sm">
                    23+ US Dispensaries Ranked
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6 STRATEGY PILLARS ────────────────────────────────── */}
      <section
        id="strategies"
        ref={strategiesRef}
        className="py-24 bg-brand-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={strategiesInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="Our Proven Approach"
              title={
                <>
                  6 Pillars of a{" "}
                  <span className="text-brand-gold italic">Winning CBD SEO</span> Strategy
                </>
              }
              subtitle="A comprehensive, multi-channel approach tailored to the unique dynamics of the CBD and cannabis dispensary market."
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={strategiesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {strategies.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-3xl p-8 border border-brand-border hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-all duration-300">
                  {s.icon}
                </div>

                <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">
                  {s.title}
                </h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>

                <ul className="space-y-2">
                  {s.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 font-dm text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── KEYWORD RESEARCH DEEP DIVE ───────────────────────────*/}
      <section className="py-24 bg-brand-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-brand-muted border border-brand-border">
                <Image
                  src="/images/cbd/keyword-research-dashboard.jpg"
                  alt="CBD Keyword Research Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating keyword chips */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-brand-border rounded-2xl p-4 space-y-2"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
              >
                {["CBD near me ↑", "buy CBD oil ↑", "CBD dispensary DC ↑"].map((kw, i) => (
                  <div key={i} className="flex items-center gap-2 font-dm text-xs font-semibold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {kw}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Keyword Research
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                Finding Keywords That{" "}
                <span className="text-brand-gold italic">Actually Convert</span>
              </h2>
              <div className="w-14 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />

              <div className="space-y-8">
                <div className="p-6 bg-brand-muted rounded-2xl border border-brand-border">
                  <h4 className="font-dm font-bold text-brand-blue-deep mb-3 flex items-center gap-2">
                    <FiSearch className="text-brand-gold" /> High-Impact Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Best CBD products", "Buy CBD oil online", "CBD benefits", "CBD for anxiety", "Organic CBD products"].map((kw, i) => (
                      <span key={i} className="font-dm text-xs font-semibold text-brand-blue-deep bg-white border border-brand-border px-3 py-1.5 rounded-full hover:border-brand-gold/40 transition-colors">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-brand-muted rounded-2xl border border-brand-border">
                  <h4 className="font-dm font-bold text-brand-blue-deep mb-3 flex items-center gap-2">
                    <FiTarget className="text-brand-gold" /> Long-Tail Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Best CBD oil for pain relief", "Where to buy CBD gummies near me", "How to use CBD tinctures", "Benefits of CBD for sleep"].map((kw, i) => (
                      <span key={i} className="font-dm text-xs font-semibold text-brand-blue-deep bg-white border border-brand-border px-3 py-1.5 rounded-full hover:border-brand-gold/40 transition-colors">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-dm text-gray-500 text-base leading-relaxed">
                  Long-tail keywords have lower competition and drive highly targeted traffic.
                  We use <strong className="text-brand-ink">Google Keyword Planner, SEMrush &amp; Ahrefs</strong> to
                  build a keyword map specific to your dispensary&apos;s products, location, and audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── URL STRUCTURE ─────────────────────────────────────── */}
      <section className="py-16 bg-brand-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                  Technical SEO
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep mt-3 leading-tight">
                  Clean URL Structure
                </h2>
                <div className="w-12 h-1 bg-brand-gold mt-5 mb-6 rounded-full" />
                <p className="font-dm text-gray-500 text-base leading-relaxed">
                  SEO-friendly URLs with your primary keyword signal relevance to search engines
                  and build click-through confidence with users.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <FiCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                    <div>
                      <div className="font-dm text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-0.5">SEO-Friendly ✓</div>
                      <code className="font-mono text-sm text-emerald-700">example.com/buy-cbd-oil-online</code>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <FiMinus className="text-red-400 text-lg flex-shrink-0" />
                    <div>
                      <div className="font-dm text-xs text-red-500 font-semibold uppercase tracking-wider mb-0.5">Not SEO-Friendly ✗</div>
                      <code className="font-mono text-sm text-red-600">example.com/category/id=12345</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video bg-brand-muted border border-brand-border">
                <Image
                  src="/images/cbd/url-structure.jpg"
                  alt="SEO-friendly URL structure diagram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────── */}
      <section
        ref={casesRef}
        className="py-24 bg-brand-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="Real Client Results"
              title={
                <>
                  Proven Results for{" "}
                  <span className="text-brand-gold italic">US Dispensaries</span>
                </>
              }
              subtitle="We've helped 23+ dispensaries dominate their local markets with data-driven SEO strategies."
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-brand-muted rounded-3xl overflow-hidden border border-brand-border hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-1"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-white">
                  <Image
                    src={cs.image}
                    alt={`${cs.client} SEO results`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-dm text-xs font-bold text-brand-ink bg-brand-gold px-3 py-1 rounded-full">
                      {cs.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep">{cs.client}</h3>
                    <FiMapPin className="text-brand-gold text-lg" />
                  </div>
                  <p className="font-dm text-xs text-gray-400 mb-5 uppercase tracking-wider">{cs.location}</p>

                  <ul className="space-y-3">
                    {cs.results.map((r, j) => (
                      <li key={j} className="flex items-start gap-2.5 font-dm text-sm text-gray-600">
                        <FiCheckCircle className="text-brand-gold text-base mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LOCAL SEO + SOCIAL MEDIA SIDE BY SIDE ──────────────*/}
      <section className="py-24 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Local Dominance"
              title={
                <>
                  Win Your{" "}
                  <span className="text-brand-gold italic">Local Market</span>
                </>
              }
              subtitle="Local SEO and a fully optimised Google Business Profile are the fastest paths to foot traffic and in-store conversions."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google My Business */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                <FiMapPin className="w-6 h-6" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3">
                Google My Business Optimisation
              </h3>
              <p className="font-dm text-gray-500 text-sm leading-relaxed mb-6">
                For CBD businesses with physical locations, an optimised GBP profile is
                non-negotiable. We ensure your profile is complete, compelling, and
                continuously updated.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete business name, address, phone & website",
                  "High-quality photos of business & products",
                  "Review generation & response strategy",
                  "Regular posts and special offer updates",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 font-dm text-sm text-gray-600">
                    <FiCheckCircle className="text-brand-gold text-base mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-brand-muted border border-brand-border">
                <Image
                  src="/images/cbd/gmb-optimisation.jpg"
                  alt="Google My Business optimisation for CBD dispensary"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Social Media + Local Citations */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border border-brand-border"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-5">
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">
                  Social Media Marketing
                </h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed mb-4">
                  Social signals amplify your SEO. We help you create shareable content on
                  Facebook, Instagram, and X to engage your community and drive traffic.
                </p>
                <ul className="space-y-2">
                  {["Shareable content that resonates", "Relevant hashtags for broader reach", "Follower engagement & community building"].map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 font-dm text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-brand-border"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-5">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">
                  Local Citations & Directory Listings
                </h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed mb-4">
                  Consistent NAP (Name, Address, Phone) across Yelp, Yellow Pages, and
                  industry-specific directories builds local authority and trust.
                </p>
                <ul className="space-y-2">
                  {["Accuracy & consistency across all listings", "Prompt update of outdated information", "Submission to relevant local directories"].map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 font-dm text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ───────────────────────────────────────── */}
      <section
        ref={processRef}
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1228 0%, #0f1b3d 50%, #1a2f6b 100%)",
        }}
      >
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/6 rounded-full blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="How We Work"
              title={
                <>
                  Our{" "}
                  <span className="text-brand-gold italic">4-Step Process</span>{" "}
                  to CBD SEO Success
                </>
              }
              light
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Discovery & Audit", desc: "We analyse your current site, competitors, and local market to identify quick wins and long-term opportunities." },
              { step: "02", title: "Strategy & Keywords", desc: "We build a custom keyword map and full SEO strategy tailored to your dispensary's location, products, and audience." },
              { step: "03", title: "Execution", desc: "On-page optimisation, content creation, GBP setup, backlink building, and technical fixes — all done for you." },
              { step: "04", title: "Monitor & Scale", desc: "Weekly rank tracking, monthly reports, and continuous optimisation to ensure your rankings keep climbing." },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-colors group"
              >
                <div className="absolute top-6 right-8 font-fraunces text-7xl font-bold text-white/5 leading-none select-none group-hover:text-white/8 transition-colors">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center font-dm font-bold text-brand-gold text-sm mb-6">
                  {step.step}
                </div>
                <h3 className="font-fraunces text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-dm text-white/55 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-brand-muted border border-brand-border">
                <Image
                  src="/images/cbd/seo-analytics.jpg"
                  alt="CBD SEO Analytics Results"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Why BizBox Story
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                The Partner Your{" "}
                <span className="text-brand-gold italic">CBD Brand Deserves</span>
              </h2>
              <div className="w-14 h-1 bg-brand-gold mt-6 mb-6 rounded-full" />
              <p className="font-dm text-gray-600 text-base leading-relaxed mb-8">
                By following our proven strategies, you can enhance your CBD website&apos;s SEO
                performance and attract more organic traffic. Remember — SEO is an ongoing
                process. With the right partner, you can achieve long-term success and
                establish your brand as a leader in the CBD market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FiAward />, title: "23+ Dispensaries", desc: "Successfully ranked in the USA" },
                  { icon: <FiZap />, title: "45-Day Rankings", desc: "First-page results, fast" },
                  { icon: <FiStar />, title: "Full-Spectrum", desc: "Local, technical & content SEO" },
                  { icon: <FiUsers />, title: "24×7 Support", desc: "Always here for your queries" },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-brand-muted rounded-2xl border border-brand-border hover:border-brand-gold/30 transition-colors group">
                    <div className="text-brand-gold text-xl mb-2 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <div className="font-dm font-bold text-brand-blue-deep text-sm">{item.title}</div>
                    <div className="font-dm text-xs text-gray-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-dm font-semibold px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.35)" }}
              >
                Partner with BizBox Story <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section ref={faqRef} className="py-24 bg-brand-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="Common Questions"
              title={
                <>
                  CBD SEO{" "}
                  <span className="text-brand-gold italic">FAQs</span>
                </>
              }
              subtitle="Everything you need to know about ranking your CBD dispensary on Google."
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-brand-border overflow-hidden"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <span className="font-dm font-semibold text-brand-blue-deep text-base pr-4 group-hover:text-brand-gold transition-colors">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-gold transition-all duration-300 ${openFaq === i ? "bg-brand-gold text-brand-ink border-brand-gold" : ""}`}>
                    {openFaq === i ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-content-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 font-dm text-gray-500 text-sm leading-relaxed border-t border-brand-border pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1228 0%, #0f1b3d 50%, #1a2f6b 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/8 rounded-full blur-[160px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold">
              Ready to Dominate?
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Boost Your CBD Website&apos;s{" "}
              <span className="italic text-brand-gold">Organic Traffic</span>
            </h2>
            <p className="mt-6 font-dm text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Partner with BizBox Story — the agency that&apos;s ranked 23+ US dispensaries
              and understands the CBD market inside out.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="font-dm font-semibold px-10 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-base"
                style={{ boxShadow: "0 14px 50px rgba(232,160,69,0.45)" }}
              >
                Get Your Free CBD SEO Audit <FiArrowRight />
              </Link>
              <Link
                href="/about"
                className="font-dm font-medium px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-base"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
