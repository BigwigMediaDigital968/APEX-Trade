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

export default function Home() {
  return (
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
      <ContactSection />
      <NewsSection />
    </main>
  );
}
