"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

/* ── Testimonials Data ─────────────────────────────────────────── */
const testimonials = [
  {
    name: "Ms. Jessica",
    role: "Nirvana DC",
    quote:
      "Bizbox Story transformed our online presence! Their innovative strategies and dedicated team took our brand to new heights. We've seen remarkable growth and engagement since partnering with them. Highly recommend their services!",
    initials: "JN",
  },
  {
    name: "Ms. Shuchi Singh",
    role: "Saabanvali",
    quote:
      "I have used Biz Box Story's services in setting up the website for my beauty brand, Saabanvali. The team has been meticulous with timelines, and the quality of work has been more than satisfactory. Very happy with the services.",
    initials: "SS",
  },
  {
    name: "Mr. Narender Kumar",
    role: "Hive Cafe",
    quote:
      "Our Hive cafe's social media is taken care by Biz Box Story, they set up our Instagram, Facebook and got us group bookings and increase sales. Their work on Google business profile got us a lot of visibility and orders. They completely designed our menu, outdoor banners, etc.",
    initials: "NK",
  },
  {
    name: "English Institute",
    role: "Institute",
    quote:
      "Our complete digital media is taken care off by Biz Box Story, they do Instagram, Facebook and GMB for us. They made our website and help us with other offline marketing too. Very helpful, Thank you.",
    initials: "EI",
  },
];

