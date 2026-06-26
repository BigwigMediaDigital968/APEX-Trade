import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import {
  ShieldCheck,
  LineChart,
  Headphones,
  Gauge,
  Globe,
  BadgeDollarSign,
} from "lucide-react";
import CommodityPage from "./component/Commodity";
import StockTable from "./component/StockTable";
import FAQs from "@/app/components/Faqs";
import { commodityBasicsFaqs } from "@/app/FaqsData";
import Link from "next/link";

const valueItems = [
  {
    id: "markets",
    title: "Access to Global Commodity Markets",
    icon: <Globe className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "pricing",
    title: "Competitive Commodity Pricing",
    icon: <BadgeDollarSign className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "execution",
    title: "Fast & Reliable Trade Execution",
    icon: <Gauge className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "security",
    title: "Secure & Transparent Trading",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#00FFA3",
  },
  {
    id: "insights",
    title: "Live Commodity Market Insights",
    icon: <LineChart className="w-5 h-5" />,
    color: "#3D6BFF",
  },
  {
    id: "support",
    title: "Expert Customer Assistance",
    icon: <Headphones className="w-5 h-5" />,
    color: "#00FFA3",
  },
];

export default function Commodity() {
  return (
    <>
      <HeroSection
        title="Commodity Trading India"
        tag="A Complete Guide for Modern Traders"
        backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
        description="From precious metals like gold and silver to energy products such as crude oil and natural gas, commodity markets offer access to a wide range of assets that respond to economic, geopolitical, and market-driven events."
      />
      <ValuePropositionSection
        heading={
          <>
            Trade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              Commodities
            </span>{" "}
            with Confidence
          </>
        }
        description={<>Trade precious metals, energy resources, and agricultural products to diversify your portfolio. We offer easy <Link
                        href="/commodity-trading"
                        className="text-indigo-500 hover:text-white"
                      >commodity trading</Link>.</>}
        items={valueItems}
        image="/images/side-image.png"
      />

      <CommodityPage />
      <StockTable />

      <FAQs
        title={commodityBasicsFaqs.title}
        description={commodityBasicsFaqs.description}
        faqs={commodityBasicsFaqs.faqs}
      />
    </>
  );
}
