"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Technology", href: "/technology" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
                scrolled || isOpen
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100"
                    : "bg-transparent" // Transparent at top
            )}
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-8 w-8 bg-blue-600 rounded-br-xl rounded-tl-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className={cn(
                            "text-2xl font-bold tracking-tight transition-colors",
                            scrolled || isOpen ? "text-slate-900" : "text-slate-900" // Always dark for readability on light bg, might need adjustment if hero is dark
                        )}>
                            Aananthal
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative hover:text-blue-600",
                                    scrolled ? "text-gray-600" : "text-gray-700"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl"
                    >
                        <Container className="py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center rounded-lg bg-blue-600 px-5 py-3 text-base font-bold text-white transition-transform active:scale-95"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
