"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight, MessageCircle, Cloud, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/forever',
    description: 'Perfect for small gyms just getting started.',
    members: 'Up to 10 members',
    features: [
      'Website access only',
      'Basic member management',
      'Attendance tracking',
      'Payment records',
      'Email support',
      'Basic reports',
    ],
    cta: 'Start Free',
    popular: false,
    icon: Zap,
    gradient: 'from-muted to-muted/50',
  },
  {
    name: 'Pro',
    price: '₹399',
    period: '/month',
    description: 'For growing gyms ready to scale operations.',
    members: 'Up to 100 members',
    features: [
      'Mobile App access',
      'WhatsApp integration',
      'Advanced scheduling',
      'Custom reports',
      'Priority support',
      'Member portal',
      'Payment reminders',
      'Bulk SMS/Email',
    ],
    cta: 'Get Started',
    popular: true,
    icon: Crown,
    gradient: 'from-primary to-primary/70',
  },
  {
    name: 'Pro+',
    price: '₹699',
    period: '/month',
    description: 'Enterprise features with Cloud Messaging API.',
    members: 'Unlimited members',
    features: [
      'Everything in Pro',
      'Cloud Messaging API',
      'Advanced automation',
      'White-label solution',
      'Multi-branch support',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'Priority phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Rocket,
    gradient: 'from-accent to-accent/70',
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${plan.popular ? 'lg:scale-[1.05] z-10' : ''}`}
    >
      {/* Popular Badge - Clean Style */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="bg-primary text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
            Recommended
          </span>
        </motion.div>
      )}

      <div className={`h-full border p-10 relative overflow-hidden transition-all duration-300 rounded-3xl ${plan.popular
        ? 'bg-secondary/40 border-primary/50 shadow-[0_0_40px_rgba(255,0,0,0.1)]'
        : 'bg-secondary/20 border-white/5 hover:border-white/20'
        }`}>
        <div className="relative z-10">
          {/* Plan Icon */}
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${plan.popular ? 'bg-primary' : 'bg-white/5 border border-white/10'
            }`}>
            <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
          </div>

          {/* Plan Name & Description */}
          <h3 className="text-3xl font-normal text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
          <p className="text-muted-foreground/60 text-xs font-bold uppercase tracking-wide mb-6">{plan.description}</p>

          {/* Members Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${plan.popular ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-white/5 text-muted-foreground border border-white/10'
              }`}>
              <span className="flex items-center gap-2">
                {plan.name === 'Pro' && <MessageCircle className="w-3 h-3" />}
                {plan.name === 'Pro+' && <Cloud className="w-3 h-3" />}
                {plan.name === 'Free' && <Globe className="w-3 h-3" />}
                {plan.members}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-10">
            <span className={`text-6xl font-normal tracking-tighter ${plan.popular ? 'text-primary' : 'text-white'
              }`}>
              {plan.price}
            </span>
            <span className="text-muted-foreground/40 text-sm font-bold uppercase tracking-widest">{plan.period}</span>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-12 border-t border-white/5 pt-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-4 group/item">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${plan.popular ? 'bg-primary' : 'bg-white/20 group-hover/item:bg-primary'
                  }`} />
                <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className={`w-full py-8 rounded-xl text-base font-bold uppercase tracking-[0.1em] transition-all duration-300 ${plan.popular
                ? 'bg-primary text-white hover:bg-primary/90 shadow-xl'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'
                }`}
            >
              {plan.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-40 relative overflow-hidden bg-black/40 border-y border-white/5 bg-mesh">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/[0.05] blur-[250px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1 glow-line opacity-20" />

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
            <span>Pricing Options</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white">
            Choose Your
            <br />
            <span className="text-primary underline decoration-primary/20 underline-offset-8">Perfect Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Simple and transparent pricing with no hidden fees.
            Select the tier that best fits your business needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 border-t border-white/10 pt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            {[
              'NO CREDIT CARD REQUIRED',
              'CANCEL ANYTIME',
              '30-DAY MONEY BACK GUARANTEE'
            ].map((text) => (
              <span key={text} className="flex items-center gap-3 text-muted-foreground/50">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
