import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BizBox Story Digital Marketing Agency",
  description:
    "Read the Privacy Policy for BizBox Story. Learn how we collect, use, and protect your personal information when you visit our website or engage our digital marketing services.",
  alternates: {
    canonical: "https://bizboxstory.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | BizBox Story",
    description:
      "Read the Privacy Policy for BizBox Story Digital Marketing Agency. Effective June 1, 2026.",
    url: "https://bizboxstory.com/privacy-policy",
    siteName: "BizBox Story",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    id: "who-we-are",
    number: "1",
    title: "Who We Are",
    content: (
      <p>
        Biz Box Story is a digital marketing agency with offices in Gurgaon, Haryana, India and
        Holden, Massachusetts, USA. We act as a <strong>data controller</strong> in respect of
        personal data collected through our Site and as a <strong>data processor</strong> in respect
        of client data shared with us for service delivery.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    number: "2",
    title: "Information We Collect",
    content: (
      <>
        <h3>2.1 Information You Provide</h3>
        <p>We may collect the following personal information you voluntarily provide:</p>
        <ul>
          <li>
            Name, email address, phone number, and company details submitted via contact forms or
            enquiries.
          </li>
          <li>Billing and payment information for service engagements.</li>
          <li>Communications sent to us via email or through the Site.</li>
          <li>Account credentials if applicable to any client portal.</li>
        </ul>
        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our Site, we may automatically collect:</p>
        <ul>
          <li>IP address, browser type, operating system, and device information.</li>
          <li>Pages visited, time spent on pages, and referring URLs.</li>
          <li>Cookies and similar tracking technologies (see Section 7).</li>
        </ul>
        <h3>2.3 Information from Third Parties</h3>
        <p>
          We may receive information about you from third-party platforms such as Google Analytics,
          social media platforms, or advertising partners in connection with campaigns we manage on
          your behalf.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "3",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use your personal information to:</p>
        <ul>
          <li>Respond to enquiries and communicate with you about our services.</li>
          <li>
            Deliver, manage, and improve the digital marketing services you have engaged us for.
          </li>
          <li>Process payments and maintain billing records.</li>
          <li>
            Send you relevant updates, newsletters, and marketing communications (with your
            consent).
          </li>
          <li>Analyse Site usage to improve user experience and service quality.</li>
          <li>Comply with legal obligations and enforce our Terms and Conditions.</li>
          <li>Prevent fraud and ensure the security of our Site and services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    number: "4",
    title: "Legal Basis for Processing",
    content: (
      <>
        <p>
          Where required by applicable law, we process your personal data on the following legal
          bases:
        </p>
        <ul>
          <li>
            <strong>Contractual necessity</strong> – to perform services you have requested.
          </li>
          <li>
            <strong>Legitimate interests</strong> – to improve our services and conduct marketing
            activities.
          </li>
          <li>
            <strong>Consent</strong> – where you have explicitly opted in to receive marketing
            communications.
          </li>
          <li>
            <strong>Legal obligation</strong> – to comply with applicable laws and regulations.
          </li>
        </ul>
        <p>
          For clients in India, our practices are aligned with the{" "}
          <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong> and other applicable
          Indian privacy laws.
        </p>
      </>
    ),
  },
  {
    id: "how-we-share",
    number: "5",
    title: "How We Share Your Information",
    content: (
      <>
        <p>
          We do <strong>not sell</strong> your personal information. We may share your data with:
        </p>
        <ul>
          <li>
            Service providers and subcontractors who assist us in delivering our services (subject
            to confidentiality obligations).
          </li>
          <li>
            Third-party advertising and analytics platforms (e.g., Google, Meta) as necessary for
            campaign execution.
          </li>
          <li>Professional advisors such as lawyers or accountants as required.</li>
          <li>
            Regulatory or government authorities if required by law or to protect legal rights.
          </li>
          <li>
            Successor entities in the event of a merger, acquisition, or business transfer.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "6",
    title: "International Data Transfers",
    content: (
      <p>
        As Biz Box Story operates across India and the United States, your personal data may be
        transferred between these jurisdictions. We take appropriate measures to ensure such
        transfers comply with applicable data protection laws, including implementing contractual
        safeguards where required.
      </p>
    ),
  },
  {
    id: "cookies",
    number: "7",
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p>We use cookies and similar technologies on our Site to:</p>
        <ul>
          <li>Understand how visitors use the Site (analytics).</li>
          <li>Improve Site performance and user experience.</li>
          <li>Support marketing and remarketing activities.</li>
        </ul>
        <p>
          You may manage or disable cookies through your browser settings. Please note that
          disabling certain cookies may affect the functionality of the Site. By continuing to use
          our Site, you consent to the use of cookies as described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "8",
    title: "Data Retention",
    content: (
      <p>
        We retain your personal information only for as long as necessary to fulfil the purposes for
        which it was collected, to comply with legal obligations, resolve disputes, and enforce our
        agreements. Client data related to active service engagements is retained for the duration
        of the engagement and for a period of up to <strong>7 years</strong> thereafter for legal
        and accounting purposes.
      </p>
    ),
  },
  {
    id: "your-rights",
    number: "9",
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on your location, you may have the following rights regarding your personal
          data:
        </p>
        <ul>
          <li>Right to access the personal data we hold about you.</li>
          <li>Right to correct inaccurate or incomplete data.</li>
          <li>Right to erasure (the &quot;right to be forgotten&quot;) in certain circumstances.</li>
          <li>Right to restrict or object to processing.</li>
          <li>Right to data portability.</li>
          <li>
            Right to withdraw consent at any time (where processing is based on consent).
          </li>
          <li>Right to lodge a complaint with a relevant data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the details in{" "}
          <a href="#contact-us">Section 14</a>. We will respond within the timeframe required by
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "10",
    title: "Security",
    content: (
      <p>
        We implement appropriate technical and organisational measures to protect your personal
        information against unauthorised access, alteration, disclosure, or destruction. However, no
        method of transmission over the internet or electronic storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    number: "11",
    title: "Children's Privacy",
    content: (
      <p>
        Our Site and services are not directed at individuals under the age of 18. We do not
        knowingly collect personal information from children. If you believe a child has provided us
        with personal data without parental consent, please contact us and we will take steps to
        delete such information.
      </p>
    ),
  },
  {
    id: "third-party-links",
    number: "12",
    title: "Third-Party Links",
    content: (
      <p>
        Our Site may contain links to third-party websites. We are not responsible for the privacy
        practices or content of those sites. We encourage you to review the privacy policies of any
        third-party sites you visit.
      </p>
    ),
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes
        by posting the updated policy on this Site with a revised effective date. Your continued use
        of our Site or services after changes are posted constitutes acceptance of the updated
        policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    number: "14",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us at:
        </p>
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
        <p>
          We are committed to resolving any concerns you may have about our handling of your
          personal data.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://bizboxstory.com/privacy-policy",
            description:
              "Privacy Policy for Biz Box Story Digital Marketing Agency. Effective June 1, 2026.",
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
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-xs uppercase tracking-widest font-semibold mb-6 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/10">
            Legal
          </span>
          <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-tight">
            Privacy{" "}
            <span className="text-brand-gold italic">Policy</span>
          </h1>
          <p className="mt-6 font-dm text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your personal
            information when you visit our website or engage our services.
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
                    Have questions about our data practices?
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

              {/* Intro card */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-3xl p-8 mb-10">
                <p className="font-dm text-gray-700 leading-relaxed text-base">
                  <strong>Biz Box Story</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                  is committed to protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your personal information when you visit{" "}
                  <Link href="/" className="text-brand-gold font-semibold hover:underline">
                    www.bizboxstory.com
                  </Link>{" "}
                  or engage with our services. By using our Site or services, you consent to the
                  practices described in this policy.
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
                    <div className="ml-0 sm:ml-[68px] privacy-content font-dm text-gray-600 leading-relaxed text-base space-y-4">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-10 bg-brand-muted border border-brand-border rounded-3xl p-8 text-center">
                <p className="font-dm text-gray-500 text-sm leading-relaxed">
                  This Privacy Policy was last updated on{" "}
                  <span className="font-semibold text-brand-blue-deep">June 1, 2026</span>. If you
                  have any questions, please{" "}
                  <Link href="/contact" className="text-brand-gold font-semibold hover:underline">
                    contact us
                  </Link>{" "}
                  or view our{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    Terms &amp; Conditions
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
