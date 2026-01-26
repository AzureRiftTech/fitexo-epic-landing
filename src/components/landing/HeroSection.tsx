"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { HeroScene } from './HeroScene';
import { useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Volume2, VolumeX } from 'lucide-react';
import { useEffect } from 'react';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const savedMute = localStorage.getItem('fitexo_video_muted');
    if (savedMute !== null) {
      setIsMuted(savedMute === 'true');
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newMute = !isMuted;
    setIsMuted(newMute);
    localStorage.setItem('fitexo_video_muted', String(newMute));
    if (videoRef.current) {
      videoRef.current.muted = newMute;
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient Overlays - Refined */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-10" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 z-5 opacity-10 industrial-grid" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto px-4 pt-32 pb-20 text-center"
      >
        {/* Simple Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full">
            <Zap className="w-4 h-4 fill-current" />
            Leading Gym Management Platform
          </span>
        </motion.div>

        {/* Main Heading - Clean & Powerful */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] font-normal mb-8 leading-[1] tracking-tight text-white uppercase"
        >
          GROW YOUR <br />
          <span className="text-primary">GYM BUSINESS</span>
        </motion.h1>

        {/* Subtitle - Simple English */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed font-medium tracking-tight"
        >
          Manage memberships, track payments, and automate your operations with
          the world's most powerful fitness management software.
        </motion.p>

        {/* CTA Buttons - Clean but Strong */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://wa.me/916294737722?text=Hello%20Fitexo%2C%20I'm%20interested%20in%20listing%20my%20gym.">
              <Button
                size="lg"
                className="group relative bg-primary hover:bg-primary/90 text-white px-12 py-8 text-xl rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]"
              >
                <span className="relative flex items-center gap-3">
                  <WhatsAppIcon className="w-6 h-6" />
                  LIST YOUR GYM
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-white/20 bg-white/5 backdrop-blur-sm px-10 py-8 text-xl rounded-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Play className="mr-3 w-6 h-6 fill-current" />
                  WATCH DEMO
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-black/95 border-white/10 backdrop-blur-2xl overflow-hidden rounded-[2rem] shadow-[0_0_100px_rgba(220,38,38,0.2)]">
                <div className="sr-only">
                  <DialogTitle>Fitexo Video Demo</DialogTitle>
                  <DialogDescription>
                    Watch our product demo to see how Fitexo can transform your gym management.
                  </DialogDescription>
                </div>
                <div className="aspect-video relative">
                  {isVideoOpen && (
                    <video
                      autoPlay
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                      preload="auto"
                    >
                      <source src="/images/video_promo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>

        {/* Glassmorphic Video Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative max-w-5xl mx-auto mb-20 group"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />

          <div className="relative p-2 md:p-6 rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden group-hover:border-primary/20 transition-colors duration-500">
            <div className="relative rounded-[1.8rem] overflow-hidden bg-secondary/20 aspect-video ring-1 ring-white/10 shadow-inner group/video">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
                poster="/images/Stock/Gym_interior_1_tools.webp"
              >
                <source src="/images/video_promo.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={toggleMute}
                className="absolute bottom-6 left-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-primary transition-all z-30 flex items-center gap-2 group/btn"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                <span className="text-[10px] font-bold uppercase tracking-widest max-w-0 overflow-hidden group-hover/btn:max-w-[100px] transition-all">
                  {isMuted ? 'Unmute' : 'Mute'}
                </span>
              </button>

              <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">{isMuted ? 'Muted' : 'Audio Live'}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats - Clean Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '10K+', label: 'ACTIVE GYMS', highlight: true },
            { value: '2M+', label: 'MEMBERS MANAGED', highlight: false },
            { value: '99.9%', label: 'SERVER UPTIME', highlight: false },
            { value: '4.9★', label: 'USER RATING', highlight: true },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="p-6 text-center bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <div className={`text-3xl md:text-4xl font-normal mb-1 tracking-tight ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                {stat.value}
              </div>
              <div className="text-[8px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center"
        >
          <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-[10px] font-black mb-2 uppercase tracking-[0.3em]">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
