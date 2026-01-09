import { Container } from "@/components/ui/Container";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <section className="py-24 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Building a focused, high-quality VFD manufacturing company in India.
                        </h1>
                        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Aananthal Group of Industries Pvt. Ltd. was founded with a singular mission:
                            to engineer Variable Frequency Drives that combine global standards of efficiency with local robustness.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-24 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                To become a trusted Indian VFD brand with global relevance. We believe that efficiency is the cornerstone of modern industry, and our products are designed to make high-performance motor control accessible and reliable.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are not just assembling components; we are building an ecosystem of industrial automation that powers the future of manufacturing in India.
                            </p>
                        </div>
                        <div className="relative h-80 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50" />
                            <div className="relative text-center p-8">
                                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-gray-500 font-medium tracking-wide uppercase">Committed to Quality</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
