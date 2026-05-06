import HeroSection from "@/app/components/Common/HeroSection";

export default function TermsAndConditions() {
    return (
        <>

            <HeroSection
                title="Terms & Conditions"
                tag="Legal & Compliance"
                backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="min-h-screen bg-[#0B0E14] text-gray-300 px-6 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Terms and Conditions
                    </h1>

                    {/* Intro */}
                    <p className="text-sm leading-7 text-gray-400 mb-6">
                        Welcome to Tradex.live, your trusted online trading platform. By accessing and using our
                        services, you agree to the following terms and conditions. These terms are designed to ensure
                        a fair, transparent, and secure trading environment for all users.
                    </p>

                    <p className="text-sm leading-7 text-gray-400 mb-10">
                        Tradex.live is committed to providing a seamless experience, but certain practices are strictly
                        prohibited. Violations may result in account suspension, fund restrictions, or legal action.
                        We may update these terms at any time, and users are responsible for staying informed.
                    </p>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Prohibited Practices
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            The use of Chamka, lines, and insider trading is strictly prohibited. Any involvement in such
                            activities will result in suspension or deactivation of your account.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Account Misuse
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            Sharing your account credentials or engaging in unethical practices, including unauthorized
                            account management, may lead to account suspension and fund blockage.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Trading Rules & Restrictions
                        </h2>

                        <ul className="list-disc pl-5 space-y-3 text-sm text-gray-400">
                            <li><strong className="text-white">Scalping:</strong> Profits generated within 5 minutes may be removed.</li>
                            <li><strong className="text-white">VPN Usage:</strong> Trading via VPN is prohibited. Such trades may be deleted.</li>
                            <li><strong className="text-white">Cross Orders:</strong> Multiple accounts from same IP are not allowed.</li>
                            <li><strong className="text-white">Hedging:</strong> Hedging is not permitted on the platform.</li>
                            <li><strong className="text-white">Invalid Orders:</strong> Orders without valid positions will not be processed.</li>
                        </ul>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Financial & Risk Policies
                        </h2>

                        <ul className="list-disc pl-5 space-y-3 text-sm text-gray-400">
                            <li><strong className="text-white">Negative Balance Protection:</strong> Protection up to 30% step-out level.</li>
                            <li><strong className="text-white">Margin Maintenance:</strong> Maintain sufficient balance to avoid liquidation.</li>
                            <li><strong className="text-white">Dividends & Bonuses:</strong> Applied as per exchange policies.</li>
                        </ul>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Order Execution
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            Orders are executed based on bid/ask prices, not the Last Traded Price (LTP). Execution may vary
                            depending on market conditions.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Technical Issues
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            In case of technical issues, users must report them immediately with their user ID so that
                            appropriate action can be taken.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Group Trading
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            Group trading is allowed only with prior approval. Unauthorized activity may lead to suspension.
                        </p>
                    </section>

                    {/* Section */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Payouts
                        </h2>
                        <p className="text-sm text-gray-400 leading-7">
                            Payouts may be delayed due to banking or technical issues. We appreciate your patience.
                        </p>
                    </section>

                    {/* Footer */}
                    <div className="border-t border-gray-700 pt-6 mt-12">
                        <p className="text-sm text-gray-400 mb-4">
                            Thank you for choosing Tradex.live. We are committed to providing a safe and reliable trading experience.
                        </p>

                        <p className="text-sm text-gray-500">
                            Best Regards,<br />
                            <span className="text-white">The Tradex.live Team</span>
                        </p>

                        <p className="text-xs text-gray-600 mt-6">
                            Last updated: {new Date().getFullYear()}
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}