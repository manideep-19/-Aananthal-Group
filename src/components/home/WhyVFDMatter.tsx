import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Significant reduction in monthly energy bills",
    "Reduced mechanical stress on systems",
    "Precise process control and automation",
    "Compliance with energy efficiency standards",
];

export function WhyVFDMatter() {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Why Industries Are Switching to VFDs
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            In an era of rising energy costs and sustainability mandates, efficiency is no longer optional. It is a competitive advantage.
                        </p>
                        <div className="h-1 w-20 bg-blue-500 rounded-full mb-8" />
                    </div>

                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
                                <span className="text-lg font-medium text-gray-200">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
