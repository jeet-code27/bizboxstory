"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiArrowRight,
  FiTarget,
  FiSearch,
  FiFileText,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiCalendar,
  FiMapPin
} from "react-icons/fi";

const PROTOCOL_STEPS = [
  {
    step: "01",
    title: "First, we talk about your business.",
    icon: FiTarget,
    desc: "Before recommending advertising, a new website, or social media, we understand what you sell, who your best customers are, which areas you serve, and where you are struggling. Getting enquiries for jobs you do not want helps nobody.",
  },
  {
    step: "02",
    title: "Then, we look at what you already have.",
    icon: FiSearch,
    desc: "We review your website, online presence, and current marketing. With your permission and access, we examine your existing campaigns and tracking. If something is already working, we build on it.",
  },
  {
    step: "03",
    title: "You get a clear plan before you commit.",
    icon: FiFileText,
    desc: "We put the proposed work in writing: what we will deliver, who is responsible, the timeline, and how we measure progress. Additional work or spending always requires your approval.",
  },
  {
    step: "04",
    title: "Once we start, you know who you are working with.",
    icon: FiUsers,
    desc: "Shay leads BizBox Story, supported by our delivery team based in India. You receive a named point of contact, agreed communication times, and direct access to Shay. Your business owns its website, domain, and ad accounts.",
  },
  {
    step: "05",
    title: "We get the essentials ready, then launch.",
    icon: FiCheckCircle,
    desc: "Depending on your plan, that might mean improving your website, building landing pages, preparing content, or setting up ad campaigns. All materials and tracking are verified before going live.",
  },
  {
    step: "06",
    title: "We measure business opportunities - not just activity.",
    icon: FiTrendingUp,
    desc: "We measure whether campaigns bring the right people: qualified enquiries, booked appointments or walkthroughs, acquisition costs, and sales. Marketing reports alone do not tell the full story.",
  },
  {
    step: "07",
    title: "Regular updates, including when things are not working.",
    icon: FiShield,
    desc: "We agree on a check-in schedule: what was completed, what results show, and what we recommend next. If a campaign underperforms, we state it plainly and explain what we want to adjust.",
  },
  {
    step: "08",
    title: "Clear expectations on what we need from you.",
    icon: FiLayers,
    desc: "We need accurate information, timely approvals, and honest feedback on the enquiries received. Your team handles customer conversations; turning interest into revenue is a true partnership.",
  },
];

