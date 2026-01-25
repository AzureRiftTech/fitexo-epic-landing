import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroScene } from './HeroScene';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden noise-texture">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-10" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-20 max-w-7xl mx-auto px-4 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong text-sm font-medium border border-primary/20">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">New</span>
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="text-muted-foreground">#1 Gym Management Platform in India</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black mb-6 leading-[0.9] tracking-tight"
        >
          <span className="text-foreground block">Transform</span>
          <span className="text-foreground block">Your <span className="gradient-text-red red-glow-text inline-block">Gym</span></span>
          <span className="gradient-text-red red-glow-text block">Empire</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          The all-in-one platform to manage memberships, schedule classes, 
          track payments, and grow your fitness business with{' '}
          <span className="text-foreground font-medium">powerful analytics</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="group relative bg-primary text-primary-foreground px-10 py-7 text-lg rounded-2xl font-bold overflow-hidden"
            >
              <span className="absolute inset-0 red-glow-intense" />
              <span className="absolute inset-0 shimmer" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="group glass-strong border-border/50 px-8 py-7 text-lg rounded-2xl font-medium hover:border-primary/50 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 text-primary" />
              Watch Demo
              <span className="ml-2 text-xs text-muted-foreground">(2 min)</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '10K+', label: 'Active Gyms', highlight: true },
            { value: '2M+', label: 'Members Managed', highlight: false },
            { value: '99.9%', label: 'Uptime SLA', highlight: false },
            { value: '4.9★', label: 'User Rating', highlight: true },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className={`glass-strong rounded-2xl p-6 text-center border ${
                stat.highlight ? 'border-primary/30' : 'border-border/30'
              } hover:border-primary/50 transition-colors group`}
            >
              <div className={`text-3xl md:text-4xl font-display font-black mb-1 ${
                stat.highlight ? 'gradient-text-red' : 'text-foreground'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">
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
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium mb-2 uppercase tracking-wider">Explore</span>
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
