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
                            {["Products", "Industries", "Technology", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                                    >
                                        {item}
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
                                aananthaltechnologies@gmail.com
                            </li>
                            <li>
                                <span className="block text-white mb-1 font-medium">Headquarters</span>
                                Plot No. 123, Industrial Area,<br />
                                Bangalore, Karnataka - 560001
                            </li>
                            <li className="text-white font-medium">+91 73869 90245</li>
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
