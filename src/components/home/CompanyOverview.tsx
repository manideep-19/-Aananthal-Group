"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export function CompanyOverview() {
    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-3">
                                Who We Are
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Pioneering the Future of <span className="relative whitespace-nowrap">
                                    <span className="relative z-10">Industrial Control</span>
                                    <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/20 -z-10 transform -rotate-1"></span>
                                </span>
                            </h3>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                Aananthal Group of Industries Pvt. Ltd. is dedicated to engineering world-class Variable Frequency Drives (VFDs) that combine global efficiency standards with the robustness required for Indian conditions. We aren't just manufacturing devices; we are building the backbone of modern industrial automation.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Target,
                                    title: "Our Mission",
                                    description: "To engineer VFDs that deliver maximum efficiency and reliability tailored for diverse industrial needs."
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Our Vision",
                                    description: "To become a trusted Indian brand with global relevance in industrial automation and energy management."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                >
                                    <div className="shrink-0 h-12 w-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center ring-1 ring-blue-500/20">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] aspect-square lg:aspect-[4/5] flex items-center justify-center p-8 glass-card"
                        >
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                            <div className="relative z-10 text-center text-white space-y-6">
                                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <TrendingUp className="h-10 w-10 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-5xl font-bold tracking-tighter mb-2 drop-shadow-lg">100%</div>
                                    <div className="text-sm uppercase tracking-widest text-blue-200 font-medium opacity-80">Commitment to Quality</div>
                                </div>
                                <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full my-6 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                <p className="text-slate-300 max-w-xs mx-auto text-sm leading-relaxed">
                                    "Efficiency is the cornerstone of modern industry. We make it accessible."
                                </p>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
