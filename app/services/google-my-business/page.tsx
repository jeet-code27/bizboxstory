"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiSettings,
  FiSearch,
  FiUsers,
  FiActivity,
  FiMapPin,
  FiRefreshCw,
  FiTool,
  FiTrendingUp,
  FiMessageSquare,
  FiMonitor,
  FiPenTool,
  FiCheckCircle,
  FiPlus,
  FiMinus,
  FiArrowRight,
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

/* ── Value Props ─────────────────────────────────────────── */
const valueProps = [
  { icon: <FiSettings className="w-6 h-6" />, label: "Setup and Optimization" },
  { icon: <FiTrendingUp className="w-6 h-6" />, label: "SEO Strategy Integration" },
  { icon: <FiUsers className="w-6 h-6" />, label: "Customer Engagement" },
  { icon: <FiActivity className="w-6 h-6" />, label: "Performance Monitoring" },
  { icon: <FiMapPin className="w-6 h-6" />, label: "Localized Content Creation" },
  { icon: <FiRefreshCw className="w-6 h-6" />, label: "Regular Updates" },
];

/* ── Services data ─────────────────────────────────────────────*/
const servicesIncluded = [
  {
    icon: <FiTool className="w-7 h-7" />,
    title: "1. GMB SETUP & OPTIMIZATION",
    desc: "We set up and optimize your GMB profile to ensure it reflects accurate business information, enhances local SEO, and attracts more customers. From setting up your profile to optimizing categories, photos, and business hours, we ensure your GMB listing stands out.",
  },
  {
    icon: <FiSearch className="w-7 h-7" />,
    title: "2. SEO STRATEGY INTEGRATION",
    desc: "We integrate robust local SEO strategies into your GMB profile to improve your rankings in local search results. By optimizing keywords, citations, and customer reviews, we help you attract more local customers searching for your products or services.",
  },
  {
    icon: <FiMessageSquare className="w-7 h-7" />,
    title: "3. CUSTOMER ENGAGEMENT",
    desc: "We manage customer reviews, respond to inquiries, and engage with your audience on your behalf. By maintaining a positive online reputation and fostering customer trust, we enhance your brand's credibility and encourage customer loyalty.",
  },
  {
    icon: <FiMonitor className="w-7 h-7" />,
    title: "4. PERFORMANCE MONITORING",
    desc: "We monitor the performance of your GMB listing, track key metrics such as views and clicks, and provide actionable insights. Our analytics help you understand customer behavior and optimize your GMB strategy for continuous improvement.",
  },
  {
    icon: <FiPenTool className="w-7 h-7" />,
    title: "5. LOCAL CONTENT CREATION",
    desc: "We develop localized content, such as posts and updates, to keep your audience informed and engaged. By highlighting promotions, events, and news, we drive customer engagement and increase foot traffic to your business.",
  },
  {
    icon: <FiCheckCircle className="w-7 h-7" />,
    title: "6. REGULAR UPDATES & MAINTENANCE",
    desc: "We provide regular updates to your GMB profile to reflect any changes in business information, ensuring accuracy across all platforms. Our maintenance services keep your profile optimized and up-to-date with the latest features and best practices.",
  },
];

