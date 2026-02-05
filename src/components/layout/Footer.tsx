import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 text-white py-16 backdrop-blur-3xl relative z-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <h2 className="text-2xl font-bold tracking-tight text-white">Aananthal Group</h2>
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Building a premium Indian VFD brand with global ambition.
                            High-efficiency variable frequency drives engineered for modern industries.
                        </p>
                        <div className="pt-4">
                            <p className="font-semibold text-white drop-shadow-sm">"Control Energy. Control Costs."</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Products", href: "/products" },
                                { label: "Industries", href: "/industries" },
                                { label: "Technology", href: "/technology" },
                                { label: "About Us", href: "/about" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg text-white">Contact</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li>
                                <span className="block text-white mb-1 font-medium">Sales & Enquiries</span>
                                <a href="mailto:aananthaltechnologies@gmail.com" className="hover:text-white transition-colors">
                                    aananthaltechnologies@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="block text-white mb-1 font-medium">Headquarters</span>
                                Rajanna Building,
                                Horamavu Agara, Horamavu, Bengaluru, Karnataka 560043,<br />
                            </li>
                            <li>
                                <a href="tel:+917386990245" className="text-white font-medium hover:text-slate-200 transition-colors">
                                    +91 73869 90245
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Aananthal Group of Industries Pvt. Ltd.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
