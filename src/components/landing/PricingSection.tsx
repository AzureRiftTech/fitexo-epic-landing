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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${plan.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold red-glow shadow-2xl">
            <Crown className="w-4 h-4" />
            Most Popular
          </span>
        </motion.div>
      )}
      
      <div className={`h-full rounded-3xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500 ${
        plan.popular 
          ? 'glass-strong border-2 border-primary/40 red-glow scale-[1.02]' 
          : 'glass border border-border/50 hover:border-primary/30'
      }`}>
        {/* Background Glow for Popular */}
        {plan.popular && (
          <div className="absolute inset-0 bg-gradient-radial from-primary/15 to-transparent" />
        )}
        
        <div className="relative z-10">
          {/* Plan Icon */}
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
            plan.popular 
              ? 'bg-gradient-to-br from-primary to-primary/80 red-glow' 
              : 'neo bg-secondary'
          }`}>
            <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
          
          {/* Plan Name & Description */}
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">{plan.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
          
          {/* Members Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${
            plan.popular 
              ? 'bg-primary/20 text-primary' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {plan.name === 'Pro' && <MessageCircle className="w-3 h-3" />}
            {plan.name === 'Pro+' && <Cloud className="w-3 h-3" />}
            {plan.name === 'Free' && <Globe className="w-3 h-3" />}
            {plan.members}
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-1 mb-8">
            <span className={`text-5xl lg:text-6xl font-display font-black ${
              plan.popular ? 'gradient-text-red' : 'text-foreground'
            }`}>
              {plan.price}
            </span>
            <span className="text-muted-foreground text-lg">{plan.period}</span>
          </div>
          
          {/* Features */}
          <ul className="space-y-3 mb-10">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  plan.popular ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <span className="text-foreground/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className={`w-full py-6 rounded-2xl text-base font-bold transition-all duration-300 group/btn ${
                plan.popular
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 red-glow-intense shimmer'
                  : 'neo-button bg-secondary text-foreground hover:text-primary border border-border/50'
              }`}
            >
              {plan.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
    <section id="pricing" className="py-32 relative noise-texture">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-semibold text-primary mb-6 border border-primary/20"
          >
            <Zap className="w-4 h-4" />
            Simple Pricing
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight">
            Choose Your
            <br />
            <span className="gradient-text-red">Perfect Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Start free and scale as your gym grows.
            <span className="block mt-2 text-primary font-medium">14-day free trial on all paid plans.</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              30-day money back
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
