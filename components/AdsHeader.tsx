"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { trackMetaEvent, trackCustomMetaEvent } from "@/lib/metaPixel";

export default function AdsHeader() {
  const handlePhoneClick = () => {
    trackCustomMetaEvent("Phone_Click", { source: "ads_header_phone" });
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackMetaEvent("LeadCTA_Click", { source: "ads_header_cta" });
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[16px] border-b border-brand-border/60 shadow-sm py-2 sm:py-2.5 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        
        {/* Brand Logo - No outbound links outside landing page */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            href="#hero" 
            aria-label="BizBox Story Growth Studio" 
            className="relative block h-12 sm:h-15 w-[190px] sm:w-[245px]"
          >
            <Image
              src="/images/logo.png"
              alt="BizBox Story Digital Growth Studio"
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 190px, 245px"
              priority
            />
          </Link>
        </div>

        {/* Right Actions: USA Support Phone & Conversion CTA - NO Navigation Menus */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Direct USA Phone Call */}
          <a
            href="tel:+17749912610"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 font-dm text-[13px] sm:text-sm font-bold text-brand-ink hover:text-brand-blue-deep bg-brand-surface sm:bg-transparent px-3 py-2 sm:p-0 rounded-full sm:rounded-none transition-colors border sm:border-none border-brand-border/80"
          >
            <span className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-ink flex items-center justify-center flex-shrink-0">
              <FaPhone className="w-3.5 h-3.5 scale-x-[-1]" />
            </span>
            <span className="hidden md:inline font-dm">+1-774-991-2610</span>
          </a>

          {/* Primary High-Converting CTA Button */}
          <a
            href="#lead-form"
            onClick={handleCtaClick}
            className="font-dm text-[13px] sm:text-sm font-bold tracking-wide px-4 sm:px-6 py-2.5 sm:py-3 bg-brand-gold text-brand-ink rounded-full transition-all duration-300 hover:bg-brand-gold-light hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(255,182,5,0.35)]"
          >
            Get Free Audit &rarr;
          </a>
        </div>

      </div>
    </header>
  );
}
