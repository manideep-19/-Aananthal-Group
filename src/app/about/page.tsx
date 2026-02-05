import { Container } from "@/components/ui/Container";

export default function AboutPage() {
    return (
        <div className="bg-transparent">
            <section className="py-24 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-2xl">
                            Building a focused, high-quality VFD manufacturing company in India.
                        </h1>
                        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Aananthal Group of Industries Pvt. Ltd. was founded with a singular mission:
                            to engineer Variable Frequency Drives that combine global standards of efficiency with local robustness.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-24 bg-white/5 border-t border-white/10 backdrop-blur-sm">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                To become a trusted Indian VFD brand with global relevance. We believe that efficiency is the cornerstone of modern industry, and our products are designed to make high-performance motor control accessible and reliable.
                            </p>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                We are not just assembling components; we are building an ecosystem of industrial automation that powers the future of manufacturing in India.
                            </p>
                        </div>
                        <div className="relative h-80 glass-card rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                            <div className="relative text-center p-8 z-10">
                                <div className="text-6xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">100%</div>
                                <div className="text-blue-200 font-medium tracking-wide uppercase opacity-80">Committed to Quality</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
