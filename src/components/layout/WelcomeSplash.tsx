"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, MousePointer2 } from "lucide-react";

export function WelcomeSplash({ onComplete }: { onComplete: () => void }) {
    const [stage, setStage] = useState(0);
    const [valueIndex, setValueIndex] = useState(0);

    const values = ["Precision", "Efficiency", "Reliability", "Innovation"];

    useEffect(() => {
        // Stage 0: Initial Load
        // Stage 1: Values Cycle
        // Stage 2: Final Reveal (Buttons enabled)
        // Stage 3: Exit

        const sequence = async () => {
            // Start Logo
            await new Promise(r => setTimeout(r, 500));
            setStage(1);

            // Cycle Values
            for (let i = 0; i < values.length; i++) {
                setValueIndex(i);
                await new Promise(r => setTimeout(r, 800));
            }

            setStage(2);

            // Auto exit after a long wait if no interaction
            setTimeout(() => {
                // Only auto-exit, don't force if they are interacting
                // We can check this, but for now simple timer
            }, 8000);
        };

        sequence();
    }, []);

    const handleEnter = () => {
        setStage(3);
        setTimeout(onComplete, 800);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white overflow-hidden cursor-default"
            initial={{ opacity: 1 }}
            animate={stage === 3 ? { opacity: 0, y: -50 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Interactive Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
                />

                {/* Animated Blobs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 w-full text-center">

                {/* Logo */}
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="relative w-64 h-32 md:w-80 md:h-40">
                        <Image
                            src="/aananthal-logo.png"
                            alt="Aananthal Group Logo"
                            fill
                            className="object-contain"
                            style={{ filter: "invert(1) grayscale(1) contrast(5)", mixBlendMode: "lighten" }}
                            priority
                        />
                    </div>
                </motion.div>

                {/* Dynamic Value Text */}
                <div className="h-12 mb-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {stage === 1 && (
                            <motion.div
                                key={values[valueIndex]}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="text-2xl md:text-3xl font-light tracking-[0.2em] text-blue-400 uppercase"
                            >
                                {values[valueIndex]}
                            </motion.div>
                        )}
                        {stage >= 2 && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-lg md:text-xl font-medium tracking-widest text-slate-400"
                            >
                                AANANTHAL GROUP OF INDUSTRIES PVT. LTD.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Main Content Reveal */}
                <AnimatePresence>
                    {stage >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8 flex flex-col items-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300 max-w-3xl leading-tight">
                                Empowering Indian Industry with World-Class Control
                            </h1>

                            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                                Discover the future of Variable Frequency Drives. Engineered for robustness, designed for efficiency.
                            </p>

                            <motion.button
                                onClick={handleEnter}
                                onMouseEnter={handleEnter}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full text-lg font-bold tracking-wide overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            >
                                <span className="relative z-10">Enter Site</span>
                                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-xs text-slate-600 font-mono"
                            >
                                EST. 2026 • BANGALORE, INDIA
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
