import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import { Zap, Gauge, Cpu, TrendingUp, Activity, BarChart3 } from "lucide-react";

const valueItems = [
    {
        id: "leverage",
        title: "500X Intraday Leverage",
        icon: <Zap className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "execution",
        title: "Lightning-Fast Execution",
        icon: <Gauge className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "latency",
        title: "Ultra-Low Latency System",
        icon: <Cpu className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "scalping",
        title: "Advanced Scalping Tools",
        icon: <TrendingUp className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "monitoring",
        title: "Instant Trade Monitoring",
        icon: <Activity className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "insights",
        title: "Real-Time Trading Insights",
        icon: <BarChart3 className="w-5 h-5" />,
        color: "#00FFA3"
    }
];

export default function IntradayTrading() {
    return (
        <>
            <HeroSection
                title="Intraday Trading"
                tag="Capture Daily Market Movements"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <ValuePropositionSection

                heading={
                    <>
                        Built For High-Speed  {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
                            Intraday Traders
                        </span>
                    </>
                }
                items={valueItems}
                description="Execute intraday trades with high-speed order processing, precise timing tools, and real-time data to capitalize on short-term market movements." 
                buttonText="Start Intraday Trading"
                image="/images/side-image.png"
            />
            <div>
                <TestimonialsSection />
            </div>
        </>
    )
}