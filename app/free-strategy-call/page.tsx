"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCalendar,
  FiTrendingUp,
  FiTarget,
  FiArrowRight,
  FiShield
} from "react-icons/fi";

export default function FreeStrategyCallPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-4 bg-brand-gold/10 px-4 py-1.5 rounded-full"
          >
            <FiCalendar className="w-4 h-4" /> Limited Availability
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep leading-tight"
          >
            Claim Your Free <span className="text-brand-gold italic">Strategy Session</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-dm text-lg text-gray-600 leading-relaxed"
          >
            Stop guessing and start growing. Book a 30-minute discovery call with our digital growth experts to uncover hidden revenue opportunities in your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
              <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-6">
                What You&apos;ll Get From This Call:
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <FiTarget className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm font-bold text-brand-ink mb-1">Deep Competitor Analysis</h4>
                    <p className="font-dm text-sm text-gray-500 leading-relaxed">
                      We&apos;ll identify what your top competitors are doing right and how you can ethically steal their market share.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <FiTrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm font-bold text-brand-ink mb-1">Custom Revenue Roadmap</h4>
                    <p className="font-dm text-sm text-gray-500 leading-relaxed">
                      A clear, actionable step-by-step digital strategy designed specifically to multiply your current ROI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm font-bold text-brand-ink mb-1">Platform Audit Insights</h4>
                    <p className="font-dm text-sm text-gray-500 leading-relaxed">
                      We look under the hood of your website, SEO, and current ads to find exactly where you are losing money.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-brand-border flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <div className="flex text-brand-gold text-lg mb-1">
                    ★★★★★
                  </div>
                  <p className="font-dm text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Trusted by 200+ Brands
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue-deep p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl"></div>
              <FiShield className="w-8 h-8 text-brand-gold mb-4" />
              <h4 className="font-fraunces text-xl font-bold mb-3">100% No-Pressure Guarantee</h4>
              <p className="font-dm text-sm text-white/70 leading-relaxed">
                We despise high-pressure sales tactics as much as you do. This call is purely about offering massive upfront value. If you decide to implement the strategy yourself, you absolutely can!
              </p>
            </div>
          </motion.div>

          {/* Right Column: Lead Form / Scheduler Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-fraunces text-3xl font-bold text-brand-blue-deep mb-4">You&apos;re All Set!</h3>
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
                <div className="mb-8">
                  <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep">Tell Us About Your Business</h3>
                  <p className="font-dm text-gray-500 mt-2">Fill out the form below so we can prepare data before we speak.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">First Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Last Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-dm text-sm font-bold text-brand-ink">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm text-sm font-bold text-brand-ink">Website URL *</label>
                    <input 
                      type="url" 
                      required
                      className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm"
                      placeholder="https://www.yourdomain.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm text-sm font-bold text-brand-ink">What is your primary marketing goal?</label>
                    <select className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm text-gray-700 appearance-none">
                      <option value="">Select a goal...</option>
                      <option value="leads">Generate More Leads</option>
                      <option value="sales">Increase Direct Sales / E-commerce</option>
                      <option value="seo">Improve Google Rankings (SEO)</option>
                      <option value="social">Build Social Media Presence</option>
                      <option value="custom">Looking for Custom Digital Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-dm text-sm font-bold text-brand-ink">Anything specific we should look at?</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-brand-muted/50 border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all font-dm text-sm resize-none"
                      placeholder="Tell us about your biggest digital marketing headache right now..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-dm font-bold text-[16px] px-8 py-4 bg-brand-blue-deep text-white rounded-xl hover:bg-brand-ink transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                    style={{ boxShadow: '0 10px 30px rgba(15,27,61,0.2)' }}
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>Claim My Free Strategy Session <FiArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <p className="font-dm text-xs text-gray-400 text-center mt-4">
                    Your information is secure. We never share or sell data.
                  </p>
                </form>

                {/* 
                  NOTE TO DEVELOPER: 
                  If you want to embed Calendly instead of the custom form, you can delete the <form> 
                  above and uncomment the embedded iframe code below!
                  
                   <div style={{ height: '700px' }}>
                    <iframe 
                      src="https://calendly.com/YOUR_CALENDLY_URL" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                    ></iframe>
                  </div>
                */}
              </>
            )}
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}
