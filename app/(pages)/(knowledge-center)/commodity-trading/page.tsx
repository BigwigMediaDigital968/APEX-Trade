import HeroSection from "@/app/components/Common/HeroSection";
import ValuePropositionSection from "@/app/components/Common/ValuePropositionSection";

export default function Commodity() {
    return (
        <>
            <HeroSection
                title="Commodity Trading"
                tag="Trade Gold, Oil, and Global Commodities"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <ValuePropositionSection />
        </>
    )
}