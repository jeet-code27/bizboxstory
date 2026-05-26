import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NoScrollOnNav from "@/components/NoScrollOnNav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizboxstory.com"),
  title: "BizBox Story | AI-Powered Digital Marketing Agency",
  description: "Revenue-driven digital marketing agency helping SMEs scale with AI SEO, Content Marketing, Google Ads & Social Media. Serving US, UK, Australia & India.",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/us',
      'en-GB': '/uk',
      'en-AU': '/au',
      'en-CA': '/ca',
      'en-AE': '/ae',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BizBox Story",
  "url": "https://bizboxstory.com",
  "logo": "https://bizboxstory.com/images/logo.png",
  "description": "Revenue-driven digital marketing agency helping SMEs scale with AI SEO, Content Marketing, Google Ads & Social Media.",
  "sameAs": [
    "https://www.facebook.com/bizboxstory",
    "https://twitter.com/bizboxstory",
    "https://www.instagram.com/bizboxstory/",
    "https://www.linkedin.com/company/bizboxstory"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} font-dm h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-brand-ink bg-brand-surface selection:bg-brand-gold selection:text-brand-ink overflow-x-hidden" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <NoScrollOnNav />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
