import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, Download, Zap, Shield, Cpu, Activity, Droplets, Wind, Move, ArrowUpFromDot, Factory } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="bg-transparent">
            {/* Product Hero */}
            <section className="relative overflow-hidden pt-32 pb-24">
                <Container className="relative z-10 text-center flex flex-col items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 drop-shadow-2xl">
                            High-Efficiency <span className="text-blue-500 block mt-2 drop-shadow-lg">Variable Frequency Drives</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Precision motor control designed to reduce energy consumption up to 60% and improve industrial performance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 w-full">
                            {[
                                { label: "Power Range", value: "0.5 kW – 250 kW", icon: Zap, color: "text-amber-400" },
                                { label: "Efficiency", value: "Up to 60% Savings", icon: Activity, color: "text-emerald-400" },
                                { label: "Reliability", value: "Industrial Grade", icon: Shield, color: "text-blue-400" },
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-6 flex flex-col items-center justify-center text-center hover:bg-white/10">
                                    <div className={`h-12 w-12 rounded-full bg-white/10 flex items-center justify-center ${item.color} mb-3 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div className="text-sm font-semibold text-white">{item.label}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">{item.value}</div>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 border-0">
                            <Link href="/contact">Request Product Details</Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Product Overview */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Schematic Visual */}
                        <div className="order-2 lg:order-1 relative h-[500px] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Schematic representation of VFD - Dark Mode */}
                            <div className="relative w-64 h-96 bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10 flex flex-col p-6 z-10 glass-card">
                                {/* Top Screen */}
                                <div className="h-20 bg-black rounded mb-4 flex items-center justify-center border border-white/10 shadow-inner">
                                    <span className="font-mono text-green-400 text-2xl drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">READY</span>
                                </div>
                                {/* Control Panel */}
                                <div className="grid grid-cols-4 gap-2 mb-8">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="h-8 bg-white/10 rounded border border-white/5 hover:bg-white/20 transition-colors" />
                                    ))}
                                </div>
                                {/* Venting */}
                                <div className="mt-auto space-y-2">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-1 bg-white/10 rounded-full w-full" />
                                    ))}
                                </div>
                            </div>

                            {/* Annotations */}
                            <div className="absolute top-1/4 left-10 glass px-3 py-1 rounded shadow-lg border border-white/20 text-xs font-semibold text-blue-300 backdrop-blur-md">
                                LED Control Panel
                            </div>
                            <div className="absolute bottom-1/4 right-10 glass px-3 py-1 rounded shadow-lg border border-white/20 text-xs font-semibold text-blue-300 backdrop-blur-md">
                                Optimized Heatsink
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-4 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                Intelligent Control
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Redefining Motor Control Standards</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Our VFDs are not just power regulators; they are intelligent process controllers. By adjusting motor speed to match valid load requirements, Aananthal VFDs eliminate energy waste and mechanical stress.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Advanced motor control algorithms for precise torque management",
                                    "Smooth start & stop functionality to prevent water hammer",
                                    "Robust protection against over-voltage and thermal overload",
                                    "Long operational life designed for continuous industrial usage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-300 group">
                                        <div className="h-6 w-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500 group-hover:text-white transition-colors ring-1 ring-blue-500/20">
                                            <Check className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Technical & Applications Grid */}
            <section className="py-24 bg-transparent border-t border-white/5">
                <Container>
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineered for Versatility</h2>
                        <p className="text-xl text-slate-400">One drive series, multiple industrial applications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Pumps & Water", desc: "Energy efficient flow control, dry run protection.", icon: Droplets },
                            { title: "HVAC & Building", desc: "Optimized for fans, cooling towers, and chillers.", icon: Wind },
                            { title: "Conveyors", desc: "Smooth acceleration, multi-speed operation.", icon: Move },
                            { title: "Elevators", desc: "Precise leveling, regenerative braking support.", icon: ArrowUpFromDot },
                            { title: "Compressors", desc: "Constant pressure control, energy saving mode.", icon: Factory },
                            { title: "Textile & Paper", desc: "High precision tension control.", icon: Activity },
                        ].map((app, i) => (
                            <div key={i} className="glass-card p-8 hover:-translate-y-1 hover:bg-white/5 group">
                                <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-300 mb-6 shadow-sm border border-white/10 group-hover:text-white group-hover:border-white/20 transition-all">
                                    <app.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {app.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Technical Info / Download */}
            <section className="py-24">
                <Container>
                    <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold mb-4 drop-shadow-md">Technical Specifications</h2>
                                <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
                                    Need detailed electrical ratings, dimensions, and control features?
                                    Download our comprehensive datasheet or speak to our engineering team.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button variant="secondary" size="lg" className="h-14 px-8 text-blue-900 font-bold gap-2 bg-white hover:bg-blue-50 border-0">
                                        <Download className="h-5 w-5" /> Download Datasheet (PDF)
                                    </Button>
                                    <Button variant="outline" className="h-14 px-8 bg-black/20 text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white" size="lg" asChild>
                                        <Link href="/contact">Talk to Technical Team</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Icon */}
                        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                            <Cpu className="w-[500px] h-[500px] text-white" />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
