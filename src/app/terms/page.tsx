import { Container } from "@/components/ui/Container";

export default function TermsPage() {
    return (
        <div className="bg-transparent pb-24">
            <section className="py-24 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-2xl">
                                Terms of Service
                            </h1>
                            <div className="mt-8 h-1 w-24 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        </div>

                        <div className="prose prose-invert max-w-none text-slate-400">
                            <p className="lead text-xl">
                                This website is operated by Aananthal Group of Industries Pvt. Ltd. Throughout the site, the terms "we", "us" and "our" refer to Aananthal Group.
                            </p>

                            <h3 className="text-white text-2xl mt-8 mb-4">General Conditions</h3>
                            <p>
                                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.
                                We reserve the right to refuse service to anyone for any reason at any time.
                            </p>

                            <h3 className="text-white text-2xl mt-8 mb-4">Accuracy of Information</h3>
                            <p>
                                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions.
                            </p>

                            <h3 className="text-white text-2xl mt-8 mb-4">Changes to Terms</h3>
                            <p>
                                You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
