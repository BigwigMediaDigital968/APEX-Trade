import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

import {
  Layers,
  ShieldCheck,
  LineChart,
  Headphones,
  Gauge,
  Globe,
  BadgeDollarSign,
} from "lucide-react";
import IndexTrading from "./component/IndexTrading";
import IndexTradingTable from "./component/IndexTradingTable";
import FAQs from "@/app/components/Faqs";
import { indexTradingFaqs } from "@/app/FaqsData";

const valueItems = [
  {
    id: "global",
    title: "Access to Global Market Indexes",
    icon: <Globe className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "pricing",
    title: "Competitive Index Trading Spreads",
    icon: <BadgeDollarSign className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "execution",
    title: "Fast & Stable Trade Execution",
    icon: <Gauge className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "analytics",
    title: "Real-Time Market Tracking",
    icon: <LineChart className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "security",
    title: "Secure & Transparent Trading",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "support",
    title: "Dedicated Trading Assistance",
    icon: <Headphones className="w-5 h-5" />,
    color: "#00FFA3",
  },
];

export default function Indexes() {
  return (
    <>
      <HeroSection
        title="Index Trading India"
        tag="A Complete Guide to Trading Global Market Indices"
        backgroundImage="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
        description="Whether you're looking to trade Indian benchmark indices or gain exposure to global markets, understanding how index trading works can help you identify opportunities across different economic sectors and market conditions."
      />
      <ValuePropositionSection
        heading={
          <>
            Trade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              {" "}
              Global Indexes
            </span>{" "}
            with Ease
          </>
        }
        description="Trade major global indexes with smooth execution, real-time market tracking, and diversified exposure to leading economies and industries."
        items={valueItems}
        image="/images/side-image.png"
      />

      <IndexTrading />
      <IndexTradingTable />
      <FAQs
        title={indexTradingFaqs.title}
        description={indexTradingFaqs.title}
        faqs={indexTradingFaqs.faqs}
      />
    </>
  );
}
