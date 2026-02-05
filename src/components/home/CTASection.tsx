"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="py-24 lg:py-32 bg-blue-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm"
                    >
                        <MessageSquare className="h-8 w-8 text-white" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Ready to Optimize Your <br />
                        <span className="text-blue-200">Industrial Efficiency?</span>
                    </motion.h2>

                    <motion.p
                        className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Join the hundreds of industries saving energy and costs with Aananthal VFDs. Our engineering team is ready to analyze your requirements.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-xl shadow-blue-900/20 hover:scale-105 transition-all duration-300">
                            <Link href="/contact">
                                Get a Quote Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 transition-colors hover:border-white">
                            <Link href="/products">
                                View Products
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
