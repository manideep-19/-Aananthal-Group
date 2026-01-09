"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, TrendingDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-40 lg:pb-48">
            {/* Background Decor - Subtle Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background-image:linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] [background-size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            Engineered in India
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl mb-6 leading-[1.1]">
                            Control Energy. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Control Costs.</span>
                        </h1>
                        <h2 className="text-xl text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
                            High-efficiency variable frequency drives engineered for the toughest industrial demands.
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button asChild size="lg" className="text-lg px-8 h-14 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 rounded-full">
                                <Link href="/products">
                                    Explore Our VFDs
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 h-14 border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full">
                                <Link href="/contact">Speak to an Expert</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <span>Up to 60% Energy Savings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingDown className="h-5 w-5 text-green-500" />
                                <span>Reduced Maintenance</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content - Refined Technical Abstract */}
                    <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
                        {/* Spinning Rings */}
                        <motion.div
                            className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-slate-100"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-blue-100"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Main Card */}
                        <motion.div
                            className="relative z-10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-64 h-80 md:w-72 md:h-96 bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-800">
                                {/* Screen Area */}
                                <div className="bg-slate-800 h-1/2 p-6 flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs text-slate-400 font-mono">OUTPUT FREQUENCY</div>
                                        <div className="text-4xl text-white font-mono font-bold tracking-tighter">
                                            <span className="text-blue-400">50.00</span> Hz
                                        </div>
                                    </div>

                                    {/* Animated Graph Line */}
                                    <div className="h-16 w-full flex items-end gap-1">
                                        {[40, 60, 45, 70, 50, 80, 60, 90, 75, 60, 80, 100].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 bg-blue-500/20 rounded-t-sm"
                                                initial={{ height: "10%" }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Control Area */}
                                <div className="bg-slate-900 h-1/2 p-6 grid grid-cols-2 gap-4">
                                    <div className="col-span-2 flex items-center gap-4 border-b border-slate-800 pb-4">
                                        <div className="w-12 h-12 rounded-full border-4 border-slate-700 flex items-center justify-center">
                                            <div className="w-1 h-3 bg-blue-500 rounded-full transform rotate-45" />
                                        </div>
                                        <div className="text-xs text-slate-500">SPEED CONTROL</div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full w-full col-span-2 mt-auto">
                                        <motion.div
                                            className="h-full bg-green-500 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "98%" }}
                                            transition={{ duration: 2, delay: 1 }}
                                        />
                                    </div>
                                    <div className="text-xs text-green-500 font-mono col-span-2 text-right">SYSTEM ONLINE</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Impact Badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <TrendingDown className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-semibold uppercase">Cost Savings</div>
                                <div className="text-lg font-bold text-slate-900">₹ 4.5L / Yr</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
