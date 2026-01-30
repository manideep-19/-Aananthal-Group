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
        <section ref={targetRef} className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent blur-3xl pointer-events-none" />
            </div>

            <Container className="relative z-10 pt-24 pb-32 lg:pt-40 lg:pb-48">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm mb-8 hover:bg-white/80 transition-colors"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Engineered for Industrial Excellence
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Precision Control. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
                            Maximum Efficiency.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Next-generation Variable Frequency Drives designed to optimize energy consumption and extend equipment lifespan by up to <strong>200%</strong>.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-5 w-full justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-transform hover:scale-105 active:scale-95">
                            <Link href="/products">
                                View Product Line
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-slate-50 text-slate-700 hover:border-slate-300 transition-all hover:-translate-y-0.5 shadow-sm">
                            <Link href="/contact">
                                Request a Quote
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
                            { icon: Zap, label: "Energy Savings", value: "40-60%", color: "text-amber-500", bg: "bg-amber-500/10" },
                            { icon: ShieldCheck, label: "Warranty", value: "3 Years", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                            { icon: Activity, label: "Uptime", value: "99.9%", color: "text-blue-500", bg: "bg-blue-500/10" },
                            { icon: Gauge, label: "Torque Control", value: "Precise", color: "text-violet-500", bg: "bg-violet-500/10" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow">
                                <div className={`h-10 w-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                                    <stat.icon className="h-5 w-5" />
                                </div>
                                <div className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            {/* Abstract 3Dish decorations - Bottom */}
            <motion.div style={{ y, opacity }} className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></motion.div>
        </section>
    );
}
