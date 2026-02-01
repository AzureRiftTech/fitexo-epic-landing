"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Dialog to reduce initial bundle
const Dialog = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.Dialog })), { ssr: false });
const DialogContent = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogContent })), { ssr: false });
const DialogTrigger = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogTrigger })), { ssr: false });
const DialogTitle = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogTitle })), { ssr: false });
const DialogDescription = dynamic(() => import('@/components/ui/dialog').then(mod => ({ default: mod.DialogDescription })), { ssr: false });

// Futuristic Cyberpunk Background - Optimized for performance
function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Simplified gradient - reduced layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full">
          <div className="absolute inset-0 bg-gradient-conic from-transparent via-primary/20 to-transparent opacity-50 will-change-transform" style={{ transform: 'rotate(-15deg)', transformOrigin: '50% 150%' }} />
        </div>
      </div>
      
      {/* Optimized glow orbs - reduced from 3 to 2 */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[200px] animate-pulse-slow will-change-transform" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ff1a1a]/10 rounded-full blur-[150px] animate-pulse-slower will-change-transform" />
      
      {/* Cyberpunk grid */}
      <div className="absolute inset-0 cyber-grid opacity-15" />
      
      {/* Reduced particles from 6 to 3 for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-primary/80 rounded-full animate-float-particle will-change-transform" />
        <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-primary/70 rounded-full animate-float-particle-delayed will-change-transform" />
        <div className="absolute bottom-[20%] left-[60%] w-1.5 h-1.5 bg-primary/50 rounded-full animate-float-particle will-change-transform" />
      </div>
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}

// Futuristic 3D Control Core / Orb Visualization - Optimized
function FuturisticOrb() {
  return (
    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] animate-pulse-slow will-change-transform" />
      
      {/* Main orb container */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 shadow-[0_0_80px_rgba(220,38,38,0.25),inset_0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Inner glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
        
        {/* Simplified holographic rings - reduced from 4 to 2 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[85%] h-[85%] rounded-full border border-primary/20 animate-spin-slow will-change-transform" style={{ animationDuration: '25s' }} />
          <div className="absolute w-[55%] h-[55%] rounded-full border border-white/10 animate-spin-reverse-slow will-change-transform" style={{ animationDuration: '15s' }} />
        </div>
        
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            {/* Core glow */}
            <div className="absolute inset-0 bg-primary/60 rounded-full blur-xl animate-pulse will-change-transform" />
            {/* Core sphere */}
            <div className="absolute inset-1 bg-gradient-to-br from-primary via-red-600 to-red-800 rounded-full shadow-[inset_0_-10px_30px_rgba(0,0,0,0.5)]">
              {/* Highlight */}
              <div className="absolute top-2 left-2 w-6 h-6 bg-white/30 rounded-full blur-sm" />
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping will-change-transform" style={{ animationDuration: '2s' }} />
          </div>
        </div>
        
        {/* Reduced floating data points from 4 to 2 */}
        <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-float-particle will-change-transform" />
        <div className="absolute bottom-[25%] right-[25%] w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)] animate-float-particle-delayed will-change-transform" />
      </div>
      
      {/* HUD elements - Simplified */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-28 border-l-2 border-t border-b border-primary/40 rounded-l-lg bg-black/20 backdrop-blur-sm">
        <div className="absolute top-3 left-3 text-[8px] text-primary/80 font-mono uppercase tracking-wider">Sync</div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse will-change-transform" />
          <span className="text-[8px] text-green-500 font-mono">LIVE</span>
        </div>
      </div>
      
      {/* HUD elements - Right */}
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-16 h-28 border-r-2 border-t border-b border-primary/40 rounded-r-lg bg-black/20 backdrop-blur-sm">
        <div className="absolute top-3 right-3 text-[8px] text-primary/80 font-mono uppercase tracking-wider">Core</div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1">
          <span className="text-[8px] text-primary font-mono">●</span>
          <span className="text-[8px] text-primary/80 font-mono">OK</span>
        </div>
      </div>
    </div>
  );
}

// Stats HUD Panel
function StatsHUD() {
  const stats = [
    { label: 'Active Gyms', value: '10,847', trend: '+12%', trendUp: true },
    { label: 'Members', value: '2.4M', trend: '+8%', trendUp: true },
    { label: 'Uptime', value: '99.99%', trend: 'stable', trendUp: true },
    { label: 'Rating', value: '4.9★', trend: '+0.2', trendUp: true },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1 }}
          className="relative group"
        >
          {/* Glass card with neon border */}
          <div className="relative p-5 md:p-6 glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]">
            {/* Neon corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-lg" />
            
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${stat.trendUp ? 'text-green-400 bg-green-500/10' : 'text-primary bg-primary/10'}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Background */}
      <CyberBackground />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto px-4 pt-28 md:pt-32 pb-16 md:pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Cyber Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 md:mb-8 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-3 px-4 md:px-5 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">Next-Gen Platform</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.05] tracking-tight"
            >
              <span className="text-white block">Powering the</span>
              <span className="text-white block">Future of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary inline-block mt-2">
                Gym Management
              </span>
            </motion.h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              Automate memberships, track performance, manage trainers & grow your 
              fitness empire with AI-powered intelligence.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA - Glowing Red */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="https://wa.me/916294737722?text=Hello%20Fitexo%2C%20I'm%20interested%20in%20a%20free%20trial.">
                  <Button
                    size="lg"
                    className="group relative w-full sm:w-auto bg-red-700 hover:bg-red-700 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-xl font-bold uppercase tracking-wider overflow-hidden shadow-[0_0_40px_rgba(185,28,28,0.45)] hover:shadow-[0_0_60px_rgba(185,28,28,0.6)] transition-all duration-300 border border-red-800"
                  >
                    <span className="relative flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
              </motion.div>

              {/* Secondary CTA - Metallic Outline */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-xl px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-xl font-bold uppercase tracking-wider hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <Play className="mr-3 w-5 h-5 fill-current" />
                      Book a Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-black/95 border-primary/30 backdrop-blur-2xl overflow-hidden rounded-[2rem] shadow-[0_0_100px_rgba(220,38,38,0.3)]">
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
                          preload="metadata"
                        >
                          <source src="/images/video_promo.mp4" type="video/mp4" />
                          <track kind="captions" src="/captions/video_promo.vtt" srcLang="en" label="English" />
                        </video>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-muted-foreground text-xs md:text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Setup in 5 minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Orb Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <FuturisticOrb />
          </motion.div>
        </div>

        {/* Stats HUD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 md:mt-20"
        >
          <StatsHUD />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-[10px] font-bold mb-2 uppercase tracking-[0.3em]">Explore Features</span>
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
