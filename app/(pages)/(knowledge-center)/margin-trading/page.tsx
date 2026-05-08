import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";



import { Layers, TrendingUp, ShieldCheck, BarChart3, Activity, Lock } from "lucide-react";

export default function MarginTrading() {
    const valueItems = [
  {
    id: "margin",
    title: "Flexible Margin Facilities",
    icon: <Layers className="w-5 h-5" />,
    color: "#3D6BFF"
  },
  {
    id: "buying-power",
    title: "Increased Buying Capacity",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "#00FFA3"
  },
  {
    id: "risk",
    title: "Smart Risk Controls",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#3D6BFF"
  },
  {
    id: "efficiency",
    title: "Optimized Capital Efficiency",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "#00FFA3"
  },
  {
    id: "tracking",
    title: "Real-Time Exposure Tracking",
    icon: <Activity className="w-5 h-5" />,
    color: "#3D6BFF"
  },
  {
    id: "execution",
    title: "Secure Trade Execution",
    icon: <Lock className="w-5 h-5" />,
    color: "#00FFA3"
  }
];

    return (
        <>
            <HeroSection
                title="Margin Trading"
                tag="Amplify Your Buying Power"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <ValuePropositionSection

                heading={
                    <>
                        Amplify Your  {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
                            Trading Power
                        </span>
                    </>
                }
                description="Enhance your buying power with flexible margin options, optimized leverage, and built-in risk controls for efficient capital utilization."
                buttonText="Start Margin Trading"
                image="/images/side-image.png"
                items={valueItems}
            />
            <div>
                <TestimonialsSection />
            </div>
        </>
    )
}