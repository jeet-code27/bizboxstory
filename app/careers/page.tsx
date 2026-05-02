"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGlobe, FiClock, FiTrendingUp, FiCoffee } from "react-icons/fi";

const jobs = [
  {
    title: "Performance Marketer",
    type: "Full-Time",
    location: "100% Remote",
    description: "Manage high-budget Meta & Google Ads campaigns to drive scaling growth for our clients."
  },
  {
    title: "SEO Specialist",
    type: "Full-Time",
    location: "100% Remote",
    description: "Lead technical SEO, keyword strategy, and organic content growth for global brands."
  },
  {
    title: "Social Media Manager",
    type: "Full-Time",
    location: "100% Remote",
    description: "Craft viral content strategies, manage communities, and define unique brand voices."
  },
  {
    title: "Website Designer",
    type: "Full-Time",
    location: "100% Remote",
    description: "Design and build premium, high-converting web experiences that combine beauty and functionality."
  },
  {
    title: "Video Editor",
    type: "Full-Time",
    location: "100% Remote",
    description: "Edit high-retention Reels, TikToks, and YouTube videos that drive massive engagement for our brands."
  },
  {
    title: "Digital Marketing Intern",
    type: "Internship",
    location: "100% Remote",
    description: "Learn the ropes of performance marketing and SEO while working hands-on with real client accounts."
  },
  {
    title: "Content Creation Intern",
    type: "Internship",
    location: "100% Remote",
    description: "Help ideate, script, and create authentic, engaging content across various social media platforms."
  }
];

export default function CareersPage() {
  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────────────────*/}
      <section className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden bg-brand-surface min-h-[70vh]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-blue-deep/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-sm font-bold rounded-full uppercase tracking-wider font-dm mb-6 border border-brand-gold/20">
              We Are Hiring
            </span>
            <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-blue-deep leading-tight">
              Work from <span className="italic text-brand-gold">Anywhere.</span><br />
              Grow Everywhere.
            </h1>
            <p className="mt-6 font-dm text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              BizBox Story is a 100% remote digital marketing agency. We believe in hiring the best talent, no matter where you set up your laptop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY JOIN US ───────────────────────────────────────────────────*/}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-4">
              Why Join BizBox Story?
            </h2>
            <p className="font-dm text-gray-500 text-lg max-w-2xl mx-auto">
              We trust our team to take ownership and deliver incredible results. Here is what you get when you work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-surface p-8 rounded-3xl border border-brand-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 shadow-sm">
                <FiGlobe className="w-8 h-8" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">100% Remote</h3>
              <p className="font-dm text-gray-600">Work from your living room, a cafe in Bali, or anywhere with WiFi.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-surface p-8 rounded-3xl border border-brand-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 shadow-sm">
                <FiClock className="w-8 h-8" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">Flexible Hours</h3>
              <p className="font-dm text-gray-600">We care about your output and impact, not the hours you punch in.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-brand-surface p-8 rounded-3xl border border-brand-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 shadow-sm">
                <FiTrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">Rapid Growth</h3>
              <p className="font-dm text-gray-600">Work with global brands and fast-growing startups to accelerate your career.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-brand-surface p-8 rounded-3xl border border-brand-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-gold mb-6 shadow-sm">
                <FiCoffee className="w-8 h-8" />
              </div>
              <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep mb-3">Zero Commute</h3>
              <p className="font-dm text-gray-600">Save hours every week. Spend more time living and less time in traffic.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ──────────────────────────────────────────────────*/}
      <section className="py-24 bg-brand-surface relative z-10 border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mb-4">
              Open Positions
            </h2>
            <p className="font-dm text-gray-500 text-lg">
              Find a role that fits your skills and apply today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-border flex flex-col group hover:border-brand-gold/50 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep group-hover:text-brand-gold transition-colors duration-300">
                    {job.title}
                  </h3>
                  <span className="px-3 py-1 bg-brand-surface text-brand-blue-deep text-xs font-bold rounded-full font-dm border border-brand-border/50">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-dm text-sm text-gray-500 mb-6">
                  <FiGlobe className="text-brand-gold" />
                  {job.location}
                </div>
                <p className="font-dm text-gray-600 mb-8 flex-grow">
                  {job.description}
                </p>
                <a
                  href="mailto:info@bizboxstory.com?subject=Application for [Job Title]"
                  className="mt-auto inline-flex items-center justify-center gap-2 font-dm font-bold text-brand-ink px-6 py-3 bg-brand-gold/10 rounded-full hover:bg-brand-gold hover:text-brand-ink transition-all duration-300"
                >
                  Apply via Email <FiArrowRight />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-10 rounded-3xl border border-brand-border shadow-sm">
            <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-3">
              Don't see a perfect fit?
            </h3>
            <p className="font-dm text-gray-600 mb-6">
              We are always on the lookout for talented people. Send us your resume anyway!
            </p>
            <a
              href="mailto:info@bizboxstory.com?subject=General Application"
              className="inline-flex items-center gap-2 font-dm font-bold text-brand-gold hover:text-brand-gold-light transition-colors duration-300"
            >
              Send General Application <FiArrowRight />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
