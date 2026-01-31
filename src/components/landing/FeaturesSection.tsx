"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users, CreditCard, BarChart3,
  Shield, Smartphone, Zap, Brain, Dumbbell
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart Member Management',
    description: 'AI-powered member tracking with automated attendance, progress monitoring, and personalized engagement.',
    gradient: 'from-red-500/20 to-transparent',
  },
  {
    icon: Dumbbell,
    title: 'Attendance & Workout Tracking',
    description: 'Biometric integration with real-time check-ins, workout logging, and performance analytics.',
    gradient: 'from-orange-500/20 to-transparent',
  },
  {
    icon: Shield,
    title: 'Trainer & Staff Control',
    description: 'Complete staff management with scheduling, commission tracking, and performance reviews.',
    gradient: 'from-yellow-500/20 to-transparent',
  },
  {
    icon: CreditCard,
    title: 'Subscription & Payment Automation',
    description: 'Automated billing, UPI integration, WhatsApp reminders, and GST-compliant invoicing.',
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics Dashboard',
    description: 'Real-time insights with revenue tracking, retention metrics, and predictive analytics.',
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    icon: Brain,
    title: 'AI-Powered Fitness Insights',
    description: 'Machine learning recommendations for member retention, workout optimization, and business growth.',
    gradient: 'from-purple-500/20 to-transparent',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      {/* Glass Card with Neon Border */}
      <div className="relative h-full p-8 glass-card rounded-3xl overflow-hidden transition-all duration-500 feature-card-glow">
        {/* Neon corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl transition-colors duration-300 group-hover:border-primary/80" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-3xl transition-colors duration-300 group-hover:border-primary/80" />
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000" />
        </div>

        <div className="relative z-10">
          {/* Icon with glow */}
          <div className="relative w-16 h-16 mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {feature.description}
          </p>

          {/* Learn more link */}
          <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
            <span className="text-xs font-bold uppercase tracking-wider">Learn More</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Glow elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-28"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Core Features</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-white">Everything You Need to</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary">
              Dominate Your Market
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From smart member management to AI-powered analytics,
            Fitexo delivers enterprise-grade tools for elite fitness brands.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
