"use client";

import { useEffect } from "react";
import Link from "next/link";
import { trackMetaEvent } from "@/lib/metaPixel";
import { 
  FiCheckCircle, 
  FiCalendar, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiArrowRight, 
  FiShield, 
  FiStar 
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Meta Pixel Lead & PageView Confirmation Events on Thank You Page
    trackMetaEvent("PageView");
    trackMetaEvent("Lead", {
      content_name: "Thank You Confirmation Page",
      value: 0.00,
      currency: "USD",
    });
  }, []);

  return (
    <>
      <main className="min-h-screen bg-brand-surface text-brand-ink font-dm pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ── 1. CONFIRMATION HEADER ────────────────────────────────────── */}
          <div className="text-center bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-xl mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl mb-6 shadow-inner">
              ✓
            </div>

            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-bold px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/10 mb-3">
              🎉 Audit Request Confirmed!
            </span>

            <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep leading-tight">
              Thank You! Your Custom Growth Audit Is <span className="text-brand-gold italic">On Its Way</span>
            </h1>

            <p className="mt-4 font-dm text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;ve received your business details. Our senior growth strategist is analyzing your site and competitor keywords, and will email your audit report within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-500 pt-6 border-t border-brand-border/60">
              <span className="flex items-center gap-1.5"><FiClock className="text-brand-gold" /> Response Time: &lt; 24 Hours</span>
              <span className="flex items-center gap-1.5"><FiShield className="text-green-600" /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><FiStar className="text-brand-gold" /> 4.9 ★ Rating on Google</span>
            </div>
          </div>

          {/* ── 2. MEETING BOOKING / SCHEDULER WIDGET ───────────────────── */}
          <div className="bg-[#080c18] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-brand-gold/20 mb-10 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-bold mb-4 px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/10">
                <FiCalendar className="text-base" /> Fast-Track Your Results
              </span>

              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold mb-3">
                Want Immediate Answers? <br className="hidden sm:block" />
                <span className="text-brand-gold italic">Book a 1-on-1 Strategy Session Now</span>
              </h2>

              <p className="font-dm text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Skip the wait! Select a convenient time below to speak directly with our US growth strategist about scaling your leads and ROAS.
              </p>

              {/* Calendly / Meeting Embed Iframe Container */}
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-white/20 min-h-[550px] mb-8">
                <iframe
                  src="https://calendly.com/bizboxstory/30min?embed_domain=bizboxstory.com&embed_type=Inline"
                  width="100%"
                  height="550"
                  frameBorder="0"
                  title="Schedule a Meeting with BizBox Story"
                  className="w-full h-[550px]"
                />
              </div>

              {/* Direct USA Phone & WhatsApp Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+17749912610"
                  className="w-full sm:w-auto font-dm font-bold text-base px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_8px_25px_rgba(255,182,5,0.35)] flex items-center justify-center gap-2"
                >
                  <FiPhone /> Call USA Support: +1-774-991-2610
                </a>

                <a
                  href="https://wa.me/919217730039?text=Hi%20BizBox%20Story,%20I%20just%20submitted%20my%20growth%20audit%20request%20for%20my%20business!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto font-dm font-semibold text-base px-6 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white"
                >
                  <FaWhatsapp className="text-green-400 text-lg" /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* ── 3. WHAT HAPPENS NEXT CHECKLIST ───────────────────────────── */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 sm:p-10 shadow-md">
            <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-6 text-center">
              What Happens Next?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-surface p-6 rounded-2xl border border-brand-border/60">
                <div className="w-10 h-10 bg-brand-gold/15 text-brand-ink font-bold rounded-xl flex items-center justify-center font-fraunces text-lg mb-4">
                  1
                </div>
                <h4 className="font-fraunces font-bold text-lg text-brand-blue-deep mb-2">Competitor Analysis</h4>
                <p className="font-dm text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Our team audits your website traffic, ad copy, and high-intent competitor keywords.
                </p>
              </div>

              <div className="bg-brand-surface p-6 rounded-2xl border border-brand-border/60">
                <div className="w-10 h-10 bg-brand-gold/15 text-brand-ink font-bold rounded-xl flex items-center justify-center font-fraunces text-lg mb-4">
                  2
                </div>
                <h4 className="font-fraunces font-bold text-lg text-brand-blue-deep mb-2">Custom 30-Day Plan</h4>
                <p className="font-dm text-gray-600 text-xs sm:text-sm leading-relaxed">
                  We calculate your potential cost-per-lead reduction and build a 30-day ROAS roadmap.
                </p>
              </div>

              <div className="bg-brand-surface p-6 rounded-2xl border border-brand-border/60">
                <div className="w-10 h-10 bg-brand-gold/15 text-brand-ink font-bold rounded-xl flex items-center justify-center font-fraunces text-lg mb-4">
                  3
                </div>
                <h4 className="font-fraunces font-bold text-lg text-brand-blue-deep mb-2">Walkthrough &amp; Launch</h4>
                <p className="font-dm text-gray-600 text-xs sm:text-sm leading-relaxed">
                  We present your audit findings and launch your high-converting campaign.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/us-ads"
                className="font-dm text-sm font-bold text-brand-gold hover:underline inline-flex items-center gap-1.5"
              >
                &larr; Back to US Growth Offer Page
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
