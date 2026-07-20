import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiTarget, FiGlobe, FiClock, FiSearch, FiLayout, FiPieChart } from "react-icons/fi";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "#1 Digital Marketing Agency USA | SEO & Ads | BizBox Story",
  description: "Top-rated digital marketing agency in the USA. AI SEO, Google Ads, Facebook ads, content marketing & B2B lead generation for businesses in New York, California, Texas & Florida.",
  keywords: [
    "digital marketing agency USA",
    "SEO services in USA",
    "Google Ads management USA",
    "lead generation services USA",
    "content marketing agency USA",
    "affordable SEO services for small businesses USA",
    "local SEO services USA",
    "best SEO company in United States",
    "Facebook ads agency for small business USA",
    "PPC services USA",
    "B2B lead generation services USA",
    "digital marketing agency New York",
    "SEO agency California",
    "digital marketing Texas",
    "SEO company Florida"
  ],
  authors: [{ name: "Shay Mehta", url: "https://shaymehta.com" }],
  publisher: "BizBox Story",
  alternates: {
    canonical: "https://bizboxstory.com/digital-marketing-agency-united-states",
  },
  openGraph: {
    title: "#1 Digital Marketing Agency USA | BizBox Story",
    description: "Top-rated digital marketing agency serving businesses across the United States. AI SEO, Google Ads, content marketing & lead generation that drives real revenue.",
    url: "https://bizboxstory.com/digital-marketing-agency-united-states",
    siteName: "BizBox Story",
    images: [
      {
        url: "https://bizboxstory.com/images/services/seo.webp",
        width: 1200,
        height: 630,
        alt: "BizBox Story - Digital Marketing Agency USA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Digital Marketing Agency USA | BizBox Story",
    description: "AI SEO, Google Ads, content marketing & lead generation for US businesses. Book a free strategy call today.",
    images: ["https://bizboxstory.com/images/services/seo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function UnitedStatesPage() {
  const faqs = [
    {
      q: "What makes your digital marketing agency different from others in the United States?",
      a: "We focus exclusively on revenue-driven results. Unlike agencies that report on vanity metrics, we build comprehensive growth engines using AI SEO, engaging content, and optimized ads to ensure scalable business growth and a strong ROI for US businesses."
    },
    {
      q: "Do you work with local businesses or nationwide enterprises in the United States?",
      a: "We partner with both. Whether you need local Google My Business optimization to capture foot traffic in a specific US city or nationwide SEO to dominate broad search terms, our strategies are highly adaptable."
    },
    {
      q: "How long does it take to see results from AI SEO?",
      a: "While paid ads can generate immediate leads, our AI-powered SEO strategies typically begin showing significant improvements in search rankings and organic traffic within 3 to 6 months for most competitive markets in the United States."
    },
    {
      q: "Can you handle our social media and content marketing together?",
      a: "Yes, we offer comprehensive services. We perfectly align your content marketing with your social media management to ensure your brand message is consistent, authoritative, and highly engaging across all platforms in the United States."
    },
    {
      q: "How do we get started with your services?",
      a: "Getting started is simple. Book a free strategy call with our experts. We will thoroughly audit your current digital presence and propose a custom roadmap tailored to your specific business goals in the US market."
    },
    {
      q: "Do you offer affordable SEO services for small businesses in the USA?",
      a: "Yes! We specialize in affordable SEO services for small businesses across the United States. Our packages are designed to deliver maximum ROI for SMEs in competitive markets like New York, California, Texas, Florida, and Chicago, without the bloated agency fees."
    },
    {
      q: "What is B2B lead generation and how does it work for US businesses?",
      a: "B2B lead generation is the process of attracting and converting potential business clients into qualified prospects. For US businesses, we use a combination of SEO content, LinkedIn outreach, Google Ads, and landing page optimization to build a consistent pipeline of high-quality, sales-ready leads."
    },
    {
      q: "Which US cities do you provide digital marketing services in?",
      a: "We serve clients across the entire United States — from New York and Los Angeles to Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, and San Jose. Our strategies are tailored to local market dynamics whether you are targeting a single city or the entire country."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "BizBox Story",
              "url": "https://bizboxstory.com/digital-marketing-agency-united-states",
              "logo": "https://bizboxstory.com/images/logo.png",
              "description": "BizBox Story is a top-rated digital marketing agency in the United States offering AI SEO, Google Ads management, Facebook ads, content marketing, and B2B lead generation services for small and medium businesses.",
              "priceRange": "$$",
              "telephone": "+1-774-991-2610",
              "email": "info@bizboxstory.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1285 Main St",
                "addressLocality": "Holden",
                "addressRegion": "MA",
                "postalCode": "01520",
                "addressCountry": "US"
              },
              "foundingDate": "2018",
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "City", "name": "New York" },
                { "@type": "City", "name": "Los Angeles" },
                { "@type": "City", "name": "Chicago" },
                { "@type": "City", "name": "Houston" },
                { "@type": "City", "name": "Phoenix" },
                { "@type": "City", "name": "Dallas" },
                { "@type": "City", "name": "San Diego" },
                { "@type": "City", "name": "Miami" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services USA",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services USA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management USA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facebook Ads Agency USA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing Agency USA" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Lead Generation Services USA" } }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/bizboxstory",
                "https://www.instagram.com/bizboxstory"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bizboxstory.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Digital Marketing Agency USA",
                  "item": "https://bizboxstory.com/digital-marketing-agency-united-states"
                }
              ]
            }
          ]),
        }}
      />

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#080c18]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
            🇺🇸 Serving The United States
          </span>
          <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-tight max-w-5xl mx-auto">
            Leading Digital Marketing Agency in the <span className="text-brand-gold italic">United States</span>
          </h1>
          <p className="mt-8 font-dm text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Helping US businesses scale with AI-driven SEO, high-converting Google & Facebook Ads, and revenue-focused content marketing. We don't just run campaigns—we build powerful growth engines tailored specifically for the competitive American market.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/free-strategy-call" className="font-dm font-bold text-lg px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-[0_10px_30px_rgba(255,182,5,0.3)] hover:-translate-y-1">
              Get a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink mb-6 leading-tight">
                Transforming How American Businesses Grow Online
              </h2>
              <div className="w-16 h-1 bg-brand-gold mb-8 rounded-full" />
              <div className="space-y-6 font-dm text-gray-600 text-lg leading-relaxed">
                <p>
                  As a premier <strong>digital marketing agency in the United States</strong>, BizBox Story is committed to transforming how American businesses grow online. Whether you are a local SME in <strong>New York</strong>, a growing brand in <strong>California</strong>, or a nationwide enterprise across <strong>Texas</strong>, <strong>Florida</strong>, and <strong>Chicago</strong>, we offer comprehensive digital marketing services tailored to your specific US market demands. From dominating search results with advanced <strong>AI SEO</strong> to generating high-quality leads through targeted ad campaigns, our ultimate goal is tangible business growth.
                </p>
                <p>
                  We understand the fiercely competitive landscape of the United States market, bringing years of global experience, proven reliability, and unmatched quality to every project. We know you are tired of agencies that sell empty promises. That is why we partner with you to build a sustainable online presence that drives real revenue, not just vanity metrics — whether you need <strong>local SEO services</strong>, <strong>Google Ads management</strong>, or a full <strong>content marketing strategy</strong> for your US business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-square border border-brand-border shadow-lg group">
                <Image
                  src="/images/services/seo.webp"
                  alt="BizBox Story digital marketing agency team analyzing US market data for SEO and Google Ads"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-brand-border hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
                    <FiTrendingUp className="text-2xl" />
                  </div>
                  <div>
                    <div className="font-fraunces font-bold text-2xl text-brand-blue-deep">+340%</div>
                    <div className="font-dm text-sm text-gray-500 uppercase tracking-widest font-semibold mt-1">ROI Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO PRESENTATION ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Hear From Our Team
            </span>
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep mt-3">
              Why US Businesses Choose <span className="text-brand-gold italic">BizBox Story</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-[#080c18]">
              <iframe
                src="https://www.youtube.com/embed/8fjtb6T8vzY?rel=0"
                title="BizBox Story Digital Marketing USA"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES IN THE US ──────────────────────────────────────── */}
      <section className="py-24 bg-brand-muted border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Tailored Solutions
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3">
              Our Services in the <span className="text-brand-gold italic">United States</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6">
                <FiSearch className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">AI-Powered SEO Services</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Dominate local and national search rankings across the United States. Our <Link href="/services/seo-services" className="text-brand-gold font-semibold hover:underline">AI-powered SEO strategies</Link> ensure your website appears right when potential customers are actively searching for your solutions. For United States businesses, this means higher organic traffic, stronger brand visibility, and a significant boost in qualified leads without relying entirely on paid advertising.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6">
                <FiTarget className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Google & Facebook Ads</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Maximize your return on ad spend in the highly competitive United States market. We design, launch, and manage high-converting <Link href="/services/google-facebook-ads" className="text-brand-gold font-semibold hover:underline">Google and Facebook ad campaigns</Link> that target your ideal audience with precision. Experience a lower cost-per-acquisition and a steady stream of ready-to-buy customers tailored specifically for US-based companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6">
                <FiLayout className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Content Marketing & Brand Presence</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Stand out in the United States with authoritative, revenue-focused content. Our <Link href="/services/content-marketing" className="text-brand-gold font-semibold hover:underline">content marketing</Link> and <Link href="/services/brand-presence-consulting" className="text-brand-gold font-semibold hover:underline">brand presence consulting</Link> build immediate trust and establish you as an industry leader. For businesses in the United States, we create compelling narratives that engage your audience and naturally guide them through your sales funnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6">
                <FiPieChart className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Lead Generation & GMB Optimization</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Capture high-intent local leads with <Link href="/services/lead-generation" className="text-brand-gold font-semibold hover:underline">targeted lead generation</Link> and <Link href="/services/google-my-business" className="text-brand-gold font-semibold hover:underline">Google My Business (GMB) optimization</Link>. We ensure your business is easily discoverable on local US maps and search results. The outcome is a consistent pipeline of local inquiries and increased foot traffic for your physical or service-area business in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                The BizBox Advantage
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 mb-8">
                Why Choose <span className="text-brand-gold italic">BizBox Story</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold">
                    <FiTrendingUp className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Proven Years of Experience</h4>
                    <p className="font-dm text-gray-600">We bring over 6 years of hands-on experience helping SMEs scale globally, with deep expertise navigating the specific demands of the US market.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold">
                    <FiTarget className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Revenue-Obsessed Approach</h4>
                    <p className="font-dm text-gray-600">We focus exclusively on your actual business growth and ROI, ignoring superficial vanity metrics like impressions or empty follower counts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Global Expertise, Local Focus</h4>
                    <p className="font-dm text-gray-600">Our global team understands international best practices while applying highly localized strategies specifically designed for clients across the United States.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Rapid Response Time & Support</h4>
                    <p className="font-dm text-gray-600">We prioritize clear communication and fast turnaround times. You will always know exactly how your campaigns are performing with our dedicated, transparent support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#080c18] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px]" />
              <h3 className="font-fraunces text-3xl font-bold mb-8 relative z-10">How It Works</h3>
              <ul className="space-y-6 relative z-10 font-dm">
                <li className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="block text-lg mb-1">Discovery & Audit:</strong>
                    <span className="text-white/70">We analyze your current digital presence, target audience, and direct competitors within the United States market.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="block text-lg mb-1">Strategy Development:</strong>
                    <span className="text-white/70">Our team crafts a custom, multi-channel growth engine tailored to your specific revenue and lead generation goals.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="block text-lg mb-1">Execution & Optimization:</strong>
                    <span className="text-white/70">We launch your customized campaigns and continuously optimize them for maximum performance and cost-efficiency.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="block text-lg mb-1">Scale Your Revenue:</strong>
                    <span className="text-white/70">Watch your business grow with sustainable leads. Ready to dominate your market? <Link href="/free-strategy-call" className="text-brand-gold underline">Book Your Free Strategy Call.</Link></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED US CASE STUDIES ──────────────────────────────────────── */}
      <section className="py-24 bg-brand-muted border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Proven Results
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 mb-6">
              Featured <span className="text-brand-gold italic">US Case Studies</span>
            </h2>
            <p className="font-dm text-gray-600 max-w-2xl mx-auto text-lg">
              See how we have helped businesses across the United States dominate their markets and scale their revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Torch Cannabis */}
            <div className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <Image
                  src="/images/case-studies/torch-cannabis-home.svg"
                  alt="Torch Cannabis Dispensary Case Study"
                  fill
                  className="object-cover p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Retail
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Torch Cannabis
                </h3>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped a fast-growing US dispensary build local brand awareness, hit 320K+ video views, and drive 193% engagement growth through authentic social content.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">320K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Video Views</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+193%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Engagement</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-border/50">
                  <Link
                    href="/case-studies/torch-cannabis"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Plugd */}
            <div className="bg-white rounded-3xl border border-brand-border overflow-hidden group flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-ink/5">
                <Image
                  src="/images/case-studies/plugd-home.png"
                  alt="Plugd Cannabis Case Study"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-blue-deep text-xs font-bold rounded-full uppercase tracking-wider font-dm">
                    Cannabis Retail
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  Plugd
                </h3>
                <p className="font-dm text-gray-500 mb-6 line-clamp-3">
                  How we helped Plugd build a community-driven US cannabis brand with 80K+ organic reach and 137% engagement growth through authentic, culture-first social content.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">80K+</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Organic Reach</p>
                  </div>
                  <div className="bg-brand-surface/50 p-4 rounded-2xl border border-brand-border/50">
                    <p className="font-dm text-brand-gold font-bold text-2xl">+137%</p>
                    <p className="font-dm text-xs text-gray-500 uppercase tracking-widest mt-1">Engagement</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-brand-border/50">
                  <Link
                    href="/case-studies/plugd"
                    className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors duration-300 group/link"
                  >
                    Read Full Story
                    <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 font-dm font-bold text-brand-ink border border-brand-border px-8 py-3 rounded-full hover:border-brand-gold hover:text-brand-blue-deep transition-colors bg-white shadow-sm hover:shadow-md">
              View All Case Studies <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
            Success Stories
          </span>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 mb-16">
            What Our <span className="text-brand-gold italic">US Clients</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
              <div className="text-brand-gold text-lg tracking-wider mb-4">★★★★★</div>
              <p className="font-dm text-gray-700 text-lg leading-relaxed italic mb-6">
                "Partnering with BizBox Story completely transformed our online visibility. Their targeted approach to the United States market doubled our organic leads within just four months. They truly understand what drives real revenue."
              </p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">M</div>
                <div>
                  <div className="font-dm font-bold text-brand-blue-deep">Michael T.</div>
                  <div className="font-dm text-sm text-gray-500">Operations Director, US Logistics Firm</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
              <div className="text-brand-gold text-lg tracking-wider mb-4">★★★★★</div>
              <p className="font-dm text-gray-700 text-lg leading-relaxed italic mb-6">
                "We were tired of agencies delivering empty promises. BizBox Story stepped in, restructured our Google Ads, and optimized our local SEO. We are finally seeing a strong ROI across our retail locations in the United States."
              </p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">S</div>
                <div>
                  <div className="font-dm font-bold text-brand-blue-deep">Sarah L.</div>
                  <div className="font-dm text-sm text-gray-500">Founder, National Retail Brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── OUR EXPERTISE ─────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-fraunces text-2xl font-bold text-brand-ink mb-8">Specialized Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "digital marketing agency USA",
              "SEO services in USA",
              "Google Ads management USA",
              "lead generation services USA",
              "content marketing agency USA",
              "affordable SEO services for small businesses USA",
              "local SEO services USA",
              "best SEO company in United States",
              "Google Ads management agency USA",
              "Facebook ads agency for small business USA",
              "PPC services USA",
              "content writing services USA",
              "blog writing agency USA",
              "SEO content writing company",
              "lead generation agency USA",
              "B2B lead generation services USA",
              "qualified leads for small business USA"
            ].map((keyword, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-brand-border rounded-full text-gray-800 font-dm text-sm font-semibold shadow-sm hover:border-brand-gold transition-colors">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE LINKS ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-fraunces text-2xl font-bold text-brand-ink mb-8">Explore More Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/cbd-seo" className="px-6 py-3 border border-brand-border rounded-full text-brand-ink font-dm hover:border-brand-gold transition-colors">CBD SEO</Link>
            <Link href="/services/graphic-website-design" className="px-6 py-3 border border-brand-border rounded-full text-brand-ink font-dm hover:border-brand-gold transition-colors">Graphic & Website Design</Link>
            <Link href="/services/social-media-management" className="px-6 py-3 border border-brand-border rounded-full text-brand-ink font-dm hover:border-brand-gold transition-colors">Social Media Management</Link>
            <Link href="/blogs" className="px-6 py-3 border border-brand-border rounded-full text-brand-ink font-dm hover:border-brand-gold transition-colors">Read our Digital Marketing Blogs</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-muted border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl font-bold text-brand-blue-deep">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-brand-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 sm:px-8 sm:py-6 focus:outline-none">
                  <span className="font-fraunces text-lg sm:text-xl font-bold text-brand-blue-deep pr-8">{faq.q}</span>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold group-open:rotate-180 transition-transform duration-300">
                    <FiArrowRight className="rotate-90 group-open:rotate-[-90deg] transition-transform" />
                  </span>
                </summary>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 font-dm text-gray-600 leading-relaxed text-base border-t border-brand-border/50 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-4xl font-bold text-brand-ink mb-6">
            Ready to Scale Your Business in the United States?
          </h2>
          <p className="font-dm text-lg text-gray-600 mb-10 leading-relaxed">
            If you are looking for a digital marketing agency in the United States that prioritizes your bottom line, BizBox Story is your ideal partner. Stop wasting budget on generic campaigns that do not convert. Let us build a customized growth engine that drives sustainable revenue, high-quality leads, and long-term digital success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-strategy-call" className="font-dm font-bold text-lg px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all shadow-lg hover:-translate-y-1">
              Book Your Free Strategy Call
            </Link>
            <Link href="/services/seo-services" className="font-dm font-bold text-lg px-8 py-4 border border-brand-ink text-brand-ink rounded-full hover:bg-brand-ink hover:text-white transition-all">
              Explore Our SEO Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* ── GLOBAL BOTTOM CTA ────────────────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
