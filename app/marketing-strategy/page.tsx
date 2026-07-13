"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiTarget,
  FiArrowRight,
  FiShield,
  FiMapPin,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiAward,
  FiSearch,
  FiHeart,
  FiSmile,
  FiStar,
  FiClipboard
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function MarketingStrategyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d2be3617-99b0-4a71-8da8-874ddb392790");
    formData.append("subject", "New Marketing Strategy Call Request - Bizbox Story");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold bg-brand-gold/10 px-4 py-2 rounded-full">
              <FiAward className="w-4 h-4" /> Trusted by 50+ Businesses Across US & India
            </div>
            
            <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep leading-tight">
              US Marketing, at One Third the Cost, <span className="text-brand-gold italic">Without Cutting a Single Corner</span>
            </h1>
            
            <p className="font-dm text-lg text-gray-600 leading-relaxed font-medium">
              Digital growth for Doctors, Dentists, Cleaning Companies, Insurance Agencies & Cannabis Dispensaries
            </p>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
              <p className="font-dm text-brand-ink italic leading-relaxed text-sm md:text-base mb-6">
                "I've lived in the US for 18 years. I know how Americans search, decide, and trust a business online because I've been a business owner and a customer in the US too. That's the edge BizBox Story brings: a US based understanding of your market, delivered by a global team, at a price no local agency can match."
              </p>
              <div className="flex items-center gap-4 border-t border-brand-border/50 pt-4">
                <div className="w-14 h-14 rounded-full border border-brand-border/50 shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src="/images/shay-mehta-hero-section.png" alt="Shay Mehta" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="font-dm font-bold text-brand-ink">Shay Mehta</h4>
                  <p className="font-dm text-xs text-gray-500 font-semibold mb-1">Owner, Bizbox Story</p>
                  <div className="flex items-center gap-3 text-xs font-dm">
                    <a href="https://shaymehta.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-medium">shaymehta.com</a>
                    <span className="text-gray-300">|</span>
                    <a href="https://instagram.com/sayitlikeshay" target="_blank" rel="noopener noreferrer" className="text-brand-blue-deep hover:text-brand-gold transition-colors font-medium">@sayitlikeshay</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('strategy-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-dm font-bold text-base px-8 py-4 bg-brand-blue-deep text-white rounded-xl hover:bg-brand-ink transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
              >
                Book Your Free Strategy Call <FiArrowRight className="w-5 h-5" />
              </button>
              <Link href="/case-studies" className="font-dm font-bold text-base px-8 py-4 bg-white text-brand-blue-deep border border-brand-border rounded-xl hover:bg-brand-muted transition-all duration-300 flex items-center justify-center gap-3">
                See Our Success Stories <FiTarget className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
          >
            <div className="absolute inset-0 bg-brand-blue-deep/10 z-10 mix-blend-overlay"></div>
            <img 
              src="/images/premium_office_team.png" 
              alt="Global Marketing Team" 
              className="object-cover w-full h-full"
            />
            {/* Overlay stats */}
            <div className="absolute bottom-8 left-8 right-8 z-20 flex gap-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <FiMapPin className="text-brand-gold w-5 h-5" />
                  <span className="font-dm font-bold text-brand-ink text-sm">US Office</span>
                </div>
                <p className="font-dm text-xs text-gray-500">Holden, MA</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <FiMapPin className="text-brand-gold w-5 h-5" />
                  <span className="font-dm font-bold text-brand-ink text-sm">Global HQ</span>
                </div>
                <p className="font-dm text-xs text-gray-500">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-brand-blue-deep mb-6">
              Why Business Owners Like You Choose <span className="text-brand-gold italic">BizBox Story</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <FiDollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-dm font-bold text-xl text-brand-ink mb-3">Same Deliverables. Same Effort. One Third the Price.</h3>
              <p className="font-dm text-sm text-gray-600 leading-relaxed">
                You get the exact same scope like SEO, content, ads, and design that a US agency would charge premium rates for. No shortcuts on quality, just a leaner cost structure that lets your budget go further.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <FiMapPin className="w-6 h-6" />
              </div>
              <h3 className="font-dm font-bold text-xl text-brand-ink mb-3">A US Office, Not Just a US Time Zone</h3>
              <p className="font-dm text-sm text-gray-600 leading-relaxed">
                We have an office in Holden, MA, alongside our India HQ. You're not outsourcing into the dark. You have real people, on US soil, who understand your business and your customers.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <FiClock className="w-6 h-6" />
              </div>
              <h3 className="font-dm font-bold text-xl text-brand-ink mb-3">Month to Month. No Long Contracts.</h3>
              <p className="font-dm text-sm text-gray-600 leading-relaxed">
                No 12-month lock-ins. We earn your business every single month with results, not a signature on a contract.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="font-dm font-bold text-xl text-brand-ink mb-3">A Full Team, Not a Freelancer</h3>
              <p className="font-dm text-sm text-gray-600 leading-relaxed">
                Web developers, content creators, designers, SEO specialists, and dedicated AI SEO professionals — all working on your account as one unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-brand-blue-deep mb-4">
            Built for Your Industry
          </h2>
          <p className="font-dm text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just do generic marketing. We build proven acquisition systems for these highly specific niches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Doctors & Medical Practices",
              desc: "Patient acquisition funnels, local SEO, and reputation management that fill your appointment book.",
              icon: <FiHeart className="text-brand-gold" />
            },
            {
              title: "Dentists",
              desc: "Google Business optimization, review generation, and content that turns searchers into booked patients.",
              icon: <FiSmile className="text-brand-gold" />
            },
            {
              title: "Cleaning Companies",
              desc: "Local lead generation and Google Ads that keep your calendar full, season after season.",
              icon: <FiStar className="text-brand-gold" />
            },
            {
              title: "Insurance Agencies",
              desc: "Trust driven content and SEO that positions your agency as the go-to choice in your area.",
              icon: <FiClipboard className="text-brand-gold" />
            },
            {
              title: "Cannabis Dispensaries",
              desc: "Compliant, high performing SEO and social strategies built specifically for a heavily regulated industry. (We have done it before, see Torch Cannabis below.)",
              icon: <FiTarget className="text-brand-gold" />,
              colSpan: "lg:col-span-2"
            }
          ].map((item, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-brand-border hover:shadow-xl transition-all duration-300 ${item.colSpan || ''}`}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-dm font-bold text-xl text-brand-ink mb-3">{item.title}</h4>
              <p className="font-dm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI SEO Section */}
      <section className="bg-brand-blue-deep py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                <FiSearch className="w-5 h-5" /> The Future of Search
              </div>
              <h2 className="font-fraunces text-3xl md:text-5xl font-bold leading-tight">
                Google Ranking Is Only <span className="text-brand-gold italic">Half the Battle</span> Now
              </h2>
              <p className="font-dm text-lg text-white/80 leading-relaxed">
                Search has changed. People aren't just typing into Google anymore. They're asking ChatGPT, Gemini, and AI Overviews "who's the best dentist near me" or "which dispensary should I try." 
              </p>
              <p className="font-dm text-lg text-white/80 leading-relaxed">
                If your business isn't structured and optimized for these AI driven answers, you're invisible to a growing share of your future customers, no matter how well you rank on page one of Google.
              </p>
              <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-sm mt-8">
                <p className="font-dm text-white leading-relaxed font-medium">
                  That's why our team doesn't stop at traditional SEO. Our dedicated AI SEO specialists optimize your content, structure, and citations so your business shows up in both classic search results and AI generated answers, giving you two growth channels instead of one.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl border border-white/10">
              <img 
                src="/images/ai_tech_abstract.png" 
                alt="AI SEO Concept" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
             <img 
                src="/images/modern_analytics.png" 
                alt="Business Growth Results" 
                className="object-cover w-full h-full"
              />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-brand-blue-deep">
              Real Results, <span className="text-brand-gold italic">Real Businesses</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h4 className="font-dm font-bold text-lg text-brand-ink mb-2">Torch Cannabis</h4>
                <p className="font-dm text-gray-600">320K+ video views and 193% engagement growth through targeted social strategy.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <a href="https://www.enterprisecleaningcorp.com/" target="_blank" rel="noopener noreferrer" className="font-dm font-bold text-lg text-brand-ink hover:text-brand-gold transition-colors block mb-2">Enterprise Cleaning Corp</a>
                <p className="font-dm text-gray-600">Our recently onboarded client, trusting us for comprehensive digital growth and local SEO domination.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <h4 className="font-dm font-bold text-lg text-brand-ink mb-2">Nirvana DC Dispensary (Massachusetts, USA)</h4>
                <p className="font-dm text-gray-600 italic">"Within 90 days, our organic traffic doubled and we were ranking on page 1 for our top keywords."</p>
              </div>
            </div>

            <Link href="/case-studies" className="inline-flex items-center gap-2 font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors text-lg">
              See All Success Stories <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="strategy-form" className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface p-8 sm:p-12 rounded-3xl border border-brand-border shadow-2xl relative">
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-4">You're All Set!</h3>
                <p className="font-dm text-gray-600 max-w-md mx-auto mb-8">
                  Your strategy session request has been successfully submitted. Our team will contact you within 24 hours to confirm your time slot.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="font-dm text-brand-gold font-bold hover:text-brand-gold-light underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h3 className="font-fraunces text-3xl md:text-4xl font-bold text-brand-blue-deep mb-4">Get Your Free Strategy Call</h3>
                  <p className="font-dm text-gray-600 max-w-2xl mx-auto">
                    Tell us about your business. We'll show you exactly where you're losing customers online with no obligation and no sales pressure.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Business Name *</label>
                      <input 
                        type="text" 
                        name="businessName"
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Industry *</label>
                      <select name="industry" required className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm text-gray-700 appearance-none">
                        <option value="">Select your industry...</option>
                        <option value="Doctor">Doctor / Medical Practice</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Cleaning Company">Cleaning Company</option>
                        <option value="Insurance Agency">Insurance Agency</option>
                        <option value="Cannabis Dispensary">Cannabis Dispensary</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Current Monthly Marketing Budget (Optional)</label>
                      <select name="budget" className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm text-gray-700 appearance-none">
                        <option value="">Select a range...</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm text-sm font-bold text-brand-ink">Message / What are you hoping to achieve?</label>
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm resize-none"
                      placeholder="Tell us what's working, what's not, and where you want to be..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-dm font-bold text-lg px-8 py-5 bg-brand-gold text-brand-ink rounded-xl hover:bg-brand-gold-light transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg mt-4"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-brand-ink border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>Book My Free 30-Minute Strategy Call <FiArrowRight className="w-6 h-6" /></>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 font-dm text-sm text-gray-500 mt-6">
                    <FiClock className="w-4 h-4" /> 30-minute session · <FiAward className="w-4 h-4 ml-2" /> Zoom or Google Meet · <FiShield className="w-4 h-4 ml-2" /> No sales pressure
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
