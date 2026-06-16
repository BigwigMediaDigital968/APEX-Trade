import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import {
  Coins,
  Zap,
  TrendingUp,
  BarChart3,
  Activity,
  ShieldCheck,
} from "lucide-react";
import CommodityTrading from "./component/CommodityTrading";
import FAQs from "@/app/components/Faqs";
import CommodityHours from "./component/CommodityHours";
import { commodityTradingFaqs } from "@/app/FaqsData";

export default function Commodity() {
  const valueItems = [
    {
      id: "commodities",
      title: "Gold, Silver & Crude Access",
      icon: <Coins className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "execution",
      title: "High-Speed MCX Execution",
      icon: <Zap className="w-5 h-5" />,
      color: "#00FFA3",
    },
    {
      id: "leverage",
      title: "Optimized Commodity Leverage",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "insights",
      title: "Advanced Market Insights",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "#00FFA3",
    },
    {
      id: "tracking",
      title: "Real-Time Price Tracking",
      icon: <Activity className="w-5 h-5" />,
      color: "#3D6BFF",
    },
    {
      id: "security",
      title: "Secure Trading Environment",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "#00FFA3",
    },
  ];
  const stats = [
    { label: "Low Brokerage" },
    { label: "Fastest Payout" },
    { label: "24/7 Support" },
    { label: "60X Holding" },
  ];

  return (
    <>
      <HeroSection
        title="Commodity Trading in India"
        tag="Trade Gold, Crude Oil, Silver and More on ApexTrade"
        backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
        description="Commodity trading in India gives you a direct line to the assets that actually move the global economy - precious metals, energy, base metals, and agricultural produce. On ApexTrade, you get all of this on one platform, with the speed and pricing that active traders actually need."
      />
      <ValuePropositionSection
        heading={
          <>
            Trade Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              Commodities
            </span>{" "}
            Like Professionals
          </>
        }
        description="Trade commodities like gold, silver, and crude with real-time pricing, fast execution, and advanced insights designed for volatile market conditions."
        items={valueItems}
        image="/images/side-image.png"
        buttonText="Start Commodity Trading"
        StatItems={stats}
      />

      <CommodityTrading />
      <CommodityHours />
      <TestimonialsSection />

      <FAQs
        title={commodityTradingFaqs.title}
        faqs={commodityTradingFaqs.faqs}
      />
    </>
  );
}
