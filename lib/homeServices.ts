export const HOME_SERVICES_BASE = "/industries/home-services-marketing";

export type HomeServiceFaq = { q: string; a: string };
export type HomeServicePillar = { title: string; desc: string };

export type HomeServicePage = {
  slug: string;
  navName: string;
  cardSummary: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  subhead: string;
  answer: string;
  intro: string[];
  pillarsHeading: string;
  pillars: HomeServicePillar[];
  faqs: HomeServiceFaq[];
  ctaHeading: string;
  ctaText: string;
  serviceName: string;
  serviceType: string;
  trade: string;
};

export const homeServicesHub: HomeServicePage = {
  slug: "",
  navName: "Home Services Marketing",
  cardSummary: "SEO, paid search, and conversion tracking for US home-service contractors.",
  image: "/images/home-services/home-services-hub.jpg",
  imageAlt: "Home-service contractor van parked outside a New England colonial home",
  title: "Home Services Digital Marketing Agency | BizBox Story",
  description:
    "Grow your contractor business with high-intent SEO, Google Local Services Ads, and call tracking. Digital marketing for New England and US home services.",
  keywords: ["home services digital marketing agency", "contractor marketing", "New England contractor marketing", "home service SEO"],
  h1: "Digital Marketing for US Home-Service Businesses",
  subhead: "Predictable Booked Jobs for Trade Contractors Across New England and the US",
  answer:
    "BizBox Story is a digital marketing agency for US home-service contractors. We build search authority, manage high-intent local ads, and set up call and form tracking so every campaign is judged by one outcome: verified, booked service jobs.",
  intro: [
    "Whether your territory spans Greater Boston, Worcester County, Providence, Southern New Hampshire, or national metro markets, our marketing systems reach local homeowners at the moment they need repairs, replacements, and routine services.",
    "We work remotely as an embedded growth partner for your dispatch desk, with campaigns built around your trucks, crews, and service radius.",
  ],
  pillarsHeading: "The 6-Pillar Contractor Acquisition System",
  pillars: [
    { title: "Google Business Profile & Local 3-Pack", desc: "Local targeting across multi-town service areas, citation clean-up, and structured trade schema that makes your territory clear to Google." },
    { title: "Paid Search & Local Services Ads", desc: "Google Ads and Local Services Ads management, including Google Verified setup and strict negative keyword filtering to cut wasted spend." },
    { title: "High-Converting Landing Pages", desc: "Fast, mobile-first pages with tap-to-call, upfront trust proof, and simple estimate request flows." },
    { title: "Call Tracking & Form Attribution", desc: "Dynamic number insertion with tools such as CallRail, so inbound calls trace back to the keyword and ad group that produced them." },
    { title: "Dispatch & CRM Alignment", desc: "Lead data matched against platforms like ServiceTitan, Housecall Pro, or Jobber to calculate your true cost per booked job." },
    { title: "Transparent ROI Reporting", desc: "Search Console tracking, verified lead logs, and a monthly performance review in plain language." },
  ],
  faqs: [
    {
      q: "What does a home-service digital marketing agency do?",
      a: "A home-service marketing agency manages search engine optimization, Google Business Profile rankings, local pay-per-click advertising, and website conversion optimization for trade companies. Unlike generalist agencies, we plan around service territory radius, technician capacity, and cost per booked job rather than vanity metrics.",
    },
    {
      q: "How do you measure booked jobs instead of just leads?",
      a: "We pair call tracking and form tagging with your field-service workflow, for example ServiceTitan, Jobber, or Housecall Pro. By reconciling phone leads and form submissions against your closed estimates, we can report true cost per acquisition and return on ad spend.",
    },
    {
      q: "How does BizBox Story serve New England contractors?",
      a: "We work as a remote digital marketing partner for independent contractors, multi-truck operations, and franchise owners across Massachusetts, Rhode Island, New Hampshire, and the wider US. Campaigns, content, and ad funnels are tailored to your local market and seasonal weather patterns.",
    },
  ],
  ctaHeading: "Book Your Home-Service Growth Assessment",
  ctaText: "We'll review your search rankings, Google Maps coverage, and paid advertising performance.",
  serviceName: "Home-Services Digital Marketing",
  serviceType: "Contractor SEO, PPC, and AI Search Optimization",
  trade: "",
};

