'use client';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const [showWA, setShowWA] = useState(false);

    return (
        <>
            <div className="fixed bottom-10 right-10 z-[1000] flex flex-col items-end gap-4">
                <AnimatePresence>
                    {showWA && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-[#16191E] border border-white/10 p-4 rounded-2xl shadow-2xl mb-2 max-w-[180px]">
                            <p className="text-white font-bold text-xs mb-1">Support Online</p>
                            <p className="text-white/40 text-[10px]">Chat with our desk now.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.a
                    href="#"
                    onMouseEnter={() => setShowWA(true)} onMouseLeave={() => setShowWA(false)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/20 relative group"
                >
                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
                    <FaWhatsapp size={32} className="relative z-10" />
                </motion.a>
            </div>
        </>
    )
}