import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import { Zap, LineChart, Gauge, ShieldCheck, Layers, LayoutDashboard } from "lucide-react";

const valueItems = [
    {
        id: "leverage",
        title: "High-Leverage F&O Trading",
        icon: <Zap className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "analytics",
        title: "Real-Time Options Analytics",
        icon: <LineChart className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "execution",
        title: "Fastest Order Execution",
        icon: <Gauge className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "risk",
        title: "Smart Risk Management",
        icon: <ShieldCheck className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "liquidity",
        title: "Deep Liquidity Access",
        icon: <Layers className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "dashboard",
        title: "Advanced Derivatives Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        color: "#00FFA3"
    }
];

const stats = [
    {
        label: "₹300Cr+ F&O Volume",
    },
    {
        label: "10K+ Active Derivatives Traders",
    },
    {
        label: "24/7 Expert Assistance",
    },
    {
        label: "99.9% Execution Accuracy",
    }
];

export default function FeaturesOptions() {
    return (
        <>
            <HeroSection
                title="Futures & Options"
                tag="Advanced Derivatives for Strategic Trading"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <ValuePropositionSection

                heading={
                    <>
                        Institutional Power For {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
                            F&O Traders
                        </span>
                    </>
                }
                description="Unlock institutional-grade features designed to protect your capital and maximize your execution efficiency in global markets."
                items={valueItems}
                image="/images/side-image.png"
                StatItems={stats}
                buttonText="Start F&O Trading"
            />
            <div>
                <TestimonialsSection />
            </div>

        </>
    )
}