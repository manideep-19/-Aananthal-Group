import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, Download, Zap, Shield, Cpu, Activity, Droplets, Wind, Move, ArrowUpFromDot, Factory } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="bg-white">
            {/* Product Hero */}
            <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-indigo-600 blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                            High-Efficiency <br />
                            <span className="text-blue-400">Variable Frequency Drives</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            Precision motor control designed to reduce energy consumption up to 60% and improve industrial performance.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Zap className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Power Range</div>
                                    <div className="text-xs text-gray-400">0.5 kW – 250 kW</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Activity className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Efficiency</div>
                                    <div className="text-xs text-gray-400">Up to 60% Savings</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Reliability</div>
                                    <div className="text-xs text-gray-400">Industrial Grade</div>
                                </div>
                            </div>
                        </div>

                        <Button asChild size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 border-none shadow-lg shadow-blue-900/50">
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
                        <div className="order-2 lg:order-1 relative h-[500px] bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden">
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Schematic representation of VFD */}
                            <div className="relative w-64 h-96 bg-white rounded-lg shadow-xl border border-slate-200 flex flex-col p-6 z-10">
                                {/* Top Screen */}
                                <div className="h-20 bg-slate-900 rounded mb-4 flex items-center justify-center border border-slate-700">
                                    <span className="font-mono text-green-500 text-2xl">READY</span>
                                </div>
                                {/* Control Panel */}
                                <div className="grid grid-cols-4 gap-2 mb-8">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="h-8 bg-slate-100 rounded border border-slate-200" />
                                    ))}
                                </div>
                                {/* Venting */}
                                <div className="mt-auto space-y-2">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-1 bg-slate-300 rounded-full w-full" />
                                    ))}
                                </div>
                            </div>

                            {/* Annotations */}
                            <div className="absolute top-1/4 left-10 bg-white px-3 py-1 rounded shadow-md border border-gray-100 text-xs font-semibold text-blue-600">
                                LED Control Panel
                            </div>
                            <div className="absolute bottom-1/4 right-10 bg-white px-3 py-1 rounded shadow-md border border-gray-100 text-xs font-semibold text-blue-600">
                                Optimized Heatsink
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
                                Intelligent Control
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Redefining Motor Control Standards</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our VFDs are not just power regulators; they are intelligent process controllers. By adjusting motor speed to match valid load requirements, Aananthal VFDs eliminate energy waste and mechanical stress.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Advanced motor control algorithms for precise torque management",
                                    "Smooth start & stop functionality to prevent water hammer",
                                    "Robust protection against over-voltage and thermal overload",
                                    "Long operational life designed for continuous industrial usage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-700 group">
                                        <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
            <section className="py-24 bg-slate-50 border-y border-gray-200">
                <Container>
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineered for Versatility</h2>
                        <p className="text-lg text-gray-600">One drive series, multiple industrial applications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Pumps & Water", desc: "Energy efficient flow control, dry run protection.", icon: Droplets },
                            { title: "HVAC & Building", desc: "Optimized for fans, cooling towers, and chillers.", icon: Wind },
                            { title: "Conveyors", desc: "Smooth acceleration, multi-speed operation.", icon: Move },
                            { title: "Elevators", desc: "Precise leveling, regenerative braking support.", icon: ArrowUpFromDot },
                            { title: "Compressors", desc: "Constant pressure control, energy saving mode.", icon: Factory },
                            { title: "Textile & Paper", desc: "High precision tension control.", icon: Activity }, // Activity as generic for tension
                        ].map((app, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <app.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
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
                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                    Need detailed electrical ratings, dimensions, and control features?
                                    Download our comprehensive datasheet or speak to our engineering team.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button variant="secondary" size="lg" className="h-14 px-8 text-blue-900 font-bold gap-2">
                                        <Download className="h-5 w-5" /> Download Datasheet (PDF)
                                    </Button>
                                    <Button variant="outline" className="h-14 px-8 text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white" size="lg" asChild>
                                        <Link href="/contact">Talk to Technical Team</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Icon */}
                        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                            <Cpu className="w-[500px] h-[500px]" />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
