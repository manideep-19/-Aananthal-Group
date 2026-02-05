import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Aananthal Group</h2>
                        <p className="text-gray-400 max-w-sm">
                            Building a premium Indian VFD brand with global ambition.
                            High-efficiency variable frequency drives engineered for modern industries.
                        </p>
                        <div className="pt-4">
                            <p className="font-semibold text-white">"Control Energy. Control Costs."</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Products", "Industries", "Technology", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-lg">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <span className="block text-white mb-1">Sales & Enquiries</span>
                                sales@aananthal.com
                            </li>
                            <li>
                                <span className="block text-white mb-1">Headquarters</span>
                                Rajanna Building,
Horamavu Agara, Horamavu, Bengaluru, Karnataka 560043,<br />
                            </li>
                            <li>+91 77955 59724</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Aananthal Group of Industries Pvt. Ltd.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
