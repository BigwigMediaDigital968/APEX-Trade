import HeroSection from "@/app/components/Common/HeroSection";
import ComparisonSection from "../components/ComparisonSection";

export default function AboutPage() {
    return (
        <>
            <HeroSection
                title="About Us"
                tag="Welcome to ApexTrade"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
                description="ApexTrade is built for traders who want high leverage, fast execution, and instant payouts."
                subDescription="We provide powerful trading solutions across MCX & NSE with industry-leading margin and low brokerage."
            />
            <ComparisonSection />
        </>
    );
}