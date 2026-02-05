"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, TrendingDown, Gauge, ShieldCheck, Activity } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={targetRef} className="relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Transparent background to let global wallpaper show */}
            <div className="absolute inset-0 z-0 bg-transparent"></div>

            <Container className="relative z-10 pt-24 pb-32 lg:pt-40 lg:pb-48">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-blue-300 shadow-sm mb-8 hover:bg-white/10 transition-colors"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Engineered for Industrial Excellence
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[1] drop-shadow-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Precision <br className="hidden md:block" />
                        <span className="text-white/50">Control.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Variable Frequency Drives engineered for <span className="font-bold text-white">maximum efficiency</span>.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 w-full justify-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <Button asChild size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 border-0">
                            <Link href="/products">
                                View Products
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all border">
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {[
                            { icon: Zap, label: "Energy Savings", value: "40-60%", color: "text-amber-400", bg: "bg-amber-500/10" },
                            { icon: ShieldCheck, label: "Warranty", value: "3 Years", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                            { icon: Activity, label: "Uptime", value: "99.9%", color: "text-blue-400", bg: "bg-blue-500/10" },
                            { icon: Gauge, label: "Torque Control", value: "Precise", color: "text-violet-400", bg: "bg-violet-500/10" },
                        ].map((stat, i) => (
                            <div key={i} className="group flex flex-col items-center justify-center p-6 glass-card cursor-default hover:bg-white/10">
                                <div className={`h-12 w-12 ${stat.color} rounded-2xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 duration-300 relative`}>
                                    <div className={`absolute inset-0 ${stat.color} blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                    <stat.icon className="h-8 w-8 relative z-10" />
                                </div>
                                <div className="text-3xl font-bold text-white tracking-tight mb-0 drop-shadow-sm">{stat.value}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            {/* Abstract 3Dish decorations - Bottom */}
            <motion.div style={{ y, opacity }} className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20"></motion.div>
        </section>
    );
}
