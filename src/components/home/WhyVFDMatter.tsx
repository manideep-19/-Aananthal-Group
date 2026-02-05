"use client";

import { Container } from "@/components/ui/Container";
import { CheckCircle2, TrendingDown, Factory, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        title: "Cost Reduction",
        description: "Lower peak demand charges and reduced overall consumption translate to immediate ROI.",
        icon: TrendingDown
    },
    {
        title: "Process Optimization",
        description: "Automated speed regulation ensures consistent product quality and reduced waste.",
        icon: Factory
    },
    {
        title: "Sustainability",
        description: "Lower carbon footprint helps meet corporate environmental goals and standards.",
        icon: Leaf
    },
];

export function WhyVFDMatter() {
    return (
        <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                            Industry Standard
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Why Top Industries <br className="hidden md:block" />
                            <span className="text-blue-500">Are Switching to VFDs</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                            In an era of rising energy costs and sustainability mandates, efficiency is no longer optional—it's your biggest competitive advantage.
                        </p>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                            <benefit.icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interactive Visual Graph */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                                <Leaf className="h-48 w-48 text-emerald-500 transform rotate-12 translate-x-12 -translate-y-12" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <div className="text-sm text-slate-400 font-medium mb-1">Total Savings / Year</div>
                                        <div className="text-4xl font-bold text-white">₹ 12,45,000</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-sm font-medium">
                                            <TrendingDown className="h-4 w-4" />
                                            -45% Costs
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Bars */}
                                <div className="h-64 flex items-end justify-between gap-4">
                                    <div className="w-full flex flex-col gap-2">
                                        <div className="text-xs text-center text-slate-500">Without VFD</div>
                                        <div className="h-full w-full bg-slate-800 rounded-t-xl relative overflow-hidden">
                                            <div className="absolute bottom-0 w-full bg-red-500/20 h-[90%] border-t-2 border-red-500/50 transition-all duration-1000 group-hover:h-[92%]"></div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <div className="text-xs text-center text-slate-500">With VFD</div>
                                        <div className="h-full w-full bg-slate-800 rounded-t-xl relative overflow-hidden">
                                            <motion.div
                                                initial={{ height: "0%" }}
                                                whileInView={{ height: "45%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                className="absolute bottom-0 w-full bg-emerald-500/20 border-t-2 border-emerald-500"
                                            >
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-800 text-slate-400 text-sm flex justify-between">
                                    <span>Based on 100Hp Motor @ 24/7</span>
                                    <span>*Estimates only</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-white font-bold">ROI &lt; 12 Months</div>
                                <div className="text-xs text-slate-400">Typical payback period</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
