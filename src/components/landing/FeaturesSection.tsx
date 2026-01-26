"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users, Calendar, CreditCard, BarChart3,
  MessageSquare, Shield, Smartphone, Zap
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    description: 'Track memberships, attendance, and member progress with our intuitive dashboard.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Automated billing, payment reminders, and multiple payment gateway integrations.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time insights on revenue, retention, and member engagement metrics.',
  },
  {
    icon: Shield,
    title: 'Access Control',
    description: 'Biometric integration, QR codes, and smart locks for secure facility access.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Branded mobile apps for members to book classes and track their fitness journey.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate routine tasks, from renewals to birthday wishes, saving hours weekly.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group"
    >
      <div className="h-full bg-secondary/20 backdrop-blur-sm border border-white/5 p-8 hover:border-primary/40 transition-all duration-300 relative overflow-hidden rounded-2xl group-hover:bg-secondary/40">
        {/* Simple Accent Line */}
        <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />

        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
            <feature.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-normal text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
            {feature.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed text-sm font-medium tracking-tight">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-40 relative overflow-hidden border-y border-white/5 bg-mesh">
      {/* Dynamic Glow Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
            <span>Core Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight text-white uppercase">
            Everything You Need to
            <br />
            <span className="text-primary underline decoration-primary/20 underline-offset-8">Run Your Gym</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            From smart member management to advanced business analytics,
            Fitexo delivers all the tools needed to scale your fitness center.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
