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
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] font-normal mb-8 leading-[1] tracking-tight text-white"
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
            <Button
              size="lg"
              className="group relative bg-primary text-white px-12 py-8 text-xl rounded-lg font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-primary/90"
            >
              <span className="relative flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                START FREE TRIAL
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="group border-white/20 bg-white/5 backdrop-blur-sm px-10 py-8 text-xl rounded-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <Play className="mr-3 w-6 h-6 fill-current" />
              WATCH DEMO
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats - Clean Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { value: '10K+', label: 'ACTIVE GYMS', highlight: true },
            { value: '2M+', label: 'MEMBERS MANAGED', highlight: false },
            { value: '99.9%', label: 'SERVER UPTIME', highlight: false },
            { value: '4.9★', label: 'USER RATING', highlight: true },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-8 text-center bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <div className={`text-4xl md:text-5xl font-normal mb-2 tracking-tight ${stat.highlight ? 'text-primary' : 'text-foreground'
                }`}>
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-[10px] font-black mb-2 uppercase tracking-[0.3em]">Deploy</span>
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
