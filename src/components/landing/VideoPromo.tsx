"use client";

import { motion } from 'framer-motion';
import { Play, Shield, TrendingUp, Users } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function VideoPromo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Lazy load video only when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVideoVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => observer.disconnect();
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
        // Start playing after state update
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 100);
    };

    return (
        <section ref={sectionRef} className="py-40 relative overflow-hidden bg-black">
            {/* Cinematic Background - Lazy loaded */}
            <div className="absolute inset-0 opacity-40">
                {isVideoVisible && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover grayscale"
                        poster="/images/Stock/Gym_interior_1_tools.webp"
                    >
                        <source src="/images/video_promo.mp4" type="video/mp4" />
                    </video>
                )}
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
                            {/* Poster image shown before video loads */}
                            {!isPlaying && (
                                <Image
                                    src="/images/Stock/Gym_interior_1_tools.webp"
                                    alt="Fitexo gym management software demo video preview"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover"
                                    priority={false}
                                    quality={75}
                                />
                            )}
                            
                            {/* Video only loads when play is clicked */}
                            {isPlaying && (
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                >
                                    <source src="/images/video_promo.mp4" type="video/mp4" />
                                    <track kind="captions" src="/captions/video_promo.vtt" srcLang="en" label="English" default />
                                    Your browser does not support the video tag.
                                </video>
                            )}

                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handlePlay}
                                        className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl relative"
                                        aria-label="Play Fitexo demo video"
                                    >
                                        <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping" />
                                        <Play className="w-10 h-10 fill-current" aria-hidden="true" />
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
