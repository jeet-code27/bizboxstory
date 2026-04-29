import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiTarget, FiGlobe, FiClock, FiSearch, FiLayout, FiPieChart } from "react-icons/fi";
import BottomCTA from "@/components/BottomCTA";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Australia | BizBox Story",
  description: "Top digital marketing agency in Australia. BizBox Story drives growth with AI SEO, Google Ads, content marketing & lead generation for Australian businesses.",
  keywords: ["digital marketing agency Australia", "SEO Australia", "Google Ads Australia", "content marketing Australia", "lead generation Australia"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/digital-marketing-agency-australia",
  },
};

export default function AustraliaPage() {
  const faqs = [
    {
      q: "What makes your digital marketing agency different from others in Australia?",
      a: "We focus exclusively on revenue-driven results. Unlike agencies that report on vanity metrics, we build comprehensive growth engines using AI SEO, engaging content, and optimized ads to ensure scalable business growth and a strong ROI for Australian businesses."
    },
    {
      q: "Do you work with local businesses or nationwide enterprises in Australia?",
      a: "We partner with both. Whether you need local Google My Business optimization to capture foot traffic in Sydney or Melbourne, or nationwide SEO to dominate broad search terms across Australia, our strategies are highly adaptable."
    },
    {
      q: "How long does it take to see results from AI SEO?",
      a: "While paid ads can generate immediate leads, our AI-powered SEO strategies typically begin showing significant improvements in search rankings and organic traffic within 3 to 6 months for most competitive markets in Australia."
    },
    {
      q: "Can you handle our social media and content marketing together?",
      a: "Yes, we offer comprehensive services. We perfectly align your content marketing with your social media management to ensure your brand message is consistent, authoritative, and highly engaging across all platforms in Australia."
    },
    {
      q: "How do we get started with your services?",
      a: "Getting started is simple. Book a free strategy call with our experts. We will thoroughly audit your current digital presence and propose a custom roadmap tailored to your specific business goals in the Australian market."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#080c18]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
            🇦🇺 Serving Australia
          </span>
          <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-tight max-w-5xl mx-auto">
            Leading Digital Marketing Agency in <span className="text-brand-gold italic">Australia</span>
          </h1>
          <p className="mt-8 font-dm text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Helping Australian businesses scale with AI-driven SEO, high-converting Google & Facebook Ads, and revenue-focused content marketing. We don't just run campaigns—we build powerful growth engines tailored specifically for the competitive Aussie market.
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
                Transforming How Australian Businesses Grow Online
              </h2>
              <div className="w-16 h-1 bg-brand-gold mb-8 rounded-full" />
              <div className="space-y-6 font-dm text-gray-600 text-lg leading-relaxed">
                <p>
                  As a premier digital marketing agency in Australia, BizBox Story is committed to transforming how Australian businesses grow online. Whether you are a local SME in Sydney or a nationwide enterprise across Australia, we offer comprehensive digital marketing services tailored to your specific market demands. From dominating search results with advanced AI SEO to generating high-quality leads through targeted ad campaigns, our ultimate goal is tangible business growth.
                </p>
                <p>
                  We understand the fiercely competitive landscape of the Australian market, bringing years of global experience, proven reliability, and unmatched quality to every project. We know you are tired of agencies that sell empty promises. That is why we partner with you to build a sustainable online presence that drives real revenue, not just vanity metrics. Let us engineer your growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-square border border-brand-border shadow-lg group">
                <Image
                  src="/images/services/content-marketing.webp"
                  alt="BizBox Story team planning content strategy for Australian clients"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <div className="font-fraunces font-bold text-2xl text-brand-blue-deep">+310%</div>
                    <div className="font-dm text-sm text-gray-500 uppercase tracking-widest font-semibold mt-1">Traffic Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES IN AUSTRALIA ───────────────────────────────────── */}
      <section className="py-24 bg-brand-muted border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Tailored Solutions
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3">
              Our Services in <span className="text-brand-gold italic">Australia</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm group">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                <FiSearch className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">AI-Powered SEO Services</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Dominate local and national search rankings across Australia. Our <Link href="/services/seo-services" className="text-brand-gold font-semibold hover:underline">AI-powered SEO strategies</Link> ensure your website appears right when potential customers are actively searching for your solutions. For Australian businesses, this means higher organic traffic, stronger brand visibility, and a significant boost in qualified leads without relying entirely on paid advertising.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm group">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                <FiTarget className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Google & Facebook Ads</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Maximize your return on ad spend in the highly competitive Australian market. We design, launch, and manage high-converting <Link href="/services/google-facebook-ads" className="text-brand-gold font-semibold hover:underline">Google and Facebook ad campaigns</Link> that target your ideal audience with precision. Experience a lower cost-per-acquisition and a steady stream of ready-to-buy customers tailored specifically for AU-based companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm group">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                <FiLayout className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Content Marketing & Brand Presence</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Stand out in Australia with authoritative, revenue-focused content. Our <Link href="/services/brand-presence-consulting" className="text-brand-gold font-semibold hover:underline">content marketing and brand presence</Link> consulting build immediate trust and establish you as an industry leader. For businesses down under, we create compelling narratives that engage your audience and naturally guide them through your sales funnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border hover:border-brand-gold/40 transition-colors shadow-sm group">
              <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                <FiPieChart className="text-2xl" />
              </div>
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-4">Lead Generation & GMB Optimization</h3>
              <p className="font-dm text-gray-600 mb-6 leading-relaxed">
                Capture high-intent local leads with <Link href="/services/lead-generation" className="text-brand-gold font-semibold hover:underline">targeted lead generation</Link> and <Link href="/services/google-my-business" className="text-brand-gold font-semibold hover:underline">Google My Business (GMB) optimization</Link>. We ensure your business is easily discoverable on local Australian maps and search results. The outcome is a consistent pipeline of local inquiries and increased foot traffic for your physical or service-area business.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <FiTrendingUp className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Proven Years of Experience</h4>
                    <p className="font-dm text-gray-600">We bring over 6 years of hands-on experience helping SMEs scale globally, with deep expertise navigating the specific demands of the Australian market.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <FiTarget className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Revenue-Obsessed Approach</h4>
                    <p className="font-dm text-gray-600">We focus exclusively on your actual business growth and ROI, ignoring superficial vanity metrics like impressions or empty follower counts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Global Expertise, Local Focus</h4>
                    <p className="font-dm text-gray-600">Our global team understands international best practices while applying highly localized strategies specifically designed for clients across Australia.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-muted flex items-center justify-center text-brand-gold border border-brand-gold/20">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-fraunces font-bold text-xl text-brand-ink mb-2">Rapid Response Time & Support</h4>
                    <p className="font-dm text-gray-600">We prioritize clear communication and fast turnaround times. You will always know exactly how your campaigns are performing with our dedicated, transparent support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#080c18] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px]" />
              <Image 
                src="/images/services/lead-gen.webp" 
                alt="Lead generation optimization for Australian market"
                fill
                className="object-cover opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500"
              />
              <h3 className="font-fraunces text-3xl font-bold mb-8 relative z-10">How It Works</h3>
              <ul className="space-y-6 relative z-10 font-dm">
                <li className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-brand-ink flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="block text-lg mb-1">Discovery & Audit:</strong>
                    <span className="text-white/70">We analyze your current digital presence, target audience, and direct competitors within the Australian market.</span>
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

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
            Success Stories
          </span>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 mb-16">
            What Our <span className="text-brand-gold italic">Aussie Clients</span> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm group hover:border-brand-gold/40 transition-colors">
              <div className="text-brand-gold text-lg tracking-wider mb-4">★★★★★</div>
              <p className="font-dm text-gray-700 text-lg leading-relaxed italic mb-6">
                "Partnering with BizBox Story completely transformed our online visibility. Their targeted approach to the Australian market doubled our organic leads within just four months. They truly understand what drives real revenue."
              </p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">L</div>
                <div>
                  <div className="font-dm font-bold text-brand-blue-deep">Liam M.</div>
                  <div className="font-dm text-sm text-gray-500">Director, Sydney Property Group</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm group hover:border-brand-gold/40 transition-colors">
              <div className="text-brand-gold text-lg tracking-wider mb-4">★★★★★</div>
              <p className="font-dm text-gray-700 text-lg leading-relaxed italic mb-6">
                "We were tired of agencies delivering empty promises. BizBox Story stepped in, restructured our Google Ads, and optimized our local SEO. We are finally seeing a strong ROI across our service locations in Melbourne."
              </p>
              <div className="flex items-center gap-4 border-t border-brand-border pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">C</div>
                <div>
                  <div className="font-dm font-bold text-brand-blue-deep">Chloe S.</div>
                  <div className="font-dm text-sm text-gray-500">Founder, Melbourne Retail Network</div>
                </div>
              </div>
            </div>
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
            Ready to Scale Your Business in Australia?
          </h2>
          <p className="font-dm text-lg text-gray-600 mb-10 leading-relaxed">
            If you are looking for a digital marketing agency in Australia that prioritizes your bottom line, BizBox Story is your ideal partner. Stop wasting budget on generic campaigns that do not convert. Let us build a customized growth engine that drives sustainable revenue, high-quality leads, and long-term digital success.
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
