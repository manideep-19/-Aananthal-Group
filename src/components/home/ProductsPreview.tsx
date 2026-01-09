import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

export function ProductsPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Our VFD Solutions
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">Power Range</div>
                                <div className="text-3xl font-bold text-gray-900">0.5 kW – 250 kW</div>
                                <p className="text-gray-500 mt-2">Scalable solutions for small to heavy-duty applications.</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-900">Ideal for:</h3>
                            <ul className="grid grid-cols-2 gap-2 text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Pumps & Water</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> HVAC Systems</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Conveyors</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Elevators</li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <Button asChild size="lg">
                                <Link href="/products">
                                    View Product Range <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center">
                        <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white" />

                            {/* CSS/SVG generic VFD representation */}
                            <div className="relative z-10 w-2/3 h-3/4 bg-slate-800 rounded-lg shadow-2xl flex flex-col p-4 border-t-4 border-blue-500">
                                <div className="h-24 bg-slate-900 rounded border border-slate-700 mb-6 flex items-center justify-center relative overflow-hidden">
                                    <span className="font-mono text-green-400 text-xl font-bold z-10">50.00 Hz</span>
                                    <div className="absolute inset-0 bg-green-500/5 animate-pulse" />
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-8">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                        <div key={i} className="h-8 bg-slate-700 rounded flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-slate-500" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto h-32 bg-slate-900 rounded relative overflow-hidden flex items-center justify-center">
                                    <div className="text-slate-600 text-6xl opacity-20"><Box /></div>
                                    <div className="absolute bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
