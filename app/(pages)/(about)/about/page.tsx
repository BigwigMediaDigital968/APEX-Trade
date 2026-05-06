import HeroSection from "@/app/components/Common/HeroSection";
import ComparisonSection from "../components/ComparisonSection";

export default function AboutPage() {
    return (
        <>
            <HeroSection
                title="About Us"
                tag="Welcome to ApexTrade"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
                description="Experience the next generation of automated trading with our neural network-powered execution engine."
            />
            <ComparisonSection />
        </>
    );
}