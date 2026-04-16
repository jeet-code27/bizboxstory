"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Google & Facebook Ads", href: "/services/google-facebook-ads" },
      { name: "Graphic / Website Design", href: "/services/graphic-website-design" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Google My Business", href: "/services/google-my-business" },
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Brand Presence & Consulting", href: "/services/brand-presence-consulting" },
      { name: "Lead Generation", href: "/services/lead-generation" },
      { name: "CBD SEO Strategies", href: "/services/cbd-seo" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-[16px] shadow-[0_1px_0_rgba(13,13,13,0.08)] py-3" 
          : "bg-white py-5 shadow-[0_1px_0_rgba(13,13,13,0.04)]"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Restored Native Image Logo component */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Home page" className="relative block h-10 sm:h-12 lg:h-16 w-[160px] sm:w-[200px] lg:w-[240px]">
              <Image
                src="/images/logo.png"
                alt="BizBox Story — Digital Marketing Agency"
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 200px, 240px"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex items-center space-x-10 font-dm"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants} className="relative group">
                {link.dropdown ? (
                  <div className="relative group flex items-center">
                    <Link
                      href={link.href}
                      className="flex items-center text-[15px] font-medium text-gray-600 hover:text-brand-blue-deep transition-colors py-2"
                      aria-label={link.name}
                    >
                      {link.name}
                      <FiChevronDown className="ml-1.5 h-4 w-4 group-hover:-rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white border border-brand-border rounded-xl overflow-hidden py-3" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-2.5 text-[14.5px] font-medium text-gray-600 hover:bg-brand-muted hover:text-brand-gold-light transition-colors"
                            aria-label={subItem.name}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-gray-600 hover:text-brand-blue-deep transition-colors py-2 block"
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="hidden lg:flex items-center"
          >
            <Link
              href="/free-strategy-call"
              className="font-dm text-[14.5px] font-semibold tracking-wide px-7 py-3 bg-brand-gold text-brand-ink rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-brand-gold-light hover:-translate-y-0.5 flex items-center gap-2"
              style={{ boxShadow: '0 12px 40px rgba(255,182,5,0.35)' }}
            >
              Book a Call &rarr;
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-blue-deep hover:text-brand-gold-light focus:outline-none p-2 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 76px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-[16px] border-t border-brand-border overflow-y-auto"
          >
            <div className="px-5 pt-8 pb-24 space-y-6 font-dm h-full">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div className="text-brand-gold font-bold px-3 uppercase tracking-wider text-xs font-dm">
                        {link.name}
                      </div>
                      <div className="pl-3 space-y-2 border-l border-brand-border ml-3">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2.5 text-[15px] font-medium text-gray-600 hover:text-brand-blue-deep hover:bg-brand-muted rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-[17px] font-medium text-brand-blue-deep hover:text-brand-gold hover:bg-brand-muted rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-8 mt-8 border-t border-brand-border">
                <Link
                  href="/free-strategy-call"
                  onClick={() => setIsOpen(false)}
                  className="font-dm font-bold flex w-full items-center justify-center px-6 py-4.5 bg-brand-gold text-brand-ink rounded-full transition-all duration-300 hover:bg-brand-gold-light text-[16px]"
                  style={{ boxShadow: '0 8px 30px rgba(255,182,5,0.3)' }}
                >
                  Book Free Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
