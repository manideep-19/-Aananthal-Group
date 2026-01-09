import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 bg-blue-600 text-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            Ready to Reduce Energy Costs?
                        </h2>
                        <p className="text-blue-100 text-lg">
                            Speak with our experts to find the right VFD for your application.
                            Start saving today.
                        </p>
                    </div>
                    <div>
                        <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-blue-600 hover:bg-blue-50">
                            <Link href="/contact">
                                Get in Touch
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
