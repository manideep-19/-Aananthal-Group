import { Container } from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-transparent pb-24">
            <section className="py-24 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-2xl">
                                Privacy Policy
                            </h1>
                            <div className="mt-8 h-1 w-24 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        </div>

                        <div className="prose prose-invert max-w-none text-slate-400">
                            <p className="lead text-xl">
                                At Aananthal Group, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
                            </p>

                            <h3 className="text-white text-2xl mt-8 mb-4">Information We Collect</h3>
                            <p>
                                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                            </p>

                            <h3 className="text-white text-2xl mt-8 mb-4">How We Use Your Information</h3>
                            <p>
                                We use the collected information to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Communicate with you</li>
                                <li>Screen our orders for potential risk or fraud</li>
                                <li>Provide you with information or advertising relating to our products or services</li>
                            </ul>

                            <h3 className="text-white text-2xl mt-8 mb-4">Contact Us</h3>
                            <p>
                                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at aananthaltechnologies@gmail.com.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
