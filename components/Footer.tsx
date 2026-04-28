"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

const servicesLinks = [
  { name: "AI SEO Services", href: "/services/ai-seo" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Google & Facebook Ads", href: "/services/google-facebook-ads" },
  { name: "Graphic / Website Design", href: "/services/graphic-website-design" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "Brand Presence & Consulting", href: "/services/brand-presence-consulting" },
  { name: "CBD SEO Strategies", href: "/services/cbd-seo" },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blogs" },
  { name: "SEO Blogs", href: "/blogs" },
  { name: "Jobs", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

const marketsLinks = [
  { flag: "https://flagcdn.com/w40/us.png", name: "United States", href: "/digital-marketing-agency-united-states" },
  { flag: "https://flagcdn.com/w40/gb.png", name: "United Kingdom", href: "/digital-marketing-agency-united-kingdom" },
  { flag: "https://flagcdn.com/w40/in.png", name: "India", href: "/" },
  { flag: "https://flagcdn.com/w40/au.png", name: "Australia", href: "/digital-marketing-agency-australia" },
  { flag: "https://flagcdn.com/w40/ca.png", name: "Canada", href: "/digital-marketing-agency-canada" },
  { flag: "https://flagcdn.com/w40/ae.png", name: "Dubai", href: "/digital-marketing-agency-dubai" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080c18] pt-20 pb-10 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" aria-label="BizBox Story Home" className="mb-2">
              <img
                src="/images/logo.png"
                alt="BizBox Story Logo"
                className="h-16 sm:h-20 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo.png";
                }}
              />
            </Link>
            <p className="font-dm text-gray-400 text-sm mt-3 max-w-sm leading-relaxed">
              Revenue-driven digital marketing for SMEs and startups across the US, India, UK & beyond.
            </p>
            
            {/* Offices */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-auto mt-0.5 rounded-[2px] shadow-sm opacity-90" />
                <p className="font-dm text-gray-400 text-sm leading-relaxed">
                  <span className="text-white font-medium block mb-1">India HQ</span>
                  122 Woodstock Ave, Nirvana Country,<br />
                  Sector 50, Gurugram, Haryana 122018
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-6 h-auto mt-0.5 rounded-[2px] shadow-sm opacity-90" />
                <p className="font-dm text-gray-400 text-sm leading-relaxed">
                  <span className="text-white font-medium block mb-1">USA Office</span>
                  1285 Main St, Holden,<br />
                  MA 01520, United States
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mt-7 space-y-3 font-dm text-sm text-gray-400">
              <a href="mailto:info@bizboxstory.com" className="hover:text-brand-gold transition-colors flex items-center gap-3">
                <FiMail className="text-brand-gold text-base" /> info@bizboxstory.com
              </a>
              <a href="tel:+919821774565" className="hover:text-brand-gold transition-colors flex items-center gap-3">
                <FiPhone className="text-brand-gold text-base" /> +91-9821774565 (India)
              </a>
              <a href="tel:+17749912610" className="hover:text-brand-gold transition-colors flex items-center gap-3">
                <FiPhone className="text-brand-gold text-base" /> +1-774-991-2610 (USA)
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300">
                <FaXTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div className="lg:col-span-3 lg:col-start-6 mt-6 lg:mt-0">
            <h3 className="font-dm font-bold text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-dm text-sm text-gray-400 hover:text-brand-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Company */}
          <div className="lg:col-span-2 mt-6 lg:mt-0">
            <h3 className="font-dm font-bold text-white text-sm uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-dm text-sm text-gray-400 hover:text-brand-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Markets Served */}
          <div className="lg:col-span-2 mt-6 lg:mt-0">
            <h3 className="font-dm font-bold text-white text-sm uppercase tracking-widest mb-6 whitespace-nowrap">
              We Serve
            </h3>
            <ul className="space-y-4">
              {marketsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-dm text-sm text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center gap-3 group">
                    <img src={link.flag} alt={link.name} className="w-5 h-auto rounded-sm opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-dm text-sm text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} BizBox Story. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-dm text-sm text-gray-600">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline-block">|</span>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span className="hidden sm:inline-block">|</span>
            <Link href="/refund-policy" className="hover:text-gray-300 transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
