"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheckCircle, FiTrendingUp, FiTarget, 
  FiGlobe, FiClock, FiSearch, FiLayout, FiPieChart, 
  FiHeart, FiVideo, FiMessageSquare, FiStar, FiCalendar, FiSmartphone 
} from "react-icons/fi";
import BottomCTA from "@/components/BottomCTA";

// Using a custom hook to avoid hydration mismatch with animations if needed
// But client components work fine with framer motion directly.

export default function DoctorsPage() {
  const faqs = [
    { q: "What is digital marketing for doctors, and why does it matter?", a: "Digital marketing for doctors involves using online tools like social media, websites, blogs, and ads to reach new patients, build trust, and grow your practice. In today’s digital-first world, having a strong digital presence and marketing strategy is no longer optional — it’s essential to stay visible, competitive, and connected with patients." },
    { q: "How can I create a website for my medical practice?", a: "You can create a website by partnering with a specialized healthcare marketing agency like DigiDoc. We design search-optimized, fast-loading, and patient-friendly websites that highlight your expertise and simplify appointment bookings." },
    { q: "Why do doctors need a website?", a: "A website acts as your digital clinic. It builds credibility, helps patients find you on Google, showcases patient testimonials, and serves as a central hub for all your online marketing efforts." },
    { q: "What are the best SEO strategies for doctors?", a: "The best SEO strategies include optimizing your Google My Business profile, creating location-based service pages, publishing medically accurate blog content, and ensuring your website is mobile-responsive and fast." },
    { q: "How can I market my medical practice online?", a: "You can market your practice through local SEO, Google Ads targeting specific medical conditions, engaging social media content (reels and educational posts), and automated patient follow-ups." },
    { q: "How can I improve my clinic’s online presence?", a: "Consistent posting on social media, gathering positive Google reviews, maintaining an updated Google My Business profile, and having a professional, active website all contribute to a stronger online presence." },
    { q: "How do I get more patients online?", a: "To get more patients online, focus on appearing in local search results (e.g., 'cardiologist near me'), running targeted Google Ads, and sharing patient success stories to build trust." },
    { q: "How do I grow my practice on Instagram?", a: "Post educational reels, behind-the-scenes clinic life, patient testimonials, and myth-busting videos. Consistency and using relevant local and medical hashtags are key." },
    { q: "Which are the best social media platforms for doctors?", a: "Instagram and Facebook are best for patient engagement and brand building, while LinkedIn is excellent for networking with other professionals and establishing thought leadership." },
    { q: "How do I use Facebook for medical marketing?", a: "Use Facebook to share clinic updates, longer educational posts, video guidance, and to run targeted Lead Generation ads aimed at your local demographic." },
    { q: "How do I market on LinkedIn as a doctor?", a: "Share case studies, insights on recent medical advancements, clinic milestones, and professional achievements to build authority among peers and corporate clients." },
    { q: "How can I create patient trust through social media?", a: "Share authentic stories, address common patient concerns transparently, highlight your qualifications, and showcase real (consented) before-and-after results or testimonials." },
    { q: "What is the best content for medical social media accounts?", a: "The best content includes quick health tips, myth vs. fact graphics, video Q&As, clinic tour videos, and patient success stories." },
    { q: "How do I generate leads for my medical practice?", a: "We use targeted Performance Marketing (Google and Facebook Ads) paired with a high-converting landing page and WhatsApp chatbot automation to capture and convert patient inquiries instantly." },
    { q: "What are the best ways to attract new patients online?", a: "Ranking high on local Google searches, having stellar online reviews, and maintaining an active, reassuring social media presence are the best ways to attract new patients." },
    { q: "How can I get more consultations through digital marketing?", a: "Implement appointment automation where a lead immediately receives an SMS and appointment link. Follow-ups increase the conversion rate of inquiries to actual consultations." },
    { q: "What’s the role of email marketing for doctors?", a: "Email marketing helps in patient retention. Sending monthly newsletters with health tips, clinic updates, or check-up reminders keeps your practice top-of-mind." },
    { q: "Should I use paid ads to grow my medical practice?", a: "Yes, paid ads (Google Ads in particular) capture high-intent patients who are actively searching for treatments or specialists in your area right now." },
    { q: "How do I use YouTube to market my practice?", a: "Create detailed videos explaining procedures, discussing symptoms and treatments, and offering general health advice. YouTube acts as the second largest search engine and builds immense authority." },
    { q: "What kind of videos should doctors create?", a: "Doctors should create short-form content (Reels/Shorts) for quick tips, and long-form content for in-depth procedure explanations or detailed patient FAQs." },
    { q: "How can I manage online reviews for my clinic?", a: "Use reputation management tools that encourage happy patients to leave Google reviews, while directing negative feedback to a private channel so you can address it internally." },
    { q: "What’s the best way to handle patient testimonials and ratings?", a: "Always ensure you have written or video consent. Share these testimonials across your website, social media, and Google My Business to leverage social proof." },
    { q: "How do I optimize Google My Business for doctors?", a: "Ensure your NAP (Name, Address, Phone number) is accurate, select the correct primary and secondary categories, upload high-quality clinic photos, and actively collect reviews." },
    { q: "How do I improve my clinic’s local search ranking?", a: "Consistent GMB optimization, local directory citations, getting more positive reviews, and having location-specific keywords on your website will improve local rankings." },
    { q: "What are the best ads for medical services?", a: "Search ads targeting high-intent keywords (e.g., 'best knee replacement surgeon near me') and social media video ads showcasing expertise and trust are highly effective." }
  ];

  const testimonials = [
    { initial: "A", name: "Dr. Anil Mehra", role: "ENT Specialist, Delhi", quote: "Before DigiDoc, I was relying only on referrals. Now I get 15–20 walk-ins every week directly from Google. Their strategy works!" },
    { initial: "S", name: "Dr. Sneha Patil", role: "Dermatologist, Mumbai", quote: "I used to think social media doesn’t work for doctors. But after DigiDoc took over my Instagram, my visibility and trust have grown significantly." },
    { initial: "R", name: "डॉ. राकेश शाह", role: "हृदय रोग विशेषज्ञ, अहमदाबाद", quote: "अब मैं ‘heart specialist near me’ जैसे keywords पर टॉप 3 में आता हूं। ये सब DigiDoc की SEO टीम की वजह से मुमकिन हुआ।" },
    { initial: "K", name: "डॉ. कविता वर्मा", role: "शिशु रोग विशेषज्ञ, लखनऊ", quote: "पहले मेरा Google My Business प्रोफाइल inactive था। अब रोज़ कॉल्स और walk-ins आ रहे हैं। DigiDoc ने local visibility आसान बना दी।" },
  ];

  // Helper animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-brand-surface selection:bg-brand-gold/30 selection:text-brand-ink overflow-hidden">
      
      {/* JSON-LD Schema */}
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

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#040814] overflow-hidden">
        {/* Animated Glow Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1e40af]/30 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="text-center lg:text-left pt-10"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-bold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,182,5,0.2)]">
                  👋 Dear Doctor
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="font-fraunces text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-6">
                Your Patients Are Online. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#f5d586] italic">
                  You Should Be Too.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="font-dm text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                You’re great at healing — but how will patients find you if they don’t know you exist online? In today’s competitive landscape, word of mouth alone is not enough to grow a successful medical practice.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="tel:+918130972200" className="group relative font-dm font-bold text-lg px-8 py-4 bg-brand-gold text-brand-ink rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,182,5,0.4)] overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">📞 Call: +91-81309 72200</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image / Premium Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/services/doctor_hero_premium.png"
                  alt="Premium doctor digital marketing"
                  fill
                  className="object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-transparent opacity-80" />
                
                {/* Floating Glass UI Element */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl flex items-center gap-4"
                >
                  <div className="w-14 h-14 bg-brand-gold text-brand-ink rounded-2xl flex items-center justify-center shadow-lg">
                    <FiTrendingUp className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-fraunces font-bold text-2xl text-white">500+</div>
                    <div className="font-dm text-sm text-brand-gold uppercase tracking-widest font-semibold mt-1">Doctors Growing</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PAIN POINTS (GLASSMORPHISM SECTION) ─────────────────────────── */}
      <section className="py-24 bg-brand-muted relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="font-fraunces text-4xl lg:text-5xl font-bold text-brand-blue-deep mb-6 leading-tight">
                Is your online presence as strong as your clinical skills?
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1.5 bg-brand-gold mb-8 rounded-full shadow-[0_0_10px_rgba(255,182,5,0.5)]" />
              <div className="space-y-6 font-dm text-gray-600 text-lg leading-relaxed">
                <motion.p variants={fadeUp}>
                  Patients today turn to Google before walking into a clinic. If you’re not showing up online, you’re losing opportunities—often without knowing it.
                </motion.p>
                <motion.p variants={fadeUp}>
                  A silent social media presence means low patient recall and weaker engagement. Inaccurate or inconsistent content can undermine the credibility you’ve worked hard to build.
                </motion.p>
                <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                  <p className="font-semibold text-brand-blue-deep">
                    You have to showcase your expertise, earn trust digitally, and be visible when patients are searching for answers. That’s where <span className="text-brand-gold text-xl mx-1 font-bold">DigiDoc</span> comes in.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border border-brand-border">
              <Image
                src="/images/services/medical_growth_dashboard.png"
                alt="Clinic Digital Growth Dashboard"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO BOX: CORE FEATURES ───────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep">
              Built for <span className="text-brand-gold italic">Medical Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Box 1 - Wide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-[#040814] rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px]" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-14 h-14 bg-brand-gold text-brand-ink flex items-center justify-center rounded-2xl mb-6 shadow-[0_0_20px_rgba(255,182,5,0.4)]">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <h4 className="font-fraunces font-bold text-3xl text-white mb-3">Proven Results</h4>
                <p className="font-dm text-white/70 text-lg max-w-md">We’ve helped 500+ doctors increase patient footfall, grow surgeries, and dominate local markets.</p>
              </div>
            </motion.div>

            {/* Box 2 - Tall */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-brand-gold rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-lg text-brand-ink"
            >
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-14 h-14 bg-white text-brand-ink flex items-center justify-center rounded-2xl mb-6 shadow-sm">
                  <FiCheckCircle className="text-2xl" />
                </div>
                <h4 className="font-fraunces font-bold text-3xl mb-3">Zero Commission</h4>
                <p className="font-dm text-brand-ink/80 text-lg">Keep 100% of your revenue. Our platform empowers you with full control over your profits.</p>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-brand-muted rounded-3xl p-8 lg:p-10 border border-brand-border hover:border-brand-gold/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 bg-white text-brand-blue-deep flex items-center justify-center rounded-xl mb-4 border border-brand-border">
                <FiSmartphone className="text-xl" />
              </div>
              <h4 className="font-fraunces font-bold text-2xl text-brand-blue-deep mb-2">Social Media</h4>
              <p className="font-dm text-gray-600">Unlimited, specialty-focused posts & reels—auto-scheduled.</p>
            </motion.div>

            {/* Box 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-gradient-to-r from-brand-blue-deep to-[#1e40af] rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-lg text-white"
            >
              <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-white flex items-center justify-center rounded-xl mb-4 border border-white/20">
                  <FiTarget className="text-xl" />
                </div>
                <h4 className="font-fraunces font-bold text-3xl mb-3">Winning Ad Campaigns</h4>
                <p className="font-dm text-white/80 text-lg max-w-lg">Smart, automated digital ad strategies across Google and Meta that capture high-intent patients in your city.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES GRID ─────────────────────────────────────────── */}
      <section className="py-24 bg-brand-surface relative">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              DigiDoc Solutions
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3">
              Everything you need to grow digitally — <span className="text-brand-gold italic">in one place.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Search-Optimized Website", desc: "Be found when patients search your name or specialty with educational and trust-building content.", icon: FiGlobe },
              { title: "Appointment Automation", desc: "Lead comes in? SMS + appointment link is auto-sent. We even send 2 follow-up reminders.", icon: FiCalendar },
              { title: "WhatsApp Chatbot", desc: "Turn inquiries into bookings instantly. 24×7 smart assistant for your clinic.", icon: FiMessageSquare },
              { title: "Google My Business", desc: "Appear on Maps, get more calls, and reviews that convert seamlessly.", icon: FiSearch },
              { title: "Reputation Management", desc: "Positive reviews go to Google. Negative ones? Filtered for your private review.", icon: FiStar },
              { title: "AI-Powered SEO & Blogs", desc: "Locally-optimized, AI-written, scientifically accurate articles that help you rank.", icon: FiLayout },
              { title: "Digital Visiting Card", desc: "Timing, WhatsApp, reviews, map, numbers – everything at your patient’s fingertips.", icon: FiSmartphone },
              { title: "Video Guidance", desc: "We help you create reels, shorts, and expert videos — confidently and professionally.", icon: FiVideo },
              { title: "Performance Marketing", desc: "Ads that bring the right patients directly to your clinic and grow your practice.", icon: FiPieChart },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-muted text-brand-gold flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                  <service.icon className="text-xl" />
                </div>
                <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">{service.title}</h3>
                <p className="font-dm text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DIGIDOC (PREMIUM DARK) ───────────────────────────────── */}
      <section className="py-24 bg-[#080c18] text-white overflow-hidden relative">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeUp} className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Why DigiDoc?
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-fraunces text-4xl sm:text-5xl font-bold text-white mt-3 mb-10 leading-tight">
                Not just marketers — we’re <span className="text-brand-gold italic">medical communicators.</span>
              </motion.h2>
              <ul className="space-y-6 font-dm text-lg text-white/80">
                {[
                  "20+ years in healthcare content & branding",
                  "Qualified medical writers & strategists",
                  "Deep understanding of patient trust psychology",
                  "Built specifically for Indian doctors, clinics, and hospitals"
                ].map((text, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <FiCheckCircle className="text-brand-gold text-2xl flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-gradient-to-b from-white/10 to-transparent p-1 rounded-[2.5rem]"
            >
              <div className="bg-[#0b1021] rounded-[2.4rem] p-10 relative overflow-hidden border border-white/5 shadow-2xl">
                <h3 className="font-fraunces text-2xl font-bold mb-8 text-brand-gold">Doctors Often Say…</h3>
                <ul className="space-y-5 font-dm italic text-white/70 mb-10 text-lg">
                  <li className="flex gap-3"><span className="text-brand-gold opacity-50">"</span>I don’t have time for social media.<span className="text-brand-gold opacity-50">"</span></li>
                  <li className="flex gap-3"><span className="text-brand-gold opacity-50">"</span>Digital doesn’t work for medical.<span className="text-brand-gold opacity-50">"</span></li>
                  <li className="flex gap-3"><span className="text-brand-gold opacity-50">"</span>I don’t want to look like I’m marketing myself.<span className="text-brand-gold opacity-50">"</span></li>
                  <li className="flex gap-3"><span className="text-brand-gold opacity-50">"</span>Patients can’t even find me on Google.<span className="text-brand-gold opacity-50">"</span></li>
                </ul>
                <div className="bg-brand-gold p-6 rounded-2xl shadow-[0_10px_30px_rgba(255,182,5,0.2)]">
                  <p className="font-dm font-bold text-brand-ink text-lg text-center">
                    We hear this all the time. DigiDoc is built to solve exactly these problems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REAL RESULTS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep">
              Real Results, <span className="text-brand-gold italic">Real Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Cancer Hospital", desc: "10 confirmed leads/month — consistent results for 4+ months", growth: "+40%" },
              { title: "Spine Surgeon", desc: "OPD up from 240 → 300/month, surgical rate up by 30%", growth: "+30%" },
              { title: "Orthopedic Surgeon", desc: "8–10 new surgeries/month in just 2 months", growth: "+8-10" },
              { title: "Dentist", desc: "Tripled OPD volume in record time", growth: "3X" },
              { title: "ENT Specialist", desc: "25–30% increase in OPD & surgeries", growth: "+30%" },
              { title: "Ophthalmologist", desc: "100+ new leads/month via Instagram & Facebook ads", growth: "100+" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-brand-muted p-8 rounded-3xl border border-brand-border hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 font-fraunces font-bold text-[80px] text-brand-gold/10 leading-none">{stat.growth}</div>
                <div className="font-fraunces font-bold text-2xl text-brand-ink mb-3 relative z-10">{stat.title}</div>
                <div className="font-dm text-brand-blue-deep/80 relative z-10">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INFINITE MARQUEE TESTIMONIALS */}
        <div className="w-full overflow-hidden bg-brand-surface py-12 border-y border-brand-border flex items-center">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className="w-[350px] sm:w-[400px] bg-white p-8 rounded-3xl border border-brand-border shadow-sm flex-shrink-0">
                <div className="text-brand-gold text-lg tracking-wider mb-4 flex gap-1">
                  <FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" />
                </div>
                <p className="font-dm text-gray-700 text-lg leading-relaxed italic mb-8 line-clamp-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold font-bold text-xl">{t.initial}</div>
                  <div>
                    <div className="font-dm font-bold text-brand-blue-deep">{t.name}</div>
                    <div className="font-dm text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-brand-muted border border-brand-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 sm:px-8 sm:py-6 focus:outline-none">
                  <span className="font-fraunces text-lg sm:text-xl font-bold text-brand-blue-deep pr-8">{faq.q}</span>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-gold group-open:rotate-180 transition-transform duration-300 shadow-sm border border-brand-border">
                    <FiArrowRight className="rotate-90 group-open:rotate-[-90deg] transition-transform" />
                  </span>
                </summary>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 font-dm text-gray-600 leading-relaxed text-base border-t border-brand-border/50 pt-4 mt-2 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-fraunces text-5xl font-bold text-brand-ink mb-6">
            Let’s Build Your Digital Presence
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-dm text-2xl text-brand-ink/80 mb-10 leading-relaxed font-bold">
            Plans Starting at ₹4,999/- Only
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-6">
            <Link href="tel:+918130972200" className="font-dm font-bold text-xl px-10 py-5 bg-brand-ink text-white rounded-full hover:bg-[#1a1f2e] transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1">
              📞 Call Now: +91-81309 72200
            </Link>
            <Link href="mailto:sales@bizboxstory.com" className="font-dm font-bold text-xl px-10 py-5 bg-white text-brand-ink rounded-full hover:bg-gray-50 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              📩 Email Us
            </Link>
          </motion.div>
        </div>
      </section>
      
      <BottomCTA />
    </div>
  );
}
