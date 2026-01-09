import { Container } from "@/components/ui/Container";
import { ShieldCheck, Cpu, Globe2, Award } from "lucide-react";

const features = [
    {
        icon: Globe2,
        title: "Designed in India",
        description: "Engineered specifically for Indian power conditions and global standards.",
    },
    {
        icon: Cpu,
        title: "Automated Manufacturing",
        description: "State-of-the-art SMT lines, automated assembly, and rigorous testing.",
    },
    {
        icon: ShieldCheck,
        title: "Reliability First",
        description: "Focus on operational reliability, efficiency, and long-term scalability.",
    },
    {
        icon: Award,
        title: "Global Ambition",
        description: "Building a world-class manufacturing brand from India.",
    },
];

export function TrustBuilder() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Why Choose Aananthal VFDs?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Building a premium Indian VFD brand with global ambition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
