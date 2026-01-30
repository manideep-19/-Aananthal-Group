"use client";

import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfoSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <Container>
                <div className="text-center md:mb-16 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Reaching Us</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We are always open to discuss your industrial automation needs. Visit our headquarters or reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Headquarters Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                            <MapPin className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Visit Us</p>
                        <address className="not-italic text-slate-600 leading-relaxed space-y-1">
                            <p className="font-semibold text-slate-900">Aananthal Group of Industries Pvt. Ltd.</p>
                            <p>Plot No. 123, Industrial Area</p>
                            <p>Bangalore, Karnataka - 560001</p>
                            <p>India</p>
                        </address>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Phone className="h-24 w-24 text-blue-600" />
                        </div>
                        <div className="h-14 w-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                            <Phone className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Contact</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Talk to Experts</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-400 font-semibold uppercase mb-1">Phone</p>
                                <a href="tel:+917795559724" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors block">
                                    +91 77955 59724
                                </a>
                                <a href="tel:+919876543210" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors block">
                                    +91 98765 43210
                                </a>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-semibold uppercase mb-1">Hours</p>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Clock className="h-4 w-4" />
                                    <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-14 w-14 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                            <Mail className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-4">Sales & Support</p>

                        <div className="space-y-4">
                            <div className="group">
                                <p className="text-xs text-slate-400 font-semibold uppercase mb-1">Sales Enquiry</p>
                                <a href="mailto:sales@aananthal.com" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2">
                                    sales@aananthal.com
                                </a>
                            </div>
                            <div className="group">
                                <p className="text-xs text-slate-400 font-semibold uppercase mb-1">Technical Support</p>
                                <a href="mailto:support@aananthal.com" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2">
                                    support@aananthal.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
