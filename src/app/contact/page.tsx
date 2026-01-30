"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: ""
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    requirement: ""
                });
                alert("Thank you! Your enquiry has been sent successfully.");
            } else {
                setStatus('error');
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert("Failed to send enquiry.");
        } finally {
            setStatus('idle');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="min-h-screen pt-32 pb-24 bg-transparent">
            <Container>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Get in Touch</h1>
                        <p className="text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Speak with our experts to find the right VFD for your application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="glass-card p-8 lg:p-10 border-white/10 bg-white/5 backdrop-blur-md">
                                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 ring-1 ring-blue-500/20">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">Phone</p>
                                            <p className="text-slate-400 font-medium mt-1">7386990245</p>
                                            <p className="text-sm text-slate-500 mt-1">Mon-Sat 9am to 6pm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 ring-1 ring-blue-500/20">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">Email</p>
                                            <p className="text-slate-400 font-medium mt-1">aananthaltechnologies@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 ring-1 ring-blue-500/20">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">Headquarters</p>
                                            <p className="text-slate-400 leading-relaxed font-medium mt-1">
                                                Aananthal Group of Industries Pvt. Ltd.<br />
                                                Plot No. 123, Industrial Area,<br />
                                                Bangalore, Karnataka - 560001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-8 bg-blue-900/20 text-white backdrop-blur-xl border-blue-500/20">
                                <blockquote className="text-xl font-medium italic leading-relaxed text-blue-200">
                                    "We provide technical guidance, not just sales. Let's engineer a solution together."
                                </blockquote>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-7">
                            <div className="glass-card p-8 md:p-10 border-white/10 bg-white/5 backdrop-blur-md">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Full Name</label>
                                            <input
                                                type="text" id="name" required
                                                className="w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-600"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Company Name</label>
                                            <input
                                                type="text" id="company" required
                                                className="w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-600"
                                                placeholder="Industrial Corp"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email Address</label>
                                            <input
                                                type="email" id="email" required
                                                className="w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-600"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Phone Number</label>
                                            <input
                                                type="tel" id="phone" required
                                                className="w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-600"
                                                placeholder="+91"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="requirement" className="text-sm font-bold text-slate-400 uppercase tracking-wide">Application / Requirement</label>
                                        <textarea
                                            id="requirement" rows={4} required
                                            className="w-full rounded-xl border-white/10 bg-white/5 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-600"
                                            placeholder="Please describe your motor control requirements..."
                                            value={formData.requirement}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full text-lg h-14 rounded-full bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white border-0"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                                    </Button>
                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        We respect your privacy. All information is encrypted.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
