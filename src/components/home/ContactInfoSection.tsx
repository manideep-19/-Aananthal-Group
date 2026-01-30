"use client";

import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfoSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorative Pattern - Subtle grid for tech feel */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <Container>
                <div className="text-center md:mb-16 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reaching Us</h2>
                    <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We are always open to discuss your industrial automation needs. Visit our headquarters or reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Headquarters Card */}
                    <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 hover:bg-white/5">
                        <div className="h-14 w-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 ring-1 ring-blue-500/20">
                            <MapPin className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Visit Us</p>
                        <address className="not-italic text-slate-400 leading-relaxed space-y-1">
                            <p className="font-semibold text-slate-200">Aananthal Group of Industries Pvt. Ltd.</p>
                            <p>Plot No. 123, Industrial Area</p>
                            <p>Bangalore, Karnataka - 560001</p>
                            <p>India</p>
                        </address>
                    </div>

                    {/* Contact Card */}
                    <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden hover:bg-white/5">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Phone className="h-24 w-24 text-blue-500" />
                        </div>
                        <div className="h-14 w-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 ring-1 ring-emerald-500/20">
                            <Phone className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Talk to Experts</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Phone</p>
                                <a href="tel:7386990245" className="text-lg font-medium text-white hover:text-blue-400 transition-colors block">
                                    +91 73869 90245
                                </a>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase mb-1">Hours</p>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Clock className="h-4 w-4" />
                                    <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 hover:bg-white/5">
                        <div className="h-14 w-14 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 ring-1 ring-violet-500/20">
                            <Mail className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Sales & Support</p>

                        <div className="space-y-4">
                            <div className="group">
                                <p className="text-xs text-slate-500 font-semibold uppercase mb-1">General Enquiry</p>
                                <a href="mailto:aananthaltechnologies@gmail.com" className="text-lg font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                                    aananthaltechnologies@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
