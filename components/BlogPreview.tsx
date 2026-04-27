"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const blogPosts = [
  {
    category: "AI SEO",
    title: "AiSEO, ASO, GEO & AISO: Key Differences Every Business Owner Must Know",
    excerpt: "Digital marketing is no longer just about ranking on Google. Discover the new landscape of search optimization.",
    date: "March 24, 2026",
    image: "/images/blog/ai-seo.webp",
    href: "/aiseo-aso-geo-differences"
  },
  {
    category: "Strategy",
    title: "AI Marketing for Traditional Businesses: Old Ways Meet New Tools",
    excerpt: "Classic businesses are discovering how AI-powered marketing can help them stay relevant and grow faster.",
    date: "February 28, 2026",
    image: "/images/blog/ai-marketing.jpg",
    href: "/ai-marketing-traditional-businesses"
  },
  {
    category: "SEO",
    title: "DIY SEO Failed? How to Hire the Right SEO Agency (3 Must-Ask Questions)",
    excerpt: "Watched YouTube tutorials. Tweaked meta tags. Wrote blogs. Six months later — zero growth. Here's what to do next.",
    date: "January 5, 2026",
    image: "/images/blog/seo-agency.webp",
    href: "/hire-right-seo-agency"
  }
];

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-brand-muted py-24 border-t border-brand-border overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div
           className="flex flex-col md:flex-row md:items-end justify-between gap-6"
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Our Insights
            </span>
            <h2 className="font-fraunces text-3xl lg:text-4xl font-bold text-brand-ink mt-3 leading-tight ">
              Marketing Intelligence From <br className="hidden lg:block" />
              Our Digital Experts
            </h2>
          </div>
          
          <Link
            href="/blogs"
            className="font-dm text-brand-gold hover:text-brand-gold-light transition-colors font-semibold flex items-center gap-2 group w-fit pb-1 border-b border-transparent hover:border-brand-gold/50"
          >
            View All Articles 
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg leading-none">&rarr;</span>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {blogPosts.map((post, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Link
                href={post.href}
                className="block h-full bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-brand-gold/30 shadow-sm hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-300 group flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-video w-full overflow-hidden bg-brand-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.category)}&background=f5f5f2&color=0f1b3d&font-size=0.25&size=600`;
                    }}
                  />
                  {/* Subtle Light Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block bg-brand-gold/10 text-brand-gold text-xs font-dm px-3 py-1.5 rounded-full font-semibold tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="font-fraunces font-bold text-xl text-brand-blue-deep leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="font-dm text-gray-600 text-sm mt-3 line-clamp-2 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Card Bottom Meta */}
                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-brand-border">
                    <span className="font-dm text-xs text-gray-500 font-medium">
                      {post.date}
                    </span>
                    <span className="text-brand-gold text-sm font-dm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                      Read More <span className="text-base leading-none">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
