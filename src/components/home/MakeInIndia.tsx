"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function MakeInIndia() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">

            {/* Abstract Tricolor Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        className="flex-1 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                            Make In India Initiative
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Built for Today. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">
                                Ready for Tomorrow.
                            </span>
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                            We are proud to contribute to India's industrial growth. Our VFDs are designed, engineered, and manufactured to meet the specific demands of the Indian power grid while competing on a global stage.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="pl-4 border-l-2 border-orange-500">
                                <h3 className="text-lg font-bold text-white mb-1">Local Design</h3>
                                <p className="text-sm text-slate-400">Tailored for Indian conditions</p>
                            </div>
                            <div className="pl-4 border-l-2 border-white">
                                <h3 className="text-lg font-bold text-white mb-1">Global Quality</h3>
                                <p className="text-sm text-slate-400">International standard compliance</p>
                            </div>
                            <div className="pl-4 border-l-2 border-green-500">
                                <h3 className="text-lg font-bold text-white mb-1">Sustainable</h3>
                                <p className="text-sm text-slate-400">Eco-friendly manufacturing</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map or Graphic Placeholder */}
                    <div className="flex-1 w-full flex justify-center perspective-1000">
                        {/* We can use a stylized map SVG or simple text art */}
                        <motion.div
                            className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm"
                            initial={{ opacity: 0, rotateY: 10 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite_reverse]" />

                            <div className="text-center space-y-2 relative z-10">
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 opacity-50 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 transform">
                                    INDIA
                                </div>
                                <div className="text-xl font-medium tracking-widest text-white uppercase">Designed In</div>
                                <div className="text-5xl font-black tracking-tighter text-white">INDIA</div>
                                <div className="text-xl font-medium tracking-widest text-white uppercase">For the World</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