/* ── FAQ data generated as Local SEO Professional ──────────────── */
const faqs = [
  {
    q: "Why is Google My Business important for my business?",
    a: "Google My Business (GMB) is the ultimate frontline interface for your local online presence. It determines whether you show up on Google Maps and the Local 3-Pack on search pages. Having an optimized profile drastically increases local visibility, builds instant trust through reviews, and provides customers with direct buttons to call you, visit your website, or get directions.",
  },
  {
    q: "How can GMB help improve my local SEO rankings?",
    a: "Google's local algorithm heavily prioritizes proximity, relevance, and prominence. By maintaining a fully optimized and engaging GMB profile—complete with keyword-rich descriptions, consistent NAP (Name, Address, Phone Number) data, regular Google Posts, and continuous review management—you send powerful relevance signals to Google, earning higher placements in local search results.",
  },
  {
    q: "What types of businesses can benefit from GMB management services?",
    a: "Any business that interacts with customers locally benefits exponentially. This includes brick-and-mortar storefronts (restaurants, retail, clinics, salons) as well as Service-Area Businesses (plumbers, electricians, landscapers, local agencies) that serve customers at their specific locations.",
  },
  {
    q: "How do you handle customer reviews on GMB?",
    a: "We systematically monitor and respond to all reviews. We craft personalized, appreciative responses for positive feedback to foster loyalty. For negative reviews, we provide prompt, professional, and de-escalating responses that demonstrate exceptional customer care, helping mitigate damage to your brand reputation while potentially converting a dissatisfied customer into a retained one.",
  },
  {
    q: "What kind of results can I expect from your GMB services?",
    a: "You can expect a measurable surge in local engagement. Specifically, you’ll see an increase in Map views, direct phone calls originated from the listing, requests for driving directions, and localized website traffic. Ultimately, this leads to higher foot traffic and more qualified local leads.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function GMBPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const whatRef = useRef(null);
  const internalRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const whatInView = useInView(whatRef, { once: true, margin: "-80px" });
  const internalInView = useInView(internalRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <>
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
              <FiMapPin className="w-4 h-4" /> Local SEO Experts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-fraunces text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.07] mt-2"
          >
            Best <span className="italic text-brand-gold">Google My Business</span><br/>Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 font-dm text-lg sm:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
          >
            At BizBox Story, the full form GMB is Google My Business. We offer GMB management services to boost your online presence and drive local business growth effectively.
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
              style={{ boxShadow: "0 14px 40px rgba(255,182,5,0.4)" }}
            >
              Get Found Locally <FiArrowRight />
            </Link>
            <Link
              href="#what-we-do"
              className="font-dm font-medium px-9 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-base"
            >
              What&apos;s Included ↓
            </Link>
          </motion.div>

          {/* Value Props Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {valueProps.map((w, i) => (
               <div
               key={i}
               className="bg-white/5 border border-white/10 rounded-2xl px-3 py-4 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
             >
               <div className="text-brand-gold mb-2">{w.icon}</div>
               <div className="font-dm text-xs text-white/80 font-medium leading-snug">{w.label}</div>
             </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED (6 PILLARS) ────────────────────────────────── */}
      <section
        id="what-we-do"
        ref={whatRef}
        className="py-24 bg-brand-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={whatInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="What's Included?"
              title={
                <>
                  Boost your <span className="text-brand-gold italic">online presence</span>, <br />
                  and drive local growth.
                </>
              }
              subtitle="From meticulous setup to ongoing engagement and monitoring, our complete GMB Management solution handles everything."
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={whatInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesIncluded.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-3xl p-8 border border-brand-border hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1 flex flex-col relative overflow-hidden"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(255,182,5,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-all duration-300 relative z-10">
                  {s.icon}
                </div>

                <h3 className="font-fraunces text-lg font-bold text-brand-blue-deep mb-3 relative z-10">
                  {s.title}
                </h3>
                <p className="font-dm text-gray-500 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                  {s.desc}
                </p>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTERNAL LINKING DEEP DIVE ───────────────────────────*/}
      <section 
        ref={internalRef}
        className="py-24 bg-brand-surface border-y border-brand-border overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content & Links */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Holistic Approach
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                Dominate Your <span className="text-brand-gold italic">Local Market</span>
              </h2>
              <div className="w-14 h-1 bg-brand-gold mt-6 mb-8 rounded-full" />

              <div className="space-y-6 font-dm text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Optimizing your Google My Business profile is just one aspect of a formidable local search strategy. When customers see your listing and visit your website, providing an excellent impression is crucial to finalizing the sale.
                </p>
                <p>
                  By accelerating your GMB strategy with robust <strong className="text-brand-ink">National SEO Services</strong> and professional <strong className="text-brand-ink">Brand Consulting</strong>, you build an unshakeable digital footprint and maximum consumer trust.
                </p>
                <p>
                  Explore our broader digital marketing solutions to build a cohesive ecosystem around your newly optimized local presence.
                </p>
              </div>

              <div className="mt-10 p-6 bg-brand-muted border border-brand-border rounded-2xl">
                <h4 className="font-dm font-bold text-brand-blue-deep mb-4">Explore Our Related Services</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services/seo-services" className="flex items-center justify-between px-4 py-3 bg-white border border-brand-border rounded-xl hover:border-brand-gold transition-colors group">
                    <span className="font-dm text-sm font-semibold text-brand-ink">SEO Services</span>
                    <FiArrowRight className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/services/brand-presence" className="flex items-center justify-between px-4 py-3 bg-white border border-brand-border rounded-xl hover:border-brand-gold transition-colors group">
                    <span className="font-dm text-sm font-semibold text-brand-ink">Brand Consulting</span>
                    <FiArrowRight className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-brand-border shadow-md">
                <Image
                  src="/images/services/gmb.webp"
                  alt="Google My Business Local Maps and Engagement"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-muted/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────*/}
      <section
        ref={faqRef}
        className="py-24 bg-brand-muted"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            <SectionHeading
              eyebrow="Google My Business Services"
              title={<>Frequently Asked <span className="text-brand-gold italic">Questions</span></>}
              subtitle="Are you interested in improving your GMB strategy? Please get in touch with us today to set up a consultation with our experts."
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white border border-brand-border rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-fraunces text-lg sm:text-xl font-bold text-brand-blue-deep pr-8">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold transition-transform duration-300">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 font-dm text-gray-600 leading-relaxed text-base">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="mt-14 text-center"
            variants={fadeUp}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            <Link
              href="/contact"
              className="font-dm font-semibold px-8 py-4 bg-brand-blue-deep text-white rounded-full hover:bg-brand-ink transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
              style={{ boxShadow: "0 10px 30px rgba(15,27,61,0.2)" }}
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
