import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

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
    Gauge
} from "lucide-react";
const valueItems = [
    {
        id: "leverage",
        title: "500X Intraday Leverage",
        icon: <Zap className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "withdrawal",
        title: "Instant Withdrawal Processing",
        icon: <Wallet className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "execution",
        title: "Ultra-Fast Order Execution",
        icon: <Gauge className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "risk",
        title: "Advanced Risk Protection",
        icon: <ShieldCheck className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "analytics",
        title: "Real-Time Market Analytics",
        icon: <LineChart className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "support",
        title: "Dedicated Trading Support",
        icon: <Headphones className="w-5 h-5" />,
        color: "#00FFA3"
    }
];

export default function Indexes() {
    return (
        <>
            <HeroSection
                title="Indexes"
                tag="Trade the World's Leading Indices"
                backgroundImage="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
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
                            description="Unlock institutional-grade features designed to protect your capital and maximize your execution efficiency in global markets."
                            items={valueItems}
                            image="/images/side-image.png"
                        />
        </>
    )
}
