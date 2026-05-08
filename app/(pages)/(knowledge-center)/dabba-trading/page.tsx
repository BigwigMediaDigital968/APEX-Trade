import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import { Zap, RefreshCcw, LayoutDashboard, Sparkles, Headphones, Server } from "lucide-react";

export default function MarginTrading() {
    const valueItems = [
        {
            id: "execution",
            title: "High-Speed Trade Execution",
            icon: <Zap className="w-5 h-5" />,
            color: "#3D6BFF"
        },
        {
            id: "settlement",
            title: "Instant Settlement System",
            icon: <RefreshCcw className="w-5 h-5" />,
            color: "#00FFA3"
        },
        {
            id: "dashboard",
            title: "Advanced Trading Dashboard",
            icon: <LayoutDashboard className="w-5 h-5" />,
            color: "#3D6BFF"
        },
        {
            id: "experience",
            title: "Seamless Trading Experience",
            icon: <Sparkles className="w-5 h-5" />,
            color: "#00FFA3"
        },
        {
            id: "support",
            title: "Dedicated Client Support",
            icon: <Headphones className="w-5 h-5" />,
            color: "#3D6BFF"
        },
        {
            id: "infrastructure",
            title: "Optimized Trading Infrastructure",
            icon: <Server className="w-5 h-5" />,
            color: "#00FFA3"
        }
    ];
    return (
        <>
            <HeroSection
                title="Dabba Trading"
                tag="High Leverage"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <ValuePropositionSection

                heading={
                    <>
                        Fast Execution. {""}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
                            Maximum Flexibility.
                        </span>
                    </>
                }
                description="Access high-risk trading environments with fast execution, flexible exposure, and tools designed for experienced traders seeking alternative strategies."
                buttonText="Start Trading Now"
                image="/images/side-image.png"
                items={valueItems}
            />
            <div>
                <TestimonialsSection />
            </div>
        </>
    )
}