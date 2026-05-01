"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiPlus, FiMinus, FiArrowRight, FiSearch, FiMessageCircle } from "react-icons/fi";

const faqData = [
  {
    category: "General & Agency",
    items: [
      {
        q: "What makes BizBox Story different from other marketing agencies?",
        a: "We focus exclusively on revenue-driven digital marketing for SMEs. We don't just chase vanity metrics; we build strategies that directly impact your bottom line through tailored AI SEO, data-driven content, and targeted ads."
      },
      {
        q: "Do you work with international clients?",
        a: "Yes! We serve clients globally, with a strong focus on the US, UK, Australia, Canada, Dubai, and India. Our diverse team understands the nuances of local markets and international SEO strategies."
      },
      {
        q: "How do you measure the success of a campaign?",
        a: "We measure success using core KPIs like organic traffic growth, keyword rankings, cost per acquisition (CPA), lead quality, and ultimately, your return on investment (ROI). We provide transparent, regular reporting so you're always in the loop."
      }
    ]
  },
  {
    category: "Search Engine Optimisation (SEO)",
    items: [
      {
        q: "How long does it take to see results from SEO?",
        a: "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements in rankings and traffic within 3 to 6 months. However, highly competitive markets may require more time to dominate the first page."
      },
      {
        q: "Do you guarantee #1 rankings on Google?",
        a: "No reputable agency can guarantee a #1 spot on Google due to the ever-changing nature of search algorithms. However, we have a proven track record of consistently achieving first-page rankings for our clients across various industries."
      },
      {
        q: "What is AI SEO, and how do you use it?",
        a: "AI SEO involves using artificial intelligence tools to analyze search trends, optimize content, and understand user intent better. We use AI to supplement our expert strategies, allowing for faster data analysis and more precise content targeting."
      }
    ]
  },
  {
    category: "CBD & Dispensary SEO",
    items: [
      {
        q: "Why is SEO different for CBD brands and dispensaries?",
        a: "The CBD industry faces strict advertising restrictions on platforms like Google Ads and Facebook. This makes organic SEO the most reliable and cost-effective way to generate traffic and sales without risking account suspensions."
      },
      {
        q: "How do you optimize for local dispensaries?",
        a: "We use hyper-local SEO strategies, including optimizing your Google Business Profile, building local citations, targeting location-specific keywords (e.g., 'CBD dispensary near me'), and earning localized backlinks to drive foot traffic."
      },
      {
        q: "Can you help rank CBD products nationally?",
        a: "Absolutely. For e-commerce CBD brands, we focus on technical SEO, high-intent product keywords, educational blog content, and authority-building backlinks to compete on a national level."
      }
    ]
  },
  {
    category: "Ads, Social Media & Content",
    items: [
      {
        q: "Which platforms are best for paid advertising?",
        a: "It depends on your audience and goals. Google Ads is excellent for capturing high-intent search traffic, while Facebook and Instagram Ads are great for brand awareness, retargeting, and impulse purchases."
      },
      {
        q: "How often should I post on social media?",
        a: "Quality always beats quantity. For most businesses, posting 3 to 5 high-quality, engaging pieces of content per week is more effective than posting daily filler. We help create a sustainable and impactful content calendar."
      },
      {
        q: "Do you create the content for my website and blog?",
        a: "Yes! Our team of expert copywriters and content marketers creates SEO-optimized, engaging, and authoritative content tailored to your brand voice and target audience."
      }
    ]
  }
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Filter FAQs based on search query
  const filteredFaqData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  // Generate flat list of FAQs for JSON-LD
  const allFaqs = faqData.flatMap(cat => cat.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO SECTION ──────────────────────────────────────────────────*/}
      <section 
        className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden bg-brand-surface"
      >
        {/* Abstract shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-blue-deep/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Knowledge Base
            </span>
            <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-blue-deep leading-tight">
              Frequently Asked <span className="italic text-brand-gold">Questions</span>
            </h1>
            <p className="mt-6 font-dm text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our digital marketing, SEO, and specialized agency services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-xl mx-auto relative"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-border bg-white font-dm text-brand-blue-deep focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/20 transition-all shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────────*/}
      <section className="pb-24 bg-brand-surface relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sidebar Categories */}
            {!searchQuery && (
              <div className="lg:w-1/4 flex-shrink-0">
                <div className="sticky top-32 bg-white rounded-3xl p-6 border border-brand-border" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
                  <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-4">Categories</h3>
                  <div className="space-y-2 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                    {faqData.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCategory(cat.category)}
                        className={`flex-shrink-0 text-left px-5 py-3 rounded-xl font-dm text-sm transition-all duration-300 ${
                          activeCategory === cat.category 
                            ? "bg-brand-gold/10 text-brand-gold font-bold" 
                            : "text-gray-500 hover:bg-gray-50 hover:text-brand-blue-deep font-medium"
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ List */}
            <div className={`flex-1 ${searchQuery ? "max-w-4xl mx-auto" : ""}`}>
              {filteredFaqData.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-brand-border">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <FiSearch className="w-6 h-6" />
                  </div>
                  <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-2">No results found</h3>
                  <p className="font-dm text-gray-500">We couldn&apos;t find any FAQs matching &quot;{searchQuery}&quot;.</p>
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="mt-6 text-brand-gold font-dm font-semibold hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {filteredFaqData.map((category, catIndex) => {
                    // If not searching, only show active category
                    if (!searchQuery && category.category !== activeCategory) return null;

                    return (
                      <div key={catIndex} className="animate-fade-in">
                        {searchQuery && (
                          <h2 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-6">
                            {category.category}
                          </h2>
                        )}
                        
                        <div className="space-y-4">
                          {category.items.map((faq, faqIndex) => {
                            const id = `${catIndex}-${faqIndex}`;
                            const isOpen = openFaq === id;

                            return (
                              <div
                                key={faqIndex}
                                className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-300 hover:border-brand-gold/30"
                                style={{ boxShadow: isOpen ? "0 10px 40px rgba(0,0,0,0.05)" : "0 4px 20px rgba(0,0,0,0.02)" }}
                              >
                                <button
                                  onClick={() => toggleFaq(id)}
                                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left group"
                                  aria-expanded={isOpen}
                                >
                                  <span className="font-dm font-bold text-brand-blue-deep text-lg pr-6 group-hover:text-brand-gold transition-colors leading-snug">
                                    {faq.q}
                                  </span>
                                  <span className={`flex-shrink-0 w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold transition-all duration-300 ${isOpen ? "bg-brand-gold text-brand-ink border-brand-gold" : "bg-brand-surface group-hover:bg-brand-gold/10"}`}>
                                    {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                                  </span>
                                </button>

                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.35, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-6 sm:px-8 pb-8 font-dm text-gray-600 text-base leading-relaxed border-t border-brand-border pt-6">
                                        {faq.a}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────────────*/}
      <section className="py-24 relative overflow-hidden bg-brand-muted border-t border-brand-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white border border-brand-border rounded-2xl flex items-center justify-center text-brand-gold mx-auto mb-6 shadow-sm">
            <FiMessageCircle className="w-8 h-8" />
          </div>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-4 leading-tight">
            Still have <span className="italic text-brand-gold">questions?</span>
          </h2>
          <p className="mt-5 font-dm text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Our team is ready to help you with personalized insights for your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="font-dm font-semibold px-9 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-base shadow-lg shadow-brand-gold/30"
            >
              Contact Us Directly <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
