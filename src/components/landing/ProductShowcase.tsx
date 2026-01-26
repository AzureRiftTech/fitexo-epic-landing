"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Layout, Shield, CreditCard, Users, BarChart } from 'lucide-react';

const dashboards = [
    {
        title: 'Central Command',
        description: 'A birds-eye view of your entire fitness empire.',
        image: '/images/web_dashboard.webp',
        icon: Layout,
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'Financial Intelligence',
        description: 'Real-time revenue tracking and financial forecasting.',
        image: '/images/payment_dashboard.webp',
        icon: CreditCard,
        color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        title: 'Expiry & Renewals',
        description: 'Never miss a renewal with automated membership expiry tracking.',
        image: '/images/expirey_tracker.webp',
        icon: BarChart,
        color: 'from-red-500/20 to-orange-500/20'
    },
    {
        title: 'Membership Plans',
        description: 'Dynamic package management for different tiers and services.',
        image: '/images/package_dashboard.webp',
        icon: Layout,
        color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
        title: 'Staff Management',
        description: 'Optimize your team with advanced attendance and performance tracking.',
        image: '/images/staff_dashbaord.webp',
        icon: Shield,
        color: 'from-orange-500/20 to-red-500/20'
    },
    {
        title: 'Tablet Intelligence',
        description: 'Seamless check-in and management optimized for large displays.',
        image: '/images/tab_dashboard.webp',
        icon: Layout,
        color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        title: 'Gym Branding',
        description: 'Custom setups and branding settings for your unique gym identity.',
        image: '/images/gym_branding.webp',
        icon: Layout,
        color: 'from-indigo-500/20 to-purple-500/20'
    }
];

export function ProductShowcase() {
    return (
        <section id="product" className="py-40 relative overflow-hidden bg-black/40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,17,1)_0%,rgba(0,0,0,1)_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-full"
                    >
                        <span>Product Interface</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white">
                        THE MOST <span className="text-primary italic">POWERFUL</span> <br />
                        DASHBOARD EVER BUILT
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Every feature is designed for maximum efficiency, giving you total control over your business.
                    </p>
                </div>

                <div className="space-y-40">
                    {dashboards.map((dashboard, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Text Side */}
                            <div className="flex-1 space-y-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dashboard.color} border border-white/10 flex items-center justify-center`}>
                                    <dashboard.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-normal text-white uppercase tracking-tight">
                                    {dashboard.title}
                                </h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {dashboard.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['Automated', 'Real-time', 'Secure', 'Cloud-sync'].map(tag => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-[1.5] relative">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${dashboard.color} blur-[100px] opacity-30`} />
                                <motion.div
                                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-secondary/20"
                                >
                                    <Image
                                        src={dashboard.image}
                                        alt={`${dashboard.title} Preview`}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                    {/* Subtle Glare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