export default function FounderNoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // Listen for custom trigger events from anywhere on the site
  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener("open-founder-note", handleTrigger);
    return () => window.removeEventListener("open-founder-note", handleTrigger);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCalendlyClick = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/bizboxstory/30min",
      });
    }
  };

  return (
    <>
      {/* Floating Launcher Pill - Desktop (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-[90] hidden sm:block">
        <button
          type="button"
          onClick={openModal}
          className="group relative flex items-center gap-3 bg-brand-blue-deep/95 hover:bg-brand-blue-deep text-white pl-2 pr-4 py-2 rounded-full border border-brand-gold/30 hover:border-brand-gold shadow-[0_8px_30px_rgba(15,27,61,0.35)] hover:shadow-[0_8px_30px_rgba(255,182,5,0.25)] backdrop-blur-xl transition-all duration-300 cursor-pointer"
          aria-label="Read Founder Note on How We Work Together"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-gold/50 flex-shrink-0">
            <Image
              src="/images/shay.webp"
              alt="Shay Mehta"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] tracking-wider uppercase font-dm font-semibold text-brand-gold">
                Founder Note
              </span>
            </div>
            <span className="text-xs font-dm font-medium text-gray-200 group-hover:text-white transition-colors">
              How We Work Together
            </span>
          </div>

          <FiArrowRight className="text-brand-gold text-sm ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Floating Launcher Pill - Mobile */}
      <div className="fixed bottom-6 left-4 z-[90] sm:hidden">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-2 bg-brand-blue-deep/95 text-white pl-1.5 pr-3 py-1.5 rounded-full border border-brand-gold/40 shadow-xl backdrop-blur-xl text-xs font-dm"
          aria-label="Founder Note"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-brand-gold/60 flex-shrink-0">
            <Image
              src="/images/shay.webp"
              alt="Shay Mehta"
              fill
              className="object-cover"
              sizes="24px"
            />
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-brand-gold text-[11px]">How We Work</span>
        </button>
      </div>

      {/* Modal Backdrop and Content */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-[#060b18]/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[86vh] sm:max-h-[88vh] bg-gradient-to-b from-[#0c1630] via-[#091124] to-[#060c1a] border border-brand-gold/30 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col z-10 text-white"
            >
              {/* Compact Header */}
              <div className="relative px-4 sm:px-8 py-3.5 sm:py-5 border-b border-white/10 bg-brand-blue-deep/70 backdrop-blur-md flex-shrink-0">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-1/4 w-60 h-24 bg-brand-gold/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex items-center justify-between gap-3">
                  {/* Founder Profile Details */}
                  <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                    <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full sm:rounded-2xl overflow-hidden border-2 border-brand-gold/60 shadow-md flex-shrink-0 bg-brand-blue-deep">
                      <Image
                        src="/images/shay.webp"
                        alt="Shay Mehta"
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[9px] sm:text-[11px] font-dm uppercase tracking-wider font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                          Founder Memo
                        </span>
                        <span className="inline-flex items-center text-[10px] sm:text-xs text-gray-300 font-dm truncate">
                          <FiMapPin className="mr-1 text-brand-gold text-[10px] sm:text-xs flex-shrink-0" />
                          Boston Area (18 Yrs)
                        </span>
                      </div>
                      <h2 className="font-fraunces text-sm sm:text-xl font-bold text-white tracking-tight leading-snug mt-0.5 truncate">
                        How We Work Together at BizBox Story
                      </h2>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-brand-gold/40 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <FiX className="text-base sm:text-xl" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="px-4 sm:px-8 py-4 sm:py-6 overflow-y-auto space-y-4 sm:space-y-6 flex-grow custom-scrollbar">
                {/* Founder Hook Card */}
                <div className="relative p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-gold/15 via-brand-gold/5 to-transparent border border-brand-gold/30">
                  <p className="font-fraunces text-xs sm:text-lg text-white font-semibold leading-relaxed mb-1.5 sm:mb-2">
                    &ldquo;I have owned a business where you do. I spent 18 years in the Boston area &mdash; North Andover, Lowell, and Winchester &mdash; and ran a restaurant and a franchise there myself. I understand the responsibility that comes with spending your money.&rdquo;
                  </p>
                  <p className="text-[11px] sm:text-sm font-dm text-gray-300 leading-normal">
                    Before we touch your marketing budget, here is the exact protocol of how we operate, communicate, and stay accountable to you.
                  </p>
                </div>

                {/* 8-Step Bento Protocol */}
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[10px] sm:text-xs font-dm uppercase tracking-wider font-semibold text-brand-gold">
                      The 8-Step Working Blueprint
                    </span>
                    <span className="text-[10px] sm:text-xs font-dm text-gray-400">
                      Standard procedure
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                    {PROTOCOL_STEPS.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.step}
                          className="p-3 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-brand-gold/30 transition-all duration-200 flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                              <span className="text-[10px] sm:text-xs font-dm font-bold text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded border border-brand-gold/20">
                                Step {item.step}
                              </span>
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-white/5 group-hover:bg-brand-gold/15 flex items-center justify-center text-gray-300 group-hover:text-brand-gold transition-colors">
                                <IconComponent className="text-xs sm:text-sm" />
                              </div>
                            </div>
                            <h3 className="font-fraunces text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-brand-gold transition-colors leading-snug">
                              {item.title}
                            </h3>
                            <p className="font-dm text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Honest Commitment Callout */}
                <div className="relative p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0b1328] border border-brand-gold/40 shadow-inner">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
                      <FiShield className="text-sm sm:text-lg" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-xs font-dm uppercase tracking-wider font-bold text-brand-gold">
                        Our Honest Commitment
                      </span>
                      <p className="font-fraunces text-xs sm:text-base text-white font-medium leading-relaxed">
                        &ldquo;I cannot honestly guarantee how many customers will buy from you. What I can commit to is clear scope, agreed deadlines, communication, and honest reporting.&rdquo;
                      </p>
                      <p className="font-dm text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                        If that is the kind of working relationship you want, book a 30-minute call with Shay. Tell us about your business, what you have tried, and where you want to go. We will tell you where we believe we can help &mdash; and if we are not the right fit, we will tell you that too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slim Sticky Footer CTA */}
              <div className="px-4 sm:px-8 py-2.5 sm:py-3.5 border-t border-white/10 bg-brand-blue-deep/90 backdrop-blur-md flex-shrink-0 flex items-center justify-between gap-3">
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-dm text-gray-300 font-medium">
                    Ready for a clear, honest conversation?
                  </div>
                  <div className="text-[11px] text-brand-gold font-dm font-semibold">
                    Direct with Shay Mehta &bull; 30-Minute Strategy Session
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/15 hover:bg-white/10 text-gray-300 hover:text-white font-dm text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center"
                  >
                    Close
                  </button>

                  <Link
                    href="/free-strategy-call"
                    onClick={() => {
                      closeModal();
                      handleCalendlyClick();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-ink font-dm font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(255,182,5,0.3)] hover:shadow-[0_0_20px_rgba(255,182,5,0.4)] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <FiCalendar className="text-xs sm:text-sm flex-shrink-0" />
                    <span>Book 30-Min Call</span>
                    <FiArrowRight className="text-xs sm:text-sm flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
