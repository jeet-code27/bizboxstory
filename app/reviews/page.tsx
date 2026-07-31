"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiStar, FiCheckCircle, FiArrowRight, FiPaperclip, FiThumbsUp, FiMessageSquare } from "react-icons/fi";

const allReviews = [
  {
    id: "shalini-verma",
    name: "Shalini Verma Sigamani",
    role: "Small Business Owner",
    location: "🇮🇳 India",
    rating: 5,
    date: "3 months ago",
    badge: "Google Review",
    stats: "7 reviews",
    title: "Finally Found a Digital Marketing Agency That Delivers Results!",
    review: "I spent months struggling to get my small business visible online. My website traffic was nonexistent, and I was barely getting any leads through social media. That all changed when I partnered with Biz Box Story's digital team! Within 60 days, they completely transformed my online presence. Their SEO services got my website ranking on the first page of Google for my target keywords, and their social media marketing strategy increased my Instagram engagement by 340%. The content creation team understood my brand voice perfectly. If you're looking for the best digital marketing agency that actually understands small business needs and delivers measurable ROI, Biz Box Story is the answer. Highly recommend their services!",
    category: "SEO & Web Development"
  },
  {
    id: "erica-jackson",
    name: "Erica Jackson",
    role: "Founder, Steady English Academy",
    location: "🇺🇸 USA",
    rating: 5,
    date: "11 months ago",
    badge: "Google Review",
    stats: "1 review · 1 photo",
    attachment: "Steady English Academy Logo Attached",
    review: "Besides being a cracking digital marketing agency they are a great business consultant. My startup needed everything including pitch decks, funding, offline marketing and they helped me with all. Made flyers, got me influencers, connected me with angel investors and VC. My posts were there are like clockwork and weekly team meetings were a huge help. Plus Shay has lived in USA so language, culture etc. and understanding my business was never a problem",
    category: "Digital Marketing & Consulting"
  },
  {
    id: "prateek-jain",
    name: "Prateek Jain",
    role: "Local Service Provider",
    location: "🇮🇳 India",
    rating: 5,
    date: "3 months ago",
    badge: "Google Review",
    stats: "4 reviews",
    title: "Solved My Lead Generation Problem in Record Time",
    review: "As a local service provider, I was throwing money at Facebook ads with zero results. Biz Box Story's digital marketing team did a complete audit of my online marketing strategy and identified exactly where I was going wrong. They rebuilt my landing pages, optimized my Google Business Profile for local SEO, and created a targeted ad campaign that actually converts. In just 3 months, my cost per lead dropped by 65% and my conversion rate tripled! Their expertise in both paid advertising and organic search optimization is unmatched. If you need a digital marketing agency that combines strategy with execution, this is your team!",
    category: "Lead Gen & Local SEO"
  },
  {
    id: "narender-kumar",
    name: "Narender Kumar",
    role: "Owner, The Hive Cafe",
    location: "🇮🇳 India",
    rating: 5,
    date: "2 years ago",
    badge: "Google Review",
    stats: "1 review · 1 photo",
    attachment: "The Hive Cafe Menu & Outdoor Banners Attached",
    review: "Our cafe social media is taken care by Biz Box Story, they set up our Instagram, Facebook and got us group bookings and increase sales, their work on Google business profile got us a lot of visibility and orders. They completely designed our menu, outdoor banners, flyers and Zomato/Swiggy ads. They enrolled us on Swiggy platform also.",
    category: "Social Media & Branding"
  },
  {
    id: "shuchi-singh",
    name: "Shuchi Singh",
    role: "Founder, Saabanvali Beauty Brand",
    location: "🇮🇳 India",
    rating: 5,
    date: "2 years ago",
    badge: "Google Review",
    stats: "6 reviews",
    review: "I have used Biz Box Story's services in setting up the website for my beauty brand, Saabanvali. The team has been meticulous with timelines, and the quality of work has been more than satisfactory. Indeed, they are very unlike other agencies! I have outsourced my entire social media and performance marketing to them, which leaves me with more time to focus on other aspects of business. Very happy with the services.",
    category: "E-Commerce & Web Design"
  },
  {
    id: "sakshi-mishra",
    name: "Sakshi Mishra",
    role: "Website & Digital Client",
    location: "🇮🇳 India",
    rating: 5,
    date: "2 months ago",
    badge: "Google Review",
    stats: "1 review",
    review: "Really happy with the service from BizBoxStory. Their SEO and digital marketing strategies actually helped my website get better visibility and more traffic. The team is friendly, supportive, and easy to work with. Definitely a good choice for website development and online marketing services.",
    category: "SEO & Web Development"
  },
  {
    id: "deepti-sachdev",
    name: "Deepti Sachdev",
    role: "Business Owner",
    location: "🇮🇳 India",
    rating: 5,
    date: "2 months ago",
    badge: "Google Review",
    stats: "9 reviews",
    review: "Outstanding experience with Bizz box ! They built a professional, mobile-friendly website that perfectly captures our brand. Super responsive team and excellent post-launch support. Our online presence has improved dramatically. Highly recommended! ⭐️⭐️⭐️⭐️⭐️",
    category: "SEO & Web Development"
  },
  {
    id: "mike-harrison",
    name: "Mike Harrison",
    role: "CEO, Nirvana DC Dispensary",
    location: "🇺🇸 Massachusetts, USA",
    rating: 5,
    date: "Verified Client",
    badge: "Verified Business Owner",
    review: "BizBox Story completely transformed our online presence. Within 90 days, our organic traffic doubled and we were ranking on page 1 for our top keywords. The team is incredibly responsive and truly invested in our success.",
    category: "SEO & Web Development"
  },
  {
    id: "james-oconnor",
    name: "James O'Connor",
    role: "Owner, Zaza City",
    location: "🇺🇸 New York, USA",
    rating: 5,
    date: "Verified Client",
    badge: "Verified Business Owner",
    review: "The ROI from their Google Ads management paid for itself in the first month. They don't just run campaigns — they actually optimize aggressively and tell you exactly what's working and what isn't.",
    category: "Lead Gen & Local SEO"
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Founder, TechStart India",
    location: "🇮🇳 Bangalore, India",
    rating: 5,
    date: "Verified Client",
    badge: "Verified Startup Founder",
    review: "We'd tried 3 agencies before BizBox Story. None of them could explain what they were actually doing. Shay's team gave us clarity, consistency, and most importantly — real leads coming in every month.",
    category: "Lead Gen & Local SEO"
  }
];

