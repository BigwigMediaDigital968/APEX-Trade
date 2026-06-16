import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";

import {
  Layers,
  ShieldCheck,
  LineChart,
  Headphones,
  Zap,
  Lock,
  TrendingUp,
  ChevronRight,
  Wallet,
  Gauge,
} from "lucide-react";
import TradingContent from "./component/TradingContent";
import TradingPlatform from "./component/TradingPlatform";
import FAQs from "@/app/components/Faqs";
import { tradingFaqs } from "@/app/FaqsData";

const valueItems = [
  {
    id: "leverage",
    title: "500X Intraday Leverage",
    icon: <Zap className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "withdrawal",
    title: "Instant Withdrawal Processing",
    icon: <Wallet className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "execution",
    title: "Ultra-Fast Order Execution",
    icon: <Gauge className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "risk",
    title: "Advanced Risk Protection",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "analytics",
    title: "Real-Time Market Analytics",
    icon: <LineChart className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "support",
    title: "Dedicated Trading Support",
    icon: <Headphones className="w-5 h-5" />,
    color: "#00FFA3",
  },
];

const stats = [
  {
    label: "10K+ Active Traders",
  },
  {
    label: "₹50Cr+ Monthly Volume",
  },
  {
    label: "24/7 Live Support",
  },
  {
    label: "99.9% Execution Uptime",
  },
];

export default function Trading() {
  return (
    <>
      <HeroSection
        title="Trading"
        tag="Explore Markets, Strategies & Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
        description="Understand trading, access global markets, and see how ApexTrade helps you make smarter trading decisions."
      />
      <ValuePropositionSection
        heading={
          <>
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              ApexTrade
            </span>{" "}
            Offers Value
          </>
        }
        description="Unlock institutional-grade features designed to protect your capital and maximise your execution efficiency across all market segments."
        items={valueItems}
        image="/images/side-image.png"
        StatItems={stats}
      />

      <TradingContent />
      <TradingPlatform />
      <TestimonialsSection />
      <FAQs
        title={tradingFaqs.title}
        description={tradingFaqs.description}
        faqs={tradingFaqs.faqs}
      />
    </>
  );
}
