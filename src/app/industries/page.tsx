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
        <div className="bg-transparent py-32">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Industries We Serve</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Our VFDs are engineered to withstand the rigorous demands of diverse industrial environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, i) => (
                        <div key={i} className="group p-8 rounded-2xl glass-card border border-white/10 hover:bg-white/5 transition-all duration-300">
                            <div className="h-14 w-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                <ind.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{ind.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {ind.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
