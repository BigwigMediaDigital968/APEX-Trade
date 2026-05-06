import HeroSection from "@/app/components/Common/HeroSection";

export default function Policy() {
    return (
        <>
            <HeroSection
                title="Privacy Policy"
                tag="Legal & Compliance"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />

            <div className="min-h-screen bg-[#0B0E14] text-gray-300 px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Privacy Policy
                    </h1>

                    {/* Intro */}
                    <p className="text-sm leading-7 text-gray-400 mb-10">
                        Tradexlive respects your right to privacy. This Privacy Policy explains who we are,
                        how we collect, share and use personal information about you, and how you can exercise
                        your privacy rights. This Privacy Policy applies to personal information that we collect
                        via our website, mobile applications, and services.
                    </p>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            What personal information do we collect and why?
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            The personal information that we may collect about you broadly falls into the following categories:
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Information You Provide Voluntarily to Us
                        </h3>
                        <p className="text-sm text-gray-400 leading-7">
                            Information that is submitted via the Sites or otherwise supplied to us. This includes
                            information provided at the time of registering, subscribing, or requesting further details.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Information relating to transactions or trades
                        </h3>
                        <p className="text-sm text-gray-400 leading-7 mb-4">
                            As you navigate through the site, we may automatically collect certain information about your device,
                            browsing actions, and patterns.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                            <li>Usage details and interaction data</li>
                            <li>Trading activity and account interactions</li>
                            <li>Device and connection information</li>
                            <li>Location data (via GPS, WiFi, etc.)</li>
                        </ul>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Advertising, Use of Cookies, and Tracking Technologies
                        </h3>
                        <p className="text-sm text-gray-400 leading-7">
                            We use cookies and similar tracking technologies to collect and use personal information
                            about you. This helps us understand usage patterns and improve our services.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            How Do We Use Your Personal Information?
                        </h3>

                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                            <li>To provide and maintain our services</li>
                            <li>To process transactions and send notifications</li>
                            <li>To improve user experience and analytics</li>
                            <li>To communicate updates and offers</li>
                            <li>To ensure platform security and compliance</li>
                        </ul>
                    </section>

                    {/* Footer note */}
                    <p className="text-xs text-gray-500 border-t border-gray-700 pt-6 mt-12">
                        Last updated: {new Date().getFullYear()}
                    </p>

                </div>
            </div>

        </>
    )
}