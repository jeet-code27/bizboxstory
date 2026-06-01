import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | BizBox Story Digital Marketing Agency",
  description:
    "Read the Terms and Conditions for BizBox Story. Learn about our service agreements, intellectual property rights, payment terms, liability limitations, and governing law for clients in India and the United States.",
  alternates: {
    canonical: "https://bizboxstory.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms and Conditions | BizBox Story",
    description:
      "Read the Terms and Conditions for BizBox Story Digital Marketing Agency. Effective June 1, 2026.",
    url: "https://bizboxstory.com/terms-and-conditions",
    siteName: "BizBox Story",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    id: "about",
    number: "1",
    title: "About Us",
    content: (
      <>
        <p>
          Biz Box Story is a digital marketing agency operating from:
        </p>
        <ul>
          <li>Gurgaon, Haryana, India</li>
          <li>Holden, Massachusetts, United States</li>
        </ul>
        <p>
          We provide a range of digital marketing services including, but not limited to, search
          engine optimisation (SEO), pay-per-click advertising, social media marketing, content
          creation, website design, branding, and analytics consulting.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    number: "2",
    title: "Acceptance of Terms",
    content: (
      <p>
        By using this Site or entering into a service agreement with Biz Box Story, you confirm
        that you are at least 18 years of age, have the legal capacity to enter into binding
        agreements, and agree to these Terms and our Privacy Policy. These Terms apply to all
        visitors, clients, and anyone who accesses our Site or uses our services.
      </p>
    ),
  },
  {
    id: "services",
    number: "3",
    title: "Services",
    content: (
      <>
        <h3>3.1 Service Engagement</h3>
        <p>
          All services provided by Biz Box Story are subject to a separate written agreement or
          Statement of Work (SOW) signed between the client and Biz Box Story. These Terms form the
          general legal framework within which all such agreements operate.
        </p>
        <h3>3.2 Service Modifications</h3>
        <p>
          We reserve the right to modify, suspend, or discontinue any service at any time with
          reasonable notice to the client. Biz Box Story shall not be liable for any modification,
          suspension, or discontinuation of services.
        </p>
        <h3>3.3 Third-Party Platforms</h3>
        <p>
          Many of our services involve the use of third-party platforms (e.g., Google Ads, Meta,
          LinkedIn, etc.). Your use of those platforms is subject to their respective terms of
          service. Biz Box Story is not responsible for changes, restrictions, or decisions made by
          third-party platforms that may affect the results or delivery of our services.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    number: "4",
    title: "Client Responsibilities",
    content: (
      <>
        <p>Clients agree to:</p>
        <ul>
          <li>
            Provide accurate, complete, and up-to-date information required for the delivery of
            services.
          </li>
          <li>
            Ensure timely access to accounts, assets, logins, and approvals necessary for campaign
            execution.
          </li>
          <li>
            Comply with all applicable laws and regulations in connection with the use of our
            services.
          </li>
          <li>Not use our services for any unlawful, misleading, or fraudulent purpose.</li>
          <li>
            Notify Biz Box Story promptly of any changes to their business that may affect the
            services.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "5",
    title: "Intellectual Property",
    content: (
      <>
        <h3>5.1 Ownership of Deliverables</h3>
        <p>
          Upon receipt of full payment, clients receive a limited, non-exclusive licence to use
          deliverables created by Biz Box Story. Unless explicitly stated otherwise in a written
          agreement, Biz Box Story retains all intellectual property rights in all creative works,
          strategies, processes, and methodologies used or developed during the provision of
          services.
        </p>
        <h3>5.2 Client-Provided Materials</h3>
        <p>
          Clients grant Biz Box Story a non-exclusive licence to use their logos, trademarks,
          content, and materials solely for the purpose of performing the agreed services. Clients
          warrant that they have the right to provide such materials and that their use will not
          infringe any third-party rights.
        </p>
        <h3>5.3 Site Content</h3>
        <p>
          All content on this Site, including text, graphics, logos, images, and software, is the
          property of Biz Box Story or its content licensors and is protected by applicable
          intellectual property laws. Unauthorised use, reproduction, or distribution is strictly
          prohibited.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    number: "6",
    title: "Confidentiality",
    content: (
      <p>
        Both parties agree to keep confidential any proprietary or sensitive information shared
        during the course of the business relationship. This obligation survives the termination of
        any service agreement. Neither party shall disclose confidential information to third
        parties without prior written consent, except as required by law.
      </p>
    ),
  },
  {
    id: "payment",
    number: "7",
    title: "Payment Terms",
    content: (
      <ul>
        <li>Payment terms are set out in the applicable SOW or invoice.</li>
        <li>All fees are due as agreed; late payments may incur interest or service suspension.</li>
        <li>Fees are non-refundable unless otherwise stated in a written agreement.</li>
        <li>
          Clients are responsible for any applicable taxes, including GST (India) or applicable US
          taxes, on services rendered.
        </li>
      </ul>
    ),
  },
  {
    id: "liability",
    number: "8",
    title: "Disclaimers and Limitation of Liability",
    content: (
      <>
        <h3>8.1 No Guaranteed Results</h3>
        <p>
          Digital marketing outcomes are inherently variable and depend on numerous factors beyond
          our control, including platform algorithms, market competition, and client cooperation.
          Biz Box Story makes no guarantee of specific results such as rankings, traffic,
          conversions, or revenue.
        </p>
        <h3>8.2 Site Disclaimer</h3>
        <p>
          This Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make
          no representations or warranties of any kind, express or implied, regarding the accuracy,
          reliability, or completeness of the content on this Site.
        </p>
        <h3>8.3 Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by applicable law, Biz Box Story shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages arising out of or
          relating to the use of our services or Site, even if advised of the possibility of such
          damages. Our total aggregate liability shall not exceed the fees paid by the client in the
          three months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "9",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify, defend, and hold harmless Biz Box Story, its directors, employees,
        and agents from and against any claims, liabilities, damages, losses, or expenses arising
        out of or related to your use of our services, violation of these Terms, or infringement of
        any third-party rights.
      </p>
    ),
  },
  {
    id: "termination",
    number: "10",
    title: "Termination",
    content: (
      <p>
        Either party may terminate a service engagement in accordance with the terms set out in the
        applicable SOW or service agreement. Biz Box Story reserves the right to suspend or
        terminate access to the Site or services immediately if a client breaches these Terms.
        Clauses relating to intellectual property, confidentiality, payment, and limitation of
        liability survive termination.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "11",
    title: "Governing Law and Jurisdiction",
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws applicable to
          the relevant jurisdiction based on the location of the contracting party:
        </p>
        <ul>
          <li>
            <strong>For clients in India:</strong> the laws of India, with disputes subject to the
            exclusive jurisdiction of the courts in Gurgaon, Haryana.
          </li>
          <li>
            <strong>For clients in the United States:</strong> the laws of the Commonwealth of
            Massachusetts, with disputes subject to the courts of Worcester County, Massachusetts.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to These Terms",
    content: (
      <p>
        Biz Box Story reserves the right to update these Terms at any time. Changes will be posted
        on this Site with an updated effective date. Continued use of our Site or services after
        changes are posted constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    number: "13",
    title: "Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul>
          <li>
            <strong>Website:</strong>{" "}
            <Link href="/" className="text-brand-gold hover:underline">
              www.bizboxstory.com
            </Link>
          </li>
          <li>
            <strong>India Office:</strong> Gurgaon, Haryana, India
          </li>
          <li>
            <strong>US Office:</strong> Holden, Massachusetts, USA
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: "https://bizboxstory.com/terms-and-conditions",
            description:
              "Terms and Conditions for Biz Box Story Digital Marketing Agency. Effective June 1, 2026.",
            publisher: {
              "@type": "Organization",
              name: "BizBox Story",
              url: "https://bizboxstory.com",
            },
            datePublished: "2026-06-01",
            dateModified: "2026-06-01",
          }),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#080c18]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/8 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs uppercase tracking-widest font-semibold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
            Legal
          </span>
          <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-tight">
            Terms &amp;{" "}
            <span className="text-brand-gold italic">Conditions</span>
          </h1>
          <p className="mt-6 font-dm text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before accessing or using our website or engaging our
            digital marketing services.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 font-dm text-white/40 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
            Effective Date: June 1, 2026
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* ── STICKY SIDEBAR ──────────────────────────────────────────── */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-3xl p-7 border border-brand-border shadow-sm">
                <p className="font-dm text-xs text-brand-gold uppercase tracking-widest font-semibold mb-5">
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-dm text-sm text-gray-500 hover:text-brand-blue-deep hover:bg-brand-muted transition-all duration-200 group"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-ink transition-colors">
                        {s.number}
                      </span>
                      <span className="leading-snug">{s.title}</span>
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-brand-border">
                  <p className="font-dm text-xs text-gray-400 mb-4 leading-relaxed">
                    Have questions about these Terms?
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center font-dm font-semibold text-sm px-5 py-3 bg-brand-gold text-brand-ink rounded-xl hover:bg-brand-gold-light transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── CONTENT BODY ──────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">

              {/* Welcome card */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-3xl p-8 mb-10">
                <p className="font-dm text-gray-700 leading-relaxed text-base">
                  Welcome to <strong>Biz Box Story</strong>. By accessing or using our website at{" "}
                  <Link href="/" className="text-brand-gold font-semibold hover:underline">
                    www.bizboxstory.com
                  </Link>{" "}
                  (the &quot;Site&quot;) or engaging our digital marketing services, you agree to be
                  bound by these Terms and Conditions (&quot;Terms&quot;). Please read them
                  carefully. If you do not agree with any part of these Terms, you must not use our
                  Site or services.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-3xl border border-brand-border p-8 sm:p-10 scroll-mt-32 hover:border-brand-gold/30 transition-colors duration-300"
                  >
                    {/* Section header */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold font-fraunces font-bold text-xl flex items-center justify-center">
                        {section.number}
                      </div>
                      <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-brand-blue-deep leading-tight pt-1.5">
                        {section.title}
                      </h2>
                    </div>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-brand-gold/40 rounded-full mb-6 ml-[68px]" />

                    {/* Body text */}
                    <div className="ml-0 sm:ml-[68px] terms-content font-dm text-gray-600 leading-relaxed text-base space-y-4">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-10 bg-brand-muted border border-brand-border rounded-3xl p-8 text-center">
                <p className="font-dm text-gray-500 text-sm leading-relaxed">
                  These Terms were last updated on{" "}
                  <span className="font-semibold text-brand-blue-deep">June 1, 2026</span>. If you
                  have any questions, please{" "}
                  <Link href="/contact" className="text-brand-gold font-semibold hover:underline">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