const categories = ["All Reviews", "Google Reviews", "SEO & Web Development", "Lead Gen & Local SEO", "Social Media & Branding"];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Reviews");

  const filteredReviews = selectedCategory === "All Reviews"
    ? allReviews
    : selectedCategory === "Google Reviews"
    ? allReviews.filter((r) => r.badge === "Google Review")
    : allReviews.filter((r) => r.category === selectedCategory);

  return (
    <div className="bg-brand-surface min-h-screen pb-24 font-dm">
      
      {/* ── HERO HEADER ────────────────────────────────────────────────── */}
      <section className="bg-[#080c18] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs sm:text-sm uppercase tracking-widest font-bold mb-4 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
            <FcGoogle className="text-base" /> Verified Client Reviews &amp; Ratings
          </span>

          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            What Our Clients Say About <span className="text-brand-gold italic">BizBox Story</span>
          </h1>

          <p className="mt-4 font-dm text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real, unedited reviews from business owners, founders, and local service providers scaling their revenue with our AI SEO, Web Development &amp; PPC Ads.
          </p>

          {/* Aggregate Rating Stat Bar */}
          <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <div>
              <div className="flex justify-center text-brand-gold gap-1 text-sm mb-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" />
                ))}
              </div>
              <p className="font-fraunces font-bold text-2xl text-white">4.9 / 5.0</p>
              <p className="font-dm text-xs text-gray-400">Overall Client Rating</p>
            </div>

            <div>
              <p className="font-fraunces font-bold text-2xl text-brand-gold mt-4 md:mt-0">50+</p>
              <p className="font-dm text-xs text-gray-400">SMEs &amp; Brands Scaled</p>
            </div>

            <div>
              <p className="font-fraunces font-bold text-2xl text-white mt-4 md:mt-0">100%</p>
              <p className="font-dm text-xs text-gray-400">Verified Client Feedback</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 text-brand-gold text-lg mt-3 md:mt-0">
                <FcGoogle className="text-2xl" />
                <span className="font-fraunces font-bold text-white text-xl">Google</span>
              </div>
              <p className="font-dm text-xs text-gray-400">Verified Reviews</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── FILTER CATEGORIES & REVIEWS GRID ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-dm text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-blue-deep text-white shadow-md"
                  : "bg-white text-gray-700 border border-brand-border hover:border-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-brand-border p-7 sm:p-8 flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header: User Avatar, Name, Badge */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-border/60 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-ink font-fraunces font-bold flex items-center justify-center text-base shrink-0">
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-dm font-bold text-brand-blue-deep text-base group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-dm text-xs text-gray-500">{item.role}</p>
                      <p className="font-dm text-xs font-semibold text-brand-gold mt-0.5">{item.location}</p>
                    </div>
                  </div>

                  {item.badge === "Google Review" ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 bg-gray-50 text-gray-700 border border-gray-200 rounded-full shrink-0">
                      <FcGoogle className="text-sm" /> Google
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full shrink-0">
                      <FiCheckCircle className="text-xs" /> Verified
                    </span>
                  )}
                </div>

                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-brand-gold gap-1 text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                {/* Optional Review Title */}
                {item.title && (
                  <h4 className="font-fraunces font-bold text-lg text-brand-blue-deep mb-2">
                    &quot;{item.title}&quot;
                  </h4>
                )}

                {/* Review Text */}
                <p className="font-dm text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &quot;{item.review}&quot;
                </p>
              </div>

              <div>
                {/* Optional Photo Attachment Badge */}
                {item.attachment && (
                  <div className="mb-4 px-3 py-2 bg-brand-surface rounded-xl border border-brand-border text-xs text-gray-600 flex items-center gap-2 font-dm">
                    <FiPaperclip className="text-brand-gold text-sm flex-shrink-0" />
                    <span>{item.attachment}</span>
                  </div>
                )}

                {/* Footer Tag */}
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-md">
                    {item.category}
                  </span>
                  {item.stats && (
                    <span className="text-[11px] text-gray-400 font-dm">
                      {item.stats}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── CALL TO ACTION BOX ────────────────────────────────────────── */}
        <div className="mt-20 bg-[#080c18] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-brand-gold/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[90px] pointer-events-none" />
          <h2 className="font-fraunces text-3xl sm:text-4xl font-bold mb-4 relative z-10">
            Ready to Write Your Own <span className="text-brand-gold italic">Success Story</span>?
          </h2>
          <p className="font-dm text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Join 50+ business owners scaling their leads, revenue, and Google rankings with BizBox Story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-dm font-bold text-base sm:text-lg px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_10px_30px_rgba(255,182,5,0.35)] cursor-pointer relative z-10"
          >
            Get Free Growth Audit &rarr;
          </Link>
        </div>

      </section>

    </div>
  );
}
