"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Zap, Bell, Settings, CreditCard, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}

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
    const isMobile = useIsMobile();

    return (
        <section id="app" className="py-20 md:py-40 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/10 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 rounded-full"
                        >
                            <Smartphone className="w-4 h-4" />
                            <span>Mobile First</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-normal mb-6 md:mb-8 leading-[1.1] tracking-tight uppercase text-white">
                            YOUR GYM <br />
                            <span className="text-primary italics">IN YOUR POCKET</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground/80 mb-6 md:mb-12 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Take your business anywhere. Our native mobile apps give you and your staff the power to manage operations from the gym floor or the coffee shop.
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
                            {mobileScreens.map((screen, idx) => (
                                <div key={idx} className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                        <screen.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    </div>
                                    <h3 className="text-white font-bold uppercase tracking-wider text-[10px] md:text-sm">{screen.title}</h3>
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
                                className="inline-flex items-center gap-3 md:gap-4 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] group"
                            >
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Download className="w-4 h-4 md:w-6 md:h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] opacity-70 leading-none mb-1">Download for</div>
                                    <div className="text-lg md:text-xl">Android App</div>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Visual Showcase */}
                    <div className="flex-1 relative w-full h-[350px] md:h-[700px] order-2 mt-20 lg:mt-0">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Floating Phones Simulation */}
                            {mobileScreens.slice(0, 3).map((screen, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: isMobile ? (idx - 1) * 15 : (idx - 1) * 30,
                                        x: isMobile ? (idx - 1) * 45 : (idx - 1) * 120,
                                        rotateZ: (idx - 1) * 15,
                                        scale: isMobile
                                            ? (idx === 1 ? 0.5 : 0.4)
                                            : (idx === 1 ? 1 : 0.85),
                                        zIndex: idx === 1 ? 10 : 5
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                    className="absolute"
                                >
                                    <div className="relative w-[220px] md:w-[280px] h-[450px] md:h-[580px] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-zinc-900 bg-zinc-950 overflow-hidden shadow-2xl">
                                        {/* Notch Simulation */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-4 md:h-7 bg-zinc-900 rounded-b-xl md:rounded-b-2xl z-20" />

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