/* ── Testimonials Carousel ─────────────────────────────────────── */
function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-brand-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
            Our Testimonials
          </span>
          <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
            What Our Clients{" "}
            <span className="text-brand-gold italic">Think About Us?</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 sm:pl-6"
                >
                  <div className="bg-white rounded-3xl p-8 border border-brand-border hover:border-brand-gold/30 transition-all duration-300 h-full flex flex-col shadow-sm">
                    {/* Stars */}
                    <div className="text-brand-gold text-lg tracking-widest mb-4">★★★★★</div>

                    {/* Big quote mark */}
                    <div className="font-fraunces text-7xl text-brand-gold/15 leading-none -mb-4 select-none">&ldquo;</div>

                    <p className="font-dm text-gray-600 text-base leading-relaxed italic flex-1 mt-2">
                      {t.quote}
                    </p>

                    {/* Author */}
                    <div className="mt-7 pt-6 border-t border-brand-border flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-dm font-bold text-brand-ink text-sm flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg, #e8a045 0%, #f5c878 100%)",
                        }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-dm font-semibold text-brand-ink text-sm">{t.name}</div>
                        <div className="font-dm text-gray-400 text-xs mt-0.5">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-brand-gold text-xl" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === selectedIndex ? "w-6 bg-brand-gold" : "w-2 bg-brand-border"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-brand-gold text-xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[62vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-gold/20"
            style={{
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              top: `${10 + ((i * 31) % 80)}%`,
              left: `${5 + ((i * 17) % 90)}%`,
              animation: `float-particle ${4 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-[110px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-dm text-brand-gold text-sm uppercase tracking-[0.22em] font-semibold mb-4 px-5 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
              Free Consultation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-fraunces text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mt-4"
          >
            Let&apos;s{" "}
            <span className="italic text-brand-gold">Grow</span> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-dm text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to speak with our marketing experts? Get a free consultation on your digital presence today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            <a
              href="tel:+919821774565"
              className="font-dm font-semibold px-8 py-3.5 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.4)" }}
            >
              <FiPhone /> Call Us Now
            </a>
            <a
              href="#contact-form"
              className="font-dm font-medium px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Send a Message <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ───────────────────────────────────── */}
      <section id="contact-form" ref={contactRef} className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* ── LEFT: Contact Info ─────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
                Get In Touch
              </span>
              <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-brand-blue-deep mt-3 leading-tight">
                Free Consultation On Your{" "}
                <span className="text-brand-gold italic">Digital Presence</span>
              </h2>
              <div className="w-16 h-1 bg-brand-gold mt-6 mb-10 rounded-full" />

              {/* Info Cards */}
              <div className="space-y-5">
                {/* Address */}
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-brand-border hover:border-brand-gold/30 bg-brand-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <FiMapPin className="text-brand-gold text-xl" />
                  </div>
                  <div>
                    <div className="font-dm font-bold text-brand-ink text-sm uppercase tracking-wider mb-1">
                      Office Address
                    </div>
                    <p className="font-dm text-gray-600 text-sm leading-relaxed">
                      122, Woodstock Ave, Nirvana Country,<br />
                      Sector 50, Gurugram, Haryana 122018
                    </p>
                    <p className="font-dm text-gray-500 text-sm leading-relaxed mt-1.5">
                      1285 Main St, Holden, MA 01520, USA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-brand-border hover:border-brand-gold/30 bg-brand-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <FiPhone className="text-brand-gold text-xl" />
                  </div>
                  <div>
                    <div className="font-dm font-bold text-brand-ink text-sm uppercase tracking-wider mb-1">
                      Call Us On
                    </div>
                    <a href="tel:+919821774565" className="font-dm text-gray-600 text-sm hover:text-brand-gold transition-colors block">
                      +91-9821774565 (India)
                    </a>
                    <a href="tel:+17749912610" className="font-dm text-gray-500 text-sm hover:text-brand-gold transition-colors block mt-0.5">
                      +1-774-991-2610 (USA)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-brand-border hover:border-brand-gold/30 bg-brand-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <FiMail className="text-brand-gold text-xl" />
                  </div>
                  <div>
                    <div className="font-dm font-bold text-brand-ink text-sm uppercase tracking-wider mb-1">
                      Mail Us
                    </div>
                    <a href="mailto:info@bizboxstory.com" className="font-dm text-gray-600 text-sm hover:text-brand-gold transition-colors">
                      info@bizboxstory.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social + WhatsApp */}
              <div className="mt-10">
                <p className="font-dm text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">Connect With Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/919821774565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-dm text-sm font-semibold bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5"
                    style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
                  >
                    <FaWhatsapp className="text-lg" /> WhatsApp Us
                  </a>
                  {[
                    { icon: <FaFacebookF />, href: "#" },
                    { icon: <FaInstagram />, href: "#" },
                    { icon: <FaLinkedinIn />, href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-10 h-10 rounded-full bg-brand-muted border border-brand-border flex items-center justify-center text-gray-500 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Form ────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 font-dm text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  Contact Us
                </div>

                <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-brand-blue-deep mb-2 leading-tight">
                  Ready to speak with our marketing expert?
                </h3>
                <p className="font-dm text-gray-500 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <FiCheckCircle className="text-green-500 text-3xl" />
                    </div>
                    <h4 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-2">
                      Message Sent!
                    </h4>
                    <p className="font-dm text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="font-dm text-xs font-bold uppercase tracking-wider text-brand-ink mb-2 block">
                        Name <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Eg: John Doe"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-border bg-brand-muted font-dm text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Business */}
                    <div>
                      <label htmlFor="contact-business" className="font-dm text-xs font-bold uppercase tracking-wider text-brand-ink mb-2 block">
                        Business Name / Industry <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                        <input
                          id="contact-business"
                          type="text"
                          name="business"
                          required
                          value={formState.business}
                          onChange={handleChange}
                          placeholder="Eg: Business Name"
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-border bg-brand-muted font-dm text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email + Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-email" className="font-dm text-xs font-bold uppercase tracking-wider text-brand-ink mb-2 block">
                          Email <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-border bg-brand-muted font-dm text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="font-dm text-xs font-bold uppercase tracking-wider text-brand-ink mb-2 block">
                          Phone Number <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+91 98217 74565"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-border bg-brand-muted font-dm text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="font-dm text-xs font-bold uppercase tracking-wider text-brand-ink mb-2 block">
                        Message
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-4 top-4 text-gray-400 text-base" />
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or goals..."
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-border bg-brand-muted font-dm text-sm text-brand-ink placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-brand-gold text-brand-ink font-dm font-bold text-base rounded-xl hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.35)" }}
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-brand-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FiArrowRight />
                        </>
                      )}
                    </button>

                    <p className="font-dm text-xs text-gray-400 text-center">
                      We&apos;ll respond within 24 hours. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ───────────────────────────────────────────── */}
      <section className="bg-brand-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Find Us
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-brand-blue-deep mt-2">
              Our Office Location
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-brand-border shadow-xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56149.38192245809!2d76.98237184863278!3d28.409105500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2263b1aedbff%3A0xd90d319fb1c06f49!2sThe%20Woodstock%20Floors!5e0!3m2!1sen!2sus!4v1775305312876!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BizBox Story Office Location – The Woodstock Floors, Gurugram"
            />
          </motion.div>

          {/* Office Address pill below map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-brand-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                <FiMapPin className="text-brand-gold text-lg" />
              </div>
              <div>
                <p className="font-dm font-bold text-brand-ink text-sm">India HQ</p>
                <p className="font-dm text-gray-500 text-xs">122, Woodstock Ave, Sector 50, Gurugram, Haryana 122018</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-brand-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                <FiMapPin className="text-brand-gold text-lg" />
              </div>
              <div>
                <p className="font-dm font-bold text-brand-ink text-sm">USA Office</p>
                <p className="font-dm text-gray-500 text-xs">1285 Main St, Holden, MA 01520, USA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── BOTTOM CTA BAR ───────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f1b3d 0%, #1a2f6b 50%, #0f1b3d 100%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold">
              Ready to Start?
            </span>
            <h2 className="font-fraunces text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Your{" "}
              <span className="text-brand-gold italic">Digital Growth</span>{" "}
              Starts Here
            </h2>
            <p className="font-dm text-white/60 text-lg max-w-xl mx-auto mb-10">
              Book a free strategy call with our experts and discover what&apos;s possible for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919821774565"
                className="font-dm font-semibold px-8 py-4 bg-brand-gold text-brand-ink rounded-full hover:bg-brand-gold-light transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                style={{ boxShadow: "0 12px 40px rgba(232,160,69,0.4)" }}
              >
                <FiPhone /> +91 98217 74565
              </a>
              <a
                href="mailto:info@bizboxstory.com"
                className="font-dm font-medium px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <FiMail /> info@bizboxstory.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
