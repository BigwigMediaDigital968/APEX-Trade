'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Briefcase, TrendingUp, ShieldCheck, Users } from 'lucide-react';


export default function BrokerSection() {

   const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    firm: '',
    message: ''
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="become-a-broker" className="min-h-screen  text-white py-20 px-6 flex items-center justify-center font-sans overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="space-y-4">

             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-border-blue text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
            <span>Partner with Tradex</span>
          </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Become a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue  to-emerald-400">
                Partner Broker
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Expand your client network and leverage our high-performance trading infrastructure. 
              We provide the tools, liquidity, and support needed to scale your brokerage business.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, title: "High Margins", desc: "Competitive payout structures." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure Desk", desc: "Reliable trading environment." },
              { icon: <Users className="w-5 h-5" />, title: "CRM Tools", desc: "Advanced client management." },
              { icon: <Briefcase className="w-5 h-5" />, title: "Fast Setup", desc: "Onboard in under 48 hours." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-emerald-400 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="relative">
          <div className="bg-[#11141b] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold">Application Form</h3>
                    <p className="text-gray-500 text-sm">Fill in your details and our team will contact you.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-[#0a0c10]/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-blue-500 focus:bg-[#161b24] transition-all placeholder:text-gray-600"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-[#0a0c10]/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-blue-500 focus:bg-[#161b24] transition-all placeholder:text-gray-600"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full bg-[#0a0c10]/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-blue-500 focus:bg-[#161b24] transition-all placeholder:text-gray-600"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <input
                    type="text"
                    placeholder="Current or Last Firm"
                    required
                    className="w-full bg-[#0a0c10]/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-blue-500 focus:bg-[#161b24] transition-all placeholder:text-gray-600"
                    value={form.firm}
                    onChange={(e) => setForm({ ...form, firm: e.target.value })}
                  />
                  </div>

                  

                  <textarea
                    placeholder="Briefly tell us about your current client base..."
                    required
                    rows={3}
                    className="w-full bg-[#0a0c10]/50 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-blue-500 focus:bg-[#161b24] transition-all placeholder:text-gray-600 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer group relative py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-900/20"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <span>Submit Application</span>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest mt-4">
                    By applying, you agree to our <span className="text-white cursor-pointer hover:underline">Partner Terms</span>
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Application Sent</h3>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Thank you for your interest. A partnership manager will review your details and reach out within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                  >
                    Back to Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
