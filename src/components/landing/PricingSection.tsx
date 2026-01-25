import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    price: '$149',
    period: '/month',
    description: 'Perfect for small gyms just getting started.',
    features: [
      'Up to 200 members',
      'Basic scheduling',
      'Payment processing',
      'Email support',
      'Mobile app access',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Pro',
    price: '$399',
    period: '/month',
    description: 'For growing gyms ready to scale operations.',
    features: [
      'Up to 1,000 members',
      'Advanced scheduling',
      'Multi-location support',
      'Priority support',
      'Custom branded app',
      'Advanced analytics',
      'API access',
      'Marketing automation',
    ],
    cta: 'Get Started',
    popular: true,
    icon: Crown,
  },
  {
    name: 'Pro+',
    price: '$699',
    period: '/month',
    description: 'Enterprise-grade features for large fitness chains.',
    features: [
      'Unlimited members',
      'Unlimited locations',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
      'On-site training',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Crown,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold red-glow">
            Most Popular
          </span>
        </div>
      )}
      
      <div className={`h-full rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 ${
        plan.popular 
          ? 'glass-strong border-primary/30 red-glow' 
          : 'glass hover:border-primary/20'
      }`}>
        {/* Background Glow for Popular */}
        {plan.popular && (
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
        )}
        
        <div className="relative z-10">
          {/* Plan Icon */}
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
            plan.popular ? 'bg-primary red-glow' : 'neo'
          }`}>
            <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
          
          {/* Plan Name */}
          <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
          <p className="text-muted-foreground mb-6">{plan.description}</p>
          
          {/* Price */}
          <div className="flex items-baseline gap-1 mb-8">
            <span className={`text-5xl font-bold ${plan.popular ? 'gradient-text-red' : 'text-foreground'}`}>
              {plan.price}
            </span>
            <span className="text-muted-foreground">{plan.period}</span>
          </div>
          
          {/* Features */}
          <ul className="space-y-4 mb-10">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <Button
            className={`w-full py-6 rounded-2xl text-lg font-semibold transition-all duration-300 group/btn ${
              plan.popular
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 red-glow-intense shimmer'
                : 'neo-button bg-secondary text-foreground hover:text-primary'
            }`}
          >
            {plan.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-32 relative noise-texture">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your
            <br />
            <span className="gradient-text-red">Perfect Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start with a 14-day free trial 
            and upgrade anytime as your gym grows.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            💰 30-day money-back guarantee • No credit card required for trial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
