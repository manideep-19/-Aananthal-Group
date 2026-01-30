import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-600">
                            Speak with our experts to find the right VFD for your application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Phone</p>
                                            <p className="text-gray-600">+91 98765 43210</p>
                                            <p className="text-sm text-gray-500">Mon-Sat 9am to 6pm</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Email</p>
                                            <p className="text-gray-600">sales@aananthal.com</p>
                                            <p className="text-gray-600">support@aananthal.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Headquarters</p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Aananthal Group of Industries Pvt. Ltd.<br />
                                                Plot No. 123, Industrial Area,<br />
                                                Bangalore, Karnataka - 560001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-8 rounded-2xl text-white">
                                <blockquote className="text-lg font-medium italic">
                                    "We provide technical guidance, not pressure sales."
                                </blockquote>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text" id="name" required
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                                        <input
                                            type="text" id="company" required
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Industrial Corp"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email" id="email" required
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="tel" id="phone" required
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="+91"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="requirement" className="text-sm font-medium text-gray-700">Application / Requirement</label>
                                    <textarea
                                        id="requirement" rows={4} required
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Please describe your motor control requirements or specific application..."
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full text-lg h-12">
                                    Send Enquiry
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    We respect your privacy. Your information is safe with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
