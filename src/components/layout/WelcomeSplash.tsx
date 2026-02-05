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
            {/* iOS Glass Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
                {/* Frosted Glass Overlay - simulating the iOS blur over content */}
                <div className="absolute inset-0 backdrop-blur-[100px] bg-slate-950/30"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
                            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
                                Empowering Indian Industry with World-Class Control
                            </h1>

                            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                                Discover the future of Variable Frequency Drives. Engineered for robustness, designed for efficiency.
                            </p>

                            <motion.button
                                onClick={handleEnter}
                                onMouseEnter={handleEnter}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold transition-colors hover:bg-blue-500"
                            >
                                <span>Explore</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
