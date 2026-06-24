import Image from "next/image";
import Navbar from "./components/Navbar";
import TickerBar from "./components/TickerBar";
import FeaturesSection from "./components/FeaturesSection";
import StatsShowcaseSection from "./components/StatsShowcaseSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import SocialAndFooter from "./components/SocialAndFooter";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import BrokerSection from "./components/BrokerSection";
import BecomeAffiliateSection from "./(pages)/(about)/become-an-affiliate/BecomeAffiliateSection";
import ComparisonTable from "./components/ComparisonTable";
import HomeCTA from "./components/HomeCTA";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Best Online Trading Platform | ApexTrade",
  description:
    "India's best online trading platform for NSE Futures, MCX & Options",
  keywords:"trading platform, online trading platform, best trading platform for beginners, free demat account, open demat account, online commission-free trading, NSE futures, MCX trading, automated trading",
  alternates: {
    canonical: "https://www.tradeapp-ex.com/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      "@id": "https://www.tradeapp-ex.com/#organization",
      name: "ApexTrade",
      url: "https://www.tradeapp-ex.com",
      logo: "https://www.tradeapp-ex.com/logo.png",
      description:
        "India's most powerful trading platform with 500X intraday margin, ultra-low brokerage, and 30-minute withdrawals.",
      areaServed: "IN",
      currenciesAccepted: "INR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Trading Segments",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NSE Futures Trading",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MCX Commodities Trading",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Options Trading",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Equity & Index Trading",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "6",
        bestRating: "5",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.tradeapp-ex.com",
      url: "https://www.tradeapp-ex.com",
      name: "ApexTrade — 500X Intraday Margin | India's Fastest Trading Platform",
      description:
        "Trade NSE Futures, MCX & Options with up to 500X intraday margin, industry-lowest brokerage, and withdrawals cleared in 30 minutes.",
      isPartOf: {
        "@id": "https://www.tradeapp-ex.com/#organization",
      },
      inLanguage: "en-IN",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.tradeapp-ex.com/",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum deposit to open a trading account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no large minimum deposit barrier. Contact our team for current requirements based on the segments you wish to trade.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly are withdrawal requests processed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Withdrawals are cleared to your linked bank account within 30 minutes in the vast majority of cases.",
          },
        },
        {
          "@type": "Question",
          name: "How does the 500X intraday margin work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "500X intraday margin means you can control a position 500 times the value of your deployed capital within a single session. Positions must be squared off by end of day.",
          },
        },
        {
          "@type": "Question",
          name: "Which markets can I trade on ApexTrade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NSE Futures, MCX Commodities, Equity Stocks, Indices, and Options — all from a single unified terminal.",
          },
        },
      ],
    },
  ],
};


export default function Home() {
  return (
    <>
    
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    <main className="bg-bg-main min-h-screen">
      <Hero />
      <TickerBar />
      <FeaturesSection />
      <ComparisonTable />
      <BrokerSection/>
      <BecomeAffiliateSection/>
      <StatsShowcaseSection />
      <HowItWorksSection />
      {/* <PricingSection /> */}
      <TestimonialsSection />
      <FAQSection />
      <HomeCTA/>
      <ContactSection />
      <NewsSection />
    </main>
    </>
  );
}
