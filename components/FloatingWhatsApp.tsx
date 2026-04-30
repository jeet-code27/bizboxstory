"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 xl:bottom-10 right-6 xl:right-10 z-[99] flex items-center group">
      
      {/* Dynamic Hover Tooltip */}
      <div className="absolute right-[4.5rem] translate-x-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <div className="bg-[#111111] text-white font-medium text-sm font-outfit px-4 py-2.5 rounded-xl whitespace-nowrap shadow-2xl border border-white/10 relative hidden sm:block">
          Contact us
          {/* Right Triangle Pointer */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-[5px] w-2.5 h-2.5 bg-[#111111] rotate-45 border-r border-t border-white/10" />
        </div>
      </div>

      {/* Button & Ping Animation Wrapper */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
        
        {/* Continuous Ping Emulation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-40 duration-1000" />
        
        {/* Core Clickable Asset */}
        <Link
          href="https://wa.me/919217730039?text=Hi%20BizBox%20Story%2C%20I%27d%20like%20to%20discuss%20my%20digital%20marketing%20needs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-full h-full bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-[0_4px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105"
        >
          <FaWhatsapp className="text-[1.75rem] sm:text-[2rem] translate-x-[1px] translate-y-[-1px]" />
        </Link>
      </div>

    </div>
  );
}