export const homeServiceVerticals: HomeServicePage[] = [
  {
    slug: "junk-removal-marketing",
    navName: "Junk Removal Marketing",
    cardSummary: "Multi-town truck booking and residential or commercial cleanout leads.",
    image: "/images/home-services/junk-removal-marketing.jpg",
    imageAlt: "Junk removal crew loading old furniture into a box truck at a New England home",
    title: "Junk Removal Marketing Agency | BizBox Story",
    description:
      "Turn local searches into booked truckloads. High-converting junk removal SEO, Google Ads, and quote systems for New England and US haulers.",
    keywords: ["junk removal marketing agency", "junk removal lead generation", "junk removal SEO", "junk removal Google Ads"],
    h1: "Junk Removal Marketing That Brings More Calls and Booked Jobs",
    subhead: "Full Truckloads, Multi-Town Route Density, and Predictable Job Booking",
    answer:
      "Junk removal marketing is the mix of local SEO, Google Ads, and fast mobile quoting that keeps trucks booked. BizBox Story builds these systems for independent haulers and multi-truck operators, with a focus on full loads and shorter drives between pickups.",
    intro: [
      "For junk removal companies, success isn't about pageviews. It's about keeping trucks rolling and minimizing deadhead miles between pickups.",
      "From garage cleanouts on the North Shore and estate clearouts in Providence to light demolition in Southern New Hampshire, we build search and paid funnels that reach customers with immediate disposal needs.",
    ],
    pillarsHeading: "The Junk Removal Growth Architecture",
    pillars: [
      { title: "Service-Area Pages", desc: "Dedicated landing pages for the suburbs and municipalities in your hauling radius, so you aren't only fighting for generic city-wide terms." },
      { title: "Google Business Profile Visibility", desc: "Optimization for high-intent searches like \"junk removal near me\" and \"same day furniture pickup\", paired with consistent review requests." },
      { title: "Google Search & Call Ads", desc: "Granular negative keyword lists that filter out searches for free dump addresses, municipal trash schedules, and hazardous waste disposal." },
      { title: "Text & Photo Quote Flow", desc: "Mobile booking funnels that let homeowners send a photo of their pile from their smartphone for a rapid estimate." },
    ],
    faqs: [
      {
        q: "How much should junk removal companies spend on ads?",
        a: "As a planning starting point, many independent haulers running 1 to 3 trucks test Google Ads and Local Services Ads at roughly $1,200 to $2,500 a month. The right number depends on your town, season, and truck capacity, so we set budget and cost-per-job targets after reviewing your market data.",
      },
      {
        q: "How do I get more local junk removal calls?",
        a: "Set up an accurate Google Business Profile for your primary yard or dispatch hub, run call-focused Google Ads during dispatch hours, and publish location-specific landing pages for residential estate cleanouts, hoarder cleanups, and commercial office cleanouts.",
      },
      {
        q: "Can digital marketing target higher-margin cleanouts over single-item pickups?",
        a: "Yes. Through ad copy and negative keyword rules, we de-prioritize searches for single couch disposals and focus on higher-margin jobs such as whole-house cleanouts, estate liquidations, foreclosure cleanups, and attic or basement cleanouts.",
      },
    ],
    ctaHeading: "Book Your Junk Removal Growth Assessment",
    ctaText: "We'll evaluate your truck capacity, target dispatch radius, and current customer acquisition costs.",
    serviceName: "Junk Removal Marketing",
    serviceType: "Junk Removal SEO, Google Ads, and Lead Generation",
    trade: "Junk Removal",
  },
  {
    slug: "roofing-marketing",
    navName: "Roofing Marketing",
    cardSummary: "Full tear-offs, storm recovery, and emergency leak repair customer acquisition.",
    image: "/images/home-services/roofing-marketing.jpg",
    imageAlt: "Roofers in safety harnesses installing architectural shingles on a New England home",
    title: "Roofing Marketing Agency for Qualified Leads | BizBox Story",
    description:
      "High-intent roofing marketing services. Reach homeowners who need full replacements, storm restoration, and repairs with SEO and Google Ads for roofers.",
    keywords: ["roofing marketing agency", "roofing leads", "roofing SEO", "Google Ads for roofers"],
    h1: "Roofing Marketing Services That Generate Qualified Roofing Leads",
    subhead: "Capture High-Ticket Roof Replacements and High-Margin Emergency Repairs",
    answer:
      "Roofing marketing works when it separates high-ticket replacements from low-dollar patch requests. BizBox Story builds SEO and Google Ads campaigns that send qualified homeowner leads to your estimators, with different funnels for urgent repairs and planned re-roofs.",
    intro: [
      "A successful roofing campaign separates architectural shingle replacements, slate work, and storm insurance jobs from small handyman patch requests.",
      "From historic coastal roofing in Massachusetts to winter ice dam and storm-damage recovery across New England, our geo-targeted campaigns put your company in front of homeowners at the point of need.",
    ],
    pillarsHeading: "Key Pillars of Our Roofing Acquisition Model",
    pillars: [
      { title: "Replacement vs. Repair Funnels", desc: "Search queries are split into two distinct funnels: urgent leak repair dispatch and full re-roof or replacement consultations." },
      { title: "Weather & Storm Response", desc: "Ad plans that can ramp up search visibility quickly after high-wind events, hail, and heavy winter storms." },
      { title: "Neighborhood Trust Signals", desc: "Local project galleries, the manufacturer credentials you hold (such as GAF, Owens Corning, or CertainTeed), and neighborhood-level case studies." },
      { title: "Lead Quality Filtering", desc: "Online assessment forms that ask for roof age, suspected issue, and property type to screen out low-intent inquiries." },
    ],
    faqs: [
      {
        q: "Is SEO or Google Ads better for roofing contractors?",
        a: "They serve different stages. Google Ads captures urgent intent such as active storm damage and serious leaks, and can start producing calls within days. SEO and Google Business Profile work build long-term visibility for planned roof replacements with no per-click media cost. A balanced budget uses paid search for near-term jobs while organic authority grows.",
      },
      {
        q: "How can roofers filter out low-quality leads and tire-kickers?",
        a: "Use multi-step estimate forms that ask about roof age and pitch, exclude DIY repair terms with negative keywords, and build landing pages that clearly state minimum project sizes, warranties, and craftsmanship standards.",
      },
    ],
    ctaHeading: "Book Your Roofing Lead Strategy Call",
    ctaText: "See how many qualified roof replacement searches your competitors are capturing in your target counties.",
    serviceName: "Roofing Contractor Marketing",
    serviceType: "Roofing SEO, Google Ads, and Reputation Marketing",
    trade: "Roofing",
  },
  {
    slug: "hvac-marketing",
    navName: "HVAC Marketing",
    cardSummary: "Seasonal demand capture, emergency dispatch, and heat pump rebate visibility.",
    image: "/images/home-services/hvac-marketing.jpg",
    imageAlt: "HVAC technician servicing an outdoor heat pump beside a New England home in autumn",
    title: "HVAC Marketing Agency for Calls & Installs | BizBox Story",
    description:
      "Fill your HVAC technician boards year-round. Heating, AC replacement, heat pump rebate, and emergency repair lead generation for HVAC contractors.",
    keywords: ["HVAC digital marketing agency", "HVAC marketing", "HVAC lead generation", "heat pump marketing"],
    h1: "HVAC Marketing for More Service Calls and Installation Leads",
    subhead: "Year-Round Technician Utilization Across Peak and Shoulder Seasons",
    answer:
      "HVAC marketing has to follow the weather. BizBox Story designs campaigns that shift focus between urgent repairs and high-margin heat pump and full-system installs, so technicians stay busy through summer peaks, New England winters, and slower spring and fall shoulder seasons.",
    intro: [
      "HVAC demand swings hard by season. In summer, AC failures flood phone lines; in freezing New England winters, emergency furnace and boiler calls take over.",
      "The real challenge is generating profitable system replacements and maintaining service volume during the spring and fall shoulder seasons.",
    ],
    pillarsHeading: "Specialized HVAC Marketing Systems",
    pillars: [
      { title: "Seasonal Campaign Switching", desc: "Planned transitions between AC tune-up and replacement campaigns and heating, boiler, and furnace readiness messaging." },
      { title: "Mass Save & Rebate Positioning", desc: "Local SEO and landing pages for New England homeowners researching regional heat pump rebates, kept current with program rules." },
      { title: "Emergency Repair Search Ads", desc: "Call-focused ads with schedules matched to your after-hours coverage, to reach homeowners with failing equipment first." },
      { title: "Maintenance Agreement Retargeting", desc: "Digital follow-up that drives annual maintenance contract signups and helps protect you against slow shoulder periods." },
    ],
    faqs: [
      {
        q: "How can HVAC companies get leads during slow shoulder seasons?",
        a: "Focus marketing on pre-season tune-up specials, indoor air quality upgrades, and manufacturer or utility rebate incentives such as New England heat pump programs. Retargeting past repair customers for preventative service agreements also helps stabilize cash flow.",
      },
      {
        q: "How do HVAC Google Ads work with dispatch call tracking?",
        a: "We assign dynamic tracking numbers to your search ads, so a call from an ad for \"furnace repair emergency\" is matched to that keyword. If calls are recorded, callers should be told first, because states such as Massachusetts and New Hampshire have strict consent rules. Booked-job data can then inform Google's Smart Bidding toward the keywords that convert.",
      },
    ],
    ctaHeading: "Book Your HVAC Growth Assessment",
    ctaText: "Review your seasonal lead acquisition strategy and find the path to steadier booked service calls.",
    serviceName: "HVAC Contractor Marketing",
    serviceType: "HVAC Lead Generation, Heat Pump Marketing, and PPC",
    trade: "HVAC",
  },
  {
    slug: "electrician-marketing",
    navName: "Electrician Marketing",
    cardSummary: "200A panel upgrades, EV charger installs, rewiring, and emergency calls.",
    image: "/images/home-services/electrician-marketing.jpg",
    imageAlt: "Licensed electrician wearing insulated gloves working on a residential electrical panel",
    title: "Electrician Marketing Agency | BizBox Story",
    description:
      "Get more profitable electrical jobs. Specialized SEO, Google Ads, and local presence for panel upgrades, home generators, and EV charger installations.",
    keywords: ["electrician marketing agency", "electrician SEO", "local SEO for electricians", "electrician lead generation"],
    h1: "Electrician Marketing Services for More Local Calls and Projects",
    subhead: "High-Margin Panel Upgrades, EV Charger Installations, and Commercial Wiring",
    answer:
      "Electrician marketing should prioritize the jobs that pay best, not just the most calls. BizBox Story builds local SEO and paid search systems for electrical contractors around panel upgrades, whole-home rewiring, Level 2 EV chargers, and standby generators.",
    intro: [
      "Electrical contractors often spend marketing dollars on low-margin fixture repairs. Stronger profitability usually comes from 200-amp service panel upgrades, whole-home rewiring, Level 2 EV charging stations, and backup standby generators.",
      "We design targeted acquisition systems for master electricians and electrical contractors across New England and nationwide, so your team spends more time on high-value projects.",
    ],
    pillarsHeading: "Electrician Digital Lead Generation Engine",
    pillars: [
      { title: "Service-Specific Pages", desc: "Individual landing pages for panel upgrades, EV chargers, generator installations, knob-and-tube replacements, and commercial lighting." },
      { title: "Geo-Targeted Local Authority", desc: "Citations and Google Maps visibility in the suburbs where home electrification and EV ownership are growing." },
      { title: "High-Intent PPC Precision", desc: "Ads aimed at homeowners looking for licensed, insured electrical pros, with DIY troubleshooting searches screened out." },
      { title: "Code & Permitting Trust Messaging", desc: "Clear website copy on safety, regional electrical code compliance, and the peace of mind of hiring a licensed contractor." },
    ],
    faqs: [
      {
        q: "Which electrical services deserve their own landing pages?",
        a: "Avoid bundling everything onto one generic page. Give dedicated, optimized pages to 100A-to-200A service panel upgrades, home EV charger installation, whole-home generator installation, knob-and-tube replacement or rewiring, and emergency electrical repairs if you offer them.",
      },
      {
        q: "How do electricians generate more local leads online?",
        a: "Work toward Google Local 3-Pack visibility around your shop and core service towns. Pair that with Google Local Services Ads and the Google Verified badge, fast mobile pages with click-to-call buttons, and quote request forms for scheduled upgrades.",
      },
    ],
    ctaHeading: "Book Your Electrician Marketing Assessment",
    ctaText: "Learn how to capture high-margin panel and EV charger leads in your service territory.",
    serviceName: "Electrician Marketing Services",
    serviceType: "Electrical Contractor SEO, Local Lead Generation, and Google Ads",
    trade: "Electrical",
  },
  {
    slug: "air-duct-cleaning-marketing",
    navName: "Air Duct Cleaning Marketing",
    cardSummary: "Whole-home duct and commercial HVAC cleaning bookings without gimmick pricing.",
    image: "/images/home-services/air-duct-cleaning-marketing.jpg",
    imageAlt: "Technician inspecting a residential air duct vent with a camera scope",
    title: "Air Duct Cleaning Marketing Agency | BizBox Story",
    description:
      "Marketing for legitimate air duct cleaning companies. Stand out from $49 bait-and-switch offers with transparent pricing, local SEO, and high-trust Google Ads.",
    keywords: ["air duct cleaning marketing", "air duct cleaning advertising", "duct cleaning SEO", "duct cleaning leads"],
    h1: "Air Duct Cleaning Marketing for Qualified Local Bookings",
    subhead: "Stand Out from Bait-and-Switch Offers with Transparent, High-Trust Lead Generation",
    answer:
      "Air duct cleaning marketing depends on trust, because homeowners are wary of cheap offers followed by upsells. BizBox Story helps credentialed duct cleaning companies win qualified bookings with clear pricing, equipment education, and accurate claims about what the service does.",
    intro: [
      "The air duct cleaning space is crowded with social media ads offering \"$49 whole-house\" cleanings, and homeowners have learned to expect a bait-and-switch. Legitimate companies with NADCA credentials and truck-mounted equipment need marketing that conveys credibility, technical rigor, and fair pricing.",
      "We help duct cleaning specialists win whole-home residential cleanings, dryer vent cleaning, and commercial HVAC cleaning contracts without overpromising.",
    ],
    pillarsHeading: "How We Build Authority for Duct Cleaning Companies",
    pillars: [
      { title: "Credibility & Equipment Education", desc: "Copy that explains negative air equipment, HEPA filtration, and NADCA standards to justify your pricing over low-cost blow-and-go operators." },
      { title: "Transparent Pricing Models", desc: "Clear packages based on square footage, HVAC systems, or supply and return vent counts that remove customer hesitation." },
      { title: "Dryer Vent Add-On Funnels", desc: "Cross-sell paths for residential dryer vent cleaning that raise average ticket size." },
      { title: "Targeted Search & Video Ads", desc: "Video campaigns showing real duct inspections with before-and-after camera footage, so the work itself proves the service." },
    ],
    faqs: [
      {
        q: "How should a legitimate air duct cleaning company advertise?",
        a: "Lead with video evidence and real credentials such as NADCA membership. Use Google Search Ads for phrases like \"certified air duct cleaning\" and \"commercial HVAC duct cleaning\", and focus on concrete triggers such as post-construction dust, visible debris, and pet hair. Avoid health promises: the EPA recommends cleaning ducts as needed rather than routinely, and benefits are not established for every home.",
      },
      {
        q: "How do you qualify duct cleaning leads and avoid low-budget bargain hunters?",
        a: "We add pre-qualification quote calculators to your landing pages. Asking for square footage, number of heating and cooling zones, and last cleaning date helps bargain hunters self-filter, while serious homeowners proceed with realistic expectations.",
      },
    ],
    ctaHeading: "Book Your Air Duct Cleaning Growth Assessment",
    ctaText: "Position your business as the trusted, transparent duct cleaner in your region.",
    serviceName: "Air Duct Cleaning Marketing",
    serviceType: "Duct Cleaning SEO, Transparent Pricing CRO, and Local Ads",
    trade: "Air Duct Cleaning",
  },
];

export const homeServiceTrades = ["Junk Removal", "Roofing", "HVAC", "Electrical", "Air Duct Cleaning", "Other Home Service"];

export function homeServicePath(page: HomeServicePage) {
  return page.slug ? `${HOME_SERVICES_BASE}/${page.slug}` : HOME_SERVICES_BASE;
}
