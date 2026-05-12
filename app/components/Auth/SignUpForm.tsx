
// AuthModal.tsx
"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, ShieldCheck, Loader2, EyeOff, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { error } from 'console';

export function SignUpForm({ toggleForm }: { toggleForm: () => void }) {

    const [step, setStep] = useState(1); // 1: phone+email, 2: otp, 3: name+pass, 4: success
    const [loading, setLoading] = useState(false);
    const [resendTimer, setResendTimer] = useState(59);

    // field state
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConf, setShowConf] = useState(false);
    const [referral, setReferral] = useState(false);
    const [referralUrl, SetReferralUrl] = useState("")
    const [passError, setPassError] = useState("");
    const [resData, setResData] = useState(null); // add this with your other state

    const otpRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));

    const inputCls =
        'w-full bg-bg-main/50 border border-border-main rounded-2xl px-4 py-3 sm:px-4 sm:py-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted';

    // ── Step 1 → send OTP ──────────────────────────────────────
    const handleSendOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // TODO: call your send-OTP API with phone / email
        setTimeout(() => {
            setLoading(false);
            setStep(2);
            // start resend countdown
            let t = 59;
            const id = setInterval(() => {
                t -= 1;
                setResendTimer(t);
                if (t <= 0) clearInterval(id);
            }, 1000);
        }, 1500);
    };

    // ── OTP input helpers ──────────────────────────────────────
    const handleOtpChange = (i: number, val: string) => {
        if (!/^\d?$/.test(val)) return;
        const next = [...otp];
        next[i] = val;
        setOtp(next);
        if (val && i < 5) otpRefs[i + 1].current?.focus();
    };

    const handleOtpKeyDown = (i: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs[i - 1].current?.focus();
    };

    const handleOtpPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        const next = [...otp];
        pasted.split("").forEach((ch, i) => { next[i] = ch; });
        setOtp(next);
        otpRefs[Math.min(pasted.length, 5)].current?.focus();
    };

    // ── Step 2 → verify OTP ────────────────────────────────────
    const handleVerifyOtp = () => {
        if (otp.join("").length < 6) return;
        setLoading(true);
        // TODO: call your verify-OTP API
        setTimeout(() => {
            setLoading(false);
            setStep(3);
        }, 1500);
    };

    // ── Password strength ──────────────────────────────────────
    const passChecks = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ];
    const passScore = passChecks.filter(Boolean).length;
    const passLabel = ["", "Weak", "Fair", "Good", "Strong"][passScore];
    const passColor = [
        "",
        "bg-red-500",
        "bg-yellow-500",
        "bg-blue-400",
        "bg-accent-green",
    ][passScore];
    const passTextColor = [
        "",
        "text-red-400",
        "text-yellow-400",
        "text-blue-400",
        "text-accent-green",
    ][passScore];

    // ── Step 3 → create account ────────────────────────────────

    const handleCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        setPassError("");
        if (password !== confirm) { setPassError("Passwords do not match."); return; }
        if (password.length < 8) { setPassError("Minimum 8 characters required."); return; }
        if (!referralUrl) {
            setPassError("Referral url is required");
        }

        const urlParams = new URLSearchParams(referralUrl?.split("?")[1]);
        const referral_master = urlParams.get("referral_master");
        const referral_broker = urlParams.get("referral_broker");

        const data = {
            name,
            mobile: phone,
            email,
            password,
            referral_master: referral_master ?? "",  // always send, default ""
            referral_broker: referral_broker ?? "",  // always send, default ""
        };

        try {
            setLoading(true);
            const res = await axios.post('https://web.tradeapp-ex.com/api/clientRegister', data);

            const { status, message, data: resData } = res.data;

            if (status === 200 && message === "success") {
                setResData(resData) // store login_id if needed
                setStep(4);
            } else if (status === 100) {
                setPassError(message); // e.g. "Mobile number already registered"
            } else {
                setPassError(resData?.error || message || "Something went wrong, try later!");
            }
        } catch (error) {
            setPassError("Something went wrong, try later!");
        } finally {
            setLoading(false);
        }
    };

    // ── Step indicator ─────────────────────────────────────────
    const StepDots = () => (
        <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${s < step ? "bg-accent-green/20 border border-accent-green text-accent-green" :
                        s === step ? "bg-accent-blue text-white" :
                            "bg-white/5 border border-border-main text-text-muted"
                        }`}>
                        {s < step ? "✓" : s}
                    </div>
                    {s < 3 && <div className={`w-8 h-px transition-all duration-300 ${s < step ? "bg-accent-green/40" : "bg-border-main"}`} />}
                </div>
            ))}
        </div>
    );

    return (
        <motion.div
            key="signup-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 font-sans"
        >
            <AnimatePresence mode="wait">

                {/* ───────────────────────────────────────────────
                    STEP 1 — Phone + Email
                ─────────────────────────────────────────────── */}
                {step === 1 && (
                    <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">New Account</h2>
                            <p className="text-text-muted text-xs uppercase tracking-widest font-bold">Create your trading account</p>
                        </div>

                        <StepDots />

                        <form onSubmit={handleSendOtp} className="space-y-5 mt-4">
                            <input
                                type="tel"
                                required
                                placeholder="Phone Number *"
                                className={inputCls}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {/* <input
                                type="email"
                                required
                                placeholder="Email Address *"
                                className={inputCls}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /> */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="cursor-pointer w-full py-3 sm:py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-blue/20"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : 'Get OTP'}
                            </button>
                            <p className="text-[10px] text-center text-text-muted uppercase tracking-widest">
                                By submitting, you agree to our{' '}
                                <span className="text-text-primary cursor-pointer hover:underline">Privacy Protocol</span>
                            </p>
                        </form>
                    </motion.div>
                )}

                {/* ───────────────────────────────────────────────
                    STEP 2 — OTP Verification
                ─────────────────────────────────────────────── */}
                {step === 2 && (
                    <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8 py-4"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck size={32} className="text-accent-blue" />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Verify Node</h2>
                            <p className="text-text-muted text-[10px] uppercase tracking-widest leading-relaxed">
                                Code sent to <span className="text-text-primary">{phone || email}</span>. Enter digits to confirm.
                            </p>
                        </div>

                        {/* OTP boxes */}
                        <div className="flex gap-2 sm:gap-3 justify-center">
                            {otp.map((val, i) => (
                                <input
                                    key={i}
                                    ref={otpRefs[i]}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={val}
                                    onChange={(e) => handleOtpChange(i, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                    onPaste={handleOtpPaste}
                                    className="w-10 h-12 sm:w-12 sm:h-14 bg-bg-main/50 border border-border-main rounded-2xl text-center text-xl font-black text-accent-blue focus:border-accent-blue outline-none transition-all"
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleVerifyOtp}
                            disabled={loading || otp.join("").length < 6}
                            className="cursor-pointer w-full py-3 sm:py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-blue/20"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : 'Verify & Continue'}
                        </button>

                        {/* Resend */}
                        <p
                            onClick={() => resendTimer <= 0 && handleSendOtp({ preventDefault: () => { } } as React.FormEvent)}
                            className={`text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${resendTimer > 0
                                ? "text-text-muted cursor-default"
                                : "text-accent-blue cursor-pointer hover:text-accent-blue-light"
                                }`}
                        >
                            {resendTimer > 0 ? `Resend Code in 0:${String(resendTimer).padStart(2, "0")}` : "Resend Code"}
                        </p>
                    </motion.div>
                )}

                {/* ───────────────────────────────────────────────
                    STEP 3 — Name + Password
                ─────────────────────────────────────────────── */}
                {step === 3 && (
                    <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Set Up Profile</h2>
                            <p className="text-text-muted text-xs uppercase tracking-widest font-bold">Almost there — secure your account</p>
                        </div>

                        <StepDots />

                        <form onSubmit={handleCreateAccount} className="space-y-5">
                            <input
                                type="text"
                                required
                                placeholder="Full Name *"
                                className={inputCls}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            {/* Password */}
                            <div className="space-y-2">
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        required
                                        placeholder="Password *"
                                        className={`${inputCls} pr-12`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                                    >
                                        {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>

                                {/* Strength bar */}
                                {password.length > 0 && (
                                    <div className="space-y-1.5 px-1">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= passScore ? passColor : "bg-border-main"}`}
                                                />
                                            ))}
                                        </div>
                                        <p className={`text-[10px] font-bold uppercase tracking-widest ${passTextColor}`}>
                                            {passLabel}
                                        </p>
                                    </div>
                                )}
                            </div>


                            {/* Confirm password */}
                            <div className="relative">
                                <input
                                    type={showConf ? "text" : "password"}
                                    required
                                    placeholder="Confirm Password *"
                                    className={`${inputCls} pr-12 ${passError ? "border-red-500/50" : ""}`}
                                    value={confirm}
                                    onChange={(e) => { setConfirm(e.target.value); setPassError(""); }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConf(!showConf)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                                >
                                    {showConf ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <div className="relative">
                                <div className="flex justify-between px-2 items-center text-[10px] font-black uppercase tracking-widest">
                                    <label className="flex items-center gap-2 cursor-pointer text-text-muted hover:text-text-primary transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={referral}
                                            onChange={() => setReferral(!referral)}
                                            className="accent-accent-blue"
                                        />
                                        <span>Do you have a referral?</span>
                                    </label>
                                </div>

                                {referral && (
                                    <div className="relative mt-4">
                                        <input
                                            type="text"
                                            required={referral}
                                            placeholder="Referral URL"
                                            className={`${inputCls} pr-12`}
                                            value={referralUrl}
                                            onChange={(e) => SetReferralUrl(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Inline error */}
                            {passError && (
                                <p className="text-[11px] font-bold text-red-400 uppercase tracking-wider px-1">
                                    ⚠ {passError}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="cursor-pointer w-full py-3 sm:py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent-blue/20"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : 'Create Account'}
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* ───────────────────────────────────────────────
                    STEP 4 — Success popup
                ─────────────────────────────────────────────── */}
                {step === 4 && (
                    <motion.div
                        key="step-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-6 space-y-8 text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            className="w-20 h-20 rounded-2xl bg-accent-green/10 border border-accent-green/25 flex items-center justify-center mx-auto"
                        >
                            <CheckCircle2 size={40} className="text-accent-green" />
                        </motion.div>

                        {/* Message */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                                Account Created!
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                                Your account is ready. You can login using your{' '}
                                <span className="text-text-primary font-bold">phone number</span>{' '}
                                and the password you just set.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-border-main" />

                        {/* Go to login */}
                        <div className="space-y-3">
                            <button
                                onClick={toggleForm}
                                className="cursor-pointer w-full py-3 sm:py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-accent-blue/20"
                            >
                                <ArrowRight size={20} /> Go to Login
                            </button>

                            {/* External dashboard link */}
                            {/* <Link
                                href="https://app.yourdomain.com"   // ← replace with your actual URL
                                className="cursor-pointer w-full py-3 sm:py-4 px-6 border border-border-main hover:border-accent-blue/40 text-text-muted hover:text-text-primary rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                            >
                                Go to Dashboard <ArrowRight size={16} />
                            </Link> */}
                        </div>

                        <p className="text-[10px] text-text-muted uppercase tracking-widest">
                            Welcome to the network, {name || "Trader"}.
                        </p>
                    </motion.div>
                )}

            </AnimatePresence>
        </motion.div>
    );
}