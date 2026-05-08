import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

import { Activity, BarChart3, Zap, PieChart, BadgeDollarSign, Headphones } from "lucide-react";
const valueItems = [
    {
        id: "market-access",
        title: "Real-Time Stock Market Access",
        icon: <Activity className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "analytics",
        title: "Advanced Equity Analytics",
        icon: <BarChart3 className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "execution",
        title: "Fast Order Execution",
        icon: <Zap className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "portfolio",
        title: "Smart Portfolio Tracking",
        icon: <PieChart className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "brokerage",
        title: "Ultra-Low Brokerage",
        icon: <BadgeDollarSign className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "support",
        title: "Dedicated Trading Support",
        icon: <Headphones className="w-5 h-5" />,
        color: "#00FFA3"
    }
];

export default function Stocks() {
    return (
        <>
            <HeroSection
                title="Stocks"
                tag="Invest in Global Equities"
                backgroundImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
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
        </>
    )
}
