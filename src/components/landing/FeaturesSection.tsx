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
    icon: Calendar,
    title: 'Class Scheduling',
    description: 'Create and manage classes, trainers, and room bookings with drag-and-drop ease.',
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
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Engage members with automated emails, SMS notifications, and in-app messaging.',
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full glass rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 metallic-border relative overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl neo flex items-center justify-center mb-6 group-hover:red-glow transition-all duration-500">
            <feature.icon className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:gradient-text-red transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
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
    <section id="features" className="py-32 relative noise-texture">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
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
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text-red">Run Your Gym</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From member management to advanced analytics, Fitexo provides all the tools 
            you need to streamline operations and maximize growth.
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
