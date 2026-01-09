import { Container } from "@/components/ui/Container";
import { Cpu, Settings, ShieldCheck, Factory } from "lucide-react";

export default function TechnologyPage() {
    return (
        <div className="bg-white">
            <section className="bg-slate-50 py-20 lg:py-32 border-b border-gray-200">
                <Container>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                            Engineering Depth. <br />
                            <span className="text-blue-600">Execution Discipline.</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Manufacturing is not an afterthought at Aananthal. It is our core strategy.
                            We combine precision engineering with automated production to deliver global-standard VFDs.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                icon: Cpu,
                                title: "Automated SMT",
                                desc: "High-precision Surface Mount Technology lines ensure component placement accuracy and soldering reliability."
                            },
                            {
                                icon: Factory,
                                title: "Controlled Assembly",
                                desc: "Dust-free assembly environment with strict ESD controls to prevent latent electronic failures."
                            },
                            {
                                icon: Settings,
                                title: "Reliability Design",
                                desc: "Components derated for safety. Thermal management engineered for Indian ambient temperatures up to 50°C."
                            },
                            {
                                icon: ShieldCheck,
                                title: "100% Testing",
                                desc: "Every drive undergoes burn-in testing and full-load functional verification before packaging."
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                <div className="h-1 w-12 bg-gray-200 rounded-full" />
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-24 bg-slate-900 text-white text-center">
                <Container>
                    <h2 className="text-3xl font-bold mb-8">Ready for Scale</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        Our manufacturing roadmap includes capacity expansion to support export markets and growing domestic demand. We are building for the long term.
                    </p>
                </Container>
            </section>
        </div>
    );
}
