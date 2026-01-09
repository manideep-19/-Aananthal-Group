import { Container } from "@/components/ui/Container";
import { Factory, Droplets, Wind, Move, ArrowUpFromDot } from "lucide-react";

const industries = [
    {
        title: "Pumps & Water Management",
        desc: "Optimizing flow, preventing dry runs, and reducing energy in water treatment and distribution.",
        icon: Droplets
    },
    {
        title: "HVAC & Building Automation",
        desc: "Efficiency for fans, chillers, and compressor systems in commercial buildings.",
        icon: Wind
    },
    {
        title: "Material Handling",
        desc: "Precise control for conveyors, cranes, and automated storage systems.",
        icon: Move
    },
    {
        title: "Elevators & Escalators",
        desc: "Smooth ride comfort, precise leveling, and regenerative braking support.",
        icon: ArrowUpFromDot
    },
    {
        title: "General Automation",
        desc: "Versatile speed control for mixers, agitators, and dedicated machinery.",
        icon: Factory
    }
];

export default function IndustriesPage() {
    return (
        <div className="bg-white py-24">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Industries We Serve</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our VFDs are engineered to withstand the rigorous demands of diverse industrial environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600">
                                <ind.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {ind.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
