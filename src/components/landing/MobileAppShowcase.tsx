"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Zap, Bell, Settings, CreditCard, Download } from 'lucide-react';

const mobileScreens = [
    {
        title: 'Dashboard',
        image: '/images/mobile_app dashboard.webp',
        icon: Zap
    },
    {
        title: 'Manage Members',
        image: '/images/mobile_app manage_members.webp',
        icon: Smartphone
    },
    {
        title: 'Alerts',
        image: '/images/mobile_app alerts.webp',
        icon: Bell
    },
    {
        title: 'Membership Plans',
        image: '/images/mobile_app memebership+plans.webp',
        icon: CreditCard
    },
    {
        title: 'Settings',
        image: '/images/mobile_app Settings.webp',
        icon: Settings
    }
];

export function MobileAppShowcase() {
    return (
        <section id="app" className="py-40 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-full"
                        >
                            <Smartphone className="w-4 h-4" />
                            <span>Mobile First</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white">
                            YOUR GYM <br />
                            <span className="text-primary italic">IN YOUR POCKET</span>
                        </h2>
                        <p className="text-xl text-muted-foreground/80 mb-12 font-medium leading-relaxed max-w-xl">
                            Take your business anywhere. Our native mobile apps give you and your staff the power to manage operations from the gym floor or the coffee shop.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-16">
                            {mobileScreens.map((screen, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                        <screen.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">{screen.title}</h4>
                                </div>
                            ))}
                        </div>

                        {/* Download Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href="/images/fitexo.apk"
                                download="fitexo.apk"
                                className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Download className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] opacity-70 leading-none mb-1">Download for</div>
                                    <div className="text-xl">Android App</div>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Visual Showcase */}
                    <div className="flex-1 relative w-full max-w-[600px] h-[700px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Floating Phones Simulation */}
                            {mobileScreens.slice(0, 3).map((screen, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 100, rotateZ: (idx - 1) * 15 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: (idx - 1) * 30,
                                        x: (idx - 1) * 120,
                                        rotateZ: (idx - 1) * 15,
                                        scale: idx === 1 ? 1 : 0.85,
                                        zIndex: idx === 1 ? 10 : 5
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                    className="absolute"
                                >
                                    <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-zinc-900 bg-zinc-950 overflow-hidden shadow-2xl">
                                        {/* Notch Simulation */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-900 rounded-b-2xl z-20" />

                                        <Image
                                            src={screen.image}
                                            alt={screen.title}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
