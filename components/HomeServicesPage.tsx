import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronDown, FiChevronRight, FiMapPin, FiPhone } from "react-icons/fi";
import GrowthAssessmentForm from "@/components/GrowthAssessmentForm";
import {
  homeServicePath,
  homeServicesHub,
  homeServiceVerticals,
  type HomeServicePage,
} from "@/lib/homeServices";

const SITE_URL = "https://bizboxstory.com";

const serviceAreas = ["Greater Boston", "Worcester County", "Eastern Massachusetts", "Providence, RI", "Southern New Hampshire"];

const measurementSteps = [
  { title: "Search", desc: "A homeowner in your territory searches for the job you want more of." },
  { title: "Track", desc: "Calls and forms are tied back to the keyword and ad group behind them." },
  { title: "Book", desc: "Leads are reconciled against the estimates and jobs your team closes." },
  { title: "Optimize", desc: "Budget moves toward whatever delivers the lowest cost per booked job." },
];

function buildSchema(page: HomeServicePage) {
  const url = `${SITE_URL}${homeServicePath(page)}`;
  const crumbs = [
    { name: "Home", item: `${SITE_URL}/` },
    { name: homeServicesHub.navName, item: `${SITE_URL}${homeServicePath(homeServicesHub)}` },
    ...(page.slug ? [{ name: page.navName, item: url }] : []),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        serviceType: page.serviceType,
        description: page.description,
        url,
        provider: { "@type": "Organization", name: "BizBox Story", url: SITE_URL },
        areaServed: [
          { "@type": "State", name: "Massachusetts" },
          { "@type": "State", name: "Rhode Island" },
          { "@type": "State", name: "New Hampshire" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.item,
        })),
      },
    ],
  };
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <span className="font-dm text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">{eyebrow}</span>
      <h2 className={`mt-3 font-fraunces text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-brand-blue-deep"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function HomeServicesPage({ page }: { page: HomeServicePage }) {
  const isHub = !page.slug;
  const relatedPages = homeServiceVerticals.filter((v) => v.slug !== page.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(page)).replace(/</g, "\\u003c") }}
      />

      <article>
        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-brand-blue-deep">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-[100px]" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="min-w-0">
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 font-dm text-sm text-white/60">
                <Link href="/" className="transition-colors hover:text-brand-gold">Home</Link>
                <FiChevronRight className="h-3.5 w-3.5" />
                {isHub ? (
                  <span className="text-white/90">{homeServicesHub.navName}</span>
                ) : (
                  <>
                    <Link href={homeServicePath(homeServicesHub)} className="transition-colors hover:text-brand-gold">{homeServicesHub.navName}</Link>
                    <FiChevronRight className="h-3.5 w-3.5" />
                    <span className="text-white/90">{page.navName}</span>
                  </>
                )}
              </nav>

              <h1 className="font-fraunces text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">{page.h1}</h1>
              <p className="mt-5 font-dm text-lg font-medium leading-relaxed text-brand-gold sm:text-xl">{page.subhead}</p>

              <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-gold px-7 py-4 font-dm font-bold text-brand-ink transition-colors hover:bg-brand-gold-light"
                >
                  Book a Growth Assessment <FiArrowRight />
                </a>
                <a
                  href="tel:+15087868636"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-4 font-dm font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <FiPhone /> +1-508-786-8636
                </a>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl border-2 border-brand-gold/50 sm:block" />
              <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── DIRECT ANSWER + INTRO ─────────────────────────────────── */}
        <section className="bg-brand-surface py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="border-l-4 border-brand-gold pl-5 font-fraunces text-xl font-semibold leading-relaxed text-brand-blue-deep sm:pl-7 sm:text-2xl">
              {page.answer}
            </p>
            <div className="mt-8 space-y-5 font-dm text-base leading-relaxed text-gray-600 sm:text-lg">
              {page.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── HUB: VERTICAL CARDS ───────────────────────────────────── */}
        {isHub && (
          <section className="bg-brand-muted py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading eyebrow="Explore Our Playbooks" title="Core Home-Service Verticals We Grow" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {homeServiceVerticals.map((v) => (
                  <Link
                    key={v.slug}
                    href={homeServicePath(v)}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-fraunces text-xl font-bold text-brand-blue-deep">{v.navName}</h3>
                      <p className="mt-2 font-dm text-[15px] leading-relaxed text-gray-600">{v.cardSummary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-dm text-sm font-bold text-brand-blue-mid">
                        View playbook <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── PILLARS ───────────────────────────────────────────────── */}
        <section className={isHub ? "bg-brand-surface py-16 sm:py-24" : "bg-brand-muted py-16 sm:py-24"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How It Works" title={page.pillarsHeading} />
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${page.pillars.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {page.pillars.map((pillar, i) => (
                <div key={pillar.title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm sm:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold-dim font-fraunces text-lg font-bold text-brand-blue-deep">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-fraunces text-xl font-bold leading-snug text-brand-blue-deep">{pillar.title}</h3>
                  <p className="mt-3 font-dm text-[15px] leading-relaxed text-gray-600">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEASUREMENT ───────────────────────────────────────────── */}
        <section className="bg-brand-blue-deep py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="What We Measure" title="Built Around Cost Per Booked Job" light />
            <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {measurementSteps.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-brand-blue-mid/60 p-6">
                  <span className="font-dm text-sm font-bold tracking-widest text-brand-gold">STEP {i + 1}</span>
                  <h3 className="mt-2 font-fraunces text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 font-dm text-[15px] leading-relaxed text-white/75">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── SERVICE AREA ──────────────────────────────────────────── */}
        <section className="bg-brand-surface py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-fraunces text-3xl font-bold text-brand-blue-deep sm:text-4xl">Serving New England Contractors Remotely</h2>
            <p className="mx-auto mt-4 max-w-2xl font-dm text-base leading-relaxed text-gray-600 sm:text-lg">
              We work remotely with contractors across these markets and in metro areas nationwide.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <li key={area} className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2.5 font-dm text-sm font-semibold text-brand-blue-deep">
                  <FiMapPin className="h-4 w-4 text-brand-gold" /> {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="bg-brand-muted py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <details key={faq.q} open={i === 0} className="group rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-fraunces text-lg font-bold text-brand-blue-deep [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <FiChevronDown className="mt-1 h-5 w-5 flex-shrink-0 text-brand-gold transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 font-dm text-[15px] leading-relaxed text-gray-600 sm:text-base">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED VERTICALS ─────────────────────────────────────── */}
        {!isHub && (
          <section className="bg-brand-surface py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-center font-fraunces text-3xl font-bold text-brand-blue-deep">More Home-Service Playbooks</h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {relatedPages.map((v) => (
                  <Link
                    key={v.slug}
                    href={homeServicePath(v)}
                    className="flex items-center justify-between gap-3 rounded-xl border border-brand-border px-5 py-4 font-dm font-semibold text-brand-blue-deep transition-colors hover:border-brand-gold hover:bg-brand-gold-dim"
                  >
                    {v.navName} <FiArrowRight className="flex-shrink-0 text-brand-gold" />
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-center">
                <Link href={homeServicePath(homeServicesHub)} className="font-dm font-bold text-brand-blue-mid underline-offset-4 hover:underline">
                  See all home-service marketing
                </Link>
              </p>
            </div>
          </section>
        )}

        {/* ── ASSESSMENT FORM ───────────────────────────────────────── */}
        <section id="assessment" className="scroll-mt-24 bg-brand-blue-deep py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
            <div className="min-w-0 lg:col-span-2">
              <span className="font-dm text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">Growth Assessment</span>
              <h2 className="mt-3 font-fraunces text-3xl font-bold leading-tight text-white sm:text-4xl">{page.ctaHeading}</h2>
              <p className="mt-4 font-dm text-base leading-relaxed text-white/80 sm:text-lg">{page.ctaText}</p>
            </div>
            <div className="min-w-0 lg:col-span-3">
              <GrowthAssessmentForm trade={page.trade} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
