"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Box, Award, Zap, Cpu, Settings } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { icon: Zap, label: "Power Range", value: "0.5 - 250 kW" },
    { icon: Award, label: "Efficiency", value: "IE4 Ready" },
    { icon: Cpu, label: "Control", value: "Vector / V/F" },
    { icon: Settings, label: "Protection", value: "IP20 / IP54" },
];

export function ProductsPreview() {
    return (
        <section className="py-24 lg:py-32 bg-transparent overflow-hidden relative">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <motion.div
                        className="flex-1 space-y-8 relative z-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-2 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                            Flagship Series
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Engineered for <br />
                            <span className="text-blue-500">Every Application</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            From simple pumps to complex automation lines, our VFDs deliver consistent performance. Scalable solutions designed for the Indian industrial ecosystem.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="glass-card p-4 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-400">{item.label}</span>
                                    </div>
                                    <div className="text-lg font-bold text-white pl-1">{item.value}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4 flex gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 h-12 bg-white hover:bg-slate-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                                <Link href="/products">
                                    View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full flex justify-center relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 w-80 h-[500px] bg-[#0a0a0a] rounded-3xl shadow-2xl flex flex-col p-6 border-b-8 border-r-8 border-black transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 ring-1 ring-white/10">
                            {/* Device Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div className="text-white font-bold tracking-widest text-lg">VFD-X1</div>
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                            </div>

                            {/* Display */}
                            <div className="h-32 bg-black rounded-xl border border-white/10 mb-8 p-4 flex flex-col justify-between relative overflow-hidden group shadow-inner">
                                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                                <div className="flex justify-between text-xs text-slate-500 font-mono">
                                    <span>FREQ</span>
                                    <span>RUN</span>
                                </div>
                                <div className="text-4xl font-mono text-blue-400 font-bold tracking-tighter self-end drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                                    50.00 <span className="text-sm text-slate-500">Hz</span>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="grid grid-cols-3 gap-3 mb-auto">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500 transition-colors cursor-pointer text-slate-400 hover:text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Vent */}
                            <div className="mt-8 space-y-2">
                                <div className="h-1 bg-white/5 rounded-full w-full" />
                                <div className="h-1 bg-white/5 rounded-full w-full" />
                                <div className="h-1 bg-white/5 rounded-full w-5/6 mx-auto" />
                            </div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            className="hidden md:flex absolute top-20 -right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/10 items-center gap-3 max-w-[200px]"
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            animate={{ y: [0, -10, 0] }}
                        >
                            <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                                <Box className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 uppercase font-semibold">Stock Status</div>
                                <div className="text-sm font-bold text-white">Ready to Ship</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
