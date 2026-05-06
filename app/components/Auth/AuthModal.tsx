// AuthModal.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
        setStep(1);
    };

    const handleRequestOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 1500);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };

    if (!isOpen) return null;

    // Shared input className
    const inputCls =
        'w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted';

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-[1000px] h-full min-h-[600px] bg-[#16191E] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-6 right-6 z-[60] p-2 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                    <X size={24} />
                </button>

                <div className={`relative flex w-full h-full transition-all duration-700 ease-in-out ${isLogin ? 'flex-row' : 'flex-row-reverse'}`}>

                    {/* ── FORM SIDE ── */}
                    <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-center bg-[#16191E] z-50">
                        <AnimatePresence mode="wait">

                            {/* ─── LOGIN ─── */}
                            {isLogin ? (
                                <motion.div
                                    key="login-form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-8 font-sans"
                                >
                                    <div>
                                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">LOGIN</h2>
                                        <p className="text-text-muted text-xs uppercase tracking-widest font-bold">Secure access to your account</p>
                                    </div>

                                    <form onSubmit={handleLogin} className="space-y-5">
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                            required
                                            className={inputCls}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            className={inputCls}
                                        />

                                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                            <label className="flex items-center gap-2 cursor-pointer text-text-muted hover:text-text-primary transition-colors">
                                                <input type="checkbox" className="accent-accent-blue" />
                                                <span>Keep me signed in</span>
                                            </label>
                                            <Link href="#" className="text-accent-blue hover:text-accent-blue-light transition-colors">
                                                Forgot Password?
                                            </Link>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="cursor-pointer w-full py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-blue/20"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : 'Sign In'}
                                        </button>

                                        <p className="text-[10px] text-center text-text-muted uppercase tracking-widest">
                                            By signing in, you agree to our{' '}
                                            <span className="text-text-primary cursor-pointer hover:underline">Privacy Protocol</span>
                                        </p>
                                    </form>
                                </motion.div>

                            ) : (

                                // ─── SIGNUP ───
                                <motion.div
                                    key="signup-form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 font-sans"
                                >
                                    {step === 1 ? (
                                        <>
                                            <div>
                                                <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">New Account</h2>
                                                <p className="text-text-muted text-xs uppercase tracking-widest font-bold">Create your trading account</p>
                                            </div>

                                            <form onSubmit={handleRequestOtp} className="space-y-5">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name *"
                                                    required
                                                    className={inputCls}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email Address *"
                                                    required
                                                    className={inputCls}
                                                />
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Phone Number *"
                                                    className={inputCls}
                                                />

                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="cursor-pointer w-full py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-blue/20"
                                                >
                                                    {loading ? <Loader2 className="animate-spin" /> : 'Get OTP'}
                                                </button>

                                                <p className="text-[10px] text-center text-text-muted uppercase tracking-widest">
                                                    By submitting, you agree to our{' '}
                                                    <span className="text-text-primary cursor-pointer hover:underline">Privacy Protocol</span>
                                                </p>
                                            </form>
                                        </>
                                    ) : (

                                        // ─── OTP STEP ───
                                        <div className="space-y-8 py-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                                    <ShieldCheck size={32} className="text-accent-blue" />
                                                </div>
                                                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Verify Node</h2>
                                                <p className="text-text-muted text-[10px] uppercase tracking-widest leading-relaxed">
                                                    Verification code sent to your terminal. Enter digits to confirm.
                                                </p>
                                            </div>

                                            <div className="flex gap-3 justify-center">
                                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                                    <input
                                                        key={i}
                                                        type="text"
                                                        maxLength={1}
                                                        className="w-12 h-14 bg-bg-main/50 border border-border-main rounded-2xl text-center text-xl font-black text-accent-blue focus:border-accent-blue outline-none transition-all"
                                                    />
                                                ))}
                                            </div>

                                            <button
                                                className="cursor-pointer w-full py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] shadow-lg shadow-accent-blue/20"
                                            >
                                                Confirm & Create Account
                                            </button>

                                            <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] hover:text-accent-blue cursor-pointer transition-colors">
                                                Resend Code in 0:59
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ── CTA PANEL (unchanged) ── */}
                    <div className="hidden md:flex w-1/2 h-auto relative overflow-hidden bg-[#3D6BFF]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3D6BFF] via-[#3D6BFF] to-[#16191E]/20" />
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />

                        <motion.div
                            key={isLogin ? 'cta-login' : 'cta-signup'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative z-10 w-full h-full p-16 flex flex-col justify-center items-center text-center space-y-8"
                        >
                            {isLogin ? (
                                <>
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">NEW TO <br />Apex Trade?</h2>
                                        <p className="text-white/70 font-medium leading-relaxed max-w-xs mx-auto">
                                            Initialize your professional trading portfolio with institutional-grade tools today.
                                        </p>
                                    </div>
                                    <button
                                        onClick={toggleAuth}
                                        className="cursor-pointer rounded-2xl  group flex items-center gap-4 px-10 py-5 border-2 border-white/30 hover:border-white text-white font-black uppercase tracking-[0.3em] text-xs transition-all"
                                    >
                                        <span>Create Account</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">Existing User?</h2>
                                        <p className="text-white/70 font-medium leading-relaxed max-w-xs mx-auto">
                                            Enter your details to access your trading dashboard.
                                        </p>
                                    </div>
                                    <button
                                        onClick={toggleAuth}
                                        className="cursor-pointer rounded-2xl  group flex items-center gap-4 px-10 py-5 border-2 border-white/30 hover:border-white text-white font-black uppercase tracking-[0.3em] text-xs transition-all"
                                    >
                                        <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                                        <span>GO TO LOGIN</span>
                                    </button>
                                </>
                            )}
                        </motion.div>

                        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-12 opacity-30">
                            <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">ISO-27001 SECURE</div>
                            <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">ENCRYPTED NODE</div>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden p-6 bg-[#0B0E14] border-t border-white/5 text-center">
                        <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest mb-4">
                            {isLogin ? "Don't have an account?" : 'Already a member?'}
                        </p>
                        <button
                            onClick={toggleAuth}
                            className="text-accent-blue font-black uppercase tracking-[0.2em] text-xs underline underline-offset-8"
                        >
                            {isLogin ? 'Join the Protocol' : 'Sign in to Terminal'}
                        </button>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default AuthModal;