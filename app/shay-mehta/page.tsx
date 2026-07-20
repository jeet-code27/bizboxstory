import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiGlobe, FiBriefcase, FiAward } from 'react-icons/fi';
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
            className="h-48 md:h-64 w-full relative"
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

          <div className="px-8 md:px-16 pb-16 relative">
            {/* Profile Avatar Image (Negative margin to overlap header) */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl -mt-16 md:-mt-20 overflow-hidden mb-8 relative z-10 mx-auto sm:mx-0 sm:mr-auto bg-brand-surface">
              <Image 
                src="/images/shay-mehta-hero-section.png"
                alt="Shay Mehta"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <header className="mb-12 border-b border-brand-border pb-10">
              <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep mb-4">
                Shay Mehta
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-brand-gold font-dm text-lg md:text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                  <FiBriefcase className="text-brand-gold" /> Founder &amp; CEO, BizBox Story
                </p>
                <span className="hidden md:block text-brand-border">|</span>
                <p className="text-gray-500 font-dm text-base md:text-lg flex items-center gap-2">
                  <FiAward className="text-gray-400" /> Marketing Strategist
                </p>
              </div>
            </header>

            <div className="prose prose-lg max-w-none font-dm text-gray-600 leading-relaxed space-y-6">
              <p className="text-xl md:text-2xl text-brand-blue-deep font-fraunces leading-snug">
                Shay Mehta is the Founder &amp; CEO of BizBox Story, a digital marketing agency built specifically for US businesses operating in restricted, underserved, and hard-to-market niches — cannabis dispensaries, pest control companies, chiropractic practices, and home services.
              </p>
              
              <p>
                Under Shay&apos;s leadership, BizBox Story&apos;s delivery team has taken clients from page three to page one of Google in as little as 60 days, and helped dispensary clients generate $45,000+ in monthly organic revenue with triple-digit traffic growth.
              </p>

              <div className="bg-brand-muted p-8 rounded-2xl border-l-4 border-brand-gold my-8">
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

            <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-brand-border">
              <a 
                href="https://shaymehta.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-blue-deep text-white font-dm font-bold text-base rounded-full hover:bg-brand-blue transition-colors shadow-lg hover:shadow-xl group"
              >
                <FiGlobe className="mr-3 w-5 h-5 group-hover:animate-pulse" />
                Visit ShayMehta.com
              </a>
              <a 
                href="https://www.instagram.com/sayitlikeshay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-dm font-bold text-base rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl group"
              >
                <FaInstagram className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Follow @sayitlikeshay
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
