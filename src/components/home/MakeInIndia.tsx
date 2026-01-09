import { Container } from "@/components/ui/Container";

export function MakeInIndia() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-800">
                        <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2"></span>
                        Make In India Initiative
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Built for Today. Ready for Tomorrow.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                        <div className="pl-4 border-l-4 border-orange-500">
                            <h3 className="font-semibold text-gray-900 mb-2">Local Manufacturing</h3>
                            <p className="text-gray-600">Aligned with Make-in-India to boost domestic industrial capability.</p>
                        </div>
                        <div className="pl-4 border-l-4 border-white md:border-green-500">
                            <h3 className="font-semibold text-gray-900 mb-2">Sustainable Future</h3>
                            <p className="text-gray-600">Supporting industrial automation and the global energy transition.</p>
                        </div>
                        <div className="pl-4 border-l-4 border-blue-500">
                            <h3 className="font-semibold text-gray-900 mb-2">Export Quality</h3>
                            <p className="text-gray-600">Designed for scale, exports, and long-term industrial growth.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
