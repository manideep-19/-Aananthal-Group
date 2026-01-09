import { Container } from "@/components/ui/Container";
import { Gauge, Zap, Activity } from "lucide-react";

const features = [
    {
        icon: Gauge,
        title: "Precise Control",
        description: "Controls motor speed & torque with high precision.",
    },
    {
        icon: Zap,
        title: "Energy Savings",
        description: "Reduces energy consumption by up to 60%.",
    },
    {
        icon: Activity,
        title: "Extended Life",
        description: "Smooth start & stop means longer motor life.",
    },
];

export function WhatIsVFD() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        What is a Variable Frequency Drive?
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:shadow-lg hover:border-blue-100"
                        >
                            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-500 italic max-w-3xl mx-auto">
                        "Motors consume nearly 45% of global electricity. VFDs redefine efficiency."
                    </blockquote>
                </div>
            </Container>
        </section>
    );
}
