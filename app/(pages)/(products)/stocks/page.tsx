import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

export default function Stocks() {
    return (
        <>
            <HeroSection
                title="Stocks"
                tag="Invest in Global Equities"
                backgroundImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
            />
            <ValuePropositionSection />
        </>
    )
}
