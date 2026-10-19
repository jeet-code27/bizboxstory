import Link from 'next/link';
import Image from 'next/image';
import { 
  FiArrowLeft, 
  FiGlobe, 
  FiBriefcase, 
  FiAward, 
  FiTarget, 
  FiSearch, 
  FiFileText, 
  FiUsers, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiShield, 
  FiLayers, 
  FiCalendar, 
  FiArrowRight 
} from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';

export const metadata = {
  title: 'Shay Mehta - Founder & CEO | BizBox Story',
  description: 'Learn more about Shay Mehta, Founder & CEO of BizBox Story, a digital marketing agency built for US businesses in restricted and underserved niches.',
  keywords: 'Shay Mehta, Founder BizBox Story, SEO expert for dispensaries, digital marketing for chiropractic, pest control marketing expert, US business marketing, BizBox Story CEO',
  openGraph: {
    title: 'Shay Mehta - Founder & CEO | BizBox Story',
    description: 'Learn more about Shay Mehta, Founder & CEO of BizBox Story, a digital marketing agency built for US businesses in restricted and underserved niches.',
    url: 'https://bizboxstory.com/shay-mehta',
    type: 'profile',
    images: [
      {
        url: '/images/shay-mehta-hero-section.png',
        width: 800,
        height: 600,
        alt: 'Shay Mehta - Founder & CEO of BizBox Story',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shay Mehta - Founder & CEO | BizBox Story',
    description: 'Learn more about Shay Mehta, Founder & CEO of BizBox Story, a digital marketing agency built for US businesses in restricted and underserved niches.',
    images: ['/images/shay-mehta-hero-section.png'],
  }
};

const PROTOCOL_STEPS = [
  {
    step: "01",
    title: "First, we talk about your business.",
    icon: FiTarget,
    desc: "Before recommending advertising, a new website, or social media, we understand what you sell, who your best customers are, which areas you serve, and where you are struggling. For example, if you run commercial cleaning, we want to know which contracts you want, how far crews can travel, and whether you have capacity. Getting enquiries for jobs you do not want helps nobody.",
  },
  {
    step: "02",
    title: "Then, we look at what you already have.",
    icon: FiSearch,
    desc: "We review your website, online presence, and current marketing. With your permission and access, we examine your existing campaigns and tracking. We explain what looks useful, what needs attention, and what still needs investigation. If something is already working, we build on it.",
  },
  {
    step: "03",
    title: "You get a clear plan before you commit.",
    icon: FiFileText,
    desc: "We put the proposed work in writing: what we will deliver, who is responsible, the timeline, and how we measure progress. You will see our fee, separate advertising budget, and setup costs. Additional work or spending always requires your approval.",
  },
  {
    step: "04",
    title: "Once we start, you know who you are working with.",
    icon: FiUsers,
    desc: "Shay leads BizBox Story, supported by our delivery team based in India. You receive a named point of contact, agreed communication times matching your schedule, and direct access to Shay when needed. Your business owns its website, domain, and ad accounts.",
  },
  {
    step: "05",
    title: "We get the essentials ready, then launch.",
    icon: FiCheckCircle,
    desc: "Depending on your plan, that might mean improving your website, building landing pages, preparing content, or setting up ad campaigns. All materials and tracking are verified before going live.",
  },
  {
    step: "06",
    title: "We measure business opportunities - not just activity.",
    icon: FiTrendingUp,
    desc: "Posting content and running ads are only part of the work. We measure whether they bring the right people: qualified enquiries, booked appointments or walkthroughs, acquisition costs, and sales. Marketing dashboards alone do not tell the full story.",
  },
  {
    step: "07",
    title: "Regular updates, including when things are not working.",
    icon: FiShield,
    desc: "We agree on a check-in schedule: what was completed, what results show, and what we recommend next. If a campaign underperforms, we state it plainly and explain what we want to adjust without recommending more spending without justification.",
  },
  {
    step: "08",
    title: "Clear expectations on what we need from you.",
    icon: FiLayers,
    desc: "We need accurate information, timely approvals, and honest feedback on the enquiries received. Your team handles customer conversations; turning interest into revenue is a partnership.",
  },
];

export default function ShayMehtaPage() {
  return (
    <main className="min-h-screen bg-brand-surface pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-brand-gold font-dm font-bold hover:text-brand-gold-light transition-colors mb-8">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-border">
          {/* Header Banner */}
          <div 
            className="h-44 md:h-60 w-full relative"
            style={{
              background: "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
            }}
          >
             {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="px-5 sm:px-8 md:px-14 pb-16 relative">
            {/* Profile Avatar Image (Negative margin to overlap header) */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl -mt-14 sm:-mt-18 md:-mt-20 overflow-hidden mb-8 relative z-10 mx-auto sm:mx-0 sm:mr-auto bg-brand-surface">
              <Image 
                src="/images/shay-mehta-hero-section.png"
                alt="Shay Mehta"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Profile Intro Header */}
            <header className="mb-10 border-b border-brand-border pb-8">
              <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-deep mb-3">
                Shay Mehta
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <p className="text-brand-gold font-dm text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                  <FiBriefcase className="text-brand-gold flex-shrink-0" /> Founder &amp; CEO, BizBox Story
                </p>
                <span className="hidden md:block text-brand-border">|</span>
                <p className="text-gray-500 font-dm text-xs sm:text-sm md:text-base flex items-center gap-2">
                  <FiAward className="text-gray-400 flex-shrink-0" /> 18 Yrs Boston Business Operator
                </p>
              </div>
            </header>

            {/* FIRST SECTION: FOUNDER NOTE & HOW WE WORK */}
            <section id="how-we-work" className="mb-14 scroll-mt-28">
              <div className="rounded-3xl bg-gradient-to-b from-[#0c1630] via-[#091124] to-[#060c1a] border border-brand-gold/30 p-5 sm:p-8 md:p-10 shadow-2xl text-white">
                
                {/* Section Badge & Title */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-dm uppercase tracking-widest font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full border border-brand-gold/20">
                      Founder Memo
                    </span>
                  </div>
                  <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    How We Work Together at BizBox Story
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 font-dm mt-1">
                    A personal commitment from Shay Mehta
                  </p>
                </div>

                {/* Personal Opening Quote */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-brand-gold/30 mb-8">
                  <p className="font-fraunces text-base sm:text-xl text-white font-semibold leading-relaxed mb-3">
                    &ldquo;I have owned a business where you do. I spent 18 years in the Boston area &mdash; North Andover, Lowell, and Winchester &mdash; and ran a restaurant and a franchise there myself. I understand the responsibility that comes with spending your money.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-dm text-gray-300 leading-relaxed">
                    So let me explain exactly how we operate, communicate, and stay accountable to you at BizBox Story.
                  </p>
                </div>

                {/* 8-Step Bento Protocol */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-dm uppercase tracking-wider font-semibold text-brand-gold">
                      The 8-Step Working Blueprint
                    </span>
                    <span className="text-xs font-dm text-gray-400">
                      Standard operating procedure
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                    {PROTOCOL_STEPS.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.step}
                          className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] sm:text-xs font-dm font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                                Step {item.step}
                              </span>
                              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 group-hover:bg-brand-gold/15 flex items-center justify-center text-gray-300 group-hover:text-brand-gold transition-colors">
                                <IconComponent className="text-xs sm:text-sm" />
                              </div>
                            </div>
                            <h3 className="font-fraunces text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-brand-gold transition-colors leading-snug">
                              {item.title}
                            </h3>
                            <p className="font-dm text-xs sm:text-sm text-gray-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Honest Commitment Callout */}
                <div className="p-4 sm:p-6 rounded-2xl bg-[#0b1328] border-2 border-brand-gold/40 shadow-inner mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
                      <FiShield className="text-base sm:text-xl" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs font-dm uppercase tracking-wider font-bold text-brand-gold">
                        Our Honest Commitment
                      </span>
                      <p className="font-fraunces text-sm sm:text-lg text-white font-medium leading-relaxed">
                        &ldquo;I cannot honestly guarantee how many customers will buy from you. What I can commit to is clear scope, agreed deadlines, communication, and honest reporting.&rdquo;
                      </p>
                      <p className="font-dm text-xs sm:text-sm text-gray-300 leading-relaxed">
                        If that is the kind of working relationship you want, book a 30-minute call with me, Shay. Tell me about your business, what you have tried, and where you want to go. I will tell you where we believe we can help &mdash; and if we are not the right fit, I will tell you that too.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Founder Call CTA Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm font-dm text-gray-300 font-medium">
                      Want to discuss your business with Shay?
                    </div>
                    <div className="text-xs text-brand-gold font-dm font-semibold">
                      Direct 30-Minute Consultation &bull; No Lock-in
                    </div>
                  </div>

                  <Link
                    href="/free-strategy-call"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-ink font-dm font-bold text-sm shadow-[0_0_20px_rgba(255,182,5,0.3)] hover:shadow-[0_0_25px_rgba(255,182,5,0.5)] transition-all cursor-pointer"
                  >
                    <FiCalendar className="text-base" />
                    <span>Book 30-Min Strategy Call</span>
                    <FiArrowRight className="text-base" />
                  </Link>
                </div>

              </div>
            </section>

            {/* SECOND SECTION: ABOUT SHAY MEHTA & CAREER */}
            <section className="pt-4 border-t border-brand-border">
              <div className="mb-6">
                <span className="text-xs font-dm uppercase tracking-widest font-bold text-brand-gold">
                  Biography &amp; Background
                </span>
                <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-brand-blue-deep mt-1">
                  About Shay Mehta
                </h2>
              </div>

              <div className="prose prose-lg max-w-none font-dm text-gray-600 leading-relaxed space-y-6">
                <p className="text-lg sm:text-xl text-brand-blue-deep font-fraunces leading-snug">
                  Shay Mehta is the Founder &amp; CEO of BizBox Story, a digital marketing agency built specifically for US businesses operating in restricted, underserved, and hard-to-market niches — cannabis dispensaries, pest control companies, chiropractic practices, and home services.
                </p>
                
                <p>
                  Under Shay&apos;s leadership, BizBox Story&apos;s delivery team has taken clients from page three to page one of Google in as little as 60 days, and helped dispensary clients generate $45,000+ in monthly organic revenue with triple-digit traffic growth.
                </p>

                <div className="bg-brand-muted p-6 sm:p-8 rounded-2xl border-l-4 border-brand-gold my-8">
                  <p className="mb-0 text-brand-ink italic">
                    Shay&apos;s path into marketing runs through nearly two decades inside the US and Indian financial services industry. Having lived in the United States for 18 years and completed his education at the University of Massachusetts, Shay went on to hold senior leadership roles at two of the largest names in life insurance: serving as National Head at Max New York Life and later as Director at MetLife India. 
                  </p>
                </div>

                <p>
                  That career — built on disciplined strategy, large-scale client relationships, and navigating heavily regulated markets — gives Shay a rare vantage point on what it actually takes for a business to earn trust and visibility in the US, especially in categories where traditional advertising doors are closed.
                </p>

                <p>
                  Today, Shay channels that experience into building BizBox Story&apos;s proof-first, no-lock-in approach to SEO and digital marketing. Shay is also the voice behind <a href="https://www.instagram.com/sayitlikeshay" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-light font-bold underline transition-colors">@sayitlikeshay</a>, a rapidly growing Instagram account with 50,000+ followers and an exceptionally high engagement rate, where he shares direct, unfiltered takes on current affairs, marketing and sales.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-8 border-t border-brand-border">
                <a 
                  href="https://shaymehta.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue-deep text-white font-dm font-bold text-sm sm:text-base rounded-full hover:bg-brand-blue-mid transition-colors shadow-lg hover:shadow-xl group"
                >
                  <FiGlobe className="mr-2.5 w-4 h-4 group-hover:animate-pulse" />
                  Visit ShayMehta.com
                </a>
                <a 
                  href="https://www.instagram.com/sayitlikeshay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-dm font-bold text-sm sm:text-base rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl group"
                >
                  <FaInstagram className="mr-2.5 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Follow @sayitlikeshay
                </a>
              </div>
            </section>

          </div>
        </div>

      </div>
    </main>
  );
}
