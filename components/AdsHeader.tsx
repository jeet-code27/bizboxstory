"use client";

import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackMetaEvent, trackCustomMetaEvent } from "@/lib/metaPixel";

export default function AdsHeader() {
  const handlePhoneClick = () => {
    trackCustomMetaEvent("Phone_Click", { source: "ads_header_whatsapp" });
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackMetaEvent("LeadCTA_Click", { source: "ads_header_cta" });
    const target = document.getElementById("book-call");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[16px] border-b border-brand-border/60 shadow-xs py-1.5 sm:py-2.5 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-13 sm:h-16 lg:h-18">
        
        {/* Brand Logo - Scaled responsively for mobile */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            href="#hero" 
            aria-label="BizBox Story Growth Studio" 
            className="relative block h-9 sm:h-12 lg:h-14 w-[135px] xs:w-[155px] sm:w-[200px] lg:w-[240px]"
          >
            <Image
              src="/images/logo.png"
              alt="BizBox Story Digital Growth Studio"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 155px, 240px"
              priority
            />
          </Link>
        </div>

        {/* Right Actions: WhatsApp Icon & Compact CTA Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Direct WhatsApp Chat */}
          <a
            href="https://wa.me/918130972200"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePhoneClick}
            aria-label="Chat on WhatsApp +91 81309 72200"
            className="flex items-center gap-2 font-dm text-xs sm:text-sm font-bold text-brand-ink hover:text-[#25D366] transition-colors"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 hover:bg-[#25D366]/30 transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
            </span>
            <span className="hidden md:inline font-dm whitespace-nowrap">+91 81309 72200</span>
          </a>

          {/* Primary High-Converting CTA Button */}
          <a
            href="#book-call"
            onClick={handleCtaClick}
            className="font-dm text-xs sm:text-sm font-bold tracking-tight sm:tracking-wide px-3 sm:px-6 py-2 sm:py-2.5 bg-brand-gold text-brand-ink rounded-full transition-all duration-300 hover:bg-brand-gold-light hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(255,182,5,0.35)] whitespace-nowrap shrink-0"
          >
            <span className="xs:hidden">Book Call &rarr;</span>
            <span className="hidden xs:inline">Book Free Call &rarr;</span>
          </a>
        </div>

      </div>
    </header>
  );
}
