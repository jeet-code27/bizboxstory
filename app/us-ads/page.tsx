"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AdsHeader from "@/components/AdsHeader";
import AdsFooter from "@/components/AdsFooter";
import ClientLogos from "@/components/ClientLogos";
import USAdsCaseStudiesSlider from "@/components/USAdsCaseStudiesSlider";
import VideoSection from "@/components/VideoSection";
import MetaPixel from "@/components/MetaPixel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackMetaEvent, trackCustomMetaEvent } from "@/lib/metaPixel";
import { 
  FiCheckCircle, 
  FiTrendingUp, 
  FiTarget, 
  FiSearch, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiStar, 
  FiArrowRight, 
  FiLock,
  FiShield,
  FiAward,
  FiMonitor,
  FiEdit3,
  FiInstagram,
  FiUsers,
  FiClock,
  FiGlobe
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function USAdsPage() {
  const router = useRouter();

  // Lead Form State
  const [leadFormData, setLeadFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeded: "AI SEO Services",
    monthlyBudget: "$3,000 - $5,000",
    website: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState("");

  // Contact Form State
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");

  // Section Refs for Scroll Depth & ViewContent Tracking
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const leadFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track PageView on mount
    trackMetaEvent("PageView");

    // IntersectionObserver for tracking ViewContent when key sections are viewed
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          trackMetaEvent("ViewContent", { content_name: sectionId });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.3 });

    if (caseStudiesRef.current) observer.observe(caseStudiesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (leadFormRef.current) observer.observe(leadFormRef.current);

    return () => observer.disconnect();
  }, []);

  // Handle Lead Form Submit
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError("");
    
    if (!leadFormData.fullName || !leadFormData.email || !leadFormData.phone) {
      setLeadError("Please fill out all required fields.");
      return;
    }

    setIsSubmittingLead(true);

    try {
      // 1. Send Lead Data to Web3Forms API (Inbox Email Delivery)
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d2be3617-99b0-4a71-8da8-874ddb392790",
          subject: `⚡ New US Lead Audit Form Submission from ${leadFormData.fullName}`,
          from_name: leadFormData.fullName,
          email: leadFormData.email,
          phone: leadFormData.phone,
          website: leadFormData.website || "Not provided",
          serviceNeeded: leadFormData.serviceNeeded,
          monthlyBudget: leadFormData.monthlyBudget,
          from_page: "US Ads Landing Page (/us-ads)",
        }),
      });

      const data = await res.json();

      if (data.success) {
        // 2. Fire Meta Pixel Lead Event
        trackMetaEvent("Lead", {
          content_name: "US Ads Strategy Audit Form",
          value: 0.00,
          currency: "USD",
          service: leadFormData.serviceNeeded,
          budget: leadFormData.monthlyBudget,
        });

        // 3. Redirect to Thank You Page with Meeting Scheduler
        router.push("/thank-you");
      } else {
        setLeadError("Form submission failed. Please try again or chat with us on WhatsApp at +91 81309 72200.");
      }
    } catch (err) {
      setLeadError("Something went wrong. Please try again or chat with us on WhatsApp at +91 81309 72200.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Handle Contact Form Submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError("");

    if (!contactFormData.name || !contactFormData.email || !contactFormData.message) {
      setContactError("Please fill out all required fields.");
      return;
    }

    setIsSubmittingContact(true);

    try {
      // 1. Send Inquiry to Web3Forms API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d2be3617-99b0-4a71-8da8-874ddb392790",
          subject: `💬 New Quick Inquiry from ${contactFormData.name}`,
          name: contactFormData.name,
          email: contactFormData.email,
          phone: contactFormData.phone || "Not provided",
          message: contactFormData.message,
          from_page: "US Ads Landing Page (/us-ads)",
        }),
      });

      const data = await res.json();

      if (data.success) {
        // 2. Fire Meta Pixel Contact Event
        trackMetaEvent("Contact", {
          content_name: "US Ads Quick Inquiry Form",
        });

        // 3. Redirect to Thank You Page
        router.push("/thank-you");
      } else {
        setContactError("Failed to send message. Please chat with us on WhatsApp at +91 81309 72200.");
      }
    } catch (err) {
      setContactError("Failed to send message. Please chat with us on WhatsApp at +91 81309 72200.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleCtaClick = (source: string) => {
    trackMetaEvent("LeadCTA_Click", { source });
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneClick = (source: string) => {
    trackCustomMetaEvent("Phone_Click", { source });
  };

  // Real Services directly from main website (components/Services.tsx)
  const realServices = [
    {
      icon: FiSearch,
      title: "AI SEO Services",
      desc: "Rank higher with AI-assisted keyword strategy and on-page optimization built for sustainable organic growth.",
      bullets: ["AI Keyword & Competitor Intelligence", "On-Page & Technical SEO Optimization", "High-Authority Backlink Acquisition"]
    },
    {
      icon: FiMonitor,
      title: "Website Design & Development",
      desc: "Fast, user-first websites built for conversions — not just aesthetics. SEO-baked from day one.",
      bullets: ["Custom UX & High-Converting Layouts", "Mobile-Optimized & Ultra-Fast Loading", "Built-In SEO & Conversion Funnels"]
    },
    {
      icon: FiInstagram,
      title: "Social Media Management",
      desc: "Platform-specific content, analytics, and engagement strategies that build real, loyal audiences.",
      bullets: ["Platform-Specific Content Strategy", "Custom Graphics & Short-Form Video", "Audience Growth & Analytics Tracking"]
    },
    {
      icon: FiTarget,
      title: "Google & Facebook Ads",
      desc: "Performance ad campaigns engineered to maximize ROAS across US, UK, and Indian markets.",
      bullets: ["High-Converting Ad Copy & Creative", "Audience Filtering & Negative Keywords", "Daily Bid & ROAS Optimization"]
    },
    {
      icon: FiEdit3,
      title: "Content Marketing",
      desc: "High-impact blogs, landing pages & SEO content that attracts the right audience and converts them into leads.",
      bullets: ["SEO-Driven Blog Articles & Guides", "High-Converting Landing Page Copy", "Lead Magnet & Funnel Content"]
    },
    {
      icon: FiUsers,
      title: "Lead Generation",
      desc: "End-to-end funnels that bring qualified buyers to your door — consistently, every single month.",
      bullets: ["B2B & B2C Lead Generation Funnels", "High-Intent Customer Acquisition", "Automated Lead Nurturing Systems"]
    },
    {
      icon: FiAward,
      title: "Brand Strategy & Consulting",
      desc: "Positioning, identity, and reputation management for brands ready to lead their category.",
      bullets: ["Brand Positioning & Messaging", "Visual Identity & Style Guidelines", "Category Leadership Strategy"]
    },
    {
      icon: FiMapPin,
      title: "Google Business Profile",
      desc: "Full GBP setup, verification & local SEO optimization — get found by local customers 3x faster.",
      bullets: ["Google Map Pack Top-3 Ranking", "Local Citation & Profile Optimization", "Review Management & Local Leads"]
    }
  ];

  // Real Testimonials directly from main website & verified Google reviews
  const realTestimonials = [
    {
      quote: "BizBox Story completely transformed our online presence. Within 90 days, our organic traffic doubled and we were ranking on page 1 for our top keywords. The team is incredibly responsive and truly invested in our success.",
      name: "Mike Harrison",
      role: "CEO, Nirvana DC Dispensary",
      location: "🇺🇸 Massachusetts, USA"
    },
    {
      quote: "The ROI from their Google Ads management paid for itself in the first month. They don't just run campaigns — they actually optimize aggressively and tell you exactly what's working and what isn't.",
      name: "James O'Connor",
      role: "Owner, Zaza City",
      location: "🇺🇸 New York, USA"
    },
    {
      quote: "Besides being a cracking digital marketing agency they are a great business consultant. My startup needed everything including pitch decks, funding, offline marketing and they helped me with all. Made flyers, got me influencers, connected me with angel investors and VC. My posts were there are like clockwork and weekly team meetings were a huge help. Plus Shay has lived in USA so language, culture etc. and understanding my business was never a problem.",
      name: "Erica Jackson",
      role: "Founder, Steady English Academy",
      location: "🇺🇸 USA"
    }
  ];

  const faqs = [
    {
      q: "How quickly can we expect qualified leads from your campaigns?",
      a: "Our paid Google & Meta Ads campaigns typically begin generating high-intent US inquiries within 24 to 48 hours of launch. For long-term organic growth, our AI SEO strategies start delivering significant ranking improvements in 60 to 90 days."
    },
    {
      q: "Do you specialize in serving businesses within the United States?",
      a: "Yes! We specialize in helping US businesses scale revenue across all 50 states — from competitive metros like New York, Los Angeles, and Chicago to regional hubs across Texas, Florida, and Massachusetts."
    },
    {
      q: "What makes your approach different from typical marketing agencies?",
      a: "We are strictly revenue-driven. Most agencies report vanity metrics like impressions and clicks. We optimize for actual qualified lead volume, cost-per-acquisition (CPA), return on ad spend (ROAS), and booked deals."
    },
    {
      q: "What minimum ad budget do you recommend for US campaigns?",
      a: "To achieve optimal data velocity and competitive bidding in the US market, we recommend starting with a minimum ad budget of $1,500 - $3,000 per month depending on your industry."
    },
    {
      q: "Are there long-term contracts required?",
      a: "No! We earn your business month after month. We offer transparent 30-day agreements focused on delivering tangible performance and ROI."
    }
  ];

  return (
    <>
      <MetaPixel />
      <AdsHeader />

      <main className="min-h-screen bg-brand-surface text-brand-ink font-dm">
        
        {/* ── 1. HERO SECTION ────────────────────────────────────────────── */}
        <section id="hero" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-[#080c18] text-white">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Value Prop & Messaging */}
              <div className="lg:col-span-7 text-center lg:text-left">
                
                <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
                  <span className="text-base">🇺🇸</span> Exclusive for US Businesses &amp; SMEs
                </span>

                <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
                  Scale Your Business in the USA with <span className="text-brand-gold italic">AI SEO &amp; High-ROI Ads</span>
                </h1>

                <p className="font-dm text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Stop burning ad budget on low-converting clicks. We build revenue-generating growth engines that deliver consistent, highly-qualified US leads within 30 days.
                </p>

                {/* Key Benefit Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-xl mx-auto lg:mx-0 font-dm text-sm sm:text-base text-gray-200">
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-brand-gold text-lg flex-shrink-0" />
                    <span>Guaranteed High-Intent US Leads</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-brand-gold text-lg flex-shrink-0" />
                    <span>50+ SMEs Scaled Globally</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-brand-gold text-lg flex-shrink-0" />
                    <span>No Long-Term Contracts Required</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-brand-gold text-lg flex-shrink-0" />
                    <span>Transparent Reporting &amp; Support</span>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <button
                    onClick={() => handleCtaClick("hero_primary")}
                    className="w-full sm:w-auto font-dm font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_10px_35px_rgba(255,182,5,0.35)] hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    Claim Free Growth Audit <FiArrowRight />
                  </button>

                  <a
                    href="https://wa.me/918130972200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePhoneClick("hero_whatsapp")}
                    className="w-full sm:w-auto font-dm font-semibold text-sm sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white text-center"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                    <span>Chat on WhatsApp (+91 81309 72200)</span>
                  </a>
                </div>

                {/* Trust Badges - Real Stats */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
                  <div>
                    <div className="flex items-center justify-center sm:justify-start text-brand-gold gap-1 mb-1">
                      <FiStar className="fill-current text-xs" />
                      <FiStar className="fill-current text-xs" />
                      <FiStar className="fill-current text-xs" />
                      <FiStar className="fill-current text-xs" />
                      <FiStar className="fill-current text-xs" />
                    </div>
                    <p className="font-fraunces font-bold text-lg text-white">4.9 / 5 Rating</p>
                    <p className="font-dm text-xs text-gray-400">Google Reviews</p>
                  </div>

                  <div>
                    <p className="font-fraunces font-bold text-xl sm:text-2xl text-brand-gold">50+</p>
                    <p className="font-dm text-xs text-gray-400">SMEs Scaled</p>
                  </div>

                  <div>
                    <p className="font-fraunces font-bold text-xl sm:text-2xl text-brand-gold">6+ Years</p>
                    <p className="font-dm text-xs text-gray-400">Industry Experience</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Hero Quick Lead Box (Hidden on Mobile to prevent double-form redundancy, visible on Desktop) */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="bg-white text-brand-ink rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-border relative">
                  
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-ink text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <FiAward className="text-sm" /> ⚡ 5 Free Audits Remaining
                  </div>

                  <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep text-center mt-2 mb-2">
                    Get Your Custom US Growth Plan
                  </h3>
                  <p className="font-dm text-xs sm:text-sm text-gray-500 text-center mb-6">
                    Audit includes competitor gap analysis, keyword roadmap &amp; ad ROI calculation.
                  </p>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={leadFormData.fullName}
                        onChange={(e) => setLeadFormData({ ...leadFormData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none font-dm text-sm text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@yourcompany.com"
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({ ...leadFormData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none font-dm text-sm text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone Number (US) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={leadFormData.phone}
                        onChange={(e) => setLeadFormData({ ...leadFormData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none font-dm text-sm text-gray-800"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full font-dm font-bold text-base py-4 bg-brand-gold text-brand-ink rounded-xl hover:bg-brand-gold-light transition-all shadow-[0_8px_25px_rgba(255,182,5,0.35)] cursor-pointer mt-2"
                    >
                      {isSubmittingLead ? "Generating Audit..." : "Claim Free Audit Now →"}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1 mt-2">
                      <FiLock className="text-xs" /> 100% Confidential. No Spam Guaranteed.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CLIENT BRANDS MARQUEE ────────────────────────────────────────── */}
        <ClientLogos />

        {/* ── 2. MAIN LEAD CAPTURE FORM SECTION ─────────────────────────── */}
        <section id="lead-form" ref={leadFormRef} className="py-20 bg-brand-surface border-b border-brand-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <span className="font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/10">
                Ready to Grow?
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep mt-4">
                Request Your Free <span className="text-brand-gold italic">US Lead Generation Audit</span>
              </h2>
              <p className="font-dm text-gray-600 max-w-xl mx-auto text-base sm:text-lg mt-3">
                Tell us about your business goals. Our US marketing team will audit your present setup and send you a custom ROI roadmap within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-10 shadow-xl">
              
              {leadSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="font-fraunces text-3xl font-bold text-brand-blue-deep">Thank You!</h3>
                  <p className="font-dm text-gray-600 text-lg max-w-md mx-auto">
                    Your request has been received. Our growth strategist will review your information and contact you within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/918130972200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePhoneClick("form_success_whatsapp")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-dm font-bold text-sm sm:text-base text-brand-ink bg-brand-gold px-6 py-3.5 rounded-full hover:bg-brand-gold-light transition-colors mt-4 text-center"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" /> Chat on WhatsApp (+91 81309 72200)
                  </a>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-6 font-dm">
                  
                  {leadError && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm font-semibold rounded-xl border border-red-200">
                      {leadError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={leadFormData.fullName}
                        onChange={(e) => setLeadFormData({ ...leadFormData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({ ...leadFormData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 234-5678"
                        value={leadFormData.phone}
                        onChange={(e) => setLeadFormData({ ...leadFormData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Website URL / Company Name</label>
                      <input
                        type="text"
                        placeholder="www.yourcompany.com"
                        value={leadFormData.website}
                        onChange={(e) => setLeadFormData({ ...leadFormData, website: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Primary Service Needed</label>
                      <select
                        value={leadFormData.serviceNeeded}
                        onChange={(e) => setLeadFormData({ ...leadFormData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm bg-white"
                      >
                        <option value="AI SEO Services">AI SEO Services</option>
                        <option value="Website Design & Development">Website Design &amp; Development</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Google & Facebook Ads">Google &amp; Facebook Ads</option>
                        <option value="Content Marketing">Content Marketing</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Brand Strategy & Consulting">Brand Strategy &amp; Consulting</option>
                        <option value="Google Business Profile">Google Business Profile (GMB)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Estimated Monthly Budget (USD)</label>
                      <select
                        value={leadFormData.monthlyBudget}
                        onChange={(e) => setLeadFormData({ ...leadFormData, monthlyBudget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none text-gray-800 text-sm bg-white"
                      >
                        <option value="$1,500 - $3,000">$1,500 - $3,000 / mo</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000 / mo</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000 / mo</option>
                        <option value="$10,000+">$10,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full font-dm font-bold text-base sm:text-lg py-3.5 sm:py-4 px-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_10px_30px_rgba(255,182,5,0.35)] cursor-pointer text-center leading-snug"
                    >
                      {isSubmittingLead ? "Submitting Request..." : "Get My Free US Growth Strategy & Audit →"}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 pt-2">
                    <span className="flex items-center gap-1.5"><FiShield className="text-green-600 text-sm" /> 100% Free Strategy Session</span>
                    <span className="flex items-center gap-1.5"><FiLock className="text-brand-blue-deep text-sm" /> Privacy Protected</span>
                    <span className="flex items-center gap-1.5"><FiAward className="text-brand-gold text-sm" /> No Contract Required</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

        {/* ── 3. US CASE STUDIES SLIDER (US BRANDS ONLY) ─────────────────── */}
        <div ref={caseStudiesRef}>
          <USAdsCaseStudiesSlider />
        </div>

        {/* ── 4. REAL TESTIMONIALS (FROM WEBSITE) ────────────────────── */}
        <section id="testimonials" ref={testimonialsRef} className="py-24 bg-brand-surface border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
                Client Stories
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep mt-3">
                Don&apos;t Take Our Word For It
              </h2>
              <p className="font-dm text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mt-4">
                Real businesses. Real results. Real words.
              </p>
            </div>

            {/* Metrics Showcase Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-2xl border border-brand-border text-center shadow-sm">
                <p className="font-fraunces font-bold text-3xl sm:text-4xl text-brand-gold mb-1">50+</p>
                <p className="font-dm text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600">SMEs Scaled Globally</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-brand-border text-center shadow-sm">
                <p className="font-fraunces font-bold text-3xl sm:text-4xl text-brand-blue-deep mb-1">3</p>
                <p className="font-dm text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600">Global Markets (US, UK, IND)</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-brand-border text-center shadow-sm">
                <p className="font-fraunces font-bold text-3xl sm:text-4xl text-brand-gold mb-1">6+ Years</p>
                <p className="font-dm text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600">Growth Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-brand-border text-center shadow-sm">
                <p className="font-fraunces font-bold text-3xl sm:text-4xl text-brand-blue-deep mb-1">4.9 ★</p>
                <p className="font-dm text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600">Google Review Rating</p>
              </div>
            </div>

            {/* Real Testimonials Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {realTestimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-brand-border flex flex-col justify-between shadow-sm hover:border-brand-gold/40 transition-colors"
                >
                  <div>
                    <div className="text-brand-gold text-lg tracking-widest mb-4">★★★★★</div>
                    <p className="font-dm text-gray-700 leading-relaxed italic mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="border-t border-brand-border pt-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold/20 text-brand-ink font-bold rounded-full flex items-center justify-center font-fraunces text-base flex-shrink-0">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-brand-blue-deep text-sm">{testimonial.name}</h4>
                      <p className="font-dm text-xs text-gray-500">{testimonial.role}</p>
                      <p className="font-dm text-xs text-brand-gold font-semibold mt-0.5">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 bg-white border border-brand-border px-6 py-3.5 rounded-full shadow-sm">
                <FcGoogle className="text-2xl" />
                <span className="font-fraunces font-bold text-brand-ink text-lg">4.9</span>
                <span className="text-brand-gold text-lg tracking-widest">★★★★★</span>
                <span className="font-dm text-gray-600 text-sm">on Google Reviews</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── SIR'S VIDEO SECTION (SHAY MEHTA VIDEO) ────────────────────── */}
        <VideoSection onCtaClick={() => handleCtaClick("video_section")} />

        {/* ── 5. ALL 8 SERVICES FROM WEBSITE ─────────────────────────────── */}
        <section id="services" ref={servicesRef} className="py-24 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
                What We Do
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep mt-3">
                Everything Your Brand Needs <span className="text-brand-gold italic">to Win Online</span>
              </h2>
              <p className="font-dm text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mt-4 leading-relaxed">
                From AI-powered SEO to performance ads, website development, and brand strategy — we&apos;re your full-stack digital growth team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {realServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-surface p-7 rounded-2xl border border-brand-border flex flex-col justify-between hover:border-brand-gold/40 transition-all shadow-sm group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-gold/15 text-brand-gold rounded-xl flex items-center justify-center text-2xl mb-6">
                      <service.icon />
                    </div>
                    <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-dm text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 font-dm text-xs text-gray-700 pt-4 border-t border-brand-border/60">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FiCheckCircle className="text-brand-gold text-sm flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => handleCtaClick("services_section")}
                className="w-full sm:w-auto font-dm font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-md cursor-pointer text-center"
              >
                Discuss Your Custom Service Needs →
              </button>
            </div>

          </div>
        </section>

        {/* ── 6. DIRECT CONTACT FORM & US OFFICE DETAILS ─────────────────── */}
        <section id="contact" className="py-20 bg-brand-surface border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
                  Get In Touch
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep">
                  Have Questions? Speak Directly with Our US Team
                </h2>
                <p className="font-dm text-gray-600 text-base leading-relaxed">
                  Whether you need a quick quote or want to discuss scaling your current ad campaign, our dedicated team is here to assist you.
                </p>

                <div className="space-y-5 pt-4 font-dm text-sm text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center flex-shrink-0 text-base">
                      <FiMapPin />
                    </div>
                    <div>
                      <strong className="block text-brand-blue-deep font-bold text-base">USA Office Location</strong>
                      <span>1285 Main St, Holden, MA 01520, United States</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#25D366]/15 text-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 text-base">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-brand-blue-deep font-bold text-base">WhatsApp Support</strong>
                      <a 
                        href="https://wa.me/918130972200" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handlePhoneClick("contact_section_whatsapp")}
                        className="text-[#25D366] font-bold hover:underline"
                      >
                        +91 81309 72200
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center flex-shrink-0 text-base">
                      <FiMail />
                    </div>
                    <div>
                      <strong className="block text-brand-blue-deep font-bold text-base">Email Us</strong>
                      <a href="mailto:info@bizboxstory.com" className="text-gray-600 hover:text-brand-gold transition-colors">
                        info@bizboxstory.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white p-6 sm:p-10 rounded-3xl border border-brand-border shadow-md">
                  <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-2">Send a Quick Message</h3>
                  <p className="font-dm text-sm text-gray-500 mb-6">We reply to all inquiries within 2 hours during business hours.</p>

                  {contactSubmitted ? (
                    <div className="text-center py-8 bg-green-50 rounded-2xl border border-green-200">
                      <p className="font-fraunces text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</p>
                      <p className="font-dm text-sm text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4 font-dm">
                      {contactError && <p className="text-red-600 text-xs font-bold">{contactError}</p>}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={contactFormData.name}
                            onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold outline-none text-sm bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={contactFormData.email}
                            onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold outline-none text-sm bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={contactFormData.phone}
                          onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold outline-none text-sm bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">How Can We Help You? *</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your business, website, or marketing goals..."
                          value={contactFormData.message}
                          onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-gold outline-none text-sm bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingContact}
                        className="w-full font-dm font-bold text-base py-3.5 bg-brand-blue-deep text-white rounded-xl hover:bg-brand-ink transition-colors cursor-pointer"
                      >
                        {isSubmittingContact ? "Sending..." : "Send Message →"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. FAQ ACCORDION ───────────────────────────────────────────── */}
        <section id="faqs" className="py-20 bg-white border-b border-brand-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep">
                Frequently Asked Questions
              </h2>
              <p className="font-dm text-gray-600 text-sm sm:text-base mt-2">
                Everything you need to know about partnering with BizBox Story for digital growth.
              </p>
            </div>

            <div className="space-y-4 font-dm">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-brand-surface border border-brand-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 focus:outline-none">
                    <span className="font-fraunces text-base sm:text-lg font-bold text-brand-blue-deep pr-6">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-brand-border/50 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* ── 8. FINAL CTA BAR ────────────────────────────────────────────── */}
        <section className="py-16 bg-[#080c18] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold mb-4">
              Ready to Scale Your Business with <span className="text-brand-gold italic">BizBox Story</span>?
            </h2>
            <p className="font-dm text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Get your free, no-obligation growth roadmap today. We&apos;ll show you exactly how to outperform your competitors.
            </p>
            <button
              onClick={() => handleCtaClick("bottom_cta")}
              className="w-full sm:w-auto font-dm font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_10px_30px_rgba(255,182,5,0.35)] cursor-pointer text-center"
            >
              Get Free Growth Audit Now &rarr;
            </button>
          </div>
        </section>

      </main>

      <AdsFooter />
    </>
  );
}
