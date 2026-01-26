"use client";

import { motion } from 'framer-motion';
import { Play, Shield, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

export function VideoPromo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-40 relative overflow-hidden bg-black">
            {/* Cinematic Background */}
            <div className="absolute inset-0 opacity-40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale"
                >
                    <source src="/images/video_promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] rounded-full">
                            <span>Experience Fitexo</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1.1] tracking-tight uppercase">
                            WITNESS THE <br />
                            <span className="text-primary italic">FUTURE OF FITNESS</span>
                        </h2>

                        <p className="text-xl text-muted-foreground/90 font-medium leading-relaxed max-w-xl">
                            See how Fitexo scales your gym operations through unmatched automation and intuitive design.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Shield, text: 'Enterprise Grade Security' },
                                { icon: TrendingUp, text: 'Data Driven Growth Engines' },
                                { icon: Users, text: 'Member Centric Experience' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-white font-bold uppercase tracking-wider text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group aspect-video"
                    >
                        <div className="absolute -inset-4 bg-primary/20 blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 shadow-3xl bg-secondary/20">
                            <video
                                poster="/images/Stock/Gym_interior_1_tools.webp"
                                className="w-full h-full object-cover"
                                controls={isPlaying}
                            >
                                <source src="/images/video_promo.mp4" type="video/mp4" />
                            </video>

                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsPlaying(true)}
                                        className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl relative"
                                    >
                                        <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping" />
                                        <Play className="w-10 h-10 fill-current" />
                                    </motion.button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
