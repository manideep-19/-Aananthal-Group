"use client";

import { Container } from "@/components/ui/Container";
import { ShieldCheck, Cpu, Globe2, Award, Zap, HardHat } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Globe2,
        title: "Designed in India",
        description: "Engineered specifically for Indian power conditions and global standards.",
        color: "blue"
    },
    {
        icon: Cpu,
        title: "Automated Manufacturing",
        description: "State-of-the-art SMT lines, automated assembly, and rigorous testing.",
        color: "indigo"
    },
    {
        icon: ShieldCheck,
        title: "Reliability First",
        description: "Focus on operational reliability, efficiency, and long-term scalability.",
        color: "emerald"
    },
    {
        icon: Award,
        title: "Global Ambition",
        description: "Building a world-class manufacturing brand from India.",
        color: "amber"
    },
];

export function TrustBuilder() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-16">
                    <div className="flex-1 max-w-2xl">
                        <motion.h2
                            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Why Leading Industries Trust <span className="text-blue-600">Aananthal</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-slate-600 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            We don't just sell VFDs; we engineer confidence. Our commitment to quality ensures your operations never stop.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300 text-${feature.color}-600`}>
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
