"use client";

import { Container } from "@/components/ui/Container";
import { Gauge, Zap, Activity, Cpu, Sliders, Settings } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        icon: Gauge,
        title: "Precise Speed Control",
        description: "Exact control over motor speed and torque significantly improves process control.",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
    },
    {
        icon: Zap,
        title: "Energy Efficiency",
        description: "Aligns motor speed with load requirements, cutting energy waste by up to 60%.",
        bg: "bg-amber-500/10",
        text: "text-amber-400",
    },
    {
        icon: Activity,
        title: "Extended Equipment Life",
        description: "Soft start/stop capabilities reduce mechanical stress and maintenance needs.",
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
    },
    {
        icon: Cpu,
        title: "Advanced Intelligent Process",
        description: "Built-in PLCs and PID controllers handle complex logic without external hardware.",
        bg: "bg-violet-500/10",
        text: "text-violet-400",
    },
    {
        icon: Sliders,
        title: "Seamless Compatibility",
        description: "Integrates with existing industrial automation systems via Modbus/Profibus.",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
    },
    {
        icon: Settings,
        title: "Reduced Harmonic",
        description: "Advanced filtering minimizes harmonic distortion in power networks.",
        bg: "bg-rose-500/10",
        text: "text-rose-400",
    },
];

export function WhatIsVFD() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
            {/* Background decorative blob - refined for dark */}
            <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What is a Variable Frequency Drive?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-400 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        A VFD is a power electronics device that controls the speed of an AC motor by varying the frequency and voltage supplied to the motor—giving you total control over your industrial processes.
                    </motion.p>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-3xl glass-card border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5"
                        >
                            <div className={`h-14 w-14 rounded-2xl ${feature.bg} ${feature.text} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ring-1 ring-white/10`}>
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover effect decorative line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden text-center backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03]"></div>
                    <div className="relative z-10">
                        <blockquote className="text-xl md:text-3xl font-medium text-white italic max-w-4xl mx-auto leading-relaxed">
                            &quot;Motors consume nearly <span className="text-blue-400 font-bold">45%</span> of global electricity. VFDs redefine efficiency, turning waste into savings.&quot;
                        </blockquote>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
