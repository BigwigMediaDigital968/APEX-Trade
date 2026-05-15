import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import { SignUpForm } from './SignUpForm';
import Link from 'next/link';

/**
 * Updated AuthModal: 
 * - Fixed to Sign Up form only.
 * - All "Login" buttons now redirect to the external trading client.
 */
const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [loading, setLoading] = useState(false);

    // The external URL for existing users
    const LOGIN_REDIRECT_URL = "https://web.tradeapp-ex.com/client/";

    const handleLoginRedirect = () => {
        window.location.href = LOGIN_REDIRECT_URL;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-[1000px] h-full md:h-[600px] bg-[#16191E] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-6 right-6 z-[60] p-2 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                    <X size={24} />
                </button>

                <div className="relative flex flex-col md:flex-row w-full h-full transition-all duration-700 ease-in-out">



                    {/* ── DESKTOP CTA PANEL (Redirect) ── */}
                    <div className="hidden md:flex w-1/2 h-full relative overflow-hidden bg-[#3D6BFF]">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3D6BFF] via-[#3D6BFF] to-[#16191E]/20" />
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />

                        <div className="relative z-10 w-full h-full p-16 flex flex-col justify-center items-center text-center space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">EXISTING<br />USER?</h2>
                                <p className="text-white/70 font-medium leading-relaxed max-w-xs mx-auto">
                                    Access your professional trading terminal and manage your assets instantly.
                                </p>
                            </div>

                            <Link
                            href={LOGIN_REDIRECT_URL}
                                //onClick={handleLoginRedirect}
                                className="cursor-pointer rounded-2xl group flex items-center gap-4 px-10 py-5 border-2 border-white/30 hover:border-white text-white font-black uppercase tracking-[0.3em] text-xs transition-all bg-white/5 backdrop-blur-sm"
                            >
                                <span>Go to Login</span>

                                <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />

                            </Link>

                            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-8 opacity-30">
                                <div className="text-[9px] font-black text-white uppercase tracking-[0.3em]">ISO-27001 SECURE</div>
                                <div className="text-[9px] font-black text-white uppercase tracking-[0.3em]">ENCRYPTED NODE</div>
                            </div>
                        </div>
                    </div>

                    {/* ── SIGN UP FORM SIDE ── */}
                    <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-center bg-[#16191E] z-50">
                        <div className="space-y-8 font-sans">
                            <SignUpForm />
                        </div>

                        {/* MOBILE ONLY: Switch to Login (Redirect) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-[#040812] border block md:hidden border-white/5 rounded-2xl text-center relative overflow-hidden group transition-colors hover:border-blue-500/30"
                        >
                            <div className="relative z-10">
                                <p className="text-slate-500 text-[12px] uppercase font-black tracking-[0.3em] mb-1">
                                    ALREADY A MEMBER?
                                </p>
                                <Link href={LOGIN_REDIRECT_URL}
                                    //onClick={handleLoginRedirect}
                                    className="block px-8 py-2 mt-2 border-2 border-white/20 hover:border-blue-500 text-white rounded-xl text-[11px] uppercase font-bold tracking-[0.2em] transition-all"
                                >
                                    Login to Dashboard
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default AuthModal;