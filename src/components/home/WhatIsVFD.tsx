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
        bg: "bg-blue-50",
        text: "text-blue-600",
    },
    {
        icon: Zap,
        title: "Energy Efficiency",
        description: "Aligns motor speed with load requirements, cutting energy waste by up to 60%.",
        bg: "bg-amber-50",
        text: "text-amber-600",
    },
    {
        icon: Activity,
        title: "Extended Equipment Life",
        description: "Soft start/stop capabilities reduce mechanical stress and maintenance needs.",
        bg: "bg-emerald-50",
        text: "text-emerald-600",
    },
    {
        icon: Cpu,
        title: "Advanced Intelligent Process",
        description: "Built-in PLCs and PID controllers handle complex logic without external hardware.",
        bg: "bg-violet-50",
        text: "text-violet-600",
    },
    {
        icon: Sliders,
        title: "Seamless Compatibility",
        description: "Integrates with existing industrial automation systems via Modbus/Profibus.",
        bg: "bg-indigo-50",
        text: "text-indigo-600",
    },
    {
        icon: Settings,
        title: "Reduced Harmonic",
        description: "Advanced filtering minimizes harmonic distortion in power networks.",
        bg: "bg-rose-50",
        text: "text-rose-600",
    },
];

export function WhatIsVFD() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none opacity-60" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What is a Variable Frequency Drive?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 leading-relaxed"
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
                            className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300"
                        >
                            <div className={`h-14 w-14 rounded-2xl ${feature.bg} ${feature.text} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover effect decorative line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-900 relative overflow-hidden text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
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
