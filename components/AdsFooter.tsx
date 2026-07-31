"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { trackCustomMetaEvent } from "@/lib/metaPixel";

export default function AdsFooter() {
  const handlePhoneClick = () => {
    trackCustomMetaEvent("Phone_Click", { source: "ads_footer_phone" });
  };

  return (
    <footer className="bg-[#080c18] pt-12 pb-8 border-t border-brand-gold/20 text-white font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative h-12 w-48 mb-3">
              <Image
                src="/images/logo.png"
                alt="BizBox Story"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Revenue-Focused Growth &amp; Lead Generation Agency for US Businesses. Helping SMEs scale with high-ROI Ads, AI SEO &amp; Conversion Funnels.
            </p>
          </div>

          {/* Right: US Office & Direct Support */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300">
            <div className="flex items-start gap-2.5">
              <FiMapPin className="text-brand-gold text-base mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">USA Office</span>
                <span>1285 Main St, Holden, MA 01520</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <a 
                href="tel:+17749912610" 
                onClick={handlePhoneClick}
                className="hover:text-brand-gold transition-colors flex items-center gap-2"
              >
                <FiPhone className="text-brand-gold" /> +1-774-991-2610
              </a>
              <a href="mailto:info@bizboxstory.com" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                <FiMail className="text-brand-gold" /> info@bizboxstory.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} BizBox Story. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
