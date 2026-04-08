"use client";

import Image from "next/image";

const clients = [
  { name: "OLX", logo: "/images/clients/olx.png" },
  { name: "BJP", logo: "/images/clients/bjp.webp" },
  { name: "Zaza City", logo: "/images/clients/zaza-city.png" },
  { name: "Bima Company", logo: "/images/clients/bima-company.webp" },
  { name: "The Hive Cafe", logo: "/images/clients/the-hive-cafe.webp" },
  { name: "Canna Connect", logo: "/images/clients/canna-connect.webp" },
  { name: "Nirvana DC", logo: "/images/clients/nirvanadc-logo.webp" },
  { name: "HCL Foundation", logo: "/images/clients/hcl-foundation.webp" },
  { name: "Saankanvali", logo: "/images/clients/saankanvali.webp" },
  { name: "Pest Control Boston", logo: "/images/clients/pest-control-boston.png" },
  { name: "Bed Bug Boston", logo: "/images/clients/bed-bug-boston-logo.jpg" },
  { name: "Plugd", logo: "/images/clients/plugd-logo.png" },
  { name: "District Cure", logo: "/images/clients/district-cure.png" },
  { name: "Torch", logo: "/images/clients/torch.svg" },
];

export default function ClientLogos() {
  return (
    <section className="bg-brand-muted py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-dm font-semibold text-sm uppercase tracking-widest text-brand-blue-deep/60 text-center">
          Brands That Trust BizBox Story
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex shrink-0">
            {clients.map((client, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="bg-white border border-brand-border rounded-xl px-8 py-6 mx-3 sm:mx-4 flex items-center justify-center w-[240px] h-[120px] shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} — BizBox Story Client`}
                  loading="lazy"
                  className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Duplicated set of logos for infinite scrolling */}
          <div className="flex shrink-0">
            {clients.map((client, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="bg-white border border-brand-border rounded-xl px-8 py-6 mx-3 sm:mx-4 flex items-center justify-center w-[240px] h-[120px] shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} — BizBox Story Client`}
                  loading="lazy"
                  className="max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Left/Right Fading Gradients */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-brand-muted to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-brand-muted to-transparent pointer-events-none" />
      </div>

      <div className="mt-10 px-4">
        <p className="font-dm text-sm text-brand-blue-deep/70 text-center">
          And 40+ more businesses across the US, India, UK &amp; beyond
        </p>
      </div>
    </section>
  );
}
