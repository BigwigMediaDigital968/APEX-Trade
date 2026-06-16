import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

import {
  Activity,
  BarChart3,
  Zap,
  PieChart,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";
import StockContent from "./component/Stock";
import StockAbout from "./component/StockAbout";
import FAQs from "@/app/components/Faqs";
import { stockTradingFaqs } from "@/app/FaqsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stocks Trading India | Buy Indian & Global Stocks Online | Apex Trade",
  description:
    "Trade Indian and global stocks with Apex Trade. Access NSE, BSE, NASDAQ & NYSE markets, real-time data, advanced trading tools, and competitive brokerage. Learn what stock trading is and start trading today.",
  keywords: [
    "stock trading india",
    "buy stocks online",
    "online stock trading",
    "nse trading",
    "bse trading",
    "nasdaq trading",
    "nyse trading",
    "equity trading",
    "stock market india",
    "share trading platform",
    "online trading platform",
    "apex trade",
  ],
  openGraph: {
    title:
      "Stocks Trading India | Buy Indian & Global Stocks Online | Apex Trade",
    description:
      "Trade Indian and global stocks with Apex Trade. Access NSE, BSE, NASDAQ & NYSE markets, real-time data, advanced trading tools, and competitive brokerage.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Stocks Trading India | Buy Indian & Global Stocks Online | Apex Trade",
    description:
      "Trade Indian and global stocks with Apex Trade. Access NSE, BSE, NASDAQ & NYSE markets, real-time data, advanced trading tools, and competitive brokerage.",
  },
};

const valueItems = [
  {
    id: "market-access",
    title: "Real-Time Stock Market Access",
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
    title: "Fast Order Execution",
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
    id: "support",
    title: "Dedicated Trading Support",
    icon: <Headphones className="w-5 h-5" />,
    color: "#00FFA3",
  },
];

export default function Stocks() {
  return (
    <>
      <HeroSection
        title="Stock Trading India Made Simple"
        tag="Trade Indian & Global Stocks with Confidence"
        backgroundImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
        description="Access opportunities across leading exchanges including NSE, BSE, NASDAQ, and NYSE, through a powerful trading platform designed for modern investors and active traders. Whether you're looking to buy Indian stocks, explore global equities, or diversify your portfolio, Apex Trade provides the tools you need to trade smarter."
      />
      <ValuePropositionSection
        heading={
          <>
            ApexTrade for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
              Stocks
            </span>
          </>
        }
        description="Access powerful equity trading tools with real-time market data, fast execution, and advanced analytics designed to help you make smarter investment decisions."
        items={valueItems}
        image="/images/side-image.png"
      />

      <StockContent />
      <StockAbout />
      <FAQs
        title={stockTradingFaqs.title}
        description={stockTradingFaqs.description}
        faqs={stockTradingFaqs.faqs}
      />
    </>
  );
}
