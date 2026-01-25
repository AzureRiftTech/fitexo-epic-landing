import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, Heart, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue by 40%',
    description: 'Our clients see an average 40% revenue increase within the first year through better retention and upselling.',
    metric: '+40%',
    color: 'from-primary to-red-400',
  },
  {
    icon: Clock,
    title: 'Save 15+ Hours Weekly',
    description: 'Automate administrative tasks and focus on what matters most - your members and their fitness goals.',
    metric: '15h+',
    color: 'from-amber-500 to-orange-400',
  },
  {
    icon: Heart,
    title: '95% Member Retention',
    description: 'Engagement tools and personalized experiences keep members coming back month after month.',
    metric: '95%',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Rocket,
    title: '3x Faster Growth',
    description: 'Scale your business with data-driven insights and efficient operations that support expansion.',
    metric: '3x',
    color: 'from-blue-500 to-indigo-400',
  },
];

export function BenefitsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="py-32 relative noise-texture overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

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
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Benefits That
            <br />
            <span className="gradient-text-red">Drive Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of gym owners who have transformed their business with Fitexo's 
            comprehensive management platform.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, { once: true, margin: '-100px' });

            return (
              <motion.div
                key={benefit.title}
                ref={cardRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isCardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-strong rounded-3xl p-8 md:p-10 h-full relative overflow-hidden hover:border-primary/30 transition-all duration-500">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl neo-button flex items-center justify-center group-hover:red-glow transition-all duration-500">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-foreground">
                          {benefit.title}
                        </h3>
                        <span className={`text-4xl font-bold metallic bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                          {benefit.metric}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
