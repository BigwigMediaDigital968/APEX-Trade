import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import {
  Activity,
  BarChart3,
  Zap,
  PieChart,
  BadgeDollarSign,
  Server,
} from "lucide-react";
import EquityTrading from "./component/EquityTrading";
import FAQs from "@/app/components/Faqs";
import { equityTradingFaqs } from "@/app/FaqsData";

export default function Trading() {
  const valueItems = [
    {
      id: "market-access",
      title: "Real-Time NSE/BSE Access",
      icon: <Activity className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "analytics",
      title: "Advanced Equity Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "#00FFA3",
    },
    {
      id: "execution",
      title: "Instant Market Execution",
      icon: <Zap className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "portfolio",
      title: "Smart Portfolio Tracking",
      icon: <PieChart className="w-5 h-5" />,
      color: "#00FFA3",
    },
    {
      id: "brokerage",
      title: "Ultra-Low Brokerage",
      icon: <BadgeDollarSign className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "infrastructure",
      title: "Professional Trading Infrastructure",
      icon: <Server className="w-5 h-5" />,
      color: "#00FFA3",
    },
  ];

  const stats = [
    {
      label: "50K+ Equity Orders Daily",
    },
    {
      label: "₹120Cr+ Monthly Turnover",
    },
    {
      label: "99.9% Uptime",
    },
    {
      label: "24/7 Trading Assistance",
    },
  ];
  return (
    <>
      <HeroSection
        title="Equity Trading"
        tag="Explore Markets, Strategies & Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
        description="Buy and sell shares of India's top listed companies with real-time NSE & BSE access, ultra-low brokerage, and execution built for serious equity traders."
      />
      <ValuePropositionSection
        heading={
          <>
            Built For Smart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              {" "}
              Equity Traders
            </span>
          </>
        }
        description="Unlock institutional-grade features designed to protect your capital and maximize your execution efficiency in global markets."
        items={valueItems}
        image="/images/side-image.png"
        StatItems={stats}
        buttonText="Start Equity Trading"
      />

      <EquityTrading />

      <TestimonialsSection />

      <FAQs
        title={equityTradingFaqs.title}
        description={equityTradingFaqs.description}
        faqs={equityTradingFaqs.faqs}
      />
    </>
  );
}
