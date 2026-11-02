"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { trackMetaEvent } from "@/lib/metaPixel";
import { homeServiceTrades } from "@/lib/homeServices";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-dm text-base text-brand-ink placeholder:text-gray-400 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";
const labelClass = "mb-1.5 block font-dm text-sm font-semibold text-brand-blue-deep";

export default function GrowthAssessmentForm({ trade = "" }: { trade?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d2be3617-99b0-4a71-8da8-874ddb392790");
    formData.append("subject", `New Home-Service Growth Assessment Request - ${formData.get("trade")}`);
    formData.append("page", window.location.pathname);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        trackMetaEvent("Lead", {
          content_name: "Home-Service Growth Assessment",
          content_category: String(formData.get("trade")),
        });
      } else {
        console.error("Form submission failed", result);
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
        <FiCheckCircle className="mx-auto h-14 w-14 text-brand-gold" />
        <h3 className="mt-5 font-fraunces text-2xl font-bold text-brand-blue-deep">Thanks, we have your details.</h3>
        <p className="mt-3 font-dm text-gray-600">Our team will review your market and reach out shortly. Want to lock in a time now?</p>
        <Link
          href="/free-strategy-call"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-dm font-bold text-brand-ink transition-colors hover:bg-brand-gold-light"
        >
          Choose a Call Time <FiArrowRight />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="hs-name" className={labelClass}>Full Name</label>
          <input id="hs-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="hs-business" className={labelClass}>Business Name</label>
          <input id="hs-business" name="business" required autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="hs-trade" className={labelClass}>Trade / Industry</label>
          <select id="hs-trade" name="trade" required defaultValue={trade} className={inputClass}>
            <option value="" disabled>Select your trade</option>
            {homeServiceTrades.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="hs-area" className={labelClass}>Primary Service Area</label>
          <input id="hs-area" name="service_area" required placeholder="City, State" className={inputClass} />
        </div>
        <div>
          <label htmlFor="hs-budget" className={labelClass}>Monthly Marketing Budget</label>
          <select id="hs-budget" name="budget" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a range</option>
            <option>Under $2,500</option>
            <option>$2,500 - $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="hs-leads" className={labelClass}>Current Monthly Lead Volume</label>
          <select id="hs-leads" name="lead_volume" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a range</option>
            <option>Under 25</option>
            <option>25 - 75</option>
            <option>75 - 200</option>
            <option>200+</option>
          </select>
        </div>
        <div>
          <label htmlFor="hs-email" className={labelClass}>Email</label>
          <input id="hs-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="hs-phone" className={labelClass}>Phone</label>
          <input id="hs-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      {error && <p role="alert" className="mt-4 font-dm text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 font-dm text-base font-bold text-brand-ink transition-colors hover:bg-brand-gold-light disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Book a Growth Assessment"} <FiArrowRight />
      </button>
    </form>
  );
}
