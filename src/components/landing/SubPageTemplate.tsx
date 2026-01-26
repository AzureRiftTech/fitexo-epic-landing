"use client";

import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface SubPageTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export function SubPageTemplate({ title, subtitle, children }: SubPageTemplateProps) {
    return (
        <main className="min-h-screen bg-background overflow-x-hidden relative">
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none noise-overlay" />
            <div className="fixed inset-0 z-0 pointer-events-none industrial-grid opacity-[0.03]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none" />

            <Navbar />

            <section className="relative z-10 pt-48 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-6xl md:text-8xl font-normal text-white mb-6 uppercase tracking-tight leading-none">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                        <div className="w-24 h-1 bg-primary mx-auto mt-12 rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-invert max-w-none"
                    >
                        {children}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
